import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Healthcare professionals" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="container relative z-10 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 mb-6">
          <Shield className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Trusted Healthcare Platform</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          End-to-end{" "}
          <span className="block">Healthcare Management</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-10 leading-relaxed">
          Connect with doctors, nursing services, and laboratories all in one place. 
          Our AI assistant Alex helps you find the perfect healthcare professional for your needs.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg">
            Get Started
          </Button>
          <Button variant="hero-outline" size="lg">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
