'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sponsorsData, tierConfig, getSponsorsByTier, SponsorTier } from "@/data/sponsors";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import StaggeredText from "@/components/StaggeredText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const tierOrder: SponsorTier[] = ['title', 'gold', 'silver', 'community'];

function normalizeImg(src: string) {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
}

export default function SponsorsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border p-8 md:p-12" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)', minHeight: '280px' }}>
          {/* Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full opacity-[0.1]" style={{ background: 'var(--aws-amber)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] rounded-full opacity-[0.08]" style={{ background: 'var(--aws-purple)', filter: 'blur(60px)' }} />

          <motion.div
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-mint)' }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-mint)' }}>
                Our Supporters
              </span>
            </div>
            <h1 className="font-headline text-3xl md:text-5xl font-[800] text-white tracking-tight">
              <StaggeredText text="Powered by the best in the industry" />
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-[13px] leading-relaxed text-[var(--color-on-surface-variant)]">
              These organizations make it possible for our members to learn, build, and grow on the cloud.
            </p>
          </motion.div>
        </section>

        {/* Tier Sections */}
        {tierOrder.map((tier) => {
          const sponsors = getSponsorsByTier(tier);
          if (sponsors.length === 0) return null;
          const config = tierConfig[tier];

          return (
            <section key={tier} className="mt-14">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-[2px]" style={{ background: config.color }} />
                  <span className="font-mono text-[12px] uppercase tracking-[0.16em] font-bold" style={{ color: config.color }}>
                    {config.label}
                  </span>
                </div>
              </AnimatedSection>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`grid gap-5 ${
                  tier === 'title' ? 'grid-cols-1 lg:grid-cols-2' :
                  tier === 'community' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {sponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.id}
                    variants={item}
                  >
                    <TiltCard
                      className="group rounded-[20px] border p-6 h-full transition-all duration-300 hover:shadow-lg"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        borderColor: config.borderColor,
                      }}
                    >
                    {tier === 'title' || tier === 'gold' ? (
                      /* Large / medium card layout */
                      <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex flex-col items-start gap-3 sm:w-1/3">
                          <div className="h-16 w-full flex items-center">
                            <Image
                              src={normalizeImg(sponsor.logo)}
                              alt={sponsor.name}
                              width={200}
                              height={64}
                              unoptimized
                              className="max-h-[64px] w-auto object-contain grayscale brightness-200 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                          </div>
                          <h3 className="font-headline text-lg font-bold text-white">{sponsor.name}</h3>
                          <span className="inline-flex rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wide" style={{ background: config.badgeBg, color: config.color }}>
                            {tier === 'title' ? 'Title Sponsor' : 'Gold Sponsor'}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)]">
                            Partner since {sponsor.since}
                          </span>
                        </div>
                        <div className="sm:w-2/3 flex flex-col justify-between">
                          <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
                            {sponsor.description}
                          </p>
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide transition-all duration-200 group-hover:gap-2.5"
                            style={{ color: config.color }}
                          >
                            Visit Website <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* Small / community card layout */
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="h-12 flex items-center">
                          <Image
                            src={normalizeImg(sponsor.logo)}
                            alt={sponsor.name}
                            width={120}
                            height={48}
                            unoptimized
                            className="max-h-[48px] w-auto object-contain grayscale brightness-200 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
                          />
                        </div>
                        <h3 className="font-headline text-base font-bold text-white">{sponsor.name}</h3>
                        <p className="text-xs leading-relaxed text-[var(--color-on-surface-variant)]">
                          {sponsor.description}
                        </p>
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide transition-all duration-200"
                          style={{ color: config.color }}
                        >
                          Visit <ArrowUpRight size={12} />
                        </a>
                      </div>
                    )}
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          );
        })}

        {/* CTA Section */}
        <AnimatedSection className="mt-20">
          <div className="rounded-[20px] border p-8 md:p-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,153,0,0.2)' }}>
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
                Want to support the next generation of cloud engineers?
              </h2>
              <p className="mt-3 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                Partner with AWS Student Builder Group at PGC Muridke and empower students with real cloud skills, certifications, and career pathways.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a
                href="mailto:awscloudclubpgc@gmail.com"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'var(--aws-amber)' }}
              >
                Partner With Us
              </a>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-white"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Download Sponsor Kit
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
