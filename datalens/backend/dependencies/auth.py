"""
Auth dependency — extracts the owner_id from the Authorization header.

Supports two schemes:
  Bearer <app_token>   — authenticated user; resolves to user_id via Firestore
  Guest  <guest_id>    — guest user; guest_id is trusted directly if it starts with "guest_"

Returns None if no valid header is present.
"""

from __future__ import annotations

from typing import Optional

from fastapi import Header


async def get_owner_id(
    authorization: Optional[str] = Header(default=None),
) -> Optional[str]:
    if not authorization:
        return None

    parts = authorization.split()
    if len(parts) != 2:
        return None

    scheme, value = parts[0].lower(), parts[1]

    if scheme == "bearer":
        try:
            from services.user_service import get_user_by_token
            user = await get_user_by_token(value)
            return user["user_id"] if user else None
        except Exception:
            return None

    elif scheme == "guest":
        return value if value.startswith("guest_") else None

    return None
