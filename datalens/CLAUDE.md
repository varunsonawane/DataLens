# DataLens — Architecture Reference

## Project Overview
DataLens is a multimodal AI-powered data storytelling platform built for the Gemini Live Agent Challenge hackathon (Creative Storyteller category). It uses Gemini's interleaved/mixed output as the mandatory technique.

## Core Flow
1. User uploads CSV/Excel or connects DB
2. Pandas profiles the dataset → data_profile dict
3. RAG indexes built across dataset, stories, external docs (Vertex AI Vector Search)
4. Gemini 3 Pro streams 3 story formats simultaneously with inline IMAGE_PROMPT tags
5. Each IMAGE_PROMPT triggers a parallel Nano Banana Pro (gemini-3-pro-image-preview) call
6. Frontend renders: left sidebar (sessions) | center (stories + gallery) | right (voice agent)
7. Gemini Live API voice agent has full RAG context and can generate images on demand
8. Session saved to GCS (stories, images, conversation) + Firestore (metadata index)

## Tech Stack

### AI Models (google-genai SDK >= 1.52.0)
- Story generation: `gemini-3-pro` with interleaved output
- Image generation: `gemini-3-pro-image-preview` (Nano Banana Pro)
- Voice agent: Gemini Live API (bidirectional WebSocket)
- Embeddings: `text-embedding-004` via Vertex AI
- Agent orchestration: ADK (google-adk)

### Backend
- FastAPI (Python 3.11)
- Pandas + openpyxl
- Vertex AI Vector Search (768 dims, COSINE distance)
- GCS: datalens-sessions/ + datalens-images/
- Firestore: sessions collection
- Cloud Run deployment

### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Recharts (data visualizations in Analyst tab)
- WebSocket (Gemini Live API voice agent)
- Framer Motion (streaming animations)
- Zustand (session state)
- Vite (build tool)

## Critical File Locations
- `backend/services/gemini_story.py` — CORE: interleaved output story generation
- `backend/services/nano_banana.py` — image generation with Nano Banana Pro
- `backend/services/rag_pipeline.py` — Vertex AI Vector Search RAG
- `backend/services/live_agent.py` — Gemini Live API ADK agent
- `backend/services/gcs_service.py` — GCS + Firestore persistence
- `frontend/src/components/layout/Dashboard.tsx` — 3-panel layout
- `frontend/src/hooks/useStoryStream.ts` — SSE streaming hook
- `frontend/src/hooks/useVoiceAgent.ts` — WebSocket voice hook

## Environment Variables (see .env.example)
- GOOGLE_CLOUD_PROJECT
- GOOGLE_CLOUD_LOCATION
- GCS_BUCKET_SESSIONS (datalens-sessions)
- GCS_BUCKET_IMAGES (datalens-images)
- VERTEX_AI_INDEX_ENDPOINT
- VERTEX_AI_INDEX_ID
- FIRESTORE_COLLECTION (sessions)

## Key Conventions
- All async — FastAPI with asyncio throughout
- SSE endpoint at POST /stories/generate (streams JSON chunks)
- WebSocket endpoint at /ws/agent/{session_id}
- Session IDs are UUID4 strings
- GCS paths: sessions/{session_id}.json, images/{session_id}/{uuid}.png
- Firestore doc id = session_id
- IMAGE_PROMPT extraction: buffer parsing in gemini_story.py
- All Gemini calls via google-genai SDK client.aio (async)

## Story Format Structure
Three formats generated in one stream:
1. **ELI5**: Simple metaphors, cartoon image prompts (2-3 images)
2. **Architecture**: Schema relationships, ER diagram image prompts
3. **Analyst**: KPIs/trends, chart JSON blocks, infographic image prompts

## RAG Index Namespaces (Vertex AI Vector Search)
- `dataset`: Columnar chunks (one chunk per column + stats)
- `stories`: ~200 token chunks of each story format
- `external_docs`: User-uploaded docs, 300 tokens / 50 overlap

## Session JSON Schema (GCS)
```json
{
  "session_id": "uuid",
  "created_at": "ISO",
  "filename": "sales_q3.csv",
  "data_profile": {},
  "stories": { "eli5": "", "architecture": "", "analyst": "", "chart_data": {} },
  "images": [{ "url": "", "prompt": "", "format": "eli5" }],
  "conversation_history": [{ "role": "user", "content": "", "timestamp": "" }],
  "rag_index_ids": { "dataset": "", "stories": "", "external": "" }
}
```

## Firestore Session Document
```json
{
  "session_id": "uuid",
  "filename": "sales_q3.csv",
  "created_at": "timestamp",
  "preview_text": "first 100 chars of ELI5",
  "image_count": 8,
  "thumbnail_url": "first image URL"
}
```

## Dashboard Layout
- Left: 260px sidebar — session history
- Center: flex-1 — StoryTabs + ImageGallery
- Right: 320px — AgentPanel (VoiceOrb + ChatBubbles)

## VoiceOrb States
- idle: slow pulse, mic icon
- listening: sonar rings expanding
- speaking: waveform synced to audio
- generating: sparkle spinner + "Creating visual..."

## Deployment
- Cloud Run: backend container
- Dockerfile in backend/
- cloudbuild.yaml for CI/CD
- Terraform in infrastructure/terraform/
- deploy.sh in infrastructure/scripts/
