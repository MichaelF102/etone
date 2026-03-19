import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TopicRenderer } from './components/TopicRenderer';
import { CONTENT } from './content';
import { cn } from './lib/utils';

const AppContent: React.FC = () => {
  const { activeTopicId } = useProgress();
  const { isSidebarOpen } = useSidebar();
  const activeTopic = CONTENT.find(t => t.id === activeTopicId) || CONTENT[0];

  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-950">
      <Sidebar />
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isSidebarOpen ? "lg:ml-80" : "ml-0"
      )}>
        <Header />
        <div className="max-w-7xl mx-auto">
          <TopicRenderer topic={activeTopic} />
        </div>
        
        <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ©Built By  Michael Fernandes
          </p>
        </footer>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <ProgressProvider>
          <AppContent />
        </ProgressProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
