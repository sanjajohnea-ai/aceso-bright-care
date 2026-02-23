import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const points = [
  "Government-registered & verified healthcare professionals",
  "End-to-end encrypted medical records and consultations",
  "Transparent pricing with no hidden fees",
  "Compliant with Kenya & international data protection laws",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-5">
          About Aceso Health
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Aceso Health is Kenya's trusted digital healthcare platform, connecting patients with quality medical professionals. We believe everyone deserves access to expert care — conveniently, affordably, and securely.
        </p>

        <ul className="space-y-4 mb-10">
          {points.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
              </div>
              <span className="text-sm text-foreground font-medium">{p}</span>
            </motion.li>
          ))}
        </ul>

        <Button variant="default" className="rounded-full px-8 gap-2 group">
          Read More About Us
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
