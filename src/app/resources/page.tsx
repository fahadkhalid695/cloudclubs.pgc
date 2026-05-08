import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Student Builder Group | Resources",
};

const resources = [
  {
    icon: "cloud",
    title: "AWS Free Tier",
    description:
      "Get started with AWS services at no cost. Access 60+ products with the AWS Free Tier.",
    link: "https://aws.amazon.com/free/",
    tag: "Official",
  },
  {
    icon: "school",
    title: "AWS Skill Builder",
    description:
      "Hundreds of free digital courses, learning plans, and certification prep resources from AWS.",
    link: "https://skillbuilder.aws/",
    tag: "Learning",
  },
  {
    icon: "code",
    title: "AWS Documentation",
    description:
      "Comprehensive guides for every AWS service — from EC2 to Lambda to SageMaker.",
    link: "https://docs.aws.amazon.com/",
    tag: "Docs",
  },
  {
    icon: "school",
    title: "AWS Cloud Quest",
    description:
      "Get Gamified Learning for cloud and AI.",
    link: "https://skillbuilder.aws/search?searchText=aws-cloud-quest-cloud-practitioner",
    tag: "Learning",
  },
  {
    icon: "school",
    title: "AI/ML Scholars Program 2026",
    description:
      "Get free learning of AI/ML with practical labs.",
    link: "https://www.udacity.com/scholarships/aws-ai-ml-scholars",
    tag: "Learning",
  },
  {
    icon: "school",
    title: "AWS Educate",
    description:
      "Designed specifically for students and educators.Offers free access to cloud learning content, labs, and even sandbox environments.",
    link: "https://aws.amazon.com/education/awseducate/",
    tag: "Learning",
  },  
  {
    icon: "group",
    title: "AWS Student Builder Group Community",
    description:
      "Connect with cloud clubs worldwide. Share ideas, projects, and collaborate with peers.",
    link: "https://aws.amazon.com/developer/community/students/cloudclubs/",
    tag: "Community",
  },
  {
    icon: "workspace_premium",
    title: "Certification Pathways",
    description:
      "Explore the full range of AWS certifications from foundational to specialty level.",
    link: "https://aws.amazon.com/certification/",
    tag: "Certification",
  },
  {
    icon: "play_circle",
    title: "AWS YouTube Channel",
    description:
      "Watch tutorials, re:Invent sessions, and deep dives into AWS services.",
    link: "https://www.youtube.com/@amazonwebservices",
    tag: "Video",
  },
];

export default function Resources() {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-6 md:px-8">
      <section className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-8 md:p-12 shadow-[0_24px_80px_rgba(22,29,38,0.08)] hero-gradient animate-scale-in">
        <div className="absolute inset-0 surface-grid opacity-35 pointer-events-none" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-brand-purple/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-purple mb-5">
              Learn & Build
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6 text-brand-ink leading-[0.95]">
              Student Builder <span className="text-brand-purple">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Curated tools, courses, and documentation to accelerate your AWS learning journey with a sharper student-first focus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["9", "Curated links"],
              ["4", "Learning paths"],
              ["1", "Builder community"],
              ["24/7", "Self-paced access"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-smooth hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl font-headline font-bold text-brand-ink">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <a
            key={res.title}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm hover-lift card-shine flex flex-col justify-between animate-fade-up transition-smooth ${
              index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple/20 transition-smooth group-hover:scale-105">
                  <span className="material-symbols-outlined text-brand-purple text-2xl">
                    {res.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink bg-slate-100 px-3 py-1 rounded-full">
                  {res.tag}
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-brand-purple transition-smooth">
                {res.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed min-h-20">
                {res.description}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-brand-purple font-bold text-sm border-t border-outline-variant/20 pt-5 transition-smooth">
              <span>Visit Resource</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 rounded-[2.5rem] bg-brand-ink text-white p-12 text-center shadow-2xl shadow-brand-ink/20 relative overflow-hidden animate-scale-in animate-stagger-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(173,92,255,0.28),transparent_60%)]" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-3xl font-headline font-bold mb-4">
            Keep Learning, Keep Building
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Join the AWS Student Builder Group community and get mentorship, real project opportunities, and guided support for cloud careers.
          </p>
          <Link
            href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-ink px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-smooth active:scale-95"
          >
            Join the Group
          </Link>
        </div>
      </div>
    </div>
  );
}
