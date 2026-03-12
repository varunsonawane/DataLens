import os
import time
from google.cloud import storage

print("Attempting to initialize GCS client...")
start = time.time()
try:
    client = storage.Client()
    print(f"Success in {time.time() - start:.2f}s")
except Exception as e:
    print(f"Failed: {e}")
