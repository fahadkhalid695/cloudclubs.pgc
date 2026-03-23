import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Community Guidelines",
};

const guidelines = [
  {
    icon: "handshake",
    title: "Respect & Inclusivity",
    description:
      "Treat every member with dignity and respect. We celebrate diversity of thought, background, and experience. Discrimination or harassment of any kind is not tolerated.",
  },
  {
    icon: "forum",
    title: "Constructive Communication",
    description:
      "Engage in discussions with a positive and helpful attitude. Offer constructive feedback and be open to learning from others. Keep all conversations professional.",
  },
  {
    icon: "security",
    title: "Academic Integrity",
    description:
      "Share knowledge freely but give credit where it's due. Do not plagiarize or share copyrighted material. Uphold intellectual honesty in all projects and certifications.",
  },
  {
    icon: "volunteer_activism",
    title: "Active Participation",
    description:
      "Attend workshops, contribute to discussions, and collaborate on projects. The more you put in, the more you get out. Help maintain a vibrant learning community.",
  },
  {
    icon: "shield",
    title: "Privacy & Confidentiality",
    description:
      "Do not share other members' personal information without consent. Keep internal discussions and project details confidential unless agreed upon.",
  },
  {
    icon: "gavel",
    title: "Code of Conduct",
    description:
      "Follow all campus policies and AWS community guidelines. Violations may result in a warning, suspension, or removal from the club at the discretion of the leadership team.",
  },
];

export default function Guidelines() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-8">
      <div className="mb-16 text-center animate-in fade-in duration-700">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          Our Standards
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Community <span className="text-brand-orange">Guidelines</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          To maintain a safe, productive, and welcoming environment for all
          members, we ask everyone to follow these principles.
        </p>
      </div>

      <div className="space-y-6">
        {guidelines.map((item, i) => (
          <div
            key={item.title}
            className="flex items-start gap-6 bg-surface-container-low p-8 rounded-2xl border border-brand-purple/5 hover-lift"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-brand-purple text-2xl">
                {item.icon}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-headline font-bold mb-2">
                <span className="text-brand-orange mr-2">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {item.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
