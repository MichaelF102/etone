import React from 'react';
import { TopicLayout } from '../TopicLayout';
import { 
  Star, 
  Snowflake, 
  Database, 
  GitMerge, 
  Zap, 
  HardDrive, 
  ShieldCheck, 
  AlertTriangle,
  Lightbulb,
  Building2,
  Table as TableIcon,
  GraduationCap,
  Landmark,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const TableDef = ({ title, type, fields }: { title: string, type: 'fact' | 'dim', fields: any[] }) => (
  <div className={`rounded-xl border overflow-hidden ${type === 'fact' ? 'border-amber-200 dark:border-amber-800' : 'border-blue-200 dark:border-blue-800'}`}>
    <div className={`py-2 px-3 font-bold text-sm ${type === 'fact' ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100' : 'bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100'}`}>
      {title}
    </div>
    <div className="bg-white dark:bg-slate-900 p-3 space-y-1.5">
      {fields.map((f, i) => (
        <div key={i} className="flex justify-between items-center text-xs">
          <span className="text-slate-700 dark:text-slate-300 font-medium">{f.name}</span>
          {f.type && (
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
              f.type === 'PK' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
              f.type === 'FK' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
              'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
            }`}>
              {f.type}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const DimTable = ({ title, fields, top, left, right, bottom }: any) => (
  <div className="absolute z-10 w-36 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg shadow-md" style={{ top, left, right, bottom }}>
    <div className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 font-bold text-center py-1 text-sm border-b-2 border-blue-300 dark:border-blue-700 rounded-t-md">{title}</div>
    <div className="p-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
      {fields.map((f: string, i: number) => (
        <div key={i}>{f}</div>
      ))}
    </div>
  </div>
);

const SubDimTable = ({ title, fields, top, left, right, bottom }: any) => (
  <div className="absolute z-10 w-28 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-300 dark:border-emerald-700 rounded-lg shadow-sm" style={{ top, left, right, bottom }}>
    <div className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 font-bold text-center py-1 text-[10px] border-b-2 border-emerald-300 dark:border-emerald-700 rounded-t-md">{title}</div>
    <div className="p-1.5 text-[10px] text-slate-700 dark:text-slate-300 space-y-0.5">
      {fields.map((f: string, i: number) => (
        <div key={i}>{f}</div>
      ))}
    </div>
  </div>
);

const StarSchemaDiagram = () => {
  return (
    <div className="w-full overflow-x-auto mb-6 pb-4">
      <div className="relative min-w-[700px] h-[400px] bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center mx-auto">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
        </svg>
        
        {/* Fact Table */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-600 rounded-lg shadow-lg">
          <div className="bg-amber-400 dark:bg-amber-600 text-amber-900 dark:text-amber-50 font-bold text-center py-2 border-b-2 border-amber-500 dark:border-amber-700 rounded-t-md">Sales Fact</div>
          <div className="p-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex justify-between"><span>Sales_ID</span><span className="text-amber-600">PK</span></div>
            <div className="flex justify-between"><span>Date_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Store_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Product_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Customer_ID</span><span className="text-blue-500">FK</span></div>
            <div className="border-t border-amber-200 dark:border-amber-800 my-1 pt-1"></div>
            <div>Sales_Units</div>
            <div>Revenue</div>
          </div>
        </div>

        {/* Dimension Tables */}
        <DimTable title="Date Dimension" top="10%" left="15%" fields={['Date_ID (PK)', 'Year', 'Quarter', 'Month', 'Week']} />
        <DimTable title="Customer Dimension" top="10%" right="15%" fields={['Customer_ID (PK)', 'Name', 'Address', 'City']} />
        <DimTable title="Store Dimension" bottom="10%" left="15%" fields={['Store_ID (PK)', 'City', 'State', 'District', 'Zip']} />
        <DimTable title="Product Dimension" bottom="10%" right="15%" fields={['Product_ID (PK)', 'Name', 'Description', 'Price', 'Brand']} />
      </div>
    </div>
  );
};

const SnowflakeSchemaDiagram = () => {
  return (
    <div className="w-full overflow-x-auto mb-6 pb-4">
      <div className="relative min-w-[800px] h-[500px] bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center mx-auto">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Fact to Dims */}
          <line x1="50%" y1="50%" x2="35%" y2="35%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="65%" y2="35%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="35%" y2="65%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="65%" y2="65%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          
          {/* Dims to Subdims */}
          {/* Date to Month, Quarter, Week */}
          <line x1="35%" y1="35%" x2="15%" y2="20%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="35%" y1="35%" x2="35%" y2="15%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          <line x1="35%" y1="35%" x2="15%" y2="40%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          
          {/* Customer to City */}
          <line x1="65%" y1="35%" x2="85%" y2="20%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          
          {/* Store to State */}
          <line x1="35%" y1="65%" x2="15%" y2="85%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
          
          {/* Product to Brand */}
          <line x1="65%" y1="65%" x2="85%" y2="85%" stroke="currentColor" className="text-slate-300 dark:text-slate-600" strokeWidth="2" />
        </svg>
        
        {/* Fact Table */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-32 bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-600 rounded-lg shadow-lg">
          <div className="bg-amber-400 dark:bg-amber-600 text-amber-900 dark:text-amber-50 font-bold text-center py-1 text-sm border-b-2 border-amber-500 dark:border-amber-700 rounded-t-md">Sales Fact</div>
          <div className="p-2 text-[10px] text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex justify-between"><span>Sales_ID</span><span className="text-amber-600">PK</span></div>
            <div className="flex justify-between"><span>Date_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Store_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Product_ID</span><span className="text-blue-500">FK</span></div>
            <div className="flex justify-between"><span>Customer_ID</span><span className="text-blue-500">FK</span></div>
            <div className="border-t border-amber-200 dark:border-amber-800 my-1 pt-1"></div>
            <div>Sales_Units</div>
          </div>
        </div>

        {/* Dimension Tables */}
        <DimTable title="Date Dim" top="25%" left="28%" fields={['Date_ID', 'Month_ID', 'Quarter_ID', 'Week_ID']} />
        <DimTable title="Customer Dim" top="25%" right="28%" fields={['Customer_ID', 'Name', 'City_ID']} />
        <DimTable title="Store Dim" bottom="25%" left="28%" fields={['Store_ID', 'City', 'State_ID']} />
        <DimTable title="Product Dim" bottom="25%" right="28%" fields={['Product_ID', 'Name', 'Brand_ID']} />

        {/* Sub-dimension Tables */}
        <SubDimTable title="Month Dim" top="10%" left="5%" fields={['Month_ID', 'Name']} />
        <SubDimTable title="Quarter Dim" top="5%" left="28%" fields={['Quarter_ID', 'Name']} />
        <SubDimTable title="Week Dim" top="35%" left="5%" fields={['Week_ID', 'Name']} />
        
        <SubDimTable title="City Dim" top="10%" right="5%" fields={['City_ID', 'Name', 'State', 'Zip']} />
        
        <SubDimTable title="State Dim" bottom="5%" left="5%" fields={['State_ID', 'Name']} />
        
        <SubDimTable title="Brand Dim" bottom="5%" right="5%" fields={['Brand_ID', 'Name']} />
      </div>
    </div>
  );
};

const StarVsSnowflake: React.FC = () => {
  return (
    <TopicLayout 
      id="star-vs-snowflake"
      title="Star vs Snowflake Schema"
      subtitle="Understanding the two primary data warehouse design architectures."
    >
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Star Schema Overview */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-amber-500">
              <Star className="fill-amber-500" />
              Star Schema
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <Database size={18} className="text-blue-500" /> Definition
                </h4>
                <p>A data warehouse design where <strong>one central fact table</strong> is connected directly to multiple <strong>denormalized dimension tables</strong>. The structure visually resembles a star.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <TableIcon size={18} className="text-blue-500" /> Structure
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Fact Table:</strong> Contains numeric data (e.g., Sales, Revenue, Quantity) and foreign keys.</li>
                  <li><strong>Dimension Tables:</strong> Contains descriptive attributes (e.g., Customer, Product, Time, Location).</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <h5 className="font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 mb-2">
                    <ShieldCheck size={16} /> Advantages
                  </h5>
                  <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-300">
                    <li>Very fast queries (no joins between dimensions)</li>
                    <li>Simple structure → easy to understand</li>
                    <li>Ideal for OLAP / BI tools</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800/30">
                  <h5 className="font-bold text-red-800 dark:text-red-400 flex items-center gap-2 mb-2">
                    <AlertTriangle size={16} /> Disadvantages
                  </h5>
                  <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
                    <li>Data redundancy (repeated data)</li>
                    <li>Larger storage footprint</li>
                    <li>Poor normalization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Snowflake Schema Overview */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-sky-500">
              <Snowflake className="fill-sky-500" />
              Snowflake Schema
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <Database size={18} className="text-blue-500" /> Definition
                </h4>
                <p>A <strong>normalized version</strong> of the star schema where dimension tables are split into multiple related sub-tables. The structure visually resembles a snowflake.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2">
                  <TableIcon size={18} className="text-blue-500" /> Structure
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Fact Table:</strong> Same as the star schema.</li>
                  <li><strong>Dimension Tables:</strong> Normalized into hierarchical sub-tables (e.g., Product → Category).</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <h5 className="font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 mb-2">
                    <ShieldCheck size={16} /> Advantages
                  </h5>
                  <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-300">
                    <li>Less redundancy</li>
                    <li>Better data integrity</li>
                    <li>Saves storage space</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800/30">
                  <h5 className="font-bold text-red-800 dark:text-red-400 flex items-center gap-2 mb-2">
                    <AlertTriangle size={16} /> Disadvantages
                  </h5>
                  <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
                    <li>More joins → slower queries</li>
                    <li>Complex design</li>
                    <li>Harder to understand and query</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intuition Banner */}
        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl mb-12 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
            <Lightbulb className="text-indigo-600 dark:text-indigo-400" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">🧠 Intuition & Conceptual Difference (Very Important)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl">
                <h5 className="font-bold text-amber-600 dark:text-amber-500 mb-1 flex items-center gap-2"><Star size={16} /> Star Schema Thinking</h5>
                <p className="text-slate-700 dark:text-slate-300 italic">"Let's make querying fast—even if we duplicate data."</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2"><strong>Speed first.</strong> Optimized for read performance.</p>
              </div>
              <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl">
                <h5 className="font-bold text-sky-600 dark:text-sky-500 mb-1 flex items-center gap-2"><Snowflake size={16} /> Snowflake Schema Thinking</h5>
                <p className="text-slate-700 dark:text-slate-300 italic">"Let's avoid duplication—even if queries become complex."</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2"><strong>Storage & accuracy first.</strong> Optimized for data integrity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dives */}
        <div className="space-y-12 mb-16">
          {/* Star Schema Deep Dive */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Star className="text-amber-500 fill-amber-500" /> Star Schema (Deep Dive)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">Core Idea</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>One central fact table.</li>
                    <li>All dimension tables are <strong>denormalized (flat)</strong>.</li>
                    <li>No dimension-to-dimension relationships.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">Detailed Structure</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">1️⃣ Fact Table (Grain matters!)</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Example: Sales Fact</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-200 dark:bg-slate-700">
                            <tr>
                              <th className="p-2">Product_ID</th><th className="p-2">Customer_ID</th><th className="p-2">Time_ID</th><th className="p-2">Store_ID</th><th className="p-2">Sales</th><th className="p-2">Quantity</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800/30 text-sm">
                        <span className="font-bold text-blue-700 dark:text-blue-400">👉 Grain (VERY IMPORTANT):</span><br/>
                        "One row = one product sold to one customer at one time in one store"
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">2️⃣ Dimension Tables (Denormalized)</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Example: Product Dimension</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left mb-2">
                          <thead className="bg-slate-200 dark:bg-slate-700">
                            <tr>
                              <th className="p-2">Product_ID</th><th className="p-2">Name</th><th className="p-2">Brand</th><th className="p-2">Category</th><th className="p-2">Subcategory</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic">👉 All attributes in ONE table (even if redundant)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-slate-800 rounded-xl shadow-inner border border-slate-700">
                  <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Zap size={16} className="text-amber-400" /> Query Example
                  </h4>
                  <pre className="text-sm text-emerald-400 font-mono overflow-x-auto">
                    <code>
{`SELECT p.Category, SUM(f.Sales)
FROM Fact_Sales f
JOIN Dim_Product p 
  ON f.Product_ID = p.Product_ID
GROUP BY p.Category;`}
                    </code>
                  </pre>
                  <p className="text-amber-400 text-sm mt-3 font-medium">👉 Only 1 join → fast</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">🔥 Advanced Concepts</h4>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li><strong className="text-slate-800 dark:text-slate-200">Star Join Optimization:</strong> DB engines optimize joins when dimensions are flat.</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Bitmap Indexing:</strong> Used on low-cardinality columns (e.g., Gender, Region).</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Surrogate Keys:</strong> Use artificial keys instead of natural keys for faster, stable joins.</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                  <h4 className="font-bold text-red-800 dark:text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} /> Limitations
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>Data duplication:</strong> The same "Category" is repeated many times across rows, making it harder to maintain consistency if a category name changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Snowflake Schema Deep Dive */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2 mt-12">
              <Snowflake className="text-sky-500 fill-sky-500" /> Snowflake Schema (Deep Dive)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">Core Idea</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Dimension tables are <strong>normalized</strong>.</li>
                    <li>Hierarchical relationships are split into multiple related tables.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">Detailed Structure</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-3">Dimension Tables (Normalized)</h5>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Product Table</p>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr><th className="p-2">Product_ID</th><th className="p-2">Name</th><th className="p-2">Subcategory_ID</th></tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                        
                        <div className="pl-4 border-l-2 border-slate-300 dark:border-slate-600">
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Subcategory Table</p>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr><th className="p-2">Subcategory_ID</th><th className="p-2">Subcategory</th><th className="p-2">Category_ID</th></tr>
                              </thead>
                            </table>
                          </div>
                        </div>

                        <div className="pl-8 border-l-2 border-slate-300 dark:border-slate-600">
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Category Table</p>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                              <thead className="bg-slate-200 dark:bg-slate-700">
                                <tr><th className="p-2">Category_ID</th><th className="p-2">Category</th></tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-slate-800 rounded-xl shadow-inner border border-slate-700">
                  <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <GitMerge size={16} className="text-sky-400" /> Query Example
                  </h4>
                  <pre className="text-sm text-emerald-400 font-mono overflow-x-auto">
                    <code>
{`SELECT c.Category, SUM(f.Sales)
FROM Fact_Sales f
JOIN Product p 
  ON f.Product_ID = p.Product_ID
JOIN Subcategory s 
  ON p.Subcategory_ID = s.Subcategory_ID
JOIN Category c 
  ON s.Category_ID = c.Category_ID
GROUP BY c.Category;`}
                    </code>
                  </pre>
                  <p className="text-sky-400 text-sm mt-3 font-medium">👉 Multiple joins → slower</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">🔥 Advanced Concepts</h4>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li><strong className="text-slate-800 dark:text-slate-200">Normal Forms:</strong> Typically designed in 2NF or 3NF.</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Data Integrity:</strong> Update once → reflected everywhere.</li>
                    <li><strong className="text-slate-800 dark:text-slate-200">Less Redundancy:</strong> Dimension tables are smaller and more efficient for storage.</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                  <h4 className="font-bold text-red-800 dark:text-red-400 mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} /> Limitations
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>Complex queries:</strong> Harder to debug and write. Not ideal for direct connection to many BI dashboards due to the performance hit from multiple joins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <GitMerge className="text-indigo-500" /> ⚔️ Deep Comparison
          </h3>
          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200">Aspect</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-amber-600 dark:text-amber-500 flex items-center gap-2"><Star size={16}/> Star Schema</th>
                  <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-sky-600 dark:text-sky-500"><div className="flex items-center gap-2"><Snowflake size={16}/> Snowflake Schema</div></th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 dark:text-slate-400">
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Design</td>
                  <td className="p-4">Simple</td>
                  <td className="p-4">Complex</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Normalization</td>
                  <td className="p-4">Denormalized</td>
                  <td className="p-4">Normalized</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Query Speed</td>
                  <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">🚀 Fast</td>
                  <td className="p-4">🐢 Slower</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Joins</td>
                  <td className="p-4">Few</td>
                  <td className="p-4">Many</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Storage</td>
                  <td className="p-4">High</td>
                  <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Low</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Maintenance</td>
                  <td className="p-4">Easy</td>
                  <td className="p-4">Complex</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">Data Integrity</td>
                  <td className="p-4">Lower</td>
                  <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Higher</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-300">BI Tools</td>
                  <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">Excellent</td>
                  <td className="p-4">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-World Usage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <Building2 className="text-indigo-500" /> 🏢 Real-World Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/30 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-amber-600 dark:text-amber-500 mb-4 flex items-center gap-2">
                <Star size={20} /> Star Schema Used In:
              </h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Power BI dashboards</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Retail sales analytics</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Marketing reports</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900/30 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-sky-600 dark:text-sky-500 mb-4 flex items-center gap-2">
                <Snowflake size={20} /> Snowflake Schema Used In:
              </h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-sky-400"></div> Enterprise data warehouses</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-sky-400"></div> Financial systems</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-sky-400"></div> Complex hierarchical data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solved Example 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <GraduationCap className="text-indigo-500" /> Solved Example 1: University Course Management
          </h3>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            {/* Problem Statement */}
            <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Problem Statement:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A university is implementing a Course Management System to manage courses, students, instructors, and enrollments. An ER diagram has been developed with the following cardinalities:</p>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Each course can have many enrollments.</li>
                <li>Each student can be enrolled in many courses.</li>
                <li>Each instructor can teach many courses.</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Task: Design a star schema. Specify cardinalities, mappings, identify fact table and dimension tables. Define columns for each table.</p>
            </div>

            {/* Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-500 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Solution
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tables Identification */}
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-900/30">
                      <h5 className="font-bold text-amber-800 dark:text-amber-500 mb-2">1. Identify Fact Table</h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        The core event being recorded is an <strong>Enrollment</strong>.
                        <br/><br/>
                        <strong>Fact Table:</strong> <code>Fact_Enrollment</code>
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-900/30">
                      <h5 className="font-bold text-blue-800 dark:text-blue-500 mb-2">2. Identify Dimension Tables</h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        The entities that describe the enrollment event.
                        <ul className="list-disc pl-5 mt-1">
                          <li><code>Dim_Course</code></li>
                          <li><code>Dim_Student</code></li>
                          <li><code>Dim_Instructor</code></li>
                          <li><code>Dim_Time</code> (Standard practice to add time dimension)</li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  {/* Cardinalities & Mappings */}
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-200 dark:border-purple-900/30">
                    <h5 className="font-bold text-purple-800 dark:text-purple-500 mb-2">3. Cardinalities & Mappings</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      In a Star Schema, the relationship is always <strong>1-to-Many (1:N)</strong> from the Dimension table to the Fact table.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Course</code> (1) ➔ (N) <code>Fact_Enrollment</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Student</code> (1) ➔ (N) <code>Fact_Enrollment</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Instructor</code> (1) ➔ (N) <code>Fact_Enrollment</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Time</code> (1) ➔ (N) <code>Fact_Enrollment</code></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Schema Definition */}
              <div>
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">4. Table Columns Definition</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TableDef title="Fact_Enrollment" type="fact" fields={[
                    { name: 'Enrollment_ID', type: 'PK' },
                    { name: 'Course_ID', type: 'FK' },
                    { name: 'Student_ID', type: 'FK' },
                    { name: 'Instructor_ID', type: 'FK' },
                    { name: 'Time_ID', type: 'FK' },
                    { name: 'Credits_Earned', type: 'Fact' },
                    { name: 'Grade_Point', type: 'Fact' }
                  ]} />
                  <TableDef title="Dim_Course" type="dim" fields={[
                    { name: 'Course_ID', type: 'PK' },
                    { name: 'Course_Name', type: '' },
                    { name: 'Department', type: '' },
                    { name: 'Credits', type: '' }
                  ]} />
                  <TableDef title="Dim_Student" type="dim" fields={[
                    { name: 'Student_ID', type: 'PK' },
                    { name: 'Student_Name', type: '' },
                    { name: 'Major', type: '' },
                    { name: 'Enrollment_Year', type: '' }
                  ]} />
                  <TableDef title="Dim_Instructor" type="dim" fields={[
                    { name: 'Instructor_ID', type: 'PK' },
                    { name: 'Instructor_Name', type: '' },
                    { name: 'Department', type: '' },
                    { name: 'Title', type: '' }
                  ]} />
                  <TableDef title="Dim_Time" type="dim" fields={[
                    { name: 'Time_ID', type: 'PK' },
                    { name: 'Semester', type: '' },
                    { name: 'Year', type: '' }
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solved Example 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <Landmark className="text-indigo-500" /> Solved Example 2: Bank Transaction Management
          </h3>
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
            {/* Problem Statement */}
            <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Problem Statement:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A bank is implementing a Transaction Management System to manage customers, bank accounts, branches, and transactions. An ER diagram has been developed with the following cardinalities:</p>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Each transaction involves one customer and one account.</li>
                <li>Each customer can have many transactions.</li>
                <li>Each account can have many transactions.</li>
                <li>Each branch can process many transactions.</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Task: Design a star schema. Specify cardinalities, mappings, identify fact table and dimension tables. Define columns for each table.</p>
            </div>

            {/* Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-500 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} /> Solution
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tables Identification */}
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-900/30">
                      <h5 className="font-bold text-amber-800 dark:text-amber-500 mb-2">1. Identify Fact Table</h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        The core event being recorded is a <strong>Transaction</strong>.
                        <br/><br/>
                        <strong>Fact Table:</strong> <code>Fact_Transaction</code>
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-900/30">
                      <h5 className="font-bold text-blue-800 dark:text-blue-500 mb-2">2. Identify Dimension Tables</h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        The entities that describe the transaction event.
                        <ul className="list-disc pl-5 mt-1">
                          <li><code>Dim_Customer</code></li>
                          <li><code>Dim_Account</code></li>
                          <li><code>Dim_Branch</code></li>
                          <li><code>Dim_Time</code> (Standard practice)</li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  {/* Cardinalities & Mappings */}
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-200 dark:border-purple-900/30">
                    <h5 className="font-bold text-purple-800 dark:text-purple-500 mb-2">3. Cardinalities & Mappings</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      In a Star Schema, the relationship is always <strong>1-to-Many (1:N)</strong> from the Dimension table to the Fact table.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Customer</code> (1) ➔ (N) <code>Fact_Transaction</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Account</code> (1) ➔ (N) <code>Fact_Transaction</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Branch</code> (1) ➔ (N) <code>Fact_Transaction</code></li>
                      <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500"/> <code>Dim_Time</code> (1) ➔ (N) <code>Fact_Transaction</code></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Schema Definition */}
              <div>
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">4. Table Columns Definition</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TableDef title="Fact_Transaction" type="fact" fields={[
                    { name: 'Transaction_ID', type: 'PK' },
                    { name: 'Customer_ID', type: 'FK' },
                    { name: 'Account_ID', type: 'FK' },
                    { name: 'Branch_ID', type: 'FK' },
                    { name: 'Time_ID', type: 'FK' },
                    { name: 'Transaction_Amount', type: 'Fact' },
                    { name: 'Balance_After', type: 'Fact' }
                  ]} />
                  <TableDef title="Dim_Customer" type="dim" fields={[
                    { name: 'Customer_ID', type: 'PK' },
                    { name: 'Customer_Name', type: '' },
                    { name: 'Address', type: '' },
                    { name: 'Phone', type: '' }
                  ]} />
                  <TableDef title="Dim_Account" type="dim" fields={[
                    { name: 'Account_ID', type: 'PK' },
                    { name: 'Account_Type', type: '' },
                    { name: 'Open_Date', type: '' },
                    { name: 'Status', type: '' }
                  ]} />
                  <TableDef title="Dim_Branch" type="dim" fields={[
                    { name: 'Branch_ID', type: 'PK' },
                    { name: 'Branch_Name', type: '' },
                    { name: 'Location', type: '' },
                    { name: 'Manager', type: '' }
                  ]} />
                  <TableDef title="Dim_Time" type="dim" fields={[
                    { name: 'Time_ID', type: 'PK' },
                    { name: 'Date', type: '' },
                    { name: 'Month', type: '' },
                    { name: 'Quarter', type: '' },
                    { name: 'Year', type: '' }
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </TopicLayout>
  );
};

export default StarVsSnowflake;
