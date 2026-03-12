"""
WebSocket router for the Gemini Live API voice / text agent.

Endpoint: WS /ws/agent/{session_id}

Protocol (JSON frames)
----------------------
Client → Server:
  {"type": "text",  "content": "<user message>"}
  {"type": "audio", "data": "<base64-encoded PCM/opus bytes>"}
  {"type": "ping"}

Server → Client:
  {"type": "connected",       "session_id": "<id>"}
  {"type": "text_response",   "content": "<agent text chunk>"}
  {"type": "audio_response",  "data": "<base64 audio bytes>"}
  {"type": "new_image",       "url": "<gcs url>", "prompt": "<prompt>"}
  {"type": "error",           "message": "<description>"}
  {"type": "pong"}

Architecture
------------
Two coroutines run concurrently inside asyncio.gather():

  receive_loop()  — reads WebSocket frames from the client and dispatches them:
                    * text  → DataLensLiveAgent.process_text_message() (text model)
                    * audio → forwarded to the Gemini Live API session
                    * ping  → immediate pong reply

  send_loop()     — drains a shared asyncio.Queue and sends frames to the client;
                    keeps running until a sentinel None is pushed to the queue.

The Gemini Live API session is opened lazily on the first audio frame to avoid
incurring the connection cost when the user only interacts via text.
"""

from __future__ import annotations

import asyncio
import base64
import json
import logging
from typing import Optional

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from services.live_agent import cleanup_agent, get_or_create_agent

logger = logging.getLogger(__name__)

router = APIRouter()

# Sentinel that signals the send_loop to exit
_STOP_SENTINEL = None


@router.websocket("/ws/agent/{session_id}")
async def agent_websocket(websocket: WebSocket, session_id: str) -> None:
    """
    Bidirectional WebSocket for the DataLens voice / text agent.

    Handles concurrent receive (client → server) and send (server → client)
    loops via asyncio.gather().  Audio frames are proxied to the Gemini Live
    API; text frames are processed by DataLensLiveAgent.process_text_message().
    """
    await websocket.accept()
    logger.info("WebSocket connected: session=%s", session_id)

    # Queue shared between receive_loop and send_loop
    send_queue: asyncio.Queue[Optional[dict]] = asyncio.Queue(maxsize=256)

    # Lazy Gemini Live API session handle (opened on first audio frame)
    live_session_ctx: Optional[object] = None
    live_session: Optional[object] = None
    live_session_lock = asyncio.Lock()

    # ----------------------------------------------------------------
    # Helper: enqueue a frame for the client (non-blocking best-effort)
    # ----------------------------------------------------------------

    async def enqueue(frame: dict) -> None:
        try:
            await asyncio.wait_for(send_queue.put(frame), timeout=5.0)
        except asyncio.TimeoutError:
            logger.warning(
                "send_queue full for session %s — dropping frame type=%s",
                session_id,
                frame.get("type"),
            )
        except Exception as exc:
            logger.error("enqueue error (session=%s): %s", session_id, exc)

    # ----------------------------------------------------------------
    # Helper: open the Gemini Live API session (idempotent)
    # ----------------------------------------------------------------

    async def ensure_live_session() -> Optional[object]:
        nonlocal live_session_ctx, live_session
        async with live_session_lock:
            if live_session is not None:
                return live_session
            try:
                agent = await get_or_create_agent(session_id)
                live_session_ctx = agent.start_live_session()
                live_session = await live_session_ctx.__aenter__()
                logger.info("Gemini Live API session opened for %s.", session_id)

                # Spawn a task that drains audio responses from the Live session
                asyncio.create_task(
                    _drain_live_responses(live_session, send_queue, session_id)
                )
                return live_session
            except Exception as exc:
                logger.error(
                    "Failed to open Gemini Live API session for %s: %s", session_id, exc
                )
                await enqueue(
                    {"type": "error", "message": f"Audio session unavailable: {exc}"}
                )
                return None

    # ----------------------------------------------------------------
    # Send initial "connected" frame
    # ----------------------------------------------------------------

    await enqueue({"type": "connected", "session_id": session_id})

    # ----------------------------------------------------------------
    # Receive loop — reads from the WebSocket
    # ----------------------------------------------------------------

    async def receive_loop() -> None:
        try:
            while True:
                try:
                    raw = await websocket.receive_text()
                except WebSocketDisconnect:
                    logger.info("Client disconnected (receive): session=%s", session_id)
                    break
                except Exception as exc:
                    logger.error(
                        "WebSocket receive error (session=%s): %s", session_id, exc
                    )
                    break

                try:
                    msg = json.loads(raw)
                except json.JSONDecodeError as exc:
                    await enqueue({"type": "error", "message": f"Invalid JSON: {exc}"})
                    continue

                msg_type = msg.get("type", "")

                if msg_type == "ping":
                    await enqueue({"type": "pong"})

                elif msg_type == "text":
                    content = msg.get("content", "").strip()
                    if not content:
                        await enqueue(
                            {"type": "error", "message": "Empty text message."}
                        )
                        continue
                    # Process asynchronously so we can keep receiving while responding
                    asyncio.create_task(
                        _handle_text_message(content, session_id, send_queue)
                    )

                elif msg_type == "audio":
                    audio_b64 = msg.get("data", "")
                    if not audio_b64:
                        continue
                    try:
                        audio_bytes = base64.b64decode(audio_b64)
                    except Exception as exc:
                        await enqueue(
                            {"type": "error", "message": f"Invalid base64 audio: {exc}"}
                        )
                        continue

                    ls = await ensure_live_session()
                    if ls is not None:
                        asyncio.create_task(
                            _forward_audio_to_live(audio_bytes, ls, session_id)
                        )

                else:
                    logger.debug(
                        "Unknown WebSocket message type '%s' from session %s",
                        msg_type,
                        session_id,
                    )
                    await enqueue(
                        {
                            "type": "error",
                            "message": f"Unknown message type: '{msg_type}'",
                        }
                    )
        finally:
            # Signal the send_loop to stop
            await send_queue.put(_STOP_SENTINEL)

    # ----------------------------------------------------------------
    # Send loop — drains send_queue and writes to the WebSocket
    # ----------------------------------------------------------------

    async def send_loop() -> None:
        try:
            while True:
                try:
                    frame = await asyncio.wait_for(send_queue.get(), timeout=30.0)
                except asyncio.TimeoutError:
                    # Send a keepalive ping to prevent idle timeout
                    try:
                        await websocket.send_json({"type": "pong"})
                    except Exception:
                        break
                    continue

                if frame is _STOP_SENTINEL:
                    break

                try:
                    await websocket.send_json(frame)
                except WebSocketDisconnect:
                    logger.info("Client disconnected (send): session=%s", session_id)
                    break
                except Exception as exc:
                    logger.error(
                        "WebSocket send error (session=%s): %s", session_id, exc
                    )
                    break
        except Exception as exc:
            logger.error("send_loop fatal error (session=%s): %s", session_id, exc)

    # ----------------------------------------------------------------
    # Run both loops concurrently
    # ----------------------------------------------------------------

    try:
        await asyncio.gather(receive_loop(), send_loop())
    except Exception as exc:
        logger.error("agent_websocket gather error (session=%s): %s", session_id, exc)
    finally:
        # Close the Gemini Live API session if it was opened
        if live_session_ctx is not None and live_session is not None:
            try:
                await live_session_ctx.__aexit__(None, None, None)
                logger.info("Gemini Live API session closed for %s.", session_id)
            except Exception as exc:
                logger.debug(
                    "Error closing Live API session for %s: %s", session_id, exc
                )
        await cleanup_agent(session_id)
        logger.info("WebSocket handler exited: session=%s", session_id)


# ---------------------------------------------------------------------------
# Helper coroutines (run as asyncio tasks)
# ---------------------------------------------------------------------------


async def _handle_text_message(
    content: str,
    session_id: str,
    send_queue: asyncio.Queue,
) -> None:
    """
    Process a user text message with DataLensLiveAgent and push response
    chunks onto the send_queue.
    Sends a `text_done` frame after all chunks so the client can assemble
    a single coherent message bubble.
    """
    try:
        agent = await get_or_create_agent(session_id)
        async for chunk in agent.process_text_message(content):
            try:
                await asyncio.wait_for(send_queue.put(chunk), timeout=5.0)
            except asyncio.TimeoutError:
                logger.warning(
                    "send_queue full in _handle_text_message (session=%s)", session_id
                )
        # Signal end of this response so the frontend can show a single bubble
        await send_queue.put({"type": "text_done"})
    except Exception as exc:
        logger.error(
            "_handle_text_message error (session=%s): %s", session_id, exc
        )
        try:
            await send_queue.put(
                {"type": "error", "message": f"Text processing error: {exc}"}
            )
        except Exception:
            pass



async def _forward_audio_to_live(
    audio_bytes: bytes,
    live_session: object,
    session_id: str,
) -> None:
    """
    Send raw audio bytes to the Gemini Live API session.
    The Live API expects PCM 16kHz 16-bit mono audio in real-time.
    """
    try:
        from google.genai import types as genai_types

        audio_chunk = genai_types.Blob(
            data=audio_bytes,
            mime_type="audio/pcm;rate=16000",
        )
        realtime_input = genai_types.RealtimeInput(
            audio=genai_types.LiveClientRealtimeInput(audio=audio_chunk)
        )
        await live_session.send(input=realtime_input)
    except Exception as exc:
        logger.error(
            "_forward_audio_to_live error (session=%s): %s", session_id, exc
        )


async def _drain_live_responses(
    live_session: object,
    send_queue: asyncio.Queue,
    session_id: str,
) -> None:
    """
    Continuously reads responses from the Gemini Live API session and
    pushes them onto the send_queue.

    The Live API yields:
    - Audio data (PCM bytes) → base64-encode and send as "audio_response"
    - Text transcripts       → send as "text_response"
    - Tool calls             → execute and send result back to Live session
    """
    try:
        async for response in live_session.receive():
            if response is None:
                continue

            # ---- Audio data ----
            server_content = getattr(response, "server_content", None)
            if server_content is not None:
                model_turn = getattr(server_content, "model_turn", None)
                if model_turn is not None:
                    parts = getattr(model_turn, "parts", []) or []
                    for part in parts:
                        # Inline audio data
                        inline_data = getattr(part, "inline_data", None)
                        if inline_data is not None:
                            audio_bytes = getattr(inline_data, "data", None)
                            if audio_bytes:
                                encoded = base64.b64encode(audio_bytes).decode("ascii")
                                try:
                                    await asyncio.wait_for(
                                        send_queue.put(
                                            {"type": "audio_response", "data": encoded}
                                        ),
                                        timeout=5.0,
                                    )
                                except asyncio.TimeoutError:
                                    logger.warning(
                                        "send_queue full — dropping audio frame (session=%s)",
                                        session_id,
                                    )

                        # Text part (transcript or text response)
                        text = getattr(part, "text", None)
                        if text:
                            try:
                                await asyncio.wait_for(
                                    send_queue.put(
                                        {"type": "text_response", "content": text}
                                    ),
                                    timeout=5.0,
                                )
                            except asyncio.TimeoutError:
                                pass

            # ---- Tool calls from Live API ----
            tool_call = getattr(response, "tool_call", None)
            if tool_call is not None:
                function_calls = getattr(tool_call, "function_calls", []) or []
                for fc in function_calls:
                    asyncio.create_task(
                        _execute_live_tool_call(fc, live_session, send_queue, session_id)
                    )

    except Exception as exc:
        logger.error(
            "_drain_live_responses error (session=%s): %s", session_id, exc
        )
        try:
            await send_queue.put(
                {"type": "error", "message": f"Live audio stream error: {exc}"}
            )
        except Exception:
            pass


async def _execute_live_tool_call(
    function_call,
    live_session: object,
    send_queue: asyncio.Queue,
    session_id: str,
) -> None:
    """
    Execute a tool call requested by the Gemini Live API and return the
    result back to the Live session.

    Supports: retrieve_context, generate_visual, get_story_format.
    """
    from services.live_agent import (
        generate_visual,
        get_story_format,
        retrieve_context,
    )

    fn_name = getattr(function_call, "name", "")
    fn_args = getattr(function_call, "args", {}) or {}
    fn_id = getattr(function_call, "id", "")

    try:
        if fn_name == "retrieve_context":
            result = await retrieve_context(
                query=fn_args.get("query", ""),
                session_id=session_id,
            )
            response_payload = {"context": result}

        elif fn_name == "generate_visual":
            result = await generate_visual(
                prompt=fn_args.get("prompt", ""),
                session_id=session_id,
                story_context=fn_args.get("story_context", ""),
            )
            response_payload = result
            # Notify the frontend about the new image
            if result.get("url"):
                try:
                    await send_queue.put(
                        {
                            "type": "new_image",
                            "url": result["url"],
                            "prompt": result.get("prompt", ""),
                        }
                    )
                except Exception:
                    pass

        elif fn_name == "get_story_format":
            result = await get_story_format(
                format_name=fn_args.get("format_name", "eli5"),
                session_id=session_id,
            )
            response_payload = {"story": result}

        else:
            logger.warning(
                "Unknown tool call '%s' from Live API (session=%s)", fn_name, session_id
            )
            response_payload = {"error": f"Unknown tool: {fn_name}"}

        # Send the tool response back to the Live API
        try:
            from google.genai import types as genai_types

            tool_response = genai_types.LiveClientToolResponse(
                function_responses=[
                    genai_types.FunctionResponse(
                        id=fn_id,
                        name=fn_name,
                        response=response_payload,
                    )
                ]
            )
            await live_session.send(input=tool_response)
        except Exception as exc:
            logger.error(
                "_execute_live_tool_call: failed to send tool response back to Live API "
                "(session=%s, fn=%s): %s",
                session_id,
                fn_name,
                exc,
            )

    except Exception as exc:
        logger.error(
            "_execute_live_tool_call error (session=%s, fn=%s): %s",
            session_id,
            fn_name,
            exc,
        )
