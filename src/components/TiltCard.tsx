'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';

interface Props {
  children: ReactNode;
  className?: string;
  maxDeg?: number;
  glowColor?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className, maxDeg = 10, glowColor = 'rgba(255,153,0,0.15)', style }: Props) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(maxDeg);

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      whileHover={{
        boxShadow: `0 24px 48px ${glowColor}`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
