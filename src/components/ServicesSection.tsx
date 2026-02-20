import { motion } from "framer-motion";
import { Bot, CalendarCheck, ShieldCheck, Video, Pill, FileSearch } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Health Assistant", description: "Find the right doctor based on your symptoms with Alex, our intelligent assistant." },
  { icon: CalendarCheck, title: "Appointment Scheduling", description: "Book doctors, nurses, and specialists with just a few clicks." },
  { icon: ShieldCheck, title: "Secure Medical Records", description: "Store and share your records securely with any provider." },
  { icon: Video, title: "Telemedicine", description: "Video consultations from the comfort of your home." },
  { icon: Pill, title: "Medication Tracking", description: "Dosage schedules and reminders so you never miss a dose." },
  { icon: FileSearch, title: "Lab Results & Imaging", description: "View and share lab reports and imaging online." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background relative">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">What We Offer</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-2 mb-5 tracking-tight">Everything You Need</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          From booking appointments to tracking medications — we've got you covered.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
              <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
