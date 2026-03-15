# migrate_sessions.py
import os
import json
from dotenv import load_dotenv
load_dotenv(r"D:\Hackathon\DataLens\datalens\backend\.env")

from google.cloud import storage, firestore

db = firestore.Client()
sessions_coll = db.collection('sessions')
storage_client = storage.Client()
bucket = storage_client.bucket('datalens-sessions-iu')

def migrate_local_sessions():
    try:
        with open(r'd:\Hackathon\DataLens\datalens\tmp\datalens-sessions\_firestore_index.json', 'r') as f:
            index = json.load(f)
    except Exception:
        index = {}

    for sid, meta in index.items():
        if sid == 'global_agent': continue
        
        # Default owner to the Google user if it was null
        if not meta.get('owner_id'):
            meta['owner_id'] = 'google_115577467046974099139'
            
        print(f"Uploading metadata for {sid} to Firestore...")
        sessions_coll.document(sid).set(meta)

        # Upload the JSON file to GCS
        local_json = rf'd:\Hackathon\DataLens\datalens\tmp\datalens-sessions\{sid}.json'
        if os.path.exists(local_json):
            print(f"Uploading {sid}.json to GCS...")
            blob = bucket.blob(f'{sid}.json')
            try:
                blob.upload_from_filename(local_json, content_type='application/json')
            except Exception as e:
                print(f"Failed to upload json: {e}")

    # Also fix the one just generated (5f9595db-06bb-4a27-8721-ec48dc9b9030)
    print("Fixing owner_id for any newly generated orphaned sessions in Firestore...")
    orphans = sessions_coll.where("owner_id", "==", None).stream()
    for doc in orphans:
        print(f"Claiming orphaned session: {doc.id}")
        doc.reference.update({'owner_id': 'google_115577467046974099139'})

if __name__ == "__main__":
    migrate_local_sessions()
    print("Migration finished!")
