"""
Users Router — /users

GET    /users/me               Get current user profile
PATCH  /users/me               Update profile (name, picture)
DELETE /users/me               Delete account + all associated session metadata
GET    /users/me/sessions      Get user's session list (from Firestore)
DELETE /users/me/sessions/{id} Remove a session from user's list (and delete from GCS)
"""

from __future__ import annotations

import logging
from typing import List, Optional

from fastapi import APIRouter, Header, HTTPException, status
from pydantic import BaseModel

from services.user_service import (
    delete_user,
    get_user_by_token,
    remove_session_from_user,
    safe_user,
    update_user,
)
from services.gcs_service import delete_session, list_sessions

logger = logging.getLogger(__name__)
router = APIRouter()


# ---------------------------------------------------------------------------
# Auth dependency helper
# ---------------------------------------------------------------------------


async def _require_user(authorization: Optional[str]) -> dict:
    """Extract Bearer token and look up the user. Raises 401 on failure."""
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing authorization token.")
    parts = authorization.split()
    if len(parts) != 2 or parts[0].lower() != "bearer":
        raise HTTPException(status_code=401, detail="Invalid authorization header format.")
    token = parts[1]
    user = await get_user_by_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid or expired token.")
    return user


# ---------------------------------------------------------------------------
# Request models
# ---------------------------------------------------------------------------


class UpdateProfileRequest(BaseModel):
    name: Optional[str] = None
    picture: Optional[str] = None


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.get("/me", summary="Get current user profile")
async def get_profile(authorization: Optional[str] = Header(default=None)) -> dict:
    user = await _require_user(authorization)
    return safe_user(user)


@router.patch("/me", summary="Update user profile")
async def update_profile(
    body: UpdateProfileRequest,
    authorization: Optional[str] = Header(default=None),
) -> dict:
    user = await _require_user(authorization)
    updates = {}
    if body.name is not None:
        updates["name"] = body.name.strip()
    if body.picture is not None:
        updates["picture"] = body.picture.strip()
    if updates:
        await update_user(user["user_id"], updates)
        user.update(updates)
    return safe_user(user)


@router.delete("/me", summary="Delete account", status_code=status.HTTP_200_OK)
async def delete_account(authorization: Optional[str] = Header(default=None)) -> dict:
    user = await _require_user(authorization)
    # Delete Firestore/GCS sessions owned by this user
    for session_id in user.get("session_ids", []):
        try:
            await delete_session(session_id)
        except Exception as exc:
            logger.warning("Could not delete session %s: %s", session_id, exc)
    await delete_user(user["user_id"])
    return {"status": "ok", "message": "Account deleted."}


@router.get("/me/sessions", summary="Get user's sessions")
async def get_user_sessions(authorization: Optional[str] = Header(default=None)) -> List[dict]:
    """Return session metadata for all sessions owned by the current user."""
    user = await _require_user(authorization)
    user_session_ids: List[str] = user.get("session_ids", [])

    if not user_session_ids:
        return []

    # Get all sessions from Firestore and filter to this user's sessions
    all_sessions = await list_sessions()
    return [s for s in all_sessions if s.get("session_id") in user_session_ids]


@router.delete("/me/sessions/{session_id}", summary="Remove session from user's account")
async def remove_user_session(
    session_id: str,
    authorization: Optional[str] = Header(default=None),
) -> dict:
    user = await _require_user(authorization)
    if session_id not in user.get("session_ids", []):
        raise HTTPException(status_code=404, detail="Session not found in your account.")
    await delete_session(session_id)
    await remove_session_from_user(user["user_id"], session_id)
    return {"status": "ok"}
