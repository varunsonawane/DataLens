import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSessionStore } from '../store/sessionStore';
import { useAuthStore, getAuthHeader } from '../store/authStore';
import type { Session, SessionListItem } from '../types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

function authHeaders(): Record<string, string> {
  const header = getAuthHeader();
  return header ? { Authorization: header } : {};
}

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
  // Re-fetch sessions when auth state changes (login/logout/guest)
  const authKey = useAuthStore((s) => s.appToken ?? s.guestId ?? 'none');

  const refreshSessions = useCallback(async (type: 'all' | 'data' | 'agent' = 'all') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get<SessionListItem[]>(`${BACKEND_URL}/sessions?type=${type}`, {
        headers: authHeaders(),
      });
      setSessionList(response.data);
    } catch (err) {
      const message = axios.isAxiosError(err)
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
        const response = await axios.get<Session>(`${BACKEND_URL}/sessions/${sessionId}`, {
          headers: authHeaders(),
        });
        storeLoadSession(response.data);
      } catch (err) {
        const message = axios.isAxiosError(err)
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
        await axios.delete(`${BACKEND_URL}/sessions/${sessionId}`, {
          headers: authHeaders(),
        });
        await refreshSessions();
        const store = useSessionStore.getState();
        if (store.sessionId === sessionId) {
          store.resetStream();
          store.setSessionId(null);
          store.setDataProfile(null);
          store.currentSession = null;
        }
        return true;
      } catch (err) {
        const message = axios.isAxiosError(err)
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

  // Refresh when component mounts or auth state changes
  useEffect(() => {
    // Only refresh 'data' sessions by default for the global store/sidebar
    refreshSessions('data');
  }, [refreshSessions, authKey]);

  return { sessions: sessionList, loadSession, deleteSession, refreshSessions, isLoading, error };
}
