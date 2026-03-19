import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Target, Activity, ArrowRight } from 'lucide-react';

const Regression: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm uppercase tracking-wider">
              Supervised Learning
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Regression Analysis</h2>
          <p className="text-indigo-100 text-lg max-w-2xl">
            Predicting continuous numerical values based on historical data patterns.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <LineChart className="w-64 h-64" />
        </div>
      </div>

      {/* Definition & Key Concept */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            What is Regression?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Regression is a statistical method used to determine the strength and character of the relationship between one dependent variable and a series of other variables (independent variables).
          </p>
          <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <p className="text-sm text-indigo-700 font-medium italic">
              "Predicting a specific number, not just a category."
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" />
            Regression vs Classification
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium text-slate-800">Classification</p>
                <p className="text-sm text-slate-500">Predicts discrete labels (e.g., Spam or Not Spam)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
              <div>
                <p className="font-medium text-slate-800">Regression</p>
                <p className="text-sm text-slate-500">Predicts continuous values (e.g., Price, Temperature)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual Example */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white overflow-hidden relative">
        <h3 className="text-xl font-semibold mb-8 text-center">Visualizing Linear Regression</h3>
        <div className="relative h-64 flex items-end justify-between px-12">
          {/* Scatter Points */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-3 h-3 bg-indigo-400 rounded-full absolute"
              style={{
                left: `${10 + i * 7.5}%`,
                bottom: `${20 + i * 5 + (Math.random() * 20 - 10)}%`
              }}
            />
          ))}
          
          {/* Regression Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 absolute left-[10%] bottom-[25%] origin-left"
            style={{ transform: 'rotate(-15deg)' }}
          />
          
          {/* Labels */}
          <div className="absolute left-4 bottom-0 text-xs text-slate-400 uppercase tracking-widest vertical-text">
            Output (y)
          </div>
          <div className="absolute left-1/2 -bottom-4 text-xs text-slate-400 uppercase tracking-widest -translate-x-1/2">
            Input Feature (X)
          </div>
        </div>
        <div className="mt-12 text-center text-slate-400 text-sm italic">
          The line of best fit minimizes the distance to all data points.
        </div>
      </div>

      {/* Real World Use Cases */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Real-World Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Real Estate",
              desc: "Predicting house prices based on square footage and location.",
              icon: "🏠"
            },
            {
              title: "Finance",
              desc: "Forecasting stock market trends and future prices.",
              icon: "📈"
            },
            {
              title: "Weather",
              desc: "Predicting exact temperature or rainfall amounts.",
              icon: "🌡️"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Algorithms */}
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-6">Common Regression Algorithms</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-indigo-100">
            <div>
              <span className="font-bold text-indigo-600">Linear Regression</span>
              <p className="text-sm text-slate-500">The simplest form, modeling relationship with a straight line.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-300" />
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-indigo-100">
            <div>
              <span className="font-bold text-indigo-600">Polynomial Regression</span>
              <p className="text-sm text-slate-500">Used when data patterns are curved rather than straight.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-300" />
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-indigo-100">
            <div>
              <span className="font-bold text-indigo-600">Decision Tree Regression</span>
              <p className="text-sm text-slate-500">Breaks down data into smaller subsets to make predictions.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regression;
