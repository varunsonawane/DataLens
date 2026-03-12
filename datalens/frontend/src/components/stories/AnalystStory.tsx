import React, { useMemo, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, BarChart3, ZoomIn } from 'lucide-react';
import { useSessionStore } from '../../store/sessionStore';
import { DataCharts } from '../charts/DataCharts';
import { Lightbox } from '../gallery/ImageGallery';
import type { ImageRecord } from '../../types';

interface KPI { label: string; value: string; trend?: 'up' | 'down' | 'flat' }
interface TableData { headers: string[]; rows: string[][] }
type Seg = { type: 'kpi' | 'table' | 'heading' | 'text' | 'highlight'; content: string; kpis?: KPI[]; table?: TableData }

const KPI_RX = /\[KPI:([^\]]+)\]/g;

function extractKPIs(text: string): KPI[] {
  const result: KPI[] = [];
  let m: RegExpExecArray | null;
  KPI_RX.lastIndex = 0;
  while ((m = KPI_RX.exec(text)) !== null) {
    const parts = m[1].split(',').map(s => s.trim());
    if (parts.length >= 2) result.push({ label: parts[0], value: parts[1], trend: parts[2] as KPI['trend'] });
  }
  return result;
}

function parseTable(lines: string[]): TableData {
  const rows = lines
    .filter(l => l.trim().startsWith('|'))
    .map(l => l.split('|').map(c => c.trim()).filter(c => c && !c.match(/^[-:]+$/)))
    .filter(r => r.length > 0);
  if (!rows.length) return { headers: [], rows: [] };
  const [headers, ...rest] = rows;
  return { headers: headers ?? [], rows: rest };
}

function parseAnalyst(text: string): Seg[] {
  const segs: Seg[] = [];
  const lines = text.split('\n');
  let i = 0, buf: string[] = [];

  const flush = () => {
    const s = buf.join('\n').trim();
    if (!s) { buf = []; return; }
    const kpis = extractKPIs(s);
    segs.push(kpis.length > 0 ? { type: 'kpi', content: s, kpis } : { type: 'text', content: s });
    buf = [];
  };

  while (i < lines.length) {
    const l = lines[i];
    if (l.startsWith('#')) { flush(); segs.push({ type: 'heading', content: l.replace(/^#{1,3}\s+/, '') }); i++; continue; }
    if (l.trim().startsWith('|')) {
      flush();
      const tableLines: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('|') || lines[i].match(/^\|?[-:]+\|/))) { tableLines.push(lines[i]); i++; }
      const td = parseTable(tableLines);
      if (td.headers.length) segs.push({ type: 'table', content: tableLines.join('\n'), table: td });
      continue;
    }
    if (l.startsWith('> ')) { flush(); segs.push({ type: 'highlight', content: l.slice(2) }); i++; continue; }
    buf.push(l); i++;
  }
  flush();
  return segs;
}

function inline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const rx = /\*\*(.+?)\*\*|`([^`]+)`|\[KPI:[^\]]+\]/g;
  let last = 0, m: RegExpExecArray | null, k = 0;
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={k++}>{text.slice(last, m.index)}</span>);
    if (m[0].startsWith('[KPI:')) { last = m.index + m[0].length; continue; }
    if (m[1] != null) parts.push(<strong key={k++} className="text-emerald-400 font-semibold">{m[1]}</strong>);
    else parts.push(
      <code key={k++} className="px-1.5 py-0.5 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 transition-colors">
        {m[2]}
      </code>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<span key={k++}>{text.slice(last)}</span>);
  return parts.length ? parts : text;
}

// ── 3D Tilt KPI Card ─────────────────────────────────────────────────────────
function KPICard({ kpi, index }: { kpi: KPI; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(600px) rotateX(${(0.5 - y) * 14}deg) rotateY(${(x - 0.5) * 14}deg) translateZ(12px)`;
    el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.2)';
  };
  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    el.style.boxShadow = '';
  };

  const trendColor = kpi.trend === 'up' ? '#34d399' : kpi.trend === 'down' ? '#f87171' : '#64748b';
  const TrendIcon = kpi.trend === 'up' ? TrendingUp : kpi.trend === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="p-5 rounded-3xl cursor-default bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md transition-colors"
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <p className="text-[11px] uppercase tracking-wider font-semibold mb-2 text-slate-500 dark:text-slate-400 transition-colors">
        {kpi.label}
      </p>
      <p className="text-2xl font-extrabold text-slate-900 dark:text-white transition-colors">{kpi.value}</p>
      {kpi.trend && (
        <div className="flex items-center gap-1 mt-1.5">
          <TrendIcon size={12} style={{ color: trendColor }} />
          <span className="text-xs font-medium" style={{ color: trendColor }}>
            {kpi.trend === 'up' ? 'Trending up' : kpi.trend === 'down' ? 'Declining' : 'Stable'}
          </span>
        </div>
      )}
    </motion.div>
  );
}

function DataTable({ table }: { table: TableData }) {
  if (!table.headers.length) return null;
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 transition-colors">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-emerald-50 dark:bg-emerald-500/10 border-b border-emerald-200 dark:border-emerald-500/20 transition-colors">
            {table.headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 transition-colors">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="even:bg-slate-50 dark:even:bg-white/5 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/5 transition-colors">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AnalystStory() {
  const { streamProgress, isStreaming, pendingImages, resolvedImages, chartData } = useSessionStore();
  const text = streamProgress.analyst.replace(/<IMAGE_PROMPT>[\s\S]*?(?:<\/IMAGE_PROMPT>|$)/g, '');
  const segs = useMemo(() => parseAnalyst(text), [text]);

  const pendingAnalyst = useMemo(() =>
    Array.from(pendingImages.entries()).filter(([, v]) => v.format === 'analyst'),
    [pendingImages]
  );
  const resolvedAnalyst = useMemo(() =>
    resolvedImages.filter(img => img.format === 'analyst'),
    [resolvedImages]
  );

  const [lightboxImg, setLightboxImg] = useState<ImageRecord | null>(null);
  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  if (!text && !isStreaming && !chartData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 transition-colors">
          <BarChart3 size={22} className="text-emerald-400" />
        </div>
        <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 transition-colors">Analyst story will appear here</p>
        <p className="text-xs mt-1 text-slate-500 dark:text-slate-400 transition-colors">KPIs, charts, trends, and insights</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-5 story-content">
      {/* Accent bar */}
      <div className="flex gap-1.5 mb-8">
        {(['#10b981', '#34d399', '#6ee7b7'] as const).map((c, i) => (
          <div key={i} className="h-1 rounded-full" style={{ width: i === 0 ? 48 : i === 1 ? 28 : 16, background: c }} />
        ))}
      </div>

      {/* Charts */}
      {chartData && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <DataCharts data={chartData} />
        </motion.div>
      )}

      {/* Resolved analyst images */}
      <AnimatePresence>
        {resolvedAnalyst.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            {resolvedAnalyst.map(img => (
              <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
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
                <motion.h3 key={idx} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg font-bold mt-8 mb-4 first:mt-0 text-emerald-600 dark:text-emerald-400 transition-colors">
                  {seg.content}
                </motion.h3>
              );
            case 'kpi':
              return (
                <div key={idx} className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                  {(seg.kpis ?? []).map((k, ki) => <KPICard key={ki} kpi={k} index={ki} />)}
                </div>
              );
            case 'table':
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  {seg.table && <DataTable table={seg.table} />}
                </motion.div>
              );
            case 'highlight':
              return (
                <motion.div key={idx} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                  className="pl-4 py-3 rounded-r-xl border-l-[3px] border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 my-4 transition-colors">
                  <p className="text-sm text-emerald-800 dark:text-emerald-200 transition-colors">{inline(seg.content)}</p>
                </motion.div>
              );
            default:
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.015, 0.35) }}
                  className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 transition-colors">
                  {seg.content.split('\n').map((l, li) =>
                    l.trim() ? <p key={li} className="mb-2">{inline(l)}</p> : <br key={li} />
                  )}
                </motion.div>
              );
          }
        })}
      </div>

      {pendingAnalyst.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-5">
          {pendingAnalyst.map(([id, p]) => (
            <div key={id} className="shimmer rounded-2xl aspect-video flex flex-col items-center justify-center p-4 border border-emerald-200 dark:border-emerald-500/10 bg-slate-50 dark:bg-slate-800/30 transition-colors">
              <div className="text-2xl mb-2">📊</div>
              <p className="text-xs text-center line-clamp-2 text-slate-600 dark:text-slate-500 transition-colors">{p.prompt}</p>
            </div>
          ))}
        </div>
      )}

      {isStreaming && (
        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-1 h-5 ml-1 align-middle rounded-full bg-emerald-400" />
      )}
    </div>
  );
}
