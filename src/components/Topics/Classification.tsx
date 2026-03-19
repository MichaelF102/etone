import React from 'react';
import { motion } from 'framer-motion';
import { Tag, CheckCircle, Shield, Mail, Activity, ArrowRight, Layers } from 'lucide-react';

const Classification: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Tag className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm uppercase tracking-wider">
              Supervised Learning
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Classification</h2>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Assigning data points to predefined categories based on learned features.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <Layers className="w-64 h-64" />
        </div>
      </div>

      {/* Definition & Key Concept */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-emerald-600">
            <CheckCircle className="w-5 h-5" />
            What is Classification?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Classification is the process of predicting the class or category of given data points. It is a type of supervised learning where the model is trained on a labeled dataset.
          </p>
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <p className="text-sm text-emerald-700 font-medium italic">
              "Is this A or B? Is it Spam or Not Spam?"
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-teal-600">
            <Shield className="w-5 h-5" />
            Binary vs Multi-class
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium text-slate-800">Binary Classification</p>
                <p className="text-sm text-slate-500">Only two possible classes (e.g., Yes/No, 0/1)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium text-slate-800">Multi-class Classification</p>
                <p className="text-sm text-slate-500">More than two classes (e.g., Apple, Banana, Orange)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual Example */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white overflow-hidden relative">
        <h3 className="text-xl font-semibold mb-8 text-center">Visualizing Decision Boundaries</h3>
        <div className="relative h-64 flex items-center justify-center">
          {/* Class A Points */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`a-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-4 h-4 bg-emerald-400 rounded-full absolute"
              style={{
                left: `${20 + Math.random() * 25}%`,
                top: `${20 + Math.random() * 60}%`
              }}
            />
          ))}
          
          {/* Class B Points */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`b-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="w-4 h-4 bg-teal-400 rounded-sm absolute"
              style={{
                left: `${55 + Math.random() * 25}%`,
                top: `${20 + Math.random() * 60}%`
              }}
            />
          ))}
          
          {/* Decision Boundary */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '80%' }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-1 bg-white/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          
          <div className="absolute left-[30%] top-4 text-xs text-emerald-400 font-bold uppercase tracking-widest">
            Class A
          </div>
          <div className="absolute right-[30%] top-4 text-xs text-teal-400 font-bold uppercase tracking-widest">
            Class B
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-sm italic">
          The model learns to draw a boundary that separates different classes.
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Real-World Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <Mail className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Email Filtering</h4>
            <p className="text-sm text-slate-600">Automatically identifying spam emails and moving them to the junk folder.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <Activity className="w-8 h-8 text-teal-500 mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Medical Diagnosis</h4>
            <p className="text-sm text-slate-600">Predicting whether a patient has a specific condition based on lab results.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
            <Shield className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="font-bold text-slate-800 mb-2">Fraud Detection</h4>
            <p className="text-sm text-slate-600">Categorizing credit card transactions as "Legitimate" or "Fraudulent".</p>
          </div>
        </div>
      </div>

      {/* Algorithms */}
      <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
        <h3 className="text-xl font-bold text-emerald-900 mb-6">Popular Classification Algorithms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Decision Trees", desc: "Uses a tree-like structure of decisions." },
            { name: "Random Forest", desc: "An ensemble of multiple decision trees." },
            { name: "Support Vector Machines (SVM)", desc: "Finds the optimal hyperplane to separate classes." },
            { name: "Logistic Regression", desc: "Predicts the probability of a binary outcome." }
          ].map((algo, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-emerald-100">
              <div>
                <span className="font-bold text-emerald-600">{algo.name}</span>
                <p className="text-xs text-slate-500">{algo.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classification;
