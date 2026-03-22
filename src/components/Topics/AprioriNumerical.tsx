import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Calculator, 
  Database, 
  Filter, 
  Layers,
  Link,
  CheckCircle2,
  XCircle,
  Target
} from 'lucide-react';

const AprioriNumerical: React.FC = () => {
  return (
    <TopicLayout 
      id="apriori-numerical"
      title="Apriori Algorithm Numerical"
      subtitle="Step-by-step calculation of frequent itemsets and association rules."
    >
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          Numerical Example: Apriori Algorithm
        </h3>
        
        <div className="space-y-6">
          {/* Initial Dataset & Parameters */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Database size={18} className="text-blue-500" /> Initial Dataset & Parameters
            </h4>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
              <p>The goal is to find frequent itemsets and generate association rules from a transactional dataset.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <p className="font-bold text-blue-700 dark:text-blue-400 mb-1">Minimum Support = 2</p>
                  <p className="text-blue-600 dark:text-blue-300">The minimum frequency an itemset must have to be considered frequent.</p>
                </div>
                <div className="flex-1 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Minimum Confidence = 50%</p>
                  <p className="text-emerald-600 dark:text-emerald-300">The minimum reliability required for an association rule to be considered strong.</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Dataset (Transactions):</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm max-w-md">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">TID</th>
                        <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T1</td><td className="p-3">A, B</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T2</td><td className="p-3">B, D</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T3</td><td className="p-3">B, C</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T4</td><td className="p-3">A, B, D</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T5</td><td className="p-3">A, C</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T6</td><td className="p-3">B, C</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T7</td><td className="p-3">A, C</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T8</td><td className="p-3">A, B, C, E</td></tr>
                      <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">T9</td><td className="p-3">A, B, C</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Filter size={18} className="text-blue-500" /> Step 1: C1 → L1 (Single Items)
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <p>First, calculate the support count (frequency) for each individual item in the dataset to create the Candidate set <strong>C1</strong>.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Candidate Set C1</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Item</th>
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">A</td><td className="p-3">6</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">B</td><td className="p-3">7</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">C</td><td className="p-3">6</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">D</td><td className="p-3">2</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">E</td><td className="p-3 text-rose-600 dark:text-rose-400">1</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Apply Min Support (≥2)</p>
                    <p className="text-blue-700 dark:text-blue-400 flex items-center gap-2 mt-1">👉 Remove E <XCircle size={14} /></p>
                  </div>

                  <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">✅ Frequent Itemset L1</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm border-2 border-emerald-200 dark:border-emerald-800/50 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-emerald-50 dark:bg-emerald-900/20">
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Item</th>
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Support</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">A</td><td className="p-3">6</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">B</td><td className="p-3">7</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">C</td><td className="p-3">5</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">D</td><td className="p-3">2</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Layers size={18} className="text-blue-500" /> Step 2: C2 → L2 (Pairs)
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <p>Generate <strong>C2</strong> by creating pairs from L1: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">C2 = {'{AB, AC, AD, BC, BD, CD}'}</code></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Candidate Set C2</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Itemset</th>
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">AB</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">AC</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">AD</td><td className="p-3 text-rose-600 dark:text-rose-400">1</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">BC</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">BD</td><td className="p-3">2</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">CD</td><td className="p-3 text-rose-600 dark:text-rose-400">0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Apply Min Support (≥2)</p>
                    <p className="text-blue-700 dark:text-blue-400 flex items-center gap-2 mt-1">👉 Remove AD, CD <XCircle size={14} /></p>
                  </div>

                  <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">✅ Frequent Itemset L2</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm border-2 border-emerald-200 dark:border-emerald-800/50 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-emerald-50 dark:bg-emerald-900/20">
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Itemset</th>
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Support</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">AB</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">AC</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">BC</td><td className="p-3">4</td></tr>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">BD</td><td className="p-3">2</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Layers size={18} className="text-blue-500" /> Step 3: C3 → L3 (Triplets)
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <p>Generate <strong>C3</strong> from L2. Possible combinations: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">ABC, ABD, ACD, BCD</code></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Candidate Set C3</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Itemset</th>
                          <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">ABC</td><td className="p-3">2</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">ABD</td><td className="p-3 text-rose-600 dark:text-rose-400">1</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">ACD</td><td className="p-3 text-rose-600 dark:text-rose-400">0</td></tr>
                        <tr className="border-b border-slate-100 dark:border-slate-800 bg-rose-50/50 dark:bg-rose-900/10"><td className="p-3 font-medium text-rose-600 dark:text-rose-400">BCD</td><td className="p-3 text-rose-600 dark:text-rose-400">0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Apply Min Support (≥2)</p>
                    <p className="text-blue-700 dark:text-blue-400 flex items-center gap-2 mt-1">👉 Only ABC survives <CheckCircle2 size={14} /></p>
                  </div>

                  <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">✅ Frequent Itemset L3</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm border-2 border-emerald-200 dark:border-emerald-800/50 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-emerald-50 dark:bg-emerald-900/20">
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Itemset</th>
                          <th className="p-3 border-b border-emerald-200 dark:border-emerald-800/50 font-semibold text-emerald-800 dark:text-emerald-300">Support</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-emerald-100 dark:border-emerald-800/30"><td className="p-3 font-medium">ABC</td><td className="p-3">2</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Link size={18} className="text-blue-500" /> Step 4: Association Rules
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <p>Generate all possible rules from the final L3 itemset <strong>{'{A, B, C}'}</strong>.</p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">A,B → C</div>
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">B,C → A</div>
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">A,C → B</div>
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">A → B,C</div>
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">B → A,C</div>
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono">C → A,B</div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-center overflow-x-auto mb-6">
                <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">🧮 Confidence Calculation Formula:</p>
                Confidence = Support(X ∪ Y) / Support(X)
              </div>

              <div className="space-y-4">
                {/* Rule 1 */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-emerald-800 dark:text-emerald-300">✅ Rule 1: A,B → C</h5>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">✔️ Accepted</span>
                  </div>
                  <div className="font-mono text-emerald-700 dark:text-emerald-400">
                    = 2 / 4 = 0.5 = <strong>50%</strong>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-emerald-800 dark:text-emerald-300">✅ Rule 2: B,C → A</h5>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">✔️ Accepted</span>
                  </div>
                  <div className="font-mono text-emerald-700 dark:text-emerald-400">
                    = 2 / 4 = 0.5 = <strong>50%</strong>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-emerald-800 dark:text-emerald-300">✅ Rule 3: A,C → B</h5>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">✔️ Accepted</span>
                  </div>
                  <div className="font-mono text-emerald-700 dark:text-emerald-400">
                    = 2 / 4 = 0.5 = <strong>50%</strong>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800/30 opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-rose-800 dark:text-rose-300">❌ Rule 4: A → B,C</h5>
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">Rejected</span>
                  </div>
                  <div className="font-mono text-rose-700 dark:text-rose-400">
                    = 2 / 6 = 0.333 = <strong>33.3%</strong>
                  </div>
                </div>

                {/* Rule 5 */}
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800/30 opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-rose-800 dark:text-rose-300">❌ Rule 5: B → A,C</h5>
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">Rejected</span>
                  </div>
                  <div className="font-mono text-rose-700 dark:text-rose-400">
                    = 2 / 7 ≈ 0.285 = <strong>28%</strong>
                  </div>
                </div>

                {/* Rule 6 */}
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800/30 opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-rose-800 dark:text-rose-300">❌ Rule 6: C → A,B</h5>
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">Rejected</span>
                  </div>
                  <div className="font-mono text-rose-700 dark:text-rose-400">
                    = 2 / 5 = 0.4 = <strong>40%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="p-6 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-3xl shadow-sm text-white">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Target size={20} className="text-emerald-400" /> 🎯 Final Answer
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-blue-300 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Frequent Itemsets
                </h5>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50">
                    <span className="font-bold text-slate-300 mr-2">L1:</span> A, B, C, D
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50">
                    <span className="font-bold text-slate-300 mr-2">L2:</span> AB, AC, BC, BD
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg border border-slate-600/50">
                    <span className="font-bold text-slate-300 mr-2">L3:</span> ABC
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-emerald-300 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Strong Association Rules (≥50%)
                </h5>
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-900/30 rounded-lg border border-emerald-800/50 font-mono text-emerald-100">
                    A,B → C
                  </div>
                  <div className="p-3 bg-emerald-900/30 rounded-lg border border-emerald-800/50 font-mono text-emerald-100">
                    B,C → A
                  </div>
                  <div className="p-3 bg-emerald-900/30 rounded-lg border border-emerald-800/50 font-mono text-emerald-100">
                    A,C → B
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default AprioriNumerical;
