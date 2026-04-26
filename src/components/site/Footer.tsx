import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-brand-red">
      <div className="container py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="S.S. Associates" width={48} height={48} className="w-12 h-12 object-contain" />
            <div>
              <div className="font-display font-bold text-lg leading-none">S.S. Associates</div>
              <div className="text-[8px] uppercase tracking-[0.25em] text-brand-red mt-1 font-medium">
                Architects · Planners · Engineers · Valuers
              </div>
            </div>
          </div>
          <p className="text-xs text-brand-muted leading-relaxed max-w-xs">
            Anantapur's trusted architecture firm since 2009. Designing spaces that
            inspire, planning futures with precision.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: MessageCircle, href: "https://wa.me/919542630670", label: "WhatsApp" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MapPin, href: "https://maps.google.com/?q=Kamalanagar+Anantapur", label: "Maps" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-black transition-colors"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Projects", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-brand-black hover:text-brand-red transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold mb-5">
            Visit Us
          </h4>
          <ul className="space-y-3 text-sm text-brand-black">
            <li className="flex items-start gap-2">
              <Phone size={14} className="text-brand-red mt-1 flex-shrink-0" /> 095426 30670
            </li>
            <li className="flex items-start gap-2 max-w-xs">
              <MapPin size={14} className="text-brand-red mt-1 flex-shrink-0" />
              D.No: 15/703, Lakshmi Ratna Towers, Kamalanagar, Anantapur, AP 515001
            </li>
            <li className="text-xs text-brand-muted uppercase tracking-[0.2em]">
              Open Mon – Sat · 10 AM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-muted">
            © 2025 S.S. Associates · All Rights Reserved
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-muted">
            Anantapur · Andhra Pradesh · India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
