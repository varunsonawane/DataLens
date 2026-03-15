import asyncio
import os
import sys
import json
from dotenv import load_dotenv

load_dotenv()
sys.path.append('d:\\Hackathon\\DataLens\\datalens\\backend')

from services.gcs_service import get_firestore_client

def main():
    try:
        fs = get_firestore_client()
        docs = fs.collection("users").stream()
        res = []
        for d in docs:
            data = d.to_dict()
            res.append({
                "user_id": data.get("user_id"),
                "app_token": data.get("app_token"),
            })
        
        with open('users_dump.json', 'w') as f:
            json.dump(res, f, indent=2)
        print(f"Dumped {len(res)} users to users_dump.json")
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
