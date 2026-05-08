'use client';

import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

export default function NewsPage() {
  const newsRef = useScrollRevealGroup({ threshold: 0.1 });
  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <section className="section-card relative overflow-hidden rounded-[2rem] p-6 md:p-10 animate-scale-in">
          <div className="accent-orb accent-magenta h-56 w-56 -top-16 right-8 animate-glow-pulse" />
          <div className="accent-orb accent-blue h-52 w-52 -bottom-12 left-10 animate-glow-pulse" />
          <div className="relative z-10 max-w-3xl animate-fade-up">
            <span className="badge-chip badge-purple animate-bounce-in">Community updates</span>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-brand-ink md:text-6xl animate-lift-up animate-stagger-1">
              Student Builder Group Newsroom
            </h1>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant md:text-lg animate-fade-up animate-stagger-2">
              Announcements, milestones, sponsorship updates, and opportunities from our campus builder ecosystem.
            </p>
          </div>
        </section>

        <section ref={newsRef} className="mt-10 grid gap-6 md:grid-cols-2">
          {newsItems.map((item, index) => {
            const isExternal = item.link.startsWith("http");
            return (
              <article
                key={item.id}
                className={`scroll-reveal-stagger section-card card-shine hover-pop overflow-hidden rounded-2xl will-change-transform ${
                  index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
                }`}
              >
                <div className="h-56 overflow-hidden">
                  <Image src={item.image} alt={item.title} width={780} height={460} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="badge-chip badge-blue">{item.category}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant">{item.date}</span>
                  </div>
                  <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight text-brand-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.summary}</p>

                  {isExternal ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-brand-purple transition-premium hover-glow"
                    >
                      {item.linkLabel}
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-brand-purple transition-premium hover-glow"
                    >
                      {item.linkLabel}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-12 section-dark relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="accent-orb accent-amber h-48 w-48 -top-12 right-10 animate-glow-pulse" />
          <div className="relative z-10 text-center animate-fade-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl animate-lift-up animate-stagger-1">Want to be in our next headline?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75 animate-fade-up animate-stagger-2">
              Join the AWS Student Builder Group team, contribute to workshops, and build impact through your work.
            </p>
            <a
              href="https://forms.gle/dbgRxAiYFdLFWfme7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink transition-premium hover-pop will-change-transform"
            >
              Join The Team
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
