# DataLens 🔍

**DataLens** is a multimodal AI-powered data storytelling platform built for the **Gemini Live Agent Challenge** (Creative Storyteller category). It goes beyond traditional charts, transforming raw datasets into engaging, multi-perspective stories using Gemini's advanced interleaved output features.

---

## 🚀 Demos & Deployment

- **Live App:** [Try DataLens Live](https://datalens-backend-844382502061.us-central1.run.app/)
  - *Tip: You can use the provided [`spotify_tracks.csv`](./spotify_tracks.csv) as a sample dataset to test out the platform!*
- **Live Demo Video:** [Watch DataLens in Action (YouTube)](https://www.youtube.com/watch?v=fWmHkDYD4-4)
- **Google Cloud Deployment Proof:** [Architecture & Deployment (YouTube)](https://www.youtube.com/watch?v=LFAzdkaty1g)

---

## 🏗️ Architecture & Core Flow

![DataLens Architecture](./Datalens_Architecture.png)

1. **Upload & Ingest:** Users upload CSV/Excel files or connect their database.
2. **Profiling:** Pandas automatically profiles the dataset to build a strong `data_profile` context.
3. **Smart Searching (RAG):** Vertex AI Vector Search indexes the dataset, stories, and external documents.
4. **Interleaved Story Generation:** `gemini-3-pro` simultaneously streams 3 distinct story formats with inline `IMAGE_PROMPT` tags.
5. **Parallel Image Generation:** As text streams, `IMAGE_PROMPT` tags trigger parallel Nano Banana Pro (`gemini-3-pro-image-preview`) calls, weaving images directly into the story.
6. **Live Voice Agent:** A bidirectional WebSocket connects users to the Gemini Live API, enabling conversational data exploration with full RAG context and on-demand image generation.
7. **Persistence:** Sessions (stories, generated artifacts, conversation history) are automatically saved to Google Cloud Storage (GCS) and Firestore.

---

## ✨ Key Features

- **Triple-Perspective Storytelling:** 
  - 🧒 **ELI5:** Simple metaphors with fun, cartoon-style images.
  - 🏢 **Architecture:** Schema designs and ER diagram images for engineers.
  - 📊 **Analyst:** Business KPIs, trends, UI charts, and infographic elements.
- **Interleaved Output:** Real-time generation of textual narrative gracefully intertwined with dynamic image creation.
- **Gemini Live Voice Agent:** Hands-free, real-time chat with an intelligent "Voice Orb" that can reason over your datasets and instantly illustrate visual concepts.
- **RAG-Powered Conversations:** Embeddings seamlessly integrate external user documents, dataset structural stats, and previous story elements for highly contextual insights.

---

## 🛠️ Technology Stack

### AI Models & Agents (google-genai SDK >= 1.52.0)
- **Storyteller:** `gemini-3-pro` (Interleaved Output)
- **Image Generation:** `gemini-3-pro-image-preview` (Powered by Nano Banana Pro)
- **Voice Agent:** Gemini Live API via bidirectional WebSocket (`google-adk`)
- **Embeddings:** `text-embedding-004` (Vertex AI Vector Search)

### Backend
- **Framework:** FastAPI (Python 3.11, fully async)
- **Data Processing:** Pandas, openpyxl
- **Database & Storage:** Google Cloud Storage (GCS), Firestore
- **Vector DB:** Vertex AI Vector Search (768 dims, Cosine distance)
- **Deployment:** Cloud Run (Dockerized)

### Frontend
- **Framework:** React 18 + TypeScript + Vite
- **Styling & UI:** Tailwind CSS, Framer Motion (streaming animations)
- **State Management:** Zustand
- **Real-time Comms:** Server-Sent Events (SSE) for stories, WebSockets for Live Agent
- **Visualization:** Recharts

---

## 📁 Repository Structure

```
datalens/
├── backend/                  # FastAPI application, AI endpoints, and WebSocket agents
│   └── services/             # Core logic: gemini_story, live_agent, rag_pipeline
├── frontend/                 # React UI, hooks for SSE & WebSockets, Dashboard layout
├── infrastructure/           # Terraform configs & deployment scripts for GCP
├── CLAUDE.md                 # Detailed Architecture Reference
├── TROUBLESHOOTING.md        # Common issues and debugging instructions
└── deploy.sh                 # Deployment script for Google Cloud Run
```

---

## 🏃 Getting Started

### Local Setup
Ensure you have Python 3.11+, Node.js, and a Google Cloud Project with the required APIs enabled.

1. **Clone the repo**
2. **Backend Setup:**
   ```bash
   cd backend
   pip install -r ../requirements.txt
   # Set up your .env file based on .env.example
   python -m uvicorn main:app --reload
   ```
3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

*(See `TROUBLESHOOTING.md` for more detailed setup caveats.)*

### Deployment
To deploy your own instance to Google Cloud Run, execute the deployment script:
```bash
./deploy.sh
```
Requires `gcloud` CLI authenticated and properly configured.

---

Built with ❤️ for the **Gemini Live Agent Challenge**.
