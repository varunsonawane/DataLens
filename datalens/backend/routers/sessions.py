"""
Sessions router — CRUD operations for DataLens session persistence.

Endpoints
---------
GET    /sessions                       List all sessions (sidebar metadata from Firestore)
GET    /sessions/{session_id}          Load full session JSON from GCS
POST   /sessions/{session_id}          Save / upsert a full session (called after story gen)
DELETE /sessions/{session_id}          Delete from GCS + Firestore
POST   /sessions/{session_id}/message  Append a conversation message
PATCH  /sessions/{session_id}/images   Extend the session's images list
"""

from __future__ import annotations

import logging
from typing import List, Optional

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from services.gcs_service import (
    append_conversation_message,
    delete_session,
    list_sessions,
    load_session,
    save_session,
    update_session_images,
)

logger = logging.getLogger(__name__)

router = APIRouter()


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class SessionListItem(BaseModel):
    """Compact session representation for the sidebar."""

    session_id: str
    filename: str
    created_at: str
    preview_text: str = ""
    image_count: int = 0
    thumbnail_url: Optional[str] = None


class ConversationMessageRequest(BaseModel):
    """Payload for appending a single conversation turn."""

    role: str = Field(..., pattern="^(user|assistant)$")
    content: str = Field(..., min_length=1)
    timestamp: Optional[str] = Field(
        default=None,
        description="ISO-8601 timestamp; server will fill in if omitted.",
    )


class ImageRecord(BaseModel):
    """A single image record to be added to the session."""

    url: str = Field(..., description="Public GCS or file:// URL of the image.")
    prompt: str = Field(..., description="Text prompt used to generate the image.")
    format: str = Field(
        ...,
        description="Story format that triggered the image: eli5 | architecture | analyst.",
    )


class UpdateImagesRequest(BaseModel):
    """Payload for extending the session's images list."""

    images: List[ImageRecord]


class OperationResult(BaseModel):
    """Generic success/failure response."""

    success: bool
    message: Optional[str] = None


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.get(
    "",
    response_model=List[SessionListItem],
    summary="List all sessions",
    description=(
        "Returns a list of all session metadata documents ordered by creation "
        "time (newest first). Data comes from Firestore (or the local JSON index "
        "in local-dev mode)."
    ),
)
async def list_all_sessions() -> List[SessionListItem]:
    """List all sessions from Firestore, ordered by created_at descending."""
    try:
        raw_sessions = await list_sessions()
        return [
            SessionListItem(
                session_id=s.get("session_id", ""),
                filename=s.get("filename", ""),
                created_at=s.get("created_at", ""),
                preview_text=s.get("preview_text", ""),
                image_count=s.get("image_count", 0),
                thumbnail_url=s.get("thumbnail_url"),
            )
            for s in raw_sessions
        ]
    except Exception as exc:
        logger.error("list_all_sessions error: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to list sessions: {exc}",
        )


@router.get(
    "/{session_id}",
    summary="Get full session",
    description="Loads and returns the complete session JSON from GCS.",
)
async def get_session(session_id: str) -> dict:
    """Load full session document from GCS."""
    session = await load_session(session_id)
    if session is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{session_id}' not found.",
        )
    return session


@router.post(
    "/{session_id}",
    response_model=OperationResult,
    status_code=status.HTTP_200_OK,
    summary="Save / upsert session",
    description=(
        "Saves (or overwrites) the full session document in GCS and upserts "
        "its metadata to Firestore. Called by the story generation pipeline "
        "after stories and images have been produced."
    ),
)
async def upsert_session(session_id: str, session: dict) -> OperationResult:
    """Save a full session dict to GCS + Firestore."""
    try:
        success = await save_session(session_id, session)
        if success:
            return OperationResult(success=True)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save session — check server logs.",
            )
    except HTTPException:
        raise
    except Exception as exc:
        logger.error("upsert_session error (id=%s): %s", session_id, exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to save session: {exc}",
        )


@router.delete(
    "/{session_id}",
    response_model=OperationResult,
    summary="Delete session",
    description="Deletes the session JSON from GCS and removes its Firestore document.",
)
async def remove_session(session_id: str) -> OperationResult:
    """Delete session from GCS and Firestore."""
    try:
        success = await delete_session(session_id)
        if success:
            return OperationResult(success=True)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Session deletion partially failed — check server logs.",
            )
    except HTTPException:
        raise
    except Exception as exc:
        logger.error("remove_session error (id=%s): %s", session_id, exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to delete session: {exc}",
        )


@router.post(
    "/{session_id}/message",
    response_model=OperationResult,
    status_code=status.HTTP_200_OK,
    summary="Append conversation message",
    description=(
        "Loads the session, appends a single conversation message to "
        "conversation_history, and saves the updated session back to GCS. "
        "Timestamp defaults to the current UTC time if not provided."
    ),
)
async def append_message(
    session_id: str, body: ConversationMessageRequest
) -> OperationResult:
    """Append a conversation turn to the session's history."""
    message: dict = {"role": body.role, "content": body.content}
    if body.timestamp:
        message["timestamp"] = body.timestamp

    # Check session exists before trying to append
    existing = await load_session(session_id)
    if existing is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{session_id}' not found.",
        )

    try:
        success = await append_conversation_message(session_id, message)
        if success:
            return OperationResult(success=True)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to append message — check server logs.",
            )
    except HTTPException:
        raise
    except Exception as exc:
        logger.error("append_message error (session=%s): %s", session_id, exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to append message: {exc}",
        )


@router.patch(
    "/{session_id}/images",
    response_model=OperationResult,
    status_code=status.HTTP_200_OK,
    summary="Update session images",
    description=(
        "Extends the session's images list with the provided new images, "
        "re-saves to GCS, and refreshes Firestore thumbnail_url / image_count."
    ),
)
async def patch_images(
    session_id: str, body: UpdateImagesRequest
) -> OperationResult:
    """Extend the images list for a session."""
    if not body.images:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="images list must not be empty.",
        )

    # Verify session exists
    existing = await load_session(session_id)
    if existing is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{session_id}' not found.",
        )

    new_images = [img.model_dump() for img in body.images]

    try:
        success = await update_session_images(session_id, new_images)
        if success:
            return OperationResult(success=True)
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to update images — check server logs.",
            )
    except HTTPException:
        raise
    except Exception as exc:
        logger.error("patch_images error (session=%s): %s", session_id, exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to update session images: {exc}",
        )
