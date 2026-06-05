'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rippleColor?: string;
}

export default function RippleButton({ children, className, onClick, rippleColor = 'rgba(255,153,0,0.35)' }: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(rip => rip.id !== id)), 700);
    onClick?.();
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: rippleColor,
              top: ripple.y - 40,
              left: ripple.x - 40,
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
}
