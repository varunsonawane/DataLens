"""
Stories router — DataLens.

Endpoints:
  POST /stories/generate  — streams SSE story chunks from Gemini
  POST /stories/save      — persists completed stories to GCS
  GET  /stories/{session_id} — loads stories from GCS session
"""

from __future__ import annotations

import json
import logging
from typing import Any, AsyncGenerator

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from sse_starlette.sse import EventSourceResponse

from services.gemini_story import generate_stories_stream
from services.gcs_service import load_session, save_session

logger = logging.getLogger(__name__)

router = APIRouter()

# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class GenerateStoriesRequest(BaseModel):
    session_id: str
    data_profile: dict[str, Any]


class SaveStoriesRequest(BaseModel):
    session_id: str
    eli5: str
    architecture: str
    analyst: str
    chart_data: dict[str, Any] = {}
    images: list[dict[str, Any]] = []


class StoriesResponse(BaseModel):
    session_id: str
    eli5: str
    architecture: str
    analyst: str
    chart_data: dict[str, Any]
    images: list[dict[str, Any]]


# ---------------------------------------------------------------------------
# SSE generator
# ---------------------------------------------------------------------------


async def _story_event_generator(
    data_profile: dict[str, Any],
    session_id: str,
) -> AsyncGenerator[dict[str, Any], None]:
    """
    Wraps generate_stories_stream to yield sse-starlette compatible dicts.
    Each dict must have a 'data' key with a JSON string payload.
    """
    try:
        async for chunk in generate_stories_stream(data_profile, session_id):
            yield {"data": json.dumps(chunk, ensure_ascii=False)}
    except Exception as exc:
        logger.exception(
            "SSE story stream error for session %s", session_id
        )
        error_payload = {"type": "error", "message": str(exc)}
        yield {"data": json.dumps(error_payload)}


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.post("/generate")
async def generate_stories(body: GenerateStoriesRequest):
    """
    Start a streaming SSE response that yields story chunks for the given session.

    The frontend connects via EventSource and receives JSON events of the following types:
      - text            — narrative text fragment
      - image_placeholder — an image is being generated (shows spinner)
      - image_ready     — image URL is available (replaces spinner)
      - section_start   — a new story format section began
      - chart_data      — a Recharts chart spec was extracted
      - complete        — all stories finished; full story dict included
      - error           — something went wrong

    The client should use the EventSource API (or an SSE hook) to consume this stream.
    """
    if not body.session_id:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="session_id is required.",
        )
    if not body.data_profile:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="data_profile is required.",
        )

    return EventSourceResponse(
        _story_event_generator(body.data_profile, body.session_id),
        media_type="text/event-stream",
    )


@router.post("/save", status_code=status.HTTP_200_OK)
async def save_stories(body: SaveStoriesRequest):
    """
    Persist completed stories to the GCS session JSON.

    Called by the frontend after the SSE stream completes, passing the
    accumulated story texts, chart data, and image records.
    """
    session_doc = await load_session(body.session_id)
    if session_doc is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{body.session_id}' not found.",
        )

    # Update the stories section
    session_doc["stories"] = {
        "eli5": body.eli5,
        "architecture": body.architecture,
        "analyst": body.analyst,
        "chart_data": body.chart_data,
    }

    # Merge any new images (avoid duplicates by URL)
    existing_urls = {img.get("url") for img in session_doc.get("images", [])}
    for img in body.images:
        if img.get("url") and img["url"] not in existing_urls:
            session_doc.setdefault("images", []).append(img)
            existing_urls.add(img["url"])

    try:
        await save_session(body.session_id, session_doc)
    except Exception as exc:
        logger.error(
            "Failed to save stories for session %s: %s", body.session_id, exc
        )
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Failed to persist session: {exc}",
        )

    return {
        "status": "saved",
        "session_id": body.session_id,
        "image_count": len(session_doc.get("images", [])),
    }


@router.get("/{session_id}", response_model=StoriesResponse)
async def get_stories(session_id: str):
    """
    Load the stories for an existing session from GCS.

    Returns the three story texts plus chart data and image records.
    """
    session_doc = await load_session(session_id)
    if session_doc is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{session_id}' not found.",
        )

    stories = session_doc.get("stories", {})
    images = session_doc.get("images", [])

    return StoriesResponse(
        session_id=session_id,
        eli5=stories.get("eli5", ""),
        architecture=stories.get("architecture", ""),
        analyst=stories.get("analyst", ""),
        chart_data=stories.get("chart_data", {}),
        images=images,
    )
