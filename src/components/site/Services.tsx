import { motion } from "framer-motion";
import { Compass, Ruler, Building2, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    n: "01",
    icon: Compass,
    name: "Architecture Design",
    desc: "Innovative spaces that inspire generations.",
  },
  {
    n: "02",
    icon: Ruler,
    name: "Planning & Layout",
    desc: "Precision in every blueprint and measurement.",
  },
  {
    n: "03",
    icon: Building2,
    name: "Structural Engineering",
    desc: "Built to last, engineered to perfection.",
  },
  {
    n: "04",
    icon: ClipboardCheck,
    name: "Property Valuation",
    desc: "Trusted assessments for confident decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-medium whitespace-nowrap">
            What We Do
          </span>
          <span className="flex-1 h-[1px] bg-brand-red" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-black max-w-2xl">
            Our Core Services
          </h2>
          <p className="text-sm text-brand-muted max-w-md">
            Four disciplines, one studio. Every project benefits from end-to-end
            expertise — from concept sketches to certified valuations.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-brand-border">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-10 lg:p-14 bg-white border-brand-border ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < 2 ? "md:border-b" : ""} border-b md:border-b-0 ${
                i < 2 ? "border-b" : ""
              }`}
            >
              {/* Hover red left border */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

              {/* Number */}
              <span className="absolute top-6 right-6 font-display text-[64px] leading-none font-bold text-brand-gray select-none">
                {s.n}
              </span>

              <s.icon size={28} className="text-brand-red mb-8" strokeWidth={1.5} />

              <h3 className="text-base font-medium text-brand-black mb-3 font-sans">
                {s.name}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-6 max-w-xs">
                {s.desc}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-brand-red font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Explore <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
