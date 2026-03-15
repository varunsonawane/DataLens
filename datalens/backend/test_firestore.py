import asyncio
import os
import sys
from dotenv import load_dotenv

load_dotenv()
sys.path.append('d:\\Hackathon\\DataLens\\datalens\\backend')

from services.gcs_service import save_session, list_sessions

async def main():
    print("Testing session save...")
    session_id = "agent_test_123"
    owner_id = "test_owner"
    session_data = {
        "session_id": session_id,
        "filename": "New Chat",
        "created_at": "2026-03-15T12:00:00Z",
        "conversation_history": [],
    }
    
    success = await save_session(session_id, session_data, owner_id=owner_id)
    print(f"Save success: {success}")
    
    print("\nTesting list_sessions for all types...")
    all_sessions = await list_sessions(owner_id=owner_id, session_type="all")
    print(f"All sessions count: {len(all_sessions)}")
    for s in all_sessions:
        print(f" - {s.get('session_id')}")

    print("\nTesting list_sessions for agent...")
    agent_sessions = await list_sessions(owner_id=owner_id, session_type="agent")
    print(f"Agent sessions count: {len(agent_sessions)}")
    
if __name__ == "__main__":
    asyncio.run(main())
