import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { DBSCANVisualization } from '../Visualizations';
import { 
  Circle, 
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
  ChevronRight,
  Network,
  Users
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
  ResponsiveContainer 
} from 'recharts';

const kDistanceData = [
  { k: 1, dist: 0.1 },
  { k: 5, dist: 0.2 },
  { k: 10, dist: 0.3 },
  { k: 15, dist: 0.4 },
  { k: 20, dist: 0.8 },
  { k: 25, dist: 1.5 },
  { k: 30, dist: 2.5 },
];

const DBSCAN: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Pick Point", desc: "Pick an unvisited point from the dataset.", icon: Search },
    { title: "Find Neighbors", desc: "Find all points within distance ε (Epsilon) from the current point.", icon: Circle },
    { title: "Check Density", desc: "If neighbors ≥ MinPts, mark as a Core Point and start a cluster.", icon: Activity },
    { title: "Expand Cluster", desc: "Recursively add all density-reachable points to the cluster.", icon: Network },
    { title: "Mark Noise", desc: "If a point is not reachable from any core point, mark it as Noise.", icon: AlertTriangle },
  ];

  return (
    <TopicLayout 
      id="dbscan"
      title="DBSCAN Clustering"
      subtitle="Density-Based Spatial Clustering of Applications with Noise."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Network size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is DBSCAN?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-emerald-50">
              DBSCAN is a density-based clustering algorithm that groups together points that are closely packed and marks points in low-density regions as outliers (noise).
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Clusters = dense regions, noise = sparse regions.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Density-Based", desc: "Clusters are formed where data density is high.", icon: Activity, color: "emerald" },
            { title: "Noise Detection", desc: "Sparse regions are treated as noise/outliers.", icon: AlertTriangle, color: "orange" },
            { title: "Arbitrary Shapes", desc: "Can detect clusters of any shape, unlike K-Means.", icon: Scaling, color: "blue" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'emerald' ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600" :
                item.color === 'orange' ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600" :
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

      {/* Key Parameters */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Scaling className="text-emerald-600" />
          🔑 Key Parameters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-xl">
                ε
              </div>
              <h4 className="text-xl font-bold">Epsilon (ε)</h4>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              The maximum distance between two points for them to be considered as neighbors.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300 italic">
                “Defines how far to look for neighbors.”
              </p>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center font-bold text-xl">
                N
              </div>
              <h4 className="text-xl font-bold">MinPts</h4>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              The minimum number of points required to form a dense region (a cluster).
            </p>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <p className="text-sm text-emerald-700 dark:text-emerald-300 italic">
                “Minimum points to form a cluster.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Points */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Users className="text-emerald-600" />
          🔸 Types of Points
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Core Point", desc: "Has ≥ MinPts within ε radius.", icon: Circle, color: "emerald", label: "Dense" },
            { title: "Border Point", desc: "Less than MinPts, but near a core point.", icon: Circle, color: "blue", label: "Edge" },
            { title: "Noise Point", desc: "Not reachable from any core point.", icon: Circle, color: "rose", label: "Outlier" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm relative overflow-hidden">
              <div className={cn(
                "absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl",
                item.color === 'emerald' ? "bg-emerald-500 text-white" :
                item.color === 'blue' ? "bg-blue-500 text-white" :
                "bg-rose-500 text-white"
              )}>
                {item.label}
              </div>
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'emerald' ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600" :
                item.color === 'blue' ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600" :
                "bg-rose-50 dark:bg-rose-900/30 text-rose-600"
              )}>
                <item.icon size={24} fill="currentColor" fillOpacity={0.2} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Activity className="text-emerald-600" />
          ✨ Interactive Demo
        </h3>
        <DBSCANVisualization />
      </section>

      {/* Algorithm Steps - Interactive */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-emerald-600" />
          🔄 Algorithm Steps
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
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20 scale-[1.02]" 
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-emerald-300"
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
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
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

      {/* Advantages & Limitations */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-lg font-bold mb-6 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 size={20} />
            ✅ Advantages
          </h4>
          <ul className="space-y-3 text-sm text-emerald-600 dark:text-emerald-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> No need to specify number of clusters</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Detects arbitrary shapes (e.g., moons, circles)</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Handles outliers naturally as noise</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Robust to noise in the data</li>
          </ul>
        </div>
        <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[32px] border border-rose-100 dark:border-rose-800">
          <h4 className="text-lg font-bold mb-6 text-rose-700 dark:text-rose-400 flex items-center gap-2">
            <AlertTriangle size={20} />
            ⚠️ Disadvantages
          </h4>
          <ul className="space-y-3 text-sm text-rose-600 dark:text-rose-500">
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Choosing ε and MinPts can be tricky</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Not good for varying densities</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Performance drops in high dimensions</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} /> Sensitive to distance metrics</li>
          </ul>
        </div>
      </section>

      {/* DBSCAN vs K-Means */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-emerald-600" />
            ⚖️ DBSCAN vs K-Means
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">DBSCAN</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">K-Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Cluster Shape", k: "Any shape", d: "Spherical" },
                  { f: "Outliers", k: "Handles well", d: "Poor" },
                  { f: "K Required", k: "No", d: "Yes" },
                  { f: "Density-based", k: "Yes", d: "No" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-emerald-600 font-medium">{row.k}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Choosing Parameters */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="text-emerald-600" />
                📏 Choosing Parameters: k-distance graph
              </h4>
              <p className="text-sm text-slate-500">Finding the optimal Epsilon (ε) using the elbow point.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kDistanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="k" 
                    label={{ value: 'Points sorted by distance', position: 'insideBottom', offset: -5 }}
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <YAxis 
                    label={{ value: 'Distance to k-th neighbor', angle: -90, position: 'insideLeft' }}
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="dist" 
                    stroke="#10b981" 
                    strokeWidth={4} 
                    dot={(props) => {
                      const { cx, cy, payload } = props;
                      if (payload.k === 20) {
                        return (
                          <g key={payload.k}>
                            <circle cx={cx} cy={cy} r={8} fill="#ef4444" stroke="#fff" strokeWidth={2} />
                            <text x={cx + 15} y={cy - 15} fill="#ef4444" fontSize="12" fontWeight="bold">Elbow Point (ε ≈ 0.8)</text>
                          </g>
                        );
                      }
                      return <circle key={payload.k} cx={cx} cy={cy} r={4} fill="#10b981" />;
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">MinPts Rule:</h5>
                <p className="text-sm text-emerald-600 dark:text-emerald-300 leading-relaxed">
                  A common rule of thumb is to set MinPts ≥ dimensions + 1. For 2D data, MinPts = 4 is a good starting point.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <Info className="text-blue-600" size={20} />
                <p className="text-sm text-blue-700 dark:text-blue-300">The elbow point in the k-distance graph suggests the optimal ε.</p>
              </div>
            </div>
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
          <p className="text-slate-400 italic mb-6">“Imagine a party:”</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</div>
              <p className="text-sm">Crowded areas where people are talking form <span className="text-emerald-400 font-bold">Clusters</span>.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</div>
              <p className="text-sm">A few people standing alone in sparse areas are marked as <span className="text-emerald-400 font-bold">Noise</span>.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-emerald-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-emerald-50 leading-relaxed">
            DBSCAN is a powerful density-based algorithm that excels at finding clusters of arbitrary shapes and identifying outliers. Unlike K-Means, it doesn't require you to pre-define the number of clusters, making it ideal for exploratory data analysis and spatial data tasks.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default DBSCAN;
