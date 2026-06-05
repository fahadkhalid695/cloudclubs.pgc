'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { getFeaturedEvent, getPastEvents, getUpcomingEvents } from "@/data/events";
import AnimatedSection from "@/components/AnimatedSection";
import FlipCard from "@/components/FlipCard";
import RippleButton from "@/components/RippleButton";
import { AnimatedHeading } from "@/components/AnimatedHeading";

function normalizeImg(src: string) {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Events() {
  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Featured Event */}
        {featuredEvent && (
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '400px' }}>
              <Image src={normalizeImg(featuredEvent.image)} alt={featuredEvent.title} width={1400} height={700} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,14,20,0.95) 0%, rgba(10,14,20,0.6) 50%, rgba(10,14,20,0.3) 100%)' }} />
              <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
                <span className="inline-flex self-start rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide" style={{ background: 'var(--aws-amber)', color: '#000' }}>{featuredEvent.tag}</span>
                <h1 className="mt-4 font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">{featuredEvent.title}</h1>
                <p className="mt-3 max-w-2xl text-white/70 text-sm">{featuredEvent.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 font-mono text-[12px] text-white/60">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {featuredEvent.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {featuredEvent.time}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {featuredEvent.location}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <RippleButton
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black"
                    rippleColor="rgba(255,153,0,0.3)"
                    onClick={() => { window.open(featuredEvent.meetupLink, '_blank'); }}
                  >
                    <span style={{ background: 'var(--aws-amber)', padding: '12px 24px', borderRadius: 12, display: 'inline-flex' }}>Register</span>
                  </RippleButton>
                  <Link href={`/events/${featuredEvent.id}`} className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-white" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Upcoming Events — FlipCards */}
        {upcomingEvents.length > 0 && (
          <section className="mt-16">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-blue)' }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-blue)' }}>Upcoming</span>
              </div>
              <AnimatedHeading text="Next Events" className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight" as="h2" />
            </AnimatedSection>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <motion.div key={event.id} variants={item}>
                  <FlipCard
                    height={240}
                    front={
                      <div className="h-full rounded-xl border p-5 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                        <div>
                          <span className="inline-flex rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide" style={{ background: 'rgba(255,153,0,0.12)', color: 'var(--aws-amber)' }}>{event.tag}</span>
                          <h3 className="mt-3 font-headline text-lg font-bold text-white">{event.title}</h3>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-on-surface-variant)]">
                          <span>{event.date}</span> · <span>{event.time}</span>
                        </div>
                      </div>
                    }
                    back={
                      <div className="h-full rounded-xl border p-5 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'var(--aws-amber)' }}>
                        <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{event.description}</p>
                        <div className="flex gap-3 mt-3">
                          <a href={event.meetupLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] uppercase tracking-wide" style={{ color: 'var(--aws-amber)' }}>Register Now →</a>
                          <Link href={`/events/${event.id}`} className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-on-surface-variant)] hover:text-white">Details</Link>
                        </div>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="mt-16">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-purple)' }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-purple)' }}>Past Events</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">Recent Sessions</h2>
            </AnimatedSection>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 flex flex-col gap-3">
              {pastEvents.map((event) => (
                <motion.div key={event.id} variants={item}>
                  <Link href={`/events/${event.id}`} className="group flex items-center gap-4 rounded-xl border p-4 opacity-60 transition-all duration-200 hover:opacity-80" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-14 w-14 shrink-0 rounded-lg overflow-hidden grayscale">
                      <Image src={normalizeImg(event.image)} alt={event.title} width={100} height={100} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline text-base font-bold text-white truncate">{event.title}</h3>
                      <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)]">{event.date}</p>
                    </div>
                    <span className="shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-on-surface-variant)]" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>Recap</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
