import React, { useState } from 'react';
import { TopicLayout } from '../TopicLayout';
import { KMeansNumericalVisualization } from '../Visualizations';
import { 
  Calculator, 
  MapPin, 
  RefreshCw, 
  Target, 
  Activity,
  CheckCircle2,
  BarChart
} from 'lucide-react';
import { cn } from '../../lib/utils';

const KMeansNumerical: React.FC = () => {
  return (
    <TopicLayout 
      id="kmeans-numerical"
      title="K-Means Numerical"
      subtitle="Step-by-step calculation of K-Means iterations and Silhouette Coefficient."
    >
      {/* Interactive Calculator */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calculator className="text-blue-600" />
          ✨ Interactive K-Means Iterations
        </h3>
        <KMeansNumericalVisualization />
      </section>

      {/* Example 1: K-Means Iterations */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RefreshCw className="text-blue-600" />
          Numerical Example 1: K-Means Iteration Calculations
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          This example traces the K-Means clustering algorithm across multiple iterations for a set of data points mapping to two clusters (k=2).
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <MapPin size={18} className="text-blue-500" /> Initial Setup & Iteration 1
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p><strong>Initial Data Points (X, Y):</strong> (8, 10), (20, 2), (16, 8), (8, 7), (1, 4), (13, 10), (15, 1), (19, 7), (3, 4), (3, 2), (11, 6).</p>
              <p><strong>Initial Centroids:</strong> Center 1 is at (10.0, 8.0) and Center 2 is at (18.0, 6.0).</p>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-700 dark:text-slate-300 mb-2">Iteration 1 End State:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The Sum of Squared Errors (SSE) is calculated as <strong>343.6</strong>.</li>
                  <li>The new centroids are calculated based on the points assigned to each cluster: Center 1 moves to <strong>(6.7, 6.1)</strong> and Center 2 moves to <strong>(17.5, 4.5)</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <RefreshCw size={18} className="text-blue-500" /> Iteration 2
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>Distances from each point to the new centroids are recalculated. Based on these new distances, points are reassigned. For example, the point at (13, 10) shifts from Cluster 1 to Cluster 2.</p>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-700 dark:text-slate-300 mb-2">Iteration 2 End State:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The SSE drops significantly to <strong>224.2</strong>.</li>
                  <li>The centroids are updated again: Center 1 moves to <strong>(5.6, 5.4)</strong> and Center 2 moves to <strong>(16.6, 5.6)</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <CheckCircle2 size={18} className="text-emerald-500" /> Iterations 3 & 4 (Convergence)
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>The distances are calculated again for Iteration 3 and Iteration 4, resulting in the exact same distance matrices. Because the cluster assignments do not change between Iteration 3 and Iteration 4, the algorithm has stabilized.</p>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <p className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Final State:</p>
                <ul className="list-disc pl-5 space-y-1 text-emerald-600 dark:text-emerald-300">
                  <li>The final SSE is <strong>204.8</strong>.</li>
                  <li>The final centroids remain at Center 1 <strong>(5.6, 5.4)</strong> and Center 2 <strong>(16.6, 5.6)</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example 2: Silhouette Coefficient */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <BarChart className="text-blue-600" />
          Numerical Example 2: Computing the Silhouette Coefficient
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          This example calculates the silhouette scores for a dataset of 4 points assigned to two clusters to evaluate the quality of the clustering.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-4 text-slate-800 dark:text-slate-200">Initial Data & Dissimilarity Matrix</h4>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <p><strong>Cluster Assignments:</strong> Point P1 and P2 belong to Cluster 1. Point P3 and P4 belong to Cluster 2.</p>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <p className="font-bold text-slate-700 dark:text-slate-300 mb-2">Distance (Dissimilarity) Matrix:</p>
                  <ul className="space-y-1 font-mono text-xs">
                    <li>Distance between P1 and P2: 0.10</li>
                    <li>Distance between P1 and P3: 0.65</li>
                    <li>Distance between P1 and P4: 0.55</li>
                    <li>Distance between P2 and P3: 0.70</li>
                    <li>Distance between P2 and P4: 0.60</li>
                    <li>Distance between P3 and P4: 0.30</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className="font-bold mb-4 text-slate-800 dark:text-slate-200">Calculating Silhouette Coefficients (SC)</h4>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <p>Using the formula <code>S(i) = (b(i) - a(i)) / max(a(i), b(i))</code>, the coefficients for each point are calculated as:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 text-center">
                    <span className="block text-xs font-bold text-blue-600 uppercase mb-1">Point P1</span>
                    <span className="font-mono font-bold">0.833</span>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 text-center">
                    <span className="block text-xs font-bold text-blue-600 uppercase mb-1">Point P2</span>
                    <span className="font-mono font-bold">0.846</span>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30 text-center">
                    <span className="block text-xs font-bold text-emerald-600 uppercase mb-1">Point P3</span>
                    <span className="font-mono font-bold">0.556</span>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30 text-center">
                    <span className="block text-xs font-bold text-emerald-600 uppercase mb-1">Point P4</span>
                    <span className="font-mono font-bold">0.478</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-indigo-600 text-white rounded-3xl shadow-xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Target size={18} className="text-indigo-200" /> Calculating Averages
              </h4>
              <div className="space-y-4 text-sm text-indigo-100">
                <div className="flex justify-between items-center border-b border-indigo-500/50 pb-2">
                  <span>Cluster 1 Average:</span>
                  <span className="font-mono font-bold text-white">0.840</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-500/50 pb-2">
                  <span>Cluster 2 Average:</span>
                  <span className="font-mono font-bold text-white">0.517</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Overall Average:</span>
                  <span className="font-mono font-black text-xl text-white">0.680</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};

export default KMeansNumerical;
