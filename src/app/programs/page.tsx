import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Roadmap",
};

const roadmapItems = [
  {
    phase: "Seminar 1",
    title: "Introduction to Cloud and Open Source",
    focus: "What cloud computing is, why AWS dominates, and why open source matters.",
    topics: [
      "Traditional vs cloud infrastructure",
      "Overview of AWS services: EC2, S3, IAM",
      "Open-source tools: Linux, Git, Docker",
    ],
    outcome:
      "Members understand why these technologies matter and where they are used in industry.",
  },
  {
    phase: "Seminar 2",
    title: "AWS Core Services Deep Dive",
    focus: "Build conceptual clarity of core AWS building blocks.",
    topics: [
      "EC2 for virtual servers",
      "S3 for cloud storage",
      "IAM for security and access",
      "Basic cloud architecture design",
    ],
    outcome:
      "Members gain strong conceptual understanding of key AWS services.",
  },
  {
    phase: "Seminar 3",
    title: "Careers and Real-World Applications",
    focus: "Industry awareness, career direction, and practical motivation.",
    topics: [
      "Cloud career paths",
      "Role of DevOps and open source in teams",
      "Real-world case studies: streaming, e-commerce, startups",
      "AWS Cloud Practitioner certification path",
    ],
    outcome: "Members leave with clearer career direction and roadmap clarity.",
  },
  {
    phase: "Workshop 1",
    title: "AWS Hands-On (Beginner)",
    focus: "First practical interaction with AWS.",
    topics: [
      "Create AWS Free Tier account",
      "Launch an EC2 instance",
      "Connect through SSH",
      "Upload and run a simple webpage",
    ],
    outcome: "Members deploy their first live server.",
  },
  {
    phase: "Workshop 2",
    title: "Open Source and Deployment",
    focus: "Combine GitHub workflow with AWS deployment.",
    topics: [
      "Create a GitHub repository",
      "Push project code",
      "Deploy using EC2 or simple hosting",
      "Introduction to Docker (optional demo)",
    ],
    outcome: "Members learn real-world workflow from code to deployment.",
  },
];

export default function Programs() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-8">
      <div className="text-center mb-20 animate-fade-up">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          Learning Path
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Club <span className="text-brand-orange">Roadmap</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          A practical progression from cloud basics to deployment workflows. Each phase is designed to build confidence through clarity first, then hands-on execution.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 text-left">
        {roadmapItems.map((item, index) => (
          <div
            key={item.title}
            className={`bg-white p-8 rounded-[1.75rem] border border-brand-purple/15 hover-lift card-shine group animate-fade-up ${
              index % 3 === 1 ? "animate-stagger-1" : index % 3 === 2 ? "animate-stagger-2" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-purple bg-brand-purple/10 px-4 py-2 rounded-full">
                {item.phase}
              </span>
              <span className="material-symbols-outlined text-brand-orange">school</span>
            </div>
            <h3 className="font-bold text-2xl mb-3 font-headline group-hover:text-brand-orange transition-colors">
              {item.title}
            </h3>
            <p className="text-on-surface font-semibold mb-4">Focus: {item.focus}</p>
            <div className="space-y-2 mb-5">
              {item.topics.map((topic) => (
                <p key={topic} className="text-sm text-on-surface-variant leading-relaxed flex items-start gap-2">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  <span>{topic}</span>
                </p>
              ))}
            </div>
            <div className="pt-5 border-t border-outline-variant/30">
              <p className="text-sm text-brand-purple font-medium">Outcome: {item.outcome}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-brand-purple text-white rounded-[2rem] p-12 text-center shadow-2xl shadow-brand-purple/20 relative overflow-hidden animate-fade-up animate-stagger-2">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,0,0.2),transparent_70%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl font-headline font-bold mb-4">
            Start This Roadmap With Us
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join our sessions and build momentum step by step with mentors, peer groups, and real deployment practice.
          </p>
          <Link
            href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95"
          >
            Join the Club
          </Link>
        </div>
      </div>
    </div>
  );
}
