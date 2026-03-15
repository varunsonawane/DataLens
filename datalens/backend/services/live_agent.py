"""
Gemini Live API voice agent for DataLens, orchestrated with Google ADK.

Architecture
------------
* DataLensLiveAgent holds per-session state (session data, ADK agent, story context).
* ADK Agent wraps three FunctionTool calls:
    - retrieve_context  → RAG retrieval
    - generate_visual   → Nano Banana Pro image generation
    - get_story_format  → return full ELI5 / architecture / analyst story text
* process_text_message() runs the ADK agent for text turns and yields structured
  response chunks.
* start_live_session() opens a bidirectional Gemini Live API connection for audio.
* get_or_create_agent() / cleanup_agent() manage a process-level registry so
  agent state (including pre-loaded RAG context) is reused across WebSocket
  reconnections.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
from typing import AsyncGenerator, Optional

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Google GenAI / ADK imports — graceful fallback when not installed
# ---------------------------------------------------------------------------

try:
    from google import genai
    from google.genai import types as genai_types

    _genai_available = True
except ImportError:
    logger.warning("google-genai not installed — live agent will run in stub mode.")
    _genai_available = False
    genai = None  # type: ignore
    genai_types = None  # type: ignore

try:
    from google.adk.agents import LlmAgent
    from google.adk.tools import FunctionTool
    from google.adk.runners import Runner
    from google.adk.sessions import InMemorySessionService
    from google.genai import types as adk_genai_types

    _adk_available = True
except ImportError:
    logger.warning("google-adk not installed — ADK features will be disabled.")
    _adk_available = False
    LlmAgent = None  # type: ignore
    FunctionTool = None  # type: ignore
    Runner = None  # type: ignore
    InMemorySessionService = None  # type: ignore

# Internal service imports
from services.rag_pipeline import rag_pipeline
from services.gcs_service import load_session, append_conversation_message

# ---------------------------------------------------------------------------
# GenAI client (singleton)
# ---------------------------------------------------------------------------

_genai_client = None


def _get_genai_client():
    global _genai_client
    if _genai_client is None and _genai_available:
        api_key = os.environ.get("GENAI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
        if api_key:
            _genai_client = genai.Client(api_key=api_key)
        else:
            _genai_client = genai.Client(
                vertexai=True,
                project=os.environ.get("GOOGLE_CLOUD_PROJECT"),
                location=os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1"),
            )
    return _genai_client


# ---------------------------------------------------------------------------
_TEXT_MODEL = "gemini-2.5-flash"
_LIVE_MODEL = os.environ.get("DATALENS_LIVE_MODEL", "gemini-2.5-flash")

# ---------------------------------------------------------------------------
# Tool functions
# ---------------------------------------------------------------------------


async def retrieve_context(query: str, session_id: str, target_session_id: str = "") -> str:
    """
    RAG retrieval tool — queries all three index namespaces and returns
    concatenated context text grounded in the actual dataset / stories.

    Parameters
    ----------
    query : str
        Natural-language question or topic to retrieve context for.
    session_id : str
        The DataLens session whose indexes are searched.
    target_session_id : str
        An optional specific session ID to search instead of the current one.

    Returns
    -------
    str
        Concatenated chunk texts separated by double newlines.
        Returns an explanatory message when no results are found.
    """
    try:
        actual_session_id = target_session_id if target_session_id else session_id
        results = await rag_pipeline.retrieve(query, actual_session_id, top_k=8)
        if not results:
            return "No relevant context found for this query in the dataset."
        parts = []
        for chunk in results:
            content = chunk.get("content", "").strip()
            if content:
                parts.append(content)
        return "\n\n".join(parts) if parts else "No relevant context found."
    except Exception as exc:
        logger.error("retrieve_context error (session=%s): %s", session_id, exc)
        return f"Context retrieval failed: {exc}"


async def generate_visual(prompt: str, session_id: str, story_context: str = "", target_session_id: str = "") -> dict:
    """
    Image generation tool — calls Nano Banana Pro (gemini-3-pro-image-preview)
    to create a new visualisation on demand.

    Parameters
    ----------
    prompt : str
        Descriptive text prompt for the image.
    session_id : str
        Session ID used to construct the GCS image path.
    story_context : str
        Additional context from the current story to enrich the prompt.
    target_session_id : str
        An optional specific session ID to construct the image path.

    Returns
    -------
    dict
        {"url": str, "prompt": str} — GCS URL of the generated image.
    """
    try:
        from services.nano_banana import generate_image_on_demand

        actual_session_id = target_session_id if target_session_id else session_id
        url = await generate_image_on_demand(prompt, actual_session_id, story_context)
        return {"url": url, "prompt": prompt}
    except Exception as exc:
        logger.error("generate_visual error (session=%s): %s", session_id, exc)
        return {"url": "", "prompt": prompt, "error": str(exc)}


async def get_story_format(format_name: str, session_id: str, target_session_id: str = "") -> str:
    """
    Return the full text of a specific story format.

    Parameters
    ----------
    format_name : str
        One of "eli5", "architecture", or "analyst".
    session_id : str
        Session to load from GCS.
    target_session_id : str
        An optional specific session ID to load from GCS instead.

    Returns
    -------
    str
        The story text, or an explanatory message when not available.
    """
    valid_formats = ("eli5", "architecture", "analyst")
    if format_name not in valid_formats:
        return f"Invalid format '{format_name}'. Valid options: {', '.join(valid_formats)}."

    try:
        actual_session_id = target_session_id if target_session_id else session_id
        session = await load_session(actual_session_id)
        if session is None:
            return "Session not found."
        stories = session.get("stories")
        if not stories or not isinstance(stories, dict):
            return "Stories not yet generated for this session."
        text = stories.get(format_name, "")
        return text if text else f"The {format_name} story has not been generated yet."
    except Exception as exc:
        logger.error("get_story_format error (session=%s, fmt=%s): %s", session_id, format_name, exc)
        return f"Failed to retrieve {format_name} story: {exc}"


# ---------------------------------------------------------------------------
# DataLensLiveAgent
# ---------------------------------------------------------------------------


class DataLensLiveAgent:
    """
    Per-session agent instance that manages ADK orchestration and the
    Gemini Live API bidirectional session for voice streaming.
    """

    def __init__(self, session_id: str) -> None:
        self.session_id: str = session_id
        self.session_data: Optional[dict] = None
        self.story_context: str = ""
        self._initial_context: str = ""
        self._system_prompt: str = ""

        # ADK runner components (initialised in initialize())
        self._adk_session_service: Optional[object] = None
        self._adk_runner: Optional[object] = None
        self._adk_user_id: str = f"user_{session_id}"
        self._adk_session_id: str = f"adk_{session_id}_fresh"

    # ------------------------------------------------------------------
    # Initialisation
    # ------------------------------------------------------------------

    async def initialize(self) -> None:
        """
        Load session data, pre-fetch RAG context, build system prompt, and
        initialise the ADK agent + runner.
        """
        # Load session from GCS / local fallback
        self.session_data = await load_session(self.session_id)

        # Build a rich story context string for the system prompt
        if self.session_data and self.session_data.get("stories"):
            stories = self.session_data["stories"]
            eli5_preview = (stories.get("eli5") or "")[:500]
            arch_preview = (stories.get("architecture") or "")[:500]
            analyst_preview = (stories.get("analyst") or "")[:500]
            self.story_context = (
                f"ELI5 Story (preview): {eli5_preview}...\n\n"
                f"Architecture Story (preview): {arch_preview}...\n\n"
                f"Analyst Story (preview): {analyst_preview}..."
            )

        # Pre-retrieve initial context from RAG
        try:
            initial_chunks = await rag_pipeline.retrieve(
                "overview summary key insights statistics",
                self.session_id,
                top_k=5,
            )
            self._initial_context = "\n\n".join(
                c.get("content", "") for c in initial_chunks if c.get("content")
            )
        except Exception as exc:
            logger.warning("Failed to pre-fetch RAG context for session %s: %s", self.session_id, exc)
            self._initial_context = ""

        # Build system prompt
        self._system_prompt = self._build_system_prompt()

        # Initialise ADK agent and runner
        if _adk_available:
            await self._init_adk_agent()
        else:
            logger.warning(
                "ADK not available for session %s — text responses will use direct GenAI calls.",
                self.session_id,
            )

        logger.info("DataLensLiveAgent initialised for session %s.", self.session_id)

    def _build_system_prompt(self) -> str:
        """Construct the full system prompt incorporating session context."""
        if self.session_id == "global_agent":
            return f"""You are the DataLens Global AI Assistant. You are a highly intelligent data analyst and storyteller.
You have access to ALL datasets the user has ever uploaded and analyzed.

You have access to three powerful tools. When the user mentions a specific Dataset or Session ID, you MUST extract it and pass it to the target_session_id argument:
1. retrieve_context(query, target_session_id) — Search for facts, statistics or patterns across datasets. Pass target_session_id if specified.
2. generate_visual(prompt, story_context, target_session_id) — Create a new data visualization or illustration for a specific session.
3. get_story_format(format_name, target_session_id) — Retrieve specific story formats.

Guidelines for voice and text responses:
- You are a global assistant. Do not pretend to be analyzing a single dataset unless asked specifically about one, in which case extract the Session ID from the prompt and use it for your tools.
- You can compare different datasets if asked.
- Be concise, conversational, and enthusiastic.
- Ground all factual claims via retrieve_context.

The current session ID is: {self.session_id}
"""
        
        filename = "Unknown"
        shape_summary = "{}"
        if self.session_data:
            filename = self.session_data.get("filename", "Unknown")
            profile = self.session_data.get("data_profile") or {}
            shape = profile.get("shape") or {}
            shape_summary = json.dumps(shape)

        return f"""You are DataLens, an expert AI data analyst and storyteller with a warm, engaging voice.
You have fully analyzed a dataset and generated rich narrative stories about it.

Dataset: {filename}
Shape: {shape_summary}

Key Context (from dataset analysis):
{self._initial_context}

Story Summaries:
{self.story_context}

You have access to three powerful tools:
1. retrieve_context(query, target_session_id) — Search for specific facts, statistics, or patterns from the dataset and generated stories.
2. generate_visual(prompt, story_context, target_session_id) — Create a new data visualization or illustration on demand.
3. get_story_format(format_name, target_session_id) — Retrieve the complete ELI5, architecture, or analyst story text.

Guidelines for voice responses:
- Be concise: 2–3 sentences max unless the user explicitly asks for detail.
- Be conversational and enthusiastic — you love data.
- When asked to generate an image, describe what you are creating, then generate it.
- Ground all factual claims in the actual dataset via retrieve_context.
- Proactively surface interesting patterns or anomalies you have noticed.
- When citing numbers, round to 2 decimal places for readability.

The current session ID is: {self.session_id}
"""

    async def _build_system_instruction(self) -> str:
        """Return the system instruction string (used by the Live API connection)."""
        return self._system_prompt

    async def _init_adk_agent(self) -> None:
        """Build the ADK LlmAgent, InMemorySessionService, and Runner."""
        try:
            # ADK needs GOOGLE_API_KEY env var to find the Google AI credentials.
            # Mirror GENAI_API_KEY into GOOGLE_API_KEY if not already set.
            api_key = os.environ.get("GENAI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
            if api_key and not os.environ.get("GOOGLE_API_KEY"):
                os.environ["GOOGLE_API_KEY"] = api_key

            # Wrap the three tool functions as ADK FunctionTools.
            # Each tool is bound with the session_id baked in via a closure.
            session_id = self.session_id

            async def _retrieve_context_tool(query: str, target_session_id: str = "") -> str:
                return await retrieve_context(query, session_id, target_session_id)

            async def _generate_visual_tool(prompt: str, story_context: str = "", target_session_id: str = "") -> dict:
                return await generate_visual(prompt, session_id, story_context, target_session_id)

            async def _get_story_format_tool(format_name: str, target_session_id: str = "") -> str:
                return await get_story_format(format_name, session_id, target_session_id)

            tools = [
                FunctionTool(_retrieve_context_tool),
                FunctionTool(_generate_visual_tool),
                FunctionTool(_get_story_format_tool),
            ]

            agent = LlmAgent(
                name="DataLens",
                model=_TEXT_MODEL,
                description="DataLens AI data analyst and storyteller",
                instruction=self._system_prompt,
                tools=tools,
            )

            self._adk_session_service = InMemorySessionService()
            self._adk_runner = Runner(
                agent=agent,
                app_name="DataLens",
                session_service=self._adk_session_service,
            )

            # Create an ADK session for this user
            await self._adk_session_service.create_session(
                app_name="DataLens",
                user_id=self._adk_user_id,
                session_id=self._adk_session_id,
            )

            logger.debug("ADK agent initialised for session %s.", self.session_id)
        except Exception as exc:
            logger.error("Failed to initialise ADK agent for session %s: %s", self.session_id, exc)
            self._adk_runner = None

    # ------------------------------------------------------------------
    # Text message processing
    # ------------------------------------------------------------------

    async def process_text_message(self, text: str) -> AsyncGenerator[dict, None]:
        """
        Process a text message from the user and yield structured response chunks.

        Yields
        ------
        dict
            One of:
            - {"type": "text_response", "content": str}   — narrative response fragment
            - {"type": "new_image", "url": str, "prompt": str}  — new image generated
            - {"type": "error", "message": str}           — processing error
        """
        # Persist the user message to conversation history
        await append_conversation_message(
            self.session_id,
            {"role": "user", "content": text},
        )

        if _adk_available and self._adk_runner is not None:
            async for chunk in self._process_with_adk(text):
                yield chunk
        elif _genai_available:
            async for chunk in self._process_with_genai_direct(text):
                yield chunk
        else:
            yield {
                "type": "error",
                "message": "AI backend not available. Please check your google-genai installation.",
            }

    async def _process_with_adk(self, text: str) -> AsyncGenerator[dict, None]:
        """Run the ADK agent and stream back results."""
        try:
            from google.adk.agents.run_config import RunConfig, StreamingMode
            from google.genai import types as adk_types

            user_content = adk_types.Content(
                role="user",
                parts=[adk_types.Part(text=text)],
            )

            full_response_text = ""
            new_images: list[dict] = []

            run_config = RunConfig(streaming_mode=StreamingMode.SSE)

            async for event in self._adk_runner.run_async(
                user_id=self._adk_user_id,
                session_id=self._adk_session_id,
                new_message=user_content,
                run_config=run_config,
            ):
                if hasattr(event, "content") and event.content:
                    content = event.content
                    if hasattr(content, "parts"):
                        for part in content.parts:
                            if hasattr(part, "text") and part.text:
                                # Ignore final fully compiled event to prevent duplicating text
                                is_final_func = getattr(event, "is_final_response", None)
                                if is_final_func and callable(is_final_func) and is_final_func():
                                    continue
                                full_response_text += part.text
                                yield {"type": "text_response", "content": part.text}
                            elif hasattr(part, "function_response") and part.function_response:
                                # Check if this was a generate_visual call
                                fn_resp = part.function_response
                                if (
                                    hasattr(fn_resp, "name")
                                    and fn_resp.name in ("_generate_visual_tool", "generate_visual")
                                    and hasattr(fn_resp, "response")
                                    and isinstance(fn_resp.response, dict)
                                    and fn_resp.response.get("url")
                                ):
                                    img_data = fn_resp.response
                                    new_images.append(img_data)
                                    yield {
                                        "type": "new_image",
                                        "url": img_data["url"],
                                        "prompt": img_data.get("prompt", ""),
                                    }

            # Persist assistant response
            if full_response_text:
                await append_conversation_message(
                    self.session_id,
                    {"role": "assistant", "content": full_response_text},
                )

        except Exception as exc:
            logger.error(
                "_process_with_adk error (session=%s): %s", self.session_id, exc
            )
            
            # If we already streamed text or images, do not fall back as it will duplicate the response!
            if full_response_text or new_images:
                yield {"type": "error", "message": f"Agent stream finished with an error: {exc}"}
                return

            # Fall back to direct GenAI call
            async for chunk in self._process_with_genai_direct(text):
                yield chunk

    async def _process_with_genai_direct(self, text: str) -> AsyncGenerator[dict, None]:
        """
        Direct streaming call to Gemini using the GenAI SDK — used when ADK
        is unavailable or as a fallback.
        """
        client = _get_genai_client()
        if client is None:
            yield {"type": "error", "message": "GenAI client not available."}
            return

        try:
            # Build conversation history for context
            history_msgs = []
            
            # Re-fetch session data to ensure we have the very latest history (including the prompt just sent)
            current_session_data = await load_session(self.session_id)
            if current_session_data:
                conv_history = (current_session_data.get("conversation_history") or [])[-10:]
                for msg in conv_history:
                    role = msg.get("role", "user")
                    content = msg.get("content", "")
                    if content and role != "user" or msg != conv_history[-1]: # avoid duplicating the user prompt we added above
                        history_msgs.append(
                            genai_types.Content(
                                role=role,
                                parts=[genai_types.Part(text=content)],
                            )
                        )

            # Add current user message
            history_msgs.append(
                genai_types.Content(
                    role="user",
                    parts=[genai_types.Part(text=text)],
                )
            )

            full_response = ""
            print(f"DEBUG: Generating content using model={_TEXT_MODEL}")
            async for chunk in await client.aio.models.generate_content_stream(
                model=_TEXT_MODEL,
                contents=history_msgs,
                config=genai_types.GenerateContentConfig(
                    system_instruction=self._system_prompt,
                    temperature=0.7,
                    max_output_tokens=1024,
                ),
            ):
                if chunk.text:
                    full_response += chunk.text
                    yield {"type": "text_response", "content": chunk.text}

            if full_response:
                await append_conversation_message(
                    self.session_id,
                    {"role": "assistant", "content": full_response},
                )

        except Exception as exc:
            logger.error(
                "_process_with_genai_direct error (session=%s): %s", self.session_id, exc
            )
            yield {"type": "error", "message": f"AI processing error: {exc}"}

    # ------------------------------------------------------------------
    # Live API (audio)
    # ------------------------------------------------------------------

    async def start_live_session(self):
        """
        Open a Gemini Live API bidirectional session for audio streaming.

        Returns the live session context manager / handle.
        Callers should use it as an async context manager or call
        ``__aenter__`` / ``__aexit__`` explicitly.
        """
        if not _genai_available:
            raise RuntimeError("google-genai is not installed — Live API unavailable.")

        client = _get_genai_client()
        system_instruction = await self._build_system_instruction()

        config = genai_types.LiveConnectConfig(
            response_modalities=["AUDIO"],
            system_instruction=system_instruction,
            speech_config=genai_types.SpeechConfig(
                voice_config=genai_types.VoiceConfig(
                    prebuilt_voice_config=genai_types.PrebuiltVoiceConfig(
                        voice_name="Aoede",
                    )
                )
            ),
        )

        live_session = client.aio.live.connect(
            model=_LIVE_MODEL,
            config=config,
        )
        return live_session


# ---------------------------------------------------------------------------
# Process-level agent registry
# ---------------------------------------------------------------------------

_agent_sessions: dict[str, DataLensLiveAgent] = {}
_agent_locks: dict[str, asyncio.Lock] = {}


async def get_or_create_agent(session_id: str) -> DataLensLiveAgent:
    """
    Return the existing DataLensLiveAgent for the session, or create and
    initialise a new one.

    Concurrent calls for the same session_id are serialised via a per-session
    asyncio.Lock to prevent duplicate initialisation.
    """
    if session_id in _agent_sessions:
        return _agent_sessions[session_id]

    # Acquire or create a per-session lock
    if session_id not in _agent_locks:
        _agent_locks[session_id] = asyncio.Lock()

    async with _agent_locks[session_id]:
        # Double-checked locking
        if session_id in _agent_sessions:
            return _agent_sessions[session_id]

        agent = DataLensLiveAgent(session_id)
        try:
            await agent.initialize()
        except Exception as exc:
            logger.error(
                "Agent initialisation failed for session %s: %s", session_id, exc
            )
            # Return the partially-initialised agent rather than crashing.

        _agent_sessions[session_id] = agent
        logger.info("Created new agent for session %s.", session_id)
        return agent


async def cleanup_agent(session_id: str) -> None:
    """
    Remove the agent for the given session from the registry and clean up
    any associated ADK session state.
    """
    agent = _agent_sessions.pop(session_id, None)
    _agent_locks.pop(session_id, None)

    if agent is not None and agent._adk_session_service is not None:
        try:
            await agent._adk_session_service.delete_session(
                app_name="DataLens",
                user_id=agent._adk_user_id,
                session_id=agent._adk_session_id,
            )
        except Exception as exc:
            logger.debug(
                "ADK session cleanup error for %s: %s", session_id, exc
            )

    logger.info("Cleaned up agent for session %s.", session_id)
