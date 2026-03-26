import { getEventById, eventsData } from "@/data/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return { title: "Event Not Found | AWS Cloud Club PGC" };
  return { title: `${event.title} | AWS Cloud Club PGC` };
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-8">
      {/* Back Button */}
      <Link href="/events" className="inline-flex items-center gap-2 text-brand-purple font-bold hover:gap-4 transition-all mb-8 animate-fade-up">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Events
      </Link>

      <article className="bg-white rounded-[2rem] overflow-hidden border border-outline-variant/20 shadow-xl animate-fade-up animate-stagger-1">
        {/* Banner */}
        <div className="h-64 md:h-96 w-full relative overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            width={1200}
            height={540}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <span className={`inline-block px-4 py-1 rounded-full ${event.tagColor} text-white font-headline text-xs font-bold uppercase tracking-widest mb-4`}>
                {event.tag}
              </span>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-2">{event.title}</h1>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold font-headline mb-4">About this Event</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">{event.longDescription ?? event.description}</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-2xl h-max border border-outline-variant/30 text-on-surface">
              <h4 className="font-bold font-headline mb-6 text-xl">Event Details</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-brand-orange mt-0.5">calendar_today</span>
                  <div>
                    <span className="block text-sm font-bold opacity-70 uppercase tracking-widest">Date</span>
                    <span className="font-medium text-lg">{event.date}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-brand-orange mt-0.5">schedule</span>
                  <div>
                    <span className="block text-sm font-bold opacity-70 uppercase tracking-widest">Time</span>
                    <span className="font-medium text-lg">{event.time}</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-brand-orange mt-0.5">location_on</span>
                  <div>
                    <span className="block text-sm font-bold opacity-70 uppercase tracking-widest">Location</span>
                    <span className="font-medium text-lg text-brand-purple">{event.location}</span>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <a
                  href={event.meetupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-brand-orange text-white py-4 rounded-xl font-headline font-bold hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all hover:-translate-y-1 active:scale-95 text-lg"
                >
                  {event.isPast ? "Watch Recording" : "Register on Meetup"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
