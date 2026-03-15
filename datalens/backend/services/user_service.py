"""
User Service — Firestore CRUD for DataLens user accounts.

Firestore collection: 'users'
Document structure:
  {
    "user_id":       str  (UUID4 for email/pw, Google sub for Google auth)
    "email":         str
    "name":          str
    "picture":       str  (URL, may be empty)
    "auth_method":   "google" | "password" | "guest"
    "password_hash": str | null
    "app_token":     str  (UUID4, acts as session bearer token)
    "session_ids":   list[str]
    "created_at":    ISO str
    "updated_at":    ISO str
  }

Local dev fallback: JSON file at <sessions_dir>/_users.json
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import pathlib
import uuid
from datetime import datetime, timezone
from typing import List, Optional

logger = logging.getLogger(__name__)

FIRESTORE_USERS_COLLECTION = os.environ.get("FIRESTORE_USERS_COLLECTION", "users")

# Reuse local-dev detection from gcs_service
_REPO_ROOT = pathlib.Path(__file__).parent.parent.parent
_DEFAULT_TMP = _REPO_ROOT / "tmp"
_LOCAL_SESSIONS_DIR: pathlib.Path = _DEFAULT_TMP / "datalens-sessions"
_LOCAL_USERS_FILE: pathlib.Path = _LOCAL_SESSIONS_DIR / "_users.json"


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------


def _is_local_dev() -> bool:
    env = os.environ.get("GCS_LOCAL_DEV", "").lower()
    return env in ("1", "true", "yes")


def _ensure_local_dirs() -> None:
    _LOCAL_SESSIONS_DIR.mkdir(parents=True, exist_ok=True)


def _load_local_users() -> dict:
    _ensure_local_dirs()
    if _LOCAL_USERS_FILE.exists():
        try:
            return json.loads(_LOCAL_USERS_FILE.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def _save_local_users(data: dict) -> None:
    _ensure_local_dirs()
    _LOCAL_USERS_FILE.write_text(
        json.dumps(data, ensure_ascii=False, indent=2, default=str), encoding="utf-8"
    )


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _generate_token() -> str:
    return str(uuid.uuid4())


def _get_firestore_client():
    from services.gcs_service import get_firestore_client
    return get_firestore_client()


# ---------------------------------------------------------------------------
# Core CRUD — internal sync wrappers (called via run_in_executor)
# ---------------------------------------------------------------------------


def _sync_create_user(user: dict) -> dict:
    if _is_local_dev():
        data = _load_local_users()
        data[user["user_id"]] = user
        _save_local_users(data)
        return user
    fs = _get_firestore_client()
    fs.collection(FIRESTORE_USERS_COLLECTION).document(user["user_id"]).set(user)
    return user


def _sync_get_user_by_id(user_id: str) -> Optional[dict]:
    if _is_local_dev():
        data = _load_local_users()
        return data.get(user_id)
    fs = _get_firestore_client()
    doc = fs.collection(FIRESTORE_USERS_COLLECTION).document(user_id).get()
    return doc.to_dict() if doc.exists else None


def _sync_get_user_by_email(email: str) -> Optional[dict]:
    if _is_local_dev():
        data = _load_local_users()
        for user in data.values():
            if user.get("email") == email:
                return user
        return None
    fs = _get_firestore_client()
    docs = (
        fs.collection(FIRESTORE_USERS_COLLECTION)
        .where("email", "==", email)
        .limit(1)
        .stream()
    )
    for doc in docs:
        return doc.to_dict()
    return None


def _sync_get_user_by_token(token: str) -> Optional[dict]:
    if _is_local_dev():
        data = _load_local_users()
        for user in data.values():
            if user.get("app_token") == token:
                return user
        return None
    fs = _get_firestore_client()
    docs = (
        fs.collection(FIRESTORE_USERS_COLLECTION)
        .where("app_token", "==", token)
        .limit(1)
        .stream()
    )
    for doc in docs:
        return doc.to_dict()
    return None


def _sync_update_user(user_id: str, updates: dict) -> bool:
    updates["updated_at"] = _now_iso()
    if _is_local_dev():
        data = _load_local_users()
        if user_id not in data:
            return False
        data[user_id].update(updates)
        _save_local_users(data)
        return True
    fs = _get_firestore_client()
    fs.collection(FIRESTORE_USERS_COLLECTION).document(user_id).update(updates)
    return True


def _sync_delete_user(user_id: str) -> bool:
    if _is_local_dev():
        data = _load_local_users()
        if user_id in data:
            del data[user_id]
            _save_local_users(data)
        return True
    fs = _get_firestore_client()
    fs.collection(FIRESTORE_USERS_COLLECTION).document(user_id).delete()
    return True


def _sync_add_session(user_id: str, session_id: str) -> bool:
    if _is_local_dev():
        data = _load_local_users()
        if user_id not in data:
            return False
        ids = data[user_id].get("session_ids", [])
        if session_id not in ids:
            ids.append(session_id)
            data[user_id]["session_ids"] = ids
            data[user_id]["updated_at"] = _now_iso()
            _save_local_users(data)
        return True
    from google.cloud.firestore import ArrayUnion
    fs = _get_firestore_client()
    fs.collection(FIRESTORE_USERS_COLLECTION).document(user_id).update({
        "session_ids": ArrayUnion([session_id]),
        "updated_at": _now_iso(),
    })
    return True


def _sync_remove_session(user_id: str, session_id: str) -> bool:
    if _is_local_dev():
        data = _load_local_users()
        if user_id not in data:
            return False
        ids = data[user_id].get("session_ids", [])
        data[user_id]["session_ids"] = [s for s in ids if s != session_id]
        data[user_id]["updated_at"] = _now_iso()
        _save_local_users(data)
        return True
    from google.cloud.firestore import ArrayRemove
    fs = _get_firestore_client()
    fs.collection(FIRESTORE_USERS_COLLECTION).document(user_id).update({
        "session_ids": ArrayRemove([session_id]),
        "updated_at": _now_iso(),
    })
    return True


# ---------------------------------------------------------------------------
# Public async API
# ---------------------------------------------------------------------------


async def create_user(
    user_id: str,
    email: str,
    name: str,
    picture: str = "",
    auth_method: str = "password",
    password_hash: Optional[str] = None,
) -> dict:
    """Create a new user document. Returns the created user dict."""
    user = {
        "user_id": user_id,
        "email": email,
        "name": name,
        "picture": picture,
        "auth_method": auth_method,
        "password_hash": password_hash,
        "app_token": _generate_token(),
        "session_ids": [],
        "created_at": _now_iso(),
        "updated_at": _now_iso(),
    }
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_create_user, user)


async def get_user_by_id(user_id: str) -> Optional[dict]:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_get_user_by_id, user_id)


async def get_user_by_email(email: str) -> Optional[dict]:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_get_user_by_email, email)


async def get_user_by_token(token: str) -> Optional[dict]:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_get_user_by_token, token)


async def update_user(user_id: str, updates: dict) -> bool:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_update_user, user_id, updates)


async def delete_user(user_id: str) -> bool:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_delete_user, user_id)


async def rotate_token(user_id: str) -> str:
    """Generate a new app token for the user and persist it."""
    new_token = _generate_token()
    await update_user(user_id, {"app_token": new_token})
    return new_token


async def add_session_to_user(user_id: str, session_id: str) -> bool:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_add_session, user_id, session_id)


async def remove_session_from_user(user_id: str, session_id: str) -> bool:
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync_remove_session, user_id, session_id)


def safe_user(user: dict) -> dict:
    """Strip sensitive fields before returning user data to the client."""
    return {k: v for k, v in user.items() if k not in ("password_hash", "app_token")}
