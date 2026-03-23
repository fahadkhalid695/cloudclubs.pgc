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
              src="https://lh3.googleusercontent.com/aida/ADBb0ujeenimgmkVGSGH5ZIB0a1fqk0_MePscqAqmUWS7UBQ0dAogRCUWUM-bviTW0q7FX3jM_4fVvTKNqmQKHsLfOC0wMyTtG-vawLT3iR7Q_chQ6s6EcTrS_6-bkF9BWWL_RXYgCySwvGQux8G1zerEhM4xBcB8X9hewg0VVTfadLuKgqny1jgdk3mjzJfOpNiHFwA79adKFAChzf_8kszxCDIdm68w6INmGhqlKiM30l4FmKnJHkmUUiE4Pz74tH-1AxaRF85F9GBsw4"
            />
            <span className="text-xl font-bold text-gray-900 font-headline">
              AWS Cloud Club
            </span>
          </div>
          <p className="font-inter text-sm text-gray-500">
            © {new Date().getFullYear()} AWS Cloud Club - Punjab Group of Colleges, Muridke Campus
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a href="#" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">Meetup</a>
          <a href="#" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">LinkedIn</a>
          <a href="#" className="text-xs text-gray-500 hover:text-brand-purple transition-all hover:translate-y-[-2px] hover:underline decoration-brand-purple underline-offset-4">WhatsApp</a>
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
