import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Database, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  Eye, 
  Briefcase, 
  LineChart, 
  Layers,
  ShoppingCart,
  Landmark,
  Tv,
  Stethoscope,
  Share2,
  Tag,
  Users,
  Link as LinkIcon,
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const DataMiningIntro: React.FC = () => {
  return (
    <TopicLayout 
      id="dm-intro"
      title="Data Mining"
      subtitle="The art and science of extracting knowledge from data."
    >
      {/* Definition Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Database size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold">Definition</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              Data Mining is the process of discovering useful patterns, trends, and knowledge from large datasets using techniques from statistics, machine learning, and databases.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <span className="text-2xl">👉</span>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">In simple words</p>
                <p className="text-lg font-medium">“Finding hidden insights from data.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <TrendingUp className="text-blue-600" />
          Importance of Data Mining
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: CheckCircle, text: "Helps in better decision making", color: "blue" },
            { icon: Eye, text: "Identifies hidden patterns", color: "emerald" },
            { icon: Briefcase, text: "Improves business strategies", color: "indigo" },
            { icon: LineChart, text: "Enables prediction and forecasting", color: "amber" },
            { icon: Layers, text: "Handles large-scale data efficiently", color: "rose" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center gap-4 shadow-sm"
            >
              <div className={`p-3 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/30 text-${item.color}-600`}>
                <item.icon size={20} />
              </div>
              <p className="font-medium text-slate-700 dark:text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-blue-600" />
          Real-World Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-[32px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500 text-white rounded-2xl">
                <ShoppingCart size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100">E-commerce</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Amazon / Flipkart</p>
              </div>
            </div>
            <p className="text-orange-800 dark:text-orange-200 mb-4">Recommends products based on browsing history.</p>
            <div className="p-4 bg-white/50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800/50">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Feature:</p>
              <p className="text-sm italic">“Customers who bought this also bought...”</p>
            </div>
          </div>

          <div className="p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-[32px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500 text-white rounded-2xl">
                <Landmark size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">Banking</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Financial Security</p>
              </div>
            </div>
            <p className="text-blue-800 dark:text-blue-200 mb-4">Detects fraudulent transactions in real-time.</p>
            <div className="p-4 bg-white/50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800/50">
              <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Benefit:</p>
              <p className="text-sm">Prevents unauthorized access and financial loss.</p>
            </div>
          </div>

          <div className="p-8 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-[32px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 text-white rounded-2xl">
                <Tv size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-900 dark:text-red-100">Entertainment</h4>
                <p className="text-sm text-red-700 dark:text-red-300">Netflix / YouTube</p>
              </div>
            </div>
            <p className="text-red-800 dark:text-red-200">Personalized recommendations to keep users engaged.</p>
          </div>

          <div className="p-8 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-[32px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-600 text-white rounded-2xl">
                <Stethoscope size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Healthcare</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">Predictive Medicine</p>
              </div>
            </div>
            <p className="text-emerald-800 dark:text-emerald-200">Disease prediction using historical patient data.</p>
          </div>

          <div className="p-8 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-[32px] md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600 text-white rounded-2xl">
                <Share2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Social Media</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">Facebook / Instagram</p>
              </div>
            </div>
            <p className="text-indigo-800 dark:text-indigo-200">Targeted advertisements based on user interests and behavior.</p>
          </div>
        </div>
      </section>

      {/* Data Mining Functionalities */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-blue-600" />
          Data Mining Functionalities
        </h3>
        <div className="space-y-8">
          {/* Classification */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl w-fit mb-6">
                  <Tag size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">1. Classification</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Assigning data into predefined categories (labels). It is a <strong>supervised learning</strong> technique.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold">
                  Supervised Learning
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Examples</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Email → Spam / Not Spam
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Patient → Diseased / Healthy
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Loan → Approved / Rejected
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Algorithms</p>
                  <div className="flex flex-wrap gap-2">
                    {['Decision Tree', 'SVM', 'Naive Bayes', 'Neural Networks'].map(algo => (
                      <span key={algo} className="px-3 py-1 bg-white dark:bg-slate-700 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-600">
                        {algo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clustering */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl w-fit mb-6">
                  <Users size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">2. Clustering</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Grouping similar data points into clusters without predefined labels. It is <strong>unsupervised learning</strong>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-bold">
                  Unsupervised Learning
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Examples</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Customer segmentation
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Grouping news articles
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Image segmentation
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Algorithms</p>
                  <div className="flex flex-wrap gap-2">
                    {['K-Means', 'DBSCAN', 'Hierarchical'].map(algo => (
                      <span key={algo} className="px-3 py-1 bg-white dark:bg-slate-700 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-600">
                        {algo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Association */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/30 text-amber-600 rounded-2xl w-fit mb-6">
                  <LinkIcon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">3. Association Rule Mining</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Finding relationships between items in large datasets.
                </p>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">Rule Format</p>
                  <p className="text-lg font-mono font-bold">A → B</p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">“If A occurs, B is likely to occur”</p>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Market Basket Analysis</p>
                  <div className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-2xl shadow-sm">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🍞</div>
                      <p className="text-[10px] font-bold">Bread</p>
                    </div>
                    <ArrowRight className="text-slate-300" />
                    <div className="text-center">
                      <div className="text-2xl mb-1">🧈</div>
                      <p className="text-[10px] font-bold">Butter</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Terms</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Support</span>
                      <span className="text-[10px] text-slate-500">Frequency</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Confidence</span>
                      <span className="text-[10px] text-slate-500">Probability</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Lift</span>
                      <span className="text-[10px] text-slate-500">Strength</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regression */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="p-4 bg-rose-50 dark:bg-rose-900/30 text-rose-600 rounded-2xl w-fit mb-6">
                  <Activity size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">4. Regression</h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Predicting a <strong>continuous numerical value</strong>. Unlike classification (discrete), regression outputs numbers.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Examples</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Predict house price
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Predict temperature
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Predict stock price
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                  <div className="w-full h-24 bg-white dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 relative overflow-hidden p-4">
                    <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-600" />
                    <div className="absolute bottom-4 left-4 top-4 w-0.5 bg-slate-200 dark:bg-slate-600" />
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-8 left-4 h-0.5 bg-rose-500 origin-left -rotate-45"
                    />
                    <div className="absolute top-2 right-2 text-[10px] font-bold text-rose-500">Numerical Output</div>
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
