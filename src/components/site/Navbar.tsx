import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* 3D Glass Navbar */}
      <header
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className={`relative rounded-2xl border transition-all duration-700 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/10 border-white/20"
              : "bg-white/60 backdrop-blur-md shadow-xl shadow-black/5 border-white/30"
          }`}
          style={{
            transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out, background 0.7s, box-shadow 0.7s",
          }}
        >
          {/* Floating glow effect */}
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-red/20 via-transparent to-brand-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: "translateZ(-10px)" }}
          />

          <div className="relative flex items-center justify-between px-6 py-4">
            {/* 3D Logo */}
            <Link
              to="/"
              className="group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative flex items-center gap-3 transition-transform duration-500 group-hover:scale-105"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="relative">
                  <img
                    src={logo}
                    alt="S.S. Associates"
                    className="h-10 w-auto object-contain drop-shadow-lg"
                  />
                  {/* Logo glow */}
                  <div className="absolute inset-0 bg-brand-red/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-brand-black font-bold">
                    S.S. Associates
                  </div>
                </div>
              </div>
            </Link>

            {/* 3D Navigation Links with Shaded Active */}
            <nav className="hidden lg:flex items-center gap-2">
              {links.map((l) => (
                <Link
                  key={l.name}
                  to={l.path}
                  className="group relative px-5 py-2.5"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Shaded background for active */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                      isActive(l.path)
                        ? "bg-brand-red/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(181,39,31,0.2)]"
                        : "bg-transparent group-hover:bg-brand-black/5"
                    }`}
                    style={{ transform: "translateZ(5px)" }}
                  />
                  {/* Active glow effect */}
                  {isActive(l.path) && (
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-red/5 to-transparent blur-sm"
                      style={{ transform: "translateZ(3px)" }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-300 ${
                      isActive(l.path)
                        ? "text-brand-red"
                        : "text-brand-black group-hover:text-brand-red"
                    }`}
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {l.name}
                  </span>
                  {/* Bottom active indicator */}
                  <div
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-brand-red rounded-full transition-all duration-300 ${
                      isActive(l.path) ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ transform: "translateZ(20px)" }}
                  />
                </Link>
              ))}
            </nav>

            {/* 3D CTA Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="group relative hidden md:flex items-center gap-2"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative overflow-hidden rounded-full bg-brand-red px-6 py-3 text-white transition-all duration-500 hover:shadow-xl hover:shadow-brand-red/40"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <span>Get Quote</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              </Link>

              {/* 3D Mobile Toggle */}
              <button
                className="lg:hidden relative group p-3 rounded-xl bg-brand-black/5 hover:bg-brand-red transition-colors duration-300"
                onClick={() => setOpen(!open)}
                style={{ transform: "translateZ(20px)" }}
                aria-label="Menu"
              >
                <div className="relative w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                  <span
                    className={`w-5 h-0.5 bg-brand-black transition-all duration-300 ${
                      open ? "rotate-45 translate-y-2 bg-white" : ""
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-brand-black transition-all duration-300 ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-brand-black transition-all duration-300 ${
                      open ? "-rotate-45 -translate-y-2 bg-white" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* 3D Menu Panel */}
        <div
          className={`absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: open ? "rotateX(0deg)" : "rotateX(-15deg)",
          }}
        >
          <nav className="p-6">
            {links.map((l, index) => (
              <Link
                key={l.name}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between py-4 border-b border-gray-100 last:border-0 transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${index * 80}ms` : "0ms",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      isActive(l.path)
                        ? "bg-brand-red text-white shadow-lg shadow-brand-red/30"
                        : "bg-gray-100 text-brand-muted group-hover:bg-brand-red/10 group-hover:text-brand-red"
                    }`}
                    style={{ transform: "translateZ(10px)" }}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive(l.path) ? "text-brand-red" : "text-brand-black"
                    }`}
                  >
                    {l.name}
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  className={`transition-all duration-300 ${
                    isActive(l.path)
                      ? "text-brand-red translate-x-0"
                      : "text-gray-300 -translate-x-2 group-hover:translate-x-0 group-hover:text-brand-red"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Contact Card */}
          <div className="p-6 bg-gradient-to-br from-brand-red to-red-700 text-white">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80 mb-2">
              Call Us Now
            </p>
            <a
              href="tel:09542630670"
              className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              095426 30670
            </a>
            <p className="text-xs opacity-70 mt-2">Anantapur, AP</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
