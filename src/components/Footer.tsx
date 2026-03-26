import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-gradient-to-b from-surface-container-lowest to-surface-container-low mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="AWS Cloud Club Logo"
              className="h-8 w-8 hover:rotate-12 transition-transform"
              src="/club_logo.png"
            />
            <span className="text-xl font-bold text-gray-900 font-headline">
              AWS Cloud Club PGC
            </span>
          </div>
          <p className="font-body text-sm text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} AWS Cloud Club - Punjab Group of Colleges, Muridke Campus
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <Link href="/events" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Events</Link>
          <Link href="/news" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">News</Link>
          <Link href="/programs" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Roadmap</Link>
          <Link href="/resources" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Resources</Link>
          <Link href="/guidelines" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Guidelines</Link>
          <Link href="/team" className="text-xs text-on-surface-variant hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Team</Link>
        </div>
        <div className="flex gap-4">
          <a href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110" aria-label="Meetup">
            <span className="material-symbols-outlined text-sm">event</span>
          </a>
          <a href="https://www.linkedin.com/company/aws-cloud-club-pgc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
            <span className="material-symbols-outlined text-sm">work</span>
          </a>
          <a href="https://chat.whatsapp.com/LKpcfS8joSs94WM3UWg0b6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110" aria-label="WhatsApp">
            <span className="material-symbols-outlined text-sm">forum</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
