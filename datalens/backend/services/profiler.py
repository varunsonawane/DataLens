"""
Pandas profiling service for DataLens.

Produces a rich data_profile dict from a DataFrame that is used:
  - As context for Gemini story generation
  - As the source for RAG dataset-namespace chunks
  - As display data on the frontend data-overview tab
"""

from __future__ import annotations

import asyncio
import logging
from typing import Any

import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _safe_val(val: Any) -> Any:
    """Convert numpy scalars and NaN to JSON-serialisable Python types."""
    if val is None:
        return None
    if isinstance(val, float) and (np.isnan(val) or np.isinf(val)):
        return None
    if isinstance(val, (np.integer,)):
        return int(val)
    if isinstance(val, (np.floating,)):
        return float(val)
    if isinstance(val, (np.bool_,)):
        return bool(val)
    if isinstance(val, (np.ndarray,)):
        return [_safe_val(v) for v in val.tolist()]
    return val


def _detect_datetime_columns(df: pd.DataFrame) -> list[str]:
    """
    Attempt pd.to_datetime conversion on object/string columns to find
    hidden datetime columns that were not automatically inferred.
    Returns column names that parse as datetimes.
    """
    dt_cols: list[str] = []
    for col in df.columns:
        if pd.api.types.is_datetime64_any_dtype(df[col]):
            dt_cols.append(col)
        elif df[col].dtype == object:
            sample = df[col].dropna().head(50)
            if len(sample) == 0:
                continue
            try:
                parsed = pd.to_datetime(sample, infer_datetime_format=True, errors="coerce")
                success_rate = parsed.notna().mean()
                if success_rate >= 0.8:
                    dt_cols.append(col)
            except Exception:
                pass
    return dt_cols


def _column_profile(df: pd.DataFrame, col: str, datetime_cols: list[str]) -> dict[str, Any]:
    """
    Compute a detailed profile for a single column.
    Returns a JSON-serialisable dict.
    """
    series = df[col]
    total = len(series)
    null_count = int(series.isna().sum())
    null_pct = round(null_count / total * 100, 2) if total > 0 else 0.0
    unique_count = int(series.nunique(dropna=True))

    # Raw dtype string
    dtype_str = str(series.dtype)

    # Sample values (first 10 non-null)
    sample_values = [
        _safe_val(v) for v in series.dropna().head(10).tolist()
    ]

    profile: dict[str, Any] = {
        "name": col,
        "dtype": dtype_str,
        "null_count": null_count,
        "null_pct": null_pct,
        "unique_count": unique_count,
        "sample_values": sample_values,
        "is_datetime": col in datetime_cols,
        "min": None,
        "max": None,
        "mean": None,
        "std": None,
        "median": None,
        "q25": None,
        "q75": None,
        "p05": None,
        "p95": None,
        "p99": None,
        "skewness": None,
        "kurtosis": None,
        "outlier_count": None,
        "distribution_shape": None,
        "top_values": [],
    }

    if pd.api.types.is_numeric_dtype(series) and not pd.api.types.is_bool_dtype(series) and col not in datetime_cols:
        numeric_series = series.dropna()
        if len(numeric_series) > 0:
            profile["min"] = _safe_val(numeric_series.min())
            profile["max"] = _safe_val(numeric_series.max())
            profile["mean"] = _safe_val(round(float(numeric_series.mean()), 6))
            profile["std"] = _safe_val(round(float(numeric_series.std()), 6))
            profile["median"] = _safe_val(numeric_series.median())
            profile["q25"] = _safe_val(float(numeric_series.quantile(0.25)))
            profile["q75"] = _safe_val(float(numeric_series.quantile(0.75)))

            # Tail percentiles
            pcts = numeric_series.quantile([0.05, 0.95, 0.99])
            profile["p05"] = _safe_val(round(float(pcts[0.05]), 6))
            profile["p95"] = _safe_val(round(float(pcts[0.95]), 6))
            profile["p99"] = _safe_val(round(float(pcts[0.99]), 6))

            # Skewness, kurtosis, distribution shape
            skew = round(float(numeric_series.skew()), 4)
            kurt = round(float(numeric_series.kurtosis()), 4)
            profile["skewness"] = _safe_val(skew)
            profile["kurtosis"] = _safe_val(kurt)
            if skew > 1:
                shape = "right-skewed"
            elif skew < -1:
                shape = "left-skewed"
            elif kurt > 3:
                shape = "heavy-tailed"
            else:
                shape = "normal"
            profile["distribution_shape"] = shape

            # Outlier count: values > mean ± 3σ
            mean_val = float(numeric_series.mean())
            std_val = float(numeric_series.std())
            if std_val > 0:
                profile["outlier_count"] = int(((numeric_series < mean_val - 3 * std_val) | (numeric_series > mean_val + 3 * std_val)).sum())
            else:
                profile["outlier_count"] = 0
    elif col in datetime_cols:
        try:
            parsed = pd.to_datetime(series, errors="coerce")
            valid = parsed.dropna()
            if len(valid) > 0:
                profile["min"] = str(valid.min())
                profile["max"] = str(valid.max())
        except Exception:
            pass
    else:
        # Categorical / object: compute top value frequencies
        try:
            vc = series.value_counts(dropna=True).head(20)
            profile["top_values"] = [
                {"value": _safe_val(k), "count": int(v)}
                for k, v in vc.items()
            ]
            if len(vc) > 0:
                profile["min"] = _safe_val(vc.index[-1])  # least frequent
                profile["max"] = _safe_val(vc.index[0])   # most frequent
        except Exception:
            pass

    return profile


def _compute_correlations(df: pd.DataFrame, numeric_cols: list[str]) -> list[dict[str, Any]]:
    """
    Compute pairwise Pearson correlations for numeric columns.
    Returns the top 10 pairs sorted by absolute correlation (descending).
    """
    if len(numeric_cols) < 2:
        return []

    try:
        corr_matrix = df[numeric_cols].corr(method="pearson", numeric_only=True)
        pairs: list[dict[str, Any]] = []

        cols = corr_matrix.columns.tolist()
        for i in range(len(cols)):
            for j in range(i + 1, len(cols)):
                val = corr_matrix.iloc[i, j]
                if pd.isna(val):
                    continue
                pairs.append(
                    {
                        "col_a": cols[i],
                        "col_b": cols[j],
                        "correlation": round(float(val), 4),
                        "abs_correlation": round(abs(float(val)), 4),
                    }
                )

        pairs.sort(key=lambda x: x["abs_correlation"], reverse=True)
        return pairs[:15]
    except Exception as exc:
        logger.warning("Correlation computation failed: %s", exc)
        return []


def _summary_stats(df: pd.DataFrame) -> dict[str, Any]:
    """Compute overall dataset-level statistics."""
    total_cells = df.shape[0] * df.shape[1]
    total_null = int(df.isna().sum().sum())
    completeness_pct = round((total_cells - total_null) / total_cells * 100, 2) if total_cells > 0 else 100.0

    # df.duplicated() on all strings does not release the GIL and freezes the main unblocked asyncio loop.
    # We skip it for large dataframes to prevent 503 timeouts.
    if df.shape[0] < 20000:
        duplicate_rows = int(df.duplicated().sum())
    else:
        duplicate_rows = 0

    # deep=True interrogates every python string object, permanently holding the GIL.
    memory_bytes = int(df.memory_usage(deep=False).sum())

    return {
        "total_cells": total_cells,
        "total_null_cells": total_null,
        "completeness_pct": completeness_pct,
        "duplicate_rows": duplicate_rows,
        "duplicate_row_pct": round(duplicate_rows / df.shape[0] * 100, 2) if df.shape[0] > 0 else 0.0,
        "memory_bytes": memory_bytes,
        "memory_mb": round(memory_bytes / 1024 / 1024, 3),
    }


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


async def profile_dataframe(df: pd.DataFrame) -> dict[str, Any]:
    """
    Build a rich data profile dictionary for the given DataFrame.

    Returns a fully JSON-serialisable dict with the following structure:
    {
      "shape": {"rows": int, "columns": int},
      "columns": [ColumnProfile, ...],
      "numeric_columns": [str, ...],
      "categorical_columns": [str, ...],
      "datetime_columns": [str, ...],
      "correlations": [CorrelationPair, ...],   # top 10 by abs value
      "summary_stats": SummaryStats,
      "head": [[...], ...],                      # first 5 rows as list of lists
      "column_names": [str, ...]
    }
    """
    # Run CPU-bound profiling in a thread to keep the event loop free
    loop = asyncio.get_event_loop()
    profile = await loop.run_in_executor(None, _profile_sync, df)
    return profile


def _profile_sync(df: pd.DataFrame) -> dict[str, Any]:
    """Synchronous profiling implementation (runs in thread pool)."""
    rows, cols = df.shape

    # Detect datetime columns first (used by column profiler)
    datetime_cols = _detect_datetime_columns(df)

    # Classify columns
    numeric_cols: list[str] = []
    categorical_cols: list[str] = []

    for col in df.columns:
        if col in datetime_cols:
            continue
        if pd.api.types.is_numeric_dtype(df[col]) and not pd.api.types.is_bool_dtype(df[col]):
            numeric_cols.append(col)
        else:
            categorical_cols.append(col)

    # Per-column profiles
    column_profiles: list[dict[str, Any]] = []
    for col in df.columns:
        try:
            cp = _column_profile(df, col, datetime_cols)
            column_profiles.append(cp)
        except Exception as exc:
            logger.warning("Failed to profile column '%s': %s", col, exc)
            column_profiles.append(
                {
                    "name": col,
                    "dtype": str(df[col].dtype),
                    "null_count": 0,
                    "null_pct": 0.0,
                    "unique_count": 0,
                    "sample_values": [],
                    "is_datetime": False,
                    "error": str(exc),
                }
            )

    # Correlations (numeric columns only)
    correlations = _compute_correlations(df, numeric_cols)

    # Summary stats
    summary = _summary_stats(df)

    # Head rows (first 5) — serialise safely
    try:
        head_df = df.head(5).copy()
        # Convert datetime-like cols to strings
        for col in datetime_cols:
            if col in head_df.columns:
                head_df[col] = head_df[col].astype(str)
        head_records = head_df.where(pd.notnull(head_df), None).values.tolist()
        head_rows = [
            [_safe_val(cell) for cell in row]
            for row in head_records
        ]
    except Exception as exc:
        logger.warning("Failed to serialise head rows: %s", exc)
        head_rows = []

    return {
        "shape": {"rows": rows, "columns": cols},
        "column_names": list(df.columns),
        "columns": column_profiles,
        "numeric_columns": numeric_cols,
        "categorical_columns": categorical_cols,
        "datetime_columns": datetime_cols,
        "correlations": correlations,
        "summary_stats": summary,
        "head": head_rows,
    }
