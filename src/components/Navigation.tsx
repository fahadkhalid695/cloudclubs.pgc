"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Roadmap", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Team", href: "/team" },
  { name: "Resources", href: "/resources" },
  { name: "Guidelines", href: "/guidelines" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <div className="page-shell">
        <nav className="section-card rounded-2xl px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group min-w-0">
              <Image
                alt="AWS Student Builder Group logo"
                src="/logo.jpeg"
                width={42}
                height={42}
                className="h-10 w-10 rounded-xl object-cover border border-white shadow-sm transition-smooth group-hover:rotate-6"
              />
              <div className="min-w-0">
                <p className="font-headline text-sm md:text-base font-bold text-brand-ink truncate">
                  AWS Student Builder Group
                </p>
                <p className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-on-surface-variant">
                  PGC Muridke
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 rounded-xl bg-slate-100/75 p-1.5">
              {links.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-smooth ${
                      isActive
                        ? "bg-white text-brand-purple shadow-sm"
                        : "text-on-surface-variant hover:text-brand-ink hover:bg-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex rounded-xl bg-brand-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-smooth hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-ink/25"
              >
                Join Group
              </Link>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden rounded-xl border border-slate-200 bg-white p-2.5 transition-smooth hover:bg-slate-50"
                aria-label="Toggle menu"
              >
                <span className="block h-0.5 w-5 bg-brand-ink transition-smooth" />
                <span className={`mt-1.5 block h-0.5 w-5 bg-brand-ink transition-smooth ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`mt-1.5 block h-0.5 w-5 bg-brand-ink transition-smooth ${mobileOpen ? "-translate-y-2 rotate-45" : ""}`} />
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 lg:hidden animate-fade-up">
              <div className="grid grid-cols-2 gap-2">
                {links.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-smooth ${
                        isActive
                          ? "bg-brand-purple/10 text-brand-purple"
                          : "text-on-surface-variant hover:bg-slate-100 hover:text-brand-ink"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-brand-ink px-4 py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-white"
              >
                Join Group
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
