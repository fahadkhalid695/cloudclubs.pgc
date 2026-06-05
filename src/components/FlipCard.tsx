'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  height?: number;
}

export default function FlipCard({ front, back, className = '', height = 200 }: FlipCardProps) {
  return (
    <motion.div style={{ perspective: 800 }} className={className}>
      <motion.div
        style={{ transformStyle: 'preserve-3d', position: 'relative', height }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: [0.4, 0.2, 0.2, 1] }}
      >
        <div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            inset: 0,
          }}
        >
          {front}
        </div>
        <div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            inset: 0,
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}
