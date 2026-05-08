import Image from "next/image";
import Link from "next/link";
import { CalendarDays, LinkIcon, Mail, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Roadmap", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Resources", href: "/resources" },
];

export default function Footer() {
  return (
    <footer className="mt-24 section-dark">
      <div className="page-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                alt="AWS Student Builder Group logo"
                src="/logo.jpeg"
                width={38}
                height={38}
                className="h-10 w-10 rounded-lg border border-white/20 object-cover"
              />
              <div>
                <p className="font-headline text-lg font-bold tracking-tight">AWS Student Builder Group</p>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">PGC Muridke Chapter</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Student-led cloud learning, practical projects, peer mentorship, and a community culture built for builders.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/82 transition-smooth hover:translate-x-1 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">Connect</h3>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-smooth hover:bg-brand-amber hover:text-brand-ink"
                aria-label="Meetup"
              >
                <CalendarDays size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/aws-cloud-club-pgc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-smooth hover:bg-brand-blue hover:text-brand-ink"
                aria-label="LinkedIn"
              >
                <LinkIcon size={16} />
              </a>
              <a
                href="https://chat.whatsapp.com/LKpcfS8joSs94WM3UWg0b6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-smooth hover:bg-brand-mint hover:text-brand-ink"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:awscloudclubpgc@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-smooth hover:bg-brand-magenta hover:text-brand-ink"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-5 text-xs text-white/55">
          © {new Date().getFullYear()} AWS Student Builder Group - Punjab Group of Colleges, Muridke Campus
        </div>
      </div>
    </footer>
  );
}
