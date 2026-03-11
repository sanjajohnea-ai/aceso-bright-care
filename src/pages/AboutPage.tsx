import LegalPageLayout from "@/components/LegalPageLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Stethoscope, FileText, TrendingUp, Eye, Target } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const patientBenefits = [
  "Access certified specialists online",
  "Order pharmaceutical products for delivery",
  "Book home-based care and lab sample pick-up",
  "Receive consistent, quality healthcare without leaving your home",
];

const providerBenefits = [
  "Get help with medical billing and hospital credentialing",
  "Reach more patients with less admin stress",
  "Grow your practice and increase profitability",
];

const AboutPage = () => (
  <LegalPageLayout
    title="About Us"
    subtitle="Your complete healthcare experience—online."
  >
    {/* Story Section */}
    <motion.div {...fadeUp}>
      <Card className="border-border/60 shadow-none overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </span>
            <h2 className="font-display font-bold text-lg md:text-xl text-foreground">
              Bringing Healthcare Home
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            At Aceso Health Solutions, we believe that access to quality healthcare should be simple, affordable, and within reach of everyone—no matter where they are. Our name, <strong className="text-foreground">Aceso</strong>, comes from the Greek goddess of healing and recovery, reflecting our mission: to make hospital-grade care accessible online, through a seamless and trustworthy platform.
          </p>
        </CardContent>
      </Card>
    </motion.div>

    {/* What We Do */}
    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
      <Card className="border-border/60 shadow-none overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary" />
            </span>
            <h2 className="font-display font-bold text-lg md:text-xl text-foreground">
              What We Do
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Aceso Health Solutions is a full-service digital healthcare platform that transforms how patients and providers interact. We connect patients with top specialists, offer online pharmaceutical shopping, and make it easy to book home-based nursing care or lab sample collection—all from the comfort of home.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            But we also go further. We support healthcare professionals behind the scenes by offering:
          </p>
          <ul className="space-y-2.5 pl-1">
            {[
              { icon: FileText, text: "Medical billing services to streamline payment processes" },
              { icon: Users, text: "Hospital credentialing support to ensure compliance and professional access" },
              { icon: TrendingUp, text: "Tools to expand patient reach and grow profitability" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                {item.text}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm md:text-[0.938rem] leading-relaxed mt-4">
            Whether you're a patient seeking convenience and care or a medical specialist building a practice, Aceso Health Solutions is designed to support you.
          </p>
        </CardContent>
      </Card>
    </motion.div>

    {/* Why We Exist */}
    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
      <Card className="border-border/60 shadow-none overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
            Why We Exist
          </h2>
          <p className="text-muted-foreground text-sm md:text-[0.938rem] leading-relaxed">
            Healthcare is evolving—and we're here to lead that transformation. Long queues, travel challenges, and limited specialist access shouldn't be barriers to wellness. Aceso Health Solutions was created to close that gap by delivering healthcare with the same standards you'd expect in a hospital, but with the ease of digital access.
          </p>
        </CardContent>
      </Card>
    </motion.div>

    {/* Vision & Mission */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.12 }}>
        <Card className="border-border/60 shadow-none overflow-hidden h-full">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </span>
              <h2 className="font-display font-bold text-lg md:text-xl text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To create a connected healthcare ecosystem that empowers both patients and providers, wherever they are.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
        <Card className="border-border/60 shadow-none overflow-hidden h-full">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </span>
              <h2 className="font-display font-bold text-lg md:text-xl text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To make reliable, affordable, and holistic healthcare accessible to all through innovation, empathy, and collaboration.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>

    {/* For Patients & Providers */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.18 }}>
        <Card className="border-border/60 shadow-none overflow-hidden h-full">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">For Patients</h3>
            <ul className="space-y-2.5">
              {patientBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <Card className="border-border/60 shadow-none overflow-hidden h-full">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">For Providers</h3>
            <ul className="space-y-2.5">
              {providerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>

    {/* Quote */}
    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.22 }}>
      <Card className="border-primary/20 bg-primary/5 shadow-none overflow-hidden">
        <CardContent className="p-6 md:p-10 text-center">
          <blockquote className="text-lg md:text-xl font-display font-semibold text-foreground italic leading-relaxed mb-5">
            "Aceso Health Solutions isn't just a service—it's a smarter way to experience healthcare."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {["Reliable", "Convenient", "Trusted"].map((word) => (
              <span key={word} className="text-xs font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                {word}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </LegalPageLayout>
);

export default AboutPage;
