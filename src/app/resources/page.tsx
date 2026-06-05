'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, GraduationCap, Code, Users, Award, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const resources = [
  {
    icon: Cloud,
    title: "AWS Free Tier",
    description: "Start with AWS services at no cost and get hands-on quickly.",
    link: "https://aws.amazon.com/free/",
    tag: "Official",
    color: "var(--aws-blue)",
  },
  {
    icon: GraduationCap,
    title: "AWS Skill Builder",
    description: "Digital courses, plans, and certification-focused learning tracks.",
    link: "https://skillbuilder.aws/",
    tag: "Learning",
    color: "var(--aws-purple)",
  },
  {
    icon: Code,
    title: "AWS Documentation",
    description: "Comprehensive docs from basics to deep service architecture.",
    link: "https://docs.aws.amazon.com/",
    tag: "Docs",
    color: "var(--aws-mint)",
  },
  {
    icon: GraduationCap,
    title: "AWS Cloud Quest",
    description: "Gamified cloud learning and challenge-based progression.",
    link: "https://skillbuilder.aws/search?searchText=aws-cloud-quest-cloud-practitioner",
    tag: "Learning",
    color: "var(--aws-purple)",
  },
  {
    icon: GraduationCap,
    title: "AI/ML Scholars Program 2026",
    description: "Free AI/ML learning with practical labs and industry content.",
    link: "https://www.udacity.com/scholarships/aws-ai-ml-scholars",
    tag: "AI/ML",
    color: "var(--aws-magenta)",
  },
  {
    icon: GraduationCap,
    title: "AWS Educate",
    description: "Student-focused learning content, labs, and sandbox access.",
    link: "https://aws.amazon.com/education/awseducate/",
    tag: "Student",
    color: "var(--aws-amber)",
  },
  {
    icon: Users,
    title: "Student Builder Community",
    description: "Connect with peers, share projects, and collaborate globally.",
    link: "https://aws.amazon.com/developer/community/students/cloudclubs/",
    tag: "Community",
    color: "var(--aws-blue)",
  },
  {
    icon: Award,
    title: "Certification Pathways",
    description: "Explore foundational to specialty AWS certification tracks.",
    link: "https://aws.amazon.com/certification/",
    tag: "Career",
    color: "var(--aws-mint)",
  },
  {
    icon: Play,
    title: "AWS YouTube Channel",
    description: "Tutorials, re:Invent sessions, and product deep dives.",
    link: "https://www.youtube.com/@amazonwebservices",
    tag: "Video",
    color: "var(--aws-amber)",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Hero */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-purple)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-purple)' }}>
              Learn and build
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            Cloud Resources
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-on-surface-variant)]">
            Curated links and structured resources to accelerate your AWS learning journey from basics to deployment.
          </p>
        </AnimatedSection>

        {/* Resource grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((res, index) => {
            const Icon = res.icon;
            return (
              <motion.a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border p-6 transition-all duration-300 block"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-lg p-2" style={{ background: `color-mix(in srgb, ${res.color} 15%, transparent)` }}>
                    <Icon size={20} style={{ color: res.color }} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: res.color }}>{res.tag}</span>
                </div>
                <h2 className="mt-4 font-headline text-lg font-bold text-white">{res.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-on-surface-variant)]">{res.description}</p>
                <div className="mt-4 flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide transition-all duration-200 group-hover:gap-2" style={{ color: res.color }}>
                  Visit Resource
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border p-8 md:p-12 text-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              Keep learning, keep shipping
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">
              Join AWS Student Builder Group and turn these resources into practical cloud outcomes.
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
