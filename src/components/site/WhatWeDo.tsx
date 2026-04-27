import { motion } from "framer-motion";
import { Building2, PenTool, HardHat, FileCheck, Ruler, Home, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Architecture",
    description: "Innovative architectural designs that blend aesthetics with functionality, creating spaces that inspire and endure.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: PenTool,
    title: "Planning",
    description: "Strategic master planning and urban design solutions that optimize space utilization and community flow.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: HardHat,
    title: "Structural Engineering",
    description: "Robust structural solutions ensuring safety, stability, and longevity for every building we design.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: FileCheck,
    title: "Valuation",
    description: "Professional property valuation services providing accurate assessments for residential and commercial assets.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    description: "Thoughtful interior spaces that reflect your personality while maximizing comfort and utility.",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Home,
    title: "Renovation",
    description: "Transform existing spaces with modern upgrades while preserving the character and charm of your property.",
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50/50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
            What We Do
          </span>
          <h2 className="mt-4 text-[28px] sm:text-[32px] lg:text-[48px] font-display font-bold text-brand-black leading-tight">
            Comprehensive Design<br />
            <span className="text-brand-red">Solutions.</span>
          </h2>
          <p className="mt-6 text-[15px] text-brand-muted">
            From concept to completion, we offer end-to-end architectural services 
            tailored to your unique vision and requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-500">
                  <service.icon size={24} className="text-brand-red group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold uppercase tracking-wider">Learn more</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-red transition-colors duration-300 group"
          >
            <span>View All Services</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
