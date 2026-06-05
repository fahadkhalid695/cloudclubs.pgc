'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkIcon, Mail, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FlipCard from "@/components/FlipCard";
import StaggeredText from "@/components/StaggeredText";

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
  bio: "As club leader, I lead initiatives that help students build practical AWS and open-source skills through project-based learning.",
  linkedin: "https://www.linkedin.com/in/fahadkhalid695",
  whatsapp: "https://wa.link/zh29bt",
  email: "fahadkhalid695@gmail.com",
};

const coreTeamMembers = [
  {
    name: "Sarah Ahmed",
    role: "Vice Leader",
    badge: "Operations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW4tziVPFdWHSKlGZf7l9b1ZN3azOq_4m9EIluEqgN4TTuOSdfK6DTsTP5TLcqox01YS-q6d8lHTZ191jt35P2gY_v6TRUAxURpY7SS6tuWeGhWr7FT2TZcpdCaiUMZdfZYDhLK_tRVOFdoMyOUzjo-c3rblkQjXXHn2p-Xh8OpaI6hNKTQY-5TLOm8tr0YIJyT4AWIiSegGTX9v77FZ88zJpM3_z35Q_YawBx9fK5V16sUlWLIpZs2dAg6V5e1SNOZN9kArgOiH4Q",
    bio: "Coordinates chapter operations and keeps execution aligned across teams.",
    color: "var(--aws-blue)",
  },
  {
    name: "Ali Raza",
    role: "Technical Lead",
    badge: "Engineering",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrU3CFt-p02N-DiIiY-_FCRy1UKFJVrG-WzY089Mq89K3wjsxgVbT0cpbmhp7jpiwJxcVdWIkH6DaGl5lTEkaCLzBmGWw2x0o4iafzb3d4hJdoE-XIzfSp7vrBmW6R_dam7TEGv0NZbF9D9bFmQe5sGZ50qw84Ul8_B3bkuAvUu8d4jRMBfreFiFZe5wL_PSkE1lcQ7Wfi6dhOfLfAMncfaTH6i6cZknHYTGwdL4lNfCuF4ZJ35-DY_2qsTafirdt-2wLWnlUVjNF",
    bio: "Designs technical workshops and supports members in building production-ready projects.",
    color: "var(--aws-mint)",
  },
];

const teamMembers = [
  {
    name: "Fatima Zahra",
    role: "Marketing Lead",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53GJZ5QTXdUjeFqmexeGQNjXGgf3-0yCZcRryTYzOEwcOiRGdHDuESPd2xIVUJQ3d_fLjlUqsPLBMfdD0vTXjYH5lA-x8cr_-t-5n51erSh4aPvL8AqMNH27D7CKlAlPWDNilgtI2-7vJKGU60QPtd5rs1pHyCsOh9EyUs-q_Zj1odWAUFHsB1-U_Ng8oVkDb6ljet7JicrkLpqI9iGI0a2mDC9w3JkygbD6VWpvQDNEdrWGQEFX8npDHIak2GTCetbRI0PJFTdMi",
    color: "var(--aws-magenta)",
  },
  {
    name: "Hamza Khalil",
    role: "Logistics Lead",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACcEH3-I0XRf19UjreI_MubzGBfiaBWXyZsIqSJqB_F4__LF0hj3x5Hh76aWu0qLHX-XYc6Hbd183-BOkkx7-JxKX7rT7GufG-4ze4oLWNjKVhUbUqDJvi413zDHFZY4xNuuayZ9DIZtzi72vNhgZoopKXexwQOkQHMGla3j60yug36_0pg0dTCFcS0Dc3GXUiknUe57faSb_1h1W0rlsdZAmlMlaPH6lGhWiNNX2_1jbv633TAcqL2MA-IZTIQ1U-3ygF4z8KRcfD",
    color: "var(--aws-amber)",
  },
  {
    name: "Noor Fatima",
    role: "Content Creator",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A97YU_nZCBYy93shGgBPywojLqIZlKnauXCj7aSmlGBZLSiH8-86evJbRrHobKq25yTLbmwJd6ZPBmFQLYCkbpNZ0bQxAZF1ToEjkQZ1zR0QnFp6CV4drufu7N-hmfm7fV5sCt8LCN3nvy4YJsGigTM66aCQA9P4vuAltUGMuwYG6XqVdCDSW_REtCnXYTuBXlky-d46eTK5NuT7FhzAZZG2pv3Ay03QGv411S6xqvfLyQLJFL4pZNiIOdmyWAAJg1gBvGP6rRht",
    color: "var(--aws-purple)",
  },
  {
    name: "Bilal Nasir",
    role: "Event Manager",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYC6Z9GdvmeadxkAuhbaQwUVNZ_f6VlJK1JHZrXe-RUrnqUORlbWBTOBPxdQF10lfXhxKSRDtVKdZMkOA3A5xgGNITnZpGdmVCi3zzEQCP3evONriQpRm-1fYfr2-K-WFSQmS6ST2m08DgkXZAp4kxhb92_1THuVhCSLsH2is_UIZRTfSSz90yWMLJWHEyjU2lnhAZWZAC3WnbhKW2u99eJnaK64PC66RKO1_azGfgIZ_u37kc1m5S5ZcB3krMskwI6to0piXVF0R4",
    color: "var(--aws-blue)",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="page-shell">
        {/* Header */}
        <AnimatedSection>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
            <StaggeredText text="Meet Our Team" />
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-on-surface-variant)]">
            We are a student-led crew building cloud talent at PGC Muridke through events, mentorship, and practical project culture.
          </p>
        </AnimatedSection>

        {/* Leader */}
        <motion.section
          className="mt-12 rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-2" style={{ borderColor: 'var(--aws-amber)' }}>
            <Image src={leader.image} alt={leader.name} width={300} height={300} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-amber)' }}>
              {leader.badge}
            </span>
            <h2 className="mt-2 font-headline text-3xl font-bold text-white">{leader.name}</h2>
            <p className="font-mono text-[12px] uppercase tracking-wide text-[var(--color-on-surface-variant)]">{leader.role}</p>
            <p className="mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">{leader.bio}</p>
            <div className="mt-5 flex gap-3">
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110">
                <LinkIcon size={16} />
              </a>
              <a href={`mailto:${leader.email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110">
                <Mail size={16} />
              </a>
              <a href={leader.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:text-[var(--aws-amber)] hover:scale-110">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Core Team */}
        <section className="mt-14">
          <AnimatedSection>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">Core Team</h2>
          </AnimatedSection>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {coreTeamMembers.map((member) => (
              <motion.article
                key={member.name}
                variants={item}
                className="group rounded-xl border p-4 text-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                whileHover={{ y: -6 }}
              >
                <div className="mx-auto h-24 w-24 rounded-full overflow-hidden border-2 transition-all duration-300 group-hover:shadow-lg" style={{ borderColor: member.color }}>
                  <Image src={member.image} alt={member.name} width={200} height={200} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 font-headline text-base font-bold text-white">{member.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: member.color }}>{member.role}</p>
                <p className="mt-2 text-xs text-[var(--color-on-surface-variant)]">{member.bio}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Team Grid */}
        <section className="mt-14">
          <AnimatedSection>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight">Execution Team</h2>
          </AnimatedSection>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={item}>
                <FlipCard
                  height={240}
                  className="w-full"
                  front={
                    <div className="h-full rounded-xl border p-4 text-center flex flex-col items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="mx-auto h-24 w-24 rounded-full overflow-hidden border-2" style={{ borderColor: member.color }}>
                        <Image src={member.image} alt={member.name} width={200} height={200} className="h-full w-full object-cover" />
                      </div>
                      <h3 className="mt-4 font-headline text-base font-bold text-white">{member.name}</h3>
                      <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: member.color }}>{member.role}</p>
                    </div>
                  }
                  back={
                    <div className="h-full rounded-xl border p-4 flex flex-col items-center justify-center text-center" style={{ background: 'rgba(255,255,255,0.04)', borderColor: member.color }}>
                      <h3 className="font-headline text-base font-bold text-white">{member.name}</h3>
                      <p className="font-mono text-[11px] uppercase tracking-wide mt-1" style={{ color: member.color }}>{member.role}</p>
                      <p className="mt-3 text-xs text-[var(--color-on-surface-variant)]">AWS Student Builder Group · Execution Team</p>
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              We are hiring student builders
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--color-on-surface-variant)]">
              Passionate about cloud and community? Join us and shape the next generation of builders.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://forms.gle/dbgRxAiYFdLFWfme7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'var(--aws-amber)' }}
              >
                Join Team
              </Link>
              <Link
                href="/guidelines"
                className="inline-flex justify-center rounded-xl border px-7 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-white"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                View Guidelines
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
