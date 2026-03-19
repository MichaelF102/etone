import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { Brain, Target, Zap } from 'lucide-react';

export const MLTypes: React.FC = () => {
  return (
    <TopicLayout 
      id="ml-types"
      title="Types of Machine Learning"
      subtitle="Supervised, Unsupervised, and Reinforcement Learning."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl w-fit mb-6">
            <Target size={24} />
          </div>
          <h4 className="text-xl font-bold mb-4">Supervised</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Learning from labeled data with a target outcome.</p>
          <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Classification</li>
            <li>• Regression</li>
          </ul>
        </div>
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-xl w-fit mb-6">
            <Brain size={24} />
          </div>
          <h4 className="text-xl font-bold mb-4">Unsupervised</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Finding hidden patterns in unlabeled data.</p>
          <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Clustering</li>
            <li>• Association</li>
          </ul>
        </div>
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-xl w-fit mb-6">
            <Zap size={24} />
          </div>
          <h4 className="text-xl font-bold mb-4">Reinforcement</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Learning through trial and error with rewards.</p>
          <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Game Playing</li>
            <li>• Robotics</li>
          </ul>
        </div>
      </div>
    </TopicLayout>
  );
};
