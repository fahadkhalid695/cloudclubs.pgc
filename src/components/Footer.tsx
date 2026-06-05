'use client';

import Link from "next/link";
import { CalendarDays, LinkIcon, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0a0e14' }}>
      <div className="page-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: logo + tagline */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="pulse-amber-dot inline-block h-3 w-3 rounded-full"
                style={{ background: 'var(--aws-amber)' }}
              />
              <span className="font-headline text-lg font-bold text-white tracking-tight">
                AWS Cloud Club PGC
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
              Student-led cloud learning, practical projects, peer mentorship, and a community culture built for builders at PGC Muridke.
            </p>
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
            AWS Cloud Club · PGC Muridke
          </p>
          <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)] tracking-wide">
            v2.0 · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
