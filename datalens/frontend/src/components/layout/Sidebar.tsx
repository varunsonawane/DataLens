import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Upload as UploadIcon,
  MessageSquare,
  FileText,
  BarChart2,
  Settings,
  Sparkles,
  Trash2
} from 'lucide-react';
import { clsx } from 'clsx';
import { useSessionStore } from '../../store/sessionStore';
import { useThemeStore } from '../../store/themeStore';
import { useSessions } from '../../hooks/useSessions';

const WORKSPACE_LINKS = [
  { id: 'upload', label: 'Upload', icon: <UploadIcon size={18} /> },
  { id: 'ai', label: 'AI Assistant', icon: <MessageSquare size={18} /> },
  { id: 'story', label: 'Data Story', icon: <FileText size={18} /> },
];
// Helper to format iso strings to readable short dates
function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
  } catch {
    return 'Unknown date';
  }
}

export function SidebarContent() {
  const { sidebarOpen: isExpanded } = useThemeStore();
  const { sessionId, resetStream, setCurrentSession, setSessionId, setDataProfile, dashboardMode, setDashboardMode } = useSessionStore();
  const { sessions, loadSession, deleteSession, isLoading } = useSessions();
  
  // Determine active item based on dashboardMode
  let activeItemId = 'upload';
  if (dashboardMode === 'directory') activeItemId = 'story';
  else if (dashboardMode === 'session' && sessionId) activeItemId = 'story';
  else if (dashboardMode === 'ai') activeItemId = 'ai';

  const handleNewSession = useCallback(() => {
    resetStream();
    setCurrentSession(null);
    setSessionId(null);
    setDataProfile(null);
    setDashboardMode('upload');
  }, [resetStream, setCurrentSession, setSessionId, setDataProfile, setDashboardMode]);

  return (
    <div className="flex justify-between flex-col h-full w-full py-6">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 gap-8">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 px-2 mb-2 cursor-pointer group"
          onClick={handleNewSession}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500 flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-200">
             <Sparkles size={20} className="text-[#020617]" strokeWidth={2.5} />
          </div>
          <motion.div
            animate={{
              display: isExpanded ? 'block' : 'none',
              opacity: isExpanded ? 1 : 0,
            }}
            initial={false}
            className="flex flex-col min-w-0"
          >
             <h1 className="text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 leading-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">DataLens</h1>
             <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">AI Analytics</p>
          </motion.div>
        </div>

        {/* Workspace Section */}
        <div className="flex flex-col gap-1">
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0, display: isExpanded ? 'block' : 'none' }}
            initial={false}
            className="px-2 mb-2"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600">
              Workspace
            </span>
          </motion.div>
          {WORKSPACE_LINKS.map((link) => {
            const isActive = link.id === activeItemId;
            return (
              <button
                key={link.id}
                onClick={() => {
                  if (link.id === 'upload') handleNewSession();
                  else if (link.id === 'story') setDashboardMode('directory');
                  else if (link.id === 'ai') {
                    setSessionId('global_agent');
                    setDashboardMode('ai');
                  }
                }}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group w-full text-left",
                  isActive 
                    ? "bg-emerald-50 dark:bg-slate-800/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-700/50" 
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent"
                )}
              >
                <div className={clsx("flex-shrink-0 transition-colors duration-200", isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300")}>
                  {link.icon}
                </div>
                <motion.span
                  animate={{
                    display: isExpanded ? 'block' : 'none',
                    opacity: isExpanded ? 1 : 0,
                  }}
                  initial={false}
                  className="font-medium text-sm whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
                {isActive && isExpanded && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Recent Sessions Section */}
        <div className="flex flex-col gap-1">
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0, display: isExpanded ? 'flex' : 'none' }}
            initial={false}
            className="px-2 mb-2 items-center justify-between"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600">
              Recent Sessions
            </span>
          </motion.div>

          {/* New Session Button */}
          <button
            onClick={handleNewSession}
            className={clsx(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group w-full text-left",
              !sessionId
                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent"
            )}
          >
             <div className="flex-shrink-0 transition-colors duration-200 text-emerald-600 dark:text-emerald-500">
               <UploadIcon size={16} />
             </div>
             <motion.span
              animate={{
                display: isExpanded ? 'block' : 'none',
                opacity: isExpanded ? 1 : 0,
              }}
              initial={false}
              className="font-medium text-sm whitespace-nowrap"
             >
               New Chat
             </motion.span>
          </button>

          {isLoading && sessions.length === 0 && (
            <div className="px-3 py-4 text-xs text-slate-500">Loading sessions...</div>
          )}

          {sessions.map((session) => (
             <button
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('application/json', JSON.stringify({
                  session_id: session.session_id,
                  filename: session.filename
                }));
                const rect = (e.target as HTMLElement).getBoundingClientRect();
                e.dataTransfer.setDragImage(e.target as Element, rect.width / 2, rect.height / 2);
              }}
              key={session.session_id}
              onClick={() => {
                loadSession(session.session_id);
                setDashboardMode('session');
              }}
              className={clsx(
                "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group relative w-full text-left cursor-grab active:cursor-grabbing",
                sessionId === session.session_id && dashboardMode === 'session'
                  ? "bg-emerald-50 dark:bg-slate-800/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-slate-700/50"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/20 border border-transparent",
                  "hover:scale-[1.02]"
              )}
             >
               <div className="flex items-center gap-3 min-w-0 pr-8">
                  <div className={clsx(
                    "flex-shrink-0 transition-colors",
                    sessionId === session.session_id ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  )}>
                    <MessageSquare size={16} />
                  </div>
                  <motion.div
                    animate={{
                      display: isExpanded ? 'flex' : 'none',
                      opacity: isExpanded ? 1 : 0,
                    }}
                    initial={false}
                    className="flex-col min-w-0 text-left"
                  >
                    <span className="font-medium text-sm block truncate text-slate-800 dark:text-slate-300">
                      {session.filename || 'Dataset'}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                      {formatDate(session.created_at)}
                    </span>
                  </motion.div>
               </div>
               
               <div className="absolute right-3 flex items-center">
                 {/* Delete Button (visible on hover) */}
                 <div
                   onClick={async (e) => {
                     e.stopPropagation();
                     if (window.confirm('Are you sure you want to delete this session?')) {
                       await deleteSession(session.session_id);
                     }
                   }}
                   className="hidden group-hover:flex items-center justify-center p-1.5 rounded-md hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                   title="Delete chat"
                 >
                   <Trash2 size={14} />
                 </div>

                 {/* Badge for Image Count (hidden when hovered so trash shows) */}
                 {session.image_count > 0 && (
                  <motion.div
                    animate={{ opacity: isExpanded ? 1 : 0, display: isExpanded ? 'flex' : 'none' }}
                    initial={false}
                    className="items-center justify-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 text-emerald-500 border border-emerald-500/20 group-hover:hidden"
                  >
                    {session.image_count} img
                  </motion.div>
                 )}
               </div>
             </button>
          ))}
        </div>

      </div>

      {/* User settings area at the bottom */}
      <div className="mt-4 px-4">
        <button className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors group">
          <div className="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=10b981"
              className="h-10 w-10 flex-shrink-0 rounded-full bg-emerald-500/20 p-0.5 border border-emerald-500/30"
              alt="Avatar"
            />
            <motion.div 
              animate={{
                display: isExpanded ? 'block' : 'none',
                opacity: isExpanded ? 1 : 0,
              }}
              initial={false}
              className="flex flex-col items-start min-w-0 text-left"
            >
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate w-full">Alex Chen</p>
              <p className="text-xs font-medium text-slate-500 truncate w-full">Pro Plan</p>
            </motion.div>
          </div>
          <motion.div
            animate={{ display: isExpanded ? 'block' : 'none', opacity: isExpanded ? 1 : 0 }}
            initial={false}
          >
             <Settings size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
