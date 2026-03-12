"""
Pydantic models for the RAG (Retrieval-Augmented Generation) pipeline.

The RAG pipeline uses Vertex AI Vector Search with three namespaces:
  - dataset:       columnar chunks, one per column + overall stats
  - stories:       ~200-token chunks of each story format text
  - external_docs: user-uploaded documents, 300 tokens / 50 token overlap
"""

from __future__ import annotations

from typing import Any, Literal, Optional
from pydantic import BaseModel, Field


class RAGChunk(BaseModel):
    """
    A single retrieved chunk returned by the vector search pipeline.
    Includes the original content, source metadata, and similarity score.
    """

    chunk_id: str = Field(
        ...,
        description="Unique identifier for this chunk (UUID or deterministic hash)",
    )
    content: str = Field(
        ...,
        description="Raw text content of the chunk",
    )
    source_type: Literal["dataset", "stories", "external_docs"] = Field(
        ...,
        description="Which namespace this chunk was indexed into",
    )
    metadata: dict[str, Any] = Field(
        default_factory=dict,
        description=(
            "Arbitrary metadata: session_id, column_name, story_format, "
            "chunk_index, token_count, etc."
        ),
    )
    score: float = Field(
        ...,
        ge=0.0,
        le=1.0,
        description="Cosine similarity score (0.0–1.0) from Vertex AI Vector Search",
    )


class RAGQuery(BaseModel):
    """
    Input for a RAG retrieval request.
    The pipeline will embed the query text and search across all namespaces
    (or filtered by source_type if provided).
    """

    query: str = Field(
        ...,
        min_length=1,
        description="Natural-language query string to embed and search",
    )
    session_id: str = Field(
        ...,
        description="Session scope — only chunks belonging to this session are searched",
    )
    top_k: int = Field(
        default=8,
        ge=1,
        le=50,
        description="Maximum number of chunks to retrieve across all namespaces",
    )
    source_types: Optional[list[Literal["dataset", "stories", "external_docs"]]] = Field(
        default=None,
        description=(
            "Optional namespace filter. If None, all three namespaces are searched "
            "and results are merged by score."
        ),
    )


class RAGResult(BaseModel):
    """
    Output of a RAG retrieval operation, containing ranked chunks
    and the query embedding (for logging / debugging).
    """

    chunks: list[RAGChunk] = Field(
        ...,
        description="Top-k retrieved chunks, sorted descending by score",
    )
    query_embedding: list[float] = Field(
        ...,
        description="768-dimensional embedding vector produced for the query",
    )
    total_searched: int = Field(
        default=0,
        description="Total number of candidate chunks searched before top-k filtering",
    )


class IndexRequest(BaseModel):
    """
    Request to index new content into the Vertex AI Vector Search index.
    Called after story generation or external document upload.
    """

    session_id: str = Field(
        ...,
        description="Session this content belongs to",
    )
    content: str = Field(
        ...,
        min_length=1,
        description="Text content to embed and index",
    )
    source_type: Literal["dataset", "stories", "external_docs"] = Field(
        ...,
        description="Target namespace for indexing",
    )
    metadata: dict[str, Any] = Field(
        default_factory=dict,
        description=(
            "Metadata to store alongside the vector: column_name, story_format, "
            "chunk_index, token_count, etc."
        ),
    )
    chunk_id: Optional[str] = Field(
        default=None,
        description=(
            "Optional explicit chunk ID. If None, a UUID will be generated. "
            "Use deterministic IDs to allow upserts."
        ),
    )
