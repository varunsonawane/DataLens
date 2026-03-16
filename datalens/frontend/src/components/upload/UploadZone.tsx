import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Database,
  FileSpreadsheet,
  ChevronRight,
  Zap,
  BarChart2,
  CheckCircle2,
  AlertCircle,
  Layers,
  Hash,
  Type,
  Calendar,
  ArrowRight,
  Sparkles,
  Globe2,
} from 'lucide-react';
import axios from 'axios';
import type { DataProfile, DbTableSummary, UploadResponse } from '../../types';
import { getAuthHeader } from '../../store/authStore';

function uploadHeaders(extra?: Record<string, string>): Record<string, string> {
  const auth = getAuthHeader();
  return { ...(auth ? { Authorization: auth } : {}), ...extra };
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

// FastAPI/Pydantic v2 returns `detail` as either a string or an array of
// validation-error objects: [{type, loc, msg, input}]. This helper always
// returns a plain string safe to store in state and render as text.
type PydanticError = { msg: string; loc?: (string | number)[] };
function extractErrorMessage(err: unknown, fallback = 'Request failed'): string {
  const e = err as { response?: { data?: { detail?: unknown } }; message?: string };
  const detail = e?.response?.data?.detail;
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail) && detail.length > 0) {
    return (detail as PydanticError[])
      .map((d) => {
        const field = d.loc ? d.loc[d.loc.length - 1] : '';
        return field ? `${field}: ${d.msg}` : d.msg;
      })
      .join(' · ');
  }
  return e?.message || fallback;
}

const SAMPLE_DATASETS = [
  { id: 'sales', label: 'Sales Q3', icon: '📈', desc: '8.2k rows' },
  { id: 'employees', label: 'HR Data', icon: '👥', desc: '1.4k rows' },
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛒', desc: '22k rows' },
];

// ── 3D Tilt helpers ──────────────────────────────────────────────────────────
function onTilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateZ(6px)`;
}
function offTilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform =
    'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
}

// ── Profile Summary ──────────────────────────────────────────────────────────
interface ProfileSummaryProps {
  profile: DataProfile;
  sessionId: string;
  onContinue: () => void;
}

function ProfileSummary({ profile, onContinue }: ProfileSummaryProps) {
  const isDb = profile.source === 'database';

  // ── File-upload stats ──────────────────────────────────────────────────────
  const cols = profile.columns || [];
  const numericCount = profile.numeric_columns?.length ?? 0;
  const categoricalCount = profile.categorical_columns?.length ?? 0;
  const datetimeCount = profile.datetime_columns?.length ?? 0;
  const completeness =
    cols.length > 0
      ? Math.round(
          cols.reduce((sum, c) => sum + (100 - (c.null_pct || 0)), 0) / cols.length,
        )
      : 100;

  // ── DB stats ───────────────────────────────────────────────────────────────
  const tablesSummary: DbTableSummary[] = profile.tables_summary ?? [];

  const statsRow = isDb
    ? [
        { label: 'Tables',        value: profile.total_tables ?? 0,        cls: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Columns',       value: profile.total_columns ?? 0,       cls: 'text-violet-600 dark:text-violet-400'  },
        { label: 'Relationships', value: profile.total_relationships ?? 0, cls: 'text-cyan-600 dark:text-cyan-400'      },
        { label: 'Dialect',       value: profile.dialect ?? 'sql',         cls: 'text-amber-600 dark:text-amber-400'    },
      ]
    : [
        { label: 'Completeness', value: `${completeness}%`, cls: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Numeric cols', value: numericCount,       cls: 'text-violet-600 dark:text-violet-400'  },
        { label: 'Categorical',  value: categoricalCount,   cls: 'text-cyan-600 dark:text-cyan-400'      },
        { label: 'Datetime',     value: datetimeCount,      cls: 'text-amber-600 dark:text-amber-400'    },
      ];

  const subtitle = isDb
    ? `${profile.total_tables} tables · ${profile.total_columns} columns · ${profile.dialect}`
    : `${profile.shape.rows.toLocaleString()} rows × ${profile.shape.columns} columns`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto px-4 space-y-4"
    >
      {/* Header card */}
      <div className="rounded-2xl p-6 mb-4 bg-white dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-none transition-colors">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500 shadow-lg shadow-emerald-500/30">
              {isDb ? <Database size={22} className="text-white" /> : <CheckCircle2 size={22} className="text-white" />}
            </div>
            <div>
              <p className="font-bold text-base text-slate-900 dark:text-white transition-colors">
                {profile.filename || (isDb ? 'Database connected' : 'Dataset uploaded')}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                {subtitle}
              </p>
            </div>
          </div>
          <motion.button
            onClick={onContinue}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 transition-colors"
          >
            <Sparkles size={14} />
            Generate Stories
            <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mt-5">
          {statsRow.map(({ label, value, cls }) => (
            <div
              key={label}
              className="rounded-xl p-3 text-center bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 transition-colors"
            >
              <p className={`text-lg font-bold transition-colors ${cls}`}>{value}</p>
              <p className="text-[11px] mt-0.5 text-slate-500 dark:text-slate-400 transition-colors">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DB: table list */}
      {isDb && tablesSummary.length > 0 && (
        <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/40 shadow-sm dark:shadow-none transition-colors">
          <p className="text-xs font-semibold mb-3 uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors">
            Tables ({tablesSummary.length})
          </p>
          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
            {tablesSummary.map((t) => (
              <div
                key={`${t.schema}.${t.name}`}
                className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <Database size={10} className="text-emerald-500 flex-shrink-0" />
                  {t.schema && t.schema !== 'default' && t.schema !== 'public'
                    ? `${t.schema}.${t.name}`
                    : t.name}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 flex-shrink-0">
                  {t.column_count} cols
                  {t.row_count != null ? ` · ${t.row_count.toLocaleString()} rows` : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* File: column pills */}
      {!isDb && cols.length > 0 && (
        <div className="rounded-2xl p-5 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/40 shadow-sm dark:shadow-none transition-colors">
          <p className="text-xs font-semibold mb-3 uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors">
            Columns ({cols.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {cols.slice(0, 20).map((col) => {
              const isNum = profile.numeric_columns?.includes(col.name);
              const isCat = profile.categorical_columns?.includes(col.name);
              const isDt = profile.datetime_columns?.includes(col.name);
              const chipClass = isNum
                ? 'bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-300'
                : isCat
                  ? 'bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300'
                  : isDt
                    ? 'bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-300'
                    : 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400';
              return (
                <span
                  key={col.name}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${chipClass}`}
                >
                  {isNum ? <Hash size={10} /> : isCat ? <Type size={10} /> : isDt ? <Calendar size={10} /> : <Layers size={10} />}
                  {col.name}
                </span>
              );
            })}
            {cols.length > 20 && (
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/40 transition-colors">
                +{cols.length - 20} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── Main UploadZone ──────────────────────────────────────────────────────────
interface UploadZoneProps {
  onUploadComplete: (sessionId: string, profile: DataProfile) => void;
}

export function UploadZone({ onUploadComplete }: UploadZoneProps) {
  const [tab, setTab] = useState<'file' | 'db'>('file');
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedProfile, setUploadedProfile] = useState<DataProfile | null>(null);
  const [pendingSessionId, setPendingSessionId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // DB form state
  const [dbForm, setDbForm] = useState({
    db_type: 'postgresql',
    host: '',
    port: '5432',
    database: '',
    username: '',
    password: '',
    schema_filter: '',   // optional: inspect only this schema/namespace
  });

  const handleSuccess = useCallback((resp: UploadResponse) => {
    setUploadedProfile(resp.data_profile);
    setPendingSessionId(resp.session_id);
    setError(null);
  }, []);

  const handleContinue = useCallback(() => {
    if (uploadedProfile && pendingSessionId) {
      onUploadComplete(pendingSessionId, uploadedProfile);
    }
  }, [uploadedProfile, pendingSessionId, onUploadComplete]);

  const handleFile = useCallback(
    async (file: File) => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!['csv', 'xlsx', 'xls', 'json', 'pdf', 'png', 'jpg', 'jpeg', 'webp', 'gif'].includes(ext || '')) {
        setError('Only CSV, Excel, JSON, PDF and Image files are supported.');
        return;
      }
      setIsUploading(true);
      setError(null);
      try {
        const form = new FormData();
        form.append('file', file);
        const { data } = await axios.post<UploadResponse>(
          `${BACKEND_URL}/upload/file`,
          form,
          { headers: uploadHeaders({ 'Content-Type': 'multipart/form-data' }) },
        );
        handleSuccess(data);
      } catch (err: unknown) {
        setError(extractErrorMessage(err, 'Upload failed'));
      } finally {
        setIsUploading(false);
      }
    },
    [handleSuccess],
  );

  const handleSample = useCallback(
    async (id: string) => {
      setIsUploading(true);
      setError(null);
      try {
        // Backend: GET /upload/sample/{dataset_name}
        const { data } = await axios.get<UploadResponse>(
          `${BACKEND_URL}/upload/sample/${id}`,
          { headers: uploadHeaders() },
        );
        handleSuccess(data);
      } catch (err: unknown) {
        setError(extractErrorMessage(err, 'Failed to load sample'));
      } finally {
        setIsUploading(false);
      }
    },
    [handleSuccess],
  );

  const handleDbConnect = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsUploading(true);
      setError(null);
      try {
        const payload: Record<string, string> = {
          db_type: dbForm.db_type,
          host: dbForm.host,
          port: dbForm.port,
          database: dbForm.database,
          username: dbForm.username,
          password: dbForm.password,
        };
        if (dbForm.schema_filter.trim()) {
          payload.schema_filter = dbForm.schema_filter.trim();
        }
        const { data } = await axios.post<UploadResponse>(
          `${BACKEND_URL}/upload/database`,
          payload,
          { headers: uploadHeaders() },
        );
        handleSuccess(data);
      } catch (err: unknown) {
        setError(extractErrorMessage(err, 'Connection failed'));
      } finally {
        setIsUploading(false);
      }
    },
    [dbForm, handleSuccess],
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  // After upload, show the profile summary instead of the upload form
  if (uploadedProfile && pendingSessionId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-full py-10 relative overflow-hidden">
        {/* 3D perspective grid background */}
        <div
          className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        />
        <ProfileSummary
          profile={uploadedProfile}
          sessionId={pendingSessionId}
          onContinue={handleContinue}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10 relative overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors">

      <div className="w-full max-w-3xl px-4 relative z-10 flex flex-col items-center">
        {/* Headings */}
        <motion.div
          className="text-center mb-10 mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white transition-colors">
            Upload Your Data
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 transition-colors">
            Drop your files here and let AI transform them into insights
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex bg-slate-200/50 dark:bg-slate-900 rounded-xl p-1 mb-8 border border-slate-300 dark:border-white/5 transition-colors">
          <button
            onClick={() => setTab('file')}
            className={`flex-1 py-2 px-6 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${tab === 'file' ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-slate-100 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
          >
            <FileSpreadsheet size={16} />
            File Upload
          </button>
          <button
            onClick={() => setTab('db')}
            className={`flex-1 py-2 px-6 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${tab === 'db' ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-slate-100 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
          >
            <Database size={16} />
            Database
          </button>
        </div>

        {/* Tab content */}
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {tab === 'file' ? (
              <motion.div
                key="file"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                {/* Drop zone */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer rounded-3xl p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
                  style={{
                    background: isDragging ? 'rgba(15,23,42,0.8)' : 'rgba(15,23,42,0.4)',
                    border: `1px dashed ${isDragging ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5"
                  >
                    {isUploading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Zap size={28} className="text-emerald-500" />
                      </motion.div>
                    ) : (
                      <Upload size={28} className="text-slate-400 dark:text-slate-300" strokeWidth={1.5} />
                    )}
                  </div>

                  <p className="font-bold text-lg mb-2 text-slate-800 dark:text-white">
                    {isUploading
                      ? 'Uploading & profiling...'
                      : isDragging
                        ? 'Drop it here!'
                        : 'Drag and drop your files'}
                  </p>
                  <p className="text-sm mb-8 text-slate-500 dark:text-slate-400">
                    Supports CSV, Excel, JSON, PDF, and images
                  </p>

                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30"
                  >
                    <Upload size={16} />
                    Browse Files
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx,.xls,.json,.pdf,image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleFile(f);
                    }}
                  />
                </div>
              </motion.div>
          ) : (
            <motion.div
              key="db"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <form
                onSubmit={handleDbConnect}
                className="rounded-3xl p-8 space-y-5 flex flex-col items-center justify-center min-h-[300px] bg-white/50 dark:bg-slate-900/40 border border-slate-300 dark:border-white/5 transition-colors"
              >
                <div className="grid grid-cols-2 gap-4 w-full">
                  {/* DB Type */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Database Type
                    </label>
                    <select
                      value={dbForm.db_type}
                      onChange={(e) => setDbForm((p) => ({ ...p, db_type: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white focus:border-emerald-500/50 transition-colors"
                    >
                      {['postgresql', 'mysql', 'sqlite'].map((o) => (
                        <option key={o} value={o} className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Host */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Host
                    </label>
                    <input
                      type="text"
                      placeholder="localhost"
                      value={dbForm.host}
                      onChange={(e) => setDbForm((p) => ({ ...p, host: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Port */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Port
                    </label>
                    <input
                      type="text"
                      placeholder="5432"
                      value={dbForm.port}
                      onChange={(e) => setDbForm((p) => ({ ...p, port: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Database */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Database
                    </label>
                    <input
                      type="text"
                      placeholder="mydb"
                      value={dbForm.database}
                      onChange={(e) => setDbForm((p) => ({ ...p, database: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="postgres"
                      value={dbForm.username}
                      onChange={(e) => setDbForm((p) => ({ ...p, username: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={dbForm.password}
                      onChange={(e) => setDbForm((p) => ({ ...p, password: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Schema filter — optional, full width */}
                <div className="w-full">
                  <label
                    className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400"
                  >
                    Schema Filter <span className="font-normal text-slate-400">(optional — leave blank to inspect all schemas)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="public"
                    value={dbForm.schema_filter}
                    onChange={(e) => setDbForm((p) => ({ ...p, schema_filter: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isUploading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-2 py-3 rounded-xl text-sm font-semibold text-white dark:text-slate-950 flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors disabled:opacity-50"
                  style={{
                    boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                  }}
                >
                  <Globe2 size={16} />
                  {isUploading ? 'Connecting...' : 'Connect & Analyse'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        {/* Error banner */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="flex items-start gap-2.5 mt-4 p-4 rounded-xl w-full max-w-2xl text-left"
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
              }}
            >
              <AlertCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
