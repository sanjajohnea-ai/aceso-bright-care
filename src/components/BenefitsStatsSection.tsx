import { motion } from "framer-motion";
import { Check } from "lucide-react";
import nurseMotherImg from "@/assets/nurse-mother-newborn.jpg";

const benefits = [
  "Book consultations, view lab results & manage prescriptions — anytime, anywhere.",
  "Every professional is government-registered and thoroughly vetted.",
  "End-to-end encrypted medical records and consultations.",
  "No hidden fees — clear breakdowns for every service.",
  "Compliant with Kenya's Data Protection Act & international laws.",
];

const stats = [
  { value: "15+", label: "Specialist Doctors" },
  { value: "34+", label: "Consultations Completed" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const BenefitsStatsSection = () => (
  <section className="py-12 md:py-20 bg-background">
    <div className="container px-5">
      {/* Benefits */}
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
          Benefits for Patients
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <ul className="space-y-3 md:space-y-4">
          {benefits.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex items-start gap-3"
            >
              <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" strokeWidth={3} />
              </div>
              <span className="text-xs md:text-sm text-foreground font-medium leading-relaxed">{b}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
          <img
            src={nurseMotherImg}
            alt="Nurse caring for a mother with newborn at home"
            className="relative rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="rounded-2xl py-8 md:py-10 px-6" style={{ background: "var(--gradient-primary)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsStatsSection;
