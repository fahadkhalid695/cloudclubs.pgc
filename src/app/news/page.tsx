import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | News",
};

export default function NewsPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <section className="mb-16 animate-fade-up">
        <span className="font-headline text-brand-purple uppercase tracking-widest text-xs font-bold mb-4 block">
          Campus Updates
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Cloud Club <span className="text-brand-orange">News</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Important announcements, sponsorship milestones, recruitment updates, and highlights from our latest cloud activities.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => {
          const isExternal = item.link.startsWith("http");
          return (
            <article
              key={item.id}
              className={`group bg-white border border-brand-purple/10 rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-shine animate-fade-up ${
                index === 1 ? "animate-stagger-1" : index === 2 ? "animate-stagger-2" : index === 3 ? "animate-stagger-3" : ""
              }`}
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={720}
                  height={420}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between mb-4 gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-purple bg-brand-purple/10 px-3 py-1.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-on-surface-variant">{item.date}</span>
                </div>
                <h2 className="text-2xl font-headline font-bold mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">{item.summary}</p>

                {isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-orange font-bold"
                  >
                    {item.linkLabel}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                ) : (
                  <Link href={item.link} className="inline-flex items-center gap-2 text-brand-orange font-bold">
                    {item.linkLabel}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-20 rounded-[2.5rem] bg-inverse-surface p-10 md:p-14 text-center relative overflow-hidden animate-fade-up animate-stagger-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,0,0.25),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-5">
            Want to Be Featured in Club News?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join the team, participate in workshops, and contribute to the community to become part of the next headline.
          </p>
          <a
            href="https://forms.gle/dbgRxAiYFdLFWfme7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-headline font-bold hover:shadow-[0_0_24px_rgba(255,153,0,0.45)] transition-all"
          >
            Apply for Team
          </a>
        </div>
      </section>
    </div>
  );
}
