import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import type { ChartData } from '../../types';

// ── Design tokens ──────────────────────────────────────────────────────────
const PALETTE = [
  '#10b981', // emerald-500
  '#34d399', // emerald-400
  '#0ea5e9', // sky-500
  '#38bdf8', // sky-400
  '#06b6d4', // cyan-500
  '#2dd4bf', // teal-400
  '#f59e0b', // amber-500
  '#ec4899', // pink-500
];

const GRID_COLOR  = 'rgba(255,255,255,0.05)';
const AXIS_COLOR  = 'rgba(255,255,255,0.3)';
const TICK_STYLE  = { fill: AXIS_COLOR, fontSize: 11, fontFamily: 'Inter, sans-serif' };



const CURSOR_STYLE = { fill: 'rgba(16,185,129,0.08)' };

// ── Data helpers ───────────────────────────────────────────────────────────
function buildRechartsData(chartData: ChartData) {
  if (!chartData?.labels || !chartData?.datasets) return [];
  return chartData.labels.map((label, i) => {
    const point: Record<string, string | number> = { name: label };
    chartData.datasets.forEach((ds) => { point[ds.label] = ds.data?.[i] ?? 0; });
    return point;
  });
}

function buildScatterData(ds: ChartData['datasets'][number], labels: string[]) {
  if (!ds?.data) return [];
  return ds.data.map((val, i) => ({ x: i, y: val, name: labels?.[i] || `${i}` }));
}

function buildPieData(chartData: ChartData) {
  if (!chartData?.datasets?.length || !chartData?.labels) return [];
  const ds = chartData.datasets[0];
  return chartData.labels.map((label, i) => ({ name: label, value: ds.data?.[i] ?? 0 }));
}

// ── Custom legend ─────────────────────────────────────────────────────────
function CustomLegend({ payload }: { payload?: Array<{ color: string; value: string }> }) {
  if (!payload?.length) return null;
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-2">
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-[11px]" style={{ color: AXIS_COLOR }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Custom tooltip ────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/95 dark:bg-slate-900/95 border border-emerald-500/20 rounded-xl text-slate-800 dark:text-slate-200 text-xs backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/50 px-3 py-2">
      {label && <p className="text-xs mb-1.5 font-medium text-emerald-600 dark:text-emerald-400">{label}</p>}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
          <span className="text-[11px] text-slate-500 dark:text-slate-400">{p.name}:</span>
          <span className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
            {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────
interface DataChartsProps { data: ChartData }

export function DataCharts({ data }: DataChartsProps) {
  if (!data?.labels || !data?.datasets || data.labels.length === 0) return null;

  const rechartsData  = buildRechartsData(data);
  const { chart_type, datasets } = data;
  const typeLabel = chart_type.charAt(0).toUpperCase() + chart_type.slice(1);

  const renderChart = () => {
    switch (chart_type) {

      case 'bar':
        return (
          <BarChart data={rechartsData} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
            <XAxis dataKey="name" tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={CURSOR_STYLE} />
            <Legend content={<CustomLegend />} />
            {datasets.map((ds, idx) => (
              <Bar
                key={ds.label}
                dataKey={ds.label}
                fill={ds.color || PALETTE[idx % PALETTE.length]}
                radius={[6, 6, 0, 0]}
                maxBarSize={52}
              />
            ))}
          </BarChart>
        );

      case 'line':
        return (
          <LineChart data={rechartsData} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
            <XAxis dataKey="name" tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            {datasets.map((ds, idx) => {
              const color = ds.color || PALETTE[idx % PALETTE.length];
              return (
                <Line
                  key={ds.label}
                  type="monotone"
                  dataKey={ds.label}
                  stroke={color}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: color, strokeWidth: 0 }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              );
            })}
          </LineChart>
        );

      case 'pie': {
        const pieData = buildPieData(data);
        return (
          <PieChart margin={{ top: 4, right: 16, left: 16, bottom: 4 }}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={3}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={{ stroke: 'rgba(16,185,129,0.4)', strokeWidth: 1 }}
            >
              {pieData.map((_, idx) => (
                <Cell
                  key={idx}
                  fill={PALETTE[idx % PALETTE.length]}
                  stroke="rgba(15,23,42,0.6)"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        );
      }

      case 'scatter':
        return (
          <ScatterChart margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
            <XAxis dataKey="x" type="number" name="x" tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <YAxis dataKey="y" type="number" name="y" tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: GRID_COLOR }} />
            <Legend content={<CustomLegend />} />
            {datasets.map((ds, idx) => (
              <Scatter
                key={ds.label}
                name={ds.label}
                data={buildScatterData(ds, data.labels)}
                fill={ds.color || PALETTE[idx % PALETTE.length]}
                opacity={0.85}
              />
            ))}
          </ScatterChart>
        );

      default:
        return (
          <BarChart data={rechartsData} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
            <XAxis dataKey="name" tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={CURSOR_STYLE} />
            <Legend content={<CustomLegend />} />
            {datasets.map((ds, idx) => (
              <Bar key={ds.label} dataKey={ds.label}
                fill={ds.color || PALETTE[idx % PALETTE.length]}
                radius={[6, 6, 0, 0]} maxBarSize={52}
              />
            ))}
          </BarChart>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-colors"
    >
      {/* Header */}
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-200 dark:border-white/5 transition-colors">
        <div className="flex items-center gap-2.5">
          {/* Colored type pill */}
          <div className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
            {typeLabel}
          </div>
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            Chart
          </span>
        </div>

        {datasets.length > 0 && (
          <div className="flex items-center gap-1">
            {datasets.slice(0, 4).map((ds, idx) => (
              <div key={idx} className="w-2 h-2 rounded-full"
                style={{ background: ds.color || PALETTE[idx % PALETTE.length] }} />
            ))}
            <span className="text-[10px] ml-1 text-slate-500">
              {datasets.length} series
            </span>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="p-4 pt-3">
        <ResponsiveContainer width="100%" height={300}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
