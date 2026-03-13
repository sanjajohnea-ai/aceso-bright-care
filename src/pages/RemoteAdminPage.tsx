import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { CalendarCheck, FolderOpen, MessageSquare, Settings, Clock, Heart, TrendingDown, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling & Management",
    desc: "Complete appointment scheduling, patient reminders, cancellations, and rescheduling services.",
  },
  {
    icon: FolderOpen,
    title: "Patient Record Management",
    desc: "Remote patient record management and follow-up services to ensure continuous care.",
  },
  {
    icon: MessageSquare,
    title: "Patient Communication",
    desc: "Handle patient inquiries, appointment confirmations, and follow-up communications.",
  },
  {
    icon: Settings,
    title: "Administrative Task Management",
    desc: "Complete administrative support allowing your staff to focus on patient care.",
  },
];

const benefits = [
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock administrative support for your facility" },
  { icon: Heart, title: "Focus on Patient Care", desc: "Your staff can focus more on patients, less on admin tasks" },
  { icon: TrendingDown, title: "Reduced Overhead", desc: "No need for on-site administrative staff" },
  { icon: Zap, title: "Improved Efficiency", desc: "Streamlined processes and reduced scheduling conflicts" },
];

const RemoteAdminPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container px-5 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
            Provider Services
          </span>
          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Remote Administration Support
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive remote administrative services that allow your facility to run smoothly without the need for an on-site administrative team.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container px-5">
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight text-center mb-8 md:mb-12">
          Our Administrative Services
        </h2>
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
          Benefits of Remote Administration
        </h2>
        <p className="text-muted-foreground text-center text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          A smarter way to manage your facility's operations.
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
      title="Need Administrative Support?"
      description="Get a customized quote for remote admin services"
    />

    <Footer />
  </div>
);

export default RemoteAdminPage;
