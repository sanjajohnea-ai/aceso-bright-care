import { motion } from "framer-motion";
import { Stethoscope, Home, FlaskConical, Pill, ShoppingBag, ArrowRight, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description: "Access verified specialists across 30+ disciplines.",
    highlights: ["In-person & video calls", "30+ specialties", "Same-day appointments"],
    cta: "Book a Doctor",
    link: "/doctors",
  },
  {
    icon: Home,
    title: "Home Nursing",
    description: "Professional nurses come to you for personalised care.",
    highlights: ["Wound dressing & management", "Overnight care", "Medication administration"],
    featured: true,
    cta: "Book a Nurse",
    link: "/nursing",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Convenient sample collection and accurate digital results.",
    highlights: ["Home sample collection", "Digital results delivery", "Accredited partner labs"],
    cta: "Book a Lab Test",
    link: "/laboratory",
  },
  {
    icon: ShoppingBag,
    title: "Pharmacy Orders",
    description: "Prescription and OTC medication delivered to your door.",
    highlights: ["Prescription & OTC medicines", "Doorstep delivery", "Verified pharmacy partners"],
    cta: "Order Medicine",
    link: "/pharmacy",
  },
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "Instant specialist recommendations based on your symptoms.",
    highlights: ["Symptom-based specialist matching", "Personalized recommendations"],
    cta: "Chat with Alex",
  },
  {
    icon: Pill,
    title: "Medication Tracking & Reminders",
    description: "Smart schedules, reminders, and adherence tracking.",
    highlights: ["Smart dose reminders", "Adherence tracking", "Medication management"],
    badge: "Mobile App",
    cta: "Download App",
  },
];

const ServiceCard = ({ service, index, onAction }: { service: typeof services[0]; index: number; onAction?: () => void }) => (
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
    <div className="flex items-start justify-between mb-4 md:mb-6">
      <div
        className={`w-12 md:w-14 h-12 md:h-14 rounded-2xl flex items-center justify-center ${
          service.featured ? "bg-accent/10" : "bg-primary/8"
        }`}
      >
        <service.icon
          className={`w-6 md:w-7 h-6 md:h-7 ${service.featured ? "text-accent" : "text-primary"}`}
          strokeWidth={1.5}
        />
      </div>
      {service.badge && (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full mt-1">
          <Smartphone className="w-3 h-3" />
          {service.badge}
        </span>
      )}
    </div>

    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{service.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">{service.description}</p>

    <ul className="space-y-2 md:space-y-2.5 mb-6 md:mb-8">
      {service.highlights.map((h) => (
        <li key={h} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          {h}
        </li>
      ))}
    </ul>

    {service.link ? (
      <Button
        variant={service.featured ? "hero" : "outline"}
        className="w-full rounded-xl gap-2 group text-sm"
        asChild
      >
        <Link to={service.link}>
          {service.cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    ) : (
      <Button
        variant={service.featured ? "hero" : "outline"}
        className="w-full rounded-xl gap-2 group text-sm"
        onClick={onAction}
      >
        {service.cta}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    )}
  </motion.div>
);

const ServicesSection = ({ onOpenChat }: { onOpenChat?: () => void }) => (
  <section id="core-services" className="py-12 md:py-20 bg-background">
    <div className="container px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3 md:mb-4">
          Complete Healthcare, One Platform
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          From doctor consultations to home nursing and lab tests — Aceso brings every healthcare service to your fingertips.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={i}
            onAction={service.title === "AI Health Assistant" ? onOpenChat : undefined}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
