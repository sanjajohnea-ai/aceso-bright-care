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
  <section id="services" className="py-12 md:py-24 bg-muted/40">
    <div className="container px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 md:gap-4 mb-8 md:mb-12"
      >
        <div>
          <span className="inline-block text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            Specialties
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Medical Specialties Coverage
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-xs md:text-sm leading-relaxed">
          We partner with specialists, nurses, and accredited labs across all major disciplines so you always find the right care.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {specialties.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="bg-card rounded-xl p-3.5 md:p-5 border border-border/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-9 md:w-10 h-9 md:h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-2.5 md:mb-3 group-hover:bg-primary/15 transition-colors">
              <s.icon className="w-4 md:w-5 h-4 md:h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xs md:text-sm font-bold text-foreground mb-0.5 md:mb-1">{s.name}</h3>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-10">
        <Button variant="outline" className="rounded-full px-6 md:px-8 text-sm">
          View All Specialties
        </Button>
      </div>
    </div>
  </section>
);

export default MedicalSpecialties;
