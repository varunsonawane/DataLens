import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MessageSquare, ChevronDown, ChevronRight, GripVertical, RefreshCw, X } from 'lucide-react';
import axios from 'axios';
import type { ConversationMessage, SessionListItem } from '../../types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

interface ChatSession {
  session_id: string;
  filename: string;
  created_at: string;
  preview_text: string;
  conversation_history: ConversationMessage[];
}

interface ChatHistoryPanelProps {
  onDragSession: (sessionId: string, filename: string) => void;
  className?: string;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch { return ''; }
}

// ── Single session card ──────────────────────────────────────────────────────
function SessionCard({
  session,
  onDrag,
}: {
  session: SessionListItem;
  onDrag: (sessionId: string, filename: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMessages = useCallback(async () => {
    if (messages.length > 0) return;
    setLoading(true);
    try {
      const resp = await axios.get<{ conversation_history: ConversationMessage[] }>(
        `${BACKEND_URL}/sessions/${session.session_id}`
      );
      setMessages(resp.data.conversation_history || []);
    } catch {
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, [session.session_id, messages.length]);

  const handleToggle = () => {
    setExpanded(e => !e);
    if (!expanded) loadMessages();
  };

  return (
    <div
      className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 overflow-hidden group"
      draggable
      onDragStart={e => {
        e.dataTransfer.setData('application/json', JSON.stringify({ session_id: session.session_id, filename: session.filename }));
        onDrag(session.session_id, session.filename);
      }}
    >
      {/* Header row */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors select-none"
        onClick={handleToggle}
      >
        <GripVertical size={13} className="text-slate-300 dark:text-slate-600 flex-shrink-0 group-hover:text-slate-500 cursor-grab active:cursor-grabbing" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{session.filename}</p>
          <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
            <Clock size={8} />
            {formatDate(session.created_at)}
          </p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium">
            {session.image_count} imgs
          </span>
          {expanded ? <ChevronDown size={12} className="text-slate-400" /> : <ChevronRight size={12} className="text-slate-400" />}
        </div>
      </div>

      {/* Expanded message preview */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-100 dark:border-slate-700/50"
          >
            <div className="px-3 py-2 max-h-48 overflow-y-auto space-y-2">
              {loading ? (
                <div className="flex items-center gap-2 py-2">
                  <RefreshCw size={11} className="animate-spin text-slate-400" />
                  <span className="text-[10px] text-slate-400">Loading…</span>
                </div>
              ) : messages.length === 0 ? (
                <p className="text-[10px] text-slate-400 py-2">No conversation history yet.</p>
              ) : (
                messages.slice(-6).map((msg, i) => (
                  <div key={i} className={`flex gap-1.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`rounded-lg px-2.5 py-1.5 text-[10px] leading-snug max-w-[80%] ${
                      msg.role === 'user'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300'
                    }`}>
                      {msg.content.slice(0, 120)}{msg.content.length > 120 ? '…' : ''}
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* Drag hint */}
            <div className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700/50">
              <p className="text-[9px] text-slate-400 text-center">
                ↕ Drag this card into the chat to give the AI access to this data
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main ChatHistoryPanel ────────────────────────────────────────────────────
export function ChatHistoryPanel({ onDragSession, className }: ChatHistoryPanelProps) {
  const [sessions, setSessions] = useState<SessionListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeDrag, setActiveDrag] = useState<string | null>(null);

  const loadSessions = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await axios.get<SessionListItem[]>(`${BACKEND_URL}/sessions`);
      setSessions(resp.data || []);
    } catch {
      setSessions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadSessions(); }, [loadSessions]);

  return (
    <div className={`flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 border-l border-slate-200 dark:border-slate-700/50 ${className}`}
      style={{ width: 220, minWidth: 200, maxWidth: 260 }}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/60">
        <div className="flex items-center gap-2">
          <MessageSquare size={13} className="text-emerald-500" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Past Chats</span>
        </div>
        <button
          onClick={loadSessions}
          disabled={loading}
          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Refresh"
        >
          <RefreshCw size={11} className={`text-slate-400 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Hint banner */}
      <div className="px-3 py-2 bg-emerald-50 dark:bg-emerald-500/5 border-b border-emerald-100 dark:border-emerald-500/10">
        <p className="text-[9px] text-emerald-600 dark:text-emerald-400 leading-relaxed">
          💡 Drag any session into the AI chat to give the agent context from that dataset
        </p>
      </div>

      {/* Sessions list */}
      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2">
        {loading && sessions.length === 0 ? (
          <div className="flex items-center gap-2 py-4 justify-center">
            <RefreshCw size={13} className="animate-spin text-slate-400" />
            <span className="text-[11px] text-slate-400">Loading…</span>
          </div>
        ) : sessions.length === 0 ? (
          <div className="text-center py-8 px-3">
            <MessageSquare size={24} className="text-slate-300 dark:text-slate-600 mx-auto mb-2" />
            <p className="text-[11px] text-slate-400">No sessions yet</p>
          </div>
        ) : (
          sessions.map(s => (
            <SessionCard
              key={s.session_id}
              session={s}
              onDrag={(sid, fname) => {
                setActiveDrag(sid);
                onDragSession(sid, fname);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
