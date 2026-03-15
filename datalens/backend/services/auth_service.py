"""
Auth Service — Google ID Token Verification

Verifies Google OAuth2 ID tokens using google-auth library.
Falls back gracefully if GOOGLE_CLIENT_ID is not configured.
"""

from __future__ import annotations

import logging
import os
from typing import Optional

logger = logging.getLogger(__name__)

GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")


def verify_google_id_token(token: str) -> Optional[dict]:
    """
    Verify a Google ID token and return user info.

    Returns dict with keys: sub, email, name, picture
    Returns None if verification fails.
    """
    if not GOOGLE_CLIENT_ID:
        logger.warning("GOOGLE_CLIENT_ID not set — skipping token verification.")
        return None

    try:
        from google.auth.transport import requests as google_requests
        from google.oauth2 import id_token

        request = google_requests.Request()
        idinfo = id_token.verify_oauth2_token(token, request, GOOGLE_CLIENT_ID)

        if idinfo.get("iss") not in ("accounts.google.com", "https://accounts.google.com"):
            logger.warning("Invalid token issuer: %s", idinfo.get("iss"))
            return None

        return {
            "id": idinfo["sub"],
            "email": idinfo.get("email", ""),
            "name": idinfo.get("name", ""),
            "picture": idinfo.get("picture", ""),
        }
    except Exception as exc:
        logger.warning("Token verification failed: %s", exc)
        return None
