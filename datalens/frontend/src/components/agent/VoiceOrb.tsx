import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Volume2, Sparkles } from 'lucide-react';
import type { VoiceOrbState } from '../../types';

interface Props {
  state: VoiceOrbState;
  interimTranscript?: string;
}

const ORB_CONFIGS = {
  idle: {
    radial: 'radial-gradient(circle at 35% 35%, #6b7280, #374151 55%, #111827 100%)',
    glow: 'rgba(107,114,128,0.3)',
    icon: Mic,
    iconColor: '#9ca3af',
  },
  listening: {
    radial: 'radial-gradient(circle at 35% 35%, #c4b5fd, #7c3aed 55%, #3b0764 100%)',
    glow: 'rgba(124,58,237,0.5)',
    icon: Mic,
    iconColor: 'white',
  },
  speaking: {
    radial: 'radial-gradient(circle at 35% 35%, #67e8f9, #06b6d4 55%, #0e7490 100%)',
    glow: 'rgba(6,182,212,0.5)',
    icon: Volume2,
    iconColor: 'white',
  },
  generating: {
    radial: 'radial-gradient(circle at 35% 35%, #fde68a, #f59e0b 55%, #92400e 100%)',
    glow: 'rgba(245,158,11,0.5)',
    icon: Sparkles,
    iconColor: 'white',
  },
};

export function VoiceOrb({ state, interimTranscript }: Props) {
  const cfg = ORB_CONFIGS[state];
  const Icon = cfg.icon;

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      {/* 3D Orb container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 100, height: 100 }}
      >
        {/* Sonar rings — listening state */}
        {state === 'listening' &&
          [0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 100,
                height: 100,
                border: '1.5px solid rgba(124,58,237,0.4)',
              }}
              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{
                duration: 1.8,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

        {/* Waveform bars — speaking state */}
        {state === 'speaking' && (
          <div
            className="absolute inset-0 flex items-center justify-center gap-0.5"
            style={{ width: 130, height: 130, left: -15 }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{ width: 3, background: 'rgba(34,211,238,0.6)' }}
                animate={{ height: [8, 20 + Math.random() * 20, 8] }}
                transition={{
                  duration: 0.8 + i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* The 3D sphere orb */}
        <motion.div
          animate={
            state === 'idle'
              ? {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    `inset -8px -8px 16px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.08), 0 0 20px ${cfg.glow}, 0 10px 30px rgba(0,0,0,0.4)`,
                    `inset -8px -8px 16px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.08), 0 0 35px ${cfg.glow}, 0 10px 30px rgba(0,0,0,0.4)`,
                    `inset -8px -8px 16px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.08), 0 0 20px ${cfg.glow}, 0 10px 30px rgba(0,0,0,0.4)`,
                  ],
                }
              : { scale: 1 }
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[76px] h-[76px] rounded-full flex items-center justify-center relative z-10"
          style={{
            background: cfg.radial,
            boxShadow: `inset -8px -8px 16px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.12), 0 0 40px ${cfg.glow}, 0 20px 40px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Specular highlight */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 28,
              height: 16,
              top: 12,
              left: 14,
              background:
                'radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)',
              transform: 'rotate(-20deg)',
              filter: 'blur(2px)',
            }}
          />

          <motion.div
            animate={state === 'generating' ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Icon
              size={26}
              style={{ color: cfg.iconColor }}
              strokeWidth={state === 'idle' ? 1.5 : 2}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* State label + interim transcript */}
      <div className="text-center">
        <p
          className="text-xs font-semibold capitalize"
          style={{ color: 'var(--text-2)' }}
        >
          {state === 'idle'
            ? 'Ready to listen'
            : state === 'listening'
            ? 'Listening...'
            : state === 'speaking'
            ? 'Speaking...'
            : 'Creating visual...'}
        </p>

        <AnimatePresence>
          {interimTranscript && state === 'listening' && (
            <motion.p
              key="transcript"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-xs mt-1 max-w-[160px] text-center italic line-clamp-2"
              style={{ color: '#a78bfa' }}
            >
              "{interimTranscript}"
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
