import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Database, 
  BarChart3, 
  History, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Box,
  LayoutGrid,
  TrendingUp,
  Zap,
  Building2,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

export const DataWarehousing: React.FC = () => {
  return (
    <TopicLayout 
      id="data-warehousing"
      title="Data Warehousing"
      subtitle="Centralized storage for business intelligence and decision-making."
    >
      {/* Definition Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Database size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is a Data Warehouse?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-indigo-50">
              A Data Warehouse (DW) is a centralized system used to store, integrate, and manage data from multiple sources for analysis and decision-making.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Zap className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “A place where all business data is stored for analysis, not transactions.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <CheckCircle2 className="text-indigo-600" />
          Purpose of Data Warehouse
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Business Intelligence", desc: "Supports BI tools and advanced analytics.", icon: BarChart3 },
            { title: "Decision Making", desc: "Provides insights for strategic planning.", icon: TrendingUp },
            { title: "Historical Data", desc: "Stores data over long periods for trend analysis.", icon: History },
            { title: "Consistency", desc: "Ensures data is uniform across the organization.", icon: Layers },
            { title: "Reporting", desc: "Enables fast and complex query reporting.", icon: LayoutGrid },
            { title: "Integration", desc: "Combines data from disparate sources.", icon: Database },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-4">
                <item.icon size={20} />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OLTP vs OLAP Table */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <LayoutGrid className="text-indigo-600" />
          Database vs Data Warehouse (OLTP vs OLAP)
        </h3>
        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Feature</th>
                <th className="p-6 font-bold text-indigo-600 border-b border-slate-200 dark:border-slate-800">OLTP (Database)</th>
                <th className="p-6 font-bold text-blue-600 border-b border-slate-200 dark:border-slate-800">OLAP (Data Warehouse)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { f: "Purpose", oltp: "Transaction processing", olap: "Data analysis" },
                { f: "Operations", oltp: "Insert, Update, Delete", olap: "Read, Query" },
                { f: "Data", oltp: "Current", olap: "Historical" },
                { f: "Users", oltp: "Clerks, Applications", olap: "Analysts, Managers" },
                { f: "Example", oltp: "Banking system", olap: "Sales analysis" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                  <td className="p-6 text-slate-600 dark:text-slate-400">{row.oltp}</td>
                  <td className="p-6 text-slate-600 dark:text-slate-400">{row.olap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
            <p className="text-sm font-bold text-indigo-600 mb-1">OLTP Key Idea</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Day-to-day operations and transactions.</p>
          </div>
          <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
            <p className="text-sm font-bold text-blue-600 mb-1">OLAP Key Idea</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Decision making and deep analysis.</p>
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Box className="text-indigo-600" />
          Characteristics of Data Warehouse
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Subject-Oriented", 
              desc: "Organized around subjects (Sales, Customers, Products) rather than applications.",
              example: "Focuses on 'Sales' data across all apps, not just the 'Sales App'.",
              color: "blue"
            },
            { 
              title: "Integrated", 
              desc: "Data from multiple sources is converted into a consistent format.",
              example: "Merging different date formats (MM/DD vs DD/MM) into one.",
              color: "indigo"
            },
            { 
              title: "Time-Variant", 
              desc: "Stores historical data with time-stamps to show trends over time.",
              example: "Sales data for the last 5 years to predict next year's growth.",
              color: "violet"
            },
            { 
              title: "Non-Volatile", 
              desc: "Data is stable and not frequently updated or deleted once entered.",
              example: "Read-heavy operations; once loaded, data remains unchanged.",
              color: "purple"
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm"
            >
              <h4 className={`text-xl font-bold text-${item.color}-600 mb-4`}>{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
              <div className={`p-4 bg-${item.color}-50 dark:bg-${item.color}-900/10 rounded-xl border border-${item.color}-100 dark:border-${item.color}-900/30`}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Example</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{item.example}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Marts Section */}
      <section className="mb-16">
        <div className="p-12 bg-slate-900 rounded-[48px] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <LayoutGrid size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Data Marts</h3>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl">
              A Data Mart is a subset of a data warehouse focused on a specific department or business area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Sales Mart", icon: TrendingUp },
                { title: "Finance Mart", icon: Building2 },
                { title: "Marketing Mart", icon: Users },
              ].map((mart, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                  <mart.icon className="text-indigo-400 mb-4" size={32} />
                  <p className="font-bold">{mart.title}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-bold mb-4 text-indigo-400">Types of Data Marts</h4>
                <div className="space-y-4">
                  {[
                    { t: "Dependent", d: "Derived from the central Data Warehouse." },
                    { t: "Independent", d: "Created directly from source systems." },
                    { t: "Hybrid", d: "Combination of both dependent and independent." },
                  ].map((type, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold text-xs">{i+1}</div>
                      <div>
                        <p className="font-bold">{type.t}</p>
                        <p className="text-sm text-slate-500">{type.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-emerald-400">Advantages</h4>
                <ul className="space-y-3">
                  {[
                    "Faster access to data",
                    "Department-specific insights",
                    "Reduced complexity",
                    "Lower implementation cost"
                  ].map((adv, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Approaches */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <Building2 className="text-indigo-600" />
          Architecture Approaches
        </h3>

        <div className="space-y-12">
          {/* Top-Down */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 text-xs font-bold mb-4 uppercase tracking-widest">
                  Inmon Approach
                </div>
                <h4 className="text-3xl font-bold mb-4">Top-Down Approach</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Build a centralized Data Warehouse first, then create data marts from it. Focuses on enterprise-wide consistency.
                </p>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">When to Use</p>
                  <p className="text-sm font-medium">Large organizations needing a complete enterprise view.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-md p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-center font-bold">Data Sources</div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="w-full max-w-md p-4 bg-indigo-500 text-white rounded-xl text-center font-bold shadow-lg">Central Data Warehouse</div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="flex gap-4 w-full max-w-md">
                    <div className="flex-1 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-center text-xs font-bold">Sales Mart</div>
                    <div className="flex-1 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-center text-xs font-bold">Finance Mart</div>
                  </div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="w-full max-w-md p-4 bg-emerald-500 text-white rounded-xl text-center font-bold shadow-lg">Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Up */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-xs font-bold mb-4 uppercase tracking-widest">
                  Kimball Approach
                </div>
                <h4 className="text-3xl font-bold mb-4">Bottom-Up Approach</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Build data marts first, then integrate them into a Data Warehouse. Focuses on business processes and quick results.
                </p>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">When to Use</p>
                  <p className="text-sm font-medium">Small to medium organizations needing quick deployment.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-md p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-center font-bold">Data Sources</div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="flex gap-4 w-full max-w-md">
                    <div className="flex-1 p-3 bg-blue-500 text-white rounded-lg text-center text-xs font-bold shadow-md">Sales Mart</div>
                    <div className="flex-1 p-3 bg-blue-500 text-white rounded-lg text-center text-xs font-bold shadow-md">Finance Mart</div>
                  </div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="w-full max-w-md p-4 bg-indigo-500 text-white rounded-xl text-center font-bold shadow-lg">Integrated Data Warehouse</div>
                  <ArrowRight className="rotate-90 text-slate-300" />
                  <div className="w-full max-w-md p-4 bg-emerald-500 text-white rounded-xl text-center font-bold shadow-lg">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <AlertCircle className="text-indigo-600" />
          Inmon vs Kimball Comparison
        </h3>
        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-6 font-bold border-b border-slate-200 dark:border-slate-800">Feature</th>
                <th className="p-6 font-bold text-indigo-600 border-b border-slate-200 dark:border-slate-800">Inmon (Top-Down)</th>
                <th className="p-6 font-bold text-blue-600 border-b border-slate-200 dark:border-slate-800">Kimball (Bottom-Up)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { f: "Approach", inmon: "Centralized", kimball: "Decentralized" },
                { f: "First Step", inmon: "Data Warehouse", kimball: "Data Marts" },
                { f: "Speed", inmon: "Slow", kimball: "Fast" },
                { f: "Cost", inmon: "High", kimball: "Lower" },
                { f: "Data Consistency", inmon: "High", kimball: "Medium" },
                { f: "Flexibility", inmon: "Low", kimball: "High" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                  <td className="p-6 text-slate-600 dark:text-slate-400">{row.inmon}</td>
                  <td className="p-6 text-slate-600 dark:text-slate-400">{row.kimball}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </TopicLayout>
  );
};
