import asyncio
import os
from google.adk.agents import LlmAgent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.adk.agents.run_config import RunConfig, StreamingMode
from google.genai import types

async def main():
    agent = LlmAgent(
        name="Test",
        model="gemini-2.5-flash",
        instruction="Reply instantly with exactly 3 words.",
    )
    runner = Runner(agent=agent, app_name="test", session_service=InMemorySessionService())
    
    await runner.session_service.create_session(app_name="test", user_id="user1", session_id="sess1")
    
    msg = types.Content(role="user", parts=[types.Part(text="Hello.")])
    config = RunConfig(streaming_mode=StreamingMode.SSE)
    
    print("Starting stream:")
    async for event in runner.run_async(user_id="user1", session_id="sess1", new_message=msg, run_config=config):
        event_type = type(event).__name__
        print(f"Event: {event_type}")
        if hasattr(event, "content") and event.content:
            text = ""
            for p in event.content.parts:
                if p.text: text += p.text
            print(f" -> Text: {text!r}")
            # Is there an is_chunk or similar?
            print(f" -> Dir: {[d for d in dir(event) if not d.startswith('_')]}")

if __name__ == "__main__":
    asyncio.run(main())
