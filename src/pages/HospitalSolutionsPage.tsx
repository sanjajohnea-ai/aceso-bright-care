import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Monitor, Zap, Video, Package, Layers, Settings, ShieldCheck, HeartPulse, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Monitor,
    title: "Digital Transformation",
    desc: "Seamless integration of EMR/EHR systems and digital patient records to modernize your facility.",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "Optimize workflows, reduce wait times, and improve resource allocation across departments.",
  },
  {
    icon: Video,
    title: "Telemedicine Integration",
    desc: "Expand your reach with built-in video consultation and remote patient monitoring capabilities.",
  },
  {
    icon: Package,
    title: "Supply Chain Management",
    desc: "Advanced inventory tracking for pharmacy and medical supplies to prevent stockouts.",
  },
];

const benefits = [
  { icon: Layers, title: "Scalable Systems", desc: "Solutions that grow with your institution" },
  { icon: Settings, title: "Seamless Integration", desc: "Works with your existing infrastructure" },
  { icon: ShieldCheck, title: "Data Security", desc: "Enterprise-grade protection for patient data" },
  { icon: HeartPulse, title: "Better Outcomes", desc: "Improved patient satisfaction and care quality" },
];

const HospitalSolutionsPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-5 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
              Hospital Solutions
            </span>
            <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Customized Hospital Solutions
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital and operational solutions tailored to streamline hospital management, enhance patient care, and optimize workflow efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 p-5 md:p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 shadow-card"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/40">
        <div className="container px-5">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight text-center mb-3 md:mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
            Trusted by healthcare facilities across the region.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-4 md:p-6"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <b.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1 md:mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container px-5 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Get a Customized Solution
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">Contact us to discuss your hospital's specific needs</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-card rounded-2xl shadow-lg p-6 md:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="First Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Phone" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="facility">Facility Name</Label>
              <Input id="facility" placeholder="Facility Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Location" />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="sms" checked={smsConsent} onCheckedChange={(v) => setSmsConsent(v === true)} className="mt-0.5" />
              <Label htmlFor="sms" className="text-sm text-muted-foreground font-normal leading-snug">
                By clicking this box, you agree to receive SMS
              </Label>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="privacy" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} className="mt-0.5" />
              <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal leading-snug">
                I agree to the{" "}
                <a href="/privacy" className="text-primary underline hover:text-primary/80">Privacy Policy</a>
              </Label>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full text-base">
              Request Consultation
            </Button>
          </form>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-5 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Ready to Transform Your Hospital?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-6">
              Let's build a smarter, more efficient healthcare future together
            </p>
            <Button variant="hero" size="lg" className="rounded-full gap-2 group" asChild>
              <a href="#get-started">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalSolutionsPage;
