"""
GCS + Firestore persistence service for DataLens.

All async — GCS/Firestore clients are synchronous, so every call is wrapped
with asyncio.get_event_loop().run_in_executor(None, ...) to avoid blocking
the FastAPI event loop.

Local dev fallback
------------------
Set GCS_LOCAL_DEV=true (or simply do not install google-cloud-storage) to
route all persistence to the local filesystem:

  Sessions  → /tmp/datalens-sessions/{session_id}.json
  Images    → /tmp/datalens-images/{image_id}
  Image URL → file:///tmp/datalens-images/{image_id}

Firestore is similarly mocked with a JSON file at
/tmp/datalens-sessions/_firestore_index.json.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import pathlib
from datetime import datetime, timezone
from typing import List, Optional

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Environment / configuration
# ---------------------------------------------------------------------------

GCS_BUCKET_SESSIONS: str = os.environ.get("GCS_BUCKET_SESSIONS", "datalens-sessions")
GCS_BUCKET_IMAGES: str = os.environ.get("GCS_BUCKET_IMAGES", "datalens-images")
FIRESTORE_COLLECTION: str = os.environ.get("FIRESTORE_COLLECTION", "sessions")

# Force local-dev mode when the env var is set to a truthy value.
_LOCAL_DEV_ENV: str = os.environ.get("GCS_LOCAL_DEV", "").lower()
_LOCAL_DEV_FORCED: bool = _LOCAL_DEV_ENV in ("1", "true", "yes")

import tempfile

# Local paths - Use a project-relative 'tmp' if possible, else fallback to system temp
_REPO_ROOT = pathlib.Path(__file__).parent.parent.parent
_DEFAULT_TMP = _REPO_ROOT / "tmp"

_LOCAL_SESSIONS_DIR: pathlib.Path = _DEFAULT_TMP / "datalens-sessions"
_LOCAL_IMAGES_DIR: pathlib.Path = _DEFAULT_TMP / "datalens-images"

if not os.access(_REPO_ROOT, os.W_OK):
    # Fallback to system temp if repo root is not writable
    _SYS_TMP = pathlib.Path(tempfile.gettempdir())
    _LOCAL_SESSIONS_DIR = _SYS_TMP / "datalens-sessions"
    _LOCAL_IMAGES_DIR = _SYS_TMP / "datalens-images"

_LOCAL_FIRESTORE_INDEX: pathlib.Path = _LOCAL_SESSIONS_DIR / "_firestore_index.json"

# ---------------------------------------------------------------------------
# Lazy client initialisation + local-dev detection
# ---------------------------------------------------------------------------

_gcs_client = None
_firestore_client = None
_is_local_dev: Optional[bool] = None


def _detect_local_dev() -> bool:
    """
    Returns True if we should use the local filesystem fallback.

    Detection order:
    1. GCS_LOCAL_DEV env var is truthy → local dev.
    2. google-cloud-storage / google-cloud-firestore cannot be imported → local dev.
    3. Otherwise → cloud mode.
    """
    global _is_local_dev
    if _is_local_dev is not None:
        return _is_local_dev

    if _LOCAL_DEV_FORCED:
        logger.info("GCS_LOCAL_DEV=true — using local filesystem fallback.")
        _is_local_dev = True
        return True

    try:
        from google.cloud import storage as _storage  # noqa: F401
        from google.cloud import firestore as _firestore  # noqa: F401
        _is_local_dev = False
        return False
    except ImportError:
        logger.warning(
            "google-cloud-storage / google-cloud-firestore not available — "
            "using local filesystem fallback."
        )
        _is_local_dev = True
        return True


def get_gcs_client():
    """Return (and lazily initialise) the GCS Storage client."""
    global _gcs_client
    if _detect_local_dev():
        return None
    if _gcs_client is None:
        from google.cloud import storage
        _gcs_client = storage.Client()
    return _gcs_client


def get_firestore_client():
    """Return (and lazily initialise) the Firestore client."""
    global _firestore_client
    if _detect_local_dev():
        return None
    if _firestore_client is None:
        from google.cloud import firestore
        _firestore_client = firestore.Client()
    return _firestore_client


# ---------------------------------------------------------------------------
# Local dev helpers
# ---------------------------------------------------------------------------


def _ensure_local_dirs() -> None:
    """Create local fallback directories if they do not exist."""
    _LOCAL_SESSIONS_DIR.mkdir(parents=True, exist_ok=True)
    _LOCAL_IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def _load_local_firestore_index() -> dict:
    """Load the in-file Firestore index; return empty dict on first run."""
    _ensure_local_dirs()
    if _LOCAL_FIRESTORE_INDEX.exists():
        try:
            return json.loads(_LOCAL_FIRESTORE_INDEX.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def _save_local_firestore_index(index: dict) -> None:
    """Persist the in-file Firestore index."""
    _ensure_local_dirs()
    _LOCAL_FIRESTORE_INDEX.write_text(
        json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8"
    )


# ---------------------------------------------------------------------------
# upload_image_to_gcs
# ---------------------------------------------------------------------------


async def upload_image_to_gcs(image_data: bytes, image_id: str) -> str:
    """
    Upload image bytes to GCS (datalens-images bucket) or local /tmp fallback.

    Parameters
    ----------
    image_data : bytes
        Raw image bytes (PNG, JPEG, …).
    image_id : str
        Destination path within the bucket, e.g. "{session_id}/{uuid}.png".

    Returns
    -------
    str
        Public GCS URL:  "https://storage.googleapis.com/{bucket}/{image_id}"
        Local file URL:  "file:///tmp/datalens-images/{image_id}"
    """
    if _detect_local_dev():
        return await _local_upload_image(image_data, image_id)

    loop = asyncio.get_event_loop()

    def _sync_upload() -> str:
        client = get_gcs_client()
        bucket = client.bucket(GCS_BUCKET_IMAGES)
        blob = bucket.blob(image_id)

        # Infer content type from extension
        ext = image_id.rsplit(".", 1)[-1].lower() if "." in image_id else "png"
        content_type_map = {
            "png": "image/png",
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "gif": "image/gif",
            "webp": "image/webp",
        }
        content_type = content_type_map.get(ext, "image/png")

        blob.upload_from_string(image_data, content_type=content_type)
        # The images bucket is configured for public access via Terraform.
        return f"https://storage.googleapis.com/{GCS_BUCKET_IMAGES}/{image_id}"

    try:
        url = await loop.run_in_executor(None, _sync_upload)
        logger.debug("Uploaded image to GCS: %s", url)
        return url
    except Exception as exc:
        logger.error("GCS image upload failed for %s: %s — falling back to local.", image_id, exc)
        return await _local_upload_image(image_data, image_id)


async def _local_upload_image(image_data: bytes, image_id: str) -> str:
    """Write image to /tmp/datalens-images/ and return an HTTP URL served by the backend."""
    _ensure_local_dirs()
    dest = _LOCAL_IMAGES_DIR / image_id
    dest.parent.mkdir(parents=True, exist_ok=True)

    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, dest.write_bytes, image_data)

    # Return an HTTP URL the browser can actually load — served by GET /images/local/{image_id}
    base_url = os.environ.get("LOCAL_BACKEND_URL", "http://127.0.0.1:8001")
    url = f"{base_url}/images/local/{image_id}"
    logger.debug("Local image saved: %s → %s", dest, url)
    return url


# ---------------------------------------------------------------------------
# save_session
# ---------------------------------------------------------------------------


async def save_session(session_id: str, session: dict) -> bool:
    """
    Persist a full session dict to GCS as JSON and upsert its metadata to
    Firestore (or local fallback).

    GCS path : gs://{GCS_BUCKET_SESSIONS}/{session_id}.json
    Firestore: collection '{FIRESTORE_COLLECTION}', document id = session_id

    Firestore document fields
    -------------------------
    - session_id
    - filename
    - created_at
    - preview_text  (first 100 chars of the eli5 story)
    - image_count   (len of images list)
    - thumbnail_url (url of first image, or None)

    Parameters
    ----------
    session_id : str
        UUID4 session identifier.  If the session dict already contains a
        ``session_id`` key it is used; otherwise ``session_id`` is injected.
    session : dict
        Full session document matching the Session JSON schema in CLAUDE.md.

    Returns
    -------
    bool
        True on success, False if a non-recoverable error occurred.
    """
    # Ensure session_id is stamped into the dict
    session = dict(session)
    session.setdefault("session_id", session_id)

    if _detect_local_dev():
        return await _local_save_session(session_id, session)

    loop = asyncio.get_event_loop()

    def _sync_save() -> bool:
        try:
            # --- GCS JSON ---
            client = get_gcs_client()
            bucket = client.bucket(GCS_BUCKET_SESSIONS)
            blob = bucket.blob(f"{session_id}.json")
            payload = json.dumps(session, ensure_ascii=False, default=str)
            blob.upload_from_string(payload, content_type="application/json")

            # --- Firestore ---
            stories = session.get("stories") or {}
            eli5_text = stories.get("eli5", "") if isinstance(stories, dict) else ""
            images = session.get("images") or []
            thumbnail_url = images[0].get("url") if images else None

            firestore_doc = {
                "session_id": session_id,
                "filename": session.get("filename", ""),
                "created_at": session.get("created_at", datetime.now(timezone.utc).isoformat()),
                "preview_text": eli5_text[:100],
                "image_count": len(images),
                "thumbnail_url": thumbnail_url,
            }

            fs_client = get_firestore_client()
            fs_client.collection(FIRESTORE_COLLECTION).document(session_id).set(firestore_doc)
            return True
        except Exception as exc:
            logger.error("save_session failed for %s: %s", session_id, exc)
            return False

    try:
        result = await loop.run_in_executor(None, _sync_save)
        return result
    except Exception as exc:
        logger.error("save_session executor error for %s: %s", session_id, exc)
        return False


async def _local_save_session(session_id: str, session: dict) -> bool:
    """Write session JSON to /tmp and update the local Firestore index."""
    _ensure_local_dirs()
    dest = _LOCAL_SESSIONS_DIR / f"{session_id}.json"
    loop = asyncio.get_event_loop()

    try:
        payload = json.dumps(session, ensure_ascii=False, default=str, indent=2)

        def _write():
            dest.write_text(payload, encoding="utf-8")
            # Update local firestore index
            index = _load_local_firestore_index()
            stories = session.get("stories") or {}
            eli5_text = stories.get("eli5", "") if isinstance(stories, dict) else ""
            images = session.get("images") or []
            thumbnail_url = images[0].get("url") if images else None

            index[session_id] = {
                "session_id": session_id,
                "filename": session.get("filename", ""),
                "created_at": session.get("created_at", datetime.now(timezone.utc).isoformat()),
                "preview_text": eli5_text[:100],
                "image_count": len(images),
                "thumbnail_url": thumbnail_url,
            }
            _save_local_firestore_index(index)

        await loop.run_in_executor(None, _write)
        logger.debug("Local session saved: %s", dest)
        return True
    except Exception as exc:
        logger.error("_local_save_session failed for %s: %s", session_id, exc)
        return False


# ---------------------------------------------------------------------------
# load_session
# ---------------------------------------------------------------------------


async def load_session(session_id: str) -> Optional[dict]:
    """
    Load a full session dict from GCS (or local fallback).

    GCS path: gs://{GCS_BUCKET_SESSIONS}/{session_id}.json

    Returns
    -------
    dict or None
        The parsed session document, or None if not found.
    """
    if _detect_local_dev():
        return await _local_load_session(session_id)

    loop = asyncio.get_event_loop()

    def _sync_load() -> Optional[dict]:
        try:
            client = get_gcs_client()
            bucket = client.bucket(GCS_BUCKET_SESSIONS)
            blob = bucket.blob(f"{session_id}.json")
            if not blob.exists():
                logger.debug("Session not found in GCS: %s", session_id)
                return None
            raw = blob.download_as_text(encoding="utf-8")
            return json.loads(raw)
        except Exception as exc:
            logger.error("load_session GCS error for %s: %s", session_id, exc)
            return None

    try:
        return await loop.run_in_executor(None, _sync_load)
    except Exception as exc:
        logger.error("load_session executor error for %s: %s", session_id, exc)
        return None


async def _local_load_session(session_id: str) -> Optional[dict]:
    """Read session JSON from /tmp."""
    path = _LOCAL_SESSIONS_DIR / f"{session_id}.json"
    if not path.exists():
        logger.debug("Local session not found: %s", path)
        return None
    loop = asyncio.get_event_loop()
    try:
        raw = await loop.run_in_executor(None, path.read_text, "utf-8")
        return json.loads(raw)
    except Exception as exc:
        logger.error("_local_load_session failed for %s: %s", session_id, exc)
        return None


# ---------------------------------------------------------------------------
# list_sessions
# ---------------------------------------------------------------------------


async def list_sessions() -> List[dict]:
    """
    Return all session metadata documents, ordered by created_at descending.

    Cloud mode : queries the Firestore 'sessions' collection.
    Local mode : reads the JSON index file at /tmp/datalens-sessions/_firestore_index.json.

    Returns
    -------
    list[dict]
        Each item matches the Firestore session document schema:
        { session_id, filename, created_at, preview_text, image_count, thumbnail_url }
    """
    if _detect_local_dev():
        return await _local_list_sessions()

    loop = asyncio.get_event_loop()

    def _sync_list() -> List[dict]:
        try:
            fs_client = get_firestore_client()
            docs = (
                fs_client.collection(FIRESTORE_COLLECTION)
                .order_by("created_at", direction="DESCENDING")
                .stream()
            )
            return [doc.to_dict() for doc in docs]
        except Exception as exc:
            logger.error("list_sessions Firestore error: %s", exc)
            return []

    try:
        return await loop.run_in_executor(None, _sync_list)
    except Exception as exc:
        logger.error("list_sessions executor error: %s", exc)
        return []


async def _local_list_sessions() -> List[dict]:
    """List sessions from the local JSON index, sorted by created_at desc."""
    loop = asyncio.get_event_loop()
    try:
        index = await loop.run_in_executor(None, _load_local_firestore_index)
        items = list(index.values())
        items.sort(key=lambda x: x.get("created_at", ""), reverse=True)
        return items
    except Exception as exc:
        logger.error("_local_list_sessions failed: %s", exc)
        return []


# ---------------------------------------------------------------------------
# delete_session
# ---------------------------------------------------------------------------


async def delete_session(session_id: str) -> bool:
    """
    Delete a session's JSON from GCS and its document from Firestore.

    Returns True if the deletion succeeded (or the object did not exist),
    False on error.
    """
    if _detect_local_dev():
        return await _local_delete_session(session_id)

    loop = asyncio.get_event_loop()

    def _sync_delete() -> bool:
        success = True
        try:
            client = get_gcs_client()
            bucket = client.bucket(GCS_BUCKET_SESSIONS)
            blob = bucket.blob(f"{session_id}.json")
            if blob.exists():
                blob.delete()
                logger.debug("Deleted GCS session: %s", session_id)
        except Exception as exc:
            logger.error("delete_session GCS error for %s: %s", session_id, exc)
            success = False

        try:
            fs_client = get_firestore_client()
            fs_client.collection(FIRESTORE_COLLECTION).document(session_id).delete()
            logger.debug("Deleted Firestore session: %s", session_id)
        except Exception as exc:
            logger.error("delete_session Firestore error for %s: %s", session_id, exc)
            success = False

        return success

    try:
        return await loop.run_in_executor(None, _sync_delete)
    except Exception as exc:
        logger.error("delete_session executor error for %s: %s", session_id, exc)
        return False


async def _local_delete_session(session_id: str) -> bool:
    """Delete session JSON and remove from local index."""
    loop = asyncio.get_event_loop()
    success = True

    def _delete():
        nonlocal success
        path = _LOCAL_SESSIONS_DIR / f"{session_id}.json"
        try:
            if path.exists():
                path.unlink()
                logger.debug("Deleted local session: %s", path)
        except Exception as exc:
            logger.error("_local_delete_session file error for %s: %s", session_id, exc)
            success = False

        try:
            index = _load_local_firestore_index()
            if session_id in index:
                del index[session_id]
                _save_local_firestore_index(index)
        except Exception as exc:
            logger.error("_local_delete_session index error for %s: %s", session_id, exc)
            success = False

    try:
        await loop.run_in_executor(None, _delete)
    except Exception as exc:
        logger.error("_local_delete_session executor error for %s: %s", session_id, exc)
        return False

    return success


# ---------------------------------------------------------------------------
# append_conversation_message
# ---------------------------------------------------------------------------


async def append_conversation_message(session_id: str, message: dict) -> bool:
    """
    Append a single message to the session's conversation_history and
    re-persist the updated session.

    The message dict should contain:
        { "role": "user" | "assistant", "content": str, "timestamp": ISO str }

    Returns True on success.
    """
    session = await load_session(session_id)
    if session is None:
        logger.error(
            "append_conversation_message: session %s not found.", session_id
        )
        return False

    history = session.get("conversation_history") or []
    # Ensure timestamp is present
    if "timestamp" not in message:
        message = dict(message)
        message["timestamp"] = datetime.now(timezone.utc).isoformat()

    history.append(message)
    session["conversation_history"] = history

    return await save_session(session_id, session)


# ---------------------------------------------------------------------------
# update_session_images
# ---------------------------------------------------------------------------


async def update_session_images(session_id: str, new_images: List[dict]) -> bool:
    """
    Extend the session's images list with new_images and re-persist.

    Also refreshes the Firestore thumbnail_url and image_count fields.

    Parameters
    ----------
    session_id : str
        Target session UUID.
    new_images : list[dict]
        List of image dicts: { "url": str, "prompt": str, "format": str }

    Returns
    -------
    bool
        True on success.
    """
    session = await load_session(session_id)
    if session is None:
        logger.error("update_session_images: session %s not found.", session_id)
        return False

    existing = session.get("images") or []
    existing.extend(new_images)
    session["images"] = existing

    # save_session re-derives thumbnail_url and image_count from the images list.
    return await save_session(session_id, session)
