import React, { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSessionStore } from '../../store/sessionStore';
import { Code2, ZoomIn } from 'lucide-react';
import { Lightbox } from '../gallery/ImageGallery';
import type { ImageRecord } from '../../types';

// ── Segment types ─────────────────────────────────────────────────────────────
type SegType = 'heading' | 'code' | 'schema' | 'text' | 'blank';

interface Seg {
  type: SegType;
  content: string;
  lang?: string;
}

// ── Parser ────────────────────────────────────────────────────────────────────
function parseArch(text: string): Seg[] {
  const segs: Seg[] = [];
  const lines = text.split('\n');
  let i = 0;
  let buf: string[] = [];

  const flush = () => {
    const s = buf.join('\n').trim();
    if (s) segs.push({ type: 'text', content: s });
    buf = [];
  };

  while (i < lines.length) {
    const l = lines[i];

    if (l.startsWith('```')) {
      flush();
      const lang = l.slice(3).trim() || 'text';
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i]);
        i++;
      }
      segs.push({ type: 'code', content: code.join('\n'), lang });
      i++;
      continue;
    }

    if (l.startsWith('#')) {
      flush();
      segs.push({ type: 'heading', content: l.replace(/^#{1,3}\s+/, '') });
      i++;
      continue;
    }

    if ((l.includes('|') && l.includes('\u2192')) || l.match(/^\s*\w+\s*::\s*/)) {
      flush();
      segs.push({ type: 'schema', content: l });
      i++;
      continue;
    }

    if (!l.trim()) {
      buf.push('');
      i++;
      continue;
    }

    buf.push(l);
    i++;
  }

  flush();
  return segs;
}

// ── Inline formatter: **bold** and `code` ─────────────────────────────────────
function inline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const rx = /\*\*(.+?)\*\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(<span key={k++}>{text.slice(last, m.index)}</span>);
    }
    if (m[1] != null) {
      parts.push(
        <strong key={k++} className="text-emerald-400 font-semibold">
          {m[1]}
        </strong>,
      );
    } else {
      parts.push(
        <code
          key={k++}
          className="px-1.5 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 transition-colors"
        >
          {m[2]}
        </code>,
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) {
    parts.push(<span key={k++}>{text.slice(last)}</span>);
  }

  return parts.length ? parts : text;
}

// ── Main component ────────────────────────────────────────────────────────────
export function ArchStory() {
  const { streamProgress, isStreaming, pendingImages, resolvedImages } = useSessionStore();
  const text = streamProgress.architecture.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g, '');

  const segs = useMemo(() => parseArch(text), [text]);

  const pendingArch = useMemo(
    () =>
      Array.from(pendingImages.entries()).filter(([, v]) => v.format === 'architecture'),
    [pendingImages],
  );

  const resolvedArch = useMemo(
    () => resolvedImages.filter((img) => img.format === 'architecture'),
    [resolvedImages],
  );

  const [lightboxImg, setLightboxImg] = useState<ImageRecord | null>(null);
  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  if (!text && !isStreaming && pendingArch.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-500/10 border border-emerald-500/20"
        >
          <Code2 size={22} className="text-emerald-400" />
        </div>
        <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors">
          Architecture story will appear here
        </p>
        <p className="text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors">
          Schema, ER diagrams, and data structure
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-5 story-content font-mono text-sm">
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

      {/* Resolved arch images */}
      <AnimatePresence>
        {resolvedArch.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            {resolvedArch.map((img) => (
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

      <div className="space-y-4">
        {segs.map((seg, idx) => {
          switch (seg.type) {
            case 'heading':
              return (
                <motion.h3
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg font-bold mt-8 mb-4 first:mt-0 font-sans text-emerald-400"
                >
                  {seg.content}
                </motion.h3>
              );

            case 'code':
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 backdrop-blur-sm transition-colors"
                >
                  {/* macOS-style terminal header */}
                  <div
                    className="px-4 py-3 flex items-center gap-2 bg-slate-200/50 dark:bg-slate-900/50 border-b border-slate-300 dark:border-slate-800/60 transition-colors"
                  >
                    <div className="flex gap-1.5">
                      {(['#ff5f57', '#febc2e', '#28c840'] as const).map((c) => (
                        <div
                          key={c}
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                    {seg.lang && seg.lang !== 'text' && (
                      <span
                        className="text-xs ml-2 font-sans text-slate-600 dark:text-slate-500 transition-colors"
                      >
                        {seg.lang}
                      </span>
                    )}
                  </div>
                  <pre
                    className="p-4 text-xs leading-relaxed overflow-x-auto bg-transparent text-slate-800 dark:text-slate-300 transition-colors"
                  >
                    <code>{seg.content}</code>
                  </pre>
                </motion.div>
              );

            case 'schema':
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-4 py-3 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 my-4 transition-colors"
                >
                  {seg.content}
                </motion.div>
              );

            default:
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.015, 0.35) }}
                  className="font-sans leading-relaxed text-slate-700 dark:text-slate-300 transition-colors"
                >
                  {seg.content.split('\n').map((l, li) =>
                    l.trim() ? (
                      <p key={li} className="mb-1.5">
                        {inline(l)}
                      </p>
                    ) : (
                      <br key={li} />
                    ),
                  )}
                </motion.div>
              );
          }
        })}
      </div>

      {/* Pending arch skeletons — blueprint style */}
      {pendingArch.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-5">
          {pendingArch.map(([id, p]) => (
            <div
              key={id}
              className="shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors"
            >
              <div className="text-2xl mb-2">🏗️</div>
              <p
                className="text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors"
              >
                {p.prompt}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Streaming cursor in emerald */}
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
