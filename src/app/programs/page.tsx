'use client';

import Link from "next/link";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

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
  const roadmapRef = useScrollRevealGroup({ threshold: 0.1 });
  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <section className="section-card rounded-[2rem] p-6 md:p-10 animate-scale-in">
          <span className="badge-chip badge-amber animate-bounce-in">Learning path</span>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-brand-ink md:text-6xl animate-lift-up animate-stagger-1">Builder Roadmap</h1>
          <p className="mt-4 max-w-3xl text-on-surface-variant animate-fade-up animate-stagger-2">
            A practical sequence from cloud fundamentals to deployment workflow, built for students who want execution, not theory alone.
          </p>
        </section>

        <section ref={roadmapRef} className="mt-10 grid gap-5 lg:grid-cols-2">
          {roadmapItems.map((item, index) => (
            <article
              key={item.title}
              className={`scroll-reveal-stagger section-card card-shine hover-pop rounded-2xl p-6 will-change-transform ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="badge-chip badge-purple">{item.phase}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-amber">Phase</span>
              </div>
              <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm text-on-surface-variant">{item.focus}</p>
              <div className="mt-4 space-y-2">
                {item.topics.map((topic) => (
                  <p key={topic} className="flex items-start gap-2 text-sm text-on-surface-variant">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" />
                    <span>{topic}</span>
                  </p>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-brand-purple">Outcome: {item.outcome}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 section-dark relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="accent-orb accent-blue h-44 w-44 -top-10 right-12 animate-glow-pulse" />
          <div className="relative z-10 text-center animate-fade-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl animate-lift-up animate-stagger-1">Start this roadmap with us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75 animate-fade-up animate-stagger-2">
              Build momentum with workshops, guided mentorship, and peer collaboration.
            </p>
            <Link
              href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink transition-smooth hover:-translate-y-0.5"
            >
              Join The Group
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
