'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkIcon, Mail, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FlipCard from "@/components/FlipCard";
import PulsingRing from "@/components/PulsingRing";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const leader = {
  name: "Rana Fahad Khalid",
  role: "Founding Leader",
  badge: "Leadership",
  image: "/profile.png",
  bio: "Founding leader of AWS Student Builder Group at PGC Muridke. Passionate about cloud architecture and open-source, driving the group's mission to transform students into skilled AWS builders through hands-on workshops, mentorship, and community-driven learning.",
  linkedin: "https://www.linkedin.com/in/fahadkhalid695",
  whatsapp: "https://wa.link/zh29bt",
  email: "fahadkhalid695@gmail.com",
};

const coreTeamMembers = [
  {
    name: "Ali Haider",
    role: "Manager",
    image: "/Ali Haider.jpeg",
    bio: "Manages end-to-end event planning and execution for AWS Student Builder Group, ensuring every workshop and session runs seamlessly from logistics to delivery.",
    color: "var(--aws-amber)",
  },
  {
    name: "Muhammad Hasan",
    role: "Manager",
    image: "/Hassan .jpeg",
    bio: "Facilitates smooth event flow and audience engagement during sessions, keeping discussions focused and ensuring every participant gets value from the experience.",
    color: "var(--aws-mint)",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        <AnimatedSection>
          <AnimatedHeading text="Meet Our Team" className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight" as="h1" />
          <p className="mt-4 max-w-2xl text-[var(--color-on-surface-variant)]">
            We are a student-led crew building cloud talent at PGC Muridke through events, mentorship, and practical project culture.
          </p>
        </AnimatedSection>

        {/* Leader — Full width horizontal card */}
        <motion.section
          className="mt-12 rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="shrink-0">
            <PulsingRing color="#FF9900" rings={3} size={160}>
              <Image src={leader.image} alt={leader.name} width={160} height={160} className="h-full w-full object-cover rounded-full" />
            </PulsingRing>
          </div>
          <div className="text-center md:text-left">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-amber)' }}>{leader.badge}</span>
            <h2 className="mt-2 font-headline text-2xl md:text-3xl font-bold text-white">{leader.name}</h2>
            <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">{leader.role}</p>
            <p className="mt-4 text-sm text-[var(--color-on-surface-variant)] leading-relaxed max-w-xl">{leader.bio}</p>
            <div className="mt-5 flex gap-3 justify-center md:justify-start">
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110"><LinkIcon size={16} /></a>
              <a href={`mailto:${leader.email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110"><Mail size={16} /></a>
              <a href={leader.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110"><MessageCircle size={16} /></a>
            </div>
          </div>
        </motion.section>

        {/* Core Team — FlipCards */}
        <section className="mt-14">
          <AnimatedSection><h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">Core Team</h2></AnimatedSection>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
            {coreTeamMembers.map((member) => (
              <motion.div key={member.name} variants={item}>
                <FlipCard
                  height={320}
                  front={
                    <div className="h-full rounded-xl border p-4 text-center flex flex-col items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="mx-auto h-36 w-36 rounded-full overflow-hidden border-2" style={{ borderColor: member.color }}>
                        <Image src={member.image} alt={member.name} width={300} height={300} className="h-full w-full object-cover" />
                      </div>
                      <h3 className="mt-4 font-headline text-base font-bold text-white">{member.name}</h3>
                      <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: member.color }}>{member.role}</p>
                    </div>
                  }
                  back={
                    <div className="h-full rounded-xl border p-5 flex flex-col items-center justify-center text-center" style={{ background: 'rgba(255,255,255,0.04)', borderColor: member.color }}>
                      <h3 className="font-headline text-base font-bold text-white">{member.name}</h3>
                      <p className="font-mono text-[11px] uppercase tracking-wide mt-1" style={{ color: member.color }}>{member.role}</p>
                      <p className="mt-3 text-xs text-[var(--color-on-surface-variant)] leading-relaxed">{member.bio}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border p-8 md:p-12 text-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">We are hiring student builders</h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">Passionate about cloud and community? Join us and shape the next generation of builders.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://forms.gle/dbgRxAiYFdLFWfme7" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1" style={{ background: 'var(--aws-amber)' }}>Join Team</Link>
              <Link href="/guidelines" className="inline-flex justify-center rounded-xl border px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-white" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>View Guidelines</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
