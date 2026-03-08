import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const NewsletterSection = () => (
  <section className="py-10 md:py-14" style={{ background: "var(--gradient-primary)" }}>
    <div className="container max-w-2xl text-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-2 md:mb-3 tracking-tight">
          Subscribe to our Newsletter
        </h2>
        <p className="text-primary-foreground/70 mb-6 md:mb-8 text-sm md:text-base">
          Stay updated with health tips, new specialists, and platform updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm outline-none focus:border-primary-foreground/40 transition-colors font-body"
          />
          <Button variant="hero" className="rounded-full px-6 gap-2 text-sm">
            Subscribe <Send className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default NewsletterSection;
