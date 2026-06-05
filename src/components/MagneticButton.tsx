'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '@/hooks/useMagneticButton';

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ children, className = '', strength = 0.35 }: Props) {
  const { springX, springY, onMouseMove, onMouseLeave } = useMagneticButton(strength);

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.div>
  );
}
