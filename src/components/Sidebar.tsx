import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useSidebar } from '../context/SidebarContext';
import { CONTENT } from '../content';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  Database, 
  BrainCircuit, 
  Network,
  Calculator,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Sidebar: React.FC = () => {
  const { activeTopicId, setActiveTopicId } = useProgress();
  const { isSidebarOpen, setSidebarOpen } = useSidebar();
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1, 2, 3, 4]);

  const units = [
    { id: 1, title: 'Unit 1: Data Mining & Warehousing', icon: Database },
    { id: 2, title: 'Unit 2: Machine Learning Core', icon: BrainCircuit },
    { id: 3, title: 'Unit 3: Clustering & Rules', icon: Network },
    { id: 4, title: 'Numericals', icon: Calculator },
  ];

  const toggleUnit = (unitId: number) => {
    setExpandedUnits(prev => 
      prev.includes(unitId) ? prev.filter(id => id !== unitId) : [...prev, unitId]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={false}
        animate={{ 
          x: isSidebarOpen ? 0 : -320,
          opacity: isSidebarOpen ? 1 : 0 
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          "fixed left-0 top-0 h-screen w-80 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 overflow-hidden flex flex-col shadow-2xl lg:shadow-none"
        )}
      >
        <div className="p-6 border-bottom border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <h1 className="font-bold text-lg tracking-tight">Enabling Technologies</h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {units.map((unit) => (
            <div key={unit.id} className="space-y-1">
              <button 
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <unit.icon size={18} className="text-slate-400 group-hover:text-blue-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{unit.title}</span>
                </div>
                {expandedUnits.includes(unit.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              <AnimatePresence>
                {expandedUnits.includes(unit.id) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-9 space-y-1"
                  >
                    {CONTENT.filter(t => t.unit === unit.id).map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => {
                          setActiveTopicId(topic.id);
                          if (window.innerWidth < 1024) {
                            setSidebarOpen(false);
                          }
                        }}
                        className={cn(
                          "w-full text-left p-2 rounded-md text-sm transition-all flex items-center justify-between group",
                          activeTopicId === topic.id 
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium" 
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                        )}
                      >
                        <span>{topic.title}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
            Made By Michael Fernandes
          </p>
        </div>
      </motion.aside>
    </>
  );
};
