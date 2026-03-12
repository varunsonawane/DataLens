variable "project_id" {
  type        = string
  description = "The GCP project ID where all DataLens resources will be deployed."

  validation {
    condition     = length(var.project_id) > 0
    error_message = "project_id must not be empty."
  }
}

variable "region" {
  type        = string
  description = "The GCP region for all regional resources (Cloud Run, Vertex AI, GCS, Artifact Registry)."
  default     = "us-central1"

  validation {
    condition = contains([
      "us-central1",
      "us-east1",
      "us-east4",
      "us-west1",
      "us-west2",
      "us-west3",
      "us-west4",
      "northamerica-northeast1",
      "northamerica-northeast2",
      "southamerica-east1",
      "europe-west1",
      "europe-west2",
      "europe-west3",
      "europe-west4",
      "europe-west6",
      "europe-north1",
      "asia-east1",
      "asia-east2",
      "asia-northeast1",
      "asia-northeast2",
      "asia-northeast3",
      "asia-south1",
      "asia-southeast1",
      "asia-southeast2",
      "australia-southeast1",
    ], var.region)
    error_message = "region must be a valid GCP region."
  }
}

variable "environment" {
  type        = string
  description = "Deployment environment. Affects resource naming, lifecycle policies, and destruction protection."
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "environment must be one of: dev, staging, prod."
  }
}

variable "image_tag" {
  type        = string
  description = "Docker image tag for the DataLens backend container. Typically the Git commit SHA or 'latest'."
  default     = "latest"

  validation {
    condition     = length(var.image_tag) > 0
    error_message = "image_tag must not be empty."
  }
}
