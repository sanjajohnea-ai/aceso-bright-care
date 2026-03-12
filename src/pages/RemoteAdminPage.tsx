import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServiceQuoteForm from "@/components/ProviderServiceQuoteForm";
import { CalendarCheck, FolderOpen, MessageSquare, Settings, Clock, Heart, TrendingDown, Zap } from "lucide-react";

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

    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Remote Administration Support
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive remote administrative services that allow your facility to run smoothly without the need for an on-site administrative team.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Our Administrative Services
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
          Benefits of Remote Administration
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
      title="Need Administrative Support?"
      description="Get a customized quote for remote admin services"
    />

    <Footer />
  </div>
);

export default RemoteAdminPage;
