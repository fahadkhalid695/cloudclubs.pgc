import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Team",
};

const coreTeamMembers = [
  {
    name: "Rana Fahad Khalid",
    role: "Founding Captain",
    badge: "Leadership",
    image: "/profile.png",
    bio: "Leading strategy, partnerships, and student growth with a cloud-first vision.",
  },
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

export default function Team() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <section className="mb-16 animate-fade-up">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          People Behind the Club
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 max-w-4xl">
          Meet Our <span className="text-brand-orange">Team</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          We are a student-led team building cloud talent at PGC Muridke through events, mentorship, and real project experience.
        </p>
      </section>

      <section className="mb-20 animate-fade-up animate-stagger-1">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Core Team Members</h2>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">Leadership</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`group rounded-[2rem] border border-brand-purple/15 bg-white p-6 hover-lift card-shine animate-fade-up ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : ""
              }`}
            >
              <div className="aspect-[4/4.2] rounded-2xl overflow-hidden mb-5">
                <Image
                  alt={member.name}
                  width={520}
                  height={540}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={member.image}
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                  {member.badge}
                </span>
              </div>
              <p className="text-brand-orange font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20 animate-fade-up animate-stagger-2">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Team Members</h2>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">Execution Team</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`group rounded-3xl bg-surface-container-low p-4 border border-transparent hover:border-brand-purple/25 hover-lift animate-fade-up ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
              }`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  alt={member.name}
                  width={420}
                  height={420}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={member.image}
                />
              </div>
              <h3 className="font-headline text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-brand-purple font-medium">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-inverse-surface rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden animate-fade-up animate-stagger-3">
        <div className="absolute top-0 right-0 w-56 h-56 bg-brand-orange/20 rounded-full blur-3xl -mr-28 -mt-28" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-purple/20 rounded-full blur-3xl -ml-28 -mb-28" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-5">
            We Are Currently Hiring Team Members
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            If you are passionate about cloud, community building, and leadership, apply now and help us scale the AWS culture at campus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://forms.gle/dbgRxAiYFdLFWfme7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-10 py-4 rounded-xl font-headline font-bold hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] transition-all duration-300 active:scale-95"
            >
              Apply for Team
            </Link>
            <Link
              href="/guidelines"
              className="bg-transparent border border-gray-600 text-white px-10 py-4 rounded-xl font-headline font-bold hover:bg-white/10 transition-all duration-300"
            >
              View Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
