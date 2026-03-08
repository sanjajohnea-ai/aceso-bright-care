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
      {/* Background image — lazy loaded with fade-in */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Kenyan healthcare professionals caring for a patient in a modern clinic"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-28 md:pt-40 md:pb-28 px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-4 md:mb-6 tracking-tight">
            Expert Medical Care.
            <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent">
              Anytime, Anywhere.
            </span>
          </h1>

          <p className="text-base md:text-xl text-primary-foreground/70 max-w-lg mb-7 md:mb-10 leading-relaxed font-body">
            Access top healthcare providers, home nursing, and lab services across Kenya. Let our AI assistant Alex match you with the right care in seconds.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4" role="group" aria-label="Get started actions">
            <Button variant="hero" size="lg" className="rounded-full px-6 md:px-8 gap-2 group text-sm md:text-base" asChild>
              <a href="#services">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-6 md:px-8 text-sm md:text-base" asChild>
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-background" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
