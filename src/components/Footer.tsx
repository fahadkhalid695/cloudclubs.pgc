'use client';

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, LinkIcon, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0a0e14' }}>
      <div className="page-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Left: logo + tagline */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/program_icon.png"
                alt="AWS Student Builder Group"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-headline text-lg font-bold text-white tracking-tight">
                AWS Student Builder Group
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
              Student-led cloud learning, practical projects, peer mentorship, and a community culture built for builders at PGC Muridke.
            </p>
          </div>

          {/* Middle: quick links */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)] mb-2">Links</span>
            {[
              { name: "Events", href: "/events" },
              { name: "Programs", href: "/programs" },
              { name: "Sponsors", href: "/sponsors" },
              { name: "Resources", href: "/resources" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-[var(--color-on-surface-variant)] transition-colors duration-200 hover:text-[var(--aws-amber)]">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: social icons */}
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:scale-110 hover:text-[var(--aws-amber)]"
              aria-label="Meetup"
            >
              <CalendarDays size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/aws-cloud-club-pgc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:scale-110 hover:text-[var(--aws-amber)]"
              aria-label="LinkedIn"
            >
              <LinkIcon size={18} />
            </a>
            <a
              href="https://chat.whatsapp.com/LKpcfS8joSs94WM3UWg0b6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:scale-110 hover:text-[var(--aws-amber)]"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:awscloudclubpgc@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--color-on-surface-variant)] transition-all duration-200 hover:scale-110 hover:text-[var(--aws-amber)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)] tracking-wide">
            AWS Student Builder Group · PGC Muridke
          </p>
          <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)] tracking-wide">
            v2.0 · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
