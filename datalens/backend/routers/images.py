"""
Images router — DataLens.

Endpoints:
  POST /images/generate       — generate an image on demand
  GET  /images/{session_id}   — list all images for a session
"""

from __future__ import annotations

import logging
from typing import Any, Optional

import pathlib

from fastapi import APIRouter, HTTPException, status
from fastapi.responses import FileResponse
from pydantic import BaseModel

from services.gcs_service import load_session, save_session
from services.nano_banana import generate_image_on_demand

_LOCAL_IMAGES_DIR = pathlib.Path("/tmp/datalens-images")

logger = logging.getLogger(__name__)

router = APIRouter()

# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class GenerateImageRequest(BaseModel):
    prompt: str
    session_id: str
    story_context: Optional[str] = None
    story_format: Optional[str] = "analyst"


class GenerateImageResponse(BaseModel):
    url: str
    prompt: str
    session_id: str


class ImageListResponse(BaseModel):
    session_id: str
    images: list[dict[str, Any]]
    image_count: int


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.post("/generate", response_model=GenerateImageResponse, status_code=status.HTTP_201_CREATED)
async def generate_image(body: GenerateImageRequest):
    """
    Generate a single image on demand using Nano Banana Pro.

    Accepts a text prompt and an optional story_context string for grounding.
    The generated image is uploaded to GCS and the public URL is returned.

    The image record is also appended to the session JSON in GCS so the
    ImageGallery stays in sync.
    """
    if not body.prompt.strip():
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="prompt must not be empty.",
        )
    if not body.session_id:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="session_id is required.",
        )

    try:
        url = await generate_image_on_demand(
            prompt=body.prompt,
            session_id=body.session_id,
            story_context=body.story_context,
        )
    except Exception as exc:
        logger.error(
            "On-demand image generation failed (session=%s): %s",
            body.session_id,
            exc,
        )
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Image generation failed: {exc}",
        )

    # Append the new image record to the session document in GCS
    image_record = {
        "url": url,
        "prompt": body.prompt,
        "format": body.story_format or "analyst",
    }

    try:
        session_doc = await load_session(body.session_id)
        if session_doc is not None:
            if "images" not in session_doc:
                session_doc["images"] = []
            session_doc["images"].append(image_record)
            await save_session(body.session_id, session_doc)
        else:
            logger.warning(
                "Session %s not found when persisting image record — skipping.",
                body.session_id,
            )
    except Exception as exc:
        # Non-fatal: image was generated successfully; just log the persistence failure
        logger.warning(
            "Failed to persist image record to session %s: %s",
            body.session_id,
            exc,
        )

    return GenerateImageResponse(
        url=url,
        prompt=body.prompt,
        session_id=body.session_id,
    )


@router.get("/local/{image_path:path}")
async def serve_local_image(image_path: str):
    """
    Serves locally saved images for local dev (GCS_LOCAL_DEV=true).
    Browser cannot load file:// URLs — this endpoint bridges the gap.
    URL pattern: /images/local/{session_id}/{uuid}.png
    """
    file = _LOCAL_IMAGES_DIR / image_path
    if not file.exists() or not file.is_file():
        raise HTTPException(status_code=404, detail="Image not found")
    # Prevent path traversal
    try:
        file.resolve().relative_to(_LOCAL_IMAGES_DIR.resolve())
    except ValueError:
        raise HTTPException(status_code=403, detail="Forbidden")
    # Sniff actual bytes so JPEG saved as .png still serves correctly
    header = file.read_bytes()[:12]
    if header[:3] == b'\xff\xd8\xff':
        media_type = "image/jpeg"
    elif header[8:12] == b'WEBP':
        media_type = "image/webp"
    elif header[:4] == b'\x89PNG':
        media_type = "image/png"
    else:
        media_type = "image/jpeg"  # sensible default
    return FileResponse(str(file), media_type=media_type)


@router.get("/{session_id}", response_model=ImageListResponse)
async def list_images(session_id: str):
    """
    List all images that have been generated for a session.

    Loads the session document from GCS and returns the images array.
    Each image record contains: { url, prompt, format }.
    """
    session_doc = await load_session(session_id)
    if session_doc is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Session '{session_id}' not found.",
        )

    images = session_doc.get("images", [])

    return ImageListResponse(
        session_id=session_id,
        images=images,
        image_count=len(images),
    )
