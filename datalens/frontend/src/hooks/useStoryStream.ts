import { useState, useCallback, useRef } from 'react';
import { useSessionStore } from '../store/sessionStore';
import { getAuthHeader } from '../store/authStore';
import type { StreamChunk, DataProfile, StoryFormat } from '../types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

interface UseStoryStreamReturn {
  startStream: (sessionId: string, dataProfile: DataProfile) => Promise<void>;
  isStreaming: boolean;
  error: string | null;
  cancelStream: () => void;
}

export function useStoryStream(): UseStoryStreamReturn {
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const currentFormatRef = useRef<StoryFormat>('eli5');

  const {
    setIsStreaming,
    appendStoryText,
    addPendingImage,
    resolveImage,
    setChartData,
    finalizeStories,
    setActiveFormat,
    isStreaming,
  } = useSessionStore();

  const cancelStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
  }, [setIsStreaming]);

  const processChunk = useCallback(
    (chunk: StreamChunk) => {
      switch (chunk.type) {
        case 'text': {
          appendStoryText(chunk.format as StoryFormat, chunk.content);
          break;
        }
        case 'image_placeholder': {
          addPendingImage(chunk.placeholder_id, chunk.prompt, chunk.format as StoryFormat);
          // Store the caption in the pending map via resolveImage-compatible approach:
          // We'll rely on addPendingImage signature extension below if needed,
          // but captions arrive with image_ready, so just pass through.
          break;
        }
        case 'image_ready': {
          const placeholderId = chunk.placeholder_id || crypto.randomUUID();
          resolveImage(placeholderId, chunk.url, chunk.prompt, chunk.format as StoryFormat, chunk.caption);
          break;
        }
        case 'chart_data': {
          setChartData(chunk.data);
          break;
        }
        case 'complete': {
          const state = useSessionStore.getState();
          fetch(`${BACKEND_URL}/stories/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              session_id: state.sessionId,
              eli5: chunk.stories.eli5,
              architecture: chunk.stories.architecture,
              analyst: chunk.stories.analyst,
              chart_data: chunk.stories.chart_data || {},
              images: state.resolvedImages,
            }),
          }).catch(console.error);
          
          finalizeStories(chunk.stories);
          break;
        }
        case 'error': {
          setError(chunk.message);
          setIsStreaming(false);
          break;
        }
        default:
          break;
      }
    },
    [appendStoryText, addPendingImage, resolveImage, setChartData, finalizeStories, setActiveFormat, setIsStreaming]
  );

  const startStream = useCallback(
    async (sessionId: string, dataProfile: DataProfile) => {
      if (isStreaming) {
        cancelStream();
      }

      setError(null);
      setIsStreaming(true);
      currentFormatRef.current = 'eli5';

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const authHeader = getAuthHeader();
        const response = await fetch(`${BACKEND_URL}/stories/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
            ...(authHeader ? { Authorization: authHeader } : {}),
          },
          body: JSON.stringify({ session_id: sessionId, data_profile: dataProfile }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        if (!response.body) {
          throw new Error('Response body is null — SSE stream unavailable');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // SSE format: "data: {json}\n\n"
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(':')) continue; // empty or comment

            if (trimmed.startsWith('data: ')) {
              const jsonStr = trimmed.slice(6).trim();
              if (jsonStr === '[DONE]') {
                setIsStreaming(false);
                continue;
              }
              try {
                const chunk = JSON.parse(jsonStr) as StreamChunk;
                processChunk(chunk);
              } catch (parseErr) {
                console.warn('Failed to parse SSE chunk:', jsonStr, parseErr);
              }
            }
          }
        }

        // Flush any remaining buffer content
        if (buffer.trim().startsWith('data: ')) {
          const jsonStr = buffer.slice(buffer.indexOf('data: ') + 6).trim();
          if (jsonStr && jsonStr !== '[DONE]') {
            try {
              const chunk = JSON.parse(jsonStr) as StreamChunk;
              processChunk(chunk);
            } catch {
              // ignore malformed tail
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          // User cancelled — not an error
          return;
        }
        const message = err instanceof Error ? err.message : 'Unknown streaming error';
        setError(message);
        console.error('Story stream error:', err);
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
      }
    },
    [isStreaming, cancelStream, setIsStreaming, processChunk]
  );

  return { startStream, isStreaming, error, cancelStream };
}
