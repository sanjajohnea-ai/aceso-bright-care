import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const WellnessPackagePage = () => {
  const navigate = useNavigate();
  const [checks, setChecks] = useState({
    readScope: false,
    onlyIncluded: false,
    additionalCharges: false,
    informedFees: false,
    finalConfirm: false,
  });
  const [showError, setShowError] = useState(false);

  const allChecked = Object.values(checks).every(Boolean);

  const toggle = (key: keyof typeof checks) =>
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleProceed = () => {
    if (!allChecked) {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/booking/wellness");
  };

  return (
    <LegalPageLayout title="Wellness & Preventive Annual Healthcare Package">
      {showError && !allChecked && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          You must agree to all service scope and consent checkboxes before continuing.
        </div>
      )}

      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        The Basic Wellness and Preventive Annual Healthcare Package includes the following routine screening tests and wellness services to support early detection of common health conditions and promote overall well-being.
      </p>

      <LegalSection number="1" title="Hematology">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Complete Blood Count (CBC)
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="2" title="Diabetes Screening">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Fasting Blood Glucose
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Lipid Profile">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {["Total Cholesterol", "High Density Lipoprotein (HDL)", "Low Density Lipoprotein (LDL)", "Triglycerides"].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Kidney Function">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Serum Creatinine
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title="Liver Function">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Alanine Aminotransferase (ALT)
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="6" title="Thyroid Screening">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Thyroid Stimulating Hormone (TSH)
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="7" title="Urine Test">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            Urinalysis
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="8" title="General Health Indicators">
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {["Blood Pressure Measurement", "Body Mass Index (BMI) Assessment", "Weight Measurement"].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number="9" title="Wellness Support">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Nutritional Consultation with a qualified healthcare or nutrition professional to provide guidance on healthy eating and lifestyle practices based on screening results.
        </p>
      </LegalSection>

      {/* Acknowledgment */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5"
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">Patient Acknowledgment and Agreement</h3>
        <p className="text-muted-foreground text-sm mb-5">Before proceeding, please confirm the following:</p>
        <div className="space-y-4">
          {[
            { key: "readScope" as const, label: "I confirm that I have read and understood the scope of services included in the Wellness & Preventive Annual Healthcare Package." },
            { key: "onlyIncluded" as const, label: "I understand that the package includes only the services outlined above." },
            { key: "additionalCharges" as const, label: "I acknowledge that any services requested beyond the defined scope may result in additional charges." },
            { key: "informedFees" as const, label: "I agree that if additional services are required, I will be informed of the applicable fees before they are provided whenever possible." },
          ].map((item) => (
            <label key={item.key} className="flex items-start gap-3 cursor-pointer group">
              <Checkbox checked={checks[item.key]} onCheckedChange={() => toggle(item.key)} className="mt-0.5" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
            </label>
          ))}
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card"
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">Health Screening Disclaimer</h3>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>The screening tests included in this package are intended for routine health monitoring and early detection purposes. Results are not a substitute for comprehensive medical evaluation or diagnosis.</p>
          <p>If any results indicate abnormalities, follow-up consultations or additional tests may be recommended and may incur separate charges.</p>
          <p>By proceeding with the booking, the patient confirms that they understand the nature and limitations of routine wellness screening services.</p>
        </div>
      </motion.div>

      {/* Final Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-8 rounded-2xl border border-accent/20 bg-accent/5"
      >
        <h3 className="font-display font-bold text-lg text-foreground mb-4">Confirmation</h3>
        <label className="flex items-start gap-3 cursor-pointer group mb-6">
          <Checkbox checked={checks.finalConfirm} onCheckedChange={() => toggle("finalConfirm")} className="mt-0.5" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            I confirm that I have read, understood, and agree to the scope of services and the Health Screening Disclaimer.
          </span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="rounded-xl" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="hero" className="rounded-xl" onClick={handleProceed}>
            Proceed to Booking
          </Button>
        </div>
      </motion.div>
    </LegalPageLayout>
  );
};

export default WellnessPackagePage;
