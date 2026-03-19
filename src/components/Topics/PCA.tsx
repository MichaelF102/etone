import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Maximize, 
  Minimize2, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  RefreshCw,
  Info,
  Lightbulb,
  GraduationCap,
  Clock,
  AlertTriangle,
  LayoutGrid,
  Box,
  Scaling,
  Search,
  CheckCircle2,
  Activity,
  ArrowDownRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line
} from 'recharts';

const varianceData = [
  { name: 'PC1', variance: 80, cumulative: 80 },
  { name: 'PC2', variance: 15, cumulative: 95 },
  { name: 'PC3', variance: 5, cumulative: 100 },
];

export const PCA: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Standardization", desc: "Convert data to mean = 0 and variance = 1. This ensures all features contribute equally.", icon: Scaling },
    { title: "Covariance Matrix", desc: "Calculate the relationship (correlation) between all features in the dataset.", icon: LayoutGrid },
    { title: "Eigen Decomposition", desc: "Find Eigenvectors (directions) and Eigenvalues (importance/variance).", icon: Activity },
    { title: "Sort & Select", desc: "Sort components by importance and select the top K to reduce dimensions.", icon: BarChart3 },
    { title: "Transform", desc: "Project the original data onto the new principal component axes.", icon: Maximize },
  ];

  return (
    <TopicLayout 
      id="pca"
      title="Principal Component Analysis (PCA)"
      subtitle="Reducing dimensions while preserving maximum information."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-violet-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Minimize2 size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Minimize2 size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is PCA?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-violet-50">
              PCA is a dimensionality reduction technique used to reduce the number of features while preserving maximum variance (information) in the data.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Reduce dimensions without losing important information.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PCA? */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Target className="text-violet-600" />
          🎯 Why PCA?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "High-Dim Data", desc: "Handles datasets with hundreds or thousands of features.", icon: Box, color: "violet" },
            { title: "Speed Up", desc: "Reduces computation time for downstream algorithms.", icon: Zap, color: "purple" },
            { title: "Remove Redundancy", desc: "Eliminates correlated features (multicollinearity).", icon: ShieldCheck, color: "indigo" },
            { title: "Visualization", desc: "Helps project data into 2D or 3D for human analysis.", icon: Search, color: "blue" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'violet' ? "bg-violet-50 dark:bg-violet-900/30 text-violet-600" :
                item.color === 'purple' ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600" :
                item.color === 'indigo' ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600" :
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

      {/* Core Idea & Components */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-violet-400" size={24} />
              🧠 Core Idea: Principal Components
            </h4>
            <p className="text-slate-400 mb-8 leading-relaxed">
              PCA transforms original features into new features called Principal Components (PCs).
            </p>
            <div className="space-y-4">
              {[
                "Linear combinations of original variables.",
                "Uncorrelated with each other.",
                "Ordered by importance (variance explained)."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <CheckCircle2 size={18} className="text-violet-400" />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm flex flex-col justify-center">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Activity className="text-violet-600" size={20} />
              📊 Intuition: Maximize Variance
            </h4>
            <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              {/* Simplified PCA Intuition Graphic */}
              <div className="relative w-48 h-48">
                {/* Data points cloud (simulated) */}
                <div className="absolute inset-0 rotate-[-30deg]">
                   {Array.from({ length: 12 }).map((_, i) => (
                     <div 
                       key={i} 
                       className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"
                       style={{ 
                         left: `${Math.random() * 100}%`, 
                         top: `${Math.random() * 40 + 30}%`,
                         opacity: Math.random() * 0.5 + 0.3
                       }}
                     />
                   ))}
                </div>
                {/* PC1 Axis */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-violet-500 rotate-[-30deg] shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-violet-500 rounded-full" />
                  <span className="absolute -right-8 -top-4 text-[10px] font-bold text-violet-600">PC1 (Max Var)</span>
                </div>
                {/* PC2 Axis */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-400 dark:bg-slate-500 rotate-[60deg] opacity-50">
                  <span className="absolute -right-8 -top-4 text-[10px] font-bold text-slate-500">PC2</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center italic">
              PC1 captures the direction of maximum spread in the data. PC2 is orthogonal to PC1 and captures the next best spread.
            </p>
          </div>
        </div>
      </section>

      {/* Steps in PCA - Interactive */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-violet-600" />
          🔄 Steps in PCA (Very Important)
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
                    ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-600/20 scale-[1.02]" 
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-violet-300"
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
                className="h-full p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 flex items-center justify-center">
                    {React.createElement(steps[activeStep].icon, { size: 32 })}
                  </div>
                  <h4 className="text-2xl font-bold">{steps[activeStep].title}</h4>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {steps[activeStep].desc}
                </p>
                
                {activeStep === 0 && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-mono text-sm text-violet-600">
                    z = (x - μ) / σ
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-mono text-sm text-violet-600">
                    Av = λv
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Explained Variance Section */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="text-violet-600" />
                📊 Explained Variance
              </h4>
              <p className="text-sm text-slate-500">How much information each component keeps.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Individual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Cumulative</span>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={varianceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12 }}
                  unit="%"
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="variance" radius={[8, 8, 0, 0]} barSize={60}>
                  {varianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#8b5cf6' : index === 1 ? '#a78bfa' : '#c4b5fd'} />
                  ))}
                </Bar>
                <Line 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 p-6 bg-violet-50 dark:bg-violet-900/20 rounded-2xl border border-violet-100 dark:border-violet-800">
            <p className="text-sm font-bold text-violet-700 dark:text-violet-400">
              👉 Example: PC1 (80%) + PC2 (15%) = 95% information kept using only 2 components!
            </p>
          </div>
        </div>
      </section>

      {/* Advantages, Limitations & Applications */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-lg font-bold mb-6 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 size={20} />
            ✅ Advantages
          </h4>
          <ul className="space-y-3 text-sm text-emerald-600 dark:text-emerald-500">
            <li>• Reduces dimensionality</li>
            <li>• Removes multicollinearity</li>
            <li>• Improves model performance</li>
            <li>• Useful for visualization</li>
          </ul>
        </div>
        <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[32px] border border-rose-100 dark:border-rose-800">
          <h4 className="text-lg font-bold mb-6 text-rose-700 dark:text-rose-400 flex items-center gap-2">
            <AlertTriangle size={20} />
            ⚠️ Limitations
          </h4>
          <ul className="space-y-3 text-sm text-rose-600 dark:text-rose-500">
            <li>• Loses interpretability</li>
            <li>• Linear method only</li>
            <li>• Sensitive to scaling</li>
            <li>• Information loss</li>
          </ul>
        </div>
        <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[32px] border border-blue-100 dark:border-blue-800">
          <h4 className="text-lg font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
            <Zap size={20} />
            📦 Applications
          </h4>
          <ul className="space-y-3 text-sm text-blue-600 dark:text-blue-500">
            <li>• Image compression</li>
            <li>• Face recognition</li>
            <li>• Data visualization</li>
            <li>• Noise reduction</li>
          </ul>
        </div>
      </section>

      {/* PCA vs Feature Selection */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-violet-600" />
            ⚖️ PCA vs Feature Selection
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">PCA</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature Selection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Type", p: "Transformation", s: "Selection" },
                  { f: "Output", p: "New features", s: "Original features" },
                  { f: "Interpretability", p: "Low", s: "High" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-violet-600 font-medium">{row.p}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.s}</td>
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
            🧠 Easy Intuition
          </h4>
          <div className="space-y-6">
            <p className="text-slate-400 italic">“Imagine projecting a 3D object’s shadow onto 2D:”</p>
            <div className="flex items-center gap-8">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Box size={64} className="text-violet-400 animate-pulse" />
                <div className="absolute -bottom-4 text-[10px] font-bold text-slate-500">3D Object</div>
              </div>
              <ArrowRight className="text-slate-600" />
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="w-20 h-20 bg-violet-500/20 border border-violet-500/40 rounded-lg flex items-center justify-center">
                  <Box size={40} className="text-violet-500 opacity-50" />
                </div>
                <div className="absolute -bottom-4 text-[10px] font-bold text-slate-500">2D Shadow</div>
              </div>
            </div>
            <p className="text-sm text-slate-400">You keep the most important shape (information) but reduce dimensions!</p>
          </div>
        </div>

        <div className="p-8 bg-violet-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-violet-50 leading-relaxed">
            PCA is a powerful tool for simplifying complex data. By transforming features into principal components, it allows us to focus on the most significant patterns while discarding noise and redundancy, making it essential for both analysis and visualization.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};
