import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { UserCheck, Building, FileText, ClipboardCheck, ShieldCheck, Award, HeadphonesIcon, Users } from "lucide-react";
import { motion } from "framer-motion";

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

    <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container px-5 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
            Provider Services
          </span>
          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Credentialing Services
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Professional credentialing for healthcare professionals and comprehensive compliance support to ensure your facility meets all industry standards and regulatory requirements.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container px-5">
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight text-center mb-3 md:mb-4">
          Our Credentialing Services
        </h2>
        <p className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          Comprehensive credentialing and compliance solutions.
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
          Compliance &amp; Documentation
        </h2>
        <p className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          Stay ahead of regulatory requirements with confidence.
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
      title="Need Credentialing Services?"
      description="Get expert help with healthcare credentialing and compliance"
    />

    <Footer />
  </div>
);

export default CredentialingPage;
