import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Users, 
  Target, 
  Activity, 
  ArrowRight, 
  Share2, 
  Database,
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  TrendingUp,
  Info,
  Lightbulb,
  GraduationCap,
  Clock,
  AlertTriangle,
  LayoutGrid,
  Search,
  CheckCircle2,
  Network,
  Waves,
  Fingerprint
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const Clustering: React.FC = () => {
  const [activeAlgo, setActiveAlgo] = useState(0);

  const algorithms = [
    { 
      name: "K-Means", 
      type: "Partitioning", 
      desc: "Divide data into K clusters by minimizing the distance between points and their cluster centroid.",
      steps: [
        "Choose number of clusters (K)",
        "Initialize centroids randomly",
        "Assign points to nearest centroid",
        "Update centroids (mean of points)",
        "Repeat until convergence"
      ],
      pros: ["Simple and fast", "Scales well"],
      cons: ["Need to choose K", "Sensitive to outliers"],
      icon: LayoutGrid,
      color: "orange"
    },
    { 
      name: "Hierarchical", 
      type: "Tree-based", 
      desc: "Build a tree of clusters (dendrogram) by either merging small clusters or splitting large ones.",
      steps: [
        "Agglomerative: Start with points, merge nearest",
        "Divisive: Start with one, split recursively",
        "Result is a dendrogram tree structure"
      ],
      pros: ["No need to choose K initially", "Good for small datasets"],
      cons: ["Slow for large data", "Cannot undo merges/splits"],
      icon: Network,
      color: "red"
    },
    { 
      name: "DBSCAN", 
      type: "Density-based", 
      desc: "Find clusters based on the density of data points. Great for non-spherical shapes.",
      steps: [
        "Identify Core points (dense regions)",
        "Identify Border points (near core)",
        "Identify Noise (outliers/low density)"
      ],
      pros: ["Detects arbitrary shapes", "Handles outliers well"],
      cons: ["Sensitive to parameters", "Struggles with varying densities"],
      icon: Waves,
      color: "emerald"
    },
    { 
      name: "GMM", 
      type: "Model-based", 
      desc: "Assumes data is generated from a mixture of several Gaussian distributions with unknown parameters.",
      steps: [
        "Assume K Gaussian distributions",
        "Use Expectation-Maximization (EM)",
        "Assign probability of belonging to each cluster"
      ],
      pros: ["Soft clustering (probabilistic)", "Flexible cluster shapes"],
      cons: ["Computationally expensive", "Can get stuck in local optima"],
      icon: Fingerprint,
      color: "blue"
    }
  ];

  return (
    <TopicLayout 
      id="clustering"
      title="Clustering Analysis"
      subtitle="Grouping similar data points together without predefined labels."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-orange-400/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Share2 size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Clustering?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-orange-50">
              Clustering is an unsupervised learning technique that groups similar data points into clusters such that points in the same cluster have high similarity, while points in different clusters have low similarity.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Grouping similar data without labels.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clustering? */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Target className="text-orange-600" />
          🎯 Why Clustering?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Hidden Patterns", desc: "Discover structures in data that aren't immediately obvious.", icon: Search, color: "orange" },
            { title: "Segmentation", desc: "Group customers or users based on behavior.", icon: Users, color: "red" },
            { title: "Summarization", desc: "Reduce large datasets into representative cluster centers.", icon: Database, color: "amber" },
            { title: "Anomaly Detection", desc: "Identify outliers that don't fit into any cluster.", icon: AlertTriangle, color: "rose" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'orange' ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600" :
                item.color === 'red' ? "bg-red-50 dark:bg-red-900/30 text-red-600" :
                item.color === 'amber' ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600" :
                "bg-rose-50 dark:bg-rose-900/30 text-rose-600"
              )}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Idea: Distance Measures */}
      <section className="mb-16">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-orange-400" size={24} />
            🧠 Key Idea: Similarity & Distance
          </h4>
          <p className="text-slate-400 mb-8">Clustering depends on how we measure "closeness" between points.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Euclidean Distance", desc: "Straight-line distance between two points.", formula: "√Σ(xi - yi)²" },
              { name: "Manhattan Distance", desc: "Sum of absolute differences (city block).", formula: "Σ|xi - yi|" },
              { name: "Cosine Similarity", desc: "Measures the angle between two vectors.", formula: "cos(θ)" },
            ].map((measure, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h5 className="font-bold mb-2 text-orange-400">{measure.name}</h5>
                <p className="text-xs text-slate-400 mb-4">{measure.desc}</p>
                <code className="text-[10px] bg-black/30 p-2 rounded block text-center">{measure.formula}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Clustering Algorithms - Interactive */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-orange-600" />
          📂 Types of Clustering Algorithms
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {algorithms.map((algo, i) => (
            <button
              key={i}
              onClick={() => setActiveAlgo(i)}
              className={cn(
                "p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col gap-3",
                activeAlgo === i 
                  ? "bg-white dark:bg-slate-900 border-orange-500 shadow-lg ring-2 ring-orange-500/20" 
                  : "bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-orange-200"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                activeAlgo === i ? "bg-orange-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-500"
              )}>
                <algo.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">{algo.name}</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{algo.type}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeAlgo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                    activeAlgo === 0 ? "bg-orange-600 shadow-orange-600/20" :
                    activeAlgo === 1 ? "bg-red-600 shadow-red-600/20" :
                    activeAlgo === 2 ? "bg-emerald-600 shadow-emerald-600/20" :
                    "bg-blue-600 shadow-blue-600/20"
                  )}>
                    {React.createElement(algorithms[activeAlgo].icon, { size: 24 })}
                  </div>
                  <h4 className="text-2xl font-bold">{algorithms[activeAlgo].name}</h4>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {algorithms[activeAlgo].desc}
                </p>
                
                <h5 className="font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-orange-600" size={18} />
                  Steps
                </h5>
                <div className="space-y-3">
                  {algorithms[activeAlgo].steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h5 className="font-bold text-sm mb-6 flex items-center gap-2">
                    <Activity className="text-orange-600" size={16} />
                    Visualization
                  </h5>
                  <div className="relative h-48 w-full flex items-center justify-center overflow-hidden">
                    {activeAlgo === 0 && (
                      <div className="relative w-full h-full">
                        {/* K-Means Visualization */}
                        {[
                          { x: 20, y: 30, c: 'orange' }, { x: 25, y: 25, c: 'orange' }, { x: 30, y: 35, c: 'orange' },
                          { x: 70, y: 70, c: 'red' }, { x: 75, y: 75, c: 'red' }, { x: 80, y: 65, c: 'red' },
                          { x: 50, y: 50, c: 'slate', centroid: true }
                        ].map((p, i) => (
                          <motion.div 
                            key={i}
                            animate={p.centroid ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className={cn(
                              "absolute rounded-full",
                              p.centroid ? "w-4 h-4 border-2 border-white bg-indigo-600 z-10" : "w-2 h-2",
                              p.c === 'orange' ? "bg-orange-500" : p.c === 'red' ? "bg-red-500" : ""
                            )}
                            style={{ left: `${p.x}%`, top: `${p.y}%` }}
                          />
                        ))}
                      </div>
                    )}
                    {activeAlgo === 1 && (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        {/* Hierarchical Visualization */}
                        <div className="flex gap-8">
                          <div className="w-8 h-8 rounded-full bg-red-500" />
                          <div className="w-8 h-8 rounded-full bg-red-500" />
                        </div>
                        <div className="w-24 h-0.5 bg-slate-300" />
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-red-500 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-red-500" />
                        </div>
                      </div>
                    )}
                    {activeAlgo === 2 && (
                      <div className="relative w-full h-full">
                        {/* DBSCAN Visualization */}
                        {Array.from({ length: 20 }).map((_, i) => {
                          const isNoise = i > 15;
                          return (
                            <div 
                              key={i}
                              className={cn(
                                "absolute rounded-full",
                                isNoise ? "w-1 h-1 bg-slate-400" : "w-2 h-2 bg-emerald-500"
                              )}
                              style={{ 
                                left: isNoise ? `${Math.random() * 100}%` : `${40 + Math.random() * 20}%`, 
                                top: isNoise ? `${Math.random() * 100}%` : `${40 + Math.random() * 20}%` 
                              }}
                            />
                          );
                        })}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-2 border-dashed border-emerald-500/30 bg-emerald-500/5 animate-pulse" />
                        </div>
                      </div>
                    )}
                    {activeAlgo === 3 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* GMM Visualization */}
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                          <div className="absolute inset-4 bg-blue-500/30 rounded-full blur-lg" />
                          <div className="absolute inset-8 bg-blue-500/40 rounded-full blur-md" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                    <h6 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs mb-2 flex items-center gap-1">
                      <CheckCircle2 size={12} /> Pros
                    </h6>
                    <ul className="text-[10px] space-y-1 text-emerald-600 dark:text-emerald-500">
                      {algorithms[activeAlgo].pros.map((p, i) => <li key={i}>• {p}</li>)}
                    </ul>
                  </div>
                  <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-100 dark:border-rose-800">
                    <h6 className="font-bold text-rose-700 dark:text-rose-400 text-xs mb-2 flex items-center gap-1">
                      <AlertTriangle size={12} /> Cons
                    </h6>
                    <ul className="text-[10px] space-y-1 text-rose-600 dark:text-rose-500">
                      {algorithms[activeAlgo].cons.map((c, i) => <li key={i}>• {c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-orange-600" />
            ⚖️ Comparison of Clustering Algorithms
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Algorithm</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Type</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Key Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {algorithms.map((algo, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{algo.name}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{algo.type}</td>
                    <td className="p-4 text-orange-600 font-medium">{algo.pros[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Evaluation Metrics */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <BarChart3 className="text-orange-600" />
          📊 Clustering Evaluation Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Silhouette Score", desc: "Measures how similar an object is to its own cluster compared to other clusters.", range: "-1 to 1" },
            { name: "Davies-Bouldin Index", desc: "Measures the average similarity between each cluster and its most similar one.", range: "Lower is better" },
            { name: "Inertia (K-Means)", desc: "Sum of squared distances of samples to their closest cluster center.", range: "Lower is better" },
          ].map((metric, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold mb-2">{metric.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{metric.desc}</p>
              <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 text-[10px] font-bold rounded-full uppercase tracking-widest">
                {metric.range}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Applications */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-orange-400" size={24} />
            🧠 Key Challenges
          </h4>
          <ul className="space-y-4">
            {[
              "Choosing the optimal number of clusters (K)",
              "Handling noise and outliers effectively",
              "Scaling algorithms to massive datasets",
              "Evaluating cluster quality without labels"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-orange-600 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-orange-200" size={24} />
            💡 Real-World Applications
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, text: "Customer Segmentation" },
              { icon: LayoutGrid, text: "Image Segmentation" },
              { icon: Zap, text: "Recommendation Systems" },
              { icon: ShieldCheck, text: "Fraud Detection" }
            ].map((app, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-2xl border border-white/10 flex flex-col items-center text-center gap-2">
                <app.icon size={20} className="text-orange-200" />
                <p className="text-xs font-bold">{app.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default Clustering;
