'use client';

import Image from "next/image";
import Link from "next/link";
import { getFeaturedEvent, getPastEvents, getUpcomingEvents } from "@/data/events";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";
import { ScrollParallax } from "@/components/Parallax";

export default function Events() {
  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const upcomingRef = useScrollRevealGroup({ threshold: 0.1 });
  const recapsRef = useScrollRevealGroup({ threshold: 0.1 });

  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        {featuredEvent && (
          <section className="section-dark relative overflow-hidden rounded-[2rem] p-6 md:p-10 animate-scale-in">
            <div className="accent-orb accent-blue h-56 w-56 -top-10 right-8 animate-glow-pulse" />
            <div className="accent-orb accent-amber h-52 w-52 -bottom-12 left-10 animate-glow-pulse" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="animate-fade-up">
                <span className="badge-chip bg-white/14 text-white animate-bounce-in">Featured Event</span>
                <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-6xl animate-lift-up animate-stagger-1">{featuredEvent.title}</h1>
                <p className="mt-4 max-w-2xl text-white/75 animate-fade-up animate-stagger-2">{featuredEvent.description}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-2">{featuredEvent.date}</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">{featuredEvent.time}</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">{featuredEvent.location}</span>
                </div>
                <div className="mt-7 flex flex-wrap gap-3 animate-fade-up animate-stagger-3">
                  <a
                    href={featuredEvent.meetupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-brand-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-ink transition-premium hover-pop will-change-transform"
                  >
                    Register Now
                  </a>
                  <Link
                    href={`/events/${featuredEvent.id}`}
                    className="rounded-xl border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-premium hover-glow hover:border-white/50"
                  >
                    Event Details
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.4rem] border border-white/20 shadow-2xl hover-pop will-change-transform">
                <ScrollParallax offset={0.8}>
                  <Image
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    width={900}
                    height={680}
                    className="h-[320px] w-full object-cover md:h-[420px] transition-transform duration-500"
                  />
                </ScrollParallax>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12">
          <div className="mb-6 animate-fade-up">
            <span className="badge-chip badge-blue animate-bounce-in">Upcoming</span>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight md:text-4xl">Explore Events</h2>
          </div>
          <div ref={upcomingRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className={`scroll-reveal-stagger section-card card-shine hover-pop rounded-2xl will-change-transform ${
                  index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image src={event.image} alt={event.title} width={700} height={440} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className={`absolute right-3 top-3 rounded-full ${event.tagColor} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white`}>
                    {event.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-headline text-xl font-bold tracking-tight text-brand-ink">{event.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">{event.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1">{event.date}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1">{event.time}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <Link href={`/events/${event.id}`} className="text-sm font-bold text-brand-purple transition-premium hover:text-brand-ink hover-glow">
                      View Details
                    </Link>
                    <a
                      href={event.meetupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-brand-amber transition-premium hover-shift-up"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6 animate-fade-up">
            <span className="badge-chip badge-mint animate-bounce-in">Recaps</span>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight md:text-3xl">Recent Sessions</h2>
          </div>
          <div ref={recapsRef} className="grid gap-4 md:grid-cols-2">
            {pastEvents.map((event, index) => (
              <article
                key={event.id}
                className={`scroll-reveal-stagger section-card hover-pop rounded-2xl p-4 md:p-5 will-change-transform ${index === 1 ? "animate-stagger-1" : ""}`}
              >
                <div className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl hover:scale-110 transition-transform duration-300">
                    <Image src={event.image} alt={event.title} width={220} height={220} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold tracking-tight">{event.title}</h3>
                    <p className="mt-1 text-sm text-on-surface-variant">{event.description}</p>
                    <a
                      href={event.meetupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-brand-purple transition-premium hover-glow"
                    >
                      Watch Recording
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
