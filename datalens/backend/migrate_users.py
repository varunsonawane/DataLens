from google.cloud import firestore
import json

db = firestore.Client(project='datalens-488301')
collection = db.collection('users')

with open(r'd:\Hackathon\DataLens\datalens\tmp\datalens-sessions\_users.json', 'r') as f:
    users = json.load(f)
    print(f"Loaded {len(users)} users from local file.")
    for uid, user_data in users.items():
        print(f"Migrating {uid}...")
        collection.document(uid).set(user_data)
        
print("Migration complete!")
