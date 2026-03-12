output "cloud_run_url" {
  description = "Public HTTPS URL of the DataLens backend Cloud Run service."
  value       = google_cloud_run_v2_service.backend.uri
}

output "sessions_bucket_name" {
  description = "Name of the GCS bucket used to store session JSON files."
  value       = google_storage_bucket.sessions.name
}

output "images_bucket_name" {
  description = "Name of the GCS bucket used to store generated images."
  value       = google_storage_bucket.images.name
}

output "vertex_index_endpoint_id" {
  description = "Full resource ID of the Vertex AI index endpoint used for RAG retrieval."
  value       = google_vertex_ai_index_endpoint.rag_endpoint.id
}

output "vertex_deployed_index_id" {
  description = "Deployed index ID string to use as VERTEX_AI_DEPLOYED_INDEX_ID env var."
  value       = google_vertex_ai_index_endpoint_deployed_index.rag_deployed.deployed_index_id
}

output "artifact_registry_repo" {
  description = "Artifact Registry repository URI for the DataLens backend Docker images."
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.backend.repository_id}"
}

output "cloud_run_sa_email" {
  description = "Email of the service account attached to the Cloud Run service."
  value       = google_service_account.cloud_run_sa.email
}

output "firestore_database_name" {
  description = "Name of the Firestore database instance."
  value       = google_firestore_database.default.name
}

output "vertex_index_id" {
  description = "Full resource ID of the Vertex AI Vector Search index."
  value       = google_vertex_ai_index.rag_index.id
}

output "backend_image_path" {
  description = "Full Docker image path (without tag) for use in CI/CD pipelines."
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.backend.repository_id}/datalens-backend"
}
