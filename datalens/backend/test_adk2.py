import asyncio
import os
from google.adk.agents import LlmAgent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.adk.agents.run_config import RunConfig, StreamingMode
from google.genai import types
from dotenv import load_dotenv

load_dotenv()
if "GENAI_API_KEY" in os.environ and "GOOGLE_API_KEY" not in os.environ:
    os.environ["GOOGLE_API_KEY"] = os.environ["GENAI_API_KEY"]

async def main():
    agent = LlmAgent(name="Test", model="gemini-2.5-flash", instruction="Write a 3 sentence paragraph explaining water.")
    runner = Runner(agent=agent, app_name="test", session_service=InMemorySessionService())
    await runner.session_service.create_session(app_name="test", user_id="user1", session_id="sess1")
    msg = types.Content(role="user", parts=[types.Part(text="Explain it.")])
    config = RunConfig(streaming_mode=StreamingMode.SSE)
    
    async for event in runner.run_async(user_id="user1", session_id="sess1", new_message=msg, run_config=config):
        text = "".join(p.text or "" for p in (event.content.parts if hasattr(event, "content") and event.content else []))
        is_final_method = getattr(event, "is_final_response", None)
        is_final_val = is_final_method() if callable(is_final_method) else "NOT_CALLABLE"
        print(f"[{event.__class__.__name__}] is_final_val={is_final_val} TEXT_LEN={len(text)} TEXT: {text[:50]!r}...")

if __name__ == "__main__":
    asyncio.run(main())
