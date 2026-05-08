'use client';

import Link from "next/link";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

const resources = [
  {
    icon: "cloud",
    title: "AWS Free Tier",
    description: "Start with AWS services at no cost and get hands-on quickly.",
    link: "https://aws.amazon.com/free/",
    tag: "Official",
    badge: "badge-blue",
  },
  {
    icon: "school",
    title: "AWS Skill Builder",
    description: "Digital courses, plans, and certification-focused learning tracks.",
    link: "https://skillbuilder.aws/",
    tag: "Learning",
    badge: "badge-purple",
  },
  {
    icon: "code",
    title: "AWS Documentation",
    description: "Comprehensive docs from basics to deep service architecture.",
    link: "https://docs.aws.amazon.com/",
    tag: "Docs",
    badge: "badge-mint",
  },
  {
    icon: "school",
    title: "AWS Cloud Quest",
    description: "Gamified cloud learning and challenge-based progression.",
    link: "https://skillbuilder.aws/search?searchText=aws-cloud-quest-cloud-practitioner",
    tag: "Learning",
    badge: "badge-purple",
  },
  {
    icon: "school",
    title: "AI/ML Scholars Program 2026",
    description: "Free AI/ML learning with practical labs and industry content.",
    link: "https://www.udacity.com/scholarships/aws-ai-ml-scholars",
    tag: "AI/ML",
    badge: "badge-magenta",
  },
  {
    icon: "school",
    title: "AWS Educate",
    description: "Student-focused learning content, labs, and sandbox access.",
    link: "https://aws.amazon.com/education/awseducate/",
    tag: "Student",
    badge: "badge-amber",
  },
  {
    icon: "group",
    title: "Student Builder Community",
    description: "Connect with peers, share projects, and collaborate globally.",
    link: "https://aws.amazon.com/developer/community/students/cloudclubs/",
    tag: "Community",
    badge: "badge-blue",
  },
  {
    icon: "workspace_premium",
    title: "Certification Pathways",
    description: "Explore foundational to specialty AWS certification tracks.",
    link: "https://aws.amazon.com/certification/",
    tag: "Career",
    badge: "badge-mint",
  },
  {
    icon: "play_circle",
    title: "AWS YouTube Channel",
    description: "Tutorials, re:Invent sessions, and product deep dives.",
    link: "https://www.youtube.com/@amazonwebservices",
    tag: "Video",
    badge: "badge-amber",
  },
];

export default function ResourcesPage() {
  const resourcesRef = useScrollRevealGroup({ threshold: 0.1 });
  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <section className="section-card relative overflow-hidden rounded-[2rem] p-6 md:p-10 animate-scale-in">
          <div className="accent-orb accent-mint h-52 w-52 -top-14 right-6 animate-glow-pulse" />
          <div className="accent-orb accent-magenta h-48 w-48 -bottom-10 left-10 animate-glow-pulse" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="animate-fade-up">
              <span className="badge-chip badge-purple animate-bounce-in">Learn and build</span>
              <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-brand-ink md:text-6xl animate-lift-up animate-stagger-1">
                Cloud Resources for Student Builders
              </h1>
              <p className="mt-4 max-w-2xl text-on-surface-variant animate-fade-up animate-stagger-2">
                Curated links and structured resources to accelerate your AWS learning journey from basics to deployment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["9", "Resource cards"],
                ["4", "Learning channels"],
                ["1", "Community hub"],
                ["24/7", "Self-paced"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover-scale transition-transform duration-300">
                  <div className="font-headline text-2xl font-bold text-brand-ink">{value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={resourcesRef} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((res, index) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-reveal-stagger section-card card-shine hover-pop rounded-2xl p-6 will-change-transform ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-brand-purple/10 p-2.5 text-brand-purple">
                  <span className="material-symbols-outlined text-xl">{res.icon}</span>
                </div>
                <span className={`badge-chip ${res.badge}`}>{res.tag}</span>
              </div>
              <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight text-brand-ink">{res.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{res.description}</p>
              <div className="mt-5 border-t border-slate-200 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-purple">
                Visit Resource
              </div>
            </a>
          ))}
        </section>

        <section className="mt-12 section-dark relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="accent-orb accent-blue h-44 w-44 -bottom-10 right-12" />
          <div className="relative z-10 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Keep learning, keep shipping</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Join AWS Student Builder Group and turn these resources into practical cloud outcomes.
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
