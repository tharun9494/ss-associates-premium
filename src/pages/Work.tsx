import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, Users, Building2, Star, Trophy, FileText, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

const workSections = [
  {
    id: "profile",
    icon: Building2,
    title: "Profile",
    subtitle: "Who We Are",
    description: "S.S. Associates is a multi-disciplinary design firm established in 2009, delivering comprehensive architectural solutions across Andhra Pradesh.",
    stats: [
      { label: "Founded", value: "2009" },
      { label: "Projects", value: "500+" },
      { label: "Team", value: "25+" },
      { label: "Cities", value: "12" },
    ],
  },
  {
    id: "people",
    icon: Users,
    title: "People",
    subtitle: "Our Team",
    description: "A collective of architects, engineers, and designers passionate about creating meaningful spaces that enrich lives.",
    team: [
      { role: "Principal Architect", name: "Leadership" },
      { role: "Structural Engineers", name: "Technical Team" },
      { role: "Design Associates", name: "Creative Team" },
      { role: "Project Managers", name: "Operations" },
    ],
  },
  {
    id: "awards",
    icon: Trophy,
    title: "Awards",
    subtitle: "Recognition",
    description: "Our commitment to design excellence has been recognized by industry bodies and clients alike.",
    awards: [
      { year: "2023", title: "Best Residential Design", org: "IIA Andhra Pradesh" },
      { year: "2022", title: "Excellence in Architecture", org: "Architects Association" },
      { year: "2021", title: "Sustainable Design Award", org: "Green Building Council" },
      { year: "2020", title: "Innovation in Planning", org: "Urban Design Forum" },
    ],
  },
  {
    id: "publications",
    icon: BookOpen,
    title: "Publications",
    subtitle: "Featured In",
    description: "Our work has been featured in leading architectural journals and design publications.",
    pubs: [
      { name: "Architecture+Design", issue: "Jan 2024" },
      { name: "Indian Architect & Builder", issue: "Mar 2023" },
      { name: "Better Interiors", issue: "Aug 2023" },
      { name: "Design Matrix", issue: "Dec 2022" },
    ],
  },
  {
    id: "events",
    icon: Calendar,
    title: "Events",
    subtitle: "Activities",
    description: "We regularly participate in industry events, workshops, and community initiatives.",
    events: [
      { title: "Architecture Workshop 2024", date: "March 15, 2024" },
      { title: "Design Thinking Seminar", date: "January 20, 2024" },
      { title: "Student Mentorship Program", date: "Ongoing" },
      { title: "Community Build Project", date: "December 2023" },
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-red/5" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
                Our Work
              </span>
              <h1 className="mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[72px] font-display font-bold leading-[0.95] text-brand-black">
                Building<br />
                <span className="text-brand-red">Excellence.</span>
              </h1>
              <p className="mt-8 text-lg text-brand-muted max-w-xl">
                Explore our journey through architecture, our talented team, 
                recognitions, and the impact we have created.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-12 lg:py-20">
          <div className="container">
            <div className="space-y-24 lg:space-y-32">
              {workSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                        <section.icon size={24} className="text-brand-red" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                        {section.subtitle}
                      </span>
                    </div>
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[48px] font-display font-bold text-brand-black leading-tight">
                      {section.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-relaxed text-brand-muted max-w-md">
                      {section.description}
                    </p>
                  </div>

                  {/* Data Display */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {section.id === "profile" && section.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {section.stats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-red/5 to-transparent border border-brand-red/10"
                          >
                            <div className="text-[24px] sm:text-[28px] lg:text-[40px] font-display font-bold text-brand-red">
                              {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-muted mt-1">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "people" && section.team && (
                      <div className="space-y-4">
                        {section.team.map((member, i) => (
                          <motion.div
                            key={member.role}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-red/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                              <Users size={18} className="text-brand-red" />
                            </div>
                            <div>
                              <div className="font-semibold text-brand-black">{member.name}</div>
                              <div className="text-sm text-brand-muted">{member.role}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "awards" && section.awards && (
                      <div className="space-y-4">
                        {section.awards.map((award, i) => (
                          <motion.div
                            key={award.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-transparent border border-amber-100"
                          >
                            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                              <Award size={18} className="text-amber-600" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-amber-600">{award.year}</span>
                                <Star size={10} className="text-amber-400 fill-amber-400" />
                              </div>
                              <div className="font-semibold text-brand-black mt-1">{award.title}</div>
                              <div className="text-sm text-brand-muted">{award.org}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "publications" && section.pubs && (
                      <div className="grid grid-cols-2 gap-4">
                        {section.pubs.map((pub, i) => (
                          <motion.div
                            key={pub.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-5 rounded-xl bg-gray-50 hover:bg-brand-red/5 transition-colors group"
                          >
                            <FileText size={20} className="text-brand-red mb-3" />
                            <div className="font-semibold text-brand-black text-sm group-hover:text-brand-red transition-colors">
                              {pub.name}
                            </div>
                            <div className="text-xs text-brand-muted mt-1">{pub.issue}</div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {section.id === "events" && section.events && (
                      <div className="space-y-4">
                        {section.events.map((event, i) => (
                          <motion.div
                            key={event.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-brand-red/5 border border-brand-red/10"
                          >
                            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                              <Calendar size={20} className="text-brand-red" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-brand-black">{event.title}</div>
                              <div className="text-sm text-brand-red font-medium">{event.date}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-brand-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-[36px] lg:text-[48px] font-display font-bold text-white leading-tight">
                Ready to start your project?
              </h2>
              <p className="mt-6 text-white/60 text-lg">
                Let's discuss how we can bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-brand-red text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                Get Quote <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Work;
