"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Captain & Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md shadow-sm border-b border-surface-container-low/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <img
            alt="AWS Cloud Club Logo"
            className="h-10 w-10 object-contain transition-transform group-hover:rotate-12"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujeenimgmkVGSGH5ZIB0a1fqk0_MePscqAqmUWS7UBQ0dAogRCUWUM-bviTW0q7FX3jM_4fVvTKNqmQKHsLfOC0wMyTtG-vawLT3iR7Q_chQ6s6EcTrS_6-bkF9BWWL_RXYgCySwvGQux8G1zerEhM4xBcB8X9hewg0VVTfadLuKgqny1jgdk3mjzJfOpNiHFwA79adKFAChzf_8kszxCDIdm68w6INmGhqlKiM30l4FmKnJHkmUUiE4Pz74tH-1AxaRF85F9GBsw4"
          />
          <span className="text-xl font-bold tracking-tighter text-gray-900 font-headline">
            AWS Cloud Club
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
                    ? "text-brand-orange border-b-2 border-brand-orange pb-1"
                    : "text-gray-600 hover:text-brand-orange"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block bg-brand-orange text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all duration-300 active:scale-95 hover:scale-105"
          >
            Become a club member
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
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-surface-container-low shadow-2xl animate-in slide-in-from-top-2 duration-300">
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
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-gray-600 hover:text-brand-orange hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://forms.google.com" target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-brand-orange text-white px-6 py-3 rounded-full font-headline font-bold text-center hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all"
            >
              Become a club member
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
