import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CancellationPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-32 pb-20">
      <div className="container px-5 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Cancellation &amp; Refund Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: March 9, 2026</p>

        <p>At Aceso Health, we strive to provide a seamless experience for scheduling appointments with different healthcare providers. This Cancellation &amp; Refund Policy ("Policy") supplements our Terms &amp; Conditions and incorporates all legally required modifications for compliance with the Data Protection guidelines.</p>

        <h2>1. Cooling-Off Period (0–2 hours post-booking)</h2>
        <p>Users have an unconditional right to cancel within 2 hours of booking confirmation.</p>
        <ul>
          <li>Refund: 95% of paid amount</li>
          <li>Administrative fee: 5% of paid amount, whichever is lower</li>
        </ul>

        <h2>2. Pre-Consultation Period</h2>
        <h3>2.1 Unconfirmed Consultations</h3>
        <p>Confirmed Consultations (&gt;24 hours before scheduled time)</p>
        <ul>
          <li>Refund: 75% of paid amount if cancellation ≥24 hours before consult</li>
        </ul>

        <h2>3. Near-Consultation Period (12–24 hours before scheduled time)</h2>
        <ul>
          <li>Refund: 50% of paid amount</li>
        </ul>

        <h2>4. Last-Minute Cancellation (0–12 hours before scheduled time)</h2>
        <ul>
          <li>Refund: 0% of paid amount</li>
          <li>Exception: 25% refund of paid amount only if due to genuine emergencies (to be verified by Aceso Health, with required documents)</li>
        </ul>

        <h2>5. Doctor-Initiated Cancellations</h2>
        <ul>
          <li>Full refund of paid amount</li>
          <li>Aceso Health will make reasonable efforts to offer an alternative doctor within 48 hours</li>
        </ul>

        <h2>6. Technical Issues</h2>
        <ul>
          <li>If failure is on Aceso Health's platform → full refund or free reschedule</li>
          <li>Issues on user's end remain user's responsibility</li>
        </ul>

        <h2>7. Requesting Cancellation &amp; Refund</h2>
        <p>Email <a href="mailto:info@acesohealth.co.ke">info@acesohealth.co.ke</a> with your booking ID.</p>

        <h2>8. Refund Processing Timeline</h2>
        <ul>
          <li>Verification: within 48 hours of request receipt or until required documents received</li>
          <li>Refund transfer: within 5–7 business days after successful verification</li>
        </ul>

        <h2>9. Exceptions &amp; Force Majeure</h2>
        <p>Natural disasters, pandemics, government restrictions → full refund or reschedule. Technical outages beyond control are handled on a case-by-case basis.</p>

        <h2>13. Doctor Misconduct</h2>
        <ul>
          <li>Report within 15 days of consult; investigation by medical/legal committee</li>
          <li>Full refund post investigation and found 'misconduct'</li>
        </ul>

        <h2>14. Policy Modifications</h2>
        <p>We may update this Policy. Significant changes will be notified via email or in-app alert. Continued use signifies acceptance.</p>

        <p>For questions or assistance, email <a href="mailto:info@acesohealth.co.ke">info@acesohealth.co.ke</a>.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default CancellationPage;
