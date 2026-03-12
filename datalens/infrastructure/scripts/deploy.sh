#!/bin/bash
# =============================================================================
# DataLens Cloud Run Deployment Script
# =============================================================================
# Usage:
#   ./deploy.sh [PROJECT_ID] [REGION] [IMAGE_TAG]
#
# Arguments (all optional — fall back to env vars / defaults):
#   PROJECT_ID  GCP project ID        (env: GOOGLE_CLOUD_PROJECT)
#   REGION      GCP region            (default: us-central1)
#   IMAGE_TAG   Docker image tag      (default: latest)
#
# Prerequisites:
#   - gcloud CLI authenticated (gcloud auth login / workload identity)
#   - Docker daemon running and authenticated to Artifact Registry
#   - Backend Dockerfile at ./backend/Dockerfile
# =============================================================================
set -euo pipefail

# ---------------------------------------------------------------------------
# Resolve arguments / environment
# ---------------------------------------------------------------------------

PROJECT_ID="${1:-${GOOGLE_CLOUD_PROJECT:-}}"
REGION="${2:-us-central1}"
IMAGE_TAG="${3:-latest}"

if [[ -z "${PROJECT_ID}" ]]; then
  echo "[ERROR] PROJECT_ID is required. Pass it as the first argument or set GOOGLE_CLOUD_PROJECT." >&2
  exit 1
fi

SERVICE_NAME="datalens-backend"
REPO="datalens-backend"
IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO}/${SERVICE_NAME}:${IMAGE_TAG}"

echo "=============================================="
echo "  DataLens Cloud Run Deployment"
echo "=============================================="
echo "  Project  : ${PROJECT_ID}"
echo "  Region   : ${REGION}"
echo "  Image    : ${IMAGE}"
echo "=============================================="

# ---------------------------------------------------------------------------
# Authenticate Docker to Artifact Registry
# ---------------------------------------------------------------------------

echo ""
echo "[1/4] Configuring Docker authentication for Artifact Registry..."
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

# ---------------------------------------------------------------------------
# Build Docker image
# ---------------------------------------------------------------------------

echo ""
echo "[2/4] Building Docker image..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

docker build \
  --platform linux/amd64 \
  --build-arg BUILD_DATE="$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --build-arg IMAGE_TAG="${IMAGE_TAG}" \
  -t "${IMAGE}" \
  "${REPO_ROOT}/backend/"

echo "  Docker build complete."

# ---------------------------------------------------------------------------
# Push to Artifact Registry
# ---------------------------------------------------------------------------

echo ""
echo "[3/4] Pushing image to Artifact Registry..."
docker push "${IMAGE}"
echo "  Push complete."

# ---------------------------------------------------------------------------
# Deploy to Cloud Run
# ---------------------------------------------------------------------------

echo ""
echo "[4/4] Deploying to Cloud Run..."

# Resolve resource names from Terraform outputs if terraform is available
SESSIONS_BUCKET="${PROJECT_ID}-datalens-sessions"
IMAGES_BUCKET="${PROJECT_ID}-datalens-images"

TERRAFORM_DIR="${SCRIPT_DIR}/../terraform"
if command -v terraform &>/dev/null && [[ -f "${TERRAFORM_DIR}/main.tf" ]]; then
  pushd "${TERRAFORM_DIR}" > /dev/null
  # Only try to read outputs if state exists
  if terraform output -json &>/dev/null 2>&1; then
    TF_SESSIONS_BUCKET="$(terraform output -raw sessions_bucket_name 2>/dev/null || echo "")"
    TF_IMAGES_BUCKET="$(terraform output -raw images_bucket_name 2>/dev/null || echo "")"
    TF_VERTEX_ENDPOINT="$(terraform output -raw vertex_index_endpoint_id 2>/dev/null || echo "")"
    TF_DEPLOYED_INDEX="$(terraform output -raw vertex_deployed_index_id 2>/dev/null || echo "")"
    [[ -n "${TF_SESSIONS_BUCKET}" ]] && SESSIONS_BUCKET="${TF_SESSIONS_BUCKET}"
    [[ -n "${TF_IMAGES_BUCKET}" ]] && IMAGES_BUCKET="${TF_IMAGES_BUCKET}"
  fi
  popd > /dev/null
fi

VERTEX_ENDPOINT_ID="${TF_VERTEX_ENDPOINT:-}"
DEPLOYED_INDEX_ID="${TF_DEPLOYED_INDEX:-datalens_rag_deployed}"

# Build the --set-env-vars string
ENV_VARS="GOOGLE_CLOUD_PROJECT=${PROJECT_ID}"
ENV_VARS="${ENV_VARS},GOOGLE_CLOUD_LOCATION=${REGION}"
ENV_VARS="${ENV_VARS},GCS_BUCKET_SESSIONS=${SESSIONS_BUCKET}"
ENV_VARS="${ENV_VARS},GCS_BUCKET_IMAGES=${IMAGES_BUCKET}"
ENV_VARS="${ENV_VARS},FIRESTORE_COLLECTION=sessions"
ENV_VARS="${ENV_VARS},VERTEX_AI_DEPLOYED_INDEX_ID=${DEPLOYED_INDEX_ID}"
[[ -n "${VERTEX_ENDPOINT_ID}" ]] && \
  ENV_VARS="${ENV_VARS},VERTEX_AI_INDEX_ENDPOINT_ID=${VERTEX_ENDPOINT_ID}"

gcloud run deploy "${SERVICE_NAME}" \
  --image "${IMAGE}" \
  --region "${REGION}" \
  --platform managed \
  --allow-unauthenticated \
  --memory 2Gi \
  --cpu 2 \
  --min-instances 0 \
  --max-instances 10 \
  --concurrency 80 \
  --timeout 300 \
  --set-env-vars "${ENV_VARS}" \
  --project "${PROJECT_ID}" \
  --quiet

# ---------------------------------------------------------------------------
# Report deployment URL
# ---------------------------------------------------------------------------

echo ""
echo "=============================================="
echo "  Deployment complete!"
echo "=============================================="

SERVICE_URL="$(gcloud run services describe "${SERVICE_NAME}" \
  --region "${REGION}" \
  --project "${PROJECT_ID}" \
  --format "value(status.url)")"

echo "  Service URL : ${SERVICE_URL}"
echo "  Health check: ${SERVICE_URL}/healthz"
echo ""

# Quick health check
echo "Running health check..."
HTTP_CODE="$(curl -s -o /dev/null -w "%{http_code}" "${SERVICE_URL}/healthz" || echo "000")"
if [[ "${HTTP_CODE}" == "200" ]]; then
  echo "  Health check passed (HTTP ${HTTP_CODE})."
else
  echo "  [WARNING] Health check returned HTTP ${HTTP_CODE}. Service may still be starting up."
fi

echo ""
echo "Done."
