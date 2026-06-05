'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ to, suffix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, to, spring]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}
