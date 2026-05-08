'use client';

import Image from "next/image";
import Link from "next/link";
import { LinkIcon, Mail, MessageCircle } from "lucide-react";
import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

const captain = {
  name: "Rana Fahad Khalid",
  role: "Founding Captain",
  badge: "Leadership",
  image: "/profile.png",
  bio: "As club captain, I lead initiatives that help students build practical AWS and open-source skills through project-based learning.",
  linkedin: "https://www.linkedin.com/in/fahadkhalid695",
  whatsapp: "https://wa.link/zh29bt",
  email: "fahadkhalid695@gmail.com",
};

const coreTeamMembers = [
  {
    name: "Sarah Ahmed",
    role: "Vice Captain",
    badge: "Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW4tziVPFdWHSKlGZf7l9b1ZN3azOq_4m9EIluEqgN4TTuOSdfK6DTsTP5TLcqox01YS-q6d8lHTZ191jt35P2gY_v6TRUAxURpY7SS6tuWeGhWr7FT2TZcpdCaiUMZdfZYDhLK_tRVOFdoMyOUzjo-c3rblkQjXXHn2p-Xh8OpaI6hNKTQY-5TLOm8tr0YIJyT4AWIiSegGTX9v77FZ88zJpM3_z35Q_YawBx9fK5V16sUlWLIpZs2dAg6V5e1SNOZN9kArgOiH4Q",
    bio: "Coordinates chapter operations and keeps execution aligned across teams.",
  },
  {
    name: "Ali Raza",
    role: "Technical Lead",
    badge: "Engineering",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrU3CFt-p02N-DiIiY-_FCRy1UKFJVrG-WzY089Mq89K3wjsxgVbT0cpbmhp7jpiwJxcVdWIkH6DaGl5lTEkaCLzBmGWw2x0o4iafzb3d4hJdoE-XIzfSp7vrBmW6R_dam7TEGv0NZbF9D9bFmQe5sGZ50qw84Ul8_B3bkuAvUu8d4jRMBfreFiFZe5wL_PSkE1lcQ7Wfi6dhOfLfAMncfaTH6i6cZknHYTGwdL4lNfCuF4ZJ35-DY_2qsTafirdt-2wLWnlUVjNF",
    bio: "Designs technical workshops and supports members in building production-ready projects.",
  },
];

const teamMembers = [
  {
    name: "Fatima Zahra",
    role: "Marketing Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB53GJZ5QTXdUjeFqmexeGQNjXGgf3-0yCZcRryTYzOEwcOiRGdHDuESPd2xIVUJQ3d_fLjlUqsPLBMfdD0vTXjYH5lA-x8cr_-t-5n51erSh4aPvL8AqMNH27D7CKlAlPWDNilgtI2-7vJKGU60QPtd5rs1pHyCsOh9EyUs-q_Zj1odWAUFHsB1-U_Ng8oVkDb6ljet7JicrkLpqI9iGI0a2mDC9w3JkygbD6VWpvQDNEdrWGQEFX8npDHIak2GTCetbRI0PJFTdMi",
  },
  {
    name: "Hamza Khalil",
    role: "Logistics Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACcEH3-I0XRf19UjreI_MubzGBfiaBWXyZsIqSJqB_F4__LF0hj3x5Hh76aWu0qLHX-XYc6Hbd183-BOkkx7-JxKX7rT7GufG-4ze4oLWNjKVhUbUqDJvi413zDHFZY4xNuuayZ9DIZtzi72vNhgZoopKXexwQOkQHMGla3j60yug36_0pg0dTCFcS0Dc3GXUiknUe57faSb_1h1W0rlsdZAmlMlaPH6lGhWiNNX2_1jbv633TAcqL2MA-IZTIQ1U-3ygF4z8KRcfD",
  },
  {
    name: "Noor Fatima",
    role: "Content Creator",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A97YU_nZCBYy93shGgBPywojLqIZlKnauXCj7aSmlGBZLSiH8-86evJbRrHobKq25yTLbmwJd6ZPBmFQLYCkbpNZ0bQxAZF1ToEjkQZ1zR0QnFp6CV4drufu7N-hmfm7fV5sCt8LCN3nvy4YJsGigTM66aCQA9P4vuAltUGMuwYG6XqVdCDSW_REtCnXYTuBXlky-d46eTK5NuT7FhzAZZG2pv3Ay03QGv411S6xqvfLyQLJFL4pZNiIOdmyWAAJg1gBvGP6rRht",
  },
  {
    name: "Bilal Nasir",
    role: "Event Manager",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYC6Z9GdvmeadxkAuhbaQwUVNZ_f6VlJK1JHZrXe-RUrnqUORlbWBTOBPxdQF10lfXhxKSRDtVKdZMkOA3A5xgGNITnZpGdmVCi3zzEQCP3evONriQpRm-1fYfr2-K-WFSQmS6ST2m08DgkXZAp4kxhb92_1THuVhCSLsH2is_UIZRTfSSz90yWMLJWHEyjU2lnhAZWZAC3WnbhKW2u99eJnaK64PC66RKO1_azGfgIZ_u37kc1m5S5ZcB3krMskwI6to0piXVF0R4",
  },
];

export default function TeamPage() {
  const coreTeamRef = useScrollRevealGroup({ threshold: 0.1 });
  const teamRef = useScrollRevealGroup({ threshold: 0.1 });
  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <section className="section-card rounded-[2rem] p-6 md:p-10 animate-scale-in">
          <span className="badge-chip badge-mint">People behind the chapter</span>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-brand-ink md:text-6xl">Meet Our Team</h1>
          <p className="mt-4 max-w-3xl text-on-surface-variant">
            We are a student-led crew building cloud talent at PGC Muridke through events, mentorship, and practical project culture.
          </p>
        </section>

        <section className="mt-10 section-card card-shine rounded-[2rem] p-6 md:p-8 animate-fade-up">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-2xl">
              <Image src={captain.image} alt={captain.name} width={800} height={840} className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="badge-chip badge-purple">{captain.badge}</span>
              <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight">{captain.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-brand-amber">{captain.role}</p>
              <p className="mt-5 text-on-surface-variant">{captain.bio}</p>
              <div className="mt-6 flex gap-2">
                <a href={captain.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Captain LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple transition-smooth hover:bg-brand-purple hover:text-white">
                  <LinkIcon size={16} />
                </a>
                <a href={`mailto:${captain.email}`} aria-label="Captain Email" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-smooth hover:bg-brand-blue hover:text-brand-ink">
                  <Mail size={16} />
                </a>
                <a href={captain.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Captain WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mint/15 text-[#11a46a] transition-smooth hover:bg-brand-mint hover:text-brand-ink">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl animate-fade-up">Core Team</h2>
          <div ref={coreTeamRef} className="mt-5 grid gap-5 md:grid-cols-2">
            {coreTeamMembers.map((member, index) => (
              <article key={member.name} className={`scroll-reveal-stagger section-card hover-pop rounded-2xl p-5 will-change-transform ${index === 1 ? "animate-stagger-1" : ""}`}>
                <div className="flex gap-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl hover:scale-110 transition-transform duration-300">
                    <Image src={member.image} alt={member.name} width={260} height={260} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <span className="badge-chip badge-blue">{member.badge}</span>
                    <h3 className="mt-2 font-headline text-xl font-bold">{member.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-amber">{member.role}</p>
                    <p className="mt-2 text-sm text-on-surface-variant">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl animate-fade-up">Execution Team</h2>
          <div ref={teamRef} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article key={member.name} className={`scroll-reveal-stagger section-card hover-pop rounded-2xl p-4 will-change-transform ${index > 0 ? "animate-stagger-1" : ""}`}>
                <div className="overflow-hidden rounded-xl hover:scale-110 transition-transform duration-300">
                  <Image src={member.image} alt={member.name} width={420} height={420} className="h-52 w-full object-cover" />
                </div>
                <h3 className="mt-3 font-headline text-lg font-bold tracking-tight">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 section-dark relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="accent-orb accent-magenta h-44 w-44 -top-10 right-10" />
          <div className="relative z-10 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">We are hiring student builders</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Passionate about cloud and community? Join us and shape the next generation of builders.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="https://forms.gle/dbgRxAiYFdLFWfme7" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink transition-smooth hover:-translate-y-0.5">
                Join Team
              </Link>
              <Link href="/guidelines" className="inline-flex justify-center rounded-xl border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-smooth hover:bg-white/10">
                View Guidelines
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
