import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
        style={{ background: "var(--gradient-primary)" }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsla(0,0%,100%,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsla(0,0%,100%,0.08),_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">Join 10,000+ patients</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-5 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
            Join Aceso Health Solutions today and experience the future of healthcare management.
          </p>
          <Button variant="hero" size="lg" className="rounded-full px-10 gap-2 group">
            Get Started <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
