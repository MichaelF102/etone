import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Calculator, 
  MapPin, 
  RefreshCw, 
  Network,
  CheckCircle2,
  Table
} from 'lucide-react';

const HierarchicalNumerical: React.FC = () => {
  return (
    <TopicLayout 
      id="hierarchical-numerical"
      title="Hierarchical Clustering Numerical"
      subtitle="Step-by-step calculation of Hierarchical Clustering using Single Link technique."
    >
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          Numerical Example: Single Link Hierarchical Clustering
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          The objective is to find clusters using the <strong>single link technique</strong> and <strong>Euclidean distance</strong>.
        </p>

        <div className="space-y-6">
          {/* Initial Dataset */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <MapPin size={18} className="text-blue-500" /> Initial Dataset
            </h4>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p className="mb-4">The dataset consists of six points:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P1:</span> (0.40, 0.53)
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P2:</span> (0.22, 0.38)
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P3:</span> (0.35, 0.32)
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P4:</span> (0.26, 0.19)
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P5:</span> (0.08, 0.41)
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">P6:</span> (0.45, 0.30)
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Calculator size={18} className="text-blue-500" /> Step 1: Euclidean Distance Formula
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 font-mono text-center overflow-x-auto text-lg">
                d = √((x₁ - x₂)² + (y₁ - y₂)²)
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Table size={18} className="text-blue-500" /> Step 2: Compute Pairwise Distances
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>Here are a few example calculations fully worked out:</p>
              <div className="space-y-3 font-mono bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 overflow-x-auto">
                <p>d(P1, P2) = √((0.40 - 0.22)² + (0.53 - 0.38)²)</p>
                <p className="pl-20">= √(0.18² + 0.15²)</p>
                <p className="pl-20">= √(0.0324 + 0.0225)</p>
                <p className="pl-20">= √0.0549 = <strong>0.234</strong></p>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                <p>d(P3, P6) = √((0.35 - 0.45)² + (0.32 - 0.30)²)</p>
                <p className="pl-20">= √((-0.10)² + 0.02²)</p>
                <p className="pl-20">= √(0.01 + 0.0004)</p>
                <p className="pl-20">= √0.0104 ≈ <strong>0.102</strong></p>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
                <p>d(P2, P5) = √((0.22 - 0.08)² + (0.38 - 0.41)²)</p>
                <p className="pl-20">= √(0.14² + (-0.03)²)</p>
                <p className="pl-20">= √(0.0196 + 0.0009)</p>
                <p className="pl-20">= √0.0205 ≈ <strong>0.143</strong></p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Table size={18} className="text-blue-500" /> Step 3: Full Distance Matrix
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-600 dark:text-slate-400">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700"></th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P1</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P2</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P3</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P4</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P5</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">P6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P1</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0.234</td>
                    <td className="px-4 py-3">0.216</td>
                    <td className="px-4 py-3">0.365</td>
                    <td className="px-4 py-3">0.336</td>
                    <td className="px-4 py-3">0.231</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P2</td>
                    <td className="px-4 py-3">0.234</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0.143</td>
                    <td className="px-4 py-3">0.194</td>
                    <td className="px-4 py-3">0.143</td>
                    <td className="px-4 py-3">0.243</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P3</td>
                    <td className="px-4 py-3">0.216</td>
                    <td className="px-4 py-3">0.143</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0.158</td>
                    <td className="px-4 py-3">0.284</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">0.102</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P4</td>
                    <td className="px-4 py-3">0.365</td>
                    <td className="px-4 py-3">0.194</td>
                    <td className="px-4 py-3">0.158</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0.284</td>
                    <td className="px-4 py-3">0.220</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P5</td>
                    <td className="px-4 py-3">0.336</td>
                    <td className="px-4 py-3">0.143</td>
                    <td className="px-4 py-3">0.284</td>
                    <td className="px-4 py-3">0.284</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0.386</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800">P6</td>
                    <td className="px-4 py-3">0.231</td>
                    <td className="px-4 py-3">0.243</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">0.102</td>
                    <td className="px-4 py-3">0.220</td>
                    <td className="px-4 py-3">0.386</td>
                    <td className="px-4 py-3">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 4: Clustering Process */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Network size={18} className="text-blue-500" /> Step 4: Clustering Process (Single Linkage)
            </h4>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
              
              {/* Iteration 1 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Iteration 1:</h5>
                <p className="mb-2">Minimum distance is <strong>0.102</strong> between <strong>P3</strong> and <strong>P6</strong>.</p>
                <p className="mb-2 text-blue-600 dark:text-blue-400 font-medium">Merge P3 and P6 into cluster (P3, P6).</p>
                <p className="font-medium mb-1">Update distances:</p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                  <li>d((P3, P6), P1) = min(d(P3,P1), d(P6,P1)) = min(0.216, 0.231) = <strong>0.216</strong></li>
                  <li>d((P3, P6), P2) = min(d(P3,P2), d(P6,P2)) = min(0.143, 0.243) = <strong>0.143</strong></li>
                  <li>d((P3, P6), P4) = min(d(P3,P4), d(P6,P4)) = min(0.158, 0.220) = <strong>0.158</strong></li>
                  <li>d((P3, P6), P5) = min(d(P3,P5), d(P6,P5)) = min(0.284, 0.386) = <strong>0.284</strong></li>
                </ul>
              </div>

              {/* Iteration 2 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Iteration 2:</h5>
                <p className="mb-2">Minimum distance is <strong>0.143</strong> between <strong>P2</strong> and <strong>P5</strong> (also between P2 and (P3,P6), we can pick either, let's pick P2 and P5).</p>
                <p className="mb-2 text-emerald-600 dark:text-emerald-400 font-medium">Merge P2 and P5 into cluster (P2, P5).</p>
                <p className="font-medium mb-1">Update distances:</p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                  <li>d((P2, P5), P1) = min(d(P2,P1), d(P5,P1)) = min(0.234, 0.336) = <strong>0.234</strong></li>
                  <li>d((P2, P5), (P3, P6)) = min(d(P2,(P3,P6)), d(P5,(P3,P6))) = min(0.143, 0.284) = <strong>0.143</strong></li>
                  <li>d((P2, P5), P4) = min(d(P2,P4), d(P5,P4)) = min(0.194, 0.284) = <strong>0.194</strong></li>
                </ul>
              </div>

              {/* Iteration 3 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Iteration 3:</h5>
                <p className="mb-2">Minimum distance is <strong>0.143</strong> between <strong>(P2, P5)</strong> and <strong>(P3, P6)</strong>.</p>
                <p className="mb-2 text-purple-600 dark:text-purple-400 font-medium">Merge them into cluster ((P2, P5), (P3, P6)).</p>
                <p className="font-medium mb-1">Update distances:</p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                  <li>d(((P2, P5), (P3, P6)), P1) = min(d((P2,P5),P1), d((P3,P6),P1)) = min(0.234, 0.216) = <strong>0.216</strong></li>
                  <li>d(((P2, P5), (P3, P6)), P4) = min(d((P2,P5),P4), d((P3,P6),P4)) = min(0.194, 0.158) = <strong>0.158</strong></li>
                </ul>
              </div>

              {/* Iteration 4 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Iteration 4:</h5>
                <p className="mb-2">Minimum distance is <strong>0.158</strong> between <strong>((P2, P5), (P3, P6))</strong> and <strong>P4</strong>.</p>
                <p className="mb-2 text-amber-600 dark:text-amber-400 font-medium">Merge them into cluster (((P2, P5), (P3, P6)), P4).</p>
                <p className="font-medium mb-1">Update distances:</p>
                <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                  <li>d((((P2, P5), (P3, P6)), P4), P1) = min(d(((P2,P5),(P3,P6)),P1), d(P4,P1)) = min(0.216, 0.365) = <strong>0.216</strong></li>
                </ul>
              </div>

              {/* Iteration 5 */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Iteration 5:</h5>
                <p className="mb-2 text-red-600 dark:text-red-400 font-medium">Merge the final two clusters (((P2, P5), (P3, P6)), P4) and P1 at distance <strong>0.216</strong>.</p>
              </div>

              {/* Dendrogram */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 mt-8">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                  <Network size={18} className="text-blue-500" /> Final Dendrogram
                </h5>
                
                <div className="w-full max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <svg viewBox="0 0 500 300" className="w-full h-auto">
                    {/* Y-axis (Distance) */}
                    <line x1="60" y1="20" x2="60" y2="250" stroke="currentColor" className="text-slate-400" strokeWidth="2" />
                    <text x="50" y="30" fontSize="12" fill="currentColor" className="text-slate-500" textAnchor="end">0.25</text>
                    <text x="50" y="85" fontSize="12" fill="currentColor" className="text-slate-500" textAnchor="end">0.20</text>
                    <text x="50" y="140" fontSize="12" fill="currentColor" className="text-slate-500" textAnchor="end">0.15</text>
                    <text x="50" y="195" fontSize="12" fill="currentColor" className="text-slate-500" textAnchor="end">0.10</text>
                    <text x="50" y="250" fontSize="12" fill="currentColor" className="text-slate-500" textAnchor="end">0.00</text>
                    
                    {/* X-axis (Points) */}
                    <line x1="60" y1="250" x2="480" y2="250" stroke="currentColor" className="text-slate-400" strokeWidth="2" />
                    
                    {/* Point Labels */}
                    <text x="100" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P3</text>
                    <text x="160" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P6</text>
                    <text x="240" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P2</text>
                    <text x="300" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P5</text>
                    <text x="380" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P4</text>
                    <text x="440" y="270" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300" textAnchor="middle">P1</text>

                    {/* Dendrogram Lines */}
                    {/* Note: Y coordinate = 250 - (distance * 1000) for scaling. 
                        0.102 -> 250 - 102 = 148
                        0.143 -> 250 - 143 = 107
                        0.158 -> 250 - 158 = 92
                        0.216 -> 250 - 216 = 34
                    */}

                    {/* P3 & P6 merge at 0.102 (Y: 148) */}
                    <path d="M 100 250 L 100 148 L 160 148 L 160 250" fill="none" stroke="#3b82f6" strokeWidth="3" />
                    <text x="130" y="143" fontSize="10" fill="currentColor" className="text-blue-600 dark:text-blue-400" textAnchor="middle">0.102</text>
                    
                    {/* P2 & P5 merge at 0.143 (Y: 107) */}
                    <path d="M 240 250 L 240 107 L 300 107 L 300 250" fill="none" stroke="#10b981" strokeWidth="3" />
                    <text x="270" y="102" fontSize="10" fill="currentColor" className="text-emerald-600 dark:text-emerald-400" textAnchor="middle">0.143</text>
                    
                    {/* (P3,P6) & (P2,P5) merge at 0.143 (Y: 107) */}
                    {/* Since they merge at the same distance, we draw a horizontal line connecting their centers */}
                    <path d="M 130 148 L 130 107 L 270 107" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                    <text x="200" y="102" fontSize="10" fill="currentColor" className="text-purple-600 dark:text-purple-400" textAnchor="middle">0.143</text>
                    
                    {/* ((P3,P6),(P2,P5)) & P4 merge at 0.158 (Y: 92) */}
                    <path d="M 200 107 L 200 92 L 380 92 L 380 250" fill="none" stroke="#f59e0b" strokeWidth="3" />
                    <text x="290" y="87" fontSize="10" fill="currentColor" className="text-amber-600 dark:text-amber-400" textAnchor="middle">0.158</text>
                    
                    {/* (((P3,P6),(P2,P5)),P4) & P1 merge at 0.216 (Y: 34) */}
                    <path d="M 290 92 L 290 34 L 440 34 L 440 250" fill="none" stroke="#ef4444" strokeWidth="3" />
                    <text x="365" y="29" fontSize="10" fill="currentColor" className="text-red-600 dark:text-red-400" textAnchor="middle">0.216</text>

                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default HierarchicalNumerical;

