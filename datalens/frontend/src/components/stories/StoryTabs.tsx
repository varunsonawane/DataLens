import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSessionStore } from '../../store/sessionStore';
import { ELI5Story } from './ELI5Story';
import { ArchStory } from './ArchStory';
import { AnalystStory } from './AnalystStory';
import type { StoryFormat } from '../../types';
import { BookOpen, Code2, TrendingUp } from 'lucide-react';

const TABS = [
  {
    id: 'eli5' as StoryFormat,
    label: 'ELI5',
    icon: BookOpen,
    color: 'var(--primary)',
    bg: 'var(--bg-base)',
    border: 'var(--border-subtle)',
  },
  {
    id: 'architecture' as StoryFormat,
    label: 'Architecture',
    icon: Code2,
    color: 'var(--accent)',
    bg: 'var(--bg-base)',
    border: 'var(--border-subtle)',
  },
  {
    id: 'analyst' as StoryFormat,
    label: 'Analyst',
    icon: TrendingUp,
    color: 'var(--primary-light)',
    bg: 'var(--bg-base)',
    border: 'var(--border-subtle)',
  },
];

function fmt(n: number): string | null {
  if (n === 0) return null;
  if (n < 1000) return `${n}`;
  return `${(n / 1000).toFixed(1)}k`;
}

export function StoryTabs() {
  const { activeFormat, setActiveFormat, streamProgress, isStreaming } = useSessionStore();

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#020617] transition-colors">
      {/* Tab bar */}
      <div
        className="flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-6 py-4 bg-white/50 dark:bg-[#0f172a]/80 border-b border-slate-200 dark:border-white/5 backdrop-blur-md transition-colors z-10 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-2 flex-1">
          {TABS.map((tab) => {
            const isActive = activeFormat === tab.id;
            const count = fmt(streamProgress[tab.id].length);
            const streaming = isStreaming && activeFormat === tab.id;
            const Icon = tab.icon;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveFormat(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                  isActive 
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                    : 'bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                <Icon size={16} strokeWidth={2.5} />
                <span>{tab.label}</span>

                {/* Live streaming dot */}
                {streaming && (
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}

                {/* Character count badge */}
                {count && !streaming && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Global streaming badge */}
        <AnimatePresence>
          {isStreaming && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.15)]"
            >
              <div className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">Generating</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content panel */}
      <div className="flex-1 overflow-y-auto panel-scroll">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFormat}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeFormat === 'eli5' && <ELI5Story />}
            {activeFormat === 'architecture' && <ArchStory />}
            {activeFormat === 'analyst' && <AnalystStory />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
