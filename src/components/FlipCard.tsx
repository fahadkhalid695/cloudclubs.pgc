'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  front: React.ReactNode;
  back: React.ReactNode;
  height?: number;
  triggerOnHover?: boolean;
}

export default function FlipCard({ front, back, height = 220, triggerOnHover = true }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: 900, height }}
      onMouseEnter={() => triggerOnHover && setFlipped(true)}
      onMouseLeave={() => triggerOnHover && setFlipped(false)}
      onClick={() => !triggerOnHover && setFlipped(f => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0.2, 0.2, 1] }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d'
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}>
          {front}
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}>
          {back}
        </div>
      </motion.div>
    </div>
  );
}
