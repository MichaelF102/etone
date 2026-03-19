import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { HierarchicalVisualization } from '../Visualizations';
import { 
  GitMerge, 
  GitBranch, 
  Network, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Lightbulb, 
  GraduationCap,
  Scaling,
  Box,
  Activity,
  ArrowRight,
  Search,
  Zap,
  LayoutGrid,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const HierarchicalClustering: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agglomerative' | 'divisive'>('agglomerative');

  const agglomerativeSteps = [
    { title: "Initial State", desc: "Start with N clusters, where each data point is its own cluster." },
    { title: "Distance Matrix", desc: "Compute the distance between all pairs of clusters." },
    { title: "Merge Closest", desc: "Merge the two closest clusters into a single cluster." },
    { title: "Repeat", desc: "Repeat the process until only one big cluster remains." },
  ];

  const divisiveSteps = [
    { title: "Initial State", desc: "Start with all data points in one single large cluster." },
    { title: "Split Cluster", desc: "Recursively split the cluster into smaller ones." },
    { title: "Repeat", desc: "Continue until each point forms its own individual cluster." },
  ];

  return (
    <TopicLayout 
      id="hierarchical-clustering"
      title="Hierarchical Clustering"
      subtitle="Building a tree-like hierarchy of clusters."
    >
      {/* Introduction */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GitBranch size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <GitMerge size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Hierarchical Clustering?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-indigo-50">
              Hierarchical Clustering is an unsupervised learning method that builds a tree-like structure (dendrogram) to group data points based on similarity.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Build clusters step-by-step like a tree.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "No K Required", desc: "No need to specify the number of clusters initially.", icon: Search, color: "indigo" },
            { title: "Hierarchy", desc: "Creates a nested hierarchy of clusters.", icon: Layers, color: "violet" },
            { title: "Dendrogram", desc: "Represented using a tree-like visualization.", icon: GitBranch, color: "blue" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'indigo' ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600" :
                item.color === 'violet' ? "bg-violet-50 dark:bg-violet-900/30 text-violet-600" :
                "bg-blue-50 dark:bg-blue-900/30 text-blue-600"
              )}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dendrogram Concept */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GitBranch className="text-indigo-600" />
            🌲 The Dendrogram
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                The dendrogram is a tree diagram used to illustrate the arrangement of the clusters produced by hierarchical clustering.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0 font-bold">1</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-700 dark:text-slate-200">Merging/Splitting:</span> Shows how clusters are combined or divided.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0 font-bold">2</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-700 dark:text-slate-200">Height:</span> The vertical axis represents the distance or dissimilarity between clusters.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="aspect-video flex items-center justify-center">
                {/* Simplified Dendrogram SVG */}
                <svg viewBox="0 0 200 120" className="w-full h-full text-indigo-500">
                  <path d="M40 100 V40 H160 V100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M70 100 V70 H130 V100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M100 40 V20" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="40" cy="100" r="4" fill="currentColor" />
                  <circle cx="70" cy="100" r="4" fill="currentColor" />
                  <circle cx="130" cy="100" r="4" fill="currentColor" />
                  <circle cx="160" cy="100" r="4" fill="currentColor" />
                  <text x="40" y="115" fontSize="8" textAnchor="middle" fill="currentColor">A</text>
                  <text x="70" y="115" fontSize="8" textAnchor="middle" fill="currentColor">B</text>
                  <text x="130" y="115" fontSize="8" textAnchor="middle" fill="currentColor">C</text>
                  <text x="160" y="115" fontSize="8" textAnchor="middle" fill="currentColor">D</text>
                </svg>
              </div>
              <p className="text-center text-xs text-slate-400 mt-4 uppercase tracking-widest font-bold">Sample Dendrogram Structure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Activity className="text-indigo-600" />
          ✨ Interactive Dendrogram Demo
        </h3>
        <HierarchicalVisualization />
      </section>

      {/* Types of Hierarchical Clustering */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-indigo-600" />
          🔄 Types of Hierarchical Clustering
        </h3>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-sm">
          <div className="flex border-b border-slate-100 dark:border-slate-800">
            <button 
              onClick={() => setActiveTab('agglomerative')}
              className={cn(
                "flex-1 py-6 font-bold text-sm transition-all",
                activeTab === 'agglomerative' ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              Agglomerative (Bottom-Up)
            </button>
            <button 
              onClick={() => setActiveTab('divisive')}
              className={cn(
                "flex-1 py-6 font-bold text-sm transition-all",
                activeTab === 'divisive' ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              Divisive (Top-Down)
            </button>
          </div>
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Info className="text-indigo-600" size={20} />
                    The Concept
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {activeTab === 'agglomerative' 
                      ? "Start with each point as its own cluster and merge the closest pairs until one single cluster remains."
                      : "Start with all points in one big cluster and recursively split it into smaller ones until each point is its own cluster."}
                  </p>
                  <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                    <p className="text-sm font-bold text-indigo-700 dark:text-indigo-400 mb-2">Key Idea:</p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-300 italic">
                      {activeTab === 'agglomerative' ? "“Small clusters → Big cluster”" : "“One big cluster → Small clusters”"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="text-indigo-600" size={20} />
                    Process Steps
                  </h4>
                  {(activeTab === 'agglomerative' ? agglomerativeSteps : divisiveSteps).map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-xs font-bold text-slate-500">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{step.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Linkage Methods */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Network className="text-indigo-600" />
          🔗 Linkage Methods
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Single Linkage", desc: "Distance between closest points.", detail: "Can cause 'chaining effect'.", color: "blue" },
            { title: "Complete Linkage", desc: "Distance between farthest points.", detail: "Produces compact clusters.", color: "indigo" },
            { title: "Average Linkage", desc: "Average distance between all pairs.", detail: "Balanced approach.", color: "violet" },
            { title: "Ward's Method", desc: "Minimizes variance within clusters.", detail: "Most commonly used.", color: "purple" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{item.desc}</p>
              <div className={cn(
                "p-3 rounded-xl text-[10px] font-bold uppercase tracking-widest",
                item.color === 'blue' ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600" :
                item.color === 'indigo' ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600" :
                item.color === 'violet' ? "bg-violet-50 dark:bg-violet-900/20 text-violet-600" :
                "bg-purple-50 dark:bg-purple-900/20 text-purple-600"
              )}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-lg font-bold mb-6 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 size={20} />
            ✅ Advantages
          </h4>
          <ul className="space-y-3 text-sm text-emerald-600 dark:text-emerald-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> No need to choose K initially</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Produces a meaningful hierarchy</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Works well for small datasets</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Dendrogram provides deep insights</li>
          </ul>
        </div>
        <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[32px] border border-rose-100 dark:border-rose-800">
          <h4 className="text-lg font-bold mb-6 text-rose-700 dark:text-rose-400 flex items-center gap-2">
            <AlertTriangle size={20} />
            ⚠️ Disadvantages
          </h4>
          <ul className="space-y-3 text-sm text-rose-600 dark:text-rose-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Computationally expensive (O(n³))</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Not scalable for large datasets</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Once merged, cannot be undone</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Sensitive to outliers</li>
          </ul>
        </div>
      </section>

      {/* Hierarchical vs K-Means */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-indigo-600" />
            ⚖️ Hierarchical vs K-Means
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Hierarchical</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">K-Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "K Required", h: "No", k: "Yes" },
                  { f: "Output", h: "Tree (Dendrogram)", k: "Clusters" },
                  { f: "Speed", h: "Slow", k: "Fast" },
                  { f: "Flexibility", h: "High", k: "Medium" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-indigo-600 font-medium">{row.h}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intuition & Analogy */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-yellow-400" size={24} />
            🧠 Simple Intuition
          </h4>
          <p className="text-slate-400 italic mb-6">“Like organizing files:”</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">1</div>
              <p className="text-sm">Group similar files into folders.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">2</div>
              <p className="text-sm">Then group those folders into larger categories.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">3</div>
              <p className="text-sm">Eventually, you have a complete <span className="text-indigo-400 font-bold">Hierarchy</span>.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-indigo-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-indigo-50 leading-relaxed">
            Hierarchical clustering provides a powerful way to understand the multi-level structure of your data. By building a dendrogram, it allows you to visualize relationships at different scales and choose the number of clusters after the analysis is complete.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default HierarchicalClustering;
