"""
RAG Router — FastAPI endpoints for indexing and retrieval.

Endpoints:
  POST /rag/index/dataset   — index a dataset profile
  POST /rag/index/stories   — index generated stories
  POST /rag/index/external  — multipart file upload, chunk + index
  POST /rag/retrieve        — semantic search, returns chunks + context_text
  GET  /rag/status/{session_id} — which namespaces are indexed

The ``context_text`` field in /rag/retrieve concatenates all returned chunk
contents into a single string ready for direct injection into Gemini prompts
(used by gemini_story.py and live_agent.py).
"""

from __future__ import annotations

import io
import logging
import re
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile, status
from pydantic import BaseModel, Field, field_validator

from services.rag_pipeline import rag_pipeline

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/rag", tags=["rag"])

# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class IndexDatasetRequest(BaseModel):
    session_id: str = Field(..., description="UUID4 session identifier")
    data_profile: Dict[str, Any] = Field(
        ..., description="Full data profile dict produced by the profiler service"
    )

    @field_validator("session_id")
    @classmethod
    def session_id_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("session_id must not be empty")
        return v.strip()


class IndexDatasetResponse(BaseModel):
    index_id: str = Field(..., description="Identifier for the indexed dataset namespace")
    chunks_count: int = Field(..., description="Number of chunks indexed")
    session_id: str


class IndexStoriesRequest(BaseModel):
    session_id: str = Field(..., description="UUID4 session identifier")
    stories: Dict[str, Any] = Field(
        ...,
        description=(
            "Stories dict with keys: eli5, architecture, analyst, chart_data"
        ),
    )

    @field_validator("session_id")
    @classmethod
    def session_id_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("session_id must not be empty")
        return v.strip()


class IndexStoriesResponse(BaseModel):
    index_id: str
    chunks_count: int
    session_id: str


class IndexExternalResponse(BaseModel):
    index_id: str
    chunks_count: int
    session_id: str
    filename: str


class RetrieveRequest(BaseModel):
    query: str = Field(..., description="Natural-language query string")
    session_id: str = Field(..., description="UUID4 session identifier")
    top_k: int = Field(
        default=8,
        ge=1,
        le=50,
        description="Number of chunks to return (1–50)",
    )

    @field_validator("query")
    @classmethod
    def query_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("query must not be empty")
        return v.strip()

    @field_validator("session_id")
    @classmethod
    def session_id_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("session_id must not be empty")
        return v.strip()


class RAGChunk(BaseModel):
    chunk_id: str
    content: str
    metadata: Dict[str, Any] = Field(default_factory=dict)
    score: float = Field(default=0.0, description="Cosine similarity score (0–1)")


class RetrieveResponse(BaseModel):
    chunks: List[RAGChunk]
    context_text: str = Field(
        ...,
        description=(
            "All chunk contents concatenated into a single string for "
            "direct injection into Gemini prompt context."
        ),
    )
    session_id: str
    query: str
    total_chunks: int


class NamespaceStatus(BaseModel):
    indexed: bool
    chunk_count: Optional[int] = None


class RAGStatusResponse(BaseModel):
    session_id: str
    namespaces: Dict[str, NamespaceStatus]
    total_chunks: int
    using_vertex_ai: bool


# ---------------------------------------------------------------------------
# Helper: extract text from uploaded file
# ---------------------------------------------------------------------------

_MAX_UPLOAD_BYTES = 10 * 1024 * 1024  # 10 MB


async def _extract_text_from_upload(file: UploadFile) -> str:
    """
    Read uploaded file and extract plain text.

    Supported formats:
      - .txt, .md, .csv, .json  — decoded as UTF-8 (with latin-1 fallback)
      - .pdf                    — extracted via pypdf if available
      - anything else           — attempted as UTF-8 text

    Raises HTTPException(415) if content cannot be decoded.
    """
    raw = await file.read()

    if len(raw) > _MAX_UPLOAD_BYTES:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File exceeds maximum size of {_MAX_UPLOAD_BYTES // (1024*1024)} MB.",
        )

    filename = file.filename or "upload"
    ext = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""

    # PDF extraction
    if ext == "pdf":
        try:
            import pypdf  # optional dependency

            reader = pypdf.PdfReader(io.BytesIO(raw))
            pages = [page.extract_text() or "" for page in reader.pages]
            text = "\n\n".join(pages)
            if not text.strip():
                raise HTTPException(
                    status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                    detail="PDF appears to contain no extractable text (may be image-only).",
                )
            return text
        except ImportError:
            raise HTTPException(
                status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
                detail=(
                    "PDF upload requires the 'pypdf' package. "
                    "Install it or upload a .txt file instead."
                ),
            )

    # Plain text formats
    for encoding in ("utf-8", "latin-1", "utf-16"):
        try:
            text = raw.decode(encoding)
            return text
        except UnicodeDecodeError:
            continue

    raise HTTPException(
        status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
        detail=(
            f"Could not decode file '{filename}' as text. "
            "Please upload a .txt, .md, .csv, .json, or .pdf file."
        ),
    )


# ---------------------------------------------------------------------------
# Helper: build context_text from chunks
# ---------------------------------------------------------------------------

def _build_context_text(chunks: List[Dict[str, Any]]) -> str:
    """
    Concatenate chunk contents into a single, well-structured context
    string suitable for injection into a Gemini prompt.

    Each chunk is separated by a divider and its source metadata is
    summarised so the model can attribute claims to the correct source.
    """
    if not chunks:
        return ""

    parts: List[str] = ["=== RAG CONTEXT ===\n"]
    for i, chunk in enumerate(chunks, start=1):
        meta = chunk.get("metadata", {})
        source_type = meta.get("source_type", "unknown")
        chunk_type = meta.get("chunk_type", "")
        story_format = meta.get("story_format", "")
        col_name = meta.get("column_name", "")
        filename = meta.get("filename", "")
        score = chunk.get("score", 0.0)

        # Build a concise source label
        label_parts = [f"[{i}]", source_type.upper()]
        if chunk_type:
            label_parts.append(chunk_type)
        if story_format:
            label_parts.append(f"({story_format})")
        if col_name:
            label_parts.append(f"col:{col_name}")
        if filename:
            label_parts.append(f"file:{filename}")
        label_parts.append(f"score:{score:.3f}")
        label = " | ".join(label_parts)

        content = chunk.get("content", "").strip()
        parts.append(f"--- {label} ---\n{content}")

    parts.append("\n=== END RAG CONTEXT ===")
    return "\n\n".join(parts)


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.post(
    "/index/dataset",
    response_model=IndexDatasetResponse,
    status_code=status.HTTP_200_OK,
    summary="Index a dataset profile",
    description=(
        "Chunks the given data_profile dict into columnar segments and "
        "indexes them in the 'dataset' namespace of the vector store. "
        "Returns the index_id and the number of chunks created."
    ),
)
async def index_dataset(request: IndexDatasetRequest) -> IndexDatasetResponse:
    """Index a dataset profile into the RAG store."""
    try:
        # Pre-compute chunks to get an accurate count before indexing
        chunks = await rag_pipeline.chunk_dataset_profile(
            request.data_profile, request.session_id
        )
        if not chunks:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="No chunks could be produced from the provided data_profile. "
                       "Ensure it contains a 'columns' list.",
            )

        index_id = await rag_pipeline.index_dataset(
            request.data_profile, request.session_id
        )

        return IndexDatasetResponse(
            index_id=index_id,
            chunks_count=len(chunks),
            session_id=request.session_id,
        )

    except HTTPException:
        raise
    except Exception as exc:
        logger.error(
            "index_dataset error for session %s: %s",
            request.session_id,
            exc,
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Dataset indexing failed: {exc}",
        )


@router.post(
    "/index/stories",
    response_model=IndexStoriesResponse,
    status_code=status.HTTP_200_OK,
    summary="Index generated story texts",
    description=(
        "Chunks the three story texts (eli5, architecture, analyst) and "
        "any chart_data, then indexes them in the 'stories' namespace."
    ),
)
async def index_stories(request: IndexStoriesRequest) -> IndexStoriesResponse:
    """Index story content into the RAG store."""
    try:
        chunks = await rag_pipeline.chunk_stories(
            request.stories, request.session_id
        )
        if not chunks:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="No chunks could be produced from the provided stories. "
                       "Ensure at least one of eli5/architecture/analyst is non-empty.",
            )

        index_id = await rag_pipeline.index_stories(
            request.stories, request.session_id
        )

        return IndexStoriesResponse(
            index_id=index_id,
            chunks_count=len(chunks),
            session_id=request.session_id,
        )

    except HTTPException:
        raise
    except Exception as exc:
        logger.error(
            "index_stories error for session %s: %s",
            request.session_id,
            exc,
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Stories indexing failed: {exc}",
        )


@router.post(
    "/index/external",
    response_model=IndexExternalResponse,
    status_code=status.HTTP_200_OK,
    summary="Upload and index an external document",
    description=(
        "Accepts a multipart file upload (.txt, .md, .csv, .json, .pdf). "
        "Extracts text, chunks it into 300-char windows with 50-char overlap, "
        "and indexes the chunks in the 'external_docs' namespace."
    ),
)
async def index_external(
    session_id: str = Form(..., description="UUID4 session identifier"),
    file: UploadFile = File(..., description="Document to index (.txt, .md, .pdf, etc.)"),
) -> IndexExternalResponse:
    """Index an uploaded external document."""
    if not session_id or not session_id.strip():
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="session_id form field must not be empty.",
        )
    session_id = session_id.strip()

    if not file.filename:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Uploaded file must have a filename.",
        )

    try:
        text = await _extract_text_from_upload(file)
    except HTTPException:
        raise
    except Exception as exc:
        logger.error("Text extraction failed for %s: %s", file.filename, exc)
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Could not extract text from file: {exc}",
        )

    if not text.strip():
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="The uploaded file appears to be empty or contains no readable text.",
        )

    try:
        chunks = await rag_pipeline.chunk_external_doc(
            text, session_id, file.filename
        )
        if not chunks:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="No chunks could be produced from the uploaded document.",
            )

        index_id = await rag_pipeline.index_external_doc(
            text, session_id, file.filename
        )

        return IndexExternalResponse(
            index_id=index_id,
            chunks_count=len(chunks),
            session_id=session_id,
            filename=file.filename,
        )

    except HTTPException:
        raise
    except Exception as exc:
        logger.error(
            "index_external error for session %s, file %s: %s",
            session_id,
            file.filename,
            exc,
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"External document indexing failed: {exc}",
        )


@router.post(
    "/retrieve",
    response_model=RetrieveResponse,
    status_code=status.HTTP_200_OK,
    summary="Retrieve relevant context chunks",
    description=(
        "Embeds the query with text-embedding-004, retrieves the top_k "
        "most relevant chunks for this session from the vector store, and "
        "returns them along with a pre-formatted context_text string ready "
        "for injection into a Gemini prompt."
    ),
)
async def retrieve(request: RetrieveRequest) -> RetrieveResponse:
    """Semantic search over indexed chunks for the given session."""
    try:
        raw_chunks = await rag_pipeline.retrieve(
            query=request.query,
            session_id=request.session_id,
            top_k=request.top_k,
        )

        chunks = [
            RAGChunk(
                chunk_id=c.get("chunk_id", ""),
                content=c.get("content", ""),
                metadata=c.get("metadata", {}),
                score=float(c.get("score", 0.0)),
            )
            for c in raw_chunks
        ]

        context_text = _build_context_text(raw_chunks)

        return RetrieveResponse(
            chunks=chunks,
            context_text=context_text,
            session_id=request.session_id,
            query=request.query,
            total_chunks=len(chunks),
        )

    except Exception as exc:
        logger.error(
            "retrieve error for session %s, query='%s': %s",
            request.session_id,
            request.query[:80],
            exc,
            exc_info=True,
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"RAG retrieval failed: {exc}",
        )


@router.get(
    "/status/{session_id}",
    response_model=RAGStatusResponse,
    status_code=status.HTTP_200_OK,
    summary="Get RAG index status for a session",
    description=(
        "Returns which namespaces (dataset, stories, external_docs) have "
        "indexed chunks for the given session, along with the total chunk "
        "count and whether Vertex AI Vector Search is active."
    ),
)
async def rag_status(session_id: str) -> RAGStatusResponse:
    """Return index status for a session."""
    if not session_id or not session_id.strip():
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="session_id path parameter must not be empty.",
        )
    session_id = session_id.strip()

    try:
        namespace_map = rag_pipeline.get_indexed_namespaces(session_id)
        total = rag_pipeline.get_chunk_count(session_id)

        namespaces: Dict[str, NamespaceStatus] = {}
        for ns, is_indexed in namespace_map.items():
            # Count chunks per namespace from the in-memory mirror
            ns_count = sum(
                1
                for meta in rag_pipeline._memory_store._metadata.values()
                if meta.get("session_id") == session_id
                and meta.get("source_type") == ns
            )
            namespaces[ns] = NamespaceStatus(
                indexed=is_indexed,
                chunk_count=ns_count if is_indexed else 0,
            )

        return RAGStatusResponse(
            session_id=session_id,
            namespaces=namespaces,
            total_chunks=total,
            using_vertex_ai=rag_pipeline._using_vertex(),
        )

    except Exception as exc:
        logger.error(
            "rag_status error for session %s: %s", session_id, exc, exc_info=True
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not retrieve RAG status: {exc}",
        )
