"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Roadmap", href: "/programs" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Resources", href: "/resources" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl shadow-sm border-b border-white/60">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <Image
            alt="AWS Student Builder Group logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-transform group-hover:rotate-6"
            src="/logo.jpeg"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight text-brand-ink font-headline">
            AWS Student Builder Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-tight">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-brand-purple border-b-2 border-brand-purple pb-1"
                    : "text-slate-600 hover:text-brand-purple"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-ink text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:shadow-[0_0_20px_rgba(22,29,38,0.22)] transition-all duration-300 active:scale-95 hover:scale-105"
          >
            Join the Group
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col px-8 py-6 gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-lg font-headline font-medium transition-all ${
                    isActive
                      ? "text-brand-purple bg-brand-purple/10"
                      : "text-slate-600 hover:text-brand-purple hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-brand-ink text-white px-6 py-3 rounded-full font-headline font-bold text-center hover:shadow-[0_0_20px_rgba(22,29,38,0.22)] transition-all"
            >
              Join the Group
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
