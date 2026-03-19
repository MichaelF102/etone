import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { FPGrowthVisualization } from '../Visualizations';
import { 
  GitBranch, 
  Zap, 
  Database, 
  Search, 
  Scaling, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Lightbulb,
  GraduationCap,
  Box,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const FPGrowth: React.FC = () => {
  const steps = [
    { 
      title: "Scan 1: Frequency Count", 
      desc: "Scan the database once to find the support of each item. Sort items in descending order of frequency." 
    },
    { 
      title: "Scan 2: Build FP-Tree", 
      desc: "Scan the database again to insert transactions into the tree. Common prefixes are shared, compressing the data." 
    },
    { 
      title: "Mining patterns", 
      desc: "Extract frequent itemsets directly from the tree using conditional pattern bases and conditional FP-trees." 
    }
  ];

  return (
    <TopicLayout 
      id="fp-growth"
      title="FP-Growth Algorithm"
      subtitle="Frequent Pattern Growth: Mining without candidate generation."
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
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is FP-Growth?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-indigo-50">
              FP-Growth is an efficient algorithm for frequent itemset mining that avoids the costly candidate generation step used by Apriori. It uses a compact tree structure called an **FP-Tree**.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lightbulb className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Mine patterns directly from a compressed tree structure.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FP-Growth? */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Scaling className="text-indigo-600" />
          🚀 Why FP-Growth?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-rose-500">
              <AlertTriangle size={20} />
              Apriori's Weakness
            </h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                Generates massive amounts of candidate itemsets.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                Requires multiple full database scans (one for each itemset size).
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-emerald-500">
              <CheckCircle2 size={20} />
              FP-Growth's Solution
            </h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                Compresses the database into a compact tree.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                Only requires 2 database scans regardless of pattern length.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Box className="text-indigo-600" />
          🌳 Interactive FP-Tree Visualizer
        </h3>
        <FPGrowthVisualization />
      </section>

      {/* Algorithm Steps */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-indigo-600" />
          🔄 Algorithm Steps
        </h3>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm group hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
            <Scaling className="text-indigo-600" />
            ⚡ Apriori vs FP-Growth
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
                  { f: "Candidate Gen", a: "Yes (Expensive)", fpg: "No (Efficient)" },
                  { f: "DB Scans", a: "Multiple", fpg: "Exactly 2" },
                  { f: "Structure", a: "Flat / Hash", fpg: "Tree (Compressed)" },
                  { f: "Speed", a: "Slow", fpg: "Fast" },
                  { f: "Memory", a: "Lower", fpg: "Higher (Tree overhead)" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-4 text-slate-500">{row.a}</td>
                    <td className="p-4 text-indigo-600 font-bold">{row.fpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-yellow-400" size={24} />
            🧠 Simple Intuition
          </h4>
          <p className="text-slate-400 italic mb-6">“Shared structure saves time:”</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">1</div>
              <p className="text-sm">Store patterns in a tree.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">2</div>
              <p className="text-sm">Reuse shared prefixes to compress data.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-indigo-600 text-white rounded-[32px] shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-yellow-300" size={24} />
            Summary
          </h4>
          <p className="text-indigo-50 leading-relaxed">
            FP-Growth is the modern standard for frequent itemset mining. By eliminating the need for candidate generation and reducing database scans to just two, it provides a massive performance boost over the traditional Apriori algorithm, especially on large, dense datasets.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default FPGrowth;
