import React, { useState, useMemo } from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Box, 
  Layers, 
  Database, 
  Zap, 
  RefreshCw, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  LayoutGrid,
  Maximize2,
  Minimize2,
  Scissors,
  RotateCw,
  Grid3X3,
  ChevronDown,
  Table as TableIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OLAPCubeVisualization } from '../Visualizations';

const DIMENSIONS = {
  time: {
    Year: ['2022', '2023', '2024'],
    Month: ['Jan', 'Feb', 'Mar'],
    Day: ['D1', 'D2', 'D3']
  },
  location: {
    Country: ['India', 'USA', 'UK'],
    State: ['MH', 'NY', 'LDN'],
    City: ['Mumbai', 'NYC', 'London']
  },
  product: {
    Category: ['Electronics', 'Clothing', 'Food'],
    SubCategory: ['Mobiles', 'Shirts', 'Fruits'],
    Item: ['iPhone', 'T-Shirt', 'Apple']
  }
};

export const OLAPOperations: React.FC = () => {
  const [activeOp, setActiveOp] = useState<string | null>(null);
  const [levels, setLevels] = useState({
    time: 'Year',
    location: 'Country',
    product: 'Category'
  });

  // Generate mock data based on current levels
  const cubeData = useMemo(() => {
    const data = [];
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          data.push({
            x, y, z,
            value: Math.floor(Math.random() * 90000) + 10000
          });
        }
      }
    }
    return data;
  }, [levels]);

  const currentDimensions = {
    product: (DIMENSIONS.product as any)[levels.product],
    time: (DIMENSIONS.time as any)[levels.time],
    location: (DIMENSIONS.location as any)[levels.location]
  };

  const handleLevelChange = (dim: string, level: string) => {
    setLevels(prev => ({ ...prev, [dim]: level }));
    // Visual feedback for drill-down/roll-up
    if (level === 'Day' || level === 'City' || level === 'Item') {
      setActiveOp('Drill-down');
    } else if (level === 'Year' || level === 'Country' || level === 'Category') {
      setActiveOp('Roll-up');
    }
    setTimeout(() => setActiveOp(null), 1000);
  };

  return (
    <TopicLayout 
      id="olap-cube"
      title="Multidimensional Analysis & OLAP Cubes"
      subtitle="Analyzing data from multiple perspectives for complex business insights."
    >
      {/* Multidimensional Analysis Section */}
      <section className="mb-16">
        <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[40px] text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Grid3X3 size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold">What is Multidimensional Analysis?</h3>
            </div>
            <p className="text-xl leading-relaxed mb-8 text-emerald-50">
              It means analyzing data across multiple dimensions such as Time, Location, and Product.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Zap className="text-yellow-300" size={24} />
              <p className="text-lg font-medium">
                “Sales of product X in Mumbai during 2024?”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OLAP Cube Definition */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Box className="text-emerald-600" />
              OLAP Cube (Definition)
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              An OLAP Cube is a data structure that allows data to be viewed in multiple dimensions (2D, 3D, or more).
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-xl">👉</span>
                <p><strong>Each axis</strong> = a dimension</p>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-xl">👉</span>
                <p><strong>Inside values</strong> = measures (e.g., sales, profit)</p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span>📦</span> Example
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Dimensions</p>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Time (Year, Month)</li>
                    <li>• Location (City)</li>
                    <li>• Product</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Measure</p>
                  <p className="text-sm font-bold text-emerald-600">Sales</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="relative p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center">
              <div className="w-48 h-48 relative perspective-1000 mb-8">
                <div className="w-full h-full relative preserve-3d animate-slow-spin">
                  <div className="absolute inset-0 bg-emerald-500/40 border-2 border-emerald-600 transform translate-z-24 flex items-center justify-center text-xs font-bold">Sales</div>
                  <div className="absolute inset-0 bg-emerald-500/40 border-2 border-emerald-600 transform rotate-y-180 translate-z-24"></div>
                  <div className="absolute inset-0 bg-teal-500/40 border-2 border-teal-600 transform rotate-y-90 translate-z-24 flex items-center justify-center text-xs font-bold">Time</div>
                  <div className="absolute inset-0 bg-teal-500/40 border-2 border-teal-600 transform rotate-y--90 translate-z-24"></div>
                  <div className="absolute inset-0 bg-cyan-500/40 border-2 border-cyan-600 transform rotate-x-90 translate-z-24 flex items-center justify-center text-xs font-bold">Product</div>
                  <div className="absolute inset-0 bg-cyan-500/40 border-2 border-cyan-600 transform rotate-x--90 translate-z-24"></div>
                </div>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">3D Representation of Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Query Pre-computing Section */}
      <section className="mb-16">
        <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-[32px] border border-emerald-100 dark:border-emerald-800">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span>🔹</span> Query Pre-computing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">📌 Concept</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pre-calculating results for common queries to make OLAP very fast.</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">📌 Example</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Instead of computing total sales per month every time, store it in advance.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle2 size={16} />
                Benefit: Faster query response & efficient analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lab Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Controls Panel */}
          <div className="lg:w-1/3 space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Layers size={16} />
                Dimension Selectors
              </h4>
              <div className="space-y-4">
                {Object.entries(DIMENSIONS).map(([dim, opts]) => (
                  <div key={dim} className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">{dim}</label>
                    <div className="relative">
                      <select 
                        value={(levels as any)[dim]}
                        onChange={(e) => handleLevelChange(dim, e.target.value)}
                        className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        {Object.keys(opts).map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <RotateCw size={16} />
                OLAP Operations
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Roll-up', icon: Maximize2 },
                  { id: 'Drill-down', icon: Minimize2 },
                  { id: 'Slice', icon: Scissors },
                  { id: 'Dice', icon: LayoutGrid },
                  { id: 'Pivot', icon: RotateCw },
                ].map(op => (
                  <button 
                    key={op.id}
                    onClick={() => setActiveOp(activeOp === op.id ? null : op.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeOp === op.id 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                    }`}
                  >
                    <op.icon size={14} />
                    {op.id}
                  </button>
                ))}
                <button 
                  onClick={() => { setActiveOp(null); setLevels({ time: 'Year', location: 'Country', product: 'Category' }); }}
                  className="col-span-2 mt-2 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>

          {/* Visualization Panel */}
          <div className="lg:w-2/3">
            <OLAPCubeVisualization 
              activeOp={activeOp} 
              dimensions={currentDimensions}
              data={cubeData}
            />
          </div>
        </div>

        {/* Live Data Table */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-lg font-bold flex items-center gap-3">
              <TableIcon className="text-emerald-600" />
              Live Data Table View
            </h4>
            <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Rows: {levels.product}</span>
              <span>Cols: {levels.time}</span>
              <span>Filter: {levels.location}</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 border-b border-slate-200 dark:border-slate-800 font-bold text-slate-500 uppercase text-[10px] tracking-widest">
                    {levels.product} \ {levels.time}
                  </th>
                  {currentDimensions.time.map(t => (
                    <th key={t} className="p-4 border-b border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white text-sm">
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {currentDimensions.product.map((p, pIdx) => (
                  <tr key={p} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm bg-slate-50/30 dark:bg-slate-800/20">
                      {p}
                    </td>
                    {currentDimensions.time.map((t, tIdx) => {
                      // Show data for the first location in the table view
                      const cellData = cubeData.find(d => d.x === pIdx && d.y === tIdx && d.z === 0);
                      return (
                        <td key={t} className="p-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`${levels.product}-${levels.time}-${cellData?.value}`}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="inline-block"
                            >
                              ₹{cellData?.value.toLocaleString()}
                            </motion.span>
                          </AnimatePresence>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-slate-400 italic">
            * Table currently showing slice for {currentDimensions.location[0]} ({levels.location}). 
            Perform a <strong>Slice</strong> or <strong>Dice</strong> to filter data further.
          </p>
        </div>
      </section>

      {/* Architecture Comparison */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Database className="text-emerald-600" />
          🏗️ 2. OLAP Server Architecture
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* ROLAP */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                <Database size={20} />
              </div>
              <h4 className="text-xl font-bold">ROLAP</h4>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Relational OLAP</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase mb-1">📌 Definition</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Uses relational databases (tables)</p>
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase mb-1">📌 Features</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• No pre-computation</li>
                  <li>• SQL-based queries</li>
                  <li>• Handles large data</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">✅ Advantages</p>
                  <p className="text-xs text-slate-500">Scalable, Flexible</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-red-500 uppercase mb-1">❌ Disadvantages</p>
                  <p className="text-xs text-slate-500">Slower performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOLAP */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex items-center justify-center">
                <Box size={20} />
              </div>
              <h4 className="text-xl font-bold">MOLAP</h4>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Multidimensional OLAP</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase mb-1">📌 Definition</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Uses multidimensional cube storage</p>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase mb-1">📌 Features</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Data is pre-computed</li>
                  <li>• Stored in cube format</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold text-teal-600 uppercase mb-1">✅ Advantages</p>
                  <p className="text-xs text-slate-500">Very fast queries, Optimized</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-red-500 uppercase mb-1">❌ Disadvantages</p>
                  <p className="text-xs text-slate-500">Limited scale, Storage overhead</p>
                </div>
              </div>
            </div>
          </div>

          {/* HOLAP */}
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 flex items-center justify-center">
                <RefreshCw size={20} />
              </div>
              <h4 className="text-xl font-bold">HOLAP</h4>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Hybrid OLAP</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-cyan-600 uppercase mb-1">📌 Definition</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Combination of ROLAP + MOLAP</p>
              </div>
              <div>
                <p className="text-xs font-bold text-cyan-600 uppercase mb-1">📌 How it works</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Summary data → MOLAP</li>
                  <li>• Detailed data → ROLAP</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold text-cyan-600 uppercase mb-1">✅ Advantages</p>
                  <p className="text-xs text-slate-500">Balanced performance + scalability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">⚖️</span> Comparison Table
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-6 font-bold border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase text-[10px] tracking-widest">Feature</th>
                  <th className="p-6 font-bold text-emerald-600 border-b border-slate-200 dark:border-slate-800">ROLAP</th>
                  <th className="p-6 font-bold text-teal-600 border-b border-slate-200 dark:border-slate-800">MOLAP</th>
                  <th className="p-6 font-bold text-cyan-600 border-b border-slate-200 dark:border-slate-800">HOLAP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { f: "Storage", rolap: "Relational tables", molap: "Cube storage", holap: "Hybrid" },
                  { f: "Speed", rolap: "Slow", molap: "Fast", holap: "Medium" },
                  { f: "Scalability", rolap: "High", molap: "Low", holap: "High" },
                  { f: "Pre-computation", rolap: "No", molap: "Yes", holap: "Partial" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-6 font-bold text-slate-700 dark:text-slate-300">{row.f}</td>
                    <td className="p-6 text-slate-600 dark:text-slate-400">{row.rolap}</td>
                    <td className="p-6 text-slate-600 dark:text-slate-400">{row.molap}</td>
                    <td className="p-6 text-slate-600 dark:text-slate-400">{row.holap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OLAP Operations Theory */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <RotateCw className="text-emerald-600" />
          🔄 3. OLAP Operations
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          These are key operations used to analyze cube data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Roll-up", 
              def: "Aggregating data to a higher level", 
              ex: "City → State → Country",
              icon: Maximize2,
              color: "emerald"
            },
            { 
              title: "Drill-down", 
              def: "Going into more detailed data", 
              ex: "Year → Month → Day",
              icon: Minimize2,
              color: "teal"
            },
            { 
              title: "Slice", 
              def: "Fixing one dimension to get a 2D view", 
              ex: "Sales in 2024 only",
              icon: Scissors,
              color: "cyan"
            },
            { 
              title: "Dice", 
              def: "Selecting multiple dimensions to create a sub-cube", 
              ex: "Sales in Mumbai & Delhi in 2024",
              icon: LayoutGrid,
              color: "blue"
            },
            { 
              title: "Pivot (Rotate)", 
              def: "Rotating cube axes to view data differently", 
              ex: "Swap rows ↔ columns",
              icon: RotateCw,
              color: "indigo"
            },
          ].map((op, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:border-emerald-500 transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-${op.color}-50 dark:bg-${op.color}-900/30 text-${op.color}-600 flex items-center justify-center mb-4 group-hover:bg-${op.color}-600 group-hover:text-white transition-colors`}>
                <op.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2">🔹 {op.title}</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">📌 Definition</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{op.def}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">👉 Example</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{op.ex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </TopicLayout>
  );
};
