'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const wordVariant = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

interface StaggeredTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function StaggeredText({ text, className = '', once = true }: StaggeredTextProps) {
  const words = text.split(' ');

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-40px' }}
      className={className}
      style={{ overflow: 'hidden', display: 'inline' }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em' }}>
          <motion.span style={{ display: 'inline-block' }} variants={wordVariant}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
