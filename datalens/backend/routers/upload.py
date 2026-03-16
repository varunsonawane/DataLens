"""
Upload router — handles dataset ingestion from:
  1. Multipart file upload (CSV / Excel)
  2. Database connection string + table / query
  3. Built-in sample datasets (iris, titanic, sales)

All paths produce the same output:
  { session_id, data_profile, filename, rows, columns }

The session is created in GCS + Firestore by gcs_service.save_session.
"""

from __future__ import annotations

import io
import logging
import uuid
import math
from datetime import datetime, timezone
from typing import Annotated, Optional, Any

import pandas as pd
from fastapi import APIRouter, Depends, File, Header, HTTPException, UploadFile, status
from dependencies.auth import get_owner_id
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from services.db_schema import build_connection_string, extract_db_schema, make_db_data_profile
from services.gcs_service import save_session
from services.profiler import profile_dataframe

logger = logging.getLogger(__name__)

router = APIRouter()

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024  # 100 MB
ALLOWED_EXTENSIONS = {".csv", ".xlsx", ".xls", ".json", ".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif"}

# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class DatabaseUploadRequest(BaseModel):
    db_type: str = "postgresql"       # postgresql | mysql | sqlite | mssql
    host: str = "localhost"
    port: str = "5432"
    database: str                     # db name (or file path for sqlite)
    username: str = ""
    password: str = ""
    schema_filter: Optional[str] = None  # inspect only this schema/namespace


class UploadResponse(BaseModel):
    session_id: str
    filename: str
    rows: int
    columns: int
    data_profile: dict


# ---------------------------------------------------------------------------
# Sample datasets
# ---------------------------------------------------------------------------

SAMPLE_DATASETS: dict[str, str] = {
    "iris": "iris",
    "titanic": "titanic",
    "sales": "sales",
}


def _make_sample_sales() -> pd.DataFrame:
    """Generate a realistic synthetic sales dataset for demo purposes."""
    import numpy as np

    rng = np.random.default_rng(42)
    n = 200
    regions = ["North", "South", "East", "West"]
    products = ["Widget A", "Widget B", "Gadget X", "Gadget Y", "Doohickey Z"]
    months = pd.date_range("2023-01-01", periods=12, freq="MS")

    rows = []
    for _ in range(n):
        product = rng.choice(products)
        region = rng.choice(regions)
        month = rng.choice(months)
        units = int(rng.integers(10, 500))
        unit_price = round(float(rng.uniform(9.99, 299.99)), 2)
        discount = round(float(rng.uniform(0, 0.3)), 2)
        revenue = round(units * unit_price * (1 - discount), 2)
        rows.append(
            {
                "date": month,
                "product": product,
                "region": region,
                "units_sold": units,
                "unit_price": unit_price,
                "discount": discount,
                "revenue": revenue,
                "customer_satisfaction": round(float(rng.uniform(3.0, 5.0)), 1),
            }
        )
    return pd.DataFrame(rows)


def _load_sample_dataset(name: str) -> tuple[pd.DataFrame, str]:
    """Load a named sample dataset. Returns (DataFrame, filename)."""
    if name == "iris":
        try:
            from sklearn.datasets import load_iris

            iris = load_iris(as_frame=True)
            df = iris.frame
            df.columns = [c.replace(" (cm)", "").replace(" ", "_") for c in df.columns]
            target_names = {i: n for i, n in enumerate(iris.target_names)}
            df["species"] = df["target"].map(target_names)
            df = df.drop(columns=["target"])
            return df, "iris.csv"
        except ImportError:
            # sklearn not installed — build a tiny surrogate
            data = {
                "sepal_length": [5.1, 4.9, 4.7, 6.3, 5.8, 7.1, 6.3, 6.5, 7.6, 4.9],
                "sepal_width": [3.5, 3.0, 3.2, 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5],
                "petal_length": [1.4, 1.4, 1.3, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5],
                "petal_width": [0.2, 0.2, 0.2, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7],
                "species": [
                    "setosa", "setosa", "setosa", "virginica", "versicolor",
                    "virginica", "virginica", "virginica", "virginica", "versicolor",
                ],
            }
            return pd.DataFrame(data), "iris.csv"

    elif name == "titanic":
        try:
            df = pd.read_csv(
                "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
            )
            return df, "titanic.csv"
        except Exception:
            # Fallback minimal dataset
            data = {
                "PassengerId": list(range(1, 11)),
                "Survived": [0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                "Pclass": [3, 1, 3, 1, 3, 3, 1, 3, 3, 2],
                "Name": [
                    "Braund, Mr. Owen Harris",
                    "Cumings, Mrs. John Bradley",
                    "Heikkinen, Miss. Laina",
                    "Futrelle, Mrs. Jacques Heath",
                    "Allen, Mr. William Henry",
                    "Moran, Mr. James",
                    "McCarthy, Mr. Timothy J",
                    "Palsson, Master. Gosta Leonard",
                    "Johnson, Mrs. Oscar W",
                    "Nasser, Mrs. Nicholas",
                ],
                "Sex": ["male", "female", "female", "female", "male", "male", "male", "male", "female", "female"],
                "Age": [22, 38, 26, 35, 35, None, 54, 2, 27, 14],
                "Fare": [7.25, 71.28, 7.92, 53.10, 8.05, 8.46, 51.86, 21.07, 11.13, 30.07],
            }
            return pd.DataFrame(data), "titanic.csv"

    elif name == "sales":
        return _make_sample_sales(), "sales_demo.csv"

    else:
        raise ValueError(f"Unknown sample dataset: {name}")


# ---------------------------------------------------------------------------
# Shared helpers
# ---------------------------------------------------------------------------


def _sanitize_nans(obj: Any) -> Any:
    """Recursively replace math.isnan(float) with None to ensure JSON compliance."""
    if isinstance(obj, float) and math.isnan(obj):
        return None
    elif isinstance(obj, dict):
        return {k: _sanitize_nans(v) for k, v in obj.items()}
    elif isinstance(obj, list) or isinstance(obj, tuple):
        return [_sanitize_nans(item) for item in obj]
    return obj

async def _build_upload_response(df: pd.DataFrame, filename: str, owner_id: Optional[str] = None) -> dict:
    """Profile a DataFrame and create a new session. Returns the response dict."""
    session_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()

    data_profile = await profile_dataframe(df)
    data_profile = _sanitize_nans(data_profile)

    session_doc = {
        "session_id": session_id,
        "created_at": created_at,
        "filename": filename,
        "data_profile": data_profile,
        "stories": {"eli5": "", "architecture": "", "analyst": "", "chart_data": {}},
        "images": [],
        "conversation_history": [],
        "rag_index_ids": {"dataset": "", "stories": "", "external": ""},
    }

    try:
        await save_session(session_id, session_doc, owner_id=owner_id)
        # Link session to user account if authenticated
        if owner_id and not owner_id.startswith("guest_"):
            try:
                from services.user_service import add_session_to_user
                await add_session_to_user(owner_id, session_id)
            except Exception as exc:
                logger.warning("Could not link session to user %s: %s", owner_id, exc)
    except Exception as exc:
        logger.error("Failed to save session %s to GCS/Firestore: %s", session_id, exc)
        # Continue — frontend can still use the in-memory response

    return {
        "session_id": session_id,
        "filename": filename,
        "rows": data_profile["shape"]["rows"],
        "columns": data_profile["shape"]["columns"],
        "data_profile": data_profile,
    }


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


def _parse_file_sync(suffix: str, content: bytes, filename: str) -> pd.DataFrame:
    """Synchronously parse uploaded file bytes into a DataFrame."""
    buf = io.BytesIO(content)
    if suffix == ".csv":
        # Try common encodings
        for encoding in ("utf-8", "latin-1", "cp1252"):
            try:
                buf.seek(0)
                return pd.read_csv(buf, encoding=encoding, low_memory=False)
            except UnicodeDecodeError:
                continue
        raise ValueError("Could not decode CSV with utf-8, latin-1, or cp1252 encoding.")
    elif suffix == ".json":
        try:
            return pd.read_json(buf)
        except Exception:
            # Fallback to lines=True or manual parsing if standard read_json fails
            buf.seek(0)
            import json
            data = json.load(buf)
            if isinstance(data, dict):
                # If it's a single dict, wrap in a list
                return pd.DataFrame([data])
            else:
                return pd.DataFrame(data)
    elif suffix in (".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif"):
        # For PDF/Images, create a dummy dataframe representing document metadata
        return pd.DataFrame([{"filename": filename, "type": f"File ({suffix})", "size": len(content)}])
    else:
        return pd.read_excel(buf, engine="openpyxl")


@router.post("/file", response_model=UploadResponse, status_code=status.HTTP_201_CREATED)
async def upload_file(
    file: Annotated[UploadFile, File(description="CSV or Excel file (max 100 MB)")],
    owner_id: Optional[str] = Depends(get_owner_id),
):
    """
    Accept a CSV, Excel, JSON, PDF or Image file upload, profile it with Pandas, create a session.

    - Validates file extension and size
    - Reads with pandas (CSV, JSON, openpyxl) in a background thread
    - Calls profile_dataframe
    - Persists session to GCS + Firestore
    - Returns { session_id, filename, rows, columns, data_profile }
    """
    import asyncio
    
    # Validate filename / extension
    filename = file.filename or "upload"
    suffix = ""
    if "." in filename:
        suffix = "." + filename.rsplit(".", 1)[-1].lower()

    if suffix not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Unsupported file type '{suffix}'. Allowed: {sorted(ALLOWED_EXTENSIONS)}",
        )

    # Read file bytes
    content = await file.read()
    if len(content) > MAX_FILE_SIZE_BYTES:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File size {len(content) / 1024 / 1024:.1f} MB exceeds the 100 MB limit.",
        )
    if len(content) == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Uploaded file is empty.",
        )

    # Parse into DataFrame asynchronously
    try:
        df = await asyncio.to_thread(_parse_file_sync, suffix, content, filename)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Failed to parse file: {exc}",
        )

    if df.empty or df.shape[0] == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="The uploaded file contains no data rows.",
        )

    result = await _build_upload_response(df, filename, owner_id=owner_id)
    return JSONResponse(content=result, status_code=status.HTTP_201_CREATED)


@router.post("/database", response_model=UploadResponse, status_code=status.HTTP_201_CREATED)
async def upload_database(body: DatabaseUploadRequest, owner_id: Optional[str] = Depends(get_owner_id)):
    """
    Connect to a SQL database via SQLAlchemy and extract full schema metadata.

    No actual row data is fetched — only structural metadata (tables, columns,
    types, PKs, FKs, indexes) and cheap per-table COUNT(*) queries.

    The extracted schema is stored in the session JSON under "db_schema" and
    RAG-indexed so the AI agent can suggest complex SQL queries (JOINs, etc.).

    Supports: PostgreSQL, MySQL, SQLite, MSSQL.
    """
    import asyncio

    conn_str = build_connection_string(
        db_type=body.db_type,
        host=body.host,
        port=body.port,
        database=body.database,
        username=body.username,
        password=body.password,
    )
    filename_hint = f"{body.database} ({body.db_type})"

    try:
        loop = asyncio.get_event_loop()
        db_schema = await loop.run_in_executor(
            None,
            lambda: extract_db_schema(conn_str, schema_filter=body.schema_filter),
        )
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Database connection or schema inspection failed: {exc}",
        )

    if db_schema["total_tables"] == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="No tables found. Check your connection details or schema filter.",
        )

    session_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()

    data_profile = make_db_data_profile(db_schema, filename_hint)
    data_profile = _sanitize_nans(data_profile)

    session_doc = {
        "session_id": session_id,
        "created_at": created_at,
        "filename": filename_hint,
        "data_profile": data_profile,
        "db_schema": db_schema,           # full schema stored for AI use
        "stories": {"eli5": "", "architecture": "", "analyst": "", "chart_data": {}},
        "images": [],
        "conversation_history": [],
        "rag_index_ids": {"dataset": "", "stories": "", "external": ""},
    }

    # Index schema into RAG in the background (non-blocking)
    async def _index_schema() -> None:
        try:
            from services.rag_pipeline import rag_pipeline
            await rag_pipeline.index_db_schema(db_schema, session_id)
        except Exception as exc:
            logger.warning("DB schema RAG indexing failed for %s: %s", session_id, exc)

    asyncio.create_task(_index_schema())

    try:
        await save_session(session_id, session_doc, owner_id=owner_id)
        if owner_id and not owner_id.startswith("guest_"):
            try:
                from services.user_service import add_session_to_user
                await add_session_to_user(owner_id, session_id)
            except Exception as exc:
                logger.warning("Could not link DB session to user %s: %s", owner_id, exc)
    except Exception as exc:
        logger.error("Failed to save DB session %s: %s", session_id, exc)

    return JSONResponse(
        content={
            "session_id": session_id,
            "filename": filename_hint,
            "rows": data_profile["shape"]["rows"],
            "columns": data_profile["shape"]["columns"],
            "data_profile": data_profile,
        },
        status_code=status.HTTP_201_CREATED,
    )


@router.get("/sample/{dataset_name}", response_model=UploadResponse)
async def load_sample_dataset(dataset_name: str, owner_id: Optional[str] = Depends(get_owner_id)):
    """
    Load one of the built-in sample datasets for demo / testing.

    Available names: iris, titanic, sales
    """
    if dataset_name not in SAMPLE_DATASETS:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=(
                f"Sample dataset '{dataset_name}' not found. "
                f"Available: {sorted(SAMPLE_DATASETS.keys())}"
            ),
        )

    try:
        df, filename = _load_sample_dataset(dataset_name)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to load sample dataset '{dataset_name}': {exc}",
        )

    result = await _build_upload_response(df, filename, owner_id=owner_id)
    return JSONResponse(content=result)
