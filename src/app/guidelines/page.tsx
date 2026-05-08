'use client';

import { useScrollRevealGroup } from "@/hooks/useScrollReveal";

const guidelines = [
  {
    icon: "handshake",
    title: "Respect and Inclusivity",
    description:
      "Treat each member with dignity. We value diversity of background, ideas, and perspective in all interactions.",
  },
  {
    icon: "forum",
    title: "Constructive Communication",
    description:
      "Be helpful, professional, and collaborative. Share feedback that strengthens people and projects.",
  },
  {
    icon: "security",
    title: "Academic Integrity",
    description:
      "Credit original work, avoid plagiarism, and maintain honesty in projects, workshops, and certifications.",
  },
  {
    icon: "volunteer_activism",
    title: "Active Participation",
    description:
      "Contribute to workshops, discussions, and team execution. Community strength grows through participation.",
  },
  {
    icon: "shield",
    title: "Privacy and Confidentiality",
    description:
      "Never share member data without consent. Respect boundaries and private communications.",
  },
  {
    icon: "gavel",
    title: "Code of Conduct",
    description:
      "Follow campus and community standards. Serious violations may result in suspension or removal.",
  },
];

export default function GuidelinesPage() {
  const guidelinesRef = useScrollRevealGroup({ threshold: 0.1 });
  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <section className="section-card rounded-[2rem] p-6 md:p-10 animate-scale-in">
          <span className="badge-chip badge-mint animate-bounce-in">Our standards</span>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-brand-ink md:text-6xl animate-lift-up animate-stagger-1">Community Guidelines</h1>
          <p className="mt-4 max-w-3xl text-on-surface-variant animate-fade-up animate-stagger-2">
            These principles help us keep AWS Student Builder Group safe, collaborative, and growth-focused for everyone.
          </p>
        </section>

        <section ref={guidelinesRef} className="mt-10 grid gap-4 md:grid-cols-2">
          {guidelines.map((item, index) => (
            <article
              key={item.title}
              className={`scroll-reveal-stagger section-card hover-pop rounded-2xl p-5 will-change-transform ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-purple/12 p-2.5 text-brand-purple transition-all duration-300 hover:scale-110 hover:bg-brand-purple/20">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <h2 className="font-headline text-xl font-bold tracking-tight text-brand-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
