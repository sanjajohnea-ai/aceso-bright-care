import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PostMaternityPackagePage = () => {
  const navigate = useNavigate();
  const [checks, setChecks] = useState({
    readScope: false,
    onlyIncluded: false,
    additionalCharges: false,
    informedFees: false,
    finalConfirm: false,
  });

  const allChecked = Object.values(checks).every(Boolean);

  const toggle = (key: keyof typeof checks) =>
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <LegalPageLayout
      title="Post-Maternity Care Package"
      subtitle="Scope of Services Confirmation"
    >
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        Please review the scope of services included in this package before confirming your booking.
      </p>

      <LegalSection number={0} title="Package Overview">
        <p className="text-muted-foreground text-sm leading-relaxed">
          The Standard Post-Maternity Care Package provides short-term professional support to assist mothers and newborns during the early days after hospital discharge. Services are coordinated through licensed healthcare partners to support maternal recovery and newborn care at home.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="font-semibold text-foreground text-sm">Package Duration</p>
          <p className="text-muted-foreground text-sm mt-1">3 days of coordinated post-maternity support beginning from the first scheduled home visit.</p>
        </div>
      </LegalSection>

      <LegalSection number={1} title="Home Nursing Care">
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          A licensed nurse from a partnered home nursing facility will provide in-home maternal and newborn support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Duration</p>
            <p className="text-sm text-muted-foreground">3 consecutive days</p>
            <p className="text-sm text-muted-foreground">Up to 3 hours per visit per day</p>
          </div>
        </div>

        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 mt-4">Maternal Health Monitoring</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
          {[
            "Monitor vital signs including blood pressure, pulse, temperature, and respiration",
            "Observe recovery following vaginal delivery or cesarean section",
            "Monitor bleeding levels and general postpartum recovery",
            "Assess comfort levels and recovery progress",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Post-Delivery Recovery Support</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
          {[
            "Provide guidance on post-delivery hygiene and recovery care",
            "Offer guidance for cesarean incision or perineal care where applicable",
            "Support safe mobility and recovery positioning",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Breastfeeding Support</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
          {[
            "Provide guidance on breastfeeding positioning and latching",
            "Support feeding routines and frequency guidance",
            "Identify common breastfeeding challenges and provide basic guidance",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Newborn Monitoring</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
          {[
            "Observe the newborn's general health and behavior",
            "Monitor feeding patterns and hydration",
            "Observe sleeping patterns and comfort levels",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Parental Guidance</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {[
            "Demonstrate safe newborn handling techniques",
            "Provide guidance on diapering, bathing, and newborn hygiene",
            "Educate caregivers on safe newborn care practices",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={2} title="Teleconsultation with a Doctor">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Duration</p>
            <p className="text-sm text-muted-foreground">1 online consultation</p>
            <p className="text-sm text-muted-foreground">Approximately 20–30 minutes</p>
          </div>
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {[
            "Review maternal recovery following childbirth",
            "Address concerns related to pain, bleeding, or postpartum recovery",
            "Provide medical guidance regarding medications if applicable",
            "Review general newborn health concerns and answer caregiver questions",
            "Provide recommendations for continued recovery and care",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={3} title="Nutritional Consultation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Duration</p>
            <p className="text-sm text-muted-foreground">1 consultation session</p>
            <p className="text-sm text-muted-foreground">Approximately 30 minutes</p>
          </div>
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {[
            "Provide guidance on nutrition that supports postpartum recovery",
            "Recommend foods that support healing and energy restoration",
            "Provide dietary guidance to support breastfeeding",
            "Recommend hydration practices and balanced meal planning",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={4} title="Newborn Care Guidance and Support">
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          Support will be provided during the scheduled nursing visits.
        </p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {[
            "Provide guidance on newborn feeding routines",
            "Demonstrate safe baby bathing techniques",
            "Provide guidance on cord care and hygiene",
            "Educate parents on newborn sleep practices",
            "Teach parents how to identify early warning signs requiring medical attention",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={0} title="Services Not Included in the Package">
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          The following services are not included unless separately arranged:
        </p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {[
            "Additional nursing visits beyond the scheduled 3 visits",
            "Extended nursing hours beyond the allocated visit time",
            "Emergency medical services",
            "Pediatric vaccinations",
            "Hospital visits or transport",
            "Medical supplies or medications",
            "Specialized lactation therapy or pediatric consultation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm mt-3 italic">Additional services may incur separate charges.</p>
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
            { key: "readScope" as const, label: "I confirm that I have read and understood the scope of services included in the Standard Post-Maternity Care Package." },
            { key: "onlyIncluded" as const, label: "I understand that the package includes only the services outlined above." },
            { key: "additionalCharges" as const, label: "I acknowledge that services requested beyond the defined scope may result in additional charges." },
            { key: "informedFees" as const, label: "I agree that if additional services are required, I will be informed of any applicable fees before those services are provided whenever possible." },
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
        <h3 className="font-display font-bold text-lg text-foreground mb-4">Home Care Liability and Medical Disclaimer</h3>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>Services arranged through this platform are intended for non-emergency maternal and newborn support and are delivered by licensed healthcare professionals from partnered facilities.</p>
          <p>Home care services are designed to support recovery and newborn care but do not replace hospital care or emergency medical treatment.</p>
          <p>If the mother or newborn experiences serious symptoms including but not limited to:</p>
          <ul className="space-y-1.5 pl-1">
            {["Heavy bleeding", "Difficulty breathing", "High fever", "Severe pain", "Loss of consciousness", "Signs of newborn distress"].map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <p>Immediate medical attention should be sought by contacting emergency services or visiting the nearest hospital.</p>
          <p>Healthcare professionals providing services through this platform operate as independent licensed providers. Medical advice, treatment decisions, and clinical care remain the responsibility of the attending healthcare provider.</p>
          <p>By proceeding with the booking, the patient confirms that they understand the nature and limitations of home-based care services.</p>
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
            I confirm that I have read, understood, and agree to the scope of services and the Home Care Liability and Medical Disclaimer.
          </span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="rounded-xl" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="hero" className="rounded-xl" disabled={!allChecked}>
            Proceed to Booking / Payment
          </Button>
        </div>
      </motion.div>
    </LegalPageLayout>
  );
};

export default PostMaternityPackagePage;
