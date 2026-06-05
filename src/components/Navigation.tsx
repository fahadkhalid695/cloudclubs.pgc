"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const links = [
  { name: "Home", href: "/" },
  { name: "Roadmap", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "News", href: "/news" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Resources", href: "/resources" },
  { name: "Guidelines", href: "/guidelines" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-[84rem] px-4 md:px-8 py-4" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="rounded-2xl px-4 py-3 md:px-6 md:py-4 border-b" style={{ background: 'rgba(10,14,20,0.85)', borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group min-w-0">
              <Image src="/program_icon.png" alt="AWS Student Builder Group" width={32} height={32} className="h-8 w-8 rounded-lg object-cover" />
              <span className="font-headline text-sm md:text-base font-bold text-white tracking-tight">AWS Student Builder Group</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link key={link.name} href={link.href} className={`font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 ${isActive ? "text-[var(--aws-amber)]" : "text-[var(--color-on-surface-variant)] hover:text-[var(--aws-amber)]"}`}>
                    {link.name}
                    {isActive && <span className="block h-[2px] mt-0.5 rounded-full bg-[var(--aws-amber)]" />}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton className="hidden md:block" strength={0.3}>
                <motion.span
                  initial={false}
                  whileHover={{ letterSpacing: '0.12em', paddingLeft: 28, paddingRight: 28 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(255,153,0,0.1)', border: '1px solid rgba(255,153,0,0.35)', color: '#FF9900', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, cursor: 'pointer' }}
                >
                  <Link href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
                    Join Club
                  </Link>
                </motion.span>
              </MagneticButton>
              <button onClick={() => setMobileOpen((prev) => !prev)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden lg:hidden">
                <div className="pt-4 pb-2 flex flex-col gap-2">
                  {links.map((link, i) => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                    return (
                      <motion.div key={link.name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)} className={`block px-3 py-2 rounded-lg font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${isActive ? "text-[var(--aws-amber)] bg-[rgba(255,153,0,0.1)]" : "text-[var(--color-on-surface-variant)] hover:text-white"}`}>
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <Link href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-2 block w-full text-center rounded-lg border border-[var(--aws-amber)] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--aws-amber)] hover:bg-[var(--aws-amber)] hover:text-black transition-all">
                      Join Club
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
