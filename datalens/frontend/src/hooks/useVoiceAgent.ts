import { useState, useCallback, useRef, useEffect } from 'react';
import { useSessionStore } from '../store/sessionStore';
import type { AgentMessage, ConversationMessage } from '../types';

const WS_URL = import.meta.env.VITE_WS_URL || 'ws://127.0.0.1:8080';
const RECONNECT_DELAY_MS = 2000;
const MAX_RECONNECT_ATTEMPTS = 5;

interface UseVoiceAgentReturn {
  connect: (sessionId: string) => void;
  disconnect: () => void;
  sendText: (content: string) => void;
  isConnected: boolean;
  isListening: boolean;
  isMicEnabled: boolean;
  toggleMic: () => void;
  isSpeaking: boolean;
  interimTranscript: string;
  messages: ConversationMessage[];
}

export function useVoiceAgent(): UseVoiceAgentReturn {
  const [isConnected, setIsConnected] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [interimTranscript] = useState('');

  const wsRef = useRef<WebSocket | null>(null);
  
  // Buffer for accumulating stream chunks into a single message
  const streamBufferRef = useRef<string>('');
  
  // Audio playback state
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextPlayTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  
  // Audio capture state
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const cleanupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reconnectAttemptsRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const isManualDisconnectRef = useRef(false);
  const isMicEnabledRef = useRef(false);

  const {
    setVoiceOrbState,
    addConversationMessage,
    resolveImage,
    conversationHistory,
  } = useSessionStore();

  // --- Initialize Audio Context ---
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      nextPlayTimeRef.current = audioContextRef.current.currentTime;
    }
    // Resume context if suspended (browser auto-play policies)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  // --- Barge-in: stop agent TTS when user starts speaking ---
  const bargeIn = useCallback(() => {
    activeSourcesRef.current.forEach(source => {
      try { source.stop(); } catch { /* ignore */ }
    });
    activeSourcesRef.current = [];
    if (audioContextRef.current) {
      nextPlayTimeRef.current = audioContextRef.current.currentTime;
    }
    setIsSpeaking(false);
    setVoiceOrbState('listening');
  }, [setVoiceOrbState]);

  // --- Play incoming PCM 16kHz audio chunk ---
  const playAudioChunk = useCallback((base64Data: string) => {
    const ctx = initAudioContext();
    
    try {
      const binary = atob(base64Data);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      
      const pcm16 = new Int16Array(bytes.buffer);
      const float32 = new Float32Array(pcm16.length);
      for (let i = 0; i < pcm16.length; i++) {
        float32[i] = pcm16[i] / (pcm16[i] < 0 ? 0x8000 : 0x7FFF);
      }
      
      const buffer = ctx.createBuffer(1, float32.length, 16000);
      buffer.getChannelData(0).set(float32);
      
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      
      const currentTime = ctx.currentTime;
      if (nextPlayTimeRef.current < currentTime) {
        nextPlayTimeRef.current = currentTime;
      }
      
      source.start(nextPlayTimeRef.current);
      nextPlayTimeRef.current += buffer.duration;
      
      setIsSpeaking(true);
      setVoiceOrbState('speaking');
      
      source.onended = () => {
        // Remove from active sources
        activeSourcesRef.current = activeSourcesRef.current.filter(s => s !== source);
        
        // If no more audio is queued and playing
        if (ctx.currentTime >= nextPlayTimeRef.current - 0.1) {
          setIsSpeaking(false);
          setVoiceOrbState('listening');
        }
      };
      
      activeSourcesRef.current.push(source);
    } catch (err) {
      console.error('[DataLens] Error playing audio chunk', err);
    }
  }, [initAudioContext, setVoiceOrbState]);

  // --- Handle incoming WebSocket messages ---
  const handleMessage = useCallback(
    (msg: AgentMessage) => {
      switch (msg.type) {
        case 'text_response': {
          // Accumulate chunks - don't add message yet
          streamBufferRef.current += msg.content;
          break;
        }
        case 'text_done': {
          // Streaming complete — emit as a single message bubble
          const buffered = streamBufferRef.current.trim();
          streamBufferRef.current = '';
          if (buffered.length > 0) {
            const message: ConversationMessage = {
              id: crypto.randomUUID(),
              role: 'agent',
              content: buffered,
              timestamp: new Date().toISOString(),
            };
            addConversationMessage(message);
          }
          setVoiceOrbState('listening');
          break;
        }
        case 'audio_response': {
          playAudioChunk((msg as any).data);
          break;
        }
        case 'new_image': {
          setVoiceOrbState('generating');
          const placeholderId = crypto.randomUUID();
          resolveImage(placeholderId, msg.url, msg.prompt ?? '', 'analyst');
          const imageMsg: ConversationMessage = {
            id: crypto.randomUUID(),
            role: 'agent',
            content: `Generated visualization: ${msg.prompt ?? ''}`,
            timestamp: new Date().toISOString(),
            imageUrl: msg.url,
          };
          addConversationMessage(imageMsg);
          break;
        }
        case 'connected': {
          setIsConnected(true);
          reconnectAttemptsRef.current = 0;
          break;
        }
        case 'disconnected': {
          setIsConnected(false);
          break;
        }
        case 'error': {
          console.error('[DataLens] Agent error:', (msg as { type: string; message: string }).message);
          setVoiceOrbState('listening');
          break;
        }
      }
    },
    [setVoiceOrbState, addConversationMessage, resolveImage, playAudioChunk]
  );

  // --- WebSocket connection ---
  const connect = useCallback(
    (sessionId: string) => {
      if (wsRef.current?.readyState === WebSocket.OPEN) return;
      sessionIdRef.current = sessionId;
      isManualDisconnectRef.current = false;

      const url = `${WS_URL}/ws/agent/${sessionId}`;
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;
        console.log('[DataLens] Voice agent connected');
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data as string) as AgentMessage;
          handleMessage(msg);
        } catch (err) {
          console.error('[DataLens] WS parse error:', err);
        }
      };

      ws.onerror = (err) => console.error('[DataLens] WS error:', err);

      ws.onclose = (event) => {
        setIsConnected(false);
        wsRef.current = null;
        if (
          !isManualDisconnectRef.current &&
          reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS &&
          event.code !== 1000
        ) {
          reconnectAttemptsRef.current++;
          console.log(
            `[DataLens] Reconnecting (attempt ${reconnectAttemptsRef.current}/${MAX_RECONNECT_ATTEMPTS})...`
          );
          reconnectTimerRef.current = setTimeout(() => {
            if (sessionIdRef.current) connect(sessionIdRef.current);
          }, RECONNECT_DELAY_MS * reconnectAttemptsRef.current);
        }
      };
    },
    [handleMessage]
  );

  // --- Send text over WebSocket ---
  const sendText = useCallback(
    (content: string) => {
      // User sent text -> barge in
      bargeIn();
      if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
        console.warn('[DataLens] WebSocket not connected');
        return;
      }
      wsRef.current.send(JSON.stringify({ type: 'text', content }));
      setVoiceOrbState('generating');
    },
    [bargeIn, setVoiceOrbState]
  );

  // --- Start capturing microphone PCM audio ---
  const startListening = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          channelCount: 1, 
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true
        } 
      });
      mediaStreamRef.current = stream;

      const ctx = initAudioContext();
      const source = ctx.createMediaStreamSource(stream);
      sourceNodeRef.current = source;

      // Use script processor (deprecated but widely supported for raw buffer access)
      // Buffer size 4096 is good for real-time (256ms at 16kHz)
      const processor = ctx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN || !isMicEnabledRef.current) return;
        
        // Barge in check (rudimentary VAD could be added here, but for simplicity
        // we simply allow mic stream to go to Gemini, which handles endpointing)
        
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Convert Float32 to Int16
        const pcm16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          let s = Math.max(-1, Math.min(1, inputData[i]));
          pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }
        
        // Convert Int16 to base64
        const bytes = new Uint8Array(pcm16.buffer);
        let binary = '';
        // Doing in chunks to avoid stack overflow for huge buffers
        for (let i = 0; i < bytes.byteLength; i += 1024) {
          binary += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + 1024)));
        }
        
        const base64 = btoa(binary);
        wsRef.current.send(JSON.stringify({ type: 'audio', data: base64 }));
      };

      source.connect(processor);
      processor.connect(ctx.destination);
      
      setIsListening(true);
      setVoiceOrbState('listening');
    } catch (err) {
      console.error('[DataLens] Microphone access denied or failed:', err);
      setIsMicEnabled(false);
      isMicEnabledRef.current = false;
    }
  }, [initAudioContext, setVoiceOrbState]);

  const stopListening = useCallback(() => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(t => t.stop());
      mediaStreamRef.current = null;
    }
    setIsListening(false);
    setVoiceOrbState('idle');
  }, [setVoiceOrbState]);

  const disconnect = useCallback(() => {
    isManualDisconnectRef.current = true;
    stopListening();
    bargeIn();
    
    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
    if (wsRef.current) {
      wsRef.current.close(1000, 'User disconnected');
      wsRef.current = null;
    }
    setIsConnected(false);
    setIsSpeaking(false);
    setVoiceOrbState('idle');
  }, [stopListening, bargeIn, setVoiceOrbState]);

  const toggleMic = useCallback(() => {
    // We let user toggle, and handle stream setup/teardown in useEffect
    setIsMicEnabled((prev) => {
      const next = !prev;
      isMicEnabledRef.current = next;
      // If turning off mic, manually disconnect stream
      if (!next) {
        stopListening();
      }
      return next;
    });
  }, [stopListening]);

  // Auto-start listening based on mic state and connection
  useEffect(() => {
    if (isConnected && isMicEnabled && !isListening) {
      startListening();
    }
  }, [isConnected, isMicEnabled, isListening, startListening]);

  // Clean up idle state when connection drops
  useEffect(() => {
    if (!isConnected && isListening) {
      stopListening();
    }
  }, [isConnected, isListening, stopListening]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isManualDisconnectRef.current = true;
      stopListening();
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (wsRef.current) wsRef.current.close();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [stopListening]);

  return {
    connect,
    disconnect,
    sendText,
    toggleMic,
    isConnected,
    isListening,
    isMicEnabled,
    isSpeaking,
    interimTranscript,
    messages: conversationHistory,
  };
}
