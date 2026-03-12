import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSessionStore } from '../store/sessionStore';
import type { Session, SessionListItem } from '../types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

interface UseSessionsReturn {
  sessions: SessionListItem[];
  loadSession: (sessionId: string) => Promise<void>;
  deleteSession: (sessionId: string) => Promise<boolean>;
  refreshSessions: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useSessions(): UseSessionsReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setSessionList, loadSession: storeLoadSession, sessionList } = useSessionStore();

  const refreshSessions = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get<SessionListItem[]>(`${BACKEND_URL}/sessions`);
      const sessions = response.data;
      setSessionList(sessions);
    } catch (err) {
      const message =
        axios.isAxiosError(err)
          ? err.response?.data?.detail || err.message
          : 'Failed to fetch sessions';
      setError(message);
      console.error('Failed to fetch sessions:', err);
    } finally {
      setIsLoading(false);
    }
  }, [setSessionList]);

  const loadSession = useCallback(
    async (sessionId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<Session>(
          `${BACKEND_URL}/sessions/${sessionId}`
        );
        const session = response.data;
        storeLoadSession(session);
      } catch (err) {
        const message =
          axios.isAxiosError(err)
            ? err.response?.data?.detail || err.message
            : 'Failed to load session';
        setError(message);
        console.error('Failed to load session:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [storeLoadSession]
  );

  const deleteSession = useCallback(
    async (sessionId: string) => {
      setIsLoading(true);
      setError(null);
      try {
        await axios.delete(`${BACKEND_URL}/sessions/${sessionId}`);
        await refreshSessions();
        if (useSessionStore.getState().sessionId === sessionId) {
          useSessionStore.getState().resetStream();
          useSessionStore.getState().setSessionId(null);
          useSessionStore.getState().setDataProfile(null);
          useSessionStore.getState().currentSession = null;
        }
        return true;
      } catch (err) {
        const message =
          axios.isAxiosError(err)
            ? err.response?.data?.detail || err.message
            : 'Failed to delete session';
        setError(message);
        console.error('Failed to delete session:', err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshSessions]
  );

  // Fetch sessions on mount
  useEffect(() => {
    refreshSessions();
  }, [refreshSessions]);

  return {
    sessions: sessionList,
    loadSession,
    deleteSession,
    refreshSessions,
    isLoading,
    error,
  };
}
