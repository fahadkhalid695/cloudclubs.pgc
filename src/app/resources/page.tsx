import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Resources",
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
    icon: "group",
    title: "AWS Cloud Club Community",
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
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <div className="mb-16 animate-in fade-in duration-700">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          Learn & Grow
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Cloud <span className="text-brand-orange">Resources</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Curated tools, courses, and documentation to accelerate your AWS
          learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res) => (
          <a
            key={res.title}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-container-low rounded-2xl p-8 border border-brand-purple/5 hover-lift flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <span className="material-symbols-outlined text-brand-orange text-2xl">
                    {res.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                  {res.tag}
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-brand-orange transition-colors">
                {res.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {res.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-brand-orange font-bold text-sm">
              <span>Visit Resource</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 bg-brand-purple text-white rounded-[2rem] p-12 text-center shadow-2xl shadow-brand-purple/20">
        <h2 className="text-3xl font-headline font-bold mb-4">
          Ready to Start Your Cloud Journey?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Join our community and get access to study groups, mentorship, and
          exclusive resources.
        </p>
        <Link
          href="/join"
          className="inline-block bg-white text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
