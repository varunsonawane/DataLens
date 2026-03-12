import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImagePlus, Wifi, WifiOff, Sparkles, Mic, MicOff, Bot, Paperclip, CornerDownLeft } from 'lucide-react';
import { clsx } from 'clsx';
import { useSessionStore } from '../../store/sessionStore';
import { useVoiceAgent } from '../../hooks/useVoiceAgent';
import { ChatBubbles } from './ChatBubbles';
import { ChatHistoryPanel } from './ChatHistoryPanel';
import { useSessions } from '../../hooks/useSessions';
import { ChatInput } from '../ui/chat-input';
import { Button } from '../ui/button';

interface AgentPanelProps {
  variant?: 'sidebar' | 'center';
}

export function AgentPanel({ variant = 'sidebar' }: AgentPanelProps) {
  const [inputText, setInputText] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showHistoryPanel, setShowHistoryPanel] = useState(true);

  const { sessionId, voiceOrbState, addConversationMessage, conversationHistory, setDashboardMode } =
    useSessionStore();
  const { loadSession } = useSessions();

  const {
    connect, disconnect,
    sendText,
    toggleMic,
    isConnected, isListening, isMicEnabled, isSpeaking,
    interimTranscript,
  } = useVoiceAgent();

  // Auto-connect when session becomes available
  useEffect(() => {
    if (sessionId) connect(sessionId);
    else disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const speechSupported =
    typeof window !== 'undefined' &&
    !!(window.SpeechRecognition || (window as any).webkitSpeechRecognition);

  // ── Send text ────────────────────────────────────────────────────────────
  const handleSendText = useCallback(async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    addConversationMessage({
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString(),
    });

    setIsResponding(true);

    if (isConnected) {
      sendText(trimmed);
    } else {
      setTimeout(() => {
        addConversationMessage({
          id: crypto.randomUUID(),
          role: 'agent',
          content: "I'm currently disconnected. Please wait while I reconnect, then try again.",
          timestamp: new Date().toISOString(),
        });
        setIsResponding(false);
      }, 1500);
    }
  }, [isConnected, sendText, addConversationMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendText(inputText); setInputText(''); }
  }, [inputText, handleSendText]);

  // ── Generate image ───────────────────────────────────────────────────────
  const handleGenerateImage = useCallback(() => {
    addConversationMessage({
      id: crypto.randomUUID(),
      role: 'user',
      content: 'Generate a visualization image for this data',
      timestamp: new Date().toISOString(),
    });
    if (isConnected) {
      sendText('Please generate a data visualization image for the current dataset.');
      setIsResponding(true);
    }
  }, [addConversationMessage, isConnected, sendText]);

  // Clear responding flag when agent replies
  const prevCount = useRef(conversationHistory.length);
  useEffect(() => {
    if (
      conversationHistory.length > prevCount.current &&
      conversationHistory[conversationHistory.length - 1]?.role === 'agent'
    ) setIsResponding(false);
    prevCount.current = conversationHistory.length;
  }, [conversationHistory]);

  // ── Drag & Drop ──────────────────────────────────────────────────────────
  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragOver(true); }, []);
  const handleDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragOver(false); }, []);
  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    try {
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const { session_id, filename } = JSON.parse(data);
        if (session_id && session_id !== sessionId) {
          if (sessionId === 'global_agent') {
            addConversationMessage({
              id: crypto.randomUUID(),
              role: 'user',
              content: `Please consider my past chat history from dataset: **${filename || 'Unknown'}** (Session ID: ${session_id}) in your reasoning.`,
              timestamp: new Date().toISOString()
            });
            if (isConnected) {
              setIsResponding(true);
              sendText(`Please consider my past chat history from dataset: **${filename || 'Unknown'}** (Session ID: ${session_id}) in your reasoning.`);
            }
          } else {
            await loadSession(session_id);
            setDashboardMode('session');
            addConversationMessage({
              id: crypto.randomUUID(),
              role: 'agent',
              content: `I've loaded your chat for **${filename || 'the dataset'}**. I'm reviewing the profile and stories now. What would you like to know?`,
              timestamp: new Date().toISOString(),
            });
          }
        }
      }
    } catch (err) { console.error('Failed to parse dropped session:', err); }
  }, [sessionId, loadSession, setDashboardMode, addConversationMessage, isConnected, sendText]);

  // ── Connection label ─────────────────────────────────────────────────────
  const connectionLabel = isConnected
    ? isListening ? 'Listening' : isSpeaking ? 'Speaking' : 'Connected'
    : sessionId ? 'Reconnecting…' : 'No session';

  const statusColor = isConnected
    ? isListening ? '#34d399'
    : isSpeaking  ? '#0ea5e9'
    : '#10b981'
    : 'rgba(255,255,255,0.25)';

  // Show history panel only on the global agent page
  const isGlobalAgent = sessionId === 'global_agent';

  return (
    <div
      className={clsx(
        "flex h-full bg-white dark:bg-[#0f172a]",
        variant === 'sidebar' ? "w-[300px] flex-shrink-0 border-l border-slate-200 dark:border-white/5" : "flex-1 w-full border-none",
      )}
    >
      {/* ── Main chat column */}
      <div
        className={clsx(
          "flex flex-col flex-1 min-w-0 relative transition-colors duration-300",
          isDragOver ? "bg-emerald-50 dark:bg-emerald-900/10" : "",
          variant === 'center' ? "rounded-t-2xl shadow-xl border border-slate-200 dark:border-white/5" : "",
        )}
        style={variant === 'center' ? { maxWidth: '1000px', margin: '0 auto', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' } : {}}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Drag overlay */}
        <AnimatePresence>
          {isDragOver && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 border-emerald-500/50 border-dashed m-2 rounded-2xl pointer-events-none"
            >
              <div className="flex flex-col items-center gap-3 text-emerald-500">
                <Bot size={40} className="animate-bounce" />
                <p className="font-semibold text-sm tracking-wide">Drop to load context</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Header ────────────────────────────────────────────────── */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-400 to-sky-500 shadow-sm">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold leading-none text-slate-800 dark:text-slate-200">AI Agent</p>
              <p className="text-[10px] mt-0.5 leading-none text-slate-500">Gemini Live</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{ opacity: isConnected ? 1 : [1, 0.3, 1] }}
              transition={isConnected ? {} : { duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: statusColor }}
            />
            {isConnected ? <Wifi size={11} style={{ color: statusColor }} /> : <WifiOff size={11} style={{ color: 'rgba(148,163,184,0.4)' }} />}
            <span className="text-[10px] font-medium text-slate-400">{connectionLabel}</span>
            <AnimatePresence>
              {isConnected && isListening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-emerald-400">Live</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── No-mic notice */}
        {!speechSupported && (
          <div className="flex-shrink-0 mx-3 mt-2 px-3 py-2 rounded-xl bg-amber-500/8 border border-amber-500/20">
            <p className="text-[10px] leading-relaxed text-amber-500">
              Voice input not supported — use Chrome/Edge.
            </p>
          </div>
        )}

        {/* ── Chat area */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          <ChatBubbles messages={conversationHistory} isResponding={isResponding} />
        </div>

        {/* ── Input area */}
        <div className="flex-shrink-0 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60">
          {/* Quick actions */}
          <div className="px-3 pt-2.5 flex gap-2">
            <button
              onClick={handleGenerateImage}
              disabled={!isConnected || !sessionId}
              className={clsx(
                'flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all border',
                isConnected && sessionId
                  ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 cursor-pointer'
                  : 'border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed'
              )}
            >
              <Sparkles size={10} /> Generate Chart <ImagePlus size={10} />
            </button>
            <button
              onClick={toggleMic}
              disabled={!sessionId}
              className={clsx(
                'px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all border flex items-center gap-1',
                isMicEnabled
                  ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700',
                !sessionId && 'opacity-40 cursor-not-allowed'
              )}
            >
              {isMicEnabled ? <Mic size={10} /> : <MicOff size={10} />}
              {isMicEnabled ? 'Mic on' : 'Mic off'}
            </button>
          </div>

          {/* Chat input */}
          <div className="p-3">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSendText(inputText); setInputText(''); }}
              className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-emerald-500/40 focus-within:ring-1 focus-within:ring-emerald-500/20 transition-all shadow-sm"
            >
              <ChatInput
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={sessionId ? 'Ask anything about your data…' : 'Upload a dataset first'}
                className="min-h-[52px] max-h-32 bg-transparent border-0 shadow-none focus-visible:ring-0 px-3 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none"
              />
              <div className="flex items-center px-2 pb-2 gap-1 justify-end">
                <Button
                  type="submit"
                  size="sm"
                  disabled={!inputText.trim() || !sessionId}
                  className={clsx(
                    'gap-1.5 text-xs h-8 rounded-lg',
                    inputText.trim() && sessionId
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-sm shadow-emerald-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  )}
                >
                  {isResponding ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-current rounded-sm animate-spin" style={{ animationDuration: '2s' }} />
                      Thinking…
                    </span>
                  ) : (
                    <>Send <CornerDownLeft size={11} /></>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Chat History Panel (right side, only for global agent) ──── */}
      {isGlobalAgent && showHistoryPanel && (
        <ChatHistoryPanel
          onDragSession={(sessionId, filename) => {
            // Visual feedback handled inside the panel
          }}
        />
      )}
    </div>
  );
}
