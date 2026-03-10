import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      aria-label="Hero — Expert Medical Care"
      className="relative min-h-[65vh] md:min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={heroImg}
          alt="Kenyan healthcare professionals caring for a patient in a modern clinic"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="container relative z-10 pt-28 pb-32 md:pt-44 md:pb-36 px-5">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.15] tracking-tight"
          >
            Expert Medical Care.
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block mt-1 md:mt-2 bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent"
            >
              Anytime, Anywhere.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm md:text-lg text-primary-foreground/75 max-w-md leading-relaxed font-body"
          >
            Access top healthcare providers, home nursing, and lab services across Kenya. Let our AI assistant Alex match you with the right care in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-3 md:gap-4 pt-1"
            role="group"
            aria-label="Get started actions"
          >
            <Button variant="hero" size="lg" className="rounded-full px-6 md:px-8 gap-2 group text-sm md:text-base" asChild>
              <a href="#core-services">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-background" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
