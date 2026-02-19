import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Healthcare professionals" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
    </div>

    <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-foreground/10 mb-8"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">Trusted Healthcare Platform</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.05] mb-8 tracking-tight">
            End-to-end
            <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent">Healthcare Management</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-10 leading-relaxed font-body">
            Connect with doctors, nursing services, and laboratories all in one place.
            Our AI assistant Alex helps you find the perfect healthcare professional for your needs.
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

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:grid grid-cols-2 gap-4"
        >
          {[
            { value: "10K+", label: "Patients Served" },
            { value: "200+", label: "Healthcare Pros" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-primary-foreground/10"
            >
              <div className="text-3xl font-extrabold text-primary-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
