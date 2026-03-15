import asyncio
import websockets

async def test_ws():
    uri = "ws://localhost:8080/ws/agent/agent_test_ws_2?token=7567603a-468c-4822-8e52-10ba13490e6f"
    print(f"Connecting to {uri}...")
    try:
        async with websockets.connect(uri) as websocket:
            print("Connected.")
            payload_text = "Please consider my past chat history from dataset: **bank_transactions_data** (Session ID: 9591bf11) in your reasoning."
            import json
            await websocket.send(json.dumps({"id": "1", "role": "user", "content": payload_text, "type": "text"}))
            print("Sent context prompt.")
            while True:
                res = await websocket.recv()
                print("Received:", res)
                if "text_done" in res or "error" in res:
                    break
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    asyncio.run(test_ws())
