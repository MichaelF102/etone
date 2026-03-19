import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  RefreshCw, 
  CheckCircle2, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  Info,
  Lightbulb,
  GraduationCap,
  Clock,
  AlertTriangle,
  LayoutGrid,
  Divide
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const CrossValidation: React.FC = () => {
  return (
    <TopicLayout 
      id="cross-validation"
      title="Cross Validation"
      subtitle="Evaluating model performance by splitting and testing data multiple times."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <RefreshCw size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Cross Validation?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-indigo-50">
              Cross Validation is a technique used to evaluate the performance of a machine learning model by splitting data into multiple parts and testing it multiple times.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Train and test the model multiple times on different data splits.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cross Validation? */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Target className="text-indigo-600" />
          🎯 Why Cross Validation?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Avoids Overfitting", desc: "Ensures the model generalizes well to unseen data.", icon: ShieldCheck, color: "indigo" },
            { title: "Reliable Estimate", desc: "Provides a more accurate performance metric.", icon: BarChart3, color: "blue" },
            { title: "Efficient Data Usage", desc: "Uses all available data for both training and testing.", icon: LayoutGrid, color: "violet" },
            { title: "Better than Single Split", desc: "Reduces the risk of a lucky or unlucky split.", icon: TrendingUp, color: "emerald" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                item.color === 'indigo' ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600" :
                item.color === 'blue' ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600" :
                item.color === 'violet' ? "bg-violet-50 dark:bg-violet-900/30 text-violet-600" :
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

      {/* Basic Idea Visualization */}
      <section className="mb-16">
        <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] border border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Zap className="text-indigo-600" size={20} />
            🔄 Basic Idea: Single Split vs Multiple Splits
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">👉 One Split (Train-Test)</p>
              <div className="flex h-12 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="w-4/5 bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">Train (80%)</div>
                <div className="w-1/5 bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">Test (20%)</div>
              </div>
              <p className="text-xs text-slate-500 italic">"Model is evaluated only once. Result depends heavily on this specific split."</p>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">👉 Multiple Splits (Cross Validation)</p>
              <div className="space-y-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex h-8 w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 opacity-80">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div 
                        key={j} 
                        className={cn(
                          "flex-1 flex items-center justify-center text-[10px] font-bold text-white border-r border-white/10 last:border-0",
                          i === j ? "bg-emerald-500" : "bg-indigo-500"
                        )}
                      >
                        {i === j ? "Test" : "Train"}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="text-center pt-2">
                  <p className="text-xs font-bold text-indigo-600">... and so on (K times)</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">"Model is trained and tested multiple times. Results are averaged for stability."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cross Validation */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-indigo-600" />
          Types of Cross Validation
        </h3>
        
        <div className="space-y-12">
          {/* K-Fold */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <LayoutGrid size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-bold">1. K-Fold Cross Validation</h4>
                <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">The Standard Approach</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h5 className="font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-indigo-600" size={18} />
                  How it Works
                </h5>
                <div className="space-y-4">
                  {[
                    "Split data into K equal parts (folds)",
                    "Train on (K-1) folds",
                    "Test on the remaining fold",
                    "Repeat K times (each fold acts as test once)",
                    "Take the average accuracy of all K results"
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
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h5 className="font-bold text-sm mb-4">Example (K = 5)</h5>
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 w-12">Fold {i+1}</span>
                        <div className="flex-1 flex h-4 rounded-full overflow-hidden border border-slate-200 dark:border-slate-600">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div 
                              key={j} 
                              className={cn(
                                "flex-1 border-r border-white/10 last:border-0",
                                i === j ? "bg-emerald-500" : "bg-indigo-500"
                              )}
                            />
                          ))}
                        </div>
                        <span className={cn(
                          "text-[10px] font-bold w-12 text-right",
                          i % 2 === 0 ? "text-emerald-600" : "text-indigo-600"
                        )}>
                          {i === 0 ? "Test" : "Train"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                    <h6 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs mb-2">Advantages</h6>
                    <ul className="text-[10px] space-y-1 text-emerald-600 dark:text-emerald-500">
                      <li>• Uses all data</li>
                      <li>• Reduces bias</li>
                      <li>• More stable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 flex items-center justify-center mb-6">
                <Divide size={20} />
              </div>
              <h4 className="text-lg font-bold mb-2">2. Stratified K-Fold</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Ensures each fold has the same class proportion as the original dataset.
              </p>
              <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-100 dark:border-violet-800">
                <p className="text-[10px] font-bold text-violet-600">👉 Essential for imbalanced datasets (e.g., 90% A, 10% B)</p>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
                <Target size={20} />
              </div>
              <h4 className="text-lg font-bold mb-2">3. Leave-One-Out (LOOCV)</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Each data point is used as a test set exactly once.
              </p>
              <div className="space-y-2">
                <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1"><CheckCircle2 size={10} /> Max data usage</p>
                <p className="text-[10px] text-rose-600 font-bold flex items-center gap-1"><AlertTriangle size={10} /> Very slow (n iterations)</p>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6">
                <RefreshCw size={20} />
              </div>
              <h4 className="text-lg font-bold mb-2">4. Repeated K-Fold</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Repeats the K-Fold process multiple times with different random shuffles.
              </p>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                <p className="text-[10px] font-bold text-indigo-600">👉 Provides more robust and reliable results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-indigo-600" />
            ⚖️ Cross Validation vs Train-Test Split
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Train-Test Split</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Cross Validation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Splits", t: "One", c: "Multiple" },
                  { f: "Accuracy", t: "Less reliable", c: "More reliable" },
                  { f: "Data usage", t: "Less", c: "Efficient" },
                  { f: "Stability", t: "Low", c: "High" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.t}</td>
                    <td className="p-4 text-indigo-600 font-medium">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Concept & Formula */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-indigo-400" size={24} />
              🧠 Key Concept: Final Performance
            </h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
              <p className="text-sm text-slate-400 mb-4">The final score is the average of all fold scores:</p>
              <div className="inline-block p-4 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                <span className="text-2xl font-mono font-bold">
                  Final Score = <span className="text-indigo-400">Σ(Fold Scores)</span> / <span className="text-emerald-400">K</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="text-indigo-600" size={20} />
              📦 Example (Accuracy)
            </h4>
            <div className="space-y-3">
              {[90, 88, 92, 89, 91].map((acc, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-xs font-bold text-slate-400">Fold {i+1}</span>
                  <div className="flex-1 mx-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: `${acc}%` }} />
                  </div>
                  <span className="text-xs font-bold text-indigo-600">{acc}%</span>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="font-bold text-sm">Final Accuracy</span>
                <span className="text-xl font-bold text-emerald-600">90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use & Analogy */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[32px] border border-indigo-100 dark:border-indigo-800">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-indigo-600" size={24} />
            ⚠️ When to Use
          </h4>
          <ul className="space-y-4">
            {[
              "Small datasets (where every point matters)",
              "Model comparison (choosing between algorithms)",
              "Hyperparameter tuning (finding best settings)"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-indigo-700 dark:text-indigo-300">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-indigo-600 text-white rounded-[32px] shadow-xl">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-indigo-200" size={24} />
            💡 Real-Life Analogy
          </h4>
          <div className="space-y-6">
            <p className="text-indigo-50 italic">“Like exam practice:”</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">📚</div>
                <div>
                  <p className="font-bold text-sm">Study</p>
                  <p className="text-xs opacity-80">Study different chapters of a book.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">📝</div>
                <div>
                  <p className="font-bold text-sm">Test</p>
                  <p className="text-xs opacity-80">Test yourself multiple times on different sections.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">📊</div>
                <div>
                  <p className="font-bold text-sm">Average</p>
                  <p className="text-xs opacity-80">Average your performance to know your true level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};
