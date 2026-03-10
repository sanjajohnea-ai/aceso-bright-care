import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Baby, Activity, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    icon: Heart,
    title: "Post-Surgery Care",
    subtitle: "Recovery Support Package",
    features: [
      "3-day clinical nurse support",
      "Doctor consultation session",
      "Nutrition consultation & meal planning",
      "Wound management & care guidance",
    ],
    price: "12,500",
    link: "/packages/post-surgery",
  },
  {
    icon: Baby,
    title: "Post-Maternity Care",
    subtitle: "New Mom & Baby Package",
    features: [
      "Professional lactation guidance",
      "Daily home nurse visits",
      "Pediatric telemedicine follow-ups",
      "Newborn care & nutrition support",
    ],
    price: "10,800",
    featured: true,
    link: "/packages/post-maternity",
  },
  {
    icon: Activity,
    title: "Wellness & Preventive",
    subtitle: "Annual Health Package",
    features: [
      "Comprehensive annual checkup",
      "Complete blood-work testing",
      "Nutrition consultation & planning",
      "Health monitoring & follow-up",
    ],
    price: "7,500",
  },
];

const CarePackages = () => (
  <section id="packages" className="py-12 md:py-20 bg-muted/40 relative">
    <div className="container px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">Tailored For You</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-2 mb-3 md:mb-5 tracking-tight">Care Packages</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          Bundled care plans tailored to your recovery, wellness, or new chapter in life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border hover:-translate-y-1 ${
              pkg.featured ? "border-accent/30 ring-2 ring-accent/10 md:scale-[1.02]" : "border-border/50"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wide">
                Popular
              </div>
            )}

            <div className={`w-12 md:w-14 h-12 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${
              pkg.featured ? "bg-accent/10" : "bg-primary/8"
            }`}>
              <pkg.icon className={`w-6 md:w-7 h-6 md:h-7 ${pkg.featured ? "text-accent" : "text-primary"}`} strokeWidth={1.5} />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{pkg.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 md:mb-6">{pkg.subtitle}</p>

            <ul className="space-y-3 mb-6 md:mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 md:gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-5 md:mb-6">
              <span className="text-xs text-muted-foreground font-medium">KES</span>
              <span className="text-3xl md:text-4xl font-extrabold text-foreground ml-1.5 tracking-tight">{pkg.price}</span>
              <span className="text-xs md:text-sm text-muted-foreground ml-1">/ package</span>
            </div>

            {pkg.link ? (
              <Button
                variant={pkg.featured ? "hero" : "outline"}
                className="w-full rounded-xl gap-2 group text-sm"
                asChild
              >
                <Link to={pkg.link}>
                  Book Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button
                variant={pkg.featured ? "hero" : "outline"}
                className="w-full rounded-xl gap-2 group text-sm"
              >
                Book Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CarePackages;
