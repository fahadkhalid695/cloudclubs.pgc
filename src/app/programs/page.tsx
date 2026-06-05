'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const roadmapItems = [
  {
    phase: "Seminar 1",
    title: "Introduction to Cloud and Open Source",
    focus: "Understand why cloud matters and how open source powers practical workflows.",
    topics: ["Traditional vs cloud infrastructure", "AWS essentials: EC2, S3, IAM", "Linux, Git, Docker foundations"],
    outcome: "Members gain context and vocabulary for cloud careers.",
  },
  {
    phase: "Seminar 2",
    title: "AWS Core Services Deep Dive",
    focus: "Build clarity around infrastructure, access, storage, and architecture design.",
    topics: ["EC2 for compute", "S3 for storage", "IAM for secure access", "Architecture thinking"],
    outcome: "Members form a strong conceptual base for project work.",
  },
  {
    phase: "Workshop 1",
    title: "AWS Hands-On (Beginner)",
    focus: "First practical cloud build with guided deployment steps.",
    topics: ["Create free-tier account", "Launch EC2 instance", "SSH into server", "Deploy first webpage"],
    outcome: "Members deploy their first live workload.",
  },
  {
    phase: "Seminar 3",
    title: "Careers and Real-World Applications",
    focus: "Map cloud skills to industry paths and certification progression.",
    topics: ["Cloud career tracks", "DevOps workflows", "Case studies", "Cloud Practitioner path"],
    outcome: "Members identify a personalized growth direction.",
  },
  {
    phase: "Workshop 2",
    title: "Open Source and Deployment",
    focus: "Connect source control and cloud deployment into one repeatable process.",
    topics: ["Create GitHub repo", "Push project code", "Deploy to AWS", "Intro to Docker"],
    outcome: "Members experience an industry-like workflow end-to-end.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Hero */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-amber)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-amber)' }}>
              Learning path · {roadmapItems.length} phases
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            Builder Roadmap
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--color-on-surface-variant)]">
            A practical sequence from cloud fundamentals to deployment workflow, built for students who want execution, not theory alone.
          </p>
        </AnimatedSection>

        {/* Program cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {roadmapItems.map((roadmapItem, index) => (
            <motion.article
              key={roadmapItem.title}
              className="group rounded-2xl border p-6 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-purple)' }}>
                  {roadmapItem.phase}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">
                  Phase {index + 1}
                </span>
              </div>
              <h2 className="mt-4 font-headline text-xl font-bold text-white">{roadmapItem.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">{roadmapItem.focus}</p>
              <div className="mt-4 space-y-2">
                {roadmapItem.topics.map((topic) => (
                  <p key={topic} className="flex items-start gap-2 text-sm text-[var(--color-on-surface-variant)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--aws-mint)' }} />
                    <span>{topic}</span>
                  </p>
                ))}
              </div>
              <p className="mt-5 border-t pt-4 text-sm font-semibold" style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'var(--aws-amber)' }}>
                Outcome: {roadmapItem.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border p-8 md:p-12 text-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              Start this roadmap with us
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">
              Build momentum with workshops, guided mentorship, and peer collaboration.
            </p>
            <Link
              href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--aws-amber)' }}
            >
              Join The Group
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
