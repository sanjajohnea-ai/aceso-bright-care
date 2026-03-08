import { motion } from "framer-motion";
import { Stethoscope, Home, FlaskConical, Pill, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description:
      "Access verified specialists across 30+ disciplines. Book in-person visits or telemedicine consultations.",
    highlights: ["In-person & video calls", "30+ specialties", "Prescription delivery"],
    link: "#services",
  },
  {
    icon: Home,
    title: "Home Nursing",
    description:
      "Professional nurses come to you — from post-surgery recovery and wound care to elderly support.",
    highlights: ["Post-surgery care", "Elderly & palliative care", "Chronic disease management"],
    featured: true,
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description:
      "Convenient sample collection at home or walk-in lab visits. Accurate results delivered digitally.",
    highlights: ["Home sample collection", "Digital results delivery", "Accredited partner labs"],
  },
];

const ServicesSection = () => (
  <section id="core-services" className="py-12 md:py-24 bg-background">
    <div className="container px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="inline-block text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
          Our Services
        </span>
        <h2 className="text-2xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3 md:mb-4">
          Complete Healthcare, One Platform
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
          From doctor consultations to home nursing and lab tests — Aceso brings every healthcare service to your fingertips.
        </p>
      </motion.div>

      {/* 3-column core services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover ${
              service.featured
                ? "border-accent/30 ring-2 ring-accent/10 shadow-card-hover"
                : "border-border/50 shadow-card"
            }`}
          >
            <div
              className={`w-12 md:w-14 h-12 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${
                service.featured ? "bg-accent/10" : "bg-primary/8"
              }`}
            >
              <service.icon
                className={`w-6 md:w-7 h-6 md:h-7 ${service.featured ? "text-accent" : "text-primary"}`}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{service.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">{service.description}</p>

            <ul className="space-y-2 md:space-y-2.5 mb-6 md:mb-8">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-xs md:text-sm text-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Button
              variant={service.featured ? "hero" : "outline"}
              className="w-full rounded-xl gap-2 group text-sm"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Medication Tracking — wide banner card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="max-w-5xl mx-auto mt-5 md:mt-6"
      >
        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-primary/8 flex items-center justify-center shrink-0">
            <Pill className="w-6 md:w-7 h-6 md:h-7 text-primary" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-lg md:text-xl font-bold text-foreground">Medication Tracking & Reminders</h3>
              <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full">
                <Smartphone className="w-3 h-3" />
                Mobile App
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Never miss a dose. Set personalized medication schedules, receive smart reminders, and track your adherence — all from the Aceso mobile app.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-xl gap-2 group text-sm shrink-0"
            asChild
          >
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Download App
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Browse Specialties link */}
      <div className="flex justify-center mt-8 md:mt-10">
        <Button variant="outline" className="rounded-full px-6 md:px-8 text-sm" asChild>
          <a href="#specialties">
            Browse All 30+ Specialties
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
