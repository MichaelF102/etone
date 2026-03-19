import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Calculator, 
  MapPin, 
  Search, 
  Target,
  AlertCircle,
  Network,
  BookOpen,
  CheckCircle2,
  Table
} from 'lucide-react';

const DBSCANNumerical: React.FC = () => {
  const points = [
    { id: 'P1', x: 3, y: 7, type: 'border' },
    { id: 'P2', x: 4, y: 6, type: 'core' },
    { id: 'P3', x: 5, y: 5, type: 'border' },
    { id: 'P4', x: 6, y: 4, type: 'border' },
    { id: 'P5', x: 7, y: 3, type: 'core' },
    { id: 'P6', x: 6, y: 2, type: 'border' },
    { id: 'P7', x: 7, y: 2, type: 'border' },
    { id: 'P8', x: 8, y: 4, type: 'border' },
    { id: 'P9', x: 3, y: 3, type: 'noise' },
    { id: 'P10', x: 2, y: 6, type: 'border' },
    { id: 'P11', x: 3, y: 5, type: 'core' },
    { id: 'P12', x: 2, y: 4, type: 'border' },
  ];

  const scaleX = (val: number) => (val - 1) * 50 + 20;
  const scaleY = (val: number) => 350 - ((val - 1) * 50 + 20);

  return (
    <TopicLayout 
      id="dbscan-numerical"
      title="DBSCAN Numerical"
      subtitle="Step-by-step calculation of DBSCAN clustering."
    >
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          Numerical Example: DBSCAN Algorithm
        </h3>
        
        <div className="space-y-6">
          {/* Initial Dataset & Parameters */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <MapPin size={18} className="text-blue-500" /> Step 0: Given Parameters
            </h4>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <p className="font-bold text-blue-700 dark:text-blue-400 mb-1">Eps (ε) = 1.9</p>
                  <p className="text-blue-600 dark:text-blue-300">The maximum distance between two points for them to be considered neighbors.</p>
                </div>
                <div className="flex-1 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">MinPts = 4</p>
                  <p className="text-emerald-600 dark:text-emerald-300">The minimum number of points required within the Eps radius to form a dense region (including itself).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Search size={18} className="text-blue-500" /> Step 1: Distance Matrix Interpretation
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Observations from the Distance Matrix:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Only distances <strong>≤ 1.9</strong> are considered neighbors.</li>
                  <li>Distances of 1 or √2 (≈ 1.41) → <span className="text-emerald-600 dark:text-emerald-400 font-bold">✔️ Neighbors</span></li>
                  <li>Distances of 2 or more → <span className="text-rose-600 dark:text-rose-400 font-bold">❌ Not Neighbors</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Table size={18} className="text-blue-500" /> Step 2: Extract ε-Neighborhoods
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Point</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Neighbors (Distance ≤ 1.9)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P1</td><td className="p-3">P2, P10</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P2</td><td className="p-3">P1, P3, P11</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P3</td><td className="p-3">P2, P4</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P4</td><td className="p-3">P3, P5</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P5</td><td className="p-3">P4, P6, P7, P8</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P6</td><td className="p-3">P5, P7</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P7</td><td className="p-3">P5, P6</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P8</td><td className="p-3">P5</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P9</td><td className="p-3">P12</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P10</td><td className="p-3">P1, P11</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P11</td><td className="p-3">P2, P10, P12</td></tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-medium">P12</td><td className="p-3">P9, P11</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Target size={18} className="text-blue-500" /> Step 3: Identify Core Points
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <p className="font-semibold text-blue-800 dark:text-blue-300">Condition: Core if |Neighbors| + 1 ≥ 4</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Point</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Count (Neighbors + Itself)</th>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="p-3 font-medium">P2</td>
                      <td className="p-3">3 + 1 = 4</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">✅ Core</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="p-3 font-medium">P5</td>
                      <td className="p-3">4 + 1 = 5</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">✅ Core</td>
                    </tr>
                    <tr className="border-b border-slate-100 dark:border-slate-800">
                      <td className="p-3 font-medium">P11</td>
                      <td className="p-3">3 + 1 = 4</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">✅ Core</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Step 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={18} className="text-emerald-500" /> Step 4: Border Points
              </h4>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <p><strong>Condition:</strong> Points connected to at least one core point.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>From Core <strong>P2</strong>: → P1, P3, P10</li>
                  <li>From Core <strong>P5</strong>: → P4, P6, P7, P8</li>
                  <li>From Core <strong>P11</strong>: → P12</li>
                </ul>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">✅ Border Points:</span> P1, P3, P4, P6, P7, P8, P10, P12
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <AlertCircle size={18} className="text-rose-500" /> Step 5: Noise Point
              </h4>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <p><strong>Condition:</strong> Points that are neither Core nor Border.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>P9</strong> only has P12 as a neighbor, and P12 is not a core point.</li>
                </ul>
                <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800/30">
                  <span className="font-bold text-rose-700 dark:text-rose-400">❌ Noise Point:</span> P9
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Network size={18} className="text-blue-500" /> Step 6: Cluster Formation
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>Clusters are formed by connecting Core points that are reachable from one another, and assigning Border points to their respective Core point's cluster.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                  <h5 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Cluster 1</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Core Points:</strong> P2, P11 (They are connected via P10/P12 path or directly if within Eps)</li>
                    <li><strong>Border Points:</strong> P1, P3, P10, P12</li>
                    <li><strong>Total Points:</strong> P1, P2, P3, P10, P11, P12</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/30">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Cluster 2</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Core Points:</strong> P5</li>
                    <li><strong>Border Points:</strong> P4, P6, P7, P8</li>
                    <li><strong>Total Points:</strong> P4, P5, P6, P7, P8</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <BookOpen size={18} className="text-blue-500" /> Step 7: Key DBSCAN Concepts
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-1">1. Directly Density Reachable</h5>
                  <p>A point <em>p</em> is directly density-reachable from a point <em>q</em> if <em>p</em> is in the ε-neighborhood of <em>q</em> and <em>q</em> is a core point.</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400"><strong>Example:</strong> P1 is directly density-reachable from Core P2.</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-1">2. Density Reachable</h5>
                  <p>A point <em>p</em> is density-reachable from a point <em>q</em> if there is a chain of points <em>p₁, p₂, ..., pₙ</em> (where <em>p₁ = q</em> and <em>pₙ = p</em>) such that each <em>pᵢ₊₁</em> is directly density-reachable from <em>pᵢ</em>.</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400"><strong>Example:</strong> P12 is density-reachable from P2 (via Core P11).</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                  <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-1">3. Density Connected</h5>
                  <p>Two points <em>p</em> and <em>q</em> are density-connected if there is a core point <em>o</em> such that both <em>p</em> and <em>q</em> are density-reachable from <em>o</em>.</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400"><strong>Example:</strong> Border point P1 and Border point P12 are density-connected because they are both reachable from Core P11 / P2.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="p-6 bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-3xl shadow-sm text-white">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" /> Final Answer Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-slate-700/50 rounded-xl">
                <p className="font-semibold text-blue-300 mb-1">Core Points:</p>
                <p>P2, P5, P11</p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-xl">
                <p className="font-semibold text-emerald-300 mb-1">Border Points:</p>
                <p>P1, P3, P4, P6, P7, P8, P10, P12</p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-xl">
                <p className="font-semibold text-rose-300 mb-1">Noise Points:</p>
                <p>P9</p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-xl">
                <p className="font-semibold text-purple-300 mb-1">Clusters:</p>
                <p>C1: {'{'}P1, P2, P3, P10, P11, P12{'}'}</p>
                <p>C2: {'{'}P4, P5, P6, P7, P8{'}'}</p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <MapPin size={18} className="text-blue-500" /> Final Classification Visualization
            </h4>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="w-full max-w-md bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  {/* Grid lines */}
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <g key={`grid-${i}`}>
                      <line x1={scaleX(1)} y1={scaleY(i)} x2={scaleX(8)} y2={scaleY(i)} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="1" />
                      <line x1={scaleX(i)} y1={scaleY(1)} x2={scaleX(i)} y2={scaleY(8)} stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="1" />
                      <text x={scaleX(i)} y={scaleY(0.5)} fontSize="10" fill="currentColor" className="text-slate-400" textAnchor="middle">{i}</text>
                      <text x={scaleX(0.5)} y={scaleY(i)} fontSize="10" fill="currentColor" className="text-slate-400" textAnchor="middle" dominantBaseline="middle">{i}</text>
                    </g>
                  ))}

                  {/* Eps Radii for Core Points */}
                  {points.filter(p => p.type === 'core').map(p => (
                    <circle 
                      key={`radius-${p.id}`}
                      cx={scaleX(p.x)} 
                      cy={scaleY(p.y)} 
                      r={1.9 * 50} 
                      fill="rgba(59, 130, 246, 0.1)" 
                      stroke="#3b82f6" 
                      strokeWidth="1" 
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Points */}
                  {points.map(p => {
                    let fill = '';
                    let stroke = '';
                    if (p.type === 'core') {
                      fill = '#3b82f6'; // blue-500
                      stroke = '#2563eb'; // blue-600
                    } else if (p.type === 'border') {
                      fill = '#10b981'; // emerald-500
                      stroke = '#059669'; // emerald-600
                    } else {
                      fill = '#f43f5e'; // rose-500
                      stroke = '#e11d48'; // rose-600
                    }

                    return (
                      <g key={`point-${p.id}`}>
                        <circle 
                          cx={scaleX(p.x)} 
                          cy={scaleY(p.y)} 
                          r="6" 
                          fill={fill} 
                          stroke={stroke} 
                          strokeWidth="2"
                        />
                        <text 
                          x={scaleX(p.x)} 
                          y={scaleY(p.y) - 12} 
                          fontSize="12" 
                          fontWeight="bold" 
                          fill="currentColor" 
                          className="text-slate-700 dark:text-slate-300" 
                          textAnchor="middle"
                        >
                          {p.id}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-600"></div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Core Point</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-emerald-600"></div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Border Point</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="w-4 h-4 rounded-full bg-rose-500 border-2 border-rose-600"></div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Noise / Outlier</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="w-4 h-4 rounded-full border border-blue-500 border-dashed bg-blue-500/10"></div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Eps Radius (1.9)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default DBSCANNumerical;

