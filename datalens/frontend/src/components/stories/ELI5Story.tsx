import React, { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSessionStore } from '../../store/sessionStore';
import { BookOpen, ZoomIn } from 'lucide-react';
import { Lightbox } from '../gallery/ImageGallery';
import type { ImageRecord } from '../../types';

// ── Text parser ───────────────────────────────────────────────────────────────
function parseELI5(text: string): string[] {
  return text.split('\n');
}

// ── Inline bold renderer ──────────────────────────────────────────────────────
function renderInlineBold(content: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(content)) !== null) {
    if (m.index > last) {
      parts.push(<span key={i++}>{content.slice(last, m.index)}</span>);
    }
    parts.push(
      <strong key={i++} className="text-emerald-400 font-bold">
        {m[1]}
      </strong>
    );
    last = m.index + m[0].length;
  }
  if (last < content.length) {
    parts.push(<span key={i++}>{content.slice(last)}</span>);
  }
  return parts.length ? parts : content;
}

// ── Line renderer ─────────────────────────────────────────────────────────────
function renderLine(line: string, idx: number): React.ReactNode {
  if (!line.trim()) return <div key={idx} className="h-3" />;

  const isHeading = line.startsWith('# ') || line.startsWith('## ');
  const content = isHeading ? line.replace(/^#{1,2}\s+/, '') : line;
  const rendered = renderInlineBold(content);

  if (isHeading) {
    return (
      <motion.h3
        key={idx}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-lg font-extrabold mt-6 mb-2 text-emerald-400"
      >
        {rendered}
      </motion.h3>
    );
  }

  return (
    <motion.p
      key={idx}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(idx * 0.01, 0.3) }}
      className="mb-3 leading-relaxed text-base text-slate-700 dark:text-slate-300 transition-colors"
    >
      {rendered}
    </motion.p>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function ELI5Story() {
  const { streamProgress, isStreaming, pendingImages, resolvedImages } = useSessionStore();
  const text = streamProgress.eli5.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g, '');

  const lines = useMemo(() => parseELI5(text), [text]);

  const pendingELI5 = useMemo(
    () =>
      Array.from(pendingImages.entries()).filter(
        ([, v]) => !v.format || v.format === 'eli5',
      ),
    [pendingImages],
  );

  const resolvedELI5 = useMemo(
    () => resolvedImages.filter((img) => !img.format || img.format === 'eli5'),
    [resolvedImages],
  );

  const [lightboxImg, setLightboxImg] = useState<ImageRecord | null>(null);
  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  if (!text && !isStreaming && pendingELI5.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-500/10 border border-emerald-500/20"
        >
          <BookOpen size={22} className="text-emerald-400" />
        </div>
        <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors">
          ELI5 story will appear here
        </p>
        <p className="text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors">
          Simple analogies and fun characters
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-5 story-content">
      {/* Accent bar */}
      <div className="flex gap-1.5 mb-8">
        {(['#10b981', '#34d399', '#6ee7b7'] as const).map((c, i) => (
          <div
            key={i}
            className="h-1 rounded-full"
            style={{ width: i === 0 ? 48 : i === 1 ? 28 : 16, background: c }}
          />
        ))}
      </div>

      {/* Resolved ELI5 images */}
      <AnimatePresence>
        {resolvedELI5.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
          >
            {resolvedELI5.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl overflow-hidden aspect-video relative group border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.url} alt={img.prompt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4">
                  <ZoomIn size={22} className="text-white drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImg && <Lightbox image={lightboxImg} onClose={closeLightbox} />}
      </AnimatePresence>

      {/* Story text */}
      <div className="text-base leading-relaxed">
        {lines.map((line, idx) => renderLine(line, idx))}
      </div>

      {/* Pending image shimmer cards */}
      {pendingELI5.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          {pendingELI5.map(([id, p]) => (
            <div
              key={id}
              className="shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors"
            >
              <div className="text-2xl mb-2">🎨</div>
              <p
                className="text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors"
              >
                {p.prompt}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Streaming cursor */}
      {isStreaming && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-1 h-5 ml-1 align-middle rounded-full bg-emerald-400"
        />
      )}
    </div>
  );
}
