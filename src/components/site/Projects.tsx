import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import villa from "@/assets/project-villa.jpg";
import office from "@/assets/project-office.jpg";
import inst from "@/assets/project-institutional.jpg";
import interior from "@/assets/project-interior.jpg";
import warehouse from "@/assets/project-warehouse.jpg";

const projects = [
  { img: villa, name: "Residential Villa Complex", cat: "Residential", loc: "Anantapur" },
  { img: office, name: "Commercial Office Tower", cat: "Commercial", loc: "Structural" },
  { img: inst, name: "Institutional Building", cat: "Institutional", loc: "Education" },
  { img: interior, name: "Interior Planning & Design", cat: "Residential", loc: "Anantapur" },
  { img: warehouse, name: "Industrial Warehouse", cat: "Engineering", loc: "Industrial" },
];

const Card = ({ p, large }: { p: typeof projects[number]; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`group relative overflow-hidden bg-brand-black ${large ? "lg:row-span-2 min-h-[420px] lg:min-h-full" : "min-h-[240px]"}`}
  >
    <img
      src={p.img}
      alt={p.name}
      loading="lazy"
      width={1024}
      height={768}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />

    {/* Always-visible label */}
    <div className="absolute top-5 left-5">
      <span className="inline-block bg-brand-red text-white px-2.5 py-1 text-[8px] uppercase tracking-[0.25em] font-medium">
        {p.cat}
      </span>
    </div>

    {/* Bottom name */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
      <h3 className="font-display text-base lg:text-lg leading-snug">{p.name}</h3>
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mt-1">{p.loc}</p>
    </div>

    {/* Hover red overlay */}
    <div className="absolute inset-x-0 bottom-0 bg-brand-red/95 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out h-2/5 flex flex-col justify-end">
      <span className="text-[9px] uppercase tracking-[0.3em] opacity-80 mb-2">{p.cat}</span>
      <h3 className="font-display text-lg lg:text-xl leading-snug mb-2">{p.name}</h3>
      <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-medium">
        View Project <ArrowRight size={12} />
      </span>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-6 h-[2px] bg-brand-red" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
            Our Work
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-black">
            Featured <span className="italic">Projects</span>
          </h2>
          <p className="text-sm text-brand-muted max-w-md">
            A selection of recent works across residential, commercial, institutional
            and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card p={projects[0]} large />
          <Card p={projects[1]} />
          <Card p={projects[2]} />
          <Card p={projects[3]} />
          <Card p={projects[4]} />
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 border border-brand-red text-brand-red text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-brand-red hover:text-white transition-colors"
          >
            View All Projects <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
