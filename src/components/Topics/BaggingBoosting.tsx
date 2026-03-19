import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  GitPullRequest, 
  GitMerge, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Info,
  Lightbulb,
  Clock,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

export const BaggingBoosting: React.FC = () => {
  return (
    <TopicLayout 
      id="bagging-boosting"
      title="Bagging vs Boosting"
      subtitle="Understanding the two most powerful ensemble learning paradigms."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Layers size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold">The Core Difference</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              Both are ensemble learning techniques, but they solve different fundamental problems in machine learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Bagging</p>
                  <p className="text-lg font-bold">Reduces Variance</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Boosting</p>
                  <p className="text-lg font-bold">Reduces Bias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagging Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
            <GitPullRequest size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold">1. Bagging</h3>
            <p className="text-slate-500 font-medium">Bootstrap Aggregating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[32px] border border-blue-100 dark:border-blue-800">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="text-blue-600" size={20} />
                Core Idea
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Train multiple models independently (in parallel) on different random samples of data.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="text-blue-600" size={20} />
                Working Steps
              </h4>
              <div className="space-y-4">
                {[
                  "Create multiple datasets using bootstrap sampling (with replacement)",
                  "Train a model on each dataset independently",
                  "Combine predictions using Voting (Classification) or Averaging (Regression)"
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-600" size={20} />
                Key Features
              </h4>
              <ul className="space-y-3">
                {[
                  "Models are trained independently (Parallel)",
                  "Same algorithm used multiple times",
                  "Reduces variance and prevents overfitting",
                  "Example: Random Forest"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="text-blue-500" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">Advantages</h5>
                <ul className="text-xs space-y-1 text-emerald-600 dark:text-emerald-500">
                  <li>• Easy to implement</li>
                  <li>• Stable predictions</li>
                  <li>• Parallelizable</li>
                </ul>
              </div>
              <div className="p-5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-100 dark:border-rose-800">
                <h5 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-2">Disadvantages</h5>
                <ul className="text-xs space-y-1 text-rose-600 dark:text-rose-500">
                  <li>• Doesn't reduce bias</li>
                  <li>• Memory intensive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boosting Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <GitMerge size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold">2. Boosting</h3>
            <p className="text-slate-500 font-medium">Sequential Learning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[32px] border border-indigo-100 dark:border-indigo-800">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="text-indigo-600" size={20} />
                Core Idea
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Train models sequentially, where each new model focuses on correcting the errors made by previous models.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="text-indigo-600" size={20} />
                Working Steps
              </h4>
              <div className="space-y-4">
                {[
                  "Train the first model on the initial dataset",
                  "Identify misclassified points (errors)",
                  "Increase the weight of misclassified points",
                  "Train the next model focusing on these errors",
                  "Combine all models into a final weighted sum"
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="text-indigo-600" size={20} />
                Key Features
              </h4>
              <ul className="space-y-3">
                {[
                  "Models trained sequentially (One by one)",
                  "Focus on hard examples (errors)",
                  "Reduces bias and variance",
                  "Algorithms: AdaBoost, XGBoost, CatBoost"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="text-indigo-500" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">Advantages</h5>
                <ul className="text-xs space-y-1 text-emerald-600 dark:text-emerald-500">
                  <li>• High accuracy</li>
                  <li>• Handles complex patterns</li>
                  <li>• State-of-the-art results</li>
                </ul>
              </div>
              <div className="p-5 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-100 dark:border-rose-800">
                <h5 className="font-bold text-rose-700 dark:text-rose-400 text-sm mb-2">Disadvantages</h5>
                <ul className="text-xs space-y-1 text-rose-600 dark:text-rose-500">
                  <li>• Sensitive to noise</li>
                  <li>• Slower (Sequential)</li>
                  <li>• Risk of overfitting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-blue-600" />
            ⚖️ Bagging vs Boosting (Important Comparison)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Bagging</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Boosting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Training", b: "Parallel", bo: "Sequential" },
                  { f: "Goal", b: "Reduce variance", bo: "Reduce bias" },
                  { f: "Data Sampling", b: "Random (with replacement)", bo: "Weighted sampling" },
                  { f: "Focus", b: "All data equally", bo: "Focus on errors" },
                  { f: "Overfitting", b: "Reduced", bo: "Can overfit if not tuned" },
                  { f: "Speed", b: "Faster", bo: "Slower" },
                  { f: "Example", b: "Random Forest", bo: "AdaBoost, XGBoost" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-blue-600 font-medium">{row.b}</td>
                    <td className="p-4 text-indigo-600 font-medium">{row.bo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intuition & Analogy */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="text-yellow-400" size={24} />
            🧠 Key Intuition
          </h4>
          <div className="space-y-6">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs font-bold text-blue-400 uppercase mb-1">Bagging</p>
              <p className="text-sm italic">“Train many models independently and average them”</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Boosting</p>
              <p className="text-sm italic">“Learn from mistakes step by step”</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-blue-600 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-200" size={24} />
            💡 Simple Analogy
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">👨🎓</div>
              <div>
                <p className="font-bold text-sm">Bagging</p>
                <p className="text-xs opacity-80">Many students solve same problem independently → take average answer</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">👨🏫</div>
              <div>
                <p className="font-bold text-sm">Boosting</p>
                <p className="text-xs opacity-80">Teacher corrects mistakes step-by-step → student improves gradually</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};
