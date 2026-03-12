"""
RAG Pipeline — Vertex AI Vector Search + text-embedding-004

Manages embedding, indexing, and retrieval across three namespaces:
  - dataset   : columnar chunks (one per column + stats + summary)
  - stories   : ~200-char story text segments per format
  - external_docs : user-uploaded docs, 300-char / 50-char overlap

Falls back to an in-memory numpy store when Vertex AI is not configured
(VERTEX_AI_INDEX_ENDPOINT_ID is absent), which keeps local development
fully functional without cloud credentials.
"""

from __future__ import annotations

import json
import logging
import math
import os
import re
import uuid
from typing import Any, Dict, List, Optional, Tuple

import httpx
import numpy as np
from google import genai

# Lazy import to avoid GCP metadata server hang when Vertex AI is not configured
aiplatform = None  # type: ignore[assignment]

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# In-memory fallback store
# ---------------------------------------------------------------------------

class _InMemoryVectorStore:
    """
    A minimal cosine-similarity vector store backed entirely by numpy arrays.
    Used whenever Vertex AI Vector Search is not configured.
    """

    def __init__(self) -> None:
        # keyed by chunk_id
        self._vectors: Dict[str, np.ndarray] = {}
        self._metadata: Dict[str, Dict[str, Any]] = {}
        self._contents: Dict[str, str] = {}

    def upsert(self, chunk_id: str, vector: List[float], content: str, metadata: Dict[str, Any]) -> None:
        self._vectors[chunk_id] = np.asarray(vector, dtype=np.float32)
        self._metadata[chunk_id] = metadata
        self._contents[chunk_id] = content

    def query(
        self,
        query_vector: List[float],
        session_id: str,
        top_k: int = 8,
    ) -> List[Dict[str, Any]]:
        """Return top_k results filtered by session_id, ranked by cosine similarity."""
        qv = np.asarray(query_vector, dtype=np.float32)
        qv_norm = qv / (np.linalg.norm(qv) + 1e-10)

        results: List[Tuple[float, str]] = []
        for chunk_id, vec in self._vectors.items():
            meta = self._metadata.get(chunk_id, {})
            if session_id != "global_agent" and meta.get("session_id") != session_id:
                continue
            vec_norm = vec / (np.linalg.norm(vec) + 1e-10)
            score = float(np.dot(qv_norm, vec_norm))
            results.append((score, chunk_id))

        results.sort(key=lambda t: t[0], reverse=True)
        top = results[:top_k]

        out: List[Dict[str, Any]] = []
        for score, chunk_id in top:
            out.append(
                {
                    "chunk_id": chunk_id,
                    "content": self._contents.get(chunk_id, ""),
                    "metadata": self._metadata.get(chunk_id, {}),
                    "score": score,
                }
            )
        return out


# ---------------------------------------------------------------------------
# Main RAG pipeline
# ---------------------------------------------------------------------------

class RAGPipeline:
    """
    Manages embedding, indexing, and retrieval across 3 namespaces.

    Embedding model : text-embedding-004  (768-dim, Vertex AI / GenAI SDK)
    Storage         : Vertex AI Vector Search (MatchingEngineIndexEndpoint)
    Fallback        : _InMemoryVectorStore (numpy cosine similarity)

    Namespace separation is achieved via the ``source_type`` and
    ``session_id`` metadata fields stored alongside each vector.  Queries
    always filter by ``session_id`` so sessions are fully isolated.
    """

    # Maximum items per embedding batch (API limit safe-guard)
    _EMBED_BATCH_SIZE = 5
    # Maximum items per upsert batch sent to Vertex AI REST endpoint
    _UPSERT_BATCH_SIZE = 100

    def __init__(self) -> None:
        self.project: str = os.environ.get("GOOGLE_CLOUD_PROJECT", "")
        self.location: str = os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1")
        self.index_endpoint_id: Optional[str] = os.environ.get("VERTEX_AI_INDEX_ENDPOINT_ID")
        self.deployed_index_id: str = os.environ.get(
            "VERTEX_AI_DEPLOYED_INDEX_ID", "datalens-rag-deployed"
        )

        self._genai_client: Optional[genai.Client] = None  # lazy init
        self._index_endpoint: Optional[Any] = None

        # In-memory fallback — always initialised; only used when Vertex AI absent
        self._memory_store = _InMemoryVectorStore()

        # Flag so we only log the fallback warning once
        self._fallback_warned = False
        
        # Track which sessions have been indexed in-memory to avoid duplicate work
        self._indexed_sessions: set = set()

    @property
    def genai_client(self) -> genai.Client:
        """Lazy-init genai client so env vars are loaded before first use."""
        if self._genai_client is None:
            api_key = os.environ.get("GENAI_API_KEY")
            if api_key:
                self._genai_client = genai.Client(api_key=api_key)
            else:
                self._genai_client = genai.Client(
                    vertexai=True,
                    project=os.environ.get("GOOGLE_CLOUD_PROJECT"),
                    location=os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1"),
                )
        return self._genai_client

    # ------------------------------------------------------------------
    # Vertex AI helpers
    # ------------------------------------------------------------------

    async def get_index_endpoint(self) -> Optional[Any]:
        """
        Lazy-initialise the Vertex AI MatchingEngineIndexEndpoint.

        Returns None when VERTEX_AI_INDEX_ENDPOINT_ID is not set, which
        causes all calls to silently fall through to the in-memory store.
        """
        if not self.index_endpoint_id:
            return None

        if self._index_endpoint is None:
            try:
                from google.cloud import aiplatform as _aiplatform
                _aiplatform.init(project=self.project, location=self.location)
                endpoint_name = (
                    f"projects/{self.project}/locations/{self.location}"
                    f"/indexEndpoints/{self.index_endpoint_id}"
                )
                self._index_endpoint = _aiplatform.MatchingEngineIndexEndpoint(
                    index_endpoint_name=endpoint_name
                )
                logger.info("Vertex AI index endpoint loaded: %s", endpoint_name)
            except Exception as exc:
                logger.error("Failed to load Vertex AI index endpoint: %s", exc)
                self._index_endpoint = None

        return self._index_endpoint

    def _using_vertex(self) -> bool:
        return bool(self.index_endpoint_id and self.project)

    def _warn_fallback_once(self) -> None:
        if not self._fallback_warned:
            logger.warning(
                "VERTEX_AI_INDEX_ENDPOINT_ID not set — using in-memory vector store. "
                "This is suitable for local development only."
            )
            self._fallback_warned = True

    # ------------------------------------------------------------------
    # Embedding
    # ------------------------------------------------------------------

    async def embed_text(self, text: str) -> List[float]:
        """
        Embed a single string using gemini-embedding-001.

        Returns a 3072-dimensional float list.  On error falls back to a
        zero vector of the correct dimension so the rest of the pipeline
        does not crash.
        """
        try:
            response = await self.genai_client.aio.models.embed_content(
                model="gemini-embedding-001",
                contents=[text],
            )
            return response.embeddings[0].values
        except Exception as exc:
            logger.error("embed_text failed: %s", exc)
            return [0.0] * 3072

    async def _embed_batch(self, texts: List[str]) -> List[List[float]]:
        """
        Embed a list of texts in batches of _EMBED_BATCH_SIZE.
        Returns a list of 3072-dim vectors in the same order as the input.
        """
        import asyncio

        all_vectors: List[List[float]] = []
        for start in range(0, len(texts), self._EMBED_BATCH_SIZE):
            batch = texts[start : start + self._EMBED_BATCH_SIZE]
            try:
                response = await self.genai_client.aio.models.embed_content(
                    model="gemini-embedding-001",
                    contents=batch,
                )
                for emb in response.embeddings:
                    all_vectors.append(emb.values)
            except Exception as exc:
                logger.error("Batch embedding failed (offset %d): %s", start, exc)
                # Fall back to individual embedding calls for this batch
                for text in batch:
                    all_vectors.append(await self.embed_text(text))
        return all_vectors

    # ------------------------------------------------------------------
    # Chunking helpers
    # ------------------------------------------------------------------

    async def chunk_dataset_profile(
        self, data_profile: dict, session_id: str
    ) -> List[dict]:
        """
        Chunk a Pandas data profile dict into indexable pieces.

        Strategy:
        - One overall summary chunk (filename, shape, numeric overview).
        - One chunk per column (name, dtype, null-rate, unique, stats,
          top/sample values).
        - One time-period chunk for every datetime-typed column that has a
          min/max present (captures temporal scope of the dataset).

        Each chunk dict: {chunk_id, content, metadata}
        """
        chunks: List[dict] = []

        filename = data_profile.get("filename", "unknown")
        shape = data_profile.get("shape", {})
        rows = shape.get("rows", 0)
        cols_count = shape.get("columns", 0)

        # ---- overall summary ----
        summary_lines = [
            f"Dataset: {filename}",
            f"Shape: {rows} rows x {cols_count} columns",
        ]
        numeric_cols = [
            c["name"]
            for c in data_profile.get("columns", [])
            if c.get("dtype") in ("int64", "float64", "int32", "float32", "numeric")
        ]
        if numeric_cols:
            summary_lines.append(f"Numeric columns: {', '.join(numeric_cols)}")

        datetime_cols = [
            c["name"]
            for c in data_profile.get("columns", [])
            if "datetime" in str(c.get("dtype", "")).lower()
            or "date" in str(c.get("dtype", "")).lower()
        ]
        if datetime_cols:
            summary_lines.append(f"Date/time columns: {', '.join(datetime_cols)}")

        categorical_cols = [
            c["name"]
            for c in data_profile.get("columns", [])
            if c.get("dtype") in ("object", "category", "string", "bool")
        ]
        if categorical_cols:
            summary_lines.append(f"Categorical columns: {', '.join(categorical_cols)}")

        summary_content = "\n".join(summary_lines)
        chunks.append(
            {
                "chunk_id": f"{session_id}_dataset_summary",
                "content": summary_content,
                "metadata": {
                    "session_id": session_id,
                    "source_type": "dataset",
                    "chunk_type": "summary",
                    "filename": filename,
                },
            }
        )

        # ---- per-column chunks ----
        for col in data_profile.get("columns", []):
            col_name = col.get("name", "unknown")
            dtype = col.get("dtype", "unknown")

            lines = [
                f"Column: {col_name}",
                f"Type: {dtype}",
                f"Null rate: {col.get('null_pct', 0):.1f}%",
                f"Unique values: {col.get('unique_count', 0)}",
            ]

            sample_vals = col.get("sample_values", [])
            if sample_vals:
                lines.append(f"Sample values: {', '.join(str(v) for v in sample_vals[:5])}")

            if col.get("mean") is not None:
                lines.append(
                    f"Mean: {col['mean']:.4f}, Std: {col.get('std', 0):.4f}"
                )
                lines.append(
                    f"Min: {col.get('min')}, Max: {col.get('max')}"
                )
                p25 = col.get("p25") or col.get("percentile_25")
                p75 = col.get("p75") or col.get("percentile_75")
                p50 = col.get("p50") or col.get("median")
                if p50 is not None:
                    lines.append(f"Median (p50): {p50}, p25: {p25}, p75: {p75}")

            top_vals = col.get("top_values")
            if top_vals:
                # top_values may be dict {value: count} or list
                if isinstance(top_vals, dict):
                    top_str = ", ".join(
                        f"{k}: {v}" for k, v in list(top_vals.items())[:5]
                    )
                else:
                    top_str = ", ".join(str(v) for v in top_vals[:5])
                lines.append(f"Top values: {top_str}")

            value_counts = col.get("value_counts")
            if value_counts and isinstance(value_counts, dict):
                vc_str = ", ".join(
                    f"{k}: {v}" for k, v in list(value_counts.items())[:5]
                )
                lines.append(f"Value counts: {vc_str}")

            # Sanitise chunk_id — strip non-alphanumeric chars from col name
            safe_col_name = re.sub(r"[^a-zA-Z0-9_-]", "_", col_name)[:50]
            chunks.append(
                {
                    "chunk_id": f"{session_id}_col_{safe_col_name}",
                    "content": "\n".join(lines),
                    "metadata": {
                        "session_id": session_id,
                        "source_type": "dataset",
                        "chunk_type": "column",
                        "column_name": col_name,
                        "dtype": dtype,
                    },
                }
            )

            # ---- time-period sub-chunk for datetime columns ----
            if (
                "datetime" in str(dtype).lower() or "date" in str(dtype).lower()
            ) and col.get("min") and col.get("max"):
                time_lines = [
                    f"Time period for column '{col_name}':",
                    f"  Earliest: {col['min']}",
                    f"  Latest:   {col['max']}",
                ]
                if col.get("unique_count"):
                    time_lines.append(
                        f"  Distinct timestamps: {col['unique_count']}"
                    )
                chunks.append(
                    {
                        "chunk_id": f"{session_id}_time_{safe_col_name}",
                        "content": "\n".join(time_lines),
                        "metadata": {
                            "session_id": session_id,
                            "source_type": "dataset",
                            "chunk_type": "time_period",
                            "column_name": col_name,
                        },
                    }
                )

        return chunks

    async def chunk_db_schema(self, db_schema: dict, session_id: str) -> List[dict]:
        """
        Chunk a DB schema dict into indexable pieces.

        Strategy:
        - One overall database summary chunk (dialect, table list).
        - One chunk per table: columns with types/PK/nullability, FK edges, indexes,
          row count. Compact — typically 60-150 tokens; no actual data.
        - One global relationships chunk listing all FK edges (enables JOIN hints).

        These chunks are tagged source_type="dataset" so they are retrieved
        alongside regular dataset chunks during story generation and agent queries.
        """
        chunks: List[dict] = []
        dialect = db_schema.get("dialect", "sql")
        database_name = db_schema.get("database_name", "database")

        # ---- database summary chunk ----
        table_names = [t["name"] for t in db_schema.get("tables", [])]
        summary_lines = [
            f"Database: {database_name} ({dialect})",
            f"Total tables: {db_schema.get('total_tables', 0)}",
            f"Total columns: {db_schema.get('total_columns', 0)}",
            f"Total foreign key relationships: {db_schema.get('total_relationships', 0)}",
        ]
        if table_names:
            summary_lines.append(f"Tables: {', '.join(table_names)}")
        chunks.append(
            {
                "chunk_id": f"{session_id}_db_summary",
                "content": "\n".join(summary_lines),
                "metadata": {
                    "session_id": session_id,
                    "source_type": "dataset",
                    "chunk_type": "db_summary",
                    "dialect": dialect,
                },
            }
        )

        # ---- per-table chunks ----
        for table in db_schema.get("tables", []):
            table_name = table["name"]
            schema_name = table.get("schema", "")
            safe_name = re.sub(r"[^a-zA-Z0-9_-]", "_", f"{schema_name}_{table_name}")[:60]

            # Column descriptions
            col_parts: List[str] = []
            for col in table["columns"]:
                flags: List[str] = []
                if col.get("primary_key"):
                    flags.append("PK")
                if not col.get("nullable", True):
                    flags.append("NOT NULL")
                flag_str = f" [{', '.join(flags)}]" if flags else ""
                col_parts.append(f"{col['name']} {col['type']}{flag_str}")

            qualified = (
                f"{schema_name}.{table_name}"
                if schema_name and schema_name not in ("default", "public")
                else table_name
            )
            row_info = (
                f" ({table['row_count']:,} rows)"
                if table.get("row_count") is not None
                else ""
            )
            lines = [f"Table: {qualified}{row_info}"]

            if col_parts:
                lines.append(f"Columns: {'; '.join(col_parts)}")

            for fk in table.get("foreign_keys", []):
                for local_col, ref_col in zip(
                    fk["columns"], fk["references"]["columns"]
                ):
                    lines.append(f"FK: {local_col} → {fk['references']['table']}.{ref_col}")

            for idx in table.get("indexes", []):
                uniq = "UNIQUE " if idx.get("unique") else ""
                idx_cols = ", ".join(idx.get("columns", []))
                if idx_cols:
                    lines.append(f"Index: {uniq}({idx_cols})")

            chunks.append(
                {
                    "chunk_id": f"{session_id}_dbtable_{safe_name}",
                    "content": "\n".join(lines),
                    "metadata": {
                        "session_id": session_id,
                        "source_type": "dataset",
                        "chunk_type": "db_table",
                        "table_name": table_name,
                        "schema_name": schema_name,
                    },
                }
            )

        # ---- relationships chunk ----
        relationships = db_schema.get("relationships", [])
        if relationships:
            rel_lines = [f"Foreign key relationships in {database_name} ({dialect}):"]
            for rel in relationships:
                rel_lines.append(
                    f"  {rel['from_table']}.{rel['from_column']}"
                    f" → {rel['to_table']}.{rel['to_column']}"
                )
            chunks.append(
                {
                    "chunk_id": f"{session_id}_db_relationships",
                    "content": "\n".join(rel_lines),
                    "metadata": {
                        "session_id": session_id,
                        "source_type": "dataset",
                        "chunk_type": "db_relationships",
                    },
                }
            )

        return chunks

    async def chunk_stories(
        self, stories: dict, session_id: str
    ) -> List[dict]:
        """
        Chunk the three story texts (eli5, architecture, analyst) into
        ~200-character windows with ~40-character overlap.

        Each chunk is tagged with its story format so retrieval can prefer
        a specific format when the query makes it relevant.

        Also creates one summary chunk per format from the first 500 chars.
        """
        chunks: List[dict] = []
        window_size = 200
        overlap = 40

        for fmt in ("eli5", "architecture", "analyst"):
            text: str = stories.get(fmt, "")
            if not text:
                continue

            # Summary chunk — first 500 chars of each format
            preview = text[:500].strip()
            if preview:
                chunks.append(
                    {
                        "chunk_id": f"{session_id}_story_{fmt}_summary",
                        "content": f"[{fmt.upper()} story summary]\n{preview}",
                        "metadata": {
                            "session_id": session_id,
                            "source_type": "stories",
                            "chunk_type": "story_summary",
                            "story_format": fmt,
                        },
                    }
                )

            # Split into sentences first, then group into windows
            # Simple sentence splitter: split on '. ', '! ', '? '
            sentences = re.split(r"(?<=[.!?])\s+", text)
            sentences = [s.strip() for s in sentences if s.strip()]

            # Sliding window over sentences aggregated by character count
            idx = 0
            chunk_num = 0
            while idx < len(sentences):
                window_chars = 0
                window_sentences: List[str] = []
                j = idx
                while j < len(sentences) and window_chars < window_size:
                    window_sentences.append(sentences[j])
                    window_chars += len(sentences[j]) + 1
                    j += 1

                if window_sentences:
                    content = " ".join(window_sentences)
                    safe_fmt = fmt[:20]
                    chunks.append(
                        {
                            "chunk_id": f"{session_id}_story_{safe_fmt}_{chunk_num}",
                            "content": f"[{fmt.upper()}]\n{content}",
                            "metadata": {
                                "session_id": session_id,
                                "source_type": "stories",
                                "chunk_type": "story_segment",
                                "story_format": fmt,
                                "chunk_num": chunk_num,
                            },
                        }
                    )
                    chunk_num += 1

                    # Determine how many sentences to step forward
                    # We want ~overlap chars of overlap, so step back a bit
                    step = max(1, j - idx - 1)
                    overlap_chars = 0
                    step_back = 0
                    for k in range(j - 1, idx, -1):
                        overlap_chars += len(sentences[k]) + 1
                        if overlap_chars >= overlap:
                            break
                        step_back += 1

                    idx += max(1, step - step_back)
                else:
                    idx += 1

        # Also chunk chart_data if present
        chart_data = stories.get("chart_data", {})
        if chart_data:
            try:
                chart_str = json.dumps(chart_data, indent=2)
                # Split chart_data into chunks of 300 chars each
                for i, start in enumerate(range(0, len(chart_str), 300)):
                    segment = chart_str[start : start + 300]
                    chunks.append(
                        {
                            "chunk_id": f"{session_id}_chart_data_{i}",
                            "content": f"[CHART DATA]\n{segment}",
                            "metadata": {
                                "session_id": session_id,
                                "source_type": "stories",
                                "chunk_type": "chart_data",
                            },
                        }
                    )
            except (TypeError, ValueError) as exc:
                logger.warning("Could not serialise chart_data for chunking: %s", exc)

        return chunks

    async def chunk_external_doc(
        self, text: str, session_id: str, filename: str
    ) -> List[dict]:
        """
        Chunk an external document into 300-character windows with
        50-character overlap.

        Chunks are tagged with the source filename so retrieval results
        can attribute their origin clearly.
        """
        chunks: List[dict] = []
        window_size = 300
        overlap = 50
        safe_filename = re.sub(r"[^a-zA-Z0-9_.-]", "_", filename)[:40]

        if not text or not text.strip():
            return chunks

        # Normalise whitespace
        text = re.sub(r"\n{3,}", "\n\n", text)
        text = text.strip()

        # Split into paragraphs first for more coherent chunking
        paragraphs = re.split(r"\n{2,}", text)
        paragraphs = [p.strip() for p in paragraphs if p.strip()]

        # Flatten paragraphs back into a character stream, then apply
        # sliding window so we get consistent chunk sizes regardless of
        # paragraph boundaries.
        flat_text = "\n\n".join(paragraphs)

        chunk_num = 0
        pos = 0
        while pos < len(flat_text):
            end = min(pos + window_size, len(flat_text))
            segment = flat_text[pos:end]

            # Try to end on a sentence boundary within the last 60 chars
            if end < len(flat_text):
                boundary_search = segment[-60:]
                match = None
                for pattern in (r"[.!?]\s", r"[,;]\s", r"\s"):
                    matches = list(re.finditer(pattern, boundary_search))
                    if matches:
                        match = matches[-1]
                        break
                if match:
                    boundary_offset = len(segment) - 60 + match.start() + 1
                    segment = segment[:boundary_offset].rstrip()

            if segment:
                chunks.append(
                    {
                        "chunk_id": f"{session_id}_ext_{safe_filename}_{chunk_num}",
                        "content": f"[Source: {filename}]\n{segment}",
                        "metadata": {
                            "session_id": session_id,
                            "source_type": "external_docs",
                            "chunk_type": "external_segment",
                            "filename": filename,
                            "chunk_num": chunk_num,
                        },
                    }
                )
                chunk_num += 1

            # Advance by window_size minus overlap, but at least 1
            advance = max(1, window_size - overlap)
            pos += advance

        return chunks

    # ------------------------------------------------------------------
    # Indexing
    # ------------------------------------------------------------------

    async def index_chunks(self, chunks: List[dict]) -> bool:
        """
        Embed all chunks, then upsert them into Vertex AI Vector Search
        or the in-memory fallback.

        Embedding is batched in groups of _EMBED_BATCH_SIZE.
        Upsert to Vertex AI is done via the streaming upsert REST API
        in batches of _UPSERT_BATCH_SIZE.

        Returns True on success, False if a non-recoverable error occurred.
        """
        if not chunks:
            logger.debug("index_chunks called with empty chunk list — skipping.")
            return True

        # ---- 1. Embed all chunks ----
        texts = [c["content"] for c in chunks]
        try:
            vectors = await self._embed_batch(texts)
        except Exception as exc:
            logger.error("Embedding failed during index_chunks: %s", exc)
            return False

        if len(vectors) != len(chunks):
            logger.error(
                "Vector count (%d) does not match chunk count (%d).",
                len(vectors),
                len(chunks),
            )
            return False

        # ---- 2. Route to Vertex AI or in-memory ----
        if self._using_vertex():
            return await self._upsert_to_vertex(chunks, vectors)
        else:
            self._warn_fallback_once()
            for chunk, vector in zip(chunks, vectors):
                self._memory_store.upsert(
                    chunk_id=chunk["chunk_id"],
                    vector=vector,
                    content=chunk["content"],
                    metadata=chunk["metadata"],
                )
            logger.debug("Indexed %d chunks to in-memory store.", len(chunks))
            return True

    async def _upsert_to_vertex(
        self, chunks: List[dict], vectors: List[List[float]]
    ) -> bool:
        """
        Upsert datapoints to Vertex AI Vector Search via the REST streaming
        upsert endpoint.

        Endpoint:
            POST https://{location}-aiplatform.googleapis.com/v1/
                projects/{project}/locations/{location}/indexes/{index_id}:upsertDatapoints

        We need the *index* resource ID (not the endpoint).  The SDK
        MatchingEngineIndexEndpoint object exposes the deployed indexes
        (which include the index resource name) so we derive it from there.
        """
        endpoint = await self.get_index_endpoint()
        if endpoint is None:
            logger.error("Vertex AI index endpoint unavailable — falling back to memory.")
            self._warn_fallback_once()
            for chunk, vector in zip(chunks, vectors):
                self._memory_store.upsert(
                    chunk_id=chunk["chunk_id"],
                    vector=vector,
                    content=chunk["content"],
                    metadata=chunk["metadata"],
                )
            return True

        # Derive index resource name from deployed indexes
        index_resource_name: Optional[str] = None
        try:
            deployed = endpoint.deployed_indexes
            for di in deployed:
                if di.id == self.deployed_index_id:
                    index_resource_name = di.index
                    break
            if not index_resource_name and deployed:
                # Fall back to first deployed index
                index_resource_name = deployed[0].index
        except Exception as exc:
            logger.error("Could not determine index resource name: %s", exc)

        if not index_resource_name:
            logger.error(
                "No deployed index found with id '%s'. Falling back to memory.",
                self.deployed_index_id,
            )
            for chunk, vector in zip(chunks, vectors):
                self._memory_store.upsert(
                    chunk_id=chunk["chunk_id"],
                    vector=vector,
                    content=chunk["content"],
                    metadata=chunk["metadata"],
                )
            return True

        # Build REST URL
        # index_resource_name format: projects/.../locations/.../indexes/{id}
        upsert_url = (
            f"https://{self.location}-aiplatform.googleapis.com/v1/"
            f"{index_resource_name}:upsertDatapoints"
        )

        # Obtain access token via google-auth
        try:
            import google.auth
            import google.auth.transport.requests

            creds, _ = google.auth.default(
                scopes=["https://www.googleapis.com/auth/cloud-platform"]
            )
            auth_req = google.auth.transport.requests.Request()
            creds.refresh(auth_req)
            access_token = creds.token
        except Exception as exc:
            logger.error("Failed to obtain GCP access token: %s", exc)
            return False

        headers = {
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        }

        success = True
        async with httpx.AsyncClient(timeout=60.0) as client:
            for start in range(0, len(chunks), self._UPSERT_BATCH_SIZE):
                batch_chunks = chunks[start : start + self._UPSERT_BATCH_SIZE]
                batch_vectors = vectors[start : start + self._UPSERT_BATCH_SIZE]

                datapoints = []
                for chunk, vector in zip(batch_chunks, batch_vectors):
                    # Restricts encode metadata for server-side filtering
                    restricts = []
                    for key in ("session_id", "source_type", "chunk_type"):
                        val = chunk["metadata"].get(key)
                        if val:
                            restricts.append(
                                {
                                    "namespace": key,
                                    "allowList": [str(val)],
                                }
                            )
                    datapoints.append(
                        {
                            "datapointId": chunk["chunk_id"],
                            "featureVector": vector,
                            "restricts": restricts,
                        }
                    )

                payload = {"datapoints": datapoints}
                try:
                    resp = await client.post(upsert_url, headers=headers, json=payload)
                    resp.raise_for_status()
                    logger.debug(
                        "Upserted batch of %d datapoints to Vertex AI.", len(datapoints)
                    )
                except httpx.HTTPStatusError as exc:
                    logger.error(
                        "Vertex AI upsert HTTP error %d: %s",
                        exc.response.status_code,
                        exc.response.text[:500],
                    )
                    success = False
                except Exception as exc:
                    logger.error("Vertex AI upsert failed: %s", exc)
                    success = False

        return success

    # ------------------------------------------------------------------
    # Retrieval
    # ------------------------------------------------------------------

    async def ensure_session_indexed(self, session_id: str) -> None:
        """
        Ensure a session's data is loaded into the in-memory vector store.
        
        This is called before each retrieval query. If the session has not been
        indexed yet, it loads the session JSON from disk/GCS and indexes the
        data_profile and stories on-demand.
        
        This is the key fix for the 'global agent has no context for dragged sessions'
        bug: since the in-memory store is ephemeral, we must lazily re-index sessions
        from their persisted JSON files.
        """
        if session_id in self._indexed_sessions or session_id == "global_agent":
            return
        
        # Mark as indexing (even before we finish, to prevent concurrent duplicate work)
        self._indexed_sessions.add(session_id)
        
        try:
            from services.gcs_service import load_session
            session_data = await load_session(session_id)
            if session_data is None:
                logger.warning("ensure_session_indexed: session %s not found on disk.", session_id)
                return
            
            chunks: List[dict] = []

            # Index dataset context — prefer db_schema for database sessions,
            # fall back to flat data_profile for CSV/Excel sessions.
            db_schema = session_data.get("db_schema")
            data_profile = session_data.get("data_profile")
            if db_schema:
                profile_chunks = await self.chunk_db_schema(db_schema, session_id)
                chunks.extend(profile_chunks)
                logger.info(
                    "ensure_session_indexed: prepared %d db_schema chunks for %s",
                    len(profile_chunks),
                    session_id,
                )
            elif data_profile:
                profile_chunks = await self.chunk_dataset_profile(data_profile, session_id)
                chunks.extend(profile_chunks)
                logger.info(
                    "ensure_session_indexed: prepared %d dataset chunks for %s",
                    len(profile_chunks),
                    session_id,
                )
            
            # Index the stories
            stories = session_data.get("stories")
            if stories:
                story_chunks = await self.chunk_stories(stories, session_id)
                chunks.extend(story_chunks)
                logger.info("ensure_session_indexed: prepared %d story chunks for %s", len(story_chunks), session_id)
            
            if chunks:
                await self.index_chunks(chunks)
                logger.info("ensure_session_indexed: indexed %d total chunks for session %s", len(chunks), session_id)
            else:
                logger.warning("ensure_session_indexed: no indexable content found for session %s", session_id)
                
        except Exception as exc:
            logger.error("ensure_session_indexed failed for session %s: %s", session_id, exc)
            # Remove from set so it can be retried next time
            self._indexed_sessions.discard(session_id)

    async def retrieve(
        self, query: str, session_id: str, top_k: int = 8
    ) -> List[dict]:
        """
        Retrieve the most relevant chunks for a user query.

        Steps:
        0. Ensure the session is indexed in the in-memory store (lazy load from disk).
        1. Embed the query with text-embedding-004.
        2. Query Vertex AI Vector Search (or in-memory fallback) filtered
           by session_id.
        3. Re-rank by cosine similarity score (already provided by Vertex
           AI; for in-memory we compute it directly).
        4. Return top_k results, each with {chunk_id, content, metadata,
           score}.
        """
        if not query or not query.strip():
            return []

        # ---- 0. Ensure session data is indexed (lazy on-demand load from disk) ----
        if not self._using_vertex():
            await self.ensure_session_indexed(session_id)

        # ---- 1. Embed query ----
        try:
            query_vector = await self.embed_text(query)
        except Exception as exc:
            logger.error("Query embedding failed: %s", exc)
            return []

        # ---- 2. Query vector store ----
        if self._using_vertex():
            results = await self._query_vertex(query_vector, session_id, top_k)
        else:
            results = self._memory_store.query(query_vector, session_id, top_k)

        # ---- 3. Sort by score descending (already sorted, but be safe) ----
        results.sort(key=lambda r: r.get("score", 0.0), reverse=True)

        return results[:top_k]

    async def _query_vertex(
        self,
        query_vector: List[float],
        session_id: str,
        top_k: int,
    ) -> List[dict]:
        """
        Query Vertex AI Vector Search.

        Uses the MatchingEngineIndexEndpoint.find_neighbors SDK method with
        a session_id restrict filter so only this session's chunks are
        returned.

        Falls back to the in-memory store on any exception.
        """
        endpoint = await self.get_index_endpoint()
        if endpoint is None:
            self._warn_fallback_once()
            return self._memory_store.query(query_vector, session_id, top_k)

        try:
            # Build the restrict filter so only session chunks are returned
            numeric_restricts = []
            string_restricts = []
            if session_id != "global_agent":
                string_restricts.append(
                    {
                        "namespace": "session_id",
                        "allowList": [session_id],
                    }
                )

            # find_neighbors is synchronous in the SDK; run in executor
            import asyncio

            loop = asyncio.get_event_loop()
            
            # Prepare arguments
            kwargs: dict = {
                "deployed_index_id": self.deployed_index_id,
                "queries": [query_vector],
                "num_neighbors": top_k,
                "return_full_datapoint": False
            }
            if string_restricts:
                kwargs["filter"] = string_restricts
                
            response = await loop.run_in_executor(
                None,
                lambda: endpoint.find_neighbors(**kwargs),
            )

            # response is list[list[MatchNeighbor]]
            results: List[dict] = []
            if response and response[0]:
                for neighbor in response[0]:
                    results.append(
                        {
                            "chunk_id": neighbor.id,
                            "content": "",   # Vertex AI does not store raw text
                            "metadata": {},  # metadata comes from our own store
                            "score": neighbor.distance,  # cosine: higher is better
                        }
                    )

            # Vertex AI Vector Search doesn't store raw content — we need
            # to look it up from the in-memory mirror (chunks indexed locally)
            # or reconstruct.  In a full deployment this would be a Firestore
            # lookup.  For now we enrich from the in-memory mirror where
            # available.
            enriched: List[dict] = []
            for r in results:
                cid = r["chunk_id"]
                content = self._memory_store._contents.get(cid, "")
                meta = self._memory_store._metadata.get(cid, {})
                enriched.append(
                    {
                        "chunk_id": cid,
                        "content": content,
                        "metadata": meta,
                        "score": r["score"],
                    }
                )
            return enriched

        except Exception as exc:
            logger.error("Vertex AI find_neighbors failed: %s — falling back.", exc)
            return self._memory_store.query(query_vector, session_id, top_k)

    # ------------------------------------------------------------------
    # High-level index entry points
    # ------------------------------------------------------------------

    async def index_dataset(self, data_profile: dict, session_id: str) -> str:
        """
        Chunk and index the dataset profile.

        Returns an index_id string that can be stored in the session doc.
        """
        chunks = await self.chunk_dataset_profile(data_profile, session_id)
        success = await self.index_chunks(chunks)
        if not success:
            logger.warning("Dataset indexing partially failed for session %s.", session_id)
        index_id = f"{session_id}_dataset"
        logger.info(
            "Dataset indexed: %d chunks, index_id=%s, success=%s",
            len(chunks),
            index_id,
            success,
        )
        return index_id

    async def index_stories(self, stories: dict, session_id: str) -> str:
        """
        Chunk and index the generated stories.

        Returns an index_id string.
        """
        chunks = await self.chunk_stories(stories, session_id)
        success = await self.index_chunks(chunks)
        if not success:
            logger.warning("Stories indexing partially failed for session %s.", session_id)
        index_id = f"{session_id}_stories"
        logger.info(
            "Stories indexed: %d chunks, index_id=%s, success=%s",
            len(chunks),
            index_id,
            success,
        )
        return index_id

    async def index_db_schema(self, db_schema: dict, session_id: str) -> str:
        """
        Chunk and index a database schema (tables, columns, FKs, indexes).

        Returns an index_id string stored in the session doc.
        """
        chunks = await self.chunk_db_schema(db_schema, session_id)
        success = await self.index_chunks(chunks)
        if not success:
            logger.warning("DB schema indexing partially failed for session %s.", session_id)
        index_id = f"{session_id}_dataset"
        logger.info(
            "DB schema indexed: %d chunks, index_id=%s, success=%s",
            len(chunks),
            index_id,
            success,
        )
        return index_id

    async def index_external_doc(
        self, text: str, session_id: str, filename: str
    ) -> str:
        """
        Chunk and index an external document.

        Returns an index_id string.
        """
        chunks = await self.chunk_external_doc(text, session_id, filename)
        success = await self.index_chunks(chunks)
        if not success:
            logger.warning(
                "External doc indexing partially failed for session %s, file %s.",
                session_id,
                filename,
            )
        index_id = f"{session_id}_external"
        logger.info(
            "External doc indexed: %d chunks, index_id=%s, success=%s",
            len(chunks),
            index_id,
            success,
        )
        return index_id

    # ------------------------------------------------------------------
    # Status helpers
    # ------------------------------------------------------------------

    def get_indexed_namespaces(self, session_id: str) -> Dict[str, bool]:
        """
        Return which namespaces have at least one chunk indexed for the
        given session.  Works for the in-memory store; for Vertex AI we
        check the local mirror as a proxy.
        """
        namespaces = {
            "dataset": False,
            "stories": False,
            "external_docs": False,
        }
        for chunk_id, meta in self._memory_store._metadata.items():
            if meta.get("session_id") != session_id:
                continue
            src = meta.get("source_type", "")
            if src in namespaces:
                namespaces[src] = True
        return namespaces

    def get_chunk_count(self, session_id: str) -> int:
        """Count total indexed chunks for a session (in-memory mirror)."""
        return sum(
            1
            for meta in self._memory_store._metadata.values()
            if meta.get("session_id") == session_id
        )


# ---------------------------------------------------------------------------
# Singleton instance — import with:
#   from services.rag_pipeline import rag_pipeline
# ---------------------------------------------------------------------------

rag_pipeline = RAGPipeline()
