import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  ArrowRight, 
  Database, 
  Filter, 
  Combine, 
  MousePointerClick, 
  RefreshCw, 
  Cpu, 
  Search, 
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

export const KDDProcess: React.FC = () => {
  const steps = [
    { 
      id: 1,
      icon: Filter, 
      title: 'Data Cleaning', 
      purpose: 'Remove noise, errors, and missing values',
      techniques: ['Handling missing values (mean, median)', 'Removing duplicates', 'Noise filtering'],
      example: 'Dataset has missing age values or incorrect entries → cleaned',
      color: 'blue'
    },
    { 
      id: 2,
      icon: Combine, 
      title: 'Data Integration', 
      purpose: 'Combine data from multiple sources',
      techniques: ['Databases', 'Data warehouses', 'APIs'],
      example: 'Merge customer data from Sales system and CRM system',
      color: 'indigo'
    },
    { 
      id: 3,
      icon: MousePointerClick, 
      title: 'Data Selection', 
      purpose: 'Select relevant data for analysis',
      techniques: ['Feature selection', 'Dimensionality reduction'],
      example: 'From customer dataset, select only: age, income, purchase history',
      color: 'violet'
    },
    { 
      id: 4,
      icon: RefreshCw, 
      title: 'Data Transformation', 
      purpose: 'Convert data into suitable format',
      techniques: ['Normalization', 'Aggregation', 'Feature scaling', 'Encoding categorical data'],
      example: 'Convert income into normalized range (0–1)',
      color: 'purple'
    },
    { 
      id: 5,
      icon: Cpu, 
      title: 'Data Mining', 
      purpose: 'Apply algorithms to extract patterns',
      techniques: ['Classification', 'Clustering', 'Association rules', 'Regression'],
      example: 'Predict customer churn or find buying patterns',
      color: 'rose'
    },
    { 
      id: 6,
      icon: Search, 
      title: 'Evaluation', 
      purpose: 'Identify useful and meaningful patterns',
      techniques: ['Remove irrelevant patterns', 'Validate results', 'Interpret insights'],
      example: 'Not all patterns are useful → filter meaningful ones',
      color: 'emerald'
    }
  ];

  return (
    <TopicLayout 
      id="kdd-process"
      title="KDD Process"
      subtitle="Knowledge Discovery in Databases: The end-to-end process of finding knowledge."
    >
      {/* Definition Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-slate-700">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Layers size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is KDD?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-slate-300">
              KDD is the complete process of extracting useful knowledge from raw data. It is not just one step, but an entire pipeline.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-blue-500/10 backdrop-blur-md rounded-2xl border border-blue-500/20">
              <AlertCircle className="text-blue-400" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-1">Important Note</p>
                <p className="text-lg font-medium text-blue-100">“Data Mining is only one step of KDD.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <RefreshCw className="text-blue-600" />
          KDD Process (Step-by-Step)
        </h3>
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 -mb-12 z-0" />
              )}
              
              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-${step.color}-500/20`}>
                  <step.icon size={32} />
                </div>
                
                <div className="flex-1 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{step.id}. {step.title}</h4>
                    <div className={`px-4 py-1 rounded-full bg-${step.color}-50 dark:bg-${step.color}-900/30 text-${step.color}-600 text-sm font-bold`}>
                      Step {step.id}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Purpose</p>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{step.purpose}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Techniques</p>
                        <div className="flex flex-wrap gap-2">
                          {step.techniques.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-100 dark:border-slate-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-6 bg-${step.color}-50/50 dark:bg-${step.color}-900/10 rounded-2xl border border-${step.color}-100 dark:border-${step.color}-900/30`}>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Real-World Example</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "{step.example}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple Flow View */}
      <section className="mb-16">
        <div className="p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[48px] border border-slate-100 dark:border-slate-800 text-center">
          <h3 className="text-2xl font-bold mb-12">Complete Flow (Simple View)</h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="px-8 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 font-bold">Raw Data</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-blue-500 text-white rounded-2xl shadow-lg font-bold">Data Cleaning</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-indigo-500 text-white rounded-2xl shadow-lg font-bold">Data Integration</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-violet-500 text-white rounded-2xl shadow-lg font-bold">Data Selection</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-purple-500 text-white rounded-2xl shadow-lg font-bold">Data Transformation</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-rose-500 text-white rounded-2xl shadow-lg font-bold">Data Mining</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-emerald-500 text-white rounded-2xl shadow-lg font-bold">Evaluation</div>
            <ArrowRight className="rotate-90 text-slate-300" />
            <div className="px-8 py-4 bg-amber-500 text-white rounded-2xl shadow-lg font-bold">Knowledge</div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="mb-16">
        <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[32px] border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-blue-600" />
            Key Points (Exam Focus)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "KDD is a multi-step process",
              "Data mining is only one stage",
              "Goal = Extract useful knowledge",
              "Improves decision making"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-blue-50 dark:border-blue-800/50">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p className="font-medium text-slate-700 dark:text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TopicLayout>
  );
};
