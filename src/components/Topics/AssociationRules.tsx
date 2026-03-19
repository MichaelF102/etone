import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { AprioriVisualization, AssociationRuleVisualization } from '../Visualizations';
import { 
  ShoppingCart, 
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
  Database,
  Link as LinkIcon,
  BrainCircuit
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const AssociationRules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'apriori' | 'fpgrowth'>('apriori');

  const aprioriSteps = [
    { title: "Generate L1", desc: "Count frequency of each item and remove those below minimum support." },
    { title: "Generate C2", desc: "Combine frequent 1-itemsets to form candidate pairs." },
    { title: "Prune", desc: "Remove itemsets whose subsets are not frequent (Apriori Principle)." },
    { title: "Repeat", desc: "Generate C3, C4... until no more frequent itemsets can be found." },
    { title: "Generate Rules", desc: "Create association rules and apply confidence threshold." },
  ];

  return (
    <TopicLayout 
      id="association-rules"
      title="Apriori Algorithm"
      subtitle="Discovering frequent itemsets and association rules."
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShoppingCart size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <LinkIcon size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Apriori?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              Apriori is a classic algorithm used for association rule mining. It identifies frequent individual items in a database and extends them to larger itemsets as long as those itemsets appear sufficiently often.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Find items that are frequently bought together.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea: Apriori Principle */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <BrainCircuit className="text-blue-600" />
          🧠 The Apriori Principle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">Frequent Subset Property</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If an itemset is frequent, then all of its subsets must also be frequent. This allows us to "prune" the search space significantly.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center mb-6">
              <AlertTriangle size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">Infrequent Superset Property</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If a subset is not frequent, then any larger set containing it cannot be frequent. We don't even need to check them!
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Activity className="text-blue-600" />
          🔑 Key Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Support", 
              formula: "P(A ∩ B)", 
              desc: "How frequently an itemset appears in dataset.",
              color: "blue"
            },
            { 
              title: "Confidence", 
              formula: "P(B|A)", 
              desc: "Probability that B occurs given A (Reliability).",
              color: "cyan"
            },
            { 
              title: "Lift", 
              formula: "Conf / Supp(B)", 
              desc: "Strength of association. >1 is strong, 1 is independent.",
              color: "indigo"
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className={cn(
                "text-[10px] font-bold uppercase tracking-widest mb-2",
                item.color === 'blue' ? "text-blue-600" : item.color === 'cyan' ? "text-cyan-600" : "text-indigo-600"
              )}>
                {item.title}
              </div>
              <div className="text-2xl font-black mb-2 font-mono">{item.formula}</div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Zap className="text-blue-600" />
          ✨ Rule Discovery Visualization
        </h3>
        <AssociationRuleVisualization />
      </section>

      {/* Types of Association Rules */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <LayoutGrid className="text-blue-600" />
          📊 Types of Association Rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" />
              1. Boolean Rules
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Concerned with the presence or absence of items.
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-sm font-mono">
              Milk → Bread
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="text-blue-500" />
              2. Quantitative Rules
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Based on numerical values or ranges.
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-sm font-mono">
              Age [20-30] → Buys Gadgets
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Steps */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-blue-600" />
          🔄 Algorithm Steps
        </h3>
        <div className="space-y-4">
          {aprioriSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition-all hover:border-blue-300">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: Apriori vs FP-Growth */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-blue-600" />
            ⚖️ Apriori vs FP-Growth
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Apriori</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">FP-Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Candidate Generation", a: "Yes", fpg: "No" },
                  { f: "Speed", a: "Slow", fpg: "Fast" },
                  { f: "Database Scans", a: "Multiple", fpg: "Fewer (2)" },
                  { f: "Memory Usage", a: "Lower", fpg: "Higher" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-blue-600 font-medium">{row.a}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">{row.fpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intuition & Summary */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-yellow-400" size={24} />
            🧠 Simple Intuition
          </h4>
          <p className="text-slate-400 italic mb-6">“Pruning the search space:”</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
              <p className="text-sm">If people rarely buy <span className="text-blue-400 font-bold">Milk + Laptop</span>...</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
              <p className="text-sm">...then we don't need to check <span className="text-blue-400 font-bold">Milk + Laptop + Bread</span>.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-blue-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-blue-50 leading-relaxed">
            The Apriori algorithm is the foundation of association rule mining. By using the Apriori principle to prune infrequent itemsets, it efficiently finds patterns in transactional data, enabling businesses to understand customer behavior and optimize their offerings.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default AssociationRules;
