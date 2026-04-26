import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white border-b border-brand-border">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)] relative">
        {/* Vertical red divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-brand-red z-10" />

        {/* LEFT */}
        <div className="flex items-center px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-6 h-[2px] bg-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
                Anantapur, Andhra Pradesh
              </span>
            </motion.div>

            <h1 className="font-display font-bold leading-[1.05] text-[44px] sm:text-[56px] lg:text-[72px] text-brand-black">
              {["Designing", "Spaces That"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block italic text-brand-red"
              >
                Inspire
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-[13px] leading-relaxed text-brand-muted max-w-[380px]"
            >
              For over 15 years, S.S. Associates has been Anantapur's trusted name in
              architecture, planning, structural engineering and property valuation —
              shaping skylines with precision and purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-4 bg-brand-red text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brand-black transition-colors"
              >
                Our Projects <ArrowRight size={14} />
              </a>
              <a
                href="tel:09542630670"
                className="inline-flex items-center gap-2 px-7 py-4 border border-brand-red text-brand-red bg-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brand-red hover:text-white transition-colors"
              >
                <Phone size={14} /> Call Us Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-brand-muted font-medium"
            >
              <span className="flex items-center gap-1.5">
                <Star size={12} className="fill-brand-red text-brand-red" /> 5.0 Google Rated
              </span>
              <span className="border-l border-brand-border pl-6">500+ Projects</span>
              <span className="border-l border-brand-border pl-6">15 Years</span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative bg-brand-black overflow-hidden min-h-[400px] lg:min-h-0">
          <img
            src={heroImg}
            alt="Modern architecture by S.S. Associates"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />

          {/* Red badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute top-8 right-8 bg-brand-red text-white px-5 py-3 flex items-center gap-2"
          >
            <Star size={14} className="fill-white" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
              5.0 Rated Firm
            </span>
          </motion.div>

          {/* Bottom info */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-[2px] bg-brand-red" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-medium">
                Featured Build
              </span>
            </div>
            <p className="font-display text-xl lg:text-2xl">
              Contemporary Residence — Anantapur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
