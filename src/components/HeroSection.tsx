import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => (
  <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Healthcare professionals" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="container relative z-10 pt-24 pb-28 md:pt-40 md:pb-28 px-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3 md:mb-4"
        >
          #1 Healthcare Platform
        </motion.span>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-4 md:mb-6 tracking-tight">
          Expert Medical Care.
          <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent">
            Anytime, Anywhere.
          </span>
        </h1>

        <p className="text-base md:text-xl text-primary-foreground/70 max-w-lg mb-7 md:mb-10 leading-relaxed font-body">
          Access top doctors, home nursing, and lab services across Kenya. Let our AI assistant Alex match you with the right care in seconds.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <Button variant="hero" size="lg" className="rounded-full px-6 md:px-8 gap-2 group text-sm md:text-base">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-6 md:px-8 text-sm md:text-base">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>


    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
