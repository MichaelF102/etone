import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { KMeansVisualization } from '../Visualizations';
import { 
  Target, 
  Zap, 
  Activity, 
  RefreshCw, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle2, 
  LayoutGrid, 
  Search,
  ArrowRight,
  Info,
  Lightbulb,
  GraduationCap,
  Scaling,
  Box,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Dot
} from 'recharts';

const elbowData = [
  { k: 1, error: 100 },
  { k: 2, error: 45 },
  { k: 3, error: 20 },
  { k: 4, error: 15 },
  { k: 5, error: 12 },
  { k: 6, error: 10 },
];

export const KMeansClustering: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Choose K", desc: "Decide the number of clusters (K) you want to find in the data.", icon: Target },
    { title: "Initialize", desc: "Randomly pick K data points to serve as the initial cluster centroids.", icon: Zap },
    { title: "Assign", desc: "Assign each data point to the cluster with the nearest centroid using Euclidean distance.", icon: LayoutGrid },
    { title: "Update", desc: "Calculate the mean of all points in each cluster and move the centroid to this new location.", icon: RefreshCw },
    { title: "Repeat", desc: "Repeat the assign and update steps until the centroids no longer move significantly.", icon: Activity },
  ];

  return (
    <TopicLayout 
      id="k-means"
      title="K-Means Clustering"
      subtitle="Partitioning data into K distinct, non-overlapping clusters."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <LayoutGrid size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <LayoutGrid size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is K-Means?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              K-Means is an unsupervised learning algorithm that partitions data into K clusters, where each data point belongs to the cluster with the nearest centroid.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Group data into K clusters based on similarity.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Centroids", desc: "Each cluster is represented by a center point (centroid).", icon: Target, color: "blue" },
            { title: "Proximity", desc: "Points are assigned to the nearest centroid.", icon: Search, color: "indigo" },
            { title: "Iteration", desc: "Centroids are updated iteratively to minimize error.", icon: RefreshCw, color: "emerald" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'blue' ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600" :
                item.color === 'indigo' ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600" :
                "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600"
              )}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Algorithm Steps - Interactive */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-blue-600" />
          🔄 Algorithm Steps (Iterative Process)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-center gap-4",
                  activeStep === i 
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20 scale-[1.02]" 
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-300"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  activeStep === i ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800"
                )}>
                  <step.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Step {i + 1}</p>
                  <p className="font-bold text-sm">{step.title}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                    {React.createElement(steps[activeStep].icon, { size: 32 })}
                  </div>
                  <h4 className="text-2xl font-bold">{steps[activeStep].title}</h4>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Activity className="text-blue-600" />
          ✨ Interactive Demo
        </h3>
        <KMeansVisualization />
      </section>

      {/* Math & Objective Function */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Scaling className="text-blue-400" size={24} />
            📐 Objective Function
          </h4>
          <p className="text-slate-400 mb-6">K-Means aims to minimize the Within-Cluster Sum of Squares (WCSS):</p>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 font-mono text-center text-xl text-blue-400 mb-6">
            J = Σ Σ ||x - μᵢ||²
          </div>
          <div className="space-y-3 text-sm text-slate-400">
            <p>• <span className="text-white font-bold">J</span>: Inertia (Total Error)</p>
            <p>• <span className="text-white font-bold">x</span>: Data point</p>
            <p>• <span className="text-white font-bold">μᵢ</span>: Centroid of cluster i</p>
          </div>
          <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <p className="text-xs italic text-blue-300">
              "Meaning: Minimize the total distance between points and their respective centroids."
            </p>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Box className="text-blue-600" size={24} />
            📏 Distance Measure
          </h4>
          <p className="text-slate-500 mb-6">Usually uses <span className="font-bold text-slate-900 dark:text-white">Euclidean Distance</span> to measure similarity:</p>
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl font-mono text-center text-xl text-blue-600 mb-6">
            d = √((x₁-x₂)² + (y₁-y₂)²)
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <Info className="text-blue-600" size={18} />
              <p className="text-sm text-blue-700 dark:text-blue-300">Smaller distance = Higher similarity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elbow Method */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="text-blue-600" />
                🎯 Choosing Optimal K: The Elbow Method
              </h4>
              <p className="text-sm text-slate-500">Finding the "sweet spot" where adding clusters doesn't significantly reduce error.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={elbowData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="k" 
                    label={{ value: 'Number of Clusters (K)', position: 'insideBottom', offset: -5 }}
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <YAxis 
                    label={{ value: 'Inertia (Error)', angle: -90, position: 'insideLeft' }}
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="error" 
                    stroke="#3b82f6" 
                    strokeWidth={4} 
                    dot={(props) => {
                      const { cx, cy, payload } = props;
                      if (payload.k === 3) {
                        return (
                          <g key={payload.k}>
                            <circle cx={cx} cy={cy} r={8} fill="#ef4444" stroke="#fff" strokeWidth={2} />
                            <text x={cx + 15} y={cy - 15} fill="#ef4444" fontSize="12" fontWeight="bold">Elbow Point (K=3)</text>
                          </g>
                        );
                      }
                      return <circle key={payload.k} cx={cx} cy={cy} r={4} fill="#3b82f6" />;
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">How it works:</h5>
                <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">
                  As K increases, inertia (error) always decreases. The "Elbow" is the point where the rate of decrease slows down significantly. This is usually the optimal K.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                <AlertTriangle className="text-amber-600" size={20} />
                <p className="text-sm text-amber-700 dark:text-amber-300">Choosing too many clusters leads to overfitting!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Limitations */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-lg font-bold mb-6 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 size={20} />
            ✅ Advantages
          </h4>
          <ul className="space-y-3 text-sm text-emerald-600 dark:text-emerald-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Simple and easy to implement</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Scalable to large datasets</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Fast computation time</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Works well for spherical clusters</li>
          </ul>
        </div>
        <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[32px] border border-rose-100 dark:border-rose-800">
          <h4 className="text-lg font-bold mb-6 text-rose-700 dark:text-rose-400 flex items-center gap-2">
            <AlertTriangle size={20} />
            ⚠️ Limitations
          </h4>
          <ul className="space-y-3 text-sm text-rose-600 dark:text-rose-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Sensitive to outliers</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Must pre-define K</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Sensitive to initial centroid placement</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Struggles with non-spherical shapes</li>
          </ul>
        </div>
      </section>

      {/* K-Means vs DBSCAN */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-blue-600" />
            ⚖️ K-Means vs DBSCAN
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">K-Means</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">DBSCAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Cluster Shape", k: "Spherical", d: "Any shape" },
                  { f: "Outliers", k: "Poor handling", d: "Good (Noise detection)" },
                  { f: "K Required", k: "Yes", d: "No" },
                  { f: "Speed", k: "Very Fast", d: "Moderate" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-blue-600 font-medium">{row.k}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.d}</td>
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
          <p className="text-slate-400 italic mb-6">“Imagine grouping students based on height:”</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
              <p className="text-sm">Clusters form naturally around similar heights.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
              <p className="text-sm">The average height of each group is the <span className="text-blue-400 font-bold">Centroid</span>.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-blue-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-blue-50 leading-relaxed">
            K-Means is the workhorse of clustering. It's fast, efficient, and provides a clear mathematical foundation for grouping data. While it has limitations with non-spherical data and outliers, its simplicity makes it the first choice for many real-world segmentation tasks.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};
