import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Programs",
};

const programs = [
  {
    icon: "school",
    iconBg: "bg-brand-orange/20",
    iconColor: "text-brand-orange",
    title: "Cloud Practitioner",
    description: "The entry point for cloud literacy and core service understanding. Foundation-level certification for beginners.",
    level: "Foundational",
    duration: "6 weeks",
  },
  {
    icon: "architecture",
    iconBg: "bg-brand-purple/20",
    iconColor: "text-brand-purple",
    title: "Solutions Architect",
    description: "Advanced path for designing scalable and robust distributed systems on AWS infrastructure.",
    level: "Associate",
    duration: "12 weeks",
  },
  {
    icon: "code",
    iconBg: "bg-brand-orange/20",
    iconColor: "text-brand-orange",
    title: "Developer Associate",
    description: "Learn to develop, deploy, and debug cloud-based applications using AWS SDKs and best practices.",
    level: "Associate",
    duration: "10 weeks",
  },
  {
    icon: "settings",
    iconBg: "bg-brand-purple/20",
    iconColor: "text-brand-purple",
    title: "DevOps Engineer",
    description: "Master CI/CD pipelines, infrastructure as code, and operational excellence on AWS.",
    level: "Professional",
    duration: "14 weeks",
  },
];

export default function Programs() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          Curriculum
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Programs & <span className="text-brand-orange">Roadmap</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive curriculum and certification pathways designed to take you from beginner to cloud professional.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {programs.map((program) => (
          <div
            key={program.title}
            className="bg-surface-container-low p-8 rounded-2xl border border-brand-purple/10 hover-lift group"
          >
            <div className={`w-12 h-12 rounded-xl ${program.iconBg} flex items-center justify-center mb-6`}>
              <span className={`material-symbols-outlined ${program.iconColor}`}>
                {program.icon}
              </span>
            </div>
            <h3 className="font-bold text-2xl mb-2 font-headline group-hover:text-brand-orange transition-colors">
              {program.title}
            </h3>
            <div className="flex gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                {program.level}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">
                {program.duration}
              </span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">{program.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 bg-brand-purple text-white rounded-[2rem] p-12 text-center shadow-2xl shadow-brand-purple/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,0,0.2),transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl font-headline font-bold mb-4">
            Ready to Start Your Cloud Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join our community and get access to study groups, mentorship, and exclusive certification preparation resources.
          </p>
          <Link
            href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
