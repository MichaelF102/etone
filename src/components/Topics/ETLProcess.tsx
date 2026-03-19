import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Database, 
  ArrowRight, 
  Zap, 
  Settings, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Globe, 
  Code,
  Box,
  LayoutGrid,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export const ETLProcess: React.FC = () => {
  return (
    <TopicLayout 
      id="etl-process"
      title="ETL (Extract, Transform, Load)"
      subtitle="The data integration lifecycle: From raw sources to actionable insights."
    >
      {/* Definition Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <RefreshCw size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Settings size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is ETL?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-blue-50">
              ETL is the process of collecting data from multiple sources, cleaning and transforming it, and loading it into a Data Warehouse.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Zap className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Take raw data → clean it → store it for analysis.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Overview Visualization */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <TrendingUp className="text-blue-600" />
          ETL Pipeline Overview
        </h3>
        <div className="relative p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[48px] border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Sources */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors border border-slate-100 dark:border-slate-700">
                <Database size={32} />
              </div>
              <p className="font-bold text-sm">Data Sources</p>
            </div>

            <ArrowRight className="hidden lg:block text-slate-300" />

            {/* Extraction */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-blue-500 text-white rounded-3xl shadow-lg shadow-blue-500/20 w-48 text-center"
            >
              <Download size={32} className="mb-2" />
              <p className="font-bold">Extraction</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Collecting Data</p>
            </motion.div>

            <ArrowRight className="hidden lg:block text-slate-300" />

            {/* Staging Area */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-slate-800 text-white rounded-3xl shadow-lg w-48 text-center border border-slate-700"
            >
              <Layers size={32} className="mb-2 text-blue-400" />
              <p className="font-bold">Staging Area</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Temporary Storage</p>
            </motion.div>

            <ArrowRight className="hidden lg:block text-slate-300" />

            {/* Transformation */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-indigo-600 text-white rounded-3xl shadow-lg shadow-indigo-600/20 w-48 text-center"
            >
              <Settings size={32} className="mb-2" />
              <p className="font-bold">Transformation</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Cleaning & Formatting</p>
            </motion.div>

            <ArrowRight className="hidden lg:block text-slate-300" />

            {/* Loading */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-emerald-500 text-white rounded-3xl shadow-lg shadow-emerald-500/20 w-48 text-center"
            >
              <RefreshCw size={32} className="mb-2" />
              <p className="font-bold">Loading</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Storing Data</p>
            </motion.div>

            <ArrowRight className="hidden lg:block text-slate-300" />

            {/* Warehouse */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors border border-slate-100 dark:border-slate-700">
                <Box size={32} />
              </div>
              <p className="font-bold text-sm">Data Warehouse</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Extraction Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Download size={24} />
          </div>
          <h3 className="text-2xl font-bold">1. Extraction</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Globe size={20} className="text-blue-500" />
              Common Sources
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Databases", i: Database },
                { t: "APIs", i: Code },
                { t: "Files (CSV, Excel)", i: FileText },
                { t: "Web Data", i: Globe },
              ].map((source, i) => (
                <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center gap-3">
                  <source.i size={18} className="text-slate-400" />
                  <span className="text-sm font-medium">{source.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <LayoutGrid size={200} className="hidden" />
              Types of Extraction
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <p className="font-bold text-blue-600 mb-1">Full Extraction</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Entire dataset is extracted. Typically used for the first-time load.</p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <p className="font-bold text-indigo-600 mb-1">Incremental Extraction</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Only new or changed data is extracted. Faster and more efficient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Transformation Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Settings size={24} />
          </div>
          <h3 className="text-2xl font-bold">2. Transformation</h3>
        </div>

        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6">Key Operations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Cleaning missing values",
                  "Removing duplicates",
                  "Data formatting",
                  "Aggregation",
                  "Normalization",
                  "Splitting & joining columns"
                ].map((op, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span className="text-sm">{op}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-800/50">
              <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Transformation Examples</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <span className="text-xs font-mono text-slate-400">18-03-2026</span>
                  <ArrowRight size={14} className="text-indigo-400" />
                  <span className="text-xs font-mono font-bold">2026-03-18</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <span className="text-xs font-mono text-slate-400">$100.00</span>
                  <ArrowRight size={14} className="text-indigo-400" />
                  <span className="text-xs font-mono font-bold">100.00 USD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <span className="text-xs font-mono text-slate-400">John Doe (Duplicate)</span>
                  <ArrowRight size={14} className="text-indigo-400" />
                  <span className="text-xs font-mono font-bold text-emerald-500">Unique Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Loading Section */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <RefreshCw size={24} />
          </div>
          <h3 className="text-2xl font-bold">3. Loading</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Initial Load", 
              desc: "First-time loading of the entire dataset into the warehouse.",
              color: "emerald"
            },
            { 
              title: "Incremental Load", 
              desc: "Load only updated or new data since the last load.",
              color: "blue"
            },
            { 
              title: "Full Refresh", 
              desc: "Delete old data and reload the entire dataset completely.",
              color: "indigo"
            },
          ].map((type, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
              <h4 className={`text-lg font-bold text-${type.color}-600 mb-3`}>{type.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staging Area Section */}
      <section className="mb-16">
        <div className="p-12 bg-slate-900 rounded-[48px] text-white relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Layers size={200} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="text-blue-400" size={32} />
              <h3 className="text-3xl font-bold">The Staging Area</h3>
            </div>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              A temporary storage area used during ETL to perform transformations and ensure data quality before final loading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-400">Why is it Important?</h4>
                <ul className="space-y-4">
                  {[
                    "Prevents errors in the main warehouse",
                    "Improves processing efficiency",
                    "Allows for complex multi-step transformations",
                    "Acts as a buffer for source system data"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Process Flow</h4>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full p-3 bg-white/10 rounded-xl text-center text-sm font-bold">Sources</div>
                  <ArrowRight className="rotate-90 text-slate-700" size={16} />
                  <div className="w-full p-3 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-xl text-center text-sm font-bold">Staging Area</div>
                  <ArrowRight className="rotate-90 text-slate-700" size={16} />
                  <div className="w-full p-3 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-xl text-center text-sm font-bold">Transformation</div>
                  <ArrowRight className="rotate-90 text-slate-700" size={16} />
                  <div className="w-full p-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-center text-sm font-bold">Warehouse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="mb-16">
        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[32px] border border-blue-100 dark:border-blue-900/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2">Key Takeaway</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                The primary goal of ETL is to ensure <strong>Data Quality</strong> and <strong>Consistency</strong>. By systematically extracting, cleaning, and loading data, organizations can trust their analytics and make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};
