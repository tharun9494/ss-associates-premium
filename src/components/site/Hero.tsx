import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = ["S.S.", "Associates"];
  const subtitleWords = ["Architects", "·", "Planners", "·", "Engineers"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[15%] w-32 h-32 bg-brand-red/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-[10%] w-48 h-48 bg-brand-red/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative pt-20 lg:pt-24">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-8"
        >
          <MapPin size={14} className="text-brand-red" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted font-medium">
            Anantapur, Andhra Pradesh
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-[70vh]">
          {/* Left - Typography */}
          <motion.div
            style={{ y: textY, opacity }}
            className="lg:col-span-7 relative z-10 order-2 lg:order-1 pt-8 lg:pt-0"
          >
            {/* Main title with 3D effect */}
            <div className="relative" style={{ perspective: "1000px" }}>
              <h1 className="font-display font-bold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[120px] leading-[0.9] tracking-tight text-brand-black">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, rotateX: -20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="block"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {word}
                    {i === 1 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="inline-block w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-brand-red rounded-full ml-1 sm:ml-2 align-middle"
                      />
                    )}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 lg:mt-8 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              {subtitleWords.map((word, i) => (
                <span
                  key={i}
                  className={`text-[14px] lg:text-[18px] ${
                    word === "·" ? "text-brand-red" : "text-brand-muted"
                  } uppercase tracking-[0.2em] font-medium`}
                >
                  {word}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-[14px] lg:text-[15px] leading-relaxed text-brand-muted max-w-md"
            >
              Designing spaces that inspire since 2009. Architecture, planning,
              structural engineering & valuation services in Anantapur.
            </motion.p>

            {/* CTA Buttons with 3D hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-red/30 hover:scale-105"
              >
                <span className="relative z-10 text-[11px] uppercase tracking-[0.2em] font-bold">
                  View Projects
                </span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <a
                href="tel:09542630670"
                className="group inline-flex items-center gap-3 border-2 border-brand-black text-brand-black px-8 py-4 rounded-full hover:bg-brand-black hover:text-white transition-all duration-500"
              >
                <Phone size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold">
                  095426 30670
                </span>
              </a>
            </motion.div>

            {/* Stats floating cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6"
            >
              {[
                { num: "15+", label: "Years" },
                { num: "500+", label: "Projects" },
                { num: "5.0", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center px-2 sm:px-0"
                >
                  <div className="text-[22px] sm:text-[28px] lg:text-[36px] font-display font-bold text-brand-black">
                    {stat.num}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-brand-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Floating Image */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* Main circular image container */}
              <div className="relative aspect-square w-[260px] sm:w-[320px] md:w-[380px] lg:w-full max-w-[500px] mx-auto lg:ml-auto">
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-8%] border-2 border-dashed border-brand-red/20 rounded-full"
                />
                
                {/* Image mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={heroImg}
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={16} className="text-white sm:hidden" />
                    <ArrowUpRight size={18} className="text-white hidden sm:block" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-muted">
                      View Work
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-brand-black">
                      Our Portfolio
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements around circle - Hidden on very small screens */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-brand-red rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-brand-red/30"
                >
                  <span className="text-white text-[10px] sm:text-xs font-bold text-center leading-tight">EST<br/>2009</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="hidden sm:block absolute top-1/2 -left-8 -translate-y-1/2 bg-white shadow-lg rounded-xl px-3 py-2"
                >
                  <span className="text-[10px] uppercase tracking-wider text-brand-black font-medium">★ 5.0 Rated</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-brand-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
