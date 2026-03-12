import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, UserRound } from 'lucide-react';
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from '@/components/ui/chat-bubble';
import { ChatMessageList } from '@/components/ui/chat-message-list';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ConversationMessage } from '../../types';

interface ChatBubblesProps {
  messages: ConversationMessage[];
  isResponding: boolean;
}

// ── Image Lightbox ───────────────────────────────────────────────────────────
function ImageLightbox({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-3">
          <span className="text-white/60 text-xs">Generated Visualization</span>
          <div className="flex items-center gap-2">
            <a
              href={url} download target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs border border-white/10 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <Download size={12} /> Download
            </a>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-red-500/30 text-white text-xs border border-white/10 transition-colors"
            >
              <X size={12} /> Close
            </button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
          <img src={url} alt="Generated visualization" className="w-full h-auto max-h-[80vh] object-contain bg-slate-900" />
        </div>
        <p className="mt-3 text-white/30 text-[11px]">Press ESC or click outside to close</p>
      </motion.div>
    </motion.div>
  );
}

// ── Markdown renderer ────────────────────────────────────────────────────────
function RenderMarkdown({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, li) => {
        if (!line.trim()) return <div key={li} className="h-1" />;
        const parts: React.ReactNode[] = [];
        let remaining = line;
        let key = 0;
        const patterns = [
          { re: /```([^`]+)```|`([^`]+)`/, render: (_: string, g1: string, g2: string) => <code key={key++} className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[11px] font-mono">{g1 || g2}</code> },
          { re: /\*\*([^*]+)\*\*/, render: (_: string, g1: string) => <strong key={key++} className="font-semibold">{g1}</strong> },
          { re: /\*([^*]+)\*/, render: (_: string, g1: string) => <em key={key++} className="italic">{g1}</em> },
          { re: /\[([^\]]+)\]\(([^)]+)\)/, render: (_: string, label: string, url: string) => <a key={key++} href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 opacity-80 hover:opacity-100">{label}</a> },
        ];
        while (remaining.length > 0) {
          let earliest = remaining.length;
          let matchedPattern: typeof patterns[0] | null = null;
          let matched: RegExpMatchArray | null = null;
          for (const p of patterns) {
            const m = remaining.match(p.re);
            if (m && m.index !== undefined && m.index < earliest) { earliest = m.index; matchedPattern = p; matched = m; }
          }
          if (matchedPattern && matched && matched.index !== undefined) {
            if (matched.index > 0) parts.push(<span key={key++}>{remaining.slice(0, matched.index)}</span>);
            parts.push(matchedPattern.render(matched[0], matched[1], matched[2]));
            remaining = remaining.slice(matched.index + matched[0].length);
          } else { parts.push(<span key={key++}>{remaining}</span>); break; }
        }
        const isBullet = /^[-*•]\s/.test(line.trim());
        const isNumbered = /^\d+\.\s/.test(line.trim());
        if (isBullet || isNumbered) return (
          <div key={li} className="flex gap-2 items-start">
            <span className="opacity-60 mt-0.5 flex-shrink-0 text-[11px]">{isBullet ? '•' : line.trim().match(/^(\d+\.)/)?.[1]}</span>
            <span>{parts}</span>
          </div>
        );
        return <div key={li}>{parts}</div>;
      })}
    </div>
  );
}

// ── AgentMessageContent ──────────────────────────────────────────────────────
function AgentMessageContent({ message }: { message: ConversationMessage }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <RenderMarkdown text={message.content} />
      {message.imageUrl && (
        <div
          className="mt-2.5 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 relative group/img cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={message.imageUrl}
            alt="Generated visual"
            className="w-full object-cover hover:opacity-90 transition-opacity"
            style={{ maxHeight: '200px' }}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/25 rounded-xl">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 text-white text-xs border border-white/10">
              <ZoomIn size={12} /> View full size
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {lightboxOpen && message.imageUrl && (
          <ImageLightbox url={message.imageUrl} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Empty state ──────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-8">
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-emerald-500/20 shadow-sm">
          <span className="text-2xl">✦</span>
        </div>
        <div className="absolute inset-0 rounded-2xl animate-ping opacity-10 bg-emerald-400" />
      </div>
      <p className="text-sm font-semibold mb-1 text-slate-800 dark:text-slate-200">Ask me anything</p>
      <p className="text-xs leading-relaxed text-slate-400 max-w-[200px]">
        I can explain your data, generate charts, or create visualizations.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-5 justify-center">
        {['Explain the trends', 'Key outliers?', 'Summarize data'].map(s => (
          <span key={s} className="px-2.5 py-1 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800/60 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export function ChatBubbles({ messages, isResponding }: ChatBubblesProps) {
  if (messages.length === 0 && !isResponding) return <EmptyState />;

  return (
    <ChatMessageList smooth className="h-full">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} variant={msg.role === 'user' ? 'sent' : 'received'}>
          {msg.role === 'agent' && (
            <ChatBubbleAvatar fallback="AI" />
          )}
          <ChatBubbleMessage variant={msg.role === 'user' ? 'sent' : 'received'}>
            {msg.role === 'user' ? msg.content : <AgentMessageContent message={msg} />}
          </ChatBubbleMessage>
          {msg.role === 'user' && (
            <Avatar className="h-8 w-8 shrink-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <AvatarFallback className="bg-slate-200 dark:bg-slate-700">
                <UserRound size={16} className="text-slate-600 dark:text-slate-300" />
              </AvatarFallback>
            </Avatar>
          )}
        </ChatBubble>
      ))}
      {isResponding && (
        <ChatBubble variant="received">
          <ChatBubbleAvatar fallback="AI" />
          <ChatBubbleMessage variant="received" isLoading />
        </ChatBubble>
      )}
    </ChatMessageList>
  );
}
