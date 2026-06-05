import { useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function useCounter(to: number, duration = 1.5) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    stiffness: Math.round(100 / duration),
    damping: 25
  });
  const rounded = useTransform(spring, v => Math.round(v));

  useEffect(() => {
    if (inView) spring.set(to);
  }, [inView, to, spring]);

  return { ref, rounded };
}
