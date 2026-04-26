import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";
import a3 from "@/assets/about-3.jpg";
import a4 from "@/assets/about-4.jpg";

const About = () => {
  return (
    <section id="about" className="bg-brand-gray py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-[2px] bg-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
              Our Story
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-black leading-tight mb-8">
            Building Anantapur's <br />
            Skyline <span className="italic text-brand-red">Since 2009</span>
          </h2>

          <p className="text-sm text-brand-muted leading-relaxed mb-5">
            Founded in the heart of Anantapur, S.S. Associates began as a small studio
            with a singular vision — to design spaces that respect tradition while
            embracing modernity. Over fifteen years, we have grown into a multidisciplinary
            firm trusted by homeowners, businesses and institutions across Andhra Pradesh.
          </p>
          <p className="text-sm text-brand-muted leading-relaxed mb-10">
            Every project we undertake is a partnership — combining architectural
            artistry, engineering rigor, and an unwavering commitment to the communities
            we serve.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Multidisciplinary in-house team — architects, engineers & valuers",
              "Government-empanelled property valuers serving banks & individuals",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-brand-black">
                <span className="block w-2 h-2 bg-brand-red mt-1.5 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-brand-red font-medium border-b border-brand-red pb-1 hover:text-brand-black hover:border-brand-black transition-colors"
          >
            Meet Our Team <ArrowRight size={12} />
          </a>
        </motion.div>

        {/* Right image grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3">
            <img src={a1} alt="Architects at work" loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
            <img src={a2} alt="Architectural model" loading="lazy" width={800} height={800} className="w-full aspect-square object-cover mt-8" />
            <img src={a3} alt="Construction site" loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
            <img src={a4} alt="Architectural blueprint" loading="lazy" width={800} height={800} className="w-full aspect-square object-cover mt-8" />
          </div>
          {/* Decorative red square */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-red z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-12 h-12 bg-brand-black z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
