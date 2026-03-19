import React, { useEffect, useRef, useState, useMemo, Suspense } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import { RefreshCw, CheckCircle2, LayoutGrid, ArrowRight, Activity, GitBranch, Info, ShoppingCart, AlertTriangle, Link as LinkIcon, Lightbulb, Database, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

// --- KDD and KMeans remain the same ---
export const KDDVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const steps = [
      'Data', 'Cleaning', 'Integration', 'Selection', 'Transformation', 'Mining', 'Evaluation', 'Knowledge'
    ];

    const width = 800;
    const height = 150;
    const padding = 50;
    const stepWidth = (width - padding * 2) / (steps.length - 1);

    const g = svg.append('g').attr('transform', `translate(${padding}, ${height / 2})`);

    // Draw lines
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', width - padding * 2)
      .attr('y2', 0)
      .attr('stroke', '#94a3b8')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5');

    // Draw nodes
    const nodes = g.selectAll('.node')
      .data(steps)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d, i) => `translate(${i * stepWidth}, 0)`);

    nodes.append('circle')
      .attr('r', 12)
      .attr('fill', (d, i) => i === 5 ? '#10b981' : '#3b82f6')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    nodes.append('text')
      .text(d => d)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('class', 'fill-slate-600 dark:fill-slate-400 font-medium');

  }, []);

  return (
    <div className="w-full overflow-x-auto bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
      <h4 className="text-sm font-semibold mb-4 text-slate-700 dark:text-slate-300">KDD Pipeline Visualization</h4>
      <svg ref={svgRef} width="800" height="150" className="mx-auto" />
    </div>
  );
};

export const KMeansVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [k, setK] = useState(3);
  const [step, setStep] = useState(0); // 0: Initial, 1: Init Centroids, 2: Assign, 3: Update, 4: Converged
  const [iteration, setIteration] = useState(0);
  
  const width = 600;
  const height = 400;
  const padding = 40;

  // Generate fixed data points in clusters for better visualization
  const points = useMemo(() => {
    const data = [];
    const centers = [
      { x: width * 0.25, y: height * 0.25 },
      { x: width * 0.75, y: height * 0.25 },
      { x: width * 0.5, y: height * 0.75 }
    ];
    
    for (let i = 0; i < 60; i++) {
      const center = centers[i % 3];
      data.push({
        id: i,
        x: center.x + (Math.random() - 0.5) * 150,
        y: center.y + (Math.random() - 0.5) * 150,
        cluster: -1
      });
    }
    return data;
  }, []);

  const [currentPoints, setCurrentPoints] = useState(points);
  const [centroids, setCentroids] = useState<any[]>([]);

  const reset = () => {
    setStep(0);
    setIteration(0);
    setCurrentPoints(points.map(p => ({ ...p, cluster: -1 })));
    setCentroids([]);
  };

  const initCentroids = () => {
    const newCentroids = [];
    const usedIndices = new Set();
    while (newCentroids.length < k) {
      const idx = Math.floor(Math.random() * points.length);
      if (!usedIndices.has(idx)) {
        usedIndices.add(idx);
        newCentroids.push({
          id: newCentroids.length,
          x: points[idx].x,
          y: points[idx].y,
          color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][newCentroids.length]
        });
      }
    }
    setCentroids(newCentroids);
    setStep(2);
  };

  const assignPoints = () => {
    const newPoints = currentPoints.map(p => {
      let minDist = Infinity;
      let cluster = -1;
      centroids.forEach((c, i) => {
        const dist = Math.sqrt(Math.pow(p.x - c.x, 2) + Math.pow(p.y - c.y, 2));
        if (dist < minDist) {
          minDist = dist;
          cluster = i;
        }
      });
      return { ...p, cluster };
    });
    setCurrentPoints(newPoints);
    setStep(3);
  };

  const updateCentroids = () => {
    let changed = false;
    const newCentroids = centroids.map((c, i) => {
      const clusterPoints = currentPoints.filter(p => p.cluster === i);
      if (clusterPoints.length === 0) return c;
      
      const newX = d3.mean(clusterPoints, p => p.x) || c.x;
      const newY = d3.mean(clusterPoints, p => p.y) || c.y;
      
      if (Math.abs(newX - c.x) > 0.1 || Math.abs(newY - c.y) > 0.1) {
        changed = true;
      }
      
      return { ...c, x: newX, y: newY };
    });
    
    setCentroids(newCentroids);
    setIteration(prev => prev + 1);
    
    if (!changed) {
      setStep(4);
    } else {
      setStep(2);
    }
  };

  const nextStep = () => {
    if (step === 0) initCentroids();
    else if (step === 2) assignPoints();
    else if (step === 3) updateCentroids();
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Draw points
    svg.selectAll('.point')
      .data(currentPoints)
      .enter()
      .append('circle')
      .attr('class', 'point')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 5)
      .attr('fill', d => d.cluster === -1 ? '#94a3b8' : centroids[d.cluster]?.color)
      .attr('opacity', 0.6)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Draw centroids
    const centroidGroups = svg.selectAll('.centroid')
      .data(centroids)
      .enter()
      .append('g')
      .attr('class', 'centroid')
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    centroidGroups.append('path')
      .attr('d', d3.symbol().type(d3.symbolCross).size(200))
      .attr('fill', d => d.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    centroidGroups.append('circle')
      .attr('r', 15)
      .attr('fill', 'none')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4,4')
      .append('animateTransform')
      .attr('attributeName', 'transform')
      .attr('type', 'rotate')
      .attr('from', '0 0 0')
      .attr('to', '360 0 0')
      .attr('dur', '10s')
      .attr('repeatCount', 'indefinite');

  }, [currentPoints, centroids]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <LayoutGrid className="text-blue-600" size={20} />
                K-Means Simulation
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                Iteration: {iteration} • Step: {
                  step === 0 ? "Initial" : 
                  step === 2 ? "Assigning Points" : 
                  step === 3 ? "Updating Centroids" : 
                  "Converged!"
                }
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">K:</span>
                <select 
                  value={k} 
                  onChange={(e) => { setK(Number(e.target.value)); reset(); }}
                  disabled={step !== 0}
                  className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-bold p-1"
                >
                  {[2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <button 
                onClick={reset}
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 transition-colors"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>

          <div className="relative bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <svg 
              ref={svgRef} 
              viewBox={`0 0 ${width} ${height}`} 
              className="w-full h-auto"
            />
            
            <AnimatePresence>
              {step === 4 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[2px]"
                >
                  <div className="bg-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Algorithm Converged!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:w-64 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h5 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-2">Current Action</h5>
              <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">
                {step === 0 ? "Click 'Start' to randomly initialize centroids." :
                 step === 2 ? "Assigning each point to the nearest centroid." :
                 step === 3 ? "Calculating the mean of each cluster to move centroids." :
                 "The centroids have stopped moving. The clusters are stable."}
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legend</h5>
              {centroids.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Cluster {i + 1}</span>
                </div>
              ))}
              {centroids.length === 0 && <p className="text-xs text-slate-400 italic">No clusters yet</p>}
            </div>
          </div>

          <button 
            onClick={nextStep}
            disabled={step === 4}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-8",
              step === 4 ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
            )}
          >
            {step === 0 ? "Start Algorithm" : step === 4 ? "Finished" : "Next Step"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- New 3D OLAP Cube Components ---

interface CubeCellProps {
  position: [number, number, number];
  value: number;
  isSelected: boolean;
  isFaded: boolean;
  label: string;
}

const CubeCell: React.FC<CubeCellProps> = ({ position, value, isSelected, isFaded, label }) => {
  const [hovered, setHovered] = useState(false);
  
  // Color based on value (Heatmap style)
  const color = useMemo(() => {
    const intensity = (value - 10000) / 90000; // Normalized between 0 and 1
    return new THREE.Color().setHSL(0.45, 0.8, 0.3 + intensity * 0.5);
  }, [value]);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial
          color={isSelected ? '#fbbf24' : color}
          transparent
          opacity={isFaded ? 0.1 : hovered ? 1 : 0.8}
          emissive={hovered ? '#fff' : '#000'}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      {hovered && !isFaded && (
        <Html distanceFactor={10}>
          <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap pointer-events-none">
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Data Point</p>
            <div className="space-y-1">
              <p className="text-xs font-medium">Context: <span className="text-white">{label}</span></p>
              <div className="pt-1 border-t border-slate-700 mt-1">
                <p className="text-sm font-bold text-emerald-400">₹{value.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

interface OLAPCubeProps {
  activeOp?: string | null;
  dimensions?: {
    product: string[];
    time: string[];
    location: string[];
  };
  data?: any[];
}

const CubeScene: React.FC<OLAPCubeProps> = ({ 
  activeOp, 
  dimensions = { product: ['P1', 'P2', 'P3'], time: ['T1', 'T2', 'T3'], location: ['L1', 'L2', 'L3'] }, 
  data = [] 
}) => {
  const { product, time, location } = dimensions;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <group position={[-1, -1, -1]}>
        {data.map((item, idx) => {
          const isSelected = activeOp === 'Slice' ? item.z === 0 : 
                            activeOp === 'Dice' ? (item.x < 2 && item.z < 2) :
                            false;
          const isFaded = (activeOp === 'Slice' && item.z !== 0) ||
                          (activeOp === 'Dice' && !(item.x < 2 && item.z < 2));

          return (
            <CubeCell
              key={idx}
              position={[item.x, item.y, item.z]}
              value={item.value}
              isSelected={isSelected}
              isFaded={isFaded}
              label={`${product[item.x]} | ${time[item.y]} | ${location[item.z]}`}
            />
          );
        })}
      </group>

      {/* Axis Labels */}
      <group position={[-1, -1, -1]}>
        {/* X Axis - Product */}
        <Text position={[1, -1, 3]} fontSize={0.3} color="#94a3b8">
          Product (X) →
        </Text>
        {product.map((p, i) => (
          <Text key={i} position={[i, -0.6, 3]} fontSize={0.15} color="#64748b">
            {p}
          </Text>
        ))}

        {/* Y Axis - Time */}
        <Text position={[-1.5, 1, 0]} fontSize={0.3} color="#94a3b8" rotation={[0, Math.PI / 2, 0]}>
          Time (Y) ↑
        </Text>
        {time.map((t, i) => (
          <Text key={i} position={[-1.2, i, 0]} fontSize={0.15} color="#64748b" rotation={[0, Math.PI / 2, 0]}>
            {t}
          </Text>
        ))}

        {/* Z Axis - Location */}
        <Text position={[3.5, -1, 1]} fontSize={0.3} color="#94a3b8" rotation={[0, -Math.PI / 2, 0]}>
          Location (Z) ↗
        </Text>
        {location.map((l, i) => (
          <Text key={i} position={[3, -0.6, i]} fontSize={0.15} color="#64748b" rotation={[0, -Math.PI / 2, 0]}>
            {l}
          </Text>
        ))}
      </group>

      <OrbitControls enablePan={false} minDistance={5} maxDistance={15} />
    </>
  );
};

export const DBSCANVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [epsilon, setEpsilon] = useState(40);
  const [minPts, setMinPts] = useState(4);
  const [step, setStep] = useState(0); // 0: Initial, 1: Processing, 2: Finished
  const [points, setPoints] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [clusterCount, setClusterCount] = useState(0);

  const width = 600;
  const height = 400;

  // Generate data points with some clusters and noise
  const generateData = () => {
    const data = [];
    // Cluster 1 (Circle)
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 50;
      data.push({
        id: data.length,
        x: 150 + r * Math.cos(angle),
        y: 150 + r * Math.sin(angle),
        type: 'unvisited',
        cluster: -1
      });
    }
    // Cluster 2 (Moon shape)
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI;
      const r = 60 + Math.random() * 20;
      data.push({
        id: data.length,
        x: 400 + r * Math.cos(angle),
        y: 250 + r * Math.sin(angle),
        type: 'unvisited',
        cluster: -1
      });
    }
    // Noise
    for (let i = 0; i < 15; i++) {
      data.push({
        id: data.length,
        x: Math.random() * width,
        y: Math.random() * height,
        type: 'unvisited',
        cluster: -1
      });
    }
    setPoints(data);
    setStep(0);
    setCurrentIndex(-1);
    setClusterCount(0);
  };

  useEffect(() => {
    generateData();
  }, []);

  const getNeighbors = (point: any, allPoints: any[]) => {
    return allPoints.filter(p => {
      const dist = Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2));
      return dist <= epsilon;
    });
  };

  const runDBSCAN = async () => {
    setStep(1);
    const newPoints = [...points].map(p => ({ ...p, type: 'unvisited', cluster: -1 }));
    let currentCluster = 0;

    for (let i = 0; i < newPoints.length; i++) {
      if (newPoints[i].type !== 'unvisited') continue;

      setCurrentIndex(i);
      await new Promise(resolve => setTimeout(resolve, 50));

      const neighbors = getNeighbors(newPoints[i], newPoints);

      if (neighbors.length < minPts) {
        newPoints[i].type = 'noise';
      } else {
        currentCluster++;
        newPoints[i].type = 'core';
        newPoints[i].cluster = currentCluster;
        
        const queue = [...neighbors.filter(n => n.id !== newPoints[i].id)];
        
        while (queue.length > 0) {
          const neighbor = queue.shift();
          const pointIdx = newPoints.findIndex(p => p.id === neighbor.id);
          
          if (newPoints[pointIdx].type === 'noise') {
            newPoints[pointIdx].type = 'border';
            newPoints[pointIdx].cluster = currentCluster;
          }
          
          if (newPoints[pointIdx].type !== 'unvisited') continue;
          
          newPoints[pointIdx].cluster = currentCluster;
          const nextNeighbors = getNeighbors(newPoints[pointIdx], newPoints);
          
          if (nextNeighbors.length >= minPts) {
            newPoints[pointIdx].type = 'core';
            queue.push(...nextNeighbors.filter(n => !queue.find(q => q.id === n.id)));
          } else {
            newPoints[pointIdx].type = 'border';
          }
          
          setPoints([...newPoints]);
          await new Promise(resolve => setTimeout(resolve, 20));
        }
      }
      setPoints([...newPoints]);
      setClusterCount(currentCluster);
    }
    setStep(2);
    setCurrentIndex(-1);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const colors = ['#94a3b8', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

    // Draw points
    svg.selectAll('circle')
      .data(points)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.id === currentIndex ? 8 : 5)
      .attr('fill', d => {
        if (d.type === 'noise') return '#f43f5e';
        if (d.cluster === -1) return '#94a3b8';
        return colors[d.cluster % colors.length];
      })
      .attr('stroke', d => d.id === currentIndex ? '#000' : '#fff')
      .attr('stroke-width', d => d.id === currentIndex ? 2 : 1)
      .attr('opacity', 0.8);

    // Draw epsilon radius for current point
    if (currentIndex !== -1) {
      const currentPoint = points[currentIndex];
      svg.append('circle')
        .attr('cx', currentPoint.x)
        .attr('cy', currentPoint.y)
        .attr('r', epsilon)
        .attr('fill', 'rgba(59, 130, 246, 0.1)')
        .attr('stroke', '#3b82f6')
        .attr('stroke-dasharray', '4,4');
    }

  }, [points, currentIndex, epsilon]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <Activity className="text-emerald-600" size={20} />
                DBSCAN Simulation
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                Clusters: {clusterCount} • Status: {
                  step === 0 ? "Ready" : 
                  step === 1 ? "Processing..." : 
                  "Finished"
                }
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={generateData}
                disabled={step === 1}
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>

          <div className="relative bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <svg 
              ref={svgRef} 
              viewBox={`0 0 ${width} ${height}`} 
              className="w-full h-auto"
            />
            
            <AnimatePresence>
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[2px]"
                >
                  <div className="bg-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Clustering Complete!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:w-64 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Epsilon (ε): {epsilon}</span>
              </div>
              <input 
                type="range" min="10" max="80" value={epsilon} 
                onChange={(e) => setEpsilon(Number(e.target.value))}
                disabled={step === 1}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">MinPts: {minPts}</span>
              </div>
              <input 
                type="range" min="2" max="10" value={minPts} 
                onChange={(e) => setMinPts(Number(e.target.value))}
                disabled={step === 1}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div className="space-y-2">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legend</h5>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Unvisited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Cluster Point</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Noise</span>
              </div>
            </div>
          </div>

          <button 
            onClick={runDBSCAN}
            disabled={step === 1}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-8",
              step === 1 ? "bg-slate-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
            )}
          >
            {step === 0 ? "Run DBSCAN" : step === 1 ? "Running..." : "Run Again"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const HierarchicalVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cutHeight, setCutHeight] = useState(50);
  const width = 600;
  const height = 400;

  // Static dendrogram data for demonstration
  const dendrogramData = useMemo(() => {
    return {
      name: "Root",
      height: 100,
      children: [
        {
          name: "C1",
          height: 60,
          children: [
            { name: "A", height: 0 },
            { name: "B", height: 0 }
          ]
        },
        {
          name: "C2",
          height: 80,
          children: [
            {
              name: "C3",
              height: 40,
              children: [
                { name: "C", height: 0 },
                { name: "D", height: 0 }
              ]
            },
            { name: "E", height: 0 }
          ]
        }
      ]
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const root = d3.hierarchy(dendrogramData);
    const cluster = d3.cluster().size([innerWidth, innerHeight]);
    cluster(root);

    // Custom Y scale for height
    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([innerHeight, 0]);

    // Draw links
    g.selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d => {
        const startX = d.source.x!;
        const startY = yScale(d.source.data.height);
        const endX = d.target.x!;
        const endY = yScale(d.target.data.height);
        return `M${startX},${startY} V${endY} H${endX}`;
      })
      .attr('fill', 'none')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 2);

    // Draw nodes
    const nodes = g.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x}, ${yScale(d.data.height)})`);

    nodes.append('circle')
      .attr('r', 5)
      .attr('fill', d => {
        if (d.data.height === 0) return '#6366f1';
        return '#fff';
      })
      .attr('stroke', '#6366f1')
      .attr('stroke-width', 2);

    nodes.filter(d => d.data.height === 0)
      .append('text')
      .attr('dy', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('class', 'fill-slate-600 dark:fill-slate-400')
      .text(d => d.data.name);

    // Draw cut line
    const cutY = yScale(cutHeight);
    g.append('line')
      .attr('x1', 0)
      .attr('y1', cutY)
      .attr('x2', innerWidth)
      .attr('y2', cutY)
      .attr('stroke', '#ef4444')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5');

    g.append('text')
      .attr('x', innerWidth + 5)
      .attr('y', cutY)
      .attr('dy', 5)
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('fill', '#ef4444')
      .text(`CUT (h=${cutHeight})`);

    // Calculate resulting clusters based on cut
    const clusters: string[][] = [];
    const visited = new Set();

    const findClusters = (node: any) => {
      if (node.data.height <= cutHeight) {
        const leaves = node.leaves().map((l: any) => l.data.name);
        clusters.push(leaves);
        return;
      }
      if (node.children) {
        node.children.forEach(findClusters);
      }
    };

    findClusters(root);

    // Highlight clusters
    clusters.forEach((clusterNames, i) => {
      const color = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i % 5];
      g.selectAll('.node')
        .filter((d: any) => clusterNames.includes(d.data.name) && d.data.height === 0)
        .select('circle')
        .attr('fill', color)
        .attr('stroke', color);
    });

  }, [cutHeight, dendrogramData]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <GitBranch className="text-indigo-600" size={20} />
                Interactive Dendrogram
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                Adjust the cut height to see how clusters are formed.
              </p>
            </div>
          </div>

          <div className="relative bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <svg 
              ref={svgRef} 
              viewBox={`0 0 ${width} ${height}`} 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:w-64 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <h5 className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">Cut Height (h)</h5>
              <input 
                type="range" min="5" max="95" value={cutHeight} 
                onChange={(e) => setCutHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-slate-400 font-bold">More Clusters</span>
                <span className="text-[10px] text-slate-400 font-bold">Fewer Clusters</span>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Resulting Clusters</h5>
              <div className="space-y-2">
                {/* Dynamically show clusters based on cut */}
                {(() => {
                  const root = d3.hierarchy(dendrogramData);
                  const clusters: string[][] = [];
                  const findClusters = (node: any) => {
                    if (node.data.height <= cutHeight) {
                      clusters.push(node.leaves().map((l: any) => l.data.name));
                      return;
                    }
                    if (node.children) node.children.forEach(findClusters);
                  };
                  findClusters(root);
                  return clusters.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i % 5] }} />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Cluster {i + 1}: {c.join(', ')}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
              <Info size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Tip</span>
            </div>
            <p className="text-[10px] text-blue-600 dark:text-blue-300 leading-relaxed">
              A lower cut height results in more clusters, as we are more strict about similarity. A higher cut height merges more points together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AprioriVisualization: React.FC = () => {
  const [step, setStep] = useState(0);
  const [minSupport, setMinSupport] = useState(2);
  
  const transactions = [
    { id: 'T1', items: ['Milk', 'Bread'] },
    { id: 'T2', items: ['Milk', 'Diaper', 'Beer'] },
    { id: 'T3', items: ['Bread', 'Butter'] },
    { id: 'T4', items: ['Milk', 'Bread', 'Butter'] },
  ];

  const allItems = ['Milk', 'Bread', 'Diaper', 'Beer', 'Butter'];
  
  const itemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    transactions.forEach(t => {
      t.items.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const frequent1Itemsets = useMemo(() => {
    return Object.entries(itemCounts)
      .filter(([_, count]) => count >= minSupport)
      .map(([item]) => item);
  }, [minSupport]);

  const candidate2Itemsets = useMemo(() => {
    const candidates: string[][] = [];
    for (let i = 0; i < frequent1Itemsets.length; i++) {
      for (let j = i + 1; j < frequent1Itemsets.length; j++) {
        candidates.push([frequent1Itemsets[i], frequent1Itemsets[j]]);
      }
    }
    return candidates;
  }, [frequent1Itemsets]);

  const frequent2Itemsets = useMemo(() => {
    return candidate2Itemsets.filter(pair => {
      const count = transactions.filter(t => 
        pair.every(item => t.items.includes(item))
      ).length;
      return count >= minSupport;
    });
  }, [candidate2Itemsets, minSupport]);

  const steps = [
    { title: "Transactions", desc: "Our raw market basket data." },
    { title: "Step 1: Count 1-Itemsets", desc: "Count frequencies of individual items." },
    { title: "Step 2: Prune L1", desc: "Remove items below minimum support." },
    { title: "Step 3: Generate C2", desc: "Combine frequent items to form pairs." },
    { title: "Step 4: Prune L2", desc: "Keep only frequent pairs." },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <ShoppingCart className="text-blue-600" size={20} />
                Apriori Step-by-Step
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                {steps[step].title}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Min Support:</span>
                <input 
                  type="number" 
                  min="1" max="4" 
                  value={minSupport} 
                  onChange={(e) => setMinSupport(Number(e.target.value))}
                  className="w-12 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-bold p-1 text-center"
                />
              </div>
              <button 
                onClick={() => setStep(0)}
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 transition-colors"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>

          <div className="min-h-[300px] bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="step0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-400 uppercase text-[10px] tracking-widest">
                        <th className="pb-2">TID</th>
                        <th className="pb-2">Items</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {transactions.map(t => (
                        <tr key={t.id}>
                          <td className="py-2 font-bold text-blue-600">{t.id}</td>
                          <td className="py-2 text-slate-600 dark:text-slate-400">{t.items.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {Object.entries(itemCounts).map(([item, count]) => (
                    <div key={item} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center">
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200">{item}</span>
                      <span className="text-2xl font-black text-blue-600">{count}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {Object.entries(itemCounts).map(([item, count]) => (
                    <div 
                      key={item} 
                      className={cn(
                        "p-4 rounded-xl border transition-all flex flex-col items-center",
                        count >= minSupport 
                          ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800" 
                          : "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 opacity-40 grayscale"
                      )}
                    >
                      <span className="text-lg font-bold">{item}</span>
                      <span className="text-2xl font-black">{count}</span>
                      {count < minSupport && <span className="text-[8px] font-bold uppercase text-rose-600 mt-1">Pruned</span>}
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {candidate2Itemsets.map((pair, i) => (
                    <div key={i} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded text-xs font-bold">{pair[0]}</span>
                        <span className="text-slate-400">+</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded text-xs font-bold">{pair[1]}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400">Candidate</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {frequent2Itemsets.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {frequent2Itemsets.map((pair, i) => {
                        const count = transactions.filter(t => pair.every(item => t.items.includes(item))).length;
                        return (
                          <div key={i} className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-emerald-700 dark:text-emerald-400">{pair.join(' + ')}</span>
                            </div>
                            <span className="text-xl font-black text-emerald-600">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                      <AlertTriangle size={48} className="mb-4 opacity-20" />
                      <p className="font-bold">No frequent 2-itemsets found.</p>
                      <p className="text-xs">Try lowering the minimum support.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:w-64 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h5 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-2">Algorithm Insight</h5>
              <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">
                {steps[step].desc}
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</h5>
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1 flex-1 rounded-full transition-all",
                      i <= step ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            <button 
              onClick={() => setStep(prev => Math.max(0, prev - 1))}
              disabled={step === 0}
              className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl font-bold disabled:opacity-50"
            >
              Back
            </button>
            <button 
              onClick={() => setStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={step === steps.length - 1}
              className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              Next Step
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DecisionTreeVisualization: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<'hours' | 'attendance' | 'score'>('hours');

  const students = [
    { id: 'A', hours: 2, attendance: 60, score: 40, result: 'Fail' },
    { id: 'B', hours: 3, attendance: 65, score: 45, result: 'Fail' },
    { id: 'C', hours: 7, attendance: 85, score: 70, result: 'Pass' },
    { id: 'D', hours: 8, attendance: 90, score: 75, result: 'Pass' },
    { id: 'E', hours: 9, attendance: 95, score: 80, result: 'Pass' },
  ];

  const calculateEntropy = (p: number, n: number) => {
    if (p === 0 || n === 0) return 0;
    const total = p + n;
    const pp = p / total;
    const pn = n / total;
    return -(pp * Math.log2(pp) + pn * Math.log2(pn));
  };

  const parentEntropy = calculateEntropy(3, 2);

  const getSplitData = (feature: string) => {
    let left: string[] = [];
    let right: string[] = [];
    let threshold = "";

    if (feature === 'hours') {
      threshold = "Study Hours > 5";
      left = students.filter(s => s.hours <= 5).map(s => s.result);
      right = students.filter(s => s.hours > 5).map(s => s.result);
    } else if (feature === 'attendance') {
      threshold = "Attendance > 80%";
      left = students.filter(s => s.attendance <= 80).map(s => s.result);
      right = students.filter(s => s.attendance > 80).map(s => s.result);
    } else {
      threshold = "Previous Test Score > 60";
      left = students.filter(s => s.score <= 60).map(s => s.result);
      right = students.filter(s => s.score > 60).map(s => s.result);
    }

    const leftP = left.filter(r => r === 'Pass').length;
    const leftF = left.filter(r => r === 'Fail').length;
    const rightP = right.filter(r => r === 'Pass').length;
    const rightF = right.filter(r => r === 'Fail').length;

    const entropyLeft = calculateEntropy(leftP, leftF);
    const entropyRight = calculateEntropy(rightP, rightF);
    const childrenEntropy = (left.length / 5) * entropyLeft + (right.length / 5) * entropyRight;
    const ig = parentEntropy - childrenEntropy;

    return { threshold, left, right, leftP, leftF, rightP, rightF, entropyLeft, entropyRight, childrenEntropy, ig };
  };

  const split = getSplitData(selectedFeature);

  const steps = [
    { title: "Initial Dataset", icon: <Database size={16} /> },
    { title: "Parent Entropy", icon: <Activity size={16} /> },
    { title: "Feature Splitting", icon: <GitBranch size={16} /> },
    { title: "Information Gain", icon: <Zap size={16} /> },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
                    activeStep === i 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200"
                  )}
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-400 text-[10px] uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                        <th className="pb-4">Student</th>
                        <th className="pb-4">Study Hours</th>
                        <th className="pb-4">Attendance</th>
                        <th className="pb-4">Prev Score</th>
                        <th className="pb-4">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {students.map(s => (
                        <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 font-bold text-blue-600">{s.id}</td>
                          <td className="py-3">{s.hours}h</td>
                          <td className="py-3">{s.attendance}%</td>
                          <td className="py-3">{s.score}</td>
                          <td className="py-3">
                            <span className={cn(
                              "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                              s.result === 'Pass' ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                            )}>
                              {s.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col items-center justify-center py-12">
                <div className="w-48 h-48 rounded-full border-8 border-blue-600 flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/20 shadow-inner">
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Parent Entropy</p>
                  <p className="text-4xl font-black text-slate-900 dark:text-white">{parentEntropy.toFixed(3)}</p>
                </div>
                <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 max-w-md text-center">
                  <p className="text-sm font-mono text-slate-600 dark:text-slate-400">
                    Entropy = - (3/5 log₂(3/5) + 2/5 log₂(2/5))
                  </p>
                  <p className="text-xs text-slate-400 mt-2 italic">
                    Calculates the impurity of the entire dataset (3 Pass, 2 Fail).
                  </p>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {(['hours', 'attendance', 'score'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setSelectedFeature(f)}
                      className={cn(
                        "p-4 rounded-2xl border-2 transition-all text-center",
                        selectedFeature === f 
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                          : "border-slate-100 dark:border-slate-800 hover:border-blue-200"
                      )}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{f}</p>
                      <p className="text-sm font-bold capitalize">{f === 'hours' ? 'Study Hours' : f}</p>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                  <div className="w-40 p-4 bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl text-center shadow-sm">
                    <p className="text-xs font-bold text-blue-600 mb-2">Left Node</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {split.left.map((r, i) => (
                        <div key={i} className={cn("w-3 h-3 rounded-full", r === 'Pass' ? "bg-emerald-400" : "bg-rose-400")} />
                      ))}
                    </div>
                    <p className="text-[10px] font-mono">Entropy: {split.entropyLeft.toFixed(3)}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold mb-2">
                      {split.threshold}
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                  </div>
                  <div className="w-40 p-4 bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl text-center shadow-sm">
                    <p className="text-xs font-bold text-blue-600 mb-2">Right Node</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {split.right.map((r, i) => (
                        <div key={i} className={cn("w-3 h-3 rounded-full", r === 'Pass' ? "bg-emerald-400" : "bg-rose-400")} />
                      ))}
                    </div>
                    <p className="text-[10px] font-mono">Entropy: {split.entropyRight.toFixed(3)}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
                <div className="p-8 bg-blue-600 text-white rounded-[32px] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Zap size={120} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Information Gain for {selectedFeature}</p>
                    <p className="text-5xl font-black mb-4">{split.ig.toFixed(3)}</p>
                    <p className="text-sm opacity-90 leading-relaxed">
                      IG = Parent Entropy ({parentEntropy.toFixed(3)}) - Children Weighted Entropy ({split.childrenEntropy.toFixed(3)})
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { f: 'Study Hours', ig: 0.971, best: true },
                    { f: 'Attendance', ig: 0.420, best: false },
                    { f: 'Test Score', ig: 0.420, best: false },
                  ].map((item, i) => (
                    <div key={i} className={cn(
                      "p-6 rounded-2xl border-2 transition-all",
                      item.best ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : "border-slate-100 dark:border-slate-800"
                    )}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.f}</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">{item.ig.toFixed(3)}</p>
                      {item.best && (
                        <div className="mt-2 flex items-center gap-1 text-emerald-600 text-[10px] font-bold uppercase">
                          <CheckCircle2 size={12} />
                          Best Split
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:w-64 space-y-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800">
            <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4">Formula Guide</h5>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Entropy</p>
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  Measures impurity. 0 is pure, 1 is max impurity.
                </p>
              </div>
              <div className="h-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Info Gain</p>
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  Measures reduction in entropy. Higher is better.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-indigo-600 text-white rounded-[32px] shadow-xl">
            <h5 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb size={16} className="text-yellow-300" />
              Key Intuition
            </h5>
            <p className="text-[10px] leading-relaxed opacity-90">
              The algorithm picks the feature that creates the most "pure" groups. In this case, <b>Study Hours</b> perfectly separates Pass from Fail, giving it the highest Information Gain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FPGrowthVisualization: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const transactions = [
    { id: 'T1', items: ['Milk', 'Bread', 'Butter'] },
    { id: 'T2', items: ['Milk', 'Bread'] },
    { id: 'T3', items: ['Bread', 'Butter'] },
    { id: 'T4', items: ['Milk', 'Bread', 'Butter'] },
  ];

  const itemCounts = { 'Bread': 4, 'Milk': 3, 'Butter': 3 };
  const sortedItems = ['Bread', 'Milk', 'Butter'];

  const steps = [
    { title: "Raw Transactions", desc: "Start with the original market basket data." },
    { title: "Frequency Sorting", desc: "Scan 1: Count items and sort them by descending frequency." },
    { title: "FP-Tree Construction", desc: "Scan 2: Insert transactions into the tree, sharing common prefixes." },
    { title: "Pattern Mining", desc: "Extract frequent patterns using conditional pattern bases." },
  ];

  // Simplified tree structure for visualization
  const treeData = {
    name: "Root",
    count: 0,
    children: [
      {
        name: "Bread",
        count: 4,
        children: [
          {
            name: "Milk",
            count: 3,
            children: [
              { name: "Butter", count: 2, children: [] }
            ]
          },
          {
            name: "Butter",
            count: 1,
            children: []
          }
        ]
      }
    ]
  };

  const renderNode = (node: any, x: number, y: number, level: number) => {
    return (
      <g key={`${node.name}-${level}-${x}`}>
        <motion.circle
          initial={{ r: 0 }}
          animate={{ r: 20 }}
          cx={x}
          cy={y}
          className={cn(
            "fill-white dark:fill-slate-900 stroke-2 transition-colors",
            selectedItem === node.name ? "stroke-blue-500" : "stroke-slate-300 dark:stroke-slate-700"
          )}
        />
        <text
          x={x}
          y={y - 5}
          textAnchor="middle"
          className="text-[10px] font-bold fill-slate-900 dark:fill-white"
        >
          {node.name}
        </text>
        <text
          x={x}
          y={y + 10}
          textAnchor="middle"
          className="text-[8px] fill-blue-500 font-bold"
        >
          :{node.count}
        </text>
        {node.children.map((child: any, i: number) => {
          const childX = x + (i - (node.children.length - 1) / 2) * (200 / (level + 1));
          const childY = y + 80;
          return (
            <React.Fragment key={i}>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                x1={x}
                y1={y + 20}
                x2={childX}
                y2={childY - 20}
                className="stroke-slate-200 dark:stroke-slate-800 stroke-1"
              />
              {renderNode(child, childX, childY, level + 1)}
            </React.Fragment>
          );
        })}
      </g>
    );
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <GitBranch className="text-blue-600" size={20} />
                FP-Tree Visualizer
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                {steps[step].title}
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl disabled:opacity-50"
              >
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button 
                onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                disabled={step === steps.length - 1}
                className="p-2 bg-blue-600 text-white rounded-xl disabled:opacity-50"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="min-h-[400px] bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-400 text-[10px] uppercase tracking-widest">
                        <th className="pb-2">TID</th>
                        <th className="pb-2">Items</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {transactions.map(t => (
                        <tr key={t.id}>
                          <td className="py-2 font-bold text-blue-600">{t.id}</td>
                          <td className="py-2 text-slate-600 dark:text-slate-400">{t.items.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(itemCounts).map(([item, count]) => (
                      <div key={item} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">{item}</p>
                        <p className="text-2xl font-black text-blue-600">{count}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-2">Sorted Order (L-List)</p>
                    <div className="flex gap-2">
                      {sortedItems.map((item, i) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-lg text-xs font-bold border border-blue-200">{item}</span>
                          {i < sortedItems.length - 1 && <ArrowRight size={12} className="text-blue-300" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex justify-center">
                  <svg width="100%" height="350" viewBox="0 0 600 350">
                    {renderNode(treeData, 300, 40, 0)}
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:w-64 space-y-6">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-[32px] border border-blue-100 dark:border-blue-800">
            <h5 className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-2">Insight</h5>
            <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">
              {steps[step].desc}
            </p>
          </div>

          {step === 3 && (
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mining Demo</h5>
              <div className="grid grid-cols-1 gap-2">
                {sortedItems.map(item => (
                  <button
                    key={item}
                    onClick={() => setSelectedItem(item)}
                    className={cn(
                      "p-3 rounded-xl text-left text-xs font-bold transition-all border",
                      selectedItem === item 
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20" 
                        : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                    )}
                  >
                    Mine "{item}"
                  </button>
                ))}
              </div>
              {selectedItem && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-slate-900 text-white rounded-2xl text-[10px] space-y-2">
                  <p className="text-blue-400 font-bold uppercase tracking-tighter">Conditional Pattern Base:</p>
                  {selectedItem === 'Butter' && <p>{"{Bread, Milk}: 2, {Bread}: 1"}</p>}
                  {selectedItem === 'Milk' && <p>{"{Bread}: 3"}</p>}
                  {selectedItem === 'Bread' && <p>{"Root: 4"}</p>}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AssociationRuleVisualization: React.FC = () => {
  const [minSupport, setMinSupport] = useState(0.4);
  const [minConfidence, setMinConfidence] = useState(0.6);

  const transactions = [
    { id: 'T1', items: ['Milk', 'Bread'] },
    { id: 'T2', items: ['Milk', 'Butter'] },
    { id: 'T3', items: ['Bread', 'Butter'] },
    { id: 'T4', items: ['Milk', 'Bread', 'Butter'] },
    { id: 'T5', items: ['Milk', 'Bread'] },
  ];

  const total = transactions.length;

  const getSupport = (items: string[]) => {
    const count = transactions.filter(t => items.every(i => t.items.includes(i))).length;
    return count / total;
  };

  const rules = useMemo(() => {
    const items = ['Milk', 'Bread', 'Butter'];
    const possibleRules: { antecedent: string; consequent: string; support: number; confidence: number; lift: number }[] = [];

    items.forEach(a => {
      items.forEach(c => {
        if (a !== c) {
          const supportAC = getSupport([a, c]);
          const supportA = getSupport([a]);
          const supportC = getSupport([c]);
          const confidence = supportAC / supportA;
          const lift = confidence / supportC;

          if (supportAC >= minSupport && confidence >= minConfidence) {
            possibleRules.push({ antecedent: a, consequent: c, support: supportAC, confidence, lift });
          }
        }
      });
    });

    return possibleRules.sort((a, b) => b.lift - a.lift);
  }, [minSupport, minConfidence]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2">
                <LinkIcon className="text-blue-600" size={20} />
                Rule Discovery Engine
              </h4>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                Adjust thresholds to discover valid association rules.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Min Support</span>
                <span className="text-xs font-mono font-bold text-blue-600">{(minSupport * 100).toFixed(0)}%</span>
              </div>
              <input 
                type="range" min="0.1" max="0.8" step="0.1" value={minSupport} 
                onChange={(e) => setMinSupport(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl border border-cyan-100 dark:border-cyan-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">Min Confidence</span>
                <span className="text-xs font-mono font-bold text-cyan-600">{(minConfidence * 100).toFixed(0)}%</span>
              </div>
              <input 
                type="range" min="0.1" max="1" step="0.1" value={minConfidence} 
                onChange={(e) => setMinConfidence(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Discovered Rules ({rules.length})</h5>
            <div className="grid grid-cols-1 gap-3">
              <AnimatePresence mode="popLayout">
                {rules.length > 0 ? (
                  rules.map((rule, i) => (
                    <motion.div 
                      key={`${rule.antecedent}-${rule.consequent}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex items-center justify-between group hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg text-sm font-bold">{rule.antecedent}</span>
                          <ArrowRight className="text-slate-300 group-hover:text-blue-400 transition-colors" size={16} />
                          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg text-sm font-bold">{rule.consequent}</span>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="text-center">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Support</p>
                          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{(rule.support * 100).toFixed(0)}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Confidence</p>
                          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{(rule.confidence * 100).toFixed(0)}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Lift</p>
                          <p className={cn(
                            "text-xs font-bold",
                            rule.lift > 1 ? "text-emerald-600" : rule.lift === 1 ? "text-slate-400" : "text-rose-600"
                          )}>{rule.lift.toFixed(2)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-slate-400 italic text-sm">
                    No rules meet the current thresholds.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:w-72 space-y-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800">
            <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4">Dataset</h5>
            <div className="space-y-2">
              {transactions.map(t => (
                <div key={t.id} className="flex justify-between text-[10px] p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-blue-600">{t.id}</span>
                  <span className="text-slate-500">{t.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-indigo-600 text-white rounded-[32px] shadow-xl">
            <h5 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb size={16} className="text-yellow-300" />
              Lift Guide
            </h5>
            <div className="space-y-3 text-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <p><span className="font-bold">Lift &gt; 1:</span> Strong association (A and B are likely together)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                <p><span className="font-bold">Lift = 1:</span> Independent (No relationship)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-400" />
                <p><span className="font-bold">Lift &lt; 1:</span> Negative association (A and B avoid each other)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KMeansNumericalVisualization: React.FC = () => {
  const [step, setStep] = useState(0);

  const dataPoints = [
    { x: 8, y: 10 }, { x: 20, y: 2 }, { x: 16, y: 8 }, { x: 8, y: 7 },
    { x: 1, y: 4 }, { x: 13, y: 10 }, { x: 15, y: 1 }, { x: 19, y: 7 },
    { x: 3, y: 4 }, { x: 3, y: 2 }, { x: 11, y: 6 }
  ];

  const iterations = [
    {
      c1: { x: 10.0, y: 8.0 },
      c2: { x: 18.0, y: 6.0 },
      sse: null
    },
    {
      c1: { x: 6.7, y: 6.1 },
      c2: { x: 17.5, y: 4.5 },
      sse: 343.6
    },
    {
      c1: { x: 5.6, y: 5.4 },
      c2: { x: 16.6, y: 5.6 },
      sse: 224.2
    },
    {
      c1: { x: 5.6, y: 5.4 },
      c2: { x: 16.6, y: 5.6 },
      sse: 204.8
    }
  ];

  const currentIter = iterations[step];
  const assignments = dataPoints.map(p => {
    const d1 = Math.pow(p.x - currentIter.c1.x, 2) + Math.pow(p.y - currentIter.c1.y, 2);
    const d2 = Math.pow(p.x - currentIter.c2.x, 2) + Math.pow(p.y - currentIter.c2.y, 2);
    return d1 < d2 ? 0 : 1;
  });

  const width = 600;
  const height = 400;
  const padding = 40;
  const scaleX = (x: number) => padding + (x / 22) * (width - 2 * padding);
  const scaleY = (y: number) => height - padding - (y / 12) * (height - 2 * padding);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">K-Means Step-by-Step</h4>
          <p className="text-sm text-slate-500">Iteration {step}</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg disabled:opacity-50 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Previous
          </button>
          <button 
            onClick={() => setStep(Math.min(iterations.length - 1, step + 1))}
            disabled={step === iterations.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <svg width={width} height={height} className="mx-auto min-w-[600px]">
            {/* Grid */}
            {[0, 5, 10, 15, 20].map(x => (
              <line key={`gx-${x}`} x1={scaleX(x)} y1={padding} x2={scaleX(x)} y2={height - padding} stroke="#e2e8f0" strokeDasharray="4,4" className="dark:stroke-slate-800" />
            ))}
            {[0, 5, 10].map(y => (
              <line key={`gy-${y}`} x1={padding} y1={scaleY(y)} x2={width - padding} y2={scaleY(y)} stroke="#e2e8f0" strokeDasharray="4,4" className="dark:stroke-slate-800" />
            ))}

            {/* Points */}
            {dataPoints.map((p, i) => (
              <circle 
                key={`p-${i}`} 
                cx={scaleX(p.x)} 
                cy={scaleY(p.y)} 
                r={6} 
                fill={assignments[i] === 0 ? '#3b82f6' : '#10b981'} 
                className="transition-all duration-500"
              />
            ))}

            {/* Centroids */}
            <path 
              d={`M ${scaleX(currentIter.c1.x)-8} ${scaleY(currentIter.c1.y)-8} L ${scaleX(currentIter.c1.x)+8} ${scaleY(currentIter.c1.y)+8} M ${scaleX(currentIter.c1.x)-8} ${scaleY(currentIter.c1.y)+8} L ${scaleX(currentIter.c1.x)+8} ${scaleY(currentIter.c1.y)-8}`}
              stroke="#2563eb" strokeWidth={4} className="transition-all duration-500"
            />
            <path 
              d={`M ${scaleX(currentIter.c2.x)-8} ${scaleY(currentIter.c2.y)-8} L ${scaleX(currentIter.c2.x)+8} ${scaleY(currentIter.c2.y)+8} M ${scaleX(currentIter.c2.x)-8} ${scaleY(currentIter.c2.y)+8} L ${scaleX(currentIter.c2.x)+8} ${scaleY(currentIter.c2.y)-8}`}
              stroke="#059669" strokeWidth={4} className="transition-all duration-500"
            />
          </svg>
        </div>

        <div className="w-full lg:w-64 space-y-4">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Centroid 1 (Blue)</h5>
            <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
              ({currentIter.c1.x.toFixed(1)}, {currentIter.c1.y.toFixed(1)})
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Centroid 2 (Green)</h5>
            <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
              ({currentIter.c2.x.toFixed(1)}, {currentIter.c2.y.toFixed(1)})
            </p>
          </div>
          <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h5 className="font-bold text-slate-700 dark:text-slate-300 mb-2">SSE</h5>
            <p className="font-mono text-lg font-bold text-slate-800 dark:text-slate-200">
              {currentIter.sse !== null ? currentIter.sse.toFixed(1) : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const OLAPCubeVisualization: React.FC<OLAPCubeProps> = (props) => {
  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden relative group">
      <div className="absolute top-6 left-6 z-10">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Interactive 3D OLAP Cube</h4>
        <p className="text-sm text-slate-300 font-medium">Drag to rotate • Scroll to zoom</p>
      </div>
      
      <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Intensity</span>
            <div className="w-32 h-2 bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-200 rounded-full" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-emerald-900/80 border border-emerald-700"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">Low Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-300"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">High Sales</span>
          </div>
        </div>
      </div>

      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 8, 8]} fov={40} />
        <Suspense fallback={null}>
          <CubeScene {...props} />
        </Suspense>
      </Canvas>

      <AnimatePresence>
        {props.activeOp && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <RefreshCw size={16} className="animate-spin" />
            {props.activeOp} Mode Active
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
