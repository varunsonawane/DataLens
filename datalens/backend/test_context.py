import asyncio
import websockets
import json

async def test_context():
    uri = "ws://127.0.0.1:8080/ws/agent/global_agent"
    print("Connecting...")
    async with websockets.connect(uri) as ws:
        print("Connected. Sending session context query...")
        await ws.send(json.dumps({
            "type": "text",
            "content": "Please consider my past chat history from dataset: Prod_Fct_Frames.csv (Session ID: 8ab337e2-3b8b-43c4-b16e-00fe6e7192ec). What is this dataset about? Give me a summary."
        }))

        full_response = ""
        while True:
            try:
                raw = await asyncio.wait_for(ws.recv(), timeout=60)
                msg = json.loads(raw)
                if msg["type"] == "connected":
                    print(f"Session: {msg.get('session_id')}")
                elif msg["type"] == "text_response":
                    full_response += msg["content"]
                    print(f"[CHUNK]: {msg['content']}", end="", flush=True)
                elif msg["type"] == "error":
                    print(f"\n[ERROR]: {msg['message']}")
                    break
                # Check if we got a reasonable response
                if len(full_response) > 200:
                    break
            except asyncio.TimeoutError:
                print("\n[TIMEOUT - no more data]")
                break
        
        print(f"\n\n--- FULL RESPONSE ({len(full_response)} chars) ---")
        print(full_response[:500])

asyncio.run(test_context())
