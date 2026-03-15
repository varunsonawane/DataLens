import { create } from 'zustand';
import type {
  Session,
  SessionListItem,
  StoryFormat,
  VoiceOrbState,
  ConversationMessage,
  DataProfile,
  ImageRecord,
  Stories,
  ChartData,
} from '../types';

interface PendingImage {
  prompt: string;
  caption?: string;
  format?: StoryFormat;
}

interface StreamProgress {
  eli5: string;
  architecture: string;
  analyst: string;
}

interface SessionState {
  // Session data
  currentSession: Session | null;
  sessionList: SessionListItem[];
  sessionId: string | null;
  dataProfile: DataProfile | null;
  dashboardMode: 'upload' | 'session' | 'directory' | 'ai';
  globalSearchQuery: string;

  // Streaming state
  isStreaming: boolean;
  streamProgress: StreamProgress;
  activeFormat: StoryFormat;

  // Image management
  pendingImages: Map<string, PendingImage>;
  resolvedImages: ImageRecord[];

  // Voice agent
  voiceOrbState: VoiceOrbState;
  conversationHistory: ConversationMessage[];

  // Chart data
  chartData: ChartData | null;

  // Actions
  setCurrentSession: (session: Session | null) => void;
  setSessionList: (list: SessionListItem[]) => void;
  setIsStreaming: (streaming: boolean) => void;
  appendStoryText: (format: StoryFormat, text: string) => void;
  setActiveFormat: (format: StoryFormat) => void;
  addPendingImage: (placeholder_id: string, prompt: string, format?: StoryFormat) => void;
  resolveImage: (placeholder_id: string, url: string, prompt?: string, format?: StoryFormat, caption?: string) => void;
  setVoiceOrbState: (state: VoiceOrbState) => void;
  addConversationMessage: (message: ConversationMessage) => void;
  setDataProfile: (profile: DataProfile | null) => void;
  setSessionId: (id: string | null) => void;
  setChartData: (data: ChartData | null) => void;
  resetStream: () => void;
  loadSession: (session: Session) => void;
  finalizeStories: (stories: Stories) => void;
  setDashboardMode: (mode: 'upload' | 'session' | 'directory' | 'ai') => void;
  setGlobalSearchQuery: (query: string) => void;
  clearChat: () => void;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  // Initial state
  currentSession: null,
  sessionList: [],
  sessionId: null,
  dataProfile: null,
  dashboardMode: 'upload',
  globalSearchQuery: '',

  isStreaming: false,
  streamProgress: { eli5: '', architecture: '', analyst: '' },
  activeFormat: 'eli5',

  pendingImages: new Map(),
  resolvedImages: [],

  voiceOrbState: 'idle',
  conversationHistory: [],

  chartData: null,

  // Actions
  setCurrentSession: (session) => set({ currentSession: session }),

  setSessionList: (list) => set({ sessionList: list }),

  setIsStreaming: (streaming) => set({ isStreaming: streaming }),

  appendStoryText: (format, text) =>
    set((state) => ({
      streamProgress: {
        ...state.streamProgress,
        [format]: state.streamProgress[format] + text,
      },
    })),

  setActiveFormat: (format) => set({ activeFormat: format }),

  addPendingImage: (placeholder_id, prompt, format) =>
    set((state) => {
      const next = new Map(state.pendingImages);
      next.set(placeholder_id, { prompt, format });
      return { pendingImages: next };
    }),

  resolveImage: (placeholder_id, url, prompt, format, caption) =>
    set((state) => {
      const next = new Map(state.pendingImages);
      const pending = next.get(placeholder_id);
      next.delete(placeholder_id);

      const imageRecord: ImageRecord = {
        id: placeholder_id,
        url,
        prompt: prompt || pending?.prompt || '',
        caption: caption || pending?.caption || '',
        format: format || pending?.format || 'eli5',
      };

      return {
        pendingImages: next,
        resolvedImages: [...state.resolvedImages, imageRecord],
      };
    }),

  setVoiceOrbState: (voiceOrbState) => set({ voiceOrbState }),

  addConversationMessage: (message) =>
    set((state) => {
      const last = state.conversationHistory[state.conversationHistory.length - 1];
      // Drop exact duplicate if same role+content arrives within 500ms (React StrictMode double-mount guard)
      if (
        last &&
        last.role === message.role &&
        last.content === message.content &&
        Math.abs(new Date(message.timestamp).getTime() - new Date(last.timestamp).getTime()) < 500
      ) {
        return state;
      }
      return { conversationHistory: [...state.conversationHistory, message] };
    }),

  setDataProfile: (profile) => set({ dataProfile: profile }),

  setSessionId: (id) => set({ sessionId: id }),

  setChartData: (data) => set({ chartData: data }),

  resetStream: () =>
    set({
      streamProgress: { eli5: '', architecture: '', analyst: '' },
      pendingImages: new Map(),
      resolvedImages: [],
      isStreaming: false,
      chartData: null,
      // NOTE: dashboardMode is intentionally NOT reset here -
      // the caller (handleUploadComplete) sets mode to 'session' after this.
    }),

  loadSession: (session) => {
    const resolvedImages = session.images.map((img) => ({
      ...img,
      id: img.id || crypto.randomUUID(),
    }));

    set({
      currentSession: session,
      sessionId: session.session_id,
      dataProfile: session.data_profile,
      streamProgress: {
        eli5: session.stories.eli5 || '',
        architecture: session.stories.architecture || '',
        analyst: session.stories.analyst || '',
      },
      resolvedImages,
      pendingImages: new Map(),
      conversationHistory: session.conversation_history || [],
      isStreaming: false,
      chartData: session.stories.chart_data || null,
      activeFormat: 'eli5',
      dashboardMode: 'session',
    });
  },

  finalizeStories: (stories) => {
    const { sessionId, dataProfile, resolvedImages } = get();
    if (!sessionId || !dataProfile) return;

    const session: Session = {
      session_id: sessionId,
      created_at: new Date().toISOString(),
      filename: dataProfile.filename || 'dataset',
      data_profile: dataProfile,
      stories,
      images: resolvedImages,
      conversation_history: get().conversationHistory,
    };

    set({
      currentSession: session,
      streamProgress: {
        eli5: stories.eli5 || '',
        architecture: stories.architecture || '',
        analyst: stories.analyst || '',
      },
      chartData: stories.chart_data || null,
      isStreaming: false,
    });
  },

  setDashboardMode: (mode) => set({ dashboardMode: mode }),

  setGlobalSearchQuery: (query) => set({ globalSearchQuery: query }),

  clearChat: () => set({
    currentSession: null,
    sessionId: crypto.randomUUID(),
    dataProfile: null,
    conversationHistory: [],
    pendingImages: new Map(),
    resolvedImages: [],
    chartData: null,
    // Note: streamProgress is kept as is because it's tied to dataset viewing usually
  }),
}));
