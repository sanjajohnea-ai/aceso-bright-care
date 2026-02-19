import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsla(0,0%,100%,0.1),_transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
            Join Aceso Health Solutions today and experience the future of healthcare management.
          </p>
          <Button variant="hero" size="lg" className="gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
