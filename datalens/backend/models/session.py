"""
Pydantic models for DataLens session management.

Session JSON schema (stored in GCS):
{
  "session_id": "uuid",
  "created_at": "ISO",
  "filename": "sales_q3.csv",
  "data_profile": {},
  "stories": { "eli5": "", "architecture": "", "analyst": "", "chart_data": {} },
  "images": [{ "url": "", "prompt": "", "format": "eli5" }],
  "conversation_history": [{ "role": "user", "content": "", "timestamp": "" }],
  "rag_index_ids": { "dataset": "", "stories": "", "external": "" }
}
"""

from __future__ import annotations

from datetime import datetime
from typing import Any, Optional
from pydantic import BaseModel, Field


class ImageRecord(BaseModel):
    """Represents a single generated image attached to a session."""

    url: str = Field(..., description="Public GCS URL of the generated image")
    prompt: str = Field(..., description="The text prompt used to generate the image")
    format: str = Field(
        ...,
        description="The story format that triggered this image: eli5, architecture, or analyst",
    )


class ConversationMessage(BaseModel):
    """A single turn in the voice / chat conversation."""

    role: str = Field(
        ...,
        description="Speaker role: 'user' or 'assistant'",
        pattern="^(user|assistant)$",
    )
    content: str = Field(..., description="Text content of the message")
    timestamp: str = Field(..., description="ISO-8601 timestamp of the message")


class StoriesContent(BaseModel):
    """The three story format texts plus optional chart data."""

    eli5: str = Field(default="", description="ELI5 story narrative text")
    architecture: str = Field(default="", description="Architecture / schema story text")
    analyst: str = Field(default="", description="Analyst KPI / trends story text")
    chart_data: dict[str, Any] = Field(
        default_factory=dict,
        description="Recharts-compatible chart data extracted from the Analyst story",
    )


class RAGIndexIds(BaseModel):
    """Vertex AI Vector Search index deployment IDs for each namespace."""

    dataset: str = Field(default="", description="Index ID for columnar dataset chunks")
    stories: str = Field(default="", description="Index ID for story text chunks")
    external: str = Field(default="", description="Index ID for external documents")


class SessionCreate(BaseModel):
    """
    Payload accepted when creating a new session programmatically
    (not via file upload — that path uses multipart form data directly).
    """

    filename: str = Field(..., description="Original filename of the uploaded dataset")
    data_profile: dict[str, Any] = Field(
        ..., description="Full Pandas profiling output produced by profiler.py"
    )


class SessionRead(BaseModel):
    """
    Full session document as stored in GCS and returned to the frontend.
    All fields mirror the Session JSON Schema in CLAUDE.md.
    """

    session_id: str = Field(..., description="UUID4 string")
    created_at: str = Field(..., description="ISO-8601 creation timestamp")
    filename: str = Field(..., description="Original dataset filename")
    data_profile: dict[str, Any] = Field(
        default_factory=dict,
        description="Rich profiling dict produced by profiler.py",
    )
    stories: StoriesContent = Field(
        default_factory=StoriesContent,
        description="Generated story texts and chart data",
    )
    images: list[ImageRecord] = Field(
        default_factory=list,
        description="All images generated for this session",
    )
    conversation_history: list[ConversationMessage] = Field(
        default_factory=list,
        description="Full conversation log with the voice/chat agent",
    )
    rag_index_ids: RAGIndexIds = Field(
        default_factory=RAGIndexIds,
        description="Vertex AI Vector Search deployment IDs per namespace",
    )


class SessionListItem(BaseModel):
    """
    Compact session representation used in the left-sidebar session list.
    Mirrors the Firestore session document schema.
    """

    session_id: str = Field(..., description="UUID4 string")
    filename: str = Field(..., description="Original dataset filename")
    created_at: str = Field(..., description="ISO-8601 creation timestamp")
    preview_text: str = Field(
        default="",
        description="First ~100 characters of the ELI5 story for display",
    )
    image_count: int = Field(default=0, description="Number of generated images")
    thumbnail_url: Optional[str] = Field(
        default=None,
        description="Public GCS URL of the first generated image (thumbnail)",
    )
