terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
}

# ---------------------------------------------------------------------------
# Enable required APIs
# ---------------------------------------------------------------------------

resource "google_project_service" "run_api" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "firestore_api" {
  service            = "firestore.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "storage_api" {
  service            = "storage.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "aiplatform_api" {
  service            = "aiplatform.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "artifactregistry_api" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "iam_api" {
  service            = "iam.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "generativelanguage_api" {
  service            = "generativelanguage.googleapis.com"
  disable_on_destroy = false
}

# ---------------------------------------------------------------------------
# GCS Buckets
# ---------------------------------------------------------------------------

resource "google_storage_bucket" "sessions" {
  name          = "${var.project_id}-datalens-sessions"
  location      = var.region
  storage_class = "STANDARD"
  force_destroy = var.environment == "dev" ? true : false

  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }

  lifecycle_rule {
    action {
      type = "Delete"
    }
    condition {
      age        = 90
      with_state = "ARCHIVED"
    }
  }

  cors {
    origin          = ["*"]
    method          = ["GET", "HEAD", "OPTIONS"]
    response_header = ["Content-Type", "Access-Control-Allow-Origin"]
    max_age_seconds = 3600
  }

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }
}

resource "google_storage_bucket" "images" {
  name          = "${var.project_id}-datalens-images"
  location      = var.region
  storage_class = "STANDARD"
  force_destroy = var.environment == "dev" ? true : false

  uniform_bucket_level_access = true

  cors {
    origin          = ["*"]
    method          = ["GET", "HEAD", "OPTIONS"]
    response_header = ["Content-Type", "Access-Control-Allow-Origin", "Cache-Control"]
    max_age_seconds = 86400
  }

  lifecycle_rule {
    action {
      type = "SetStorageClass"
      storage_class = "NEARLINE"
    }
    condition {
      age = 30
    }
  }

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }
}

# Staging bucket for Vertex AI index updates
resource "google_storage_bucket" "vertex_staging" {
  name          = "${var.project_id}-vertex-index-staging"
  location      = var.region
  storage_class = "STANDARD"
  force_destroy = true

  uniform_bucket_level_access = true

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }
}

# Make images bucket publicly readable
resource "google_storage_bucket_iam_member" "images_public_reader" {
  bucket = google_storage_bucket.images.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# ---------------------------------------------------------------------------
# Firestore
# ---------------------------------------------------------------------------

resource "google_firestore_database" "default" {
  project     = var.project_id
  name        = "(default)"
  location_id = var.region
  type        = "FIRESTORE_NATIVE"

  depends_on = [google_project_service.firestore_api]
}

# Composite index for listing sessions ordered by created_at
resource "google_firestore_index" "sessions_created_at" {
  project    = var.project_id
  database   = google_firestore_database.default.name
  collection = "sessions"

  fields {
    field_path = "created_at"
    order      = "DESCENDING"
  }

  fields {
    field_path = "__name__"
    order      = "DESCENDING"
  }

  depends_on = [google_firestore_database.default]
}

# ---------------------------------------------------------------------------
# Artifact Registry
# ---------------------------------------------------------------------------

resource "google_artifact_registry_repository" "backend" {
  provider      = google-beta
  repository_id = "datalens-backend"
  format        = "DOCKER"
  location      = var.region
  description   = "DataLens backend Docker images"

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }

  depends_on = [google_project_service.artifactregistry_api]
}

# ---------------------------------------------------------------------------
# Service Account for Cloud Run
# ---------------------------------------------------------------------------

resource "google_service_account" "cloud_run_sa" {
  account_id   = "datalens-cloud-run-sa"
  display_name = "DataLens Cloud Run Service Account"
  description  = "Service account used by the DataLens Cloud Run backend service"
}

# GCS sessions bucket — read/write
resource "google_storage_bucket_iam_member" "sa_sessions_rw" {
  bucket = google_storage_bucket.sessions.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# GCS images bucket — read/write
resource "google_storage_bucket_iam_member" "sa_images_rw" {
  bucket = google_storage_bucket.images.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Vertex AI staging bucket — read/write
resource "google_storage_bucket_iam_member" "sa_vertex_staging_rw" {
  bucket = google_storage_bucket.vertex_staging.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Firestore — read/write
resource "google_project_iam_member" "sa_firestore_rw" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Vertex AI — user (Vector Search, Embeddings)
resource "google_project_iam_member" "sa_vertex_ai_user" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Gemini / Generative Language API access
resource "google_project_iam_member" "sa_gemini_user" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Artifact Registry reader — pull built images
resource "google_artifact_registry_repository_iam_member" "sa_artifact_reader" {
  provider   = google-beta
  location   = var.region
  repository = google_artifact_registry_repository.backend.repository_id
  role       = "roles/artifactregistry.reader"
  member     = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# Allow Cloud Run invoker for public access (managed via Cloud Run itself)
resource "google_project_iam_member" "sa_run_invoker" {
  project = var.project_id
  role    = "roles/run.invoker"
  member  = "allUsers"
}

# ---------------------------------------------------------------------------
# Vertex AI Vector Search Index (beta — uses google-beta provider)
# ---------------------------------------------------------------------------

resource "google_vertex_ai_index" "rag_index" {
  provider     = google-beta
  display_name = "datalens-rag-index"
  description  = "DataLens RAG index — 768-dim text-embedding-004 vectors"
  region       = var.region

  metadata {
    contents_delta_uri = "gs://${google_storage_bucket.vertex_staging.name}/"

    config {
      dimensions                  = 768
      approximate_neighbors_count = 10
      distance_measure_type       = "COSINE_DISTANCE"
      shard_size                  = "SHARD_SIZE_MEDIUM"

      algorithm_config {
        tree_ah_config {
          leaf_node_embedding_count    = 1000
          leaf_nodes_to_search_percent = 10
        }
      }
    }
  }

  index_update_method = "STREAM_UPDATE"

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }

  depends_on = [
    google_project_service.aiplatform_api,
    google_storage_bucket.vertex_staging,
  ]
}

# ---------------------------------------------------------------------------
# Vertex AI Index Endpoint
# ---------------------------------------------------------------------------

resource "google_vertex_ai_index_endpoint" "rag_endpoint" {
  provider     = google-beta
  display_name = "datalens-rag-endpoint"
  description  = "DataLens RAG index endpoint for online querying"
  region       = var.region

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }

  depends_on = [google_project_service.aiplatform_api]
}

# ---------------------------------------------------------------------------
# Vertex AI Deployed Index
# ---------------------------------------------------------------------------

resource "google_vertex_ai_index_endpoint_deployed_index" "rag_deployed" {
  provider         = google-beta
  index_endpoint   = google_vertex_ai_index_endpoint.rag_endpoint.id
  index            = google_vertex_ai_index.rag_index.id
  deployed_index_id = "datalens_rag_deployed"
  display_name     = "datalens-rag-deployed"

  automatic_resources {
    min_replica_count = 1
    max_replica_count = 3
  }

  enable_access_logging = false

  depends_on = [
    google_vertex_ai_index.rag_index,
    google_vertex_ai_index_endpoint.rag_endpoint,
  ]
}

# ---------------------------------------------------------------------------
# Cloud Run service
# ---------------------------------------------------------------------------

resource "google_cloud_run_v2_service" "backend" {
  provider = google-beta
  name     = "datalens-backend"
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    service_account = google_service_account.cloud_run_sa.email

    scaling {
      min_instance_count = 0
      max_instance_count = 10
    }

    containers {
      image = "${var.region}-docker.pkg.dev/${var.project_id}/datalens-backend/datalens-backend:${var.image_tag}"

      resources {
        limits = {
          cpu    = "2"
          memory = "2Gi"
        }
        cpu_idle          = true
        startup_cpu_boost = true
      }

      ports {
        name           = "h2c"
        container_port = 8080
      }

      env {
        name  = "GOOGLE_CLOUD_PROJECT"
        value = var.project_id
      }

      env {
        name  = "GOOGLE_CLOUD_LOCATION"
        value = var.region
      }

      env {
        name  = "GCS_BUCKET_SESSIONS"
        value = google_storage_bucket.sessions.name
      }

      env {
        name  = "GCS_BUCKET_IMAGES"
        value = google_storage_bucket.images.name
      }

      env {
        name  = "FIRESTORE_COLLECTION"
        value = "sessions"
      }

      env {
        name  = "VERTEX_AI_INDEX_ENDPOINT_ID"
        value = split("/", google_vertex_ai_index_endpoint.rag_endpoint.id)[5]
      }

      env {
        name  = "VERTEX_AI_DEPLOYED_INDEX_ID"
        value = "datalens_rag_deployed"
      }

      env {
        name  = "ENVIRONMENT"
        value = var.environment
      }

      startup_probe {
        http_get {
          path = "/healthz"
          port = 8080
        }
        initial_delay_seconds = 10
        timeout_seconds       = 5
        period_seconds        = 10
        failure_threshold     = 5
      }

      liveness_probe {
        http_get {
          path = "/healthz"
          port = 8080
        }
        initial_delay_seconds = 30
        timeout_seconds       = 5
        period_seconds        = 30
        failure_threshold     = 3
      }
    }

    timeout             = "300s"
    max_instance_request_concurrency = 80
  }

  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }

  labels = {
    environment = var.environment
    managed_by  = "terraform"
    service     = "datalens"
  }

  depends_on = [
    google_project_service.run_api,
    google_artifact_registry_repository.backend,
    google_service_account.cloud_run_sa,
    google_firestore_database.default,
    google_storage_bucket.sessions,
    google_storage_bucket.images,
  ]
}

# Allow unauthenticated invocations of Cloud Run
resource "google_cloud_run_v2_service_iam_member" "backend_public" {
  project  = var.project_id
  location = var.region
  name     = google_cloud_run_v2_service.backend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
