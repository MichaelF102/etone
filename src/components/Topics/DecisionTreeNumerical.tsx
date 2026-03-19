import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { DecisionTreeVisualization } from '../Visualizations';
import { 
  Calculator, 
  Database, 
  GitBranch, 
  Zap, 
  Table as TableIcon,
  CheckCircle2,
  Info,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

const DecisionTreeNumerical: React.FC = () => {
  return (
    <TopicLayout 
      id="decision-tree-numerical"
      title="Decision Tree Numerical"
      subtitle="Step-by-step calculation of Entropy and Information Gain."
    >
      {/* Initial Dataset */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Database className="text-blue-600" />
          📊 Initial Dataset
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          The example begins with a dataset of 5 students, detailing their study hours, attendance, previous test scores, and their final pass/fail results.
        </p>
        <div className="overflow-x-auto rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Student</th>
                <th className="p-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Study Hours</th>
                <th className="p-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Attendance (%)</th>
                <th className="p-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Prev Test Score</th>
                <th className="p-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { s: 'A', h: 2, a: '60%', sc: 40, r: 'Fail' },
                { s: 'B', h: 3, a: '65%', sc: 45, r: 'Fail' },
                { s: 'C', h: 7, a: '85%', sc: 70, r: 'Pass' },
                { s: 'D', h: 8, a: '90%', sc: 75, r: 'Pass' },
                { s: 'E', h: 9, a: '95%', sc: 80, r: 'Pass' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-blue-600">{row.s}</td>
                  <td className="p-4">{row.h}</td>
                  <td className="p-4">{row.a}</td>
                  <td className="p-4">{row.sc}</td>
                  <td className="p-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                      row.r === 'Pass' ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                    )}>
                      {row.r}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          ✨ Interactive Step-by-Step Calculator
        </h3>
        <DecisionTreeVisualization />
      </section>

      {/* Step 1: Parent Entropy */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
          Compute Entropy of the Parent Node
        </h3>
        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            First, we must calculate the impurity of the entire dataset before any splits occur. Out of 5 students, there are 3 "Pass" results and 2 "Fail" results.
          </p>
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 font-mono text-sm">
            Entropy(Parent) = - ( (3/5) * log₂(3/5) + (2/5) * log₂(2/5) )
            <br />
            Entropy(Parent) = - ( 0.6 * -0.736 + 0.4 * -1.322 )
            <br />
            <span className="text-blue-600 font-bold">Total Parent Entropy = 0.971</span>
          </div>
        </div>
      </section>

      {/* Step 2: Information Gain */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">2</div>
          Compute Information Gain for Each Feature Split
        </h3>
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GitBranch className="text-blue-600" size={20} />
              Feature 1: Splitting on "Study Hours &gt; 5"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Left Node (≤ 5h)</p>
                <p className="text-sm">Students A, B (Both Fail). <span className="text-emerald-600 font-bold">Entropy = 0</span> (Pure)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Right Node (&gt; 5h)</p>
                <p className="text-sm">Students C, D, E (All Pass). <span className="text-emerald-600 font-bold">Entropy = 0</span> (Pure)</p>
              </div>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 font-mono text-xs">
              Children Entropy = (2/5 * 0) + (3/5 * 0) = 0
              <br />
              <span className="text-blue-600 font-bold">IG(StudyHours) = 0.971 - 0 = 0.971</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <GitBranch className="text-blue-600" size={20} />
              Feature 2: Splitting on "Attendance &gt; 80%"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Left Node (≤ 80%)</p>
                <p className="text-sm">Students A, B, C (2 Fail, 1 Pass). <span className="text-rose-600 font-bold">Entropy = 0.918</span></p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Right Node (&gt; 80%)</p>
                <p className="text-sm">Students D, E (Both Pass). <span className="text-emerald-600 font-bold">Entropy = 0</span> (Pure)</p>
              </div>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 font-mono text-xs">
              Children Entropy = (3/5 * 0.918) + (2/5 * 0) = 0.551
              <br />
              <span className="text-blue-600 font-bold">IG(Attendance) = 0.971 - 0.551 = 0.42</span>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Best Feature */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">3</div>
          Choosing the Best Feature
        </h3>
        <div className="p-8 bg-slate-900 text-white rounded-[40px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <CheckCircle2 size={160} />
          </div>
          <div className="relative z-10">
            <p className="text-lg opacity-80 mb-8">
              Finally, we compare the Information Gain for all tested features. The feature with the highest Information Gain is chosen as the root node.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { f: 'Study Hours', ig: 0.971, best: true },
                { f: 'Attendance', ig: 0.42, best: false },
                { f: 'Test Score', ig: 0.42, best: false },
              ].map((item, i) => (
                <div key={i} className={cn(
                  "p-6 rounded-2xl border transition-all",
                  item.best ? "bg-white/10 border-white/20" : "bg-black/20 border-white/5"
                )}>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{item.f}</p>
                  <p className="text-3xl font-black">{item.ig}</p>
                  {item.best && (
                    <div className="mt-2 flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase">
                      <CheckCircle2 size={12} />
                      Winner
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default DecisionTreeNumerical;
