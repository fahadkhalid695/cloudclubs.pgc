'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Globe2, GraduationCap, TerminalSquare, WalletCards } from "lucide-react";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";
import { Parallax, ScrollParallax } from "@/components/Parallax";

const highlights = [
  {
    title: "Certification Support",
    text: "Structured prep paths and weekly check-ins for Cloud Practitioner and Solutions Architect tracks.",
    icon: GraduationCap,
    badge: "Career Track",
  },
  {
    title: "Hands-On Labs",
    text: "From IAM fundamentals to Lambda and architecture drills, members ship practical work each month.",
    icon: TerminalSquare,
    badge: "Project Labs",
  },
  {
    title: "Global Community",
    text: "Collaborate with student builders worldwide and learn from AWS-first communities.",
    icon: Globe2,
    badge: "Network",
  },
  {
    title: "Opportunity Pipeline",
    text: "Access cloud internships, hackathons, and referral pathways through partner networks.",
    icon: BriefcaseBusiness,
    badge: "Growth",
  },
  {
    title: "AWS Credits",
    text: "Use promotional credits to build and test your own cloud ideas without blockers.",
    icon: WalletCards,
    badge: "Build",
  },
];

export default function Home() {
  const highlightsRef = useScrollRevealGroup({ threshold: 0.1 });

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="accent-orb accent-magenta h-52 w-52 -top-12 right-8 animate-glow-pulse" />
        <div className="accent-orb accent-blue h-64 w-64 top-44 -left-12 animate-glow-pulse" />
        <div className="page-shell">
          <div className="section-card relative overflow-hidden rounded-[2rem] p-6 md:p-10">
            <div className="absolute inset-0 surface-grid opacity-30" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="animate-fade-up">
                <span className="badge-chip badge-purple animate-bounce-in">Student-led cloud chapter</span>
                <h1 className="mt-4 font-headline text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-ink md:text-6xl xl:text-7xl animate-lift-up animate-stagger-1">
                  Build Real AWS Projects,
                  <span className="block text-brand-purple">Not Just Notes.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg animate-fade-up animate-stagger-2">
                  AWS Student Builder Group at PGC Muridke helps students move from beginner to builder through guided roadmaps,
                  execution-focused workshops, and peer mentorship.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up animate-stagger-3">
                  <Link
                    href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-premium hover-shift-up hover:shadow-xl hover:shadow-brand-ink/30"
                  >
                    Join The Group
                  </Link>
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink transition-premium hover-shift-up hover:border-brand-purple hover:text-brand-purple"
                  >
                    Explore Roadmap
                  </Link>
                </div>
              </div>

              <div className="relative animate-scale-in animate-stagger-1">
                <ScrollParallax offset={0.8}>
                  <Parallax strength={8}>
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/80 shadow-2xl hover-pop will-change-transform">
                      <Image
                        src="/pgc4.png"
                        alt="PGC campus"
                        width={880}
                        height={640}
                        className="h-[360px] w-full object-cover md:h-[420px] transition-transform duration-500"
                        priority
                      />
                    </div>
                  </Parallax>
                </ScrollParallax>
                <div className="absolute -bottom-5 left-6 rounded-xl bg-brand-white px-4 py-3 shadow-lg animate-fade-up animate-stagger-2 hover-scale will-change-transform">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Members</p>
                  <p className="font-headline text-2xl font-bold text-brand-ink">100+</p>
                </div>
                <div className="absolute -top-5 right-6 rounded-xl bg-brand-ink px-4 py-3 text-white shadow-lg animate-float-gentle hover-scale will-change-transform">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Mentors</p>
                  <p className="font-headline text-2xl font-bold">5+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="page-shell">
          <div className="mb-8 flex items-end justify-between gap-6 animate-fade-up">
            <div>
              <span className="badge-chip badge-blue animate-bounce-in">Why builders join</span>
              <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">Modern skills, practical outcomes</h2>
            </div>
            <Link href="/events" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-purple transition-premium hover:gap-3 hover-glow will-change-transform">
              View Events <ArrowRight size={16} />
            </Link>
          </div>

          <div ref={highlightsRef} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`scroll-reveal-stagger section-card card-shine hover-pop rounded-2xl p-6 will-change-transform ${
                    index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : index === 4 ? "animate-stagger-4" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="badge-chip badge-amber">{item.badge}</span>
                    <div className="rounded-xl bg-brand-purple/10 p-2.5 text-brand-purple transition-all duration-300 hover:scale-110 hover:bg-brand-purple/20">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="page-shell">
          <div className="section-dark relative overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="accent-orb accent-amber h-48 w-48 -top-10 right-14 animate-glow-pulse" />
            <div className="accent-orb accent-magenta h-44 w-44 -bottom-8 left-10 animate-glow-pulse" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="animate-fade-up">
                <span className="badge-chip bg-white/14 text-white animate-bounce-in">Build your cloud career</span>
                <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-5xl animate-lift-up animate-stagger-1">
                  Ready to become an AWS builder?
                </h2>
                <p className="mt-4 max-w-2xl text-white/75 animate-fade-up animate-stagger-2">
                  Start with our roadmap, join live workshops, and ship practical projects with a peer-driven team culture.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col animate-fade-up animate-stagger-3">
                <Link
                  href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-white px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink transition-premium hover-pop will-change-transform"
                >
                  Become A Member
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-premium hover-glow hover:border-white/50"
                >
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
