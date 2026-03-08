import { motion } from "framer-motion";
import { CalendarCheck, Clock, UserCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobileImg from "@/assets/mobile-app-scheduling.png";

const steps = [
  {
    icon: UserCheck,
    title: "Choose Your Doctor",
    description: "Browse verified specialists, read reviews, and pick the perfect match.",
  },
  {
    icon: CalendarCheck,
    title: "Pick a Time Slot",
    description: "See real-time availability and book an appointment in seconds.",
  },
  {
    icon: Clock,
    title: "Get Instant Confirmation",
    description: "Receive a booking confirmation with reminders before your visit.",
  },
];

const MobileAppSection = () => (
  <section className="py-12 md:py-24 bg-muted/40 relative overflow-hidden">
    <div className="container px-5">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center lg:justify-end order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/5 rounded-[3rem] blur-2xl" />
            <img
              src={mobileImg}
              alt="Aceso mobile app showing doctor appointment scheduling"
              className="relative w-[220px] md:w-[320px] rounded-[2rem] shadow-2xl"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -right-2 md:-right-4 top-12 md:top-16 glass rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg border border-border/50"
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 md:w-3 h-2.5 md:h-3 fill-accent text-accent" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-foreground">4.9 Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            How It Works
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-5 tracking-tight">
            Book a Doctor in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-8 md:mb-10 max-w-md leading-relaxed">
            Our mobile app makes scheduling appointments effortless. Find the right doctor, pick a time, and you're all set.
          </p>

          <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <step.icon className="w-4 md:w-5 h-4 md:h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-foreground mb-0.5 md:mb-1">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-6 md:px-8 gap-2 text-sm md:text-base"
            asChild
          >
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Download on Play Store
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MobileAppSection;
