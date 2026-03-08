import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Healthcare professionals" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
    </div>

    <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
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
          className="inline-block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4"
        >
          #1 Healthcare Platform
        </motion.span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.08] mb-6 tracking-tight">
          Expert Medical Care.
          <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent">
            Anytime, Anywhere.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-10 leading-relaxed font-body">
          Access top doctors, home nursing, and lab services across Kenya. Let our AI assistant Alex match you with the right care in seconds.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" className="rounded-full px-8 gap-2 group">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-8">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Search bar floating at bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-10"
    >
      <div className="flex items-center bg-card rounded-full shadow-card-hover px-5 py-3 gap-3">
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Search for a doctor, specialty, or service..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-body"
        />
        <Button size="sm" className="rounded-full px-5">Search</Button>
      </div>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
