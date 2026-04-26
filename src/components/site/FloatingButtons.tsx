import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919542630670"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(181,39,31,0.6)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={22} />
      </a>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 border border-brand-red text-brand-red bg-white text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-brand-red hover:text-white transition-colors"
        >
          <ArrowUp size={12} /> Top
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
