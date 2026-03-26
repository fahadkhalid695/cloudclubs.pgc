import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="AWS Cloud Club Logo"
              className="h-8 w-8 hover:rotate-12 transition-transform"
              src="club_logo.png"
            />
            <span className="text-xl font-bold text-gray-900 font-headline">
              AWS Cloud Club PGC
            </span>
          </div>
          <p className="font-inter text-sm text-gray-500">
            © {new Date().getFullYear()} AWS Cloud Club - Punjab Group of Colleges, Muridke Campus
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Meetup</a>
          <a href="https://www.linkedin.com/company/aws-cloud-club-pgc/" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">LinkedIn</a>
          <a href="https://chat.whatsapp.com/LKpcfS8joSs94WM3UWg0b6" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">WhatsApp</a>
          <a href="#" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Facebook</a>
          <Link href="/guidelines" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Guidelines</Link>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110">
            <span className="material-symbols-outlined text-sm">link</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
