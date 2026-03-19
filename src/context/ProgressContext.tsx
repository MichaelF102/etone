import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  activeTopicId: string;
  setActiveTopicId: (id: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [activeTopicId, setActiveTopicId] = useState<string>(() => {
    return localStorage.getItem('activeTopicId') || 'dm-intro';
  });

  useEffect(() => {
    localStorage.setItem('activeTopicId', activeTopicId);
  }, [activeTopicId]);

  return (
    <ProgressContext.Provider value={{ activeTopicId, setActiveTopicId }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
