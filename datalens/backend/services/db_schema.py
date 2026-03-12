"""
Database Schema Extractor — SQLAlchemy inspection-based full schema extraction.

Connects to a database and extracts complete schema metadata WITHOUT fetching
any actual row data. Extracts:
  - All tables (optionally filtered by a schema/namespace)
  - Column names, types, nullability, defaults, primary key flags
  - Foreign key relationships
  - Unique/regular indexes
  - Per-table row counts via cheap COUNT(*) queries

This metadata is stored in the session JSON under "db_schema" and RAG-indexed
so the AI agent can suggest complex SQL queries including JOINs.
"""

from __future__ import annotations

import logging
import re
from typing import Optional
from urllib.parse import quote_plus

from sqlalchemy import create_engine, inspect, text

logger = logging.getLogger(__name__)

# Schemas that exist in every install but contain no user data
_SYSTEM_SCHEMAS = frozenset(
    {
        # PostgreSQL
        "pg_catalog",
        "pg_toast",
        "information_schema",
        # MySQL / MariaDB
        "mysql",
        "performance_schema",
        "sys",
        "ndbinfo",
        # MSSQL
        "INFORMATION_SCHEMA",
        "sys",
    }
)


# ---------------------------------------------------------------------------
# Connection string builder
# ---------------------------------------------------------------------------


def build_connection_string(
    db_type: str,
    host: str,
    port: str,
    database: str,
    username: str,
    password: str,
) -> str:
    """
    Build a SQLAlchemy connection string from individual connection fields.

    SQLite is a special case: 'database' is the file path, no host/user/pass.
    """
    if db_type == "sqlite":
        return f"sqlite:///{database}"

    safe_user = quote_plus(username)
    safe_pass = quote_plus(password)

    drivers = {
        "postgresql": "postgresql+psycopg2",
        "mysql": "mysql+pymysql",
        "mssql": "mssql+pyodbc",
    }
    prefix = drivers.get(db_type, db_type)
    port_part = f":{port}" if port else ""
    return f"{prefix}://{safe_user}:{safe_pass}@{host}{port_part}/{database}"


# ---------------------------------------------------------------------------
# Schema extraction
# ---------------------------------------------------------------------------


def extract_db_schema(
    connection_string: str,
    schema_filter: Optional[str] = None,
) -> dict:
    """
    Connect to a database and extract full schema metadata.

    No actual row data is loaded — only structural metadata + COUNT(*) per table.

    Returns:
        {
          "dialect": str,
          "database_name": str,
          "tables": [...],          # list of table dicts (see _extract_table)
          "relationships": [...],   # list of {from_table, from_column, to_table, to_column}
          "total_tables": int,
          "total_columns": int,
          "total_relationships": int,
        }
    """
    engine = create_engine(connection_string, pool_pre_ping=True)
    dialect = engine.dialect.name
    database_name = engine.url.database or "database"

    tables: list[dict] = []
    relationships: list[dict] = []

    # Use a single connection for both Inspector and COUNT(*) queries so we
    # never exceed one checkout from the pool regardless of pool configuration.
    with engine.connect() as conn:
        inspector = inspect(conn)

        # ---- Determine which schemas to inspect ----
        try:
            all_schemas: list[Optional[str]] = inspector.get_schema_names()
        except Exception:
            all_schemas = [None]  # fallback: default schema

        if schema_filter:
            schemas_to_inspect: list[Optional[str]] = [
                s for s in all_schemas if s == schema_filter
            ]
            if not schemas_to_inspect:
                schemas_to_inspect = [schema_filter]
        else:
            schemas_to_inspect = [s for s in all_schemas if s not in _SYSTEM_SCHEMAS]
            # For MySQL the database name IS the schema — avoid duplicates
            if dialect == "mysql" and database_name in schemas_to_inspect:
                schemas_to_inspect = [database_name]
            # For SQLite there is no schema concept; use None
            if dialect == "sqlite":
                schemas_to_inspect = [None]

        for schema in schemas_to_inspect:
            try:
                table_names = inspector.get_table_names(schema=schema)
            except Exception as exc:
                logger.warning(
                    "Could not list tables in schema %s: %s", schema, exc
                )
                continue

            for table_name in table_names:
                try:
                    table_dict = _extract_table(
                        inspector, conn, dialect, schema, table_name, relationships
                    )
                    tables.append(table_dict)
                except Exception as exc:
                    logger.warning(
                        "Failed to introspect table %s.%s: %s",
                        schema,
                        table_name,
                        exc,
                    )

    engine.dispose()

    return {
        "dialect": dialect,
        "database_name": database_name,
        "tables": tables,
        "relationships": relationships,
        "total_tables": len(tables),
        "total_columns": sum(len(t["columns"]) for t in tables),
        "total_relationships": len(relationships),
    }


def _extract_table(
    inspector,
    conn,
    dialect: str,
    schema: Optional[str],
    table_name: str,
    relationships: list,
) -> dict:
    """
    Extract all metadata for a single table.

    Appends FK edges to the shared `relationships` list so the caller gets a
    global view without iterating tables again.
    """
    # ---- Columns ----
    raw_cols = inspector.get_columns(table_name, schema=schema)

    # ---- Primary keys ----
    pk_info = inspector.get_pk_constraint(table_name, schema=schema)
    pk_cols = set(pk_info.get("constrained_columns", []))

    columns = [
        {
            "name": col["name"],
            "type": str(col["type"]),
            "nullable": col.get("nullable", True),
            "default": str(col["default"]) if col.get("default") is not None else None,
            "primary_key": col["name"] in pk_cols,
        }
        for col in raw_cols
    ]

    # ---- Foreign keys ----
    raw_fks = inspector.get_foreign_keys(table_name, schema=schema)
    foreign_keys: list[dict] = []
    for fk in raw_fks:
        foreign_keys.append(
            {
                "columns": fk["constrained_columns"],
                "references": {
                    "table": fk["referred_table"],
                    "schema": fk.get("referred_schema"),
                    "columns": fk["referred_columns"],
                },
            }
        )
        # Append to global relationship graph
        for local_col, ref_col in zip(
            fk["constrained_columns"], fk["referred_columns"]
        ):
            from_qual = (
                f"{schema}.{table_name}"
                if schema and schema not in ("public", "default")
                else table_name
            )
            relationships.append(
                {
                    "from_table": from_qual,
                    "from_column": local_col,
                    "to_table": fk["referred_table"],
                    "to_column": ref_col,
                }
            )

    # ---- Indexes ----
    raw_indexes = inspector.get_indexes(table_name, schema=schema)
    indexes = [
        {
            "name": idx.get("name", ""),
            "columns": [c for c in idx.get("column_names", []) if c],
            "unique": bool(idx.get("unique", False)),
        }
        for idx in raw_indexes
    ]

    # ---- Row count (cheap COUNT(*), never fetches rows) ----
    row_count: Optional[int] = None
    try:
        qualified = _qualify(dialect, schema, table_name)
        row_count = conn.execute(text(f"SELECT COUNT(*) FROM {qualified}")).scalar()
    except Exception as exc:
        logger.debug(
            "Could not get row count for %s.%s: %s", schema, table_name, exc
        )

    return {
        "name": table_name,
        "schema": schema or "default",
        "row_count": row_count,
        "columns": columns,
        "primary_keys": list(pk_cols),
        "foreign_keys": foreign_keys,
        "indexes": indexes,
    }


def _qualify(dialect: str, schema: Optional[str], table_name: str) -> str:
    """Return a safely quoted, dialect-appropriate qualified table identifier."""
    if not schema or schema in ("public", "default"):
        # PostgreSQL default schema — no schema prefix needed
        if dialect == "postgresql":
            return f'"{table_name}"'
        if dialect == "mysql":
            return f"`{table_name}`"
        return table_name

    if dialect == "postgresql":
        return f'"{schema}"."{table_name}"'
    if dialect == "mysql":
        return f"`{schema}`.`{table_name}`"
    if dialect == "mssql":
        return f"[{schema}].[{table_name}]"
    return f"{schema}.{table_name}"


# ---------------------------------------------------------------------------
# Profile summary for frontend display
# ---------------------------------------------------------------------------


def make_db_data_profile(db_schema: dict, filename_hint: str) -> dict:
    """
    Build a data_profile dict that is compatible with the frontend DataProfile
    interface but represents a database schema rather than a flat file.

    Fields:
      source       : "database"   ← frontend uses this to switch display mode
      dialect      : e.g. "postgresql"
      database_name: e.g. "mydb"
      filename     : e.g. "mydb (postgresql)"
      shape        : { rows: total_rows_across_all_tables, columns: total_columns }
      total_tables : int
      total_columns: int
      total_relationships: int
      tables_summary: [ {name, schema, column_count, row_count}, ... ]
      columns      : []   ← empty; AI uses db_schema instead
      numeric_columns, categorical_columns, datetime_columns, correlations: []
    """
    tables_summary = [
        {
            "name": t["name"],
            "schema": t.get("schema", ""),
            "column_count": len(t["columns"]),
            "row_count": t.get("row_count"),
        }
        for t in db_schema.get("tables", [])
    ]

    # Total rows = sum of known row counts (None tables are excluded)
    known_counts = [
        t["row_count"]
        for t in db_schema.get("tables", [])
        if t.get("row_count") is not None
    ]
    total_rows = sum(known_counts) if known_counts else 0

    return {
        "source": "database",
        "dialect": db_schema.get("dialect", "sql"),
        "database_name": db_schema.get("database_name", ""),
        "filename": filename_hint,
        "shape": {
            "rows": total_rows,
            "columns": db_schema.get("total_columns", 0),
        },
        "total_tables": db_schema.get("total_tables", 0),
        "total_columns": db_schema.get("total_columns", 0),
        "total_relationships": db_schema.get("total_relationships", 0),
        "tables_summary": tables_summary,
        # These fields exist so the frontend DataProfile interface is satisfied
        "columns": [],
        "numeric_columns": [],
        "categorical_columns": [],
        "datetime_columns": [],
        "correlations": [],
    }
