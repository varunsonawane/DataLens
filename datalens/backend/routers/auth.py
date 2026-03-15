"""
Auth Router — /auth

POST /auth/google    — Verify Google ID token → upsert user → return user + app_token
POST /auth/register  — Email/password registration
POST /auth/login     — Email/password login
POST /auth/logout    — Revoke app token (rotate to invalidate)
POST /auth/guest     — Acknowledge guest session
GET  /auth/me        — Validate app_token → return current user
"""

from __future__ import annotations

import logging
import uuid

from fastapi import APIRouter, Header, HTTPException, status
from pydantic import BaseModel, EmailStr, Field
from typing import Optional

from services.auth_service import verify_google_id_token
from services.user_service import (
    create_user,
    get_user_by_email,
    get_user_by_id,
    get_user_by_token,
    rotate_token,
    safe_user,
    update_user,
)

logger = logging.getLogger(__name__)
router = APIRouter()


# ---------------------------------------------------------------------------
# Password hashing (bcrypt via passlib)
# ---------------------------------------------------------------------------


def _hash_password(password: str) -> str:
    try:
        from passlib.context import CryptContext
        ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")
        return ctx.hash(password)
    except ImportError:
        # Fallback if passlib not installed — store plaintext (dev only warning)
        logger.warning("passlib not installed — password stored as plaintext (INSECURE, dev only)")
        return f"__plain__{password}"


def _verify_password(plain: str, hashed: str) -> bool:
    try:
        from passlib.context import CryptContext
        if hashed.startswith("__plain__"):
            return plain == hashed[len("__plain__"):]
        ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")
        return ctx.verify(plain, hashed)
    except ImportError:
        return plain == hashed.replace("__plain__", "")


# ---------------------------------------------------------------------------
# Request / Response models
# ---------------------------------------------------------------------------


class GoogleAuthRequest(BaseModel):
    credential: str


class RegisterRequest(BaseModel):
    email: str
    name: str = Field(..., min_length=1, max_length=100)
    password: str = Field(..., min_length=6)


class LoginRequest(BaseModel):
    email: str
    password: str


class GuestRequest(BaseModel):
    guest_id: str


class AuthResponse(BaseModel):
    user: dict
    app_token: str


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@router.post("/google", response_model=AuthResponse, summary="Google Sign-In")
async def google_auth(body: GoogleAuthRequest) -> AuthResponse:
    """
    Verify a Google ID token, then create or update the user in Firestore.
    Returns user profile + an app_token for subsequent API calls.
    """
    claims = verify_google_id_token(body.credential)
    if claims is None:
        # In dev mode without GOOGLE_CLIENT_ID, decode token client-side payload
        # and trust it (dev only). Production requires GOOGLE_CLIENT_ID.
        import base64, json as _json
        try:
            parts = body.credential.split(".")
            padded = parts[1] + "=" * (4 - len(parts[1]) % 4)
            claims = _json.loads(base64.urlsafe_b64decode(padded))
            if not claims.get("sub"):
                raise HTTPException(status_code=401, detail="Invalid Google token.")
            logger.warning("GOOGLE_CLIENT_ID not set — trusting decoded JWT claims (dev mode).")
        except Exception:
            raise HTTPException(status_code=401, detail="Invalid Google token.")

    google_sub = claims["sub"] if isinstance(claims, dict) and "sub" in claims else claims.get("id", "")
    user_id = f"google_{google_sub}"
    email = claims.get("email", "")
    name = claims.get("name", email.split("@")[0])
    picture = claims.get("picture", "")

    existing = await get_user_by_id(user_id)
    if existing:
        # Update name/picture in case they changed
        await update_user(user_id, {"name": name, "picture": picture})
        existing.update({"name": name, "picture": picture})
        user = existing
    else:
        user = await create_user(
            user_id=user_id,
            email=email,
            name=name,
            picture=picture,
            auth_method="google",
        )

    app_token = user["app_token"]
    return AuthResponse(user=safe_user(user), app_token=app_token)


@router.post("/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED, summary="Register with email/password")
async def register(body: RegisterRequest) -> AuthResponse:
    """Create a new account with email and password."""
    existing = await get_user_by_email(body.email)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists. Please log in.",
        )

    user_id = str(uuid.uuid4())
    password_hash = _hash_password(body.password)
    user = await create_user(
        user_id=user_id,
        email=body.email,
        name=body.name,
        auth_method="password",
        password_hash=password_hash,
    )
    return AuthResponse(user=safe_user(user), app_token=user["app_token"])


@router.post("/login", response_model=AuthResponse, summary="Login with email/password")
async def login(body: LoginRequest) -> AuthResponse:
    """Authenticate with email and password."""
    user = await get_user_by_email(body.email)
    if not user or user.get("auth_method") != "password":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    if not _verify_password(body.password, user.get("password_hash", "")):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    return AuthResponse(user=safe_user(user), app_token=user["app_token"])


@router.post("/logout", summary="Sign out")
async def logout(authorization: Optional[str] = Header(default=None)) -> dict:
    """Rotate the app token to invalidate the current session."""
    token = _extract_token(authorization)
    if token:
        user = await get_user_by_token(token)
        if user:
            await rotate_token(user["user_id"])
    return {"status": "ok"}


@router.post("/guest", summary="Guest session")
async def guest_session(body: GuestRequest) -> dict:
    """Acknowledge a guest session (no server-side user created)."""
    if not body.guest_id.startswith("guest_"):
        raise HTTPException(status_code=400, detail="Invalid guest ID format.")
    return {"guest_id": body.guest_id, "status": "ok"}


@router.get("/me", summary="Get current user")
async def get_me(authorization: Optional[str] = Header(default=None)) -> dict:
    """Validate app_token and return the current user's profile."""
    token = _extract_token(authorization)
    if not token:
        raise HTTPException(status_code=401, detail="Missing authorization token.")
    user = await get_user_by_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid or expired token.")
    return safe_user(user)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _extract_token(authorization: Optional[str]) -> Optional[str]:
    if not authorization:
        return None
    parts = authorization.split()
    if len(parts) == 2 and parts[0].lower() == "bearer":
        return parts[1]
    return None
