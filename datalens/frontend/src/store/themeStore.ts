import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

// Get initial theme from local storage or default to dark
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('datalens-theme') as 'light' | 'dark';
    const themeToApply = savedTheme || 'dark';
    
    // Apply immediately to DOM during initialization
    if (themeToApply === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    return themeToApply;
  }
  return 'dark'; // Default to dark mode for new aesthetic
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  sidebarOpen: true, // Default open
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('datalens-theme', newTheme);
      
      // Update document classes directly for immediate effect
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
    return { theme: newTheme };
  }),
  setTheme: (newTheme) => set(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('datalens-theme', newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
    return { theme: newTheme };
  }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (isOpen) => set(() => ({ sidebarOpen: isOpen })),
}));
