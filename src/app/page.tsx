import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Home",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pgc4.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full text-center">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1]">
              Learn Cloud Skills.<br />Build Real Projects.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Join the AWS Cloud Club at PGC Muridke to grow with workshops, mentorship, and hands-on learning.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
              <Link
                href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-orange text-white px-10 py-4 rounded-full font-body font-bold text-lg shadow-lg hover:bg-[#e68900] transition-all hover:-translate-y-1 hover:shadow-brand-orange/30 active:scale-95"
              >
                Join the Club
              </Link>
              <Link
                href="/programs"
                className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white font-body font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Explore Roadmap
              </Link>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
              <span className="material-symbols-outlined text-white/50 text-4xl">
                mouse
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-4">Who We Are</h2>
              <h3 className="font-headline text-5xl font-bold tracking-tight leading-tight">Empowering students through <span className="text-brand-purple">cloud literacy.</span></h3>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-xl text-on-surface-variant font-light leading-relaxed">
                AWS Cloud Clubs are student-led organizations for higher education students who are passionate about Amazon Web Services (AWS) and Cloud Computing. At the PGC Muridke Campus, we foster an environment of peer-to-peer learning, hands-on experimentation, and professional networking.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                From beginner-friendly orientations to advanced architecture sessions, our programs help students move from curiosity to confidence.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white shadow-sm hover-lift">
                  <span className="block text-5xl font-headline font-bold text-brand-orange">15+</span>
                  <span className="text-sm text-on-surface-variant uppercase tracking-wider font-bold">Expert Mentors</span>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm hover-lift">
                  <span className="block text-5xl font-headline font-bold text-brand-purple">500+</span>
                  <span className="text-sm text-on-surface-variant uppercase tracking-wider font-bold">Members Enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-4">Elevate Your Career</h2>
            <p className="text-on-surface-variant text-lg">Access exclusive resources and a global community designed to accelerate your technical growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div className="md:col-span-2 bg-surface-container-high p-10 rounded-[2.5rem] flex flex-col justify-between group hover:bg-brand-purple/5 transition-all duration-500 hover-lift">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-brand-orange text-3xl">school</span>
                </div>
                <h4 className="text-3xl font-headline font-bold">AWS Certification Support</h4>
                <p className="text-on-surface-variant text-lg max-w-md">Get guided roadmaps and exclusive vouchers for Cloud Practitioner and Solutions Architect certifications.</p>
              </div>
              <Link href="/programs" className="mt-12 flex items-center gap-3 text-brand-orange font-bold group-hover:gap-6 transition-all text-lg w-max">
                <span>View Roadmap</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            {/* Workshops */}
            <div className="bg-brand-purple p-10 rounded-[2.5rem] text-white flex flex-col justify-between shadow-2xl shadow-brand-purple/20 hover-lift">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h4 className="text-3xl font-headline font-bold">Hands-on Workshops</h4>
                <p className="opacity-80 text-lg">Weekly sessions on S3, EC2, Lambda, and SageMaker. Build real projects, not just theory.</p>
              </div>
              <div className="mt-12 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-2/3" />
              </div>
            </div>
            {/* Global Network */}
            <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 hover:border-brand-purple transition-all hover-lift">
              <span className="material-symbols-outlined text-4xl mb-6 text-brand-purple">hub</span>
              <h4 className="text-xl font-headline font-bold mb-3">Global Network</h4>
              <p className="text-on-surface-variant">Connect with Cloud Club members from across the globe and AWS community builders.</p>
            </div>
            {/* Job Placements */}
            <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 hover:border-brand-purple transition-all hover-lift">
              <span className="material-symbols-outlined text-4xl mb-6 text-brand-purple">work</span>
              <h4 className="text-xl font-headline font-bold mb-3">Job Placements</h4>
              <p className="text-on-surface-variant">Direct access to hiring events and cloud-specific job boards through the AWS network.</p>
            </div>
            {/* Free Credits */}
            <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/30 hover:border-brand-purple transition-all hover-lift">
              <span className="material-symbols-outlined text-4xl mb-6 text-brand-purple">auto_stories</span>
              <h4 className="text-xl font-headline font-bold mb-3">Free Credits</h4>
              <p className="text-on-surface-variant">Receive AWS promotional credits to experiment with cloud services at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Latest from Muridke Campus</h2>
              <p className="text-on-surface-variant text-lg">Stay updated with our recent adventures in the cloud ecosystem.</p>
            </div>
            <Link className="text-brand-purple font-bold flex items-center gap-2 hover:underline group hover:scale-105 transition-all" href="/news">
              All News <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Event Card */}
            <div className="group overflow-hidden rounded-[3rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col h-full hover-lift card-shine">
              <div className="overflow-hidden h-72">
                <img
                  alt="Cloud Workshop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3uQZikpvsTeHQT7yJq4L99RiNKRSWhMnuaDb1tb5jOXPTW7238tPV0R6NmxV4--p9HTZNtHrjH-F_WIHu15612MkozXq6AuRiRo6HV-vG57YlMqebm0a6qDrQhooMOxcM0MIpFxBrupJbKv6ADdz_6lopvDjrOFooBDk3S3u0f_kluSPXM3863Dd27vXMgQAecUor6Lk_RnadLSHIzeNzGBcToTOkNM80sgxqpqb6VskV8SJgVvZGnJAzLxAPanpzMuKI9Aa2x9kK"
                />
              </div>
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">Recent Event</div>
                  <h4 className="text-3xl font-headline font-bold mb-4 group-hover:text-brand-purple transition-colors">Serverless Deep Dive 1.0</h4>
                  <p className="text-on-surface-variant text-lg leading-relaxed">Our last workshop covered the fundamentals of AWS Lambda and API Gateway with over 100 students participating in live coding sessions.</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-outline-variant/20 pt-6">
                  <span className="text-sm font-medium text-on-surface-variant">October 12, 2024</span>
                  <Link href="/events/serverless-deep-dive" className="w-12 h-12 rounded-full border border-brand-purple text-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all hover:scale-110">
                    <span className="material-symbols-outlined">north_east</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* News Items */}
            <div className="flex flex-col gap-8">
              <Link href="/team" className="p-8 rounded-3xl bg-surface-container-low hover:bg-white transition-all border border-transparent hover:border-brand-purple/20 flex gap-6 hover-lift cursor-pointer group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-orange text-white flex flex-col items-center justify-center font-headline font-bold shadow-lg">
                  <span className="text-2xl">6</span>
                  <span className="text-xs uppercase">Feb</span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-xl mb-2 group-hover:text-brand-purple">New Captain Appointment</h5>
                  <p className="text-on-surface-variant">Welcoming our new captain for the 2026-27 session. Read their vision for the club.</p>
                </div>
              </Link>
              <Link href="/news" className="p-8 rounded-3xl bg-surface-container-low hover:bg-white transition-all border border-transparent hover:border-brand-purple/20 flex gap-6 hover-lift cursor-pointer group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-brand-purple text-white flex flex-col items-center justify-center font-headline font-bold shadow-lg">
                  <span className="text-2xl">13</span>
                  <span className="text-xs uppercase">March</span>
                </div>
                <div>
                  <h5 className="font-headline font-bold text-xl mb-2 group-hover:text-brand-purple">Official Sponsor</h5>
                  <p className="text-on-surface-variant">We are excited to share an important milestone for our community — AWS Cloud Club PGC has received its first official sponsorship!
A big thank you to Certopus for supporting our initiative.</p>
                </div>
              </Link>
              <div className="flex-grow flex items-center justify-center bg-brand-orange/5 border-2 border-dashed border-brand-orange/20 rounded-[3rem] p-12 text-center">
                <img
                  alt="AWS Logo"
                  className="w-24 opacity-20 grayscale"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujeenimgmkVGSGH5ZIB0a1fqk0_MePscqAqmUWS7UBQ0dAogRCUWUM-bviTW0q7FX3jM_4fVvTKNqmQKHsLfOC0wMyTtG-vawLT3iR7Q_chQ6s6EcTrS_6-bkF9BWWL_RXYgCySwvGQux8G1zerEhM4xBcB8X9hewg0VVTfadLuKgqny1jgdk3mjzJfOpNiHFwA79adKFAChzf_8kszxCDIdm68w6INmGhqlKiM30l4FmKnJHkmUUiE4Pz74tH-1AxaRF85F9GBsw4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-brand-purple rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-purple/40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,0,0.25),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tighter leading-[1.1]">
                Ready to <span className="text-brand-orange">Cloud-Scale</span> your future?
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                No prior experience required. Whether you&apos;re a coder or a dreamer, there&apos;s a place for you in the cloud.
              </p>
              <Link
                href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-brand-orange text-white px-16 py-6 rounded-full font-headline font-extrabold text-2xl shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-brand-orange/40 active:scale-95"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
