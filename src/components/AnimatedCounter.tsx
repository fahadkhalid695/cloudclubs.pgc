'use client';

import { motion } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1.5, className }: Props) {
  const { ref, rounded } = useCounter(to, duration);
  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
