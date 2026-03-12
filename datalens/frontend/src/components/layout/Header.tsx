import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Moon, Sun, PanelLeftClose, PanelLeft, CheckCircle2, X, BellOff } from 'lucide-react';
import { useSessionStore } from '../../store/sessionStore';
import { useThemeStore } from '../../store/themeStore';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastNotification {
  id: number;
  message: string;
  time: Date;
  read: boolean;
}

export function Header() {
  const { isStreaming, globalSearchQuery, setGlobalSearchQuery, setDashboardMode } = useSessionStore();
  const { theme, toggleTheme, sidebarOpen, toggleSidebar } = useThemeStore();

  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const [toastQueue, setToastQueue] = useState<ToastNotification[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const notifCounterRef = useRef(0);
  const prevStreaming = useRef(isStreaming);
  const panelRef = useRef<HTMLDivElement>(null);

  // When streaming ends, create a notification
  useEffect(() => {
    if (prevStreaming.current && !isStreaming) {
      const id = ++notifCounterRef.current;
      const notif: ToastNotification = {
        id,
        message: 'Data Story is ready! 🎉',
        time: new Date(),
        read: false,
      };
      setNotifications(n => [notif, ...n]);
      setToastQueue(n => [...n, notif]);
      // Auto-dismiss toast after 5 seconds
      setTimeout(() => {
        setToastQueue(n => n.filter(x => x.id !== id));
      }, 5000);
    }
    prevStreaming.current = isStreaming;
  }, [isStreaming]);

  // Close panel on outside click
  useEffect(() => {
    if (!panelOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [panelOpen]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const openPanel = () => {
    setPanelOpen(p => !p);
    // Mark all as read when panel is opened
    setNotifications(n => n.map(x => ({ ...x, read: true })));
  };

  const dismissToast = (id: number) => setToastQueue(n => n.filter(x => x.id !== id));
  const clearAll = () => setNotifications([]);

  const formatTime = (d: Date) => {
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <>
      <header
        className="flex-shrink-0 flex items-center justify-between px-6 h-16 z-40 transition-all duration-300 bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-white/5"
      >
        {/* Left section */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeft size={20} />}
          </button>

          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 dark:bg-[#0f172a]/50 border border-slate-200 dark:border-slate-800/60 focus-within:border-emerald-500/50 transition-colors w-full max-w-md">
            <Search size={16} className="text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search stories..."
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setDashboardMode('directory');
              }}
              className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-200 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded font-medium font-sans bg-slate-200 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700/50">
              ⌘ K
            </kbd>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 justify-end">
          {isStreaming && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400">Processing...</span>
            </div>
          )}

          {/* Notifications Bell with dropdown panel */}
          <div className="relative" ref={panelRef}>
            <button
              id="notification-bell"
              onClick={openPanel}
              className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 flex items-center justify-center bg-emerald-500 text-white text-[9px] font-bold rounded-full border border-white dark:border-[#020617]">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {/* Notification Panel Dropdown */}
            <AnimatePresence>
              {panelOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute right-0 top-12 w-80 rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 z-50"
                >
                  {/* Panel header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <Bell size={14} className="text-slate-600 dark:text-slate-400" />
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Notifications</span>
                      {notifications.length > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold">
                          {notifications.length}
                        </span>
                      )}
                    </div>
                    {notifications.length > 0 && (
                      <button
                        onClick={clearAll}
                        className="text-[11px] text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  {/* Notification list */}
                  <div className="max-h-72 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-10 gap-2 text-center">
                        <BellOff size={24} className="text-slate-300 dark:text-slate-600" />
                        <p className="text-sm text-slate-400 dark:text-slate-500">No notifications yet</p>
                        <p className="text-xs text-slate-300 dark:text-slate-600">You'll be notified when stories are ready</p>
                      </div>
                    ) : (
                      notifications.map(n => (
                        <div
                          key={n.id}
                          className={`flex items-start gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800/40 last:border-0 transition-colors ${n.read ? '' : 'bg-emerald-50/50 dark:bg-emerald-500/5'}`}
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">{n.message}</p>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{formatTime(n.time)}</p>
                          </div>
                          <button
                            onClick={() => setNotifications(prev => prev.filter(x => x.id !== n.id))}
                            className="text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 transition-colors flex-shrink-0"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Floating toast notifications */}
      <div className="fixed top-20 right-5 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toastQueue.map(n => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl pointer-events-auto cursor-pointer bg-white dark:bg-slate-800 border border-emerald-400/40 dark:border-emerald-500/30"
              onClick={() => dismissToast(n.id)}
            >
              <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{n.message}</span>
              <X size={14} className="text-slate-400 flex-shrink-0 ml-1" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
