export type StoryFormat = 'eli5' | 'architecture' | 'analyst';

// ── Database schema types ────────────────────────────────────────────────────

export interface DbColumnMeta {
  name: string;
  type: string;
  nullable: boolean;
  default: string | null;
  primary_key: boolean;
}

export interface DbForeignKey {
  columns: string[];
  references: { table: string; schema: string | null; columns: string[] };
}

export interface DbIndex {
  name: string;
  columns: string[];
  unique: boolean;
}

export interface DbTableMeta {
  name: string;
  schema: string;
  row_count: number | null;
  columns: DbColumnMeta[];
  primary_keys: string[];
  foreign_keys: DbForeignKey[];
  indexes: DbIndex[];
}

export interface DbRelationship {
  from_table: string;
  from_column: string;
  to_table: string;
  to_column: string;
}

export interface DbSchema {
  dialect: string;
  database_name: string;
  tables: DbTableMeta[];
  relationships: DbRelationship[];
  total_tables: number;
  total_columns: number;
  total_relationships: number;
}

export interface DbTableSummary {
  name: string;
  schema: string;
  column_count: number;
  row_count: number | null;
}

// ── DataProfile (flat file or database) ─────────────────────────────────────

export interface DataProfile {
  shape: { rows: number; columns: number };
  columns: ColumnProfile[];
  numeric_columns: string[];
  categorical_columns: string[];
  datetime_columns: string[];
  correlations: Array<{ col1: string; col2: string; correlation: number }>;
  filename?: string;
  // Database-specific fields (present when source === 'database')
  source?: 'database';
  dialect?: string;
  database_name?: string;
  total_tables?: number;
  total_columns?: number;
  total_relationships?: number;
  tables_summary?: DbTableSummary[];
}

export interface ColumnProfile {
  name: string;
  dtype: string;
  null_count: number;
  null_pct: number;
  unique_count: number;
  sample_values: unknown[];
  min?: number | string;
  max?: number | string;
  mean?: number;
  std?: number;
  top_values?: Record<string, number>;
}

export interface ImageRecord {
  url: string;
  prompt: string;
  caption?: string;   // human-readable data insight (e.g. "Pop has the most songs with 6,786")
  format: StoryFormat;
  id: string;
}

export interface ConversationMessage {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: string;
  imageUrl?: string;
}

export interface Stories {
  eli5: string;
  architecture: string;
  analyst: string;
  chart_data?: ChartData;
}

export interface ChartData {
  chart_type: string;
  labels: string[];
  datasets: Array<{ label: string; data: number[]; color?: string }>;
}

export interface Session {
  session_id: string;
  created_at: string;
  filename: string;
  data_profile: DataProfile;
  stories: Stories;
  images: ImageRecord[];
  conversation_history: ConversationMessage[];
  rag_index_ids?: Record<string, string>;
}

export interface SessionListItem {
  session_id: string;
  filename: string;
  created_at: string;
  preview_text: string;
  image_count: number;
  thumbnail_url?: string;
}

// Stream chunk types from SSE
export type StreamChunk =
  | { type: 'text'; content: string; format?: StoryFormat }
  | { type: 'image_placeholder'; prompt: string; caption?: string; placeholder_id: string; format?: StoryFormat }
  | { type: 'image_ready'; url: string; placeholder_id?: string; prompt?: string; caption?: string; format?: StoryFormat }
  | { type: 'section_start'; format: StoryFormat }
  | { type: 'chart_data'; data: ChartData }
  | { type: 'complete'; stories: Stories }
  | { type: 'error'; message: string }
  | { type: 'session_created'; session_id: string };

// Voice agent websocket message types
export type VoiceOrbState = 'idle' | 'listening' | 'speaking' | 'generating';

export type AgentMessage =
  | { type: 'audio_response'; data: string }
  | { type: 'text_response'; content: string }
  | { type: 'text_done' }
  | { type: 'new_image'; url: string; prompt?: string }
  | { type: 'error'; message: string }
  | { type: 'connected'; session_id?: string }
  | { type: 'disconnected' };

export interface UploadResponse {
  session_id: string;
  filename: string;
  data_profile: DataProfile;
  message: string;
}

export interface DatabaseConnectionParams {
  db_type: 'postgresql' | 'mysql' | 'sqlite' | 'mssql';
  host: string;
  port: string;
  database: string;
  username: string;
  password: string;
  schema_filter?: string;
}
