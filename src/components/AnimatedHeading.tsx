'use client';

import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'char';
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export function AnimatedHeading({ text, className, delay = 0, splitBy = 'word', as = 'h1' }: Props) {
  const items = splitBy === 'word' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: splitBy === 'word' ? 0.1 : 0.03,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { y: '110%', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const Tag = motion[as] as typeof motion.h1;

  return (
    <Tag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: splitBy === 'word' ? '0.25em' : 0 }}
    >
      {items.map((itemText, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span variants={itemVariants} style={{ display: 'inline-block' }}>
            {itemText}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
