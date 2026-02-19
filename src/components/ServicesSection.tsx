import { motion } from "framer-motion";
import { Bot, CalendarCheck, ShieldCheck, Video, Pill, FileSearch } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "Meet Alex, our intelligent AI assistant that helps you find the right healthcare professional based on your symptoms and preferences.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description: "Book appointments with doctors, nurses, and specialists with just a few clicks. Manage your healthcare schedule in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Medical Records",
    description: "Store and access your medical records securely. Share them with healthcare providers as needed, ensuring continuity of care.",
  },
  {
    icon: Video,
    title: "Telemedicine Services",
    description: "Connect with healthcare professionals remotely through video consultations. Get medical advice from the comfort of your home.",
  },
  {
    icon: Pill,
    title: "Medication Tracking",
    description: "Keep track of your medications, dosages, and schedules. Receive reminders to ensure you never miss a dose.",
  },
  {
    icon: FileSearch,
    title: "Lab Results & Imaging",
    description: "View your laboratory results and medical imaging reports online. Share them with your healthcare providers for better coordination.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprehensive healthcare solutions for patients and providers
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
