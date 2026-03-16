import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarContent } from './Sidebar';
import { Sidebar, SidebarBody } from '../ui/sidebar';
import { UploadZone } from '../upload/UploadZone';
import { StoryTabs } from '../stories/StoryTabs';
import { ProjectsDirectory } from '../stories/ProjectsDirectory';
import { ImageGallery } from '../gallery/ImageGallery';
import { AgentPanel } from '../agent/AgentPanel';
import { useSessionStore } from '../../store/sessionStore';
import { useSessions } from '../../hooks/useSessions';
import { useStoryStream } from '../../hooks/useStoryStream';
import type { DataProfile } from '../../types';
import { AlertCircle } from 'lucide-react';

export function Dashboard() {
  const { startStream, error, cancelStream } = useStoryStream();
  const { refreshSessions } = useSessions();
  const {
    sessionId,
    dataProfile,
    resetStream,
    setDataProfile,
    setSessionId,
    dashboardMode,
    setDashboardMode,
  } = useSessionStore();

  const hasActiveSession = Boolean(sessionId && dataProfile);

  const handleUploadComplete = useCallback(
    async (newSessionId: string, profile: DataProfile) => {
      setSessionId(newSessionId);
      setDataProfile(profile);
      resetStream();
      setDashboardMode('session'); // ← automatically switch to story view
      await refreshSessions();
      await startStream(newSessionId, profile);
    },
    [setSessionId, setDataProfile, resetStream, refreshSessions, startStream, setDashboardMode]
  );

  return (
    <div className="flex flex-1 overflow-hidden relative bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white">
      <Sidebar>
        <SidebarBody>
          <SidebarContent />
        </SidebarBody>
      </Sidebar>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden relative z-10 bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        {/* Center panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            {dashboardMode === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex-1 overflow-y-auto panel-scroll"
              >
                <UploadZone onUploadComplete={handleUploadComplete} />
              </motion.div>
            )}

            {dashboardMode === 'directory' && (
              <motion.div
                key="directory"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex overflow-hidden"
              >
                <ProjectsDirectory />
              </motion.div>
            )}

            {dashboardMode === 'session' && (
              <motion.div
                key="stories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex flex-col overflow-hidden relative"
              >
                {/* Floating error banner for streaming failures */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: -20, x: '-50%' }}
                      className="absolute top-6 left-1/2 z-[100] bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 max-w-lg w-[90%] sm:w-auto"
                    >
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span className="text-sm font-medium leading-tight">
                        {error}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Story tabs — main scrollable area */}
                <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
                  <StoryTabs />
                </div>
                {/* Image gallery — fixed-height bottom strip */}
                <div
                  className="flex-shrink-0 w-full min-w-0 overflow-y-auto panel-scroll"
                  style={{
                    height: '220px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <ImageGallery />
                </div>
              </motion.div>
            )}

            {dashboardMode === 'ai' && (
              <motion.div
                key="ai_assistant"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col overflow-hidden"
              >
                <AgentPanel variant="center" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right panel — Agent (only on session page) */}
        {dashboardMode === 'session' && (
          <div className="hidden lg:flex h-full">
            <AgentPanel variant="sidebar" />
          </div>
        )}
      </div>
    </div>
  );
}
