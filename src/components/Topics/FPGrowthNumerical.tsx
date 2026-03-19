import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Calculator, 
  Database, 
  Filter, 
  ListOrdered,
  Network,
  Table as TableIcon
} from 'lucide-react';

const FPGrowthNumerical: React.FC = () => {
  return (
    <TopicLayout 
      id="fpgrowth-numerical"
      title="FP-Growth Algorithm Numerical"
      subtitle="Step-by-step calculation of frequent patterns using FP-Tree."
    >
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          Numerical Example: FP-Growth Algorithm
        </h3>
        
        <div className="space-y-6">
          {/* Initial Dataset & Parameters */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Database size={18} className="text-blue-500" /> Initial Dataset & Parameters
            </h4>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
              <p>The objective is to find frequent patterns from a dataset of 5 transactions without repeatedly scanning the database.</p>
              
              <div className="inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                <p className="font-bold text-blue-700 dark:text-blue-400">Minimum Support: 3</p>
              </div>

              <div>
                <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Transaction Dataset:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700"><span className="font-bold">T1:</span> {'{E, K, M, N, O, Y}'}</div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700"><span className="font-bold">T2:</span> {'{D, E, K, N, O, Y}'}</div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700"><span className="font-bold">T3:</span> {'{A, E, K, M}'}</div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700"><span className="font-bold">T4:</span> {'{C, K, M, U, Y}'}</div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700"><span className="font-bold">T5:</span> {'{C, E, I, K, O}'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Filter size={18} className="text-blue-500" /> Step 1: Calculate Frequencies and Build Frequent Pattern Set (L)
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>First, the frequency of every individual item across all transactions is calculated:</p>
              
              <div className="flex flex-wrap gap-2">
                {['A: 1', 'C: 2', 'D: 1', 'E: 4', 'I: 1', 'K: 5', 'M: 3', 'N: 2', 'O: 4', 'U: 1', 'Y: 3'].map((item, i) => (
                  <div key={i} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-mono text-xs">
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-4">Next, items that meet or exceed the minimum support of 3 are filtered and sorted in descending order of their frequency to build the Frequent Pattern set (L).</p>
              
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-center text-lg">
                L = {'{K: 5, E: 4, M: 3, O: 4, Y: 3}'}
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <ListOrdered size={18} className="text-blue-500" /> Step 2: Build Ordered-Item Sets
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>For each transaction, filter out the items that are not in set L, and order the remaining items exactly as they appear in set L.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Transaction ID</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Original Items</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Ordered-Item Set</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200">T1</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{'{E, K, M, N, O, Y}'}</td>
                      <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{'{K, E, M, O, Y}'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200">T2</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{'{D, E, K, N, O, Y}'}</td>
                      <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{'{K, E, O, Y}'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200">T3</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{'{A, E, K, M}'}</td>
                      <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{'{K, E, M}'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200">T4</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{'{C, K, M, U, Y}'}</td>
                      <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{'{K, M, Y}'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200">T5</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{'{C, E, I, K, O, O}'}</td>
                      <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{'{K, E, O}'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Network size={18} className="text-blue-500" /> Step 3: Construct the FP-Tree
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <p>The algorithm builds a tree data structure by inserting these ordered-item sets one by one, starting from a NULL root node.</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Insert {'{K, E, M, O, Y}'}:</strong> Creates the first branch: K:1 → E:1 → M:1 → O:1 → Y:1.</li>
                <li><strong>Insert {'{K, E, O, Y}'}:</strong> Follows existing K and E nodes (updating their counts to 2), then creates a new branch for O and Y: K:2 → E:2 → O:1 → Y:1.</li>
                <li><strong>Insert {'{K, E, M}'}:</strong> Follows existing K, E, and M nodes, updating their counts: K:3 → E:3 → M:2.</li>
                <li><strong>Insert {'{K, M, Y}'}:</strong> Follows K (count 4), creates a new branch for M, and links Y to it: K:4 → M:1 → Y:1.</li>
                <li><strong>Insert {'{K, E, O}'}:</strong> Follows K and E (counts 5 and 4), and follows the existing O branch from E, updating its count: K:5 → E:4 → O:2.</li>
              </ul>

              <div className="w-full max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mt-6">
                <h5 className="text-center font-bold text-slate-700 dark:text-slate-300 mb-4">Final FP-Tree Structure</h5>
                <svg viewBox="0 0 400 460" className="w-full h-auto max-w-md mx-auto">
                  {/* Edges */}
                  <path d="M 200 40 L 200 80" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 200 120 L 140 160" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 200 120 L 260 160" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 140 200 L 100 240" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 140 200 L 180 240" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 260 200 L 260 240" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 100 280 L 100 320" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 180 280 L 180 320" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 100 360 L 100 400" fill="none" stroke="#94a3b8" strokeWidth="2" />

                  {/* Nodes */}
                  {/* Root */}
                  <circle cx="200" cy="20" r="20" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" className="dark:fill-slate-700 dark:stroke-slate-600" />
                  <text x="200" y="25" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300">Null</text>

                  {/* Level 1 */}
                  <circle cx="200" cy="100" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="200" y="105" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">K:5</text>

                  {/* Level 2 */}
                  <circle cx="140" cy="180" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="140" y="185" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">E:4</text>
                  
                  <circle cx="260" cy="180" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="260" y="185" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">M:1</text>

                  {/* Level 3 */}
                  <circle cx="100" cy="260" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="100" y="265" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">M:2</text>
                  
                  <circle cx="180" cy="260" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="180" y="265" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">O:2</text>
                  
                  <circle cx="260" cy="260" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="260" y="265" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">Y:1</text>

                  {/* Level 4 */}
                  <circle cx="100" cy="340" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="100" y="345" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">O:1</text>
                  
                  <circle cx="180" cy="340" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="180" y="345" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">Y:1</text>

                  {/* Level 5 */}
                  <circle cx="100" cy="420" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" className="dark:fill-blue-900/50 dark:stroke-blue-500" />
                  <text x="100" y="425" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200">Y:1</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Steps 4, 5 & 6 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <TableIcon size={18} className="text-blue-500" /> Steps 4, 5 & 6: Pattern Bases and Rule Generation
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>For each item (processed from least frequent to most frequent), the algorithm looks at the tree to find its Conditional Pattern Base (the paths leading up to it).</p>
              <p>From there, it determines the Conditional Frequent Pattern Tree (items common in those paths that meet the minimum support of 3). Finally, it generates the Frequent Patterns.</p>
              
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Item</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Step 4: Conditional Pattern Base</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Step 5: Conditional Frequent Pattern Tree</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Step 6: Frequent Pattern Generated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200">Y</td>
                      <td className="p-3 font-mono text-xs">{'{ {K, E, M, O: 1}, {K, E, O: 1}, {K, M: 1} }'}</td>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">{'{K: 3}'}</td>
                      <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{'<K, Y: 3>'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200">O</td>
                      <td className="p-3 font-mono text-xs">{'{ {K, E, M: 1}, {K, E: 2} }'}</td>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">{'{K, E: 3}'}</td>
                      <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{'<K, O: 3>, <E, O: 3>, <E, K, O: 3>'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200">M</td>
                      <td className="p-3 font-mono text-xs">{'{ {K, E: 2}, {K: 1} }'}</td>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">{'{K: 3}'}</td>
                      <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{'<K, M: 3>'}</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-slate-800 dark:text-slate-200">E</td>
                      <td className="p-3 font-mono text-xs">{'{ {K: 4} }'}</td>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">{'{K: 4}'}</td>
                      <td className="p-3 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{'<E, K: 4>'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 mt-6">
                <p className="text-slate-700 dark:text-slate-300">
                  Ultimately, two types of association rules (e.g., <strong>K → Y</strong> and <strong>Y → K</strong>) can be inferred from these generated patterns. The final valid rules are chosen by calculating their confidence and keeping only those that meet a specified minimum confidence threshold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default FPGrowthNumerical;
