import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Trees, 
  GitBranch, 
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
  Scissors,
  AlertTriangle,
  GraduationCap,
  Search,
  HelpCircle,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export const DecisionTrees: React.FC = () => {
  return (
    <TopicLayout 
      id="decision-trees"
      title="Decision Trees"
      subtitle="A flowchart-like structure for classification and regression."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Trees size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is a Decision Tree?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-emerald-50">
              A Decision Tree is a supervised learning algorithm used for classification and regression, where data is split into branches based on feature values to make predictions.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “A flowchart-like structure that makes decisions step-by-step.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure of a Decision Tree */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <GitBranch className="text-emerald-600" />
          🌲 Structure of a Decision Tree
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Root Node", desc: "Top node representing the entire dataset.", icon: Target, color: "emerald" },
            { title: "Internal Nodes", desc: "Decision points that split based on features.", icon: Layers, color: "teal" },
            { title: "Branches", desc: "Outcomes of decisions leading to next nodes.", icon: ArrowRight, color: "cyan" },
            { title: "Leaf Nodes", desc: "Final output (class or numeric value).", icon: CheckCircle2, color: "blue" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/30 text-${item.color}-600 flex items-center justify-center mb-4`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="mb-16">
        <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] border border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-emerald-600" size={20} />
            🔄 How Decision Tree Works
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: 1, title: "Select Feature", desc: "Choose the best feature to split the data." },
                { step: 2, title: "Divide Data", desc: "Divide dataset based on that feature's values." },
                { step: 3, title: "Repeat", desc: "Repeat process for subsets recursively." },
              ].map((s, i) => (
                <div key={i} className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {s.step}
                  </div>
                  <h5 className="font-bold mb-2">{s.title}</h5>
                  <p className="text-xs text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Info size={16} />
                Stopping Criteria: Stop when data is pure OR no more features left.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Splitting Criteria */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Scissors className="text-emerald-600" />
          🎯 Splitting Criteria (Very Important)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Entropy */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🌀</span> Entropy
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Measures impurity or randomness in the dataset.</p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-mono text-xs mb-6 overflow-x-auto">
              Entropy(S) = -Σ pᵢ log₂(pᵢ)
            </div>
            <ul className="text-xs space-y-2 text-slate-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Entropy = 0 → Pure</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Entropy = High → Mixed</li>
            </ul>
          </div>

          {/* Information Gain */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📈</span> Information Gain
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Reduction in entropy after a split.</p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-mono text-xs mb-6 overflow-x-auto">
              IG = E(parent) - Σ weighted E(children)
            </div>
            <p className="text-xs font-bold text-emerald-600">👉 Choose feature with highest IG</p>
          </div>

          {/* Gini Index */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span> Gini Index
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Another impurity measure used in CART algorithms.</p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl font-mono text-xs mb-6 overflow-x-auto">
              Gini = 1 - Σ pᵢ²
            </div>
            <p className="text-xs font-bold text-emerald-600">👉 Lower Gini → Better split</p>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="mb-16">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[40px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🎾</span> Example: Play Tennis?
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <th className="p-3 border-b border-slate-100 dark:border-slate-800">Weather</th>
                    <th className="p-3 border-b border-slate-100 dark:border-slate-800">Humidity</th>
                    <th className="p-3 border-b border-slate-100 dark:border-slate-800">Play</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-slate-100 dark:border-slate-800">Sunny</td><td className="p-3 border-b border-slate-100 dark:border-slate-800">High</td><td className="p-3 border-b border-slate-100 dark:border-slate-800 text-rose-500 font-bold">No</td></tr>
                  <tr><td className="p-3 border-b border-slate-100 dark:border-slate-800">Sunny</td><td className="p-3 border-b border-slate-100 dark:border-slate-800">Normal</td><td className="p-3 border-b border-slate-100 dark:border-slate-800 text-emerald-500 font-bold">Yes</td></tr>
                  <tr><td className="p-3 border-b border-slate-100 dark:border-slate-800">Rainy</td><td className="p-3 border-b border-slate-100 dark:border-slate-800">High</td><td className="p-3 border-b border-slate-100 dark:border-slate-800 text-emerald-500 font-bold">Yes</td></tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-emerald-100 dark:border-emerald-800">
              <p className="text-sm font-bold mb-4">Tree might split:</p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg font-bold">Root</div>
                  <ArrowRight size={16} className="text-slate-400" />
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">Weather</div>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg font-bold">Internal</div>
                  <ArrowRight size={16} className="text-slate-400" />
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">Humidity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types, Overfitting & Pruning */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Scissors className="text-emerald-600" size={24} />
            ✂️ Types of Decision Trees
          </h4>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="font-bold text-sm mb-1">Classification Tree</p>
              <p className="text-xs text-slate-500">Output = Class (e.g., Yes/No)</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="font-bold text-sm mb-1">Regression Tree</p>
              <p className="text-xs text-slate-500">Output = Numeric value (e.g., Price)</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-rose-500" size={24} />
            ⚠️ Overfitting & Pruning
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Tree becomes too complex and memorizes data instead of learning patterns.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800">
              <p className="font-bold text-xs mb-1">Pre-Pruning</p>
              <p className="text-[10px]">Stop early before tree gets too deep.</p>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
              <p className="font-bold text-xs mb-1">Post-Pruning</p>
              <p className="text-[10px]">Remove unnecessary branches after building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <h4 className="text-xl font-bold mb-6 text-emerald-700 dark:text-emerald-400">✅ Advantages</h4>
          <ul className="space-y-3">
            {[
              "Easy to understand and interpret",
              "No need for data scaling/normalization",
              "Handles both categorical and numerical data",
              "Visual and highly interpretable"
            ].map((adv, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-emerald-600">
                <CheckCircle2 size={16} />
                {adv}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 bg-rose-50 dark:bg-rose-900/20 rounded-[32px] border border-rose-100 dark:border-rose-800">
          <h4 className="text-xl font-bold mb-6 text-rose-700 dark:text-rose-400">❌ Disadvantages</h4>
          <ul className="space-y-3">
            {[
              "High risk of overfitting",
              "Unstable (small data changes → different tree)",
              "Biased toward dominant features",
              "Can be computationally expensive for deep trees"
            ].map((dis, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-rose-600">
                <AlertTriangle size={16} />
                {dis}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <TrendingUp className="text-emerald-600" />
          📦 Real-World Applications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Loan Approval", icon: "💰" },
            { title: "Medical Diagnosis", icon: "🏥" },
            { title: "Customer Seg.", icon: "👥" },
            { title: "Fraud Detection", icon: "🛡️" },
          ].map((app, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center shadow-sm">
              <div className="text-3xl mb-3">{app.icon}</div>
              <p className="text-sm font-bold">{app.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="text-emerald-600" />
            ⚖️ Decision Tree vs Other Models
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Decision Tree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Interpretability", v: "High" },
                  { f: "Speed", v: "Fast" },
                  { f: "Overfitting", v: "High" },
                  { f: "Accuracy", v: "Medium" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-emerald-600 font-medium">{row.v}</td>
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
            <GraduationCap className="text-yellow-400" size={24} />
            🧠 Intuition (Very Important)
          </h4>
          <p className="text-slate-400 mb-6">Think like a series of questions:</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
              <HelpCircle size={18} className="text-emerald-400" />
              <p className="text-sm">Is weather sunny?</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 ml-6">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <p className="text-sm">Yes → Check humidity</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 ml-6">
              <X size={18} className="text-rose-400" />
              <p className="text-sm">No → Play</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-emerald-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-emerald-50 leading-relaxed">
            Decision Trees are intuitive, visual models that mimic human decision-making. While powerful and easy to explain, they require careful tuning (pruning) to avoid overfitting and ensure they generalize well to new data.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};
