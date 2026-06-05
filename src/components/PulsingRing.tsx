'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  color?: string;
  rings?: number;
  size?: number;
}

export default function PulsingRing({ children, color = '#00E582', rings = 2, size = 56 }: Props) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {Array.from({ length: rings }).map((_, i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            inset: -(i + 1) * 8,
            borderRadius: '50%',
            border: `1px solid ${color}`,
            opacity: 0
          }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.85, 1.1, 1.25] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeOut'
          }}
        />
      ))}
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `1px solid ${color}30`,
        background: `${color}10`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {children}
      </div>
    </div>
  );
}
