"""
Nano Banana Pro — image generation service for DataLens.

Uses gemini-3-pro-image-preview to generate images from text prompts.
Images are uploaded to GCS (datalens-images bucket) and the public URL is returned.

DataLens visual style is automatically prepended to every prompt to ensure
consistent, beautiful imagery across all generated visuals.

Public API:
  generate_image_nano_banana(prompt, session_id) -> str (GCS URL)
  generate_image_on_demand(prompt, session_id, story_context) -> str (GCS URL)
"""

from __future__ import annotations

import asyncio
import logging
import os
import uuid
from typing import Optional

from google import genai
from google.genai import types

from services.gcs_service import upload_image_to_gcs

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Gemini client
# ---------------------------------------------------------------------------

_client: genai.Client | None = None


def _get_client() -> genai.Client:
    api_key = os.environ.get("GENAI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if api_key:
        return genai.Client(api_key=api_key)
    return genai.Client()


# ---------------------------------------------------------------------------
# DataLens visual style prefix
# ---------------------------------------------------------------------------

DATALENS_VISUAL_STYLE = (
    "DataLens visualization style: "
    "crisp, modern, professional data-storytelling aesthetic. "
    "High contrast. Clean composition. No watermarks. No text overlays unless specified. "
    "Vivid accent colours (indigo #6366f1, violet #8b5cf6, cyan #06b6d4) on rich backgrounds. "
    "Photorealistic or illustrated depending on context. Ultra-detailed. 4K quality. "
)

ELI5_STYLE_SUFFIX = (
    "Bright Pixar/Disney-quality cartoon illustration. "
    "Cheerful characters, primary colors (orange, yellow, teal, pink). "
    "Soft shadows, clean outlines. Whimsical storybook art style. "
    "No text overlays. No realistic photography."
)

ARCHITECTURE_STYLE_SUFFIX = (
    "Professional database ER diagram or data architecture diagram. "
    "Clean technical illustration. Dark navy (#0a1628) or white background. "
    "Entity boxes with column names and data types labeled. "
    "Arrows with crow's foot notation for relationships. "
    "Color-coded by type (primary keys in gold, foreign keys in blue, regular columns in gray). "
    "Monospace font for column names. Zero cartoon elements. "
    "Looks exactly like output from dbdiagram.io or draw.io. No abstract art."
)

ANALYST_STYLE_SUFFIX = (
    "Professional business intelligence dashboard visualization. "
    "Dark background (#0f172a). "
    "Vibrant data elements: electric blue bar charts, neon green line graphs, "
    "coral KPI number cards with large bold white numbers. "
    "Clean typography, subtle grid lines, proper axis labels, small legend. "
    "Looks exactly like a Tableau or Power BI report. "
    "No cartoon elements. No abstract art. No globe imagery. "
    "Actual charts with visible data values."
)

STYLE_SUFFIXES: dict[str, str] = {
    "eli5": ELI5_STYLE_SUFFIX,
    "architecture": ARCHITECTURE_STYLE_SUFFIX,
    "analyst": ANALYST_STYLE_SUFFIX,
    "default": "",
}


def _enrich_prompt(prompt: str, story_format: str = "default") -> str:
    """
    Prepend the DataLens visual style prefix and append the format-specific
    style suffix to a raw image prompt.
    """
    suffix = STYLE_SUFFIXES.get(story_format, STYLE_SUFFIXES["default"])
    parts = [DATALENS_VISUAL_STYLE, prompt.strip()]
    if suffix:
        parts.append(suffix)
    return " ".join(parts)


# ---------------------------------------------------------------------------
# Core image generation
# ---------------------------------------------------------------------------


async def _generate_image_bytes(enriched_prompt: str) -> bytes:
    """
    Call gemini-3-pro-image-preview to generate an image.
    Returns raw PNG bytes.

    Raises RuntimeError if no image data is returned.
    """
    client = _get_client()

    response = await client.aio.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=[
            types.Content(
                role="user",
                parts=[types.Part(text=enriched_prompt)],
            )
        ],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            temperature=0.9,
        ),
    )

    # Extract image bytes from response
    if response.candidates:
        for candidate in response.candidates:
            if candidate.content and candidate.content.parts:
                for part in candidate.content.parts:
                    if hasattr(part, "inline_data") and part.inline_data:
                        return part.inline_data.data
                    # Some SDK versions expose it differently
                    if hasattr(part, "image") and part.image:
                        if hasattr(part.image, "image_bytes"):
                            return part.image.image_bytes
                        if hasattr(part.image, "data"):
                            return part.image.data

    raise RuntimeError(
        "gemini-3-pro-image-preview returned no image data for the given prompt."
    )


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


async def generate_image_nano_banana(
    prompt: str,
    session_id: str,
    story_format: str = "default",
) -> str:
    """
    Generate an image from a prompt using Nano Banana Pro (gemini-3-pro-image-preview).

    Steps:
      1. Enrich the prompt with DataLens visual style
      2. Call Gemini image generation
      3. Upload raw PNG bytes to GCS (datalens-images/{session_id}/{uuid}.png)
      4. Return the public GCS URL

    Args:
        prompt:       Raw image description from the IMAGE_PROMPT tag.
        session_id:   Session ID for GCS path scoping.
        story_format: One of "eli5", "architecture", "analyst", "default".
                      Controls which style suffix is applied.

    Returns:
        Public GCS URL string.

    Raises:
        RuntimeError: If image generation or upload fails.
    """
    enriched = _enrich_prompt(prompt, story_format)
    logger.info(
        "Generating image for session=%s format=%s prompt_len=%d",
        session_id,
        story_format,
        len(enriched),
    )

    try:
        image_bytes = await _generate_image_bytes(enriched)
    except Exception as exc:
        logger.error(
            "Image generation failed (session=%s, format=%s): %s",
            session_id,
            story_format,
            exc,
        )
        raise RuntimeError(f"Image generation failed: {exc}") from exc

    # Detect actual image format from magic bytes
    image_id = str(uuid.uuid4())
    if image_bytes[:3] == b'\xff\xd8\xff':
        ext = "jpg"
    elif image_bytes[8:12] == b'WEBP':
        ext = "webp"
    else:
        ext = "png"
    gcs_path = f"{session_id}/{image_id}.{ext}"

    try:
        url = await upload_image_to_gcs(
            image_data=image_bytes,
            image_id=gcs_path,
        )
    except Exception as exc:
        logger.error(
            "GCS upload failed (session=%s, image_id=%s): %s",
            session_id,
            image_id,
            exc,
        )
        raise RuntimeError(f"GCS upload failed: {exc}") from exc

    logger.info(
        "Image generated and uploaded: session=%s url=%s",
        session_id,
        url,
    )
    return url


async def generate_image_on_demand(
    prompt: str,
    session_id: str,
    story_context: Optional[str] = None,
) -> str:
    """
    Generate an image on demand (e.g. triggered by the voice agent or user request).

    This is the same as generate_image_nano_banana but also accepts an optional
    story_context string that is prepended to the prompt to ground the image in
    the session's narrative.

    Args:
        prompt:        User / agent provided image description.
        session_id:    Session ID.
        story_context: Optional excerpt from the session stories to provide
                       additional visual grounding.

    Returns:
        Public GCS URL string.
    """
    # If story context is provided, prepend a brief excerpt
    full_prompt = prompt
    if story_context:
        # Take first 200 chars of context to keep prompt concise
        context_snippet = story_context.strip()[:200]
        full_prompt = f"[Data context: {context_snippet}] {prompt}"

    # Determine format from prompt keywords for style selection
    story_format = "analyst"  # default for on-demand
    lower_prompt = prompt.lower()
    if any(kw in lower_prompt for kw in ["cartoon", "simple", "child", "friendly", "eli5"]):
        story_format = "eli5"
    elif any(kw in lower_prompt for kw in ["diagram", "schema", "architecture", "er ", "entity"]):
        story_format = "architecture"

    return await generate_image_nano_banana(full_prompt, session_id, story_format)
