import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ImageIcon, Loader2, Sparkles } from 'lucide-react';
import { useSessionStore } from '../../store/sessionStore';
import type { ImageRecord } from '../../types';

const FORMAT_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  eli5:         { label: '🧒 ELI5',  color: '#f59e0b', bg: 'rgba(245,158,11,0.15)' },
  architecture: { label: '🏗️ Arch',  color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  analyst:      { label: '📊 Data',  color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)' },
};

/**
 * Extract a human-readable DATA INSIGHT from a raw image generation prompt.
 * Uses multiple strategies in priority order, refusing to show purely visual descriptions.
 */
export function promptToCaption(prompt: string): string {
  if (!prompt) return 'Visualization of your uploaded data';

  // ── Strategy 1: Explicit embedded Caption: label ─────────────────────────────
  // ELI5 prompts instruct the LLM to embed a child-style caption.
  // Looks like: Caption: "When Energy goes up, Acousticness goes way down!"
  const captionLabelMatch = prompt.match(/\bCaption[:\s]+["']?([^"'\n]{10,200})["']?/i);
  if (captionLabelMatch) {
    const c = captionLabelMatch[1].trim().replace(/["']$/, '');
    if (c.length >= 10) return c;
  }

  // ── Strategy 2: Find the sentence with the most data content ─────────────────
  // Splits prompt into sentences and picks the one with the highest data density
  // (numbers, $, %, column names, comparisons). This reliably finds insights like
  // "Pop has 6,786 songs — 3x more than Rock (2,181)."
  const sentences = prompt
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length >= 20 && s.length <= 300);

  const dataScore = (s: string) => {
    let score = 0;
    score += (s.match(/\d{2,}/g) || []).length * 3;     // numbers
    score += (s.match(/[$%]/g) || []).length * 2;         // currency/percent
    score += (s.match(/\b(avg|total|max|min|top|count|rate|sum|mean|median|correlation|r=)/gi) || []).length * 2;
    score += (s.match(/\b(more|less|higher|lower|biggest|smallest|most|least|dominant|leading)/gi) || []).length;
    score -= (s.match(/\b(style|illustration|background|color|font|diagram|layout|design|render|image|pixel|palette|neon|gradient)/gi) || []).length * 2;
    return score;
  };

  const bestSentence = sentences.reduce<{ s: string; score: number } | null>((best, s) => {
    const score = dataScore(s);
    if (score > 0 && (!best || score > best.score)) return { s, score };
    return best;
  }, null);

  if (bestSentence && bestSentence.score >= 3) {
    return bestSentence.s.length > 220 ? bestSentence.s.slice(0, 220) + '…' : bestSentence.s;
  }

  // ── Strategy 3: Scene: label with data values ────────────────────────────────
  const sceneMatch = prompt.match(/\bScene:\s*(.+?)(?:\n|$)/is);
  if (sceneMatch) {
    const scene = sceneMatch[1].trim();
    // Only use scene text if it contains data values (numbers)
    if (/\d{2,}/.test(scene)) {
      return scene.length > 200 ? scene.slice(0, 200) + '…' : scene;
    }
  }

  // ── Strategy 4: Dashboard prompt — extract topic + quoted metric values ──────
  const topicMatch = prompt.match(/(?:focused on|displaying|visualizing|showing|titled?|about)\s+["']?([^"'\n,]{8,80})["']?(?:[.,]|$)/i);
  const quoted: string[] = [];
  const qRegex = /['"]([^'"]{4,80})['"]/g;
  let qm: RegExpExecArray | null;
  while ((qm = qRegex.exec(prompt)) !== null && quoted.length < 4) {
    const v = qm[1].trim();
    if (/\d{2,}|%|\$|avg|total|max|min|top|count|rate|ratio|score/i.test(v)) quoted.push(v);
  }
  if (topicMatch || quoted.length > 0) {
    const topic = topicMatch ? topicMatch[1].trim() : '';
    const metrics = quoted.join(' · ');
    const combined = [topic, metrics].filter(Boolean).join(': ');
    if (combined.length >= 10) return combined.length > 200 ? combined.slice(0, 200) + '…' : combined;
  }

  // ── Strategy 5: Nothing data-specific found — show honest generic placeholder ─
  return 'Visualization of your uploaded data';
}


function getFormatStyle(fmt?: string) {
  return FORMAT_STYLES[fmt ?? 'eli5'] ?? FORMAT_STYLES['eli5'];
}

function tilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.transform = `perspective(500px) rotateX(${(0.5 - y) * 12}deg) rotateY(${(x - 0.5) * 12}deg) translateZ(8px) scale(1.03)`;
}

function untilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = 'perspective(500px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
}

interface LightboxProps {
  image: ImageRecord;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  const fmt = getFormatStyle(image.format);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(24px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 backdrop-blur-md"
        >
          <X size={16} className="text-slate-900 dark:text-white" />
        </button>

        {/* ESC hint */}
        <div className="absolute top-3 left-3 z-10">
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-white/70 backdrop-blur-md border border-white/10">ESC</kbd>
        </div>

        <img
          src={image.url}
          alt={image.prompt}
          className="w-full object-contain max-h-[70vh] bg-slate-50 dark:bg-slate-950 transition-colors"
        />

        {/* Caption */}
        <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800/60 transition-colors">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 transition-colors">
              {image.caption
                ? image.caption
                : promptToCaption(image.prompt)}
            </p>
            <span
              className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: fmt.bg, color: fmt.color }}
            >
              {fmt.label}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ImageGallery() {
  const { resolvedImages, pendingImages } = useSessionStore();
  const [lightbox, setLightbox] = useState<ImageRecord | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const pending = Array.from(pendingImages.entries());
  const total = resolvedImages.length + pending.length;

  if (total === 0) return null;

  return (
    <>
      <div
        className="flex-shrink-0 w-full min-w-0 bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800/60 backdrop-blur-md transition-colors"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-3 pb-2">
          <div className="flex items-center gap-2">
            <ImageIcon size={13} className="text-slate-500 dark:text-slate-400 transition-colors" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 transition-colors">
              Generated Images
            </span>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors">
            {resolvedImages.length}
          </span>
          {pending.length > 0 && (
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-500 transition-colors">
              <Loader2 size={11} className="animate-spin text-emerald-500 dark:text-emerald-400 transition-colors" />
              <span className="text-[11px]">{pending.length} generating</span>
            </div>
          )}
        </div>

        {/* Horizontal scroll row */}
        <div
          className="flex gap-2.5 px-4 pb-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {/* Pending skeleton cards */}
          {(() => {
            const formatOrder = ['eli5', 'architecture', 'analyst'];
            const sortedPending = [...pending].sort((a, b) => {
              const formatA = a[1].format || 'eli5';
              const formatB = b[1].format || 'eli5';
              const indexA = formatOrder.indexOf(formatA);
              const indexB = formatOrder.indexOf(formatB);
              // Fallback for unknown formats
              const finalA = indexA === -1 ? 999 : indexA;
              const finalB = indexB === -1 ? 999 : indexB;
              return finalA - finalB;
            });

            return sortedPending.map(([id, p]) => {
              const fmt = getFormatStyle(p.format);
              return (
                <div
                  key={id}
                  className="flex-shrink-0 w-36 h-24 rounded-xl shimmer relative overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/40 transition-colors"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 gap-1">
                    <Sparkles size={14} style={{ color: fmt.color, opacity: 0.7 }} />
                    <p className="text-[9px] text-center line-clamp-2 text-slate-500 dark:text-slate-400 transition-colors">
                      {p.prompt}
                    </p>
                  </div>
                </div>
              );
            });
          })()}

          {/* Resolved image cards */}
          {(() => {
            const formatOrder = ['eli5', 'architecture', 'analyst'];
            const sortedResolved = [...resolvedImages].sort((a, b) => {
              const formatA = a.format || 'eli5';
              const formatB = b.format || 'eli5';
              const indexA = formatOrder.indexOf(formatA);
              const indexB = formatOrder.indexOf(formatB);
              const finalA = indexA === -1 ? 999 : indexA;
              const finalB = indexB === -1 ? 999 : indexB;
              return finalA - finalB;
            });

            return sortedResolved.map((img, idx) => {
              const fmt = getFormatStyle(img.format);
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex-shrink-0 w-36 h-24 rounded-xl overflow-hidden cursor-pointer relative group border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500 dark:hover:border-emerald-500/50 transition-colors"
                  style={{
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={tilt}
                  onMouseLeave={untilt}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.url}
                    alt={img.prompt}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)' }}
                  >
                    <ZoomIn size={20} className="text-white" />
                  </div>

                  {/* Format badge */}
                  <div className="absolute bottom-1.5 left-1.5">
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                      style={{
                        background: fmt.bg,
                        color: fmt.color,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {fmt.label}
                    </span>
                  </div>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>

      {/* Lightbox portal */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox image={lightbox} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </>
  );
}
