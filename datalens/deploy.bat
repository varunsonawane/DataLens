@echo off
REM DataLens — All-in-One Deployment Script (Frontend + Backend to Cloud Run)

echo 🚀 Building React Frontend...
cd frontend
call npm run build
cd ..

echo 📂 Copying frontend build to backend static folder...
if exist backend\static rmdir /S /Q backend\static
mkdir backend\static
xcopy /E /I /Y frontend\dist backend\static

echo ☁️ Deploying Backend + Frontend to Google Cloud Run...
cd backend
call gcloud run deploy datalens-backend ^
  --source . ^
  --region us-central1 ^
  --allow-unauthenticated ^
  --project datalens-488301 ^
  --set-env-vars="GOOGLE_CLOUD_PROJECT=datalens-488301,GOOGLE_CLOUD_LOCATION=us-central1,GCS_BUCKET_SESSIONS=datalens-sessions-iu,GCS_BUCKET_IMAGES=datalens-images-iu,VERTEX_AI_INDEX_ENDPOINT=472391036069904384,VERTEX_AI_INDEX_ID=2849032549303353344,FIRESTORE_COLLECTION=sessions,ALLOWED_ORIGINS=*"
echo ✅ Deployment Complete! Both Frontend and Backend are live on the Cloud Run URL.
cd ..
pause
