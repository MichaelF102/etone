import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Users, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  GitMerge, 
  GitPullRequest, 
  Brain, 
  Cpu, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Info,
  Lightbulb
} from 'lucide-react';
import { motion } from 'motion/react';

export const EnsembleLearning: React.FC = () => {
  return (
    <TopicLayout 
      id="ensemble-learning"
      title="Ensemble Learning"
      subtitle="Combining multiple models to produce a stronger, more accurate predictor."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Users size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Ensemble Learning?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-indigo-50">
              Ensemble Learning is a technique where multiple models (weak learners) are combined to produce a stronger and more accurate model.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                Idea: “Many weak models → One powerful model”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Ensemble Learning? */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <ShieldCheck className="text-indigo-600" />
          Why Use Ensemble Learning?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Improves Accuracy", desc: "Reduces errors by combining multiple perspectives.", icon: Target, color: "indigo" },
            { title: "Reduces Overfitting", desc: "Averages out individual model biases.", icon: ShieldCheck, color: "violet" },
            { title: "Handles Complex Data", desc: "Captures intricate patterns better than single models.", icon: BarChart3, color: "purple" },
            { title: "Stable Predictions", desc: "Less sensitive to small changes in training data.", icon: TrendingUp, color: "blue" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm"
            >
              <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/30 text-${item.color}-600 flex items-center justify-center mb-4`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Types of Ensemble Methods */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-indigo-600" />
          Types of Ensemble Methods
        </h3>
        
        <div className="space-y-8">
          {/* Simple Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-indigo-600" size={20} />
                1. Max Voting
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Used in classification where multiple models vote, and the majority class is selected.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Example</p>
                <div className="space-y-1 text-xs font-mono">
                  <p>M1: A | M2: B | M3: A</p>
                  <p className="text-indigo-600 font-bold">Result: A (2 vs 1)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-violet-600" size={20} />
                2. Averaging
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Used in regression problems, where predictions are averaged for the final output.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Example</p>
                <div className="space-y-1 text-xs font-mono">
                  <p>M1: 100 | M2: 120 | M3: 110</p>
                  <p className="text-violet-600 font-bold">Result: (100+120+110)/3 = 110</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="text-blue-600" size={20} />
                3. Weighted Average
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Similar to averaging, but better models have higher influence (weights).</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Example</p>
                <div className="space-y-1 text-xs font-mono">
                  <p>M1(0.5): 100 | M2(0.3): 120</p>
                  <p className="text-blue-600 font-bold">Result: 100*0.5 + 120*0.3 = 86</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">4. Stacking</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Meta-Model Learning</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Combines multiple models using a meta-model that learns how to best combine their predictions.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center text-xs font-bold">1</div>
                  <p>Train base models (Decision Tree, SVM, KNN)</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center text-xs font-bold">2</div>
                  <p>Collect their predictions as new features</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center text-xs font-bold">3</div>
                  <p>Train meta-model (Logistic Regression) on these</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600 flex items-center justify-center">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">5. Blending</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Simpler Stacking</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Similar to stacking but uses a holdout validation set instead of full cross-validation.</p>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                  <span>Feature</span>
                  <span>Stacking</span>
                  <span>Blending</span>
                </div>
                <div className="flex justify-between text-sm py-1 border-b border-slate-100 dark:border-slate-800">
                  <span>Data</span>
                  <span className="text-indigo-600">Full Dataset</span>
                  <span className="text-violet-600">Validation Set</span>
                </div>
                <div className="flex justify-between text-sm py-1">
                  <span>Complexity</span>
                  <span className="text-indigo-600">Higher</span>
                  <span className="text-violet-600">Simpler</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bagging & Boosting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/10 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/30 rounded-[32px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <GitPullRequest size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">6. Bagging</h4>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Parallel Models</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Trains models on different random samples (with replacement) and combines results to reduce variance.</p>
              <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 mb-4">
                <CheckCircle2 size={16} />
                Example: Random Forest
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
                <p className="text-xs text-slate-500 italic">"Bootstrap Aggregating: Reduces overfitting by averaging independent models."</p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/10 dark:to-slate-900 border border-violet-100 dark:border-violet-900/30 rounded-[32px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500 text-white flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <GitMerge size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">7. Boosting</h4>
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Sequential Learning</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Sequentially trains models where each new model focuses on correcting previous errors to reduce bias.</p>
              <div className="flex items-center gap-2 text-sm font-bold text-violet-600 mb-4">
                <CheckCircle2 size={16} />
                Algorithms: AdaBoost, XGBoost, CatBoost
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-violet-900/20">
                <p className="text-xs text-slate-500 italic">"Focuses on misclassified data: High accuracy for complex patterns."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-indigo-600" />
            ⚖️ Quick Comparison
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Method</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Type</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Key Idea</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { m: "Max Voting", t: "Classification", k: "Majority decision" },
                  { m: "Averaging", t: "Regression", k: "Mean output" },
                  { m: "Weighted Avg", t: "Regression", k: "Weighted mean" },
                  { m: "Stacking", t: "Both", k: "Meta-model" },
                  { m: "Blending", t: "Both", k: "Simple stacking" },
                  { m: "Bagging", t: "Both", k: "Parallel models" },
                  { m: "Boosting", t: "Both", k: "Sequential learning" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.m}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{row.t}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400 italic">{row.k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Memory Trick */}
      <section className="mb-16">
        <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-800 flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
            <Brain size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">🧠 Easy Memory Trick</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full border border-indigo-200 dark:border-indigo-700">Voting/Avg → <strong>Simple</strong></span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full border border-indigo-200 dark:border-indigo-700">Bagging → <strong>Parallel</strong></span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full border border-indigo-200 dark:border-indigo-700">Boosting → <strong>Sequential</strong></span>
              <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full border border-indigo-200 dark:border-indigo-700">Stacking → <strong>Meta</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Learning Section */}
      <section className="mb-16 pt-16 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <Cpu size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold">Meta Learning</h3>
            <p className="text-slate-500 font-medium">Learning to Learn</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800 mb-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info className="text-emerald-600" size={20} />
                Definition
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Meta Learning is a technique where a model learns how to learn better from past experiences across different tasks.
              </p>
              <div className="inline-flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <Lightbulb className="text-yellow-500" size={20} />
                <p className="text-sm font-bold">“Learning how to learn.”</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Zap className="text-emerald-600" size={20} />
                Key Idea
              </h4>
              <p className="text-slate-600 dark:text-slate-400">Instead of solving just one problem, the model learns patterns across multiple problems and uses that knowledge to adapt quickly to new ones.</p>
              
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h5 className="font-bold mb-3 flex items-center gap-2">
                  <ArrowRight className="text-emerald-600" size={16} />
                  Example (Intuition)
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Normal ML</p>
                    <p className="text-xs">Learn to classify cats vs dogs</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-700">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Meta Learning</p>
                    <p className="text-xs">Learn how to quickly learn any classification task</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <Layers className="text-emerald-600" size={20} />
              Types of Meta Learning
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Model-Based", desc: "Use models that can quickly adapt parameters (e.g., RNNs).", icon: Cpu },
                { title: "Metric-Based", desc: "Learn similarity between data points (e.g., Siamese Networks).", icon: BarChart3 },
                { title: "Optimization-Based", desc: "Improve the learning algorithm itself (e.g., MAML).", icon: Zap },
              ].map((type, i) => (
                <div key={i} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <type.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{type.title}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-emerald-600 rounded-3xl text-white shadow-lg shadow-emerald-600/20">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Why it matters?
              </h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Works with small data (few-shot)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Faster learning & adaptation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Better generalization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Traditional vs Meta Learning Table */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-emerald-600" />
            ⚖️ Meta Learning vs Traditional ML
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Traditional ML</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Meta Learning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Learning", t: "Single task", m: "Multiple tasks" },
                  { f: "Adaptability", t: "Low", m: "High" },
                  { f: "Data requirement", t: "High", m: "Low" },
                  { f: "Speed", t: "Slow", m: "Fast adaptation" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{row.t}</td>
                    <td className="p-4 text-emerald-600 font-medium">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};
