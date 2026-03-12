import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { FileText, ShieldCheck, DollarSign, Users, ClipboardList, Building2, Code, CheckCircle } from "lucide-react";

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

    {/* Hero */}
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Medical Billing &amp; Claims Processing
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive billing lifecycle management from claim submission to payment reconciliation. We handle SHA and private insurance claims with accuracy and compliance.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Billing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Why Choose Our Billing Services?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quote Form */}
    <ProviderServiceQuoteForm
      title="Looking for a Medical Billing Quote?"
      description="Get a customized quote for your healthcare facility"
    />

    <Footer />
  </div>
);

export default MedicalBillingPage;
