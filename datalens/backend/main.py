"""
DataLens — FastAPI Application Entry Point

Bootstraps the FastAPI app with:
  - CORS middleware (origins from ALLOWED_ORIGINS env var)
  - All routers registered under their API prefixes
  - Startup / shutdown lifecycle hooks for GCS and Firestore clients
  - Structured logging
  - Health check endpoint

Router prefixes:
  /upload   — dataset ingestion (file, database, sample)
  /stories  — story generation + persistence
  /images   — on-demand image generation + listing
  /rag      — RAG indexing + querying (rag_pipeline service)
  /agent    — Gemini Live ADK voice agent (live_agent service)
  /sessions — session management (list, get, delete)
"""

from __future__ import annotations

import logging
import os
import sys
from contextlib import asynccontextmanager
from typing import Any

import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# Load environment variables as early as possible so all modules see them
load_dotenv()

# If running on Cloud Run, remove the hardcoded GOOGLE_APPLICATION_CREDENTIALS from .env
if os.environ.get("K_SERVICE"):
    os.environ.pop("GOOGLE_APPLICATION_CREDENTIALS", None)

# ---------------------------------------------------------------------------
# Logging configuration
# ---------------------------------------------------------------------------


def _configure_logging() -> None:
    log_level_name = os.environ.get("LOG_LEVEL", "INFO").upper()
    log_level = getattr(logging, log_level_name, logging.INFO)

    log_format = (
        "%(asctime)s | %(levelname)-8s | %(name)s:%(lineno)d | %(message)s"
    )
    logging.basicConfig(
        level=log_level,
        format=log_format,
        handlers=[logging.StreamHandler(sys.stdout)],
    )
    # Suppress noisy third-party loggers
    logging.getLogger("httpx").setLevel(logging.WARNING)
    logging.getLogger("httpcore").setLevel(logging.WARNING)
    logging.getLogger("google.auth").setLevel(logging.WARNING)
    logging.getLogger("urllib3").setLevel(logging.WARNING)


_configure_logging()
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Router imports (deferred so logging is configured first)
# ---------------------------------------------------------------------------

from routers.upload import router as upload_router
from routers.stories import router as stories_router
from routers.images import router as images_router
from routers.auth import router as auth_router
from routers.users import router as users_router

# These routers are built by other agents but we register their prefixes now.
# If the modules don't exist yet, we register empty placeholder routers so
# the app still starts during development.
try:
    from routers.rag import router as rag_router
except ImportError:
    from fastapi import APIRouter
    rag_router = APIRouter()
    logger.warning("routers/rag.py not found — /rag prefix registered with empty router.")

try:
    from routers.agent import router as agent_router
except ImportError:
    from fastapi import APIRouter
    agent_router = APIRouter()
    logger.warning("routers/agent.py not found — /agent prefix registered with empty router.")

try:
    from routers.sessions import router as sessions_router
except ImportError:
    from fastapi import APIRouter
    sessions_router = APIRouter()
    logger.warning("routers/sessions.py not found — /sessions prefix registered with empty router.")

# ---------------------------------------------------------------------------
# GCS / Firestore startup initialisation
# ---------------------------------------------------------------------------


async def _init_gcs_client() -> None:
    """Pre-warm the GCS client so the first request is not slow."""
    try:
        from services.gcs_service import get_gcs_client  # type: ignore[import]

        get_gcs_client()
        logger.info("GCS client initialised successfully.")
    except Exception as exc:
        logger.warning("GCS client init failed (will retry on first request): %s", exc)


async def _init_firestore_client() -> None:
    """Pre-warm the Firestore client."""
    try:
        from services.gcs_service import get_firestore_client  # type: ignore[import]

        get_firestore_client()
        logger.info("Firestore client initialised successfully.")
    except Exception as exc:
        logger.warning(
            "Firestore client init failed (will retry on first request): %s", exc
        )


# ---------------------------------------------------------------------------
# Lifespan context manager
# ---------------------------------------------------------------------------


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan: run startup tasks, then yield, then shutdown."""
    logger.info("DataLens backend starting up…")

    if os.environ.get("GCS_LOCAL_DEV", "").lower() not in ("1", "true", "yes"):
        await _init_gcs_client()
        await _init_firestore_client()
    else:
        logger.info("Local development mode: skipping GCS/Firestore pre-warm.")

    logger.info(
        "DataLens backend ready. Environment: project=%s, location=%s",
        os.environ.get("GOOGLE_CLOUD_PROJECT", "(not set)"),
        os.environ.get("GOOGLE_CLOUD_LOCATION", "(not set)"),
    )

    yield  # Application is running

    logger.info("DataLens backend shutting down.")


# ---------------------------------------------------------------------------
# App factory
# ---------------------------------------------------------------------------


def create_app() -> FastAPI:
    app = FastAPI(
        title="DataLens API",
        description=(
            "Multimodal AI data storytelling platform. "
            "Powered by Gemini 3 Pro, Nano Banana Pro, and Vertex AI."
        ),
        version="1.0.0",
        docs_url="/docs",
        redoc_url="/redoc",
        lifespan=lifespan,
    )

    # ------------------------------------------------------------------
    # CORS middleware
    # ------------------------------------------------------------------
    allowed_origins_env = os.environ.get("ALLOWED_ORIGINS", "")
    if allowed_origins_env:
        allowed_origins = [o.strip() for o in allowed_origins_env.split(",") if o.strip()]
    else:
        # Default: allow localhost dev servers + any Cloud Run frontend URL
        allowed_origins = [
            "http://localhost:3000",
            "http://localhost:5173",
            "http://localhost:4173",
            "https://*.run.app",
        ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["X-Request-ID", "X-Session-ID"],
    )

    # ------------------------------------------------------------------
    # Routers
    # ------------------------------------------------------------------
    app.include_router(auth_router, prefix="/auth", tags=["Auth"])
    app.include_router(users_router, prefix="/users", tags=["Users"])
    app.include_router(upload_router, prefix="/upload", tags=["Upload"])
    app.include_router(stories_router, prefix="/stories", tags=["Stories"])
    app.include_router(images_router, prefix="/images", tags=["Images"])
    # rag_router defines its own prefix="/rag" internally; do not add prefix here
    app.include_router(rag_router, tags=["RAG"])
    # agent_router exposes /ws/agent/{session_id} — mount at root so path is correct
    app.include_router(agent_router, tags=["Agent"])
    app.include_router(sessions_router, prefix="/sessions", tags=["Sessions"])

    # ------------------------------------------------------------------
    # Health check
    # ------------------------------------------------------------------

    @app.get("/health", tags=["Health"], summary="Health check")
    async def health() -> dict[str, Any]:
        """Returns service health status and version."""
        return {
            "status": "ok",
            "version": "1.0.0",
            "project": os.environ.get("GOOGLE_CLOUD_PROJECT", ""),
            "location": os.environ.get("GOOGLE_CLOUD_LOCATION", ""),
        }

    # ------------------------------------------------------------------
    # Global exception handler
    # ------------------------------------------------------------------

    @app.exception_handler(Exception)
    async def global_exception_handler(request, exc: Exception) -> JSONResponse:
        logger.exception("Unhandled exception for %s %s", request.method, request.url)
        return JSONResponse(
            status_code=500,
            content={"detail": "Internal server error. Please try again later."},
        )

    # ------------------------------------------------------------------
    # Frontend Static File Serving
    # ------------------------------------------------------------------

    if os.path.isdir("static"):
        from fastapi.staticfiles import StaticFiles
        from fastapi.responses import FileResponse

        app.mount("/assets", StaticFiles(directory="static/assets"), name="assets")

        @app.get("/{full_path:path}", include_in_schema=False)
        async def serve_spa(full_path: str):
            # API routes and explicitly mounted assets won't hit this catchfall
            # Except if they 404. Let's redirect everything else to index.html for React Router
            static_file_path = os.path.join("static", full_path)
            if full_path and os.path.isfile(static_file_path):
                return FileResponse(static_file_path)
            return FileResponse("static/index.html")

    return app


# ---------------------------------------------------------------------------
# Application instance
# ---------------------------------------------------------------------------

app = create_app()

# ---------------------------------------------------------------------------
# Local development entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=True,
        log_level=os.environ.get("LOG_LEVEL", "info").lower(),
    )
