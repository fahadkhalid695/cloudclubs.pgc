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
      <div className="mb-16 animate-fade-up">
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
        {resources.map((res, index) => (
          <a
            key={res.title}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white rounded-[1.75rem] p-8 border border-brand-purple/10 hover-lift card-shine flex flex-col justify-between animate-fade-up ${
              index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors group-hover:scale-105">
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
              <p className="text-on-surface-variant text-sm leading-relaxed min-h-20">
                {res.description}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-brand-orange font-bold text-sm border-t border-outline-variant/20 pt-5">
              <span>Visit Resource</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 bg-brand-purple text-white rounded-[2rem] p-12 text-center shadow-2xl shadow-brand-purple/20 relative overflow-hidden animate-fade-up animate-stagger-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,0,0.22),transparent_65%)]" />
        <div className="relative z-10">
        <h2 className="text-3xl font-headline font-bold mb-4">
          Keep Learning, Keep Building
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Join our community and get mentorship, real project opportunities, and guided support for cloud careers.
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
