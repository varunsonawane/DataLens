"""
Pydantic models for story generation and streaming.

Story formats:
  - ELI5: Simple metaphors, cartoon image prompts
  - ARCHITECTURE: Schema relationships, ER diagram image prompts
  - ANALYST: KPIs/trends, chart JSON blocks, infographic image prompts
"""

from __future__ import annotations

from enum import Enum
from typing import Any, Literal, Optional, Union
from pydantic import BaseModel, Field


class StoryFormat(str, Enum):
    """The three story format types supported by DataLens."""

    ELI5 = "eli5"
    ARCHITECTURE = "architecture"
    ANALYST = "analyst"


class StoryChunk(BaseModel):
    """
    A single chunk yielded by the story generation SSE stream.

    type="text"              — a fragment of narrative prose
    type="image_placeholder" — an IMAGE_PROMPT tag was detected; image is being generated
    type="image_ready"       — image generation finished; url is available
    type="section_start"     — a new story format section has begun
    type="chart_data"        — a JSON chart block was extracted from the Analyst section
    type="complete"          — the entire stream has finished; final stories dict included
    """

    type: Literal[
        "text",
        "image_placeholder",
        "image_ready",
        "section_start",
        "chart_data",
        "complete",
    ] = Field(..., description="Chunk type discriminator")

    # text chunks
    content: Optional[str] = Field(
        default=None,
        description="Narrative text content (type='text')",
    )

    # image chunks
    prompt: Optional[str] = Field(
        default=None,
        description="Image generation prompt (type='image_placeholder')",
    )
    url: Optional[str] = Field(
        default=None,
        description="Public GCS URL of the generated image (type='image_ready')",
    )
    placeholder_id: Optional[str] = Field(
        default=None,
        description="Correlation ID linking an image_placeholder to its image_ready",
    )

    # section start
    format: Optional[str] = Field(
        default=None,
        description="Story format name: eli5 | architecture | analyst (type='section_start')",
    )

    # chart data (analyst section)
    data: Optional[dict[str, Any]] = Field(
        default=None,
        description="Recharts-compatible chart data (type='chart_data')",
    )

    # complete event
    stories: Optional[dict[str, Any]] = Field(
        default=None,
        description="Final accumulated stories dict (type='complete')",
    )


class Dataset(BaseModel):
    """A single dataset series within a chart."""

    label: str = Field(..., description="Dataset label shown in the chart legend")
    data: list[Union[float, int]] = Field(..., description="Numeric data points")
    background_color: Optional[Union[str, list[str]]] = Field(
        default=None,
        description="Fill colour(s) for bar/pie charts",
    )
    border_color: Optional[Union[str, list[str]]] = Field(
        default=None,
        description="Border colour(s)",
    )


class ChartData(BaseModel):
    """
    Recharts-compatible chart specification extracted from the Analyst story.
    Serialised as JSON inside triple-backtick blocks in the Gemini output.
    """

    chart_type: str = Field(
        ...,
        description="Recharts component name: BarChart | LineChart | PieChart | AreaChart | ScatterChart",
    )
    title: Optional[str] = Field(default=None, description="Chart title")
    labels: list[str] = Field(
        default_factory=list,
        description="X-axis category labels",
    )
    datasets: list[dict[str, Any]] = Field(
        default_factory=list,
        description="List of dataset series objects (label + data arrays)",
    )
    x_axis_label: Optional[str] = Field(default=None, description="X-axis label text")
    y_axis_label: Optional[str] = Field(default=None, description="Y-axis label text")
    description: Optional[str] = Field(
        default=None,
        description="One-sentence description of what the chart shows",
    )


class StoriesResult(BaseModel):
    """
    Final aggregated result after all three stories have been generated.
    Returned in the type='complete' SSE event and persisted to GCS.
    """

    eli5: str = Field(default="", description="Complete ELI5 story text")
    architecture: str = Field(default="", description="Complete Architecture story text")
    analyst: str = Field(default="", description="Complete Analyst story text")
    chart_data: dict[str, Any] = Field(
        default_factory=dict,
        description="Named chart data blocks extracted from the Analyst section",
    )
