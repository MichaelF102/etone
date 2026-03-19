import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CONTENT } from '../content';

interface TopicLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const TopicLayout: React.FC<TopicLayoutProps> = ({ id, title, subtitle, children }) => {
  const { setActiveTopicId } = useProgress();
  const currentIndex = CONTENT.findIndex(t => t.id === id);
  const prevTopic = CONTENT[currentIndex - 1];
  const nextTopic = CONTENT[currentIndex + 1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6"
    >
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">{title}</h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
        )}
      </div>

      {children}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-12 mt-12 border-t border-slate-200 dark:border-slate-800">
        {prevTopic ? (
          <button
            onClick={() => {
              setActiveTopicId(prevTopic.id);
              window.scrollTo(0, 0);
            }}
            className="flex flex-col items-start gap-2 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group w-full sm:w-auto"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Previous</span>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-blue-600 transition-colors text-left">
              <ArrowRight className="rotate-180 shrink-0" size={18} />
              <span className="line-clamp-2">{prevTopic.title}</span>
            </div>
          </button>
        ) : <div className="hidden sm:block" />}

        {nextTopic ? (
          <button
            onClick={() => {
              setActiveTopicId(nextTopic.id);
              window.scrollTo(0, 0);
            }}
            className="flex flex-col items-end sm:items-end items-start gap-2 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group text-left sm:text-right w-full sm:w-auto"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next</span>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-blue-600 transition-colors text-left sm:text-right justify-end w-full">
              <span className="line-clamp-2">{nextTopic.title}</span>
              <ArrowRight className="shrink-0" size={18} />
            </div>
          </button>
        ) : <div className="hidden sm:block" />}
      </div>
    </motion.div>
  );
};
