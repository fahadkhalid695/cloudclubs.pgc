import { Metadata } from "next";
import Link from "next/link";
import { getFeaturedEvent, getUpcomingEvents, getPastEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "AWS Cloud Club PGC | Events",
};

export default function Events() {
  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6 md:px-8">
      {/* Featured Event Hero */}
      {featuredEvent && (
        <section className="relative mb-16 overflow-hidden rounded-xl bg-inverse-surface text-white">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #ff9900 0%, transparent 50%), radial-gradient(circle at 80% 70%, #6b4fa9 0%, transparent 50%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 items-center gap-12 p-8 md:p-16">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-brand-orange text-white font-headline text-xs font-bold uppercase tracking-widest mb-6">
                Featured Event
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-6 leading-none">
                {featuredEvent.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-md">
                {featuredEvent.description}
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">calendar_today</span>
                  <span className="text-sm font-medium">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-orange">location_on</span>
                  <span className="text-sm font-medium">{featuredEvent.location}</span>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={featuredEvent.meetupLink}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-brand-orange text-white px-8 py-4 rounded-full font-headline font-bold transition-all hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] hover:scale-105 active:scale-95"
                >
                  Register Now
                </a>
                <Link href={`/events/${featuredEvent.id}`} className="block border border-gray-500 px-8 py-4 rounded-full font-headline font-bold hover:bg-white/10 transition-all hover:scale-105">
                  Event Details
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Featured Event environment"
                  className="w-full h-full object-cover"
                  src={featuredEvent.image}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-purple p-6 rounded-xl shadow-xl -rotate-6">
                <span className="text-3xl font-bold text-white">$2,000+</span>
                <p className="text-xs uppercase tracking-tighter font-bold text-white/80">
                  In AWS Credits & Prizes
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events List Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold font-headline tracking-tight mb-2">Explore Events</h2>
          <p className="text-on-surface-variant">Workshops, seminars, and networking sessions.</p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.title}
            className="group bg-surface-container-low rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className={`absolute top-4 right-4 ${event.tagColor} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                {event.tag}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-brand-purple">event</span>
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-brand-purple">schedule</span>
                  {event.time}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
                <Link href={`/events/${event.id}`} className="before:absolute before:inset-0">
                  {event.title}
                </Link>
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">{event.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20 relative z-10">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <span className="material-symbols-outlined text-sm text-brand-purple">
                    {event.location === "Online" ? "map" : "location_on"}
                  </span>
                  {event.location}
                </div>
                <a
                  href={event.meetupLink}
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm font-bold text-brand-orange flex items-center gap-1 group/btn hover:text-[#ff9900]"
                >
                  Register
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past Events Section */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold font-headline mb-8">Recent Recaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="flex gap-6 p-6 rounded-xl bg-surface-container-highest/30 items-center hover:bg-surface-container-highest/50 transition-colors duration-300 relative"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img
                  alt={event.title}
                  className="w-full h-full object-cover"
                  src={event.image}
                />
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  <Link href={`/events/${event.id}`} className="before:absolute before:inset-0">
                    {event.title}
                  </Link>
                </h4>
                <p className="text-sm text-on-surface-variant mb-3">{event.description}</p>
                <a href={event.meetupLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-purple hover:text-brand-orange underline underline-offset-4 transition-colors cursor-pointer relative z-10">
                  Watch Recording
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
