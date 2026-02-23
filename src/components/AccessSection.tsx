import { motion } from "framer-motion";
import { Shield, Users, Lock } from "lucide-react";

const features = [
  { icon: Shield, text: "Verified & credentialed healthcare professionals" },
  { icon: Users, text: "On-demand access to specialists across Kenya" },
  { icon: Lock, text: "End-to-end encrypted medical records" },
];

const AccessSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
            Access to elite specialists, convenience, and secure consultations.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Aceso Health connects you with government-registered doctors, certified nurses, and accredited labs — all from one platform. Whether you need a second opinion, home care, or lab results, we bring quality healthcare to your fingertips.
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-foreground">{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AccessSection;
