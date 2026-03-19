import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { Topic, CONTENT } from '../content';
import { KDDVisualization, KMeansVisualization, OLAPCubeVisualization, DBSCANVisualization, HierarchicalVisualization, AprioriVisualization, AssociationRuleVisualization, FPGrowthVisualization, DecisionTreeVisualization, KMeansNumericalVisualization } from './Visualizations';
import { ArrowRight, Play, Info, Database, Network, Cpu, ChevronRight, BrainCircuit, X } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import * as Topics from './Topics';

const IconMap: Record<string, any> = {
  Database,
  Network,
  Cpu
};

const TopicComponentMap: Record<string, React.FC> = {
  'dm-intro': Topics.DataMiningIntro,
  'star-vs-snowflake': Topics.StarVsSnowflake,
  'classification': Topics.Classification,
  'clustering': Topics.Clustering,
  'dbscan': Topics.DBSCAN,
  'hierarchical-clustering': Topics.HierarchicalClustering,
  'association-rules': Topics.AssociationRules,
  'apriori': Topics.AssociationRules,
  'fp-growth': Topics.FPGrowth,
  'decision-tree-numerical': Topics.DecisionTreeNumerical,
  'kmeans-numerical': Topics.KMeansNumerical,
  'hierarchical-numerical': Topics.HierarchicalNumerical,
  'dbscan-numerical': Topics.DBSCANNumerical,
  'apriori-numerical': Topics.AprioriNumerical,
  'fpgrowth-numerical': Topics.FPGrowthNumerical,
  'kdd-process': Topics.KDDProcess,
  'data-warehousing': Topics.DataWarehousing,
  'olap-cube': Topics.OLAPOperations,
  'etl-process': Topics.ETLProcess,
  'ensemble-learning': Topics.EnsembleLearning,
  'bagging-boosting': Topics.BaggingBoosting,
  'decision-trees': Topics.DecisionTrees,
  'cross-validation': Topics.CrossValidation,
  'pca': Topics.PCA,
  'k-means': Topics.KMeansClustering,
  'ml-types': Topics.MLTypes,
  'regression': Topics.Regression,
};

export const TopicRenderer: React.FC<{ topic: Topic }> = ({ topic }) => {
  const { theme } = useTheme();
  const { setActiveTopicId } = useProgress();
  const [paradigm, setParadigm] = useState<'traditional' | 'ml'>('traditional');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Reset quiz state when topic changes
  useEffect(() => {
    setSelectedOption(null);
  }, [topic.id]);

  const SpecificTopic = TopicComponentMap[topic.id];

  if (SpecificTopic) {
    return <SpecificTopic />;
  }

  const renderVisualization = () => {
    switch (topic.visualizationType) {
      case 'kdd-pipeline':
        return <KDDVisualization />;
      case 'kmeans-viz':
        return <KMeansVisualization />;
      case 'dbscan-viz':
        return <DBSCANVisualization />;
      case 'hierarchical-viz':
        return <HierarchicalVisualization />;
      case 'association-viz':
        return <AssociationRuleVisualization />;
      case 'apriori-viz':
        return <AprioriVisualization />;
      case 'fpgrowth-viz':
        return <FPGrowthVisualization />;
      case 'decision-tree-viz':
        return <DecisionTreeVisualization />;
      case 'kmeans-numerical-viz':
        return <KMeansNumericalVisualization />;
      case 'olap-cube':
        return <OLAPCubeVisualization />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto py-12 px-6"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">{topic.title}</h1>
        {topic.subtitle && (
          <p className="text-lg text-slate-600 dark:text-slate-400">{topic.subtitle}</p>
        )}
      </div>

      {topic.infoBox && (
        <div className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-3xl relative overflow-hidden">
          <div className="flex gap-4 items-start relative z-10">
            <div className="p-2 bg-blue-600 rounded-full text-white shrink-0">
              <Info size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">What is Machine Learning?</h3>
              <p className="italic text-blue-800 dark:text-blue-200 mb-2 text-lg">
                {topic.infoBox.quote} — <span className="text-blue-600 font-medium">{topic.infoBox.author}</span>
              </p>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {topic.infoBox.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {topic.processDiagram && (
        <div className="mb-12 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {topic.processDiagram.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 min-w-[160px]">
                  <p className="font-bold text-slate-900 dark:text-white">{step.label}</p>
                  {step.sublabel && <p className="text-xs text-slate-500">{step.sublabel}</p>}
                </div>
                {i < topic.processDiagram!.steps.length - 1 && (
                  <ArrowRight className="text-slate-300" size={24} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {topic.paradigmShift && (
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-8">Interactive Paradigm Shift</h3>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-12">
            <button 
              onClick={() => setParadigm('traditional')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                paradigm === 'traditional' ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600" : "text-slate-500"
              )}
            >
              Traditional Programming
            </button>
            <button 
              onClick={() => setParadigm('ml')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                paradigm === 'ml' ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600" : "text-slate-500"
              )}
            >
              Machine Learning
            </button>
          </div>

          <div className="p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="space-y-4">
                <div className="p-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-bold w-32 border border-blue-200 dark:border-blue-800">
                  {paradigm === 'traditional' ? topic.paradigmShift.traditional.input1 : topic.paradigmShift.machineLearning.input1}
                </div>
                <div className="p-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-bold w-32 border border-blue-200 dark:border-blue-800">
                  {paradigm === 'traditional' ? topic.paradigmShift.traditional.input2 : topic.paradigmShift.machineLearning.input2}
                </div>
              </div>
              <ArrowRight className="text-slate-300" size={32} />
              <div className="p-10 bg-slate-800 text-white rounded-3xl flex flex-col items-center gap-4 shadow-xl">
                <div className="p-3 bg-slate-700 rounded-xl">
                  {paradigm === 'traditional' ? <Play size={24} /> : <Network size={24} />}
                </div>
                <span className="font-bold tracking-widest uppercase text-xs">
                  {paradigm === 'traditional' ? topic.paradigmShift.traditional.process : topic.paradigmShift.machineLearning.process}
                </span>
              </div>
              <ArrowRight className="text-slate-300" size={32} />
              <div className="p-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-2xl font-bold border border-emerald-200 dark:border-emerald-800">
                {paradigm === 'traditional' ? topic.paradigmShift.traditional.output : topic.paradigmShift.machineLearning.output}
              </div>
            </div>
            <p className="mt-12 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {paradigm === 'traditional' 
                ? "In traditional programming, you provide the data and explicit rules (e.g., if image has whiskers -> cat). The computer outputs the answers. This is rigid and hard for complex tasks."
                : "In Machine Learning, you provide data and the desired answers. The algorithm learns the rules automatically and produces a model that can be used for future predictions."}
            </p>
          </div>
        </div>
      )}

      {topic.components && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">{topic.components.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topic.components.items.map((item, i) => {
              const Icon = IconMap[item.icon] || Database;
              return (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl w-fit mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.description}</p>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.example.title}</p>
                    {item.example.lines.map((line, j) => (
                      <p key={j} className="text-xs font-mono text-slate-600 dark:text-slate-400">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {topic.mlTypes && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">{topic.mlTypes.title}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {topic.mlTypes.items.map((type, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm relative overflow-hidden group">
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1.5",
                  type.color === 'blue' ? "bg-blue-500" : type.color === 'emerald' ? "bg-emerald-500" : "bg-orange-500"
                )} />
                <h4 className="text-xl font-bold mb-4">{type.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Example</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{type.example}</p>
                </div>

                {type.algorithms.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Algorithms</p>
                    <ul className="space-y-2">
                      {type.algorithms.map((algo, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          {algo}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.workflow && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">{topic.workflow.title}</h3>
          <div className="space-y-4">
            {topic.workflow.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl group hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.comparison && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">{topic.comparison.title}</h3>
          <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-3xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {topic.comparison.headers.map((h, i) => (
                    <th key={i} className="p-6 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topic.comparison.rows.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={cn(
                        "p-6 text-sm border-b border-slate-100 dark:border-slate-800",
                        j === 0 ? "font-bold text-slate-700 dark:text-slate-300" : 
                        j === 2 ? "text-blue-600 dark:text-blue-400 font-medium" : "text-slate-500"
                      )}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {topic.code && (
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="bg-slate-50 dark:bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-500">python_example.py</span>
            <button className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline">
              <Play size={12} /> Run Code
            </button>
          </div>
          <SyntaxHighlighter 
            language="python" 
            style={theme === 'dark' ? vscDarkPlus : vs}
            customStyle={{ margin: 0, padding: '2rem', fontSize: '14px' }}
          >
            {topic.code}
          </SyntaxHighlighter>
        </div>
      )}

      {topic.content && (
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <ReactMarkdown>{topic.content}</ReactMarkdown>
        </div>
      )}

      {renderVisualization() && (
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600">
              ✨
            </span>
            Interactive Demo
          </h3>
          {renderVisualization()}
        </div>
      )}

      <div className="flex items-center justify-between pt-12 border-t border-slate-200 dark:border-slate-800">
        {(() => {
          const currentIndex = CONTENT.findIndex(t => t.id === topic.id);
          const prevTopic = CONTENT[currentIndex - 1];
          const nextTopic = CONTENT[currentIndex + 1];

          return (
            <>
              {prevTopic ? (
                <button
                  onClick={() => {
                    setActiveTopicId(prevTopic.id);
                    window.scrollTo(0, 0);
                  }}
                  className="flex flex-col items-start gap-2 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Previous</span>
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-blue-600 transition-colors">
                    <ArrowRight className="rotate-180" size={18} />
                    {prevTopic.title}
                  </div>
                </button>
              ) : <div />}

              {nextTopic ? (
                <button
                  onClick={() => {
                    setActiveTopicId(nextTopic.id);
                    window.scrollTo(0, 0);
                  }}
                  className="flex flex-col items-end gap-2 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group text-right"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next</span>
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-blue-600 transition-colors">
                    {nextTopic.title}
                    <ArrowRight size={18} />
                  </div>
                </button>
              ) : <div />}
            </>
          );
        })()}
      </div>
    </motion.div>
  );
};
