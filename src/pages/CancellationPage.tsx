import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";

const CancellationPage = () => (
  <LegalPageLayout
    title="Cancellation & Refund Policy"
    subtitle="Last Updated: March 9, 2026"
  >
    <p className="text-muted-foreground text-sm md:text-[0.938rem] leading-relaxed">
      At Aceso Health, we strive to provide a seamless experience for scheduling appointments with different healthcare providers. This Cancellation &amp; Refund Policy ("Policy") supplements our Terms &amp; Conditions and incorporates all legally required modifications for compliance with the Data Protection guidelines.
    </p>

    <LegalSection number="1" title="Cooling-Off Period (0–2 hours post-booking)">
      <p>Users have an unconditional right to cancel within 2 hours of booking confirmation.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Refund: 95% of paid amount</li>
        <li>Administrative fee: 5% of paid amount, whichever is lower</li>
      </ul>
    </LegalSection>

    <LegalSection number="2" title="Pre-Consultation Period">
      <p className="font-medium text-foreground">2.1 Unconfirmed Consultations</p>
      <p>Confirmed Consultations (&gt;24 hours before scheduled time)</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Refund: 75% of paid amount if cancellation ≥24 hours before consult</li>
      </ul>
    </LegalSection>

    <LegalSection number="3" title="Near-Consultation Period (12–24 hours before scheduled time)">
      <ul className="list-disc pl-5 space-y-2">
        <li>Refund: 50% of paid amount</li>
      </ul>
    </LegalSection>

    <LegalSection number="4" title="Last-Minute Cancellation (0–12 hours before scheduled time)">
      <ul className="list-disc pl-5 space-y-2">
        <li>Refund: 0% of paid amount</li>
        <li>Exception: 25% refund of paid amount only if due to genuine emergencies (to be verified by Aceso Health, with required documents)</li>
      </ul>
    </LegalSection>

    <LegalSection number="5" title="Doctor-Initiated Cancellations">
      <ul className="list-disc pl-5 space-y-2">
        <li>Full refund of paid amount</li>
        <li>Aceso Health will make reasonable efforts to offer an alternative doctor within 48 hours</li>
      </ul>
    </LegalSection>

    <LegalSection number="6" title="Technical Issues">
      <ul className="list-disc pl-5 space-y-2">
        <li>If failure is on Aceso Health's platform → full refund or free reschedule</li>
        <li>Issues on user's end remain user's responsibility</li>
      </ul>
    </LegalSection>

    <LegalSection number="7" title="Requesting Cancellation & Refund">
      <p>Email <a href="mailto:info@acesohealth.co.ke" className="text-primary hover:underline font-medium">info@acesohealth.co.ke</a> with your booking ID.</p>
    </LegalSection>

    <LegalSection number="8" title="Refund Processing Timeline">
      <ul className="list-disc pl-5 space-y-2">
        <li>Verification: within 48 hours of request receipt or until required documents received</li>
        <li>Refund transfer: within 5–7 business days after successful verification</li>
      </ul>
    </LegalSection>

    <LegalSection number="9" title="Exceptions & Force Majeure">
      <p>Natural disasters, pandemics, government restrictions → full refund or reschedule. Technical outages beyond control are handled on a case-by-case basis.</p>
    </LegalSection>

    <LegalSection number="10" title="Doctor Misconduct">
      <ul className="list-disc pl-5 space-y-2">
        <li>Report within 15 days of consult; investigation by medical/legal committee</li>
        <li>Full refund post investigation and found 'misconduct'</li>
      </ul>
    </LegalSection>

    <LegalSection number="11" title="Policy Modifications">
      <p>We may update this Policy. Significant changes will be notified via email or in-app alert. Continued use signifies acceptance.</p>
      <p>For questions or assistance, email <a href="mailto:info@acesohealth.co.ke" className="text-primary hover:underline font-medium">info@acesohealth.co.ke</a>.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default CancellationPage;
