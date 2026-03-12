import asyncio
import websockets
import json

async def test_ws():
    uri = "ws://127.0.0.1:8080/ws/agent/global_agent"
    try:
        async with websockets.connect(uri) as websocket:
            print("Connected.")
            msg = await websocket.recv()
            print(f"Received: {msg}")
            
            # Send text
            await websocket.send(json.dumps({
                "type": "text",
                "content": "Hello agent!"
            }))
            
            while True:
                msg = await websocket.recv()
                print(f"Received: {msg}")
                if "error" in msg.lower() or "response" in msg.lower():
                    break
    except Exception as e:
        print(f"Error: {e}")

asyncio.run(test_ws())
