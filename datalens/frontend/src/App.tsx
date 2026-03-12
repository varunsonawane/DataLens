import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/layout/Dashboard';
import { useThemeStore } from './store/themeStore';
import { LandingPage } from './pages/LandingPage';

export default function App() {
  const { theme } = useThemeStore();
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

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
