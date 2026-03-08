import { motion } from "framer-motion";
import { Stethoscope, Home, FlaskConical, Pill, ShoppingBag, ArrowRight, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description:
      "Access verified specialists across 30+ disciplines. Book in-person visits or telemedicine consultations.",
    highlights: ["In-person & video calls", "30+ specialties", "Same-day appointments"],
  },
  {
    icon: Home,
    title: "Home Nursing",
    description:
      "Professional nurses come to you — from wound management and overnight care to medication administration.",
    highlights: ["Wound dressing & management", "Overnight care", "Medication administration"],
    featured: true,
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description:
      "Convenient sample collection at home or walk-in lab visits. Accurate results delivered digitally.",
    highlights: ["Home sample collection", "Digital results delivery", "Accredited partner labs"],
  },
  {
    icon: ShoppingBag,
    title: "Pharmacy Orders",
    description:
      "Order prescription and over-the-counter medication from our verified pharmacy network — delivered to your door.",
    highlights: ["Prescription & OTC medicines", "Doorstep delivery", "Verified pharmacy partners"],
  },
  {
    icon: Bot,
    title: "AI Health Assistant",
    description:
      "Get instant specialist recommendations based on your symptoms and receive quick, personalized healthcare guidance.",
    highlights: ["Symptom-based specialist matching", "Personalized recommendations", "24/7 availability"],
  },
  {
    icon: Pill,
    title: "Medication Tracking & Reminders",
    description:
      "Set personalized medication schedules, receive smart reminders, and track your adherence.",
    highlights: ["Smart dose reminders", "Adherence tracking", "Family medication management"],
    badge: "Mobile App",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
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

    <div className="flex items-center gap-2 mb-2 md:mb-3">
      <h3 className="text-lg md:text-xl font-bold text-foreground">{service.title}</h3>
      {service.badge && (
        <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full">
          <Smartphone className="w-3 h-3" />
          {service.badge}
        </span>
      )}
    </div>
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
      {service.badge ? "Download App" : "Learn More"}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </motion.div>
);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
