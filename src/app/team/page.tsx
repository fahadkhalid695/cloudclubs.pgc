import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Captain & Team",
};

const teamMembers = [
  {
    name: "Sarah Ahmed",
    role: "Vice Captain",
    icon: "link",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW4tziVPFdWHSKlGZf7l9b1ZN3azOq_4m9EIluEqgN4TTuOSdfK6DTsTP5TLcqox01YS-q6d8lHTZ191jt35P2gY_v6TRUAxURpY7SS6tuWeGhWr7FT2TZcpdCaiUMZdfZYDhLK_tRVOFdoMyOUzjo-c3rblkQjXXHn2p-Xh8OpaI6hNKTQY-5TLOm8tr0YIJyT4AWIiSegGTX9v77FZ88zJpM3_z35Q_YawBx9fK5V16sUlWLIpZs2dAg6V5e1SNOZN9kArgOiH4Q",
  },
  {
    name: "Ali Raza",
    role: "Tech Lead",
    icon: "terminal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrU3CFt-p02N-DiIiY-_FCRy1UKFJVrG-WzY089Mq89K3wjsxgVbT0cpbmhp7jpiwJxcVdWIkH6DaGl5lTEkaCLzBmGWw2x0o4iafzb3d4hJdoE-XIzfSp7vrBmW6R_dam7TEGv0NZbF9D9bFmQe5sGZ50qw84Ul8_B3bkuAvUu8d4jRMBfreFiFZe5wL_PSkE1lcQ7Wfi6dhOfLfAMncfaTH6i6cZknHYTGwdL4lNfCuF4ZJ35-DY_2qsTafirdt-2wLWnlUVjNF",
  },
  {
    name: "Fatima Zahra",
    role: "Marketing Lead",
    icon: "campaign",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53GJZ5QTXdUjeFqmexeGQNjXGgf3-0yCZcRryTYzOEwcOiRGdHDuESPd2xIVUJQ3d_fLjlUqsPLBMfdD0vTXjYH5lA-x8cr_-t-5n51erSh4aPvL8AqMNH27D7CKlAlPWDNilgtI2-7vJKGU60QPtd5rs1pHyCsOh9EyUs-q_Zj1odWAUFHsB1-U_Ng8oVkDb6ljet7JicrkLpqI9iGI0a2mDC9w3JkygbD6VWpvQDNEdrWGQEFX8npDHIak2GTCetbRI0PJFTdMi",
  },
  {
    name: "Hamza Khalil",
    role: "Logistics Lead",
    icon: "link",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACcEH3-I0XRf19UjreI_MubzGBfiaBWXyZsIqSJqB_F4__LF0hj3x5Hh76aWu0qLHX-XYc6Hbd183-BOkkx7-JxKX7rT7GufG-4ze4oLWNjKVhUbUqDJvi413zDHFZY4xNuuayZ9DIZtzi72vNhgZoopKXexwQOkQHMGla3j60yug36_0pg0dTCFcS0Dc3GXUiknUe57faSb_1h1W0rlsdZAmlMlaPH6lGhWiNNX2_1jbv633TAcqL2MA-IZTIQ1U-3ygF4z8KRcfD",
  },
  {
    name: "Noor Fatima",
    role: "Content Creator",
    icon: "edit_note",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A97YU_nZCBYy93shGgBPywojLqIZlKnauXCj7aSmlGBZLSiH8-86evJbRrHobKq25yTLbmwJd6ZPBmFQLYCkbpNZ0bQxAZF1ToEjkQZ1zR0QnFp6CV4drufu7N-hmfm7fV5sCt8LCN3nvy4YJsGigTM66aCQA9P4vuAltUGMuwYG6XqVdCDSW_REtCnXYTuBXlky-d46eTK5NuT7FhzAZZG2pv3Ay03QGv411S6xqvfLyQLJFL4pZNiIOdmyWAAJg1gBvGP6rRht",
  },
  {
    name: "Bilal Nasir",
    role: "Event Manager",
    icon: "event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYC6Z9GdvmeadxkAuhbaQwUVNZ_f6VlJK1JHZrXe-RUrnqUORlbWBTOBPxdQF10lfXhxKSRDtVKdZMkOA3A5xgGNITnZpGdmVCi3zzEQCP3evONriQpRm-1fYfr2-K-WFSQmS6ST2m08DgkXZAp4kxhb92_1THuVhCSLsH2is_UIZRTfSSz90yWMLJWHEyjU2lnhAZWZAC3WnbhKW2u99eJnaK64PC66RKO1_azGfgIZ_u37kc1m5S5ZcB3krMskwI6to0piXVF0R4",
  },
];

export default function Team() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
              Meet the Architects
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 max-w-3xl">
              Leading the <span className="text-brand-orange">Cloud</span> Revolution.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Our leadership team at the Punjab Group of Colleges, Muridke Campus is committed to fostering a culture of innovation, AWS expertise, and peer-to-peer learning.
            </p>
          </div>
        </div>
      </section>

      {/* Captain Spotlight */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center gap-0 lg:gap-12 group transition-all duration-500 border border-brand-purple/10 hover:border-brand-purple/30">
          <div className="w-full lg:w-1/2 aspect-square relative overflow-hidden">
            <img
              alt=" Rana Fahad Khalid"
              className="w-full h-full object-cover transition-all duration-700"
              src="/profile.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:pr-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-headline text-xs font-extrabold tracking-tight mb-8">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              CLUB Founding CAPTAIN
            </div>
            <h2 className="font-headline text-4xl font-bold mb-4">Rana Fahad Khalid</h2>
            <p className="text-xl text-brand-purple font-headline font-medium mb-8">
              AWS Certified Cloud Foundations
            </p>
            <p className="text-on-surface-variant leading-loose mb-10 text-lg">
              Driving the cloud-first vision at PGC Muridke, Fahad leads the community with a passion for serverless architectures and DevOps automation. He believes in the power of community-driven learning to bridge the gap between academia and industry.
            </p>
            <div className="flex gap-6">
              <span className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-brand-purple hover:text-white transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined">link</span>
              </span>
              <span className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-brand-purple hover:text-white transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined">code</span>
              </span>
              <span className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-brand-purple hover:text-white transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined">alternate_email</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
              The Engine Room
            </span>
            <h2 className="font-headline text-4xl font-bold text-on-surface">Core Team Members</h2>
          </div>
          <div className="h-[2px] flex-grow mx-12 mb-4 bg-surface-container-highest hidden md:block" />
          <p className="text-on-surface-variant font-medium max-w-xs text-right hidden lg:block">
            The brilliant minds managing technical, operations, and community outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative bg-surface-container-low rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/5 hover:-translate-y-2 border border-transparent hover:border-brand-purple/20"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                <img
                  alt={member.role}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={member.image}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-purple transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-sm">{member.icon}</span>
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-on-surface">{member.name}</h3>
                <p className="text-brand-purple font-medium text-sm font-headline uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-inverse-surface rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -ml-32 -mb-32" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Want to be part of the core?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg relative z-10">
            We are always looking for passionate cloud enthusiasts to help us scale the community. Applications open every semester.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link
              href="https://forms.gle/dbgRxAiYFdLFWfme7" target="_blank" rel="noopener noreferrer"
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
