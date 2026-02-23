import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Brain, Heart, Baby, Eye, Bone,
  Microscope, Pill, Syringe, Activity, Ribbon, Ear,
} from "lucide-react";

const specialties = [
  { icon: Stethoscope, name: "General Medicine", desc: "Primary care & internal medicine consultations" },
  { icon: Brain, name: "Neurology", desc: "Brain, spine & nervous system specialists" },
  { icon: Heart, name: "Cardiology", desc: "Heart & cardiovascular care" },
  { icon: Baby, name: "Pediatrics", desc: "Specialized care for children & infants" },
  { icon: Eye, name: "Ophthalmology", desc: "Eye care & vision specialists" },
  { icon: Bone, name: "Orthopedics", desc: "Bone, joint & musculoskeletal care" },
  { icon: Ribbon, name: "Oncology", desc: "Cancer diagnosis, treatment & support" },
  { icon: Ear, name: "ENT", desc: "Ear, nose & throat specialists" },
  { icon: Microscope, name: "Dermatology", desc: "Skin conditions & cosmetic dermatology" },
  { icon: Pill, name: "Pharmacy", desc: "Medication management & prescriptions" },
  { icon: Syringe, name: "Lab Services", desc: "Blood work, imaging & diagnostics" },
  { icon: Activity, name: "Physiotherapy", desc: "Rehabilitation & physical therapy" },
];

const MedicalSpecialties = () => (
  <section id="services" className="py-16 md:py-24 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
      >
        <div>
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
            Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Medical Specialties Coverage
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          We partner with specialists across all major disciplines so you always find the right doctor.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialties.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="bg-card rounded-xl p-5 border border-border/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1">{s.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="outline" className="rounded-full px-8">
          View All Specialties
        </Button>
      </div>
    </div>
  </section>
);

export default MedicalSpecialties;
