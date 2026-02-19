import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Baby, Activity, Check } from "lucide-react";

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
    color: "text-primary",
    bgColor: "bg-primary/10",
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
    color: "text-accent",
    bgColor: "bg-accent/10",
    featured: true,
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
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const CarePackages = () => (
  <section id="packages" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tailored For You</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Care Packages</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprehensive healthcare packages designed for your specific needs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border ${
              pkg.featured ? "border-accent/30 ring-1 ring-accent/20" : "border-border/50"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Popular
              </div>
            )}

            <div className={`w-12 h-12 rounded-xl ${pkg.bgColor} flex items-center justify-center mb-5`}>
              <pkg.icon className={`w-6 h-6 ${pkg.color}`} />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">{pkg.title}</h3>
            <p className="text-sm text-muted-foreground mb-5">{pkg.subtitle}</p>

            <ul className="space-y-3 mb-7">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-5">
              <span className="text-xs text-muted-foreground">KES</span>
              <span className="text-3xl font-extrabold text-foreground ml-1">{pkg.price}</span>
              <span className="text-sm text-muted-foreground ml-1">/ package</span>
            </div>

            <Button
              variant={pkg.featured ? "hero" : "default"}
              className="w-full"
            >
              Book Now
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CarePackages;
