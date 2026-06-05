'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsItems } from "@/data/news";
import AnimatedSection from "@/components/AnimatedSection";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function NewsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-purple)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-purple)' }}>
              Community updates
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            Newsroom
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-on-surface-variant)]">
            Announcements, milestones, sponsorship updates, and opportunities from our campus builder ecosystem.
          </p>
        </AnimatedSection>

        {/* News grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {newsItems.map((newsItem) => {
            const isExternal = newsItem.link.startsWith("http");
            const imgSrc = newsItem.image.startsWith("http") || newsItem.image.startsWith("/") ? newsItem.image : `/${newsItem.image}`;
            return (
              <motion.article
                key={newsItem.id}
                variants={item}
                className="group rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                whileHover={{ y: -6 }}
              >
                <div className="h-52 overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={newsItem.title}
                    width={780}
                    height={460}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--aws-blue)' }}>
                      {newsItem.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">
                      {newsItem.date}
                    </span>
                  </div>
                  <h2 className="mt-3 font-headline text-xl font-bold text-white">{newsItem.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-on-surface-variant)]">{newsItem.summary}</p>

                  {isExternal ? (
                    <a
                      href={newsItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-wide transition-all duration-200 hover:gap-2"
                      style={{ color: 'var(--aws-amber)' }}
                    >
                      {newsItem.linkLabel} →
                    </a>
                  ) : (
                    <Link
                      href={newsItem.link}
                      className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-wide transition-all duration-200 hover:gap-2"
                      style={{ color: 'var(--aws-amber)' }}
                    >
                      {newsItem.linkLabel} →
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border p-8 md:p-12 text-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              Want to be in our next headline?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">
              Join the AWS Student Builder Group team, contribute to workshops, and build impact through your work.
            </p>
            <a
              href="https://forms.gle/dbgRxAiYFdLFWfme7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--aws-amber)' }}
            >
              Join The Team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
