import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { UserCheck, Building, FileText, ClipboardCheck, ShieldCheck, Award, HeadphonesIcon, Users } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Healthcare Professional Credentialing",
    desc: "Complete credentialing for physicians, nurses, and staff ensuring they meet industry standards and are fully licensed.",
  },
  {
    icon: Building,
    title: "Hospital Credentialing",
    desc: "Comprehensive hospital credentialing services to ensure seamless operations and compliance.",
  },
  {
    icon: FileText,
    title: "Insurance Panel Registration",
    desc: "Facilitate seamless insurance panel registrations and maintain ongoing compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Documentation",
    desc: "Navigate regulatory documentation and ensure compliance with local and international standards.",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Stay compliant with healthcare laws and regulations" },
  { icon: Award, title: "Quality Standards", desc: "Maintain high quality standards and certifications" },
  { icon: HeadphonesIcon, title: "Ongoing Support", desc: "Continuous compliance monitoring and support" },
  { icon: Users, title: "Expert Team", desc: "Experienced professionals handling your credentialing" },
];

const CredentialingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Credentialing Services
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Professional credentialing for healthcare professionals and comprehensive compliance support to ensure your facility meets all industry standards and regulatory requirements.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Credentialing Services
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

    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Compliance &amp; Documentation
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

    <ProviderServiceQuoteForm
      title="Need Credentialing Services?"
      description="Get expert help with healthcare credentialing and compliance"
    />

    <Footer />
  </div>
);

export default CredentialingPage;
