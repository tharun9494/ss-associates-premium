import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const items = [
  {
    quote:
      "S.S. Associates designed our family home with extraordinary care. Their attention to detail and respect for our budget made the entire process effortless.",
    name: "Ramesh Kumar",
    role: "Homeowner, Anantapur",
    initials: "RK",
  },
  {
    quote:
      "Their structural engineering team delivered our commercial project on time and within budget. Truly the best architecture firm in the region.",
    name: "Lakshmi Devi",
    role: "Director, Sri Sai Builders",
    initials: "LD",
  },
  {
    quote:
      "Property valuation was thorough, professional and bank-ready in record time. We recommend them without hesitation.",
    name: "Anil Reddy",
    role: "Investor, Hindupur",
    initials: "AR",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section className="bg-brand-gray py-24 lg:py-32 relative overflow-hidden">
      {/* Big quote mark */}
      <span
        className="absolute top-8 right-4 lg:right-16 font-display text-[260px] lg:text-[400px] leading-none text-brand-red-soft select-none pointer-events-none"
        aria-hidden
      >
        "
      </span>

      <div className="container relative">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 h-[2px] bg-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
              Testimonials
            </span>
            <span className="block w-6 h-[2px] bg-brand-red" />
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-black">
            What Clients <span className="italic">Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-10 lg:p-16 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-red text-brand-red" />
                ))}
              </div>

              <blockquote className="font-display italic text-lg lg:text-2xl leading-relaxed text-brand-black mb-8">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-brand-gray flex items-center justify-center text-brand-black text-xs font-bold tracking-widest border border-brand-border">
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-brand-red font-bold">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-brand-muted mt-1 uppercase tracking-[0.2em]">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 border border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors rounded-full"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex gap-2">
              {items.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  aria-label={`Go to ${j + 1}`}
                  className={`h-1.5 transition-all ${
                    j === i ? "w-8 bg-brand-red" : "w-1.5 bg-brand-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 border border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors rounded-full"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
