"""
Core Gemini story generation service — DataLens.

Uses gemini-3-pro to concurrently generate three story formats (ELI5, Architecture, Analyst)
with interleaved / mixed-modality output via three parallel streams.

IMAGE_PROMPT tags are detected inline; Nano Banana Pro image generation is fired
as concurrent asyncio tasks so images are generated in parallel with the text stream.

Yield schema (SSE event data):
  {"type": "text",             "content": str,   "format": str}
  {"type": "image_placeholder","prompt": str,    "format": str, "placeholder_id": str}
  {"type": "image_ready",      "url": str,       "format": str, "placeholder_id": str}
  {"type": "chart_data",       "data": dict,     "format": "analyst"}
  {"type": "complete",         "stories": dict}
  {"type": "error",            "message": str}
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import uuid
from typing import Any, AsyncGenerator

from google import genai
from google.genai import types

from services.nano_banana import generate_image_nano_banana

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Gemini client initialisation
# ---------------------------------------------------------------------------

_client: genai.Client | None = None


def _get_client() -> genai.Client:
    api_key = os.environ.get("GENAI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if api_key:
        return genai.Client(api_key=api_key)
    # Use Application Default Credentials (ADC) when running on GCP
    return genai.Client()


# ---------------------------------------------------------------------------
# Prompts
# ---------------------------------------------------------------------------

BASE_SYSTEM_PROMPT = """You are DataLens, a world-class AI data storyteller. Given a dataset profile, produce a highly engaging technical or business story.

CRITICAL RULES (NEVER BREAK THESE):
- NEVER use em dashes (the — character). Use a hyphen (-), a colon (:), or rewrite the sentence instead.
- NEVER use boring passive voice. Be vivid, direct, and energetic.
- Adapt ALL content specifically to the actual dataset: names, numbers, columns. No generic filler.
- DO NOT INCLUDE ANY SECTION HEADERS like === ELI5 ===. Just write the text.
"""

ELI5_PROMPT = BASE_SYSTEM_PROMPT + """
Write for a curious, excited 10-year-old discovering something amazing for the first time. Use:
- Vivid analogies and wild metaphors (compare data to pizza, superheroes, animals, adventures)
- Exclamation points! Rhetorical questions? Short punchy sentences.
- Emoji-friendly language (but no actual emojis in output)
- Fun character voices ("Imagine you're a detective...")
- Surprising "wow" facts pulled from the actual data
- 4-6 paragraphs, conversational and energetic

## IMAGE_PROMPT Tags
When you want an image, you MUST output BOTH tags together in this exact order:

CRITICAL RULE: IMAGE_CAPTION must describe the DATA FINDING — never describe how the image looks. No mention of colors, styles, characters, or visual elements.

<IMAGE_CAPTION>2-3 sentences explaining what data insight this image shows and why it matters. Lead with the key finding, add supporting numbers, and include brief context. Example: 'Pop dominates the dataset with 6,786 songs — more than Hip-Hop (5,810) and Rock combined. This makes it the most represented genre by far, suggesting listeners in this dataset overwhelmingly prefer Pop music.'</IMAGE_CAPTION>
<IMAGE_PROMPT>Detailed image description here.</IMAGE_PROMPT>

MANDATORY RULES for ELI5 images: Generate 2-3 images. EVERY image MUST be a NARRATIVE SCENE — not an infographic, not a chart, not a generic illustration.

STRICT RULES:
1. GROUND IN ACTUAL DATA VALUES. Never generate a generic image. If sales dropped 40% in March, the scene must show that drop.
2. ONE CONSISTENT CHARACTER across ALL images in this session. Establish the character in the first image (e.g. "Zara, a curious 6-year-old girl with a red backpack and pigtails") and reuse the EXACT SAME character in every subsequent image.
3. SHOW COMPARISON OR CHANGE, never just a static snapshot.
4. ANCHOR EVERY KEY METRIC TO A REAL OBJECT.
5. READABLE AT A GLANCE. A 5-year-old must be able to point at the image and describe what is happening with no text.
6. EMBED A SHORT CAPTION at the bottom of the image, written as a child would say it, referencing actual data values.
7. STYLE: Warm flat illustration. Bright primary colors. Simple shapes. Children's storybook meets Pixar concept art. No photo-realism.
"""

ARCHITECTURE_PROMPT = BASE_SYSTEM_PROMPT + """
Write for a senior software engineer or data architect reviewing a new dataset.
Be sharp, technical, and precise. Use bullet points, code-style column names with backticks.
Cover:
- Schema analysis: column names, data types, cardinality, null rates
- Normalization assessment: 1NF/2NF/3NF violations, suggested lookup tables
- Indexing strategy: which columns to index and why
- Potential foreign key / join relationships
- Data quality issues and remediation steps
- Suggested schema improvements with concrete DDL hints
- 4-6 paragraphs + bullet lists

## IMAGE_PROMPT Tags
When you want an image, you MUST output BOTH tags together in this exact order:

CRITICAL RULE: IMAGE_CAPTION must describe the DATA/SCHEMA FINDING — never describe how the diagram looks.

<IMAGE_CAPTION>2-3 sentences explaining what schema/architecture insight this image shows and its implications. Lead with the key finding with specific numbers, then explain what it means for data quality or design. Example: 'The track_id column is the natural primary key with 50,000 unique values and 0% null rate across all records. Without a formal PRIMARY KEY constraint the table risks duplicate inserts, and the high-cardinality artist_name column (15,234 distinct values) is a strong candidate for normalization into a separate artists lookup table.'</IMAGE_CAPTION>
<IMAGE_PROMPT>Professional ER diagram description.</IMAGE_PROMPT>

MANDATORY RULES for ARCHITECTURE images: Generate 2-3 images. Each must be:
PROFESSIONAL TECHNICAL DIAGRAMS ONLY. No cartoons, no abstract art. Must look like output from a real database tool (draw.io, dbdiagram.io, Lucidchart).
Use: Clean white or dark-blue background. Boxes with column names. Arrows showing relationships. Proper ER diagram notation (crow's foot). Monospace font. Color-coded by data type.
"""

ANALYST_PROMPT = BASE_SYSTEM_PROMPT + """
Write for a data scientist or senior business analyst. Be insightful, metric-driven, and direct.
Cover:
- Top 3-5 KPIs with actual numbers from the dataset
- Distribution analysis for key numeric columns (skew, outliers, percentiles)
- Correlation findings with specific column pairs and r-values
- Trend hypotheses and business implications
- Anomaly detection insights
- Actionable recommendations with supporting evidence
- 5-7 paragraphs, numbers-forward writing style

MANDATORY: You MUST output 2 IMAGE_PROMPT tags in the body of the text. Do this FIRST before any JSON blocks.
For each image, output BOTH tags together in this exact order:

CRITICAL RULE: IMAGE_CAPTION must describe the ANALYTICAL FINDING with numbers — never describe dashboard aesthetics or visual style.

<IMAGE_CAPTION>2-3 sentences stating the specific data finding this visualization reveals, with supporting numbers and business implications. Example: 'Energy and danceability show a strong positive correlation (r=0.72), meaning tracks engineered for the dance floor are consistently high-energy. This cluster of 18,400 tracks represents 37% of the dataset and commands the highest streaming numbers, suggesting playlist curators should prioritize this combination for engagement.'</IMAGE_CAPTION>
<IMAGE_PROMPT>Specific dashboard instruction.</IMAGE_PROMPT>

IMAGE_PROMPT rules for ANALYST: Generate EXACTLY 2 images. Each must be:
PROFESSIONAL DATA VISUALIZATION ONLY. Must look like a real business intelligence dashboard (Tableau, Power BI, Looker).
Use: Dark background (#0f172a). Vibrant neon accent colors. Actual chart elements. Clean typography. Grid lines. Legend. No cartoon elements whatsoever.

After the 2 IMAGE_PROMPT tags, output 3-5 chart JSON blocks with REAL data values from the dataset profile:
```json
{
  "chart_type": "bar",
  "title": "Title Here",
  "labels": ["Label1", "Label2", "Label3"],
  "datasets": [
    {
      "label": "Series Name",
      "data": [123, 456, 789]
    }
  ]
}
```
Supported chart_type values: bar, line, pie, scatter
"""

def _build_user_prompt(data_profile: dict[str, Any], context_label: str) -> str:
    """Construct the user turn prompt from the data profile."""
    shape = data_profile.get("shape", {})
    rows = shape.get("rows", "unknown")
    columns_count = shape.get("columns", "unknown")
    column_names = data_profile.get("column_names", [])
    numeric_cols = data_profile.get("numeric_columns", [])
    categorical_cols = data_profile.get("categorical_columns", [])
    datetime_cols = data_profile.get("datetime_columns", [])
    correlations = data_profile.get("correlations", [])
    summary = data_profile.get("summary_stats", {})
    col_profiles = data_profile.get("columns", [])

    # Build concise column descriptions
    col_descriptions: list[str] = []
    for cp in col_profiles[:30]:  # cap at 30 to stay within context
        name = cp.get("name", "?")
        dtype = cp.get("dtype", "?")
        null_pct = cp.get("null_pct", 0)
        unique = cp.get("unique_count", 0)
        parts = [f"  - {name} ({dtype}): {null_pct}% null, {unique} unique"]
        if cp.get("mean") is not None:
            parts.append(f"mean={cp['mean']}, std={cp.get('std', '?')}")
        if cp.get("top_values"):
            top = cp["top_values"][:3]
            top_str = ", ".join(f"{t['value']}({t['count']})" for t in top)
            parts.append(f"top: {top_str}")
        col_descriptions.append(" | ".join(parts))

    # Top correlations summary
    corr_lines: list[str] = []
    for pair in correlations[:5]:
        corr_lines.append(
            f"  - {pair['col_a']} ↔ {pair['col_b']}: r={pair['correlation']}"
        )

    prompt_parts = [
        f"## Dataset Profile",
        f"",
        f"**Shape:** {rows} rows × {columns_count} columns",
        f"**Numeric columns ({len(numeric_cols)}):** {', '.join(numeric_cols[:15])}",
        f"**Categorical columns ({len(categorical_cols)}):** {', '.join(categorical_cols[:15])}",
        f"**Datetime columns ({len(datetime_cols)}):** {', '.join(datetime_cols[:10])}",
        f"**Completeness:** {summary.get('completeness_pct', 100)}%",
        f"**Duplicate rows:** {summary.get('duplicate_rows', 0)} ({summary.get('duplicate_row_pct', 0)}%)",
        f"**Memory:** {summary.get('memory_mb', 0)} MB",
        f"",
        f"### Column Details",
        "\n".join(col_descriptions) if col_descriptions else "  (none)",
        f"",
        f"### Top correlations",
        "\n".join(corr_lines) if corr_lines else "  (not enough numeric columns)",
        f"",
    ]

    # Include actual sample values for chart accuracy
    sample_lines: list[str] = []
    for cp in col_profiles[:10]:
        if cp.get("sample_values"):
            sample_lines.append(f"  - {cp['name']}: samples = {cp['sample_values'][:5]}")
        if cp.get("mean") is not None:
            sample_lines.append(f"    stats: min={cp.get('min')}, max={cp.get('max')}, mean={round(float(cp.get('mean', 0)), 2)}, std={round(float(cp.get('std', 0)), 2)}")

    if sample_lines:
        prompt_parts.extend([
            f"### Sample Values and Stats (use these REAL numbers in your chart JSON)",
            "\n".join(sample_lines),
            f"",
        ])

    prompt_parts.append(
        f"Now generate the {context_label.upper()} story for this dataset. Remember, do not include section headers (like === ELI5 ===). Just write the story directly.",
    )

    return "\n".join(prompt_parts)


async def _generate_single_story_stream(
    system_instruction: str,
    user_prompt: str,
    format_name: str,
    session_id: str,
    event_queue: asyncio.Queue,
    state_tracker: dict[str, Any]
):
    """
    Generate a single story (e.g. eli5) from Gemini and push chunks to a shared event queue.
    Also manages internal state like tracking chart_data and story text.
    """
    client = _get_client()
    
    config = types.GenerateContentConfig(
        system_instruction=system_instruction,
        temperature=0.85,
        max_output_tokens=8192,
    )

    contents = [
        types.Content(
            role="user",
            parts=[types.Part(text=user_prompt)],
        )
    ]

    in_image_prompt: bool = False
    image_buffer: str = ""
    in_image_caption: bool = False
    caption_buffer: str = ""
    pending_caption: str = ""  # caption buffered until IMAGE_PROMPT fires
    in_json_block: bool = False
    json_buffer: str = ""

    chunk_buffer: str = ""
    CARRY_SIZE: int = 20

    def _fire_image_task(prompt: str, caption: str) -> str:
        placeholder_id = str(uuid.uuid4())
        async def _img_task():
            try:
                url = await generate_image_nano_banana(prompt, session_id)
                await event_queue.put({
                    "type": "image_ready",
                    "url": url,
                    "format": format_name,
                    "placeholder_id": placeholder_id,
                    "prompt": prompt,
                    "caption": caption,
                })
            except Exception as exc:
                logger.error("Image generation failed for placeholder %s: %s", placeholder_id, exc)
                await event_queue.put({
                    "type": "image_ready",
                    "url": "",
                    "format": format_name,
                    "placeholder_id": placeholder_id,
                    "prompt": prompt,
                    "caption": caption,
                    "error": str(exc),
                })
                
        task = asyncio.create_task(_img_task())
        state_tracker["image_tasks"].append(task)
        return placeholder_id

    async def _process_text_fragment(fragment: str):
        nonlocal in_image_prompt, image_buffer, in_image_caption, caption_buffer, pending_caption, in_json_block, json_buffer

        pos = 0
        text = fragment

        while pos < len(text):
            if in_image_caption:
                close_idx = text.find("</IMAGE_CAPTION>", pos)
                if close_idx == -1:
                    caption_buffer += text[pos:]
                    pos = len(text)
                else:
                    caption_buffer += text[pos:close_idx]
                    pending_caption = caption_buffer.strip()
                    caption_buffer = ""
                    in_image_caption = False
                    pos = close_idx + len("</IMAGE_CAPTION>")
            elif in_image_prompt:
                close_idx = text.find("</IMAGE_PROMPT>", pos)
                if close_idx == -1:
                    image_buffer += text[pos:]
                    pos = len(text)
                else:
                    image_buffer += text[pos:close_idx]
                    prompt = image_buffer.strip()
                    image_buffer = ""
                    in_image_prompt = False
                    caption = pending_caption
                    pending_caption = ""  # reset for next image
                    pos = close_idx + len("</IMAGE_PROMPT>")

                    if prompt:
                        placeholder_id = _fire_image_task(prompt, caption)
                        await event_queue.put(
                            {
                                "type": "image_placeholder",
                                "prompt": prompt,
                                "caption": caption,
                                "format": format_name,
                                "placeholder_id": placeholder_id,
                            }
                        )
            elif in_json_block:
                close_idx = text.find("```", pos)
                if close_idx == -1:
                    json_buffer += text[pos:]
                    pos = len(text)
                else:
                    json_buffer += text[pos:close_idx]
                    json_str = json_buffer.strip()
                    json_buffer = ""
                    in_json_block = False
                    pos = close_idx + 3

                    try:
                        chart_obj = json.loads(json_str)
                        chart_key = f"chart_{state_tracker['chart_counter']}"
                        state_tracker['chart_counter'] += 1
                        state_tracker['chart_data'][chart_key] = chart_obj
                        await event_queue.put(
                            {
                                "type": "chart_data",
                                "data": {chart_key: chart_obj},
                                "format": format_name,
                            }
                        )
                    except json.JSONDecodeError as exc:
                        logger.warning("Failed to parse chart JSON block: %s", exc)
            else:
                open_cap = text.find("<IMAGE_CAPTION>", pos)
                open_img = text.find("<IMAGE_PROMPT>", pos)
                open_json = text.find("```json", pos)

                # Find the earliest special token
                candidates = [(p, t) for p, t in [
                    (open_cap, "caption"),
                    (open_img, "image"),
                    (open_json, "json"),
                ] if p != -1]
                candidates.sort(key=lambda x: x[0])

                if not candidates:
                    next_special = -1
                    special_type = None
                else:
                    next_special, special_type = candidates[0]

                if next_special == -1:
                    chunk = text[pos:]
                    if chunk:
                        state_tracker['stories'][format_name] += chunk
                        await event_queue.put(
                            {
                                "type": "text",
                                "content": chunk,
                                "format": format_name,
                            }
                        )
                    pos = len(text)
                else:
                    before = text[pos:next_special]
                    if before:
                        state_tracker['stories'][format_name] += before
                        await event_queue.put(
                            {
                                "type": "text",
                                "content": before,
                                "format": format_name,
                            }
                        )

                    if special_type == "caption":
                        in_image_caption = True
                        caption_buffer = ""
                        pos = next_special + len("<IMAGE_CAPTION>")
                    elif special_type == "image":
                        in_image_prompt = True
                        image_buffer = ""
                        pos = next_special + len("<IMAGE_PROMPT>")
                    else:  # json
                        in_json_block = True
                        json_buffer = ""
                        pos = next_special + len("```json")

    try:
        async for response_chunk in await client.aio.models.generate_content_stream(
            model="gemini-2.5-flash",
            contents=contents,
            config=config,
        ):
            chunk_text = ""
            if response_chunk.candidates:
                for candidate in response_chunk.candidates:
                    if candidate.content and candidate.content.parts:
                        for part in candidate.content.parts:
                            if hasattr(part, "text") and part.text:
                                chunk_text += part.text

            if not chunk_text:
                continue

            chunk_text = chunk_buffer + chunk_text
            if len(chunk_text) > CARRY_SIZE:
                process_now = chunk_text[:-CARRY_SIZE]
                chunk_buffer = chunk_text[-CARRY_SIZE:]
            else:
                chunk_buffer = chunk_text
                continue
            
            await _process_text_fragment(process_now)

        if chunk_buffer:
            await _process_text_fragment(chunk_buffer)
            chunk_buffer = ""

    except Exception as exc:
        logger.exception("Single story generation stream failed for %s", format_name)
        await event_queue.put({"type": "error", "message": f"{format_name} error: {exc}"})


async def generate_stories_stream(
    data_profile: dict[str, Any],
    session_id: str,
) -> AsyncGenerator[dict[str, Any], None]:
    """
    Stream three data stories (ELI5, Architecture, Analyst) from gemini-3-pro
    in parallel, merging their chunks into an asyncio queue.
    """
    event_queue = asyncio.Queue()
    
    state_tracker = {
        "chart_counter": 0,
        "chart_data": {},
        "stories": {
            "eli5": "",
            "architecture": "",
            "analyst": "",
        },
        "image_tasks": []
    }

    # Prepare specific prompts
    cases = [
        ("eli5", ELI5_PROMPT),
        ("architecture", ARCHITECTURE_PROMPT),
        ("analyst", ANALYST_PROMPT)
    ]
    
    # Fire off the 3 concurrent LLM fetches
    llm_tasks = []
    for fmt, prompt in cases:
        user_prompt = _build_user_prompt(data_profile, fmt)
        task = asyncio.create_task(
            _generate_single_story_stream(prompt, user_prompt, fmt, session_id, event_queue, state_tracker)
        )
        llm_tasks.append(task)
        
    async def _drain_queue():
        while not event_queue.empty():
            try:
                event = event_queue.get_nowait()
                yield event
            except asyncio.QueueEmpty:
                break

    try:
        # Loop until all LLM tasks are done and queue is empty
        while not all(t.done() for t in llm_tasks) or not event_queue.empty():
            # Wait for something to be put in the queue or for tasks to finish
            try:
                # 0.1s tick to ensure we don't completely spinlock and also catch completed tasks
                event = await asyncio.wait_for(event_queue.get(), timeout=0.1)
                yield event
                # Drain the rest of the currently available queue without awaiting
                async for evt in _drain_queue():
                     yield evt
            except asyncio.TimeoutError:
                pass
                
        # All LLM tasks are done. Wait for all image tasks to finish so we can yield those remaining.
        if state_tracker["image_tasks"]:
             await asyncio.gather(*state_tracker["image_tasks"], return_exceptions=True)
             
        # Drain the final image events
        async for evt in _drain_queue():
             yield evt

        # Final yield
        yield {
            "type": "complete",
            "stories": {
                "eli5": state_tracker["stories"]["eli5"],
                "architecture": state_tracker["stories"]["architecture"],
                "analyst": state_tracker["stories"]["analyst"],
                "chart_data": state_tracker["chart_data"],
            },
        }

    except Exception as exc:
        logger.exception("Parallel story generation stream failed for session %s", session_id)
        yield {"type": "error", "message": str(exc)}
