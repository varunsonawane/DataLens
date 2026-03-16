import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, User, Mail, Calendar, LogOut, Trash2, Edit2, Check, Loader2,
  FileText, Clock, Shield, Layers, Image, Sparkles, ChevronRight,
  UserCircle2,
} from 'lucide-react';
import { useAuthStore, AuthUser } from '../../store/authStore';
import { cn } from '../../lib/utils';

interface UserProfilePanelProps {
  open: boolean;
  onClose: () => void;
}

const BACKEND = import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:8080';

/* ─── initials avatar ─── */
const AVATAR_GRADIENTS = [
  'from-violet-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-cyan-500 to-sky-600',
  'from-fuchsia-500 to-purple-600',
  'from-lime-500 to-green-600',
  'from-red-500 to-rose-600',
];

function nameHash(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

function InitialsAvatar({
  name,
  size = 'w-20 h-20',
  textSize = 'text-2xl',
  ringClass,
}: {
  name: string;
  size?: string;
  textSize?: string;
  ringClass?: string;
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
  const gradient = AVATAR_GRADIENTS[nameHash(name) % AVATAR_GRADIENTS.length];
  return (
    <div
      className={cn(
        'relative rounded-full flex items-center justify-center select-none',
        `bg-gradient-to-br ${gradient}`,
        size,
        ringClass && `ring-2 ring-offset-2 ring-offset-slate-900 ${ringClass}`,
      )}
    >
      <span className={cn('font-bold text-white tracking-tight leading-none', textSize)}>
        {initials || '?'}
      </span>
    </div>
  );
}

/* ─── tiny helpers ─── */
const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  } catch {
    return iso;
  }
};

const formatShortDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: 'short', year: 'numeric',
    });
  } catch {
    return iso;
  }
};

/* ─── spring config ─── */
const SPRING = { type: 'spring', stiffness: 340, damping: 34 } as const;

/* ─── auth method config ─── */
interface BadgeDef {
  label: string;
  ringClass: string;
  pillClass: string;
  icon: React.ReactNode;
}

function getAuthBadge(method: string): BadgeDef {
  const map: Record<string, BadgeDef> = {
    google: {
      label: 'Google',
      ringClass: 'ring-blue-400/60',
      pillClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      icon: <Shield size={10} />,
    },
    password: {
      label: 'Email / Password',
      ringClass: 'ring-violet-400/60',
      pillClass: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
      icon: <Shield size={10} />,
    },
    guest: {
      label: 'Guest',
      ringClass: 'ring-slate-500/40',
      pillClass: 'bg-slate-700/60 text-slate-400 border border-slate-600/30',
      icon: <UserCircle2 size={10} />,
    },
  };
  return map[method] ?? map.guest;
}

/* ════════════════════════════════════════════════
   Main component
   ════════════════════════════════════════════════ */
export function UserProfilePanel({ open, onClose }: UserProfilePanelProps) {
  const { user, isGuest, guestId, appToken, signOut, updateProfile, deleteAccount } = useAuthStore();

  const [sessions, setSessions] = useState<any[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(false);

  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name ?? '');
  const [savingName, setSavingName] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  /* load sessions when panel opens */
  useEffect(() => {
    if (!open || !appToken) return;
    setSessionsLoading(true);
    fetch(`${BACKEND}/users/me/sessions`, {
      headers: { Authorization: `Bearer ${appToken}` },
    })
      .then((r) => r.json())
      .then((data) => setSessions(Array.isArray(data) ? data : []))
      .catch(() => setSessions([]))
      .finally(() => setSessionsLoading(false));
  }, [open, appToken]);

  const handleSaveName = async () => {
    if (!nameInput.trim() || nameInput === user?.name) { setEditingName(false); return; }
    setSavingName(true);
    try {
      await updateProfile({ name: nameInput.trim() });
    } finally {
      setSavingName(false);
      setEditingName(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      await deleteAccount();
      onClose();
    } finally {
      setDeleting(false);
      setConfirmDelete(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-black/30 dark:bg-black/50 backdrop-blur-[2px]"
          />

          {/* ── Slide-in panel ── */}
          <motion.div
            ref={panelRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={SPRING}
            className={cn(
              'fixed right-0 top-16 bottom-0 z-50 w-[340px] flex flex-col',
              'bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl',
              'border-l border-slate-200/60 dark:border-slate-800/60',
              'shadow-[−8px_0_48px_rgba(0,0,0,0.18)]',
              'overflow-hidden',
            )}
          >
            {user && !isGuest ? (
              <AuthenticatedView
                user={user}
                sessions={sessions}
                sessionsLoading={sessionsLoading}
                editingName={editingName}
                nameInput={nameInput}
                savingName={savingName}
                confirmDelete={confirmDelete}
                deleting={deleting}
                setEditingName={setEditingName}
                setNameInput={setNameInput}
                setConfirmDelete={setConfirmDelete}
                onSaveName={handleSaveName}
                onSignOut={handleSignOut}
                onDeleteAccount={handleDeleteAccount}
                onClose={onClose}
              />
            ) : (
              <GuestView guestId={guestId} onSignIn={handleSignOut} onClose={onClose} />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════════════
   Authenticated view
   ════════════════════════════════════════════════ */
interface AuthenticatedViewProps {
  user: AuthUser;
  sessions: any[];
  sessionsLoading: boolean;
  editingName: boolean;
  nameInput: string;
  savingName: boolean;
  confirmDelete: boolean;
  deleting: boolean;
  setEditingName: (v: boolean) => void;
  setNameInput: (v: string) => void;
  setConfirmDelete: (v: boolean) => void;
  onSaveName: () => void;
  onSignOut: () => void;
  onDeleteAccount: () => void;
  onClose: () => void;
}

function AuthenticatedView({
  user, sessions, sessionsLoading,
  editingName, nameInput, savingName,
  confirmDelete, deleting,
  setEditingName, setNameInput, setConfirmDelete,
  onSaveName, onSignOut, onDeleteAccount, onClose,
}: AuthenticatedViewProps) {
  const badge = getAuthBadge(user.auth_method);

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* ── Gradient header ── */}
      <div className="relative flex-shrink-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Decorative emerald glow blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-12 right-0 w-32 h-32 rounded-full bg-emerald-400/5 blur-2xl"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            'absolute top-3.5 right-3.5 z-10',
            'w-7 h-7 flex items-center justify-center rounded-full',
            'bg-white/10 hover:bg-white/20 text-white/60 hover:text-white/90',
            'backdrop-blur-sm border border-white/10',
            'transition-all duration-150',
          )}
        >
          <X size={14} />
        </button>

        {/* Avatar + identity */}
        <div className="relative z-0 flex flex-col items-center gap-3 px-6 pt-10 pb-7">
          {/* Avatar with emerald glow ring */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-md scale-110" />
            {user.picture ? (
              <img
                src={user.picture}
                alt={user.name}
                referrerPolicy="no-referrer"
                className={cn(
                  'relative w-20 h-20 rounded-full object-cover',
                  'ring-2 ring-offset-2 ring-offset-slate-900',
                  badge.ringClass,
                )}
              />
            ) : (
              <InitialsAvatar name={user.name || user.email} ringClass={badge.ringClass} />
            )}

            {/* Online indicator dot */}
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-slate-900 shadow-emerald-500/60 shadow-sm" />
          </div>

          {/* Name (editable) */}
          {editingName ? (
            <div className="flex items-center gap-2 w-full max-w-[220px]">
              <input
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSaveName();
                  if (e.key === 'Escape') setEditingName(false);
                }}
                className={cn(
                  'flex-1 text-center text-lg font-bold bg-transparent',
                  'border-b border-emerald-500 outline-none',
                  'text-white placeholder:text-white/30',
                )}
              />
              {savingName ? (
                <Loader2 size={15} className="animate-spin text-emerald-400 flex-shrink-0" />
              ) : (
                <button
                  onClick={onSaveName}
                  className="flex-shrink-0 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Check size={15} />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white tracking-tight leading-tight">
                {user.name}
              </h2>
              {user.auth_method !== 'google' && (
                <button
                  onClick={() => { setNameInput(user.name); setEditingName(true); }}
                  className="text-white/30 hover:text-white/70 transition-colors"
                  title="Edit name"
                >
                  <Edit2 size={13} />
                </button>
              )}
            </div>
          )}

          {/* Auth method pill */}
          <span className={cn(
            'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold',
            badge.pillClass,
          )}>
            {badge.icon}
            {badge.label}
          </span>
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">

        {/* ── Stat chips row ── */}
        <div className="px-4 pt-4 pb-3">
          <div className="grid grid-cols-3 gap-2">
            <StatChip
              icon={<Layers size={13} className="text-emerald-500" />}
              value={String(user.session_ids?.length ?? 0)}
              label="Sessions"
            />
            <StatChip
              icon={<Calendar size={13} className="text-slate-400" />}
              value={formatShortDate(user.created_at)}
              label="Joined"
            />
            <StatChip
              icon={<Shield size={13} className="text-violet-400" />}
              value={user.auth_method === 'google' ? 'OAuth' : 'Email'}
              label="Auth"
            />
          </div>
        </div>

        {/* ── Email row ── */}
        <div className="mx-4 mb-4 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-2.5">
            <Mail size={13} className="text-slate-400 flex-shrink-0" />
            <span className="text-[11px] text-slate-400 w-10 flex-shrink-0">Email</span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 truncate">
              {user.email}
            </span>
          </div>
        </div>

      </div>

      {/* ── Actions footer ── */}
      <div className="flex-shrink-0 border-t border-slate-100 dark:border-slate-800/60 px-4 py-4 flex flex-col gap-2">
        {/* Sign out */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSignOut}
          className={cn(
            'flex items-center justify-center gap-2.5 w-full px-4 py-2.5 rounded-xl',
            'text-sm font-medium text-slate-600 dark:text-slate-300',
            'bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-800',
            'border border-slate-200 dark:border-slate-700/50',
            'transition-colors duration-150',
          )}
        >
          <LogOut size={14} />
          Sign Out
        </motion.button>

        {/* Delete account */}
        <AnimatePresence mode="wait">
          {!confirmDelete ? (
            <motion.button
              key="delete-trigger"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setConfirmDelete(true)}
              className={cn(
                'flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl',
                'text-xs font-medium text-red-400 dark:text-red-500',
                'hover:bg-red-50 dark:hover:bg-red-500/10',
                'transition-colors duration-150',
              )}
            >
              <Trash2 size={13} />
              Delete Account
            </motion.button>
          ) : (
            <motion.div
              key="delete-confirm"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 p-3 flex flex-col gap-2.5"
            >
              <p className="text-xs text-red-600 dark:text-red-400 font-medium leading-relaxed">
                This will permanently delete your account and all your data. This cannot be undone.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmDelete(false)}
                  className={cn(
                    'flex-1 py-1.5 text-xs rounded-lg',
                    'border border-slate-200 dark:border-slate-700',
                    'text-slate-500 dark:text-slate-400',
                    'hover:bg-slate-50 dark:hover:bg-slate-800',
                    'transition-colors',
                  )}
                >
                  Cancel
                </button>
                <button
                  onClick={onDeleteAccount}
                  disabled={deleting}
                  className={cn(
                    'flex-1 py-1.5 text-xs rounded-lg font-semibold',
                    'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
                    'text-white shadow-sm shadow-red-500/30',
                    'disabled:opacity-60 disabled:cursor-not-allowed',
                    'flex items-center justify-center gap-1.5 transition-all',
                  )}
                >
                  {deleting ? <Loader2 size={12} className="animate-spin" /> : null}
                  {deleting ? 'Deleting…' : 'Yes, Delete'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Guest view
   ════════════════════════════════════════════════ */
function GuestView({
  guestId,
  onSignIn,
  onClose,
}: {
  guestId: string | null;
  onSignIn: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/60 flex-shrink-0">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Profile</span>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
        {/* large icon with glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/15 blur-2xl scale-150" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700/60 shadow-inner">
            <UserCircle2 size={44} className="text-slate-400 dark:text-slate-500" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-slate-800 dark:text-white">
            Browsing as Guest
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Your sessions aren't saved between visits. Sign in to keep your work, access history, and unlock all features.
          </p>
          {guestId && (
            <p className="mt-1 text-[10px] font-mono text-slate-300 dark:text-slate-700 truncate">
              {guestId}
            </p>
          )}
        </div>

        {/* Feature list */}
        <div className="w-full flex flex-col gap-1.5 text-left">
          {[
            { icon: <Layers size={12} />, text: 'Saved session history' },
            { icon: <Image size={12} />, text: 'Persistent AI-generated images' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                {icon}
              </span>
              {text}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onSignIn}
          className={cn(
            'flex items-center gap-2 px-6 py-2.5 rounded-full w-full justify-center',
            'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500',
            'text-white text-sm font-semibold',
            'shadow-lg shadow-emerald-500/25',
            'transition-all duration-150',
          )}
        >
          <LogOut size={14} />
          Sign In to Save Your Work
        </motion.button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   Sub-components
   ════════════════════════════════════════════════ */

function StatChip({
  icon, value, label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className={cn(
      'flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl',
      'bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/60',
    )}>
      <span className="flex items-center gap-1">{icon}</span>
      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 leading-none truncate max-w-full">
        {value}
      </span>
      <span className="text-[9px] text-slate-400 dark:text-slate-600 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function SessionRow({ session }: { session: any }) {
  const imageCount: number = session.image_count ?? 0;

  return (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={cn(
        'group flex items-start gap-3 px-3 py-2.5 rounded-xl cursor-default',
        'border border-transparent hover:border-emerald-500/20',
        'hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30',
        'transition-colors duration-100',
        'relative overflow-hidden',
      )}
    >
      {/* left accent bar on hover */}
      <span className={cn(
        'absolute left-0 top-2 bottom-2 w-[3px] rounded-full',
        'bg-emerald-500 scale-y-0 group-hover:scale-y-100',
        'transition-transform duration-150 origin-center',
      )} />

      {/* file icon */}
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mt-0.5 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
        <FileText size={13} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
      </div>

      {/* text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate leading-snug">
          {session.filename ?? 'Untitled Dataset'}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="flex items-center gap-1 text-[10px] text-slate-400">
            <Clock size={9} />
            {formatDate(session.created_at)}
          </span>
          {imageCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-emerald-500/80">
              <Image size={9} />
              {imageCount}
            </span>
          )}
        </div>
      </div>

      <ChevronRight size={12} className="flex-shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-emerald-400 mt-1 transition-colors" />
    </motion.div>
  );
}

function EmptySessionsState() {
  return (
    <div className="flex flex-col items-center gap-2 py-6 text-center">
      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center">
        <Sparkles size={16} className="text-slate-300 dark:text-slate-600" />
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed max-w-[200px]">
        No sessions yet. Upload a dataset to start building stories.
      </p>
    </div>
  );
}
