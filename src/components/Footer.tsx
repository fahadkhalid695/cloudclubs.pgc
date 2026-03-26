import Image from "next/image";
import { Linkedin, Mail, MessageCircle, CalendarDays } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-gradient-to-b from-surface-container-lowest to-surface-container-low mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              alt="AWS Cloud Club Logo"
              width={32}
              height={32}
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
        <div className="hidden lg:block" />
        <div className="flex gap-3 flex-wrap justify-center">
          <a href="https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:scale-110" aria-label="Meetup">
            <CalendarDays size={16} />
          </a>
          <a href="https://www.linkedin.com/company/aws-cloud-club-pgc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="https://chat.whatsapp.com/LKpcfS8joSs94WM3UWg0b6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all hover:scale-110" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
          <a href="mailto:awscloudclubpgc@gmail.com" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all hover:scale-110" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
