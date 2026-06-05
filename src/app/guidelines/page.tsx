'use client';

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const guidelines = [
  {
    title: "Respect and Inclusivity",
    description: "Treat each member with dignity. We value diversity of background, ideas, and perspective in all interactions.",
  },
  {
    title: "Constructive Communication",
    description: "Be helpful, professional, and collaborative. Share feedback that strengthens people and projects.",
  },
  {
    title: "Academic Integrity",
    description: "Credit original work, avoid plagiarism, and maintain honesty in projects, workshops, and certifications.",
  },
  {
    title: "Active Participation",
    description: "Contribute to workshops, discussions, and team execution. Community strength grows through participation.",
  },
  {
    title: "Privacy and Confidentiality",
    description: "Never share member data without consent. Respect boundaries and private communications.",
  },
  {
    title: "Code of Conduct",
    description: "Follow campus and community standards. Serious violations may result in suspension or removal.",
  },
];

export default function GuidelinesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell max-w-4xl">
        {/* Header */}
        <AnimatedSection>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            Community Guidelines
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-on-surface-variant)]">
            These principles help us keep AWS Cloud Club safe, collaborative, and growth-focused for everyone.
          </p>
        </AnimatedSection>

        {/* Guidelines */}
        <div className="mt-12 flex flex-col gap-5">
          {guidelines.map((guidelineItem, index) => (
            <motion.article
              key={guidelineItem.title}
              className="rounded-xl border-l-2 pl-6 py-5 pr-5"
              style={{
                borderLeftColor: 'var(--aws-amber)',
                background: 'rgba(255,255,255,0.02)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <h2 className="font-headline text-xl font-bold text-white">{guidelineItem.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-on-surface-variant)]">{guidelineItem.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
