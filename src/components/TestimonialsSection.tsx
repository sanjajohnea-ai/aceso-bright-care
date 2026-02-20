import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mwangi",
    role: "Post-Surgery Patient",
    avatar: "SM",
    rating: 5,
    quote:
      "The post-surgery care package was a lifesaver. My nurse visited daily and the telemedicine follow-ups meant I never felt alone during recovery.",
  },
  {
    name: "James Ochieng",
    role: "Wellness Plan Member",
    avatar: "JO",
    rating: 5,
    quote:
      "Booking appointments used to take hours of phone calls. With Aceso, I had my annual checkup scheduled in under two minutes.",
  },
  {
    name: "Amina Hassan",
    role: "New Mother",
    avatar: "AH",
    rating: 5,
    quote:
      "The maternity care package gave me confidence as a first-time mum. The lactation support and pediatric follow-ups were exceptional.",
  },
  {
    name: "David Kamau",
    role: "Chronic Care Patient",
    avatar: "DK",
    rating: 4,
    quote:
      "Alex, the AI assistant, matched me with a specialist who truly understood my condition. I've never felt more heard by a healthcare provider.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
          Real Stories
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-2 mb-5 tracking-tight">
          What Our Patients Say
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Trusted by thousands of patients across Kenya for quality, convenient care.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-primary/20 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s < t.rating
                      ? "fill-accent text-accent"
                      : "fill-muted text-muted"
                  }`}
                  strokeWidth={0}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
