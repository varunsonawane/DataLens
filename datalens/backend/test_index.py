from google.cloud import firestore
import sys

def main():
    db = firestore.Client(project="datalens-488301")
    try:
        docs = db.collection("sessions").where("owner_id", "==", "google_115577467046974099139").order_by("created_at", direction=firestore.Query.DESCENDING).stream()
        print(list(docs))
    except Exception as e:
        print(e)

if __name__ == "__main__":
    main()
