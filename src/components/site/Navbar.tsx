import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = ["Home", "About", "Services", "Projects", "Gallery", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (name: string) => {
    setActive(name);
    setOpen(false);
    const id = name.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b-2 border-brand-red transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => handleClick("Home")} className="flex items-center gap-3 group">
          <img src={logo} alt="S.S. Associates" width={48} height={48} className="w-12 h-12 object-contain" />
          <div className="hidden sm:block text-left">
            <div className="font-display text-lg font-bold leading-none text-brand-black">
              S.S. Associates
            </div>
            <div className="text-[8px] uppercase tracking-[0.25em] text-brand-red mt-1 font-medium">
              Architects · Planners · Engineers · Valuers
            </div>
          </div>
        </button>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center">
          {links.map((l, i) => (
            <button
              key={l}
              onClick={() => handleClick(l)}
              className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                i !== 0 ? "border-l border-brand-border" : ""
              } ${active === l ? "text-brand-red" : "text-brand-black hover:text-brand-red"}`}
            >
              {l}
              {active === l && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-brand-red" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:09542630670"
            className="hidden md:inline-flex items-center px-5 py-3 bg-brand-red text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-brand-black transition-colors"
          >
            Free Consultation
          </a>
          <button
            className="lg:hidden p-2 text-brand-black"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="container flex flex-col py-4">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => handleClick(l)}
                className="text-left py-3 text-[11px] uppercase tracking-[0.2em] border-b border-brand-border last:border-0 hover:text-brand-red"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
