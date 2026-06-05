'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import RippleButton from "@/components/RippleButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stats = [
  { value: 100, suffix: "+", label: "Members" },
  { value: 10, suffix: "+", label: "Events" },
  { value: 5, suffix: "", label: "Programs" },
  { value: 3, suffix: "", label: "Awards" },
];

const programs = [
  {
    title: "Certification Support",
    description: "Structured prep paths and weekly check-ins for Cloud Practitioner and Solutions Architect tracks.",
    color: "var(--aws-amber)",
    glow: "rgba(255,153,0,0.15)",
  },
  {
    title: "Hands-On Labs",
    description: "From IAM fundamentals to Lambda and architecture drills, members ship practical work each month.",
    color: "var(--aws-mint)",
    glow: "rgba(0,229,130,0.15)",
  },
  {
    title: "Global Community",
    description: "Collaborate with student builders worldwide and learn from AWS-first communities.",
    color: "var(--aws-purple)",
    glow: "rgba(173,92,255,0.15)",
  },
];

const marqueeServices = [
  "AWS Lambda", "Amazon S3", "EC2", "CloudFormation", "DynamoDB",
  "API Gateway", "Amazon EKS", "SageMaker", "Bedrock AI", "AWS CDK",
  "IAM", "CloudWatch", "Route 53", "Amplify",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 animated-grid-bg opacity-40" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.15]" style={{ background: 'var(--aws-purple)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full opacity-[0.15]" style={{ background: 'var(--aws-amber)', filter: 'blur(80px)' }} />
        <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] rounded-full opacity-[0.1]" style={{ background: 'var(--aws-mint)', filter: 'blur(80px)' }} />

        <div className="page-shell relative z-10 pt-32 pb-20">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[12px] tracking-wide" style={{ borderColor: 'var(--aws-amber)', color: 'var(--aws-amber)' }}>
                ☁ Punjab Group of Colleges · Muridke Campus
              </span>
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <AnimatedHeading
                text="Build Real AWS Projects, Not Just Notes."
                className="font-headline font-[800] leading-[1.05] tracking-tight text-white"
                splitBy="word"
                delay={0.2}
                as="h1"
              />
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-2xl font-mono text-[14px] leading-relaxed text-[var(--color-on-surface-variant)]">
              AWS Student Builder Group at PGC Muridke helps students move from beginner to builder through guided roadmaps, execution-focused workshops, and peer mentorship.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <MagneticButton strength={0.3}>
                <Link
                  href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
                  style={{ background: 'var(--aws-amber)', boxShadow: '0 4px 20px rgba(255,153,0,0.2)' }}
                >
                  Join The Club
                </Link>
              </MagneticButton>
              <RippleButton
                className="inline-flex items-center justify-center rounded-xl border px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-[var(--aws-blue)] hover:text-[var(--aws-blue)]"
                rippleColor="rgba(66,180,255,0.25)"
                onClick={() => { window.location.href = '/programs'; }}
              >
                Explore Roadmap
              </RippleButton>
            </motion.div>

            <motion.div variants={item} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <TiltCard
                  key={stat.label}
                  maxDeg={12}
                  glowColor="rgba(255,153,0,0.12)"
                  className="rounded-xl border p-4 text-center cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <p className="font-headline text-2xl font-bold" style={{ color: 'var(--aws-amber)' }}>
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">{stat.label}</p>
                </TiltCard>
              ))}
            </motion.div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y py-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeServices, ...marqueeServices].map((service, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 font-mono text-[13px] text-[var(--color-on-surface-variant)]">
              <span style={{ color: 'var(--aws-amber)', fontSize: '8px' }}>◆</span>
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="page-shell">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px]" style={{ background: 'var(--aws-mint)' }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--aws-mint)' }}>What We Offer</span>
            </div>
            <AnimatedHeading text="Programs & Tracks" className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-white" as="h2" />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
              >
                <TiltCard
                  maxDeg={8}
                  glowColor={program.glow}
                  className="group relative rounded-2xl border p-6 h-full"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" style={{ background: program.color }} />
                  <h3 className="font-headline text-xl font-bold text-white">{program.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-on-surface-variant)]">{program.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection direction="left">
              <AnimatedHeading text="A student-led cloud chapter" className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]" as="h2" />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                We help students at PGC Muridke build practical AWS skills through workshops, certifications, and real-world project execution. Our community-driven approach means every member contributes and grows.
              </p>
              <div className="mt-6 flex gap-6">
                <div>
                  <p className="font-headline text-2xl font-bold" style={{ color: 'var(--aws-amber)' }}>
                    <AnimatedCounter to={5} suffix="+" />
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">Mentors</p>
                </div>
                <div>
                  <p className="font-headline text-2xl font-bold" style={{ color: 'var(--aws-mint)' }}>
                    <AnimatedCounter to={100} suffix="+" />
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">Active Members</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="page-shell">
          <AnimatedSection>
            <div className="rounded-2xl border p-10 md:p-16 text-center relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="absolute top-[-50%] left-[-20%] w-[400px] h-[400px] rounded-full opacity-[0.08]" style={{ background: 'var(--aws-purple)', filter: 'blur(60px)' }} />
              <div className="absolute bottom-[-50%] right-[-20%] w-[400px] h-[400px] rounded-full opacity-[0.08]" style={{ background: 'var(--aws-amber)', filter: 'blur(60px)' }} />
              <div className="relative z-10">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Ready to become an AWS builder?</h2>
                <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">Start with our roadmap, join live workshops, and ship practical projects with a peer-driven team culture.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black" style={{ background: 'var(--aws-amber)' }}>
                      Become A Member
                    </Link>
                  </MagneticButton>
                  <Link href="/team" className="inline-flex items-center justify-center rounded-xl border px-7 py-3.5 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-white" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                    Meet The Team
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
