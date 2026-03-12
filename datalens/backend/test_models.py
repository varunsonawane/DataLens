import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
api_key = os.environ.get("GENAI_API_KEY")
client = genai.Client(api_key=api_key)

try:
    for m in client.models.list():
        if 'gemini' in m.name and 'vision' not in m.name:
            print(f"Model: {m.name}")
except Exception as e:
    print(f"Error: {e}")
