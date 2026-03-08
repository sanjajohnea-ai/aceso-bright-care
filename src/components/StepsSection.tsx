import { motion } from "framer-motion";
import { UserCheck, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Choose Your Healthcare Provider",
    description: "Browse verified healthcare providers, read reviews, and pick the perfect match for your medical needs.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Secure Your Appointment",
    description: "See real-time availability, pay securely online, and book a consultation in seconds.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Consult and Benefit",
    description: "Get expert medical advice via video call or in-person visit. Receive prescriptions and follow-up care.",
  },
];

const StepsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
          How It Works
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
          Get Expert Care in 3 Simple Steps
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
          With Aceso, expert healthcare is just a few clicks away.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5">
              <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
              Step {step.number}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
