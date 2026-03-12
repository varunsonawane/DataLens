import os
import sys
import pathlib
import socket
from dotenv import load_dotenv

def check_env():
    print("--- DataLens Setup Verification ---")
    
    # 1. Check .env file
    env_path = pathlib.Path("backend/.env")
    if not env_path.exists():
        print("[!] ERROR: backend/.env not found. Create it from .env.example.")
        return False
    
    load_dotenv(env_path)
    print("[+] backend/.env loaded.")

    # 2. Check GCP Config
    project = os.getenv("GOOGLE_CLOUD_PROJECT")
    if not project:
        print("[!] ERROR: GOOGLE_CLOUD_PROJECT is not set in .env.")
    else:
        print(f"[+] Google Cloud Project: {project}")

    # 3. Check Authentication
    adc_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    if adc_path:
        if pathlib.Path(adc_path).exists():
            print(f"[+] Service Account Key found: {adc_path}")
        else:
            print(f"[!] WARNING: GOOGLE_APPLICATION_CREDENTIALS points to a non-existent file: {adc_path}")
    else:
        print("[i] INFO: No Service Account Key in .env. Falling back to ADC.")

    # 4. Check Local Dev Mode
    local_dev = os.getenv("GCS_LOCAL_DEV", "").lower() in ("true", "1", "yes")
    if local_dev:
        print("[+] LOCAL_DEV Mode: ON (Bypassing GCS/Firestore)")
    else:
        print("[i] INFO: LOCAL_DEV Mode: OFF (Using GCS/Firestore)")
        # Check buckets
        sessions_bucket = os.getenv("GCS_BUCKET_SESSIONS")
        images_bucket = os.getenv("GCS_BUCKET_IMAGES")
        if not sessions_bucket or not images_bucket:
            print("[!] ERROR: GCS buckets not configured in .env.")

    # 5. Check Ports
    backend_port = int(os.getenv("BACKEND_PORT", 8080))
    def is_port_in_use(port):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            return s.connect_ex(('localhost', port)) == 0

    if is_port_in_use(backend_port):
        print(f"[!] WARNING: Port {backend_port} is already in use. Ensure no other backend is running.")
    else:
        print(f"[+] Backend port {backend_port} is available.")

    # 6. Check Requirements
    try:
        import fastapi
        import google.genai
        import pandas
        print("[+] Core Python requirements (fastapi, google-genai, pandas) are installed.")
    except ImportError as e:
        print(f"[!] ERROR: Missing requirement: {e.name}. Run 'pip install -r requirements.txt'")

    print("\n--- Verification Complete ---")
    return True

if __name__ == "__main__":
    check_env()
