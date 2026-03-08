import { motion } from "framer-motion";
import { Stethoscope, Home, FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description:
      "Access verified specialists across 30+ disciplines. Book in-person visits or telemedicine consultations — anytime, from anywhere in Kenya.",
    highlights: ["In-person & video calls", "30+ specialties", "Prescription delivery"],
  },
  {
    icon: Home,
    title: "Home Nursing",
    description:
      "Professional nurses come to you. From post-surgery recovery and wound care to elderly support and chronic disease management — all in the comfort of your home.",
    highlights: ["Post-surgery care", "Elderly & palliative care", "Chronic disease management"],
    featured: true,
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description:
      "Convenient sample collection at home or walk-in lab visits. Get accurate results for blood work, imaging, and diagnostics — delivered digitally.",
    highlights: ["Home sample collection", "Digital results delivery", "Accredited partner labs"],
  },
];

const ServicesSection = () => (
  <section id="core-services" className="py-16 md:py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
          Complete Healthcare, One Platform
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
          From doctor consultations to home nursing and lab tests — Aceso brings every healthcare service to your fingertips.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover ${
              service.featured
                ? "border-accent/30 ring-2 ring-accent/10 shadow-card-hover"
                : "border-border/50 shadow-card"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-accent/10" : "bg-primary/8"
              }`}
            >
              <service.icon
                className={`w-7 h-7 ${service.featured ? "text-accent" : "text-primary"}`}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>

            <ul className="space-y-2.5 mb-8">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Button
              variant={service.featured ? "hero" : "outline"}
              className="w-full rounded-xl gap-2 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
