import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Specialist Doctors" },
  { value: "34+", label: "Consultations Completed" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const StatsSection = () => (
  <section className="py-12" style={{ background: "var(--gradient-primary)" }}>
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-primary-foreground/70 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
