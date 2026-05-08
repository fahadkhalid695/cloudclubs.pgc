import { getEventById, eventsData } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return { title: "Event Not Found | AWS Student Builder Group" };
  return { title: `${event.title} | AWS Student Builder Group` };
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({ id: event.id }));
}

export default async function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 md:pb-24">
      <div className="page-shell">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-purple transition-smooth hover:gap-3">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back To Events
        </Link>

        <article className="mt-6 overflow-hidden rounded-[2rem] section-card animate-scale-in">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image src={event.image} alt={event.title} width={1300} height={620} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className={`badge-chip ${event.tagColor} text-white`}>{event.tag}</span>
              <h1 className="mt-3 font-headline text-3xl font-bold tracking-tight text-white md:text-5xl">{event.title}</h1>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="font-headline text-2xl font-bold tracking-tight text-brand-ink">About This Event</h2>
              <p className="mt-3 text-on-surface-variant leading-relaxed">{event.longDescription ?? event.description}</p>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-headline text-xl font-bold text-brand-ink">Event Details</h3>
              <ul className="mt-4 space-y-4 text-sm text-on-surface-variant">
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-amber">Date</p>
                  <p className="mt-1 text-base text-brand-ink">{event.date}</p>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Time</p>
                  <p className="mt-1 text-base text-brand-ink">{event.time}</p>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">Location</p>
                  <p className="mt-1 text-base text-brand-ink">{event.location}</p>
                </li>
              </ul>
              <a
                href={event.meetupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-brand-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-smooth hover:-translate-y-0.5"
              >
                {event.isPast ? "Watch Recording" : "Register On Meetup"}
              </a>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
