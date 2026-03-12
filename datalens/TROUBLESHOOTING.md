# DataLens Troubleshooting Guide

If DataLens is not working after you've installed requirements and set up your `.env`, follow this guide to identify and fix common issues.

## 1. Quick Verification
Run the setup verification script to check your environment:
```powershell
python verify_setup.py
```

## 2. Common Issues

### Google Cloud Authentication
DataLens requires access to Google Cloud APIs (Gemini, Vertex AI, GCS).
- **Issue**: `DefaultCredentialsError` or `PermissionDenied`.
- **Fix**: Run the following command in your terminal to set up Application Default Credentials (ADC):
  ```powershell
  gcloud auth application-default login
  ```
  Alternatively, if you have a service account JSON, ensure `GOOGLE_APPLICATION_CREDENTIALS` in your `.env` points to the **correct absolute path** on your machine.

### Local Development Mode (`GCS_LOCAL_DEV`)
If you don't want to set up Google Cloud Storage or Firestore for local testing, use the local fallback.
- **Issue**: Backend fails to connect to GCS/Firestore.
- **Fix**: Set `GCS_LOCAL_DEV=true` in your `backend/.env`.
  - Sessions will be saved to `datalens/tmp/sessions/`
  - Images will be saved to `datalens/tmp/images/`

### Ports and Connections
- **Backend Port**: Default is `8080`. Ensure no other service is using it.
- **Frontend Port**: Default is `5173`.
- **CORS Issues**: Ensure `VITE_BACKEND_URL` in `frontend/.env` matches the `BACKEND_PORT` in `backend/.env`.
  - Example: `VITE_BACKEND_URL=http://localhost:8080`

### Windows Specifics
- **Paths**: Use absolute paths for `GOOGLE_APPLICATION_CREDENTIALS`.
- **Python Version**: Ensure you are using Python 3.11+.

## 3. Logs
Check the backend terminal for error logs. You can increase log verbosity by setting `LOG_LEVEL=DEBUG` in your `.env`.

## 4. Requirement Inconsistencies
If you get `ModuleNotFoundError`, ensure you have installed all requirements in a virtual environment:
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```
