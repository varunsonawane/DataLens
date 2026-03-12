import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FolderOpen, Calendar, ChevronRight } from 'lucide-react';
import { useSessions } from '../../hooks/useSessions';
import { useSessionStore } from '../../store/sessionStore';

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(iso));
  } catch {
    return 'Unknown date';
  }
}

export function ProjectsDirectory() {
  const { sessions, loadSession, isLoading } = useSessions();
  const { setDashboardMode, globalSearchQuery, setGlobalSearchQuery } = useSessionStore();

  const filteredSessions = sessions.filter(session =>
    (session.filename || 'Dataset').toLowerCase().includes(globalSearchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto w-full h-full bg-slate-50 dark:bg-slate-950 p-10 md:p-16 flex flex-col items-center transition-colors">
      <div className="w-full max-w-4xl max-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 text-slate-900 dark:text-slate-200 transition-colors">
          <FolderOpen size={32} className="text-emerald-400 stroke-1" />
          <h1 className="text-3xl font-medium tracking-tight">Data Story Directory</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex flex-col justify-center pointer-events-none">
            <Search size={20} className="text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search through past dataset stories..."
            value={globalSearchQuery}
            onChange={(e) => setGlobalSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 transition-colors text-slate-900 dark:text-slate-200 pl-12 pr-4 py-4 rounded-2xl outline-none border border-slate-300 dark:border-transparent shadow-sm focus:border-emerald-500/30"
          />
        </div>

        {/* Session List */}
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto panel-scroll pb-10">
          {isLoading ? (
            <div className="text-center py-20 text-slate-500">Loading your stories...</div>
          ) : filteredSessions.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              {globalSearchQuery ? 'No stories match your search.' : 'You have no analyzed datasets yet.'}
            </div>
          ) : (
            filteredSessions.map((session, i) => (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                key={session.session_id}
                onClick={() => {
                  loadSession(session.session_id);
                  setDashboardMode('session');
                }}
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all text-left w-full cursor-pointer"
              >
                <div className="flex flex-col min-w-0 pr-8">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors break-words">
                    {session.filename || 'Dataset'}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(session.created_at)}
                    </span>
                    {session.image_count > 0 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {session.image_count} visualizations
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-200">
                  <ChevronRight size={20} className="text-emerald-500" />
                </div>
              </motion.button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
