import { useState } from "react";
import { MapPin, Phone, Clock, Building, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent. We'll be in touch shortly.");
    }, 800);
  };

  const items = [
    {
      icon: MapPin,
      text: "D.No: 15/703, opp. Jonna Iron Mart, Kamalanagar, Anantapur, AP 515001",
    },
    { icon: Phone, text: "095426 30670" },
    { icon: Clock, text: "Opens 10 AM · Monday – Saturday" },
    { icon: Building, text: "Located in Lakshmi Ratna Towers" },
  ];

  return (
    <section id="contact" className="bg-brand-black text-white py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-[2px] bg-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[1.05] mb-6">
            Let's Build <br />
            Together — <span className="italic text-brand-red">Inspire</span>
          </h2>

          <p className="text-sm text-white/60 max-w-md mb-12">
            Reach out for a free consultation today. We respond within one business day.
          </p>

          <ul className="space-y-5 mb-10">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="block w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0" />
                <it.icon size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/85 leading-relaxed">{it.text}</span>
              </li>
            ))}
          </ul>

          {/* Map */}
          <div className="border border-white/10">
            <iframe
              title="S.S. Associates Anantapur"
              src="https://www.google.com/maps?q=Kamalanagar,+Anantapur,+Andhra+Pradesh+515001&output=embed"
              width="100%"
              height="240"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#1a1a1a] p-8 lg:p-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="label-tiny text-white/50 block mb-2">Full Name</label>
              <input required type="text" name="name" placeholder="Your full name" className="form-line-input" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="label-tiny text-white/50 block mb-2">Phone</label>
                <input required type="tel" name="phone" placeholder="+91" className="form-line-input" />
              </div>
              <div>
                <label className="label-tiny text-white/50 block mb-2">Email</label>
                <input required type="email" name="email" placeholder="you@email.com" className="form-line-input" />
              </div>
            </div>
            <div>
              <label className="label-tiny text-white/50 block mb-2">Project Type</label>
              <select required name="type" defaultValue="" className="form-line-input appearance-none cursor-pointer">
                <option value="" disabled className="bg-[#1a1a1a]">Select project type</option>
                <option className="bg-[#1a1a1a]">Architecture</option>
                <option className="bg-[#1a1a1a]">Planning & Layout</option>
                <option className="bg-[#1a1a1a]">Structural Engineering</option>
                <option className="bg-[#1a1a1a]">Property Valuation</option>
              </select>
            </div>
            <div>
              <label className="label-tiny text-white/50 block mb-2">Message</label>
              <textarea required name="message" rows={4} placeholder="Tell us about your project" className="form-line-input resize-none" />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-white hover:text-brand-red transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"} <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
