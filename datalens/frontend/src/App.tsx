import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/layout/Dashboard';
import { useThemeStore } from './store/themeStore';
import { useAuthStore } from './store/authStore';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './components/auth/AuthPage';

export default function App() {
  const { theme } = useThemeStore();
  const { user, isGuest } = useAuthStore();
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Not authenticated and not a guest → show auth screen
  if (!user && !isGuest) {
    return <AuthPage />;
  }

  if (!hasStarted) {
    return <LandingPage onGetStarted={() => setHasStarted(true)} />;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-[#020617]">
      <Header />
      <Dashboard />
    </div>
  );
}
