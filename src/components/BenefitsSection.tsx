import { motion } from "framer-motion";
import heroImg from "@/assets/hero-healthcare.jpg";

const BenefitsSection = () => (
  <section className="py-12 md:py-24 bg-background">
    <div className="container px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-10"
      >
        <span className="inline-block text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
          Why Aceso
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3 md:mb-4">
          Benefits for the Patients
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base"
        >
          <p>
            <strong className="text-foreground">Convenience at your fingertips.</strong> Skip the long queues and commute. Book consultations, view lab results, and manage prescriptions from your phone or computer — anytime, anywhere.
          </p>
          <p>
            <strong className="text-foreground">Trusted professionals.</strong> Every doctor, nurse, and lab technician on our platform is government-registered and thoroughly vetted. You're always in safe hands.
          </p>
          <p>
            <strong className="text-foreground">Affordable care packages.</strong> Choose from bundled care plans designed for post-surgery recovery, maternity support, or annual wellness — all at transparent pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
          <img
            src={heroImg}
            alt="Healthcare professionals providing patient care"
            className="relative rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
