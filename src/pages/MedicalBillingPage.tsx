import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { FileText, ShieldCheck, DollarSign, Users, ClipboardList, Building2, Code, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ClipboardList,
    title: "Complete Billing Lifecycle Management",
    desc: "From claim submission to payment reconciliation, we manage every step of your billing process.",
  },
  {
    icon: Building2,
    title: "SHA & Private Insurance Claims",
    desc: "Expert handling of both SHA and private insurance claims with accuracy and compliance.",
  },
  {
    icon: FileText,
    title: "Insurance Panel Registration",
    desc: "Navigate the complexities of multiple insurance providers to expand your patient base.",
  },
  {
    icon: Code,
    title: "Billing Code Compliance",
    desc: "Ensure accuracy and compliance with all billing codes and requirements.",
  },
];

const benefits = [
  { icon: Users, title: "Expert Team", desc: "Years of experience in healthcare billing and compliance" },
  { icon: CheckCircle, title: "Accuracy & Efficiency", desc: "Reduce errors and streamline your billing processes" },
  { icon: ShieldCheck, title: "Compliance & Security", desc: "Full regulatory compliance and data security" },
  { icon: DollarSign, title: "Enhanced Revenue", desc: "Maximize reimbursements and improve cash flow" },
];

const MedicalBillingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container px-5 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
            Provider Services
          </span>
          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Medical Billing &amp; Claims Processing
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive billing lifecycle management from claim submission to payment reconciliation. We handle SHA and private insurance claims with accuracy and compliance.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container px-5">
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight text-center mb-3 md:mb-4">
          Our Billing Services
        </h2>
        <p className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          End-to-end billing solutions tailored for healthcare facilities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
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
          Why Choose Our Billing Services?
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

    <ProviderServiceQuoteForm
      title="Looking for a Medical Billing Quote?"
      description="Get a customized quote for your healthcare facility"
    />

    <Footer />
  </div>
);

export default MedicalBillingPage;
