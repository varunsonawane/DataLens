import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const BACKEND = import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:8080';

export interface AuthUser {
  user_id: string;
  email: string;
  name: string;
  picture: string;
  auth_method: 'google' | 'password' | 'guest';
  session_ids: string[];
  created_at: string;
  updated_at: string;
}

interface AuthState {
  user: AuthUser | null;
  isGuest: boolean;
  guestId: string | null;
  appToken: string | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  loginWithGoogle: (credential: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, name: string, password: string) => Promise<void>;
  continueAsGuest: () => void;
  signOut: () => Promise<void>;
  updateProfile: (updates: { name?: string; picture?: string }) => Promise<void>;
  deleteAccount: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

function generateGuestId(): string {
  return 'guest_' + crypto.randomUUID();
}

async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  return fetch(`${BACKEND}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
}

async function claimUnclaimedSessions(token: string): Promise<void> {
  try {
    await fetch(`${BACKEND}/sessions/claim-unclaimed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    });
  } catch {
    // Non-critical — ignore errors
  }
}

/** Returns the Authorization header value for the current auth state. */
export function getAuthHeader(): string | undefined {
  const { appToken, isGuest, guestId } = useAuthStore.getState();
  if (appToken) return `Bearer ${appToken}`;
  if (isGuest && guestId) return `Guest ${guestId}`;
  return undefined;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isGuest: false,
      guestId: null,
      appToken: null,
      isLoading: false,
      error: null,

      loginWithGoogle: async (credential: string) => {
        set({ isLoading: true, error: null });
        try {
          const res = await apiFetch('/auth/google', {
            method: 'POST',
            body: JSON.stringify({ credential }),
          });
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.detail ?? 'Google sign-in failed.');
          }
          const { user, app_token } = await res.json();
          set({ user, appToken: app_token, isGuest: false, guestId: null, isLoading: false });
          await claimUnclaimedSessions(app_token);
        } catch (e: any) {
          set({ error: e.message, isLoading: false });
          throw e;
        }
      },

      loginWithEmail: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const res = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
          });
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.detail ?? 'Login failed.');
          }
          const { user, app_token } = await res.json();
          set({ user, appToken: app_token, isGuest: false, guestId: null, isLoading: false });
          await claimUnclaimedSessions(app_token);
        } catch (e: any) {
          set({ error: e.message, isLoading: false });
          throw e;
        }
      },

      registerWithEmail: async (email: string, name: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const res = await apiFetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, name, password }),
          });
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.detail ?? 'Registration failed.');
          }
          const { user, app_token } = await res.json();
          set({ user, appToken: app_token, isGuest: false, guestId: null, isLoading: false });
        } catch (e: any) {
          set({ error: e.message, isLoading: false });
          throw e;
        }
      },

      continueAsGuest: () => {
        set({ user: null, isGuest: true, guestId: generateGuestId(), appToken: null, error: null });
      },

      signOut: async () => {
        const { appToken } = get();
        if (appToken) {
          try {
            await apiFetch('/auth/logout', {
              method: 'POST',
              headers: { Authorization: `Bearer ${appToken}` },
            });
          } catch {
            // Ignore logout errors
          }
        }
        set({ user: null, isGuest: false, guestId: null, appToken: null, error: null });
      },

      updateProfile: async (updates: { name?: string; picture?: string }) => {
        const { appToken } = get();
        if (!appToken) throw new Error('Not authenticated.');
        const res = await apiFetch('/users/me', {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${appToken}` },
          body: JSON.stringify(updates),
        });
        if (!res.ok) throw new Error('Profile update failed.');
        const user = await res.json();
        set({ user });
      },

      deleteAccount: async () => {
        const { appToken } = get();
        if (!appToken) throw new Error('Not authenticated.');
        const res = await apiFetch('/users/me', {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${appToken}` },
        });
        if (!res.ok) throw new Error('Account deletion failed.');
        set({ user: null, isGuest: false, guestId: null, appToken: null });
      },

      refreshUser: async () => {
        const { appToken } = get();
        if (!appToken) return;
        try {
          const res = await apiFetch('/auth/me', {
            headers: { Authorization: `Bearer ${appToken}` },
          });
          if (res.ok) {
            const user = await res.json();
            set({ user });
          } else {
            // Token expired
            set({ user: null, appToken: null });
          }
        } catch {
          // Network error — keep existing state
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'datalens-auth',
      partialize: (state) => ({
        user: state.user,
        isGuest: state.isGuest,
        guestId: state.guestId,
        appToken: state.appToken,
      }),
    }
  )
);
