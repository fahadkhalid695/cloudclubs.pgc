import { getEventById, eventsData } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function normalizeImg(src: string) {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
}

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
    <div className="pt-32 pb-20">
      <div className="page-shell">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--aws-amber)] transition-all duration-200 hover:gap-3"
        >
          ← Back To Events
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          {/* Hero image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image src={normalizeImg(event.image)} alt={event.title} width={1300} height={620} className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0e14 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-flex rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wide" style={{ background: 'var(--aws-amber)', color: '#000' }}>
                {event.tag}
              </span>
              <h1 className="mt-3 font-headline text-3xl font-bold tracking-tight text-white md:text-5xl">
                {event.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="font-headline text-2xl font-bold text-white">About This Event</h2>
              <p className="mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                {event.longDescription ?? event.description}
              </p>
            </div>

            <aside className="rounded-xl border p-5" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
              <h3 className="font-headline text-xl font-bold text-white">Event Details</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-amber)' }}>Date</p>
                  <p className="mt-1 text-white">{event.date}</p>
                </li>
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-blue)' }}>Time</p>
                  <p className="mt-1 text-white">{event.time}</p>
                </li>
                <li>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--aws-purple)' }}>Location</p>
                  <p className="mt-1 text-white">{event.location}</p>
                </li>
              </ul>
              <a
                href={event.meetupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-xl px-5 py-3 font-headline text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'var(--aws-amber)' }}
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
