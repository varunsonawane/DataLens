import asyncio
import os
import sys
import json
from dotenv import load_dotenv

load_dotenv()
sys.path.append('d:\\Hackathon\\DataLens\\datalens\\backend')

from services.gcs_service import get_firestore_client, FIRESTORE_COLLECTION

def main():
    try:
        fs = get_firestore_client()
        docs = fs.collection(FIRESTORE_COLLECTION).stream()
        res = []
        for d in docs:
            data = d.to_dict()
            res.append({
                "session_id": data.get("session_id"),
                "owner_id": data.get("owner_id"),
                "created_at": data.get("created_at")
            })
        
        with open('firestore_dump.json', 'w') as f:
            json.dump(res, f, indent=2)
        print(f"Dumped {len(res)} docs to firestore_dump.json")
    except Exception as e:
        with open('firestore_error.txt', 'w') as f:
            f.write(str(e))
        print("Error:", e)

if __name__ == "__main__":
    main()
