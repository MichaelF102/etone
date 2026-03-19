import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSidebar } from '../context/SidebarContext';
import { Sun, Moon, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors text-slate-600 dark:text-slate-400"
            title="Toggle Sidebar"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};
