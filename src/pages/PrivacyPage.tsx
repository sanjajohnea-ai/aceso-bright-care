import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";

const PrivacyPage = () => (
  <LegalPageLayout
    title="Privacy Policy"
    subtitle="Effective Date: March 10, 2025 · Last Updated: March 10, 2025"
  >
    <p className="text-muted-foreground text-sm md:text-[0.938rem] leading-relaxed">
      Aceso Health Solutions ("we," "our," "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services.
    </p>

    <LegalSection number="1" title="Information We Collect">
      <p>We may collect the following types of information:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-foreground">Personal Identification Data:</strong> Full name, date of birth, ID/passport number, phone number, email address, and physical address.</li>
        <li><strong className="text-foreground">Medical Data:</strong> Health history, symptoms, prescriptions, lab results, and consultation records.</li>
        <li><strong className="text-foreground">Payment Data:</strong> M-PESA transaction details or other payment method information.</li>
        <li><strong className="text-foreground">Technical Data:</strong> IP address, device type, browser type, and cookies.</li>
      </ul>
    </LegalSection>

    <LegalSection number="2" title="How We Use Your Information">
      <p>We use your information to:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide healthcare services (consultations, prescriptions, lab tests, home nursing).</li>
        <li>Facilitate medicine and supplement orders.</li>
        <li>Process payments and issue receipts.</li>
        <li>Send updates, notifications, or reminders.</li>
        <li>Improve our services through analytics and customer feedback.</li>
        <li>Comply with legal and regulatory requirements in Kenya.</li>
      </ul>
    </LegalSection>

    <LegalSection number="3" title="Sharing of Information">
      <p>We may share your data with:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-foreground">Healthcare Professionals:</strong> Licensed doctors, nurses, and pharmacists for service delivery.</li>
        <li><strong className="text-foreground">Laboratory Partners:</strong> For processing and delivering test results.</li>
        <li><strong className="text-foreground">Delivery Providers:</strong> To facilitate medicine or supplement delivery.</li>
        <li><strong className="text-foreground">Regulatory Authorities:</strong> If required by Kenyan law.</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information to third parties.</p>
    </LegalSection>

    <LegalSection number="4" title="Data Protection & Security">
      <ul className="list-disc pl-5 space-y-2">
        <li>We store all personal data securely in compliance with the Kenya Data Protection Act (2019).</li>
        <li>Medical data is encrypted and accessible only to authorized healthcare providers.</li>
        <li>We use SSL encryption and secure servers to protect your data.</li>
      </ul>
    </LegalSection>

    <LegalSection number="5" title="Data Retention">
      <p>We will retain your personal and medical data only as long as necessary to provide services, comply with legal requirements, or resolve disputes.</p>
    </LegalSection>

    <LegalSection number="6" title="Your Rights (as per the Data Protection Act)">
      <p>You have the right to:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Access your personal data.</li>
        <li>Request correction of inaccurate or incomplete data.</li>
        <li>Withdraw consent for data processing (except where required by law).</li>
        <li>Request deletion of your data, subject to legal retention requirements.</li>
        <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) Kenya.</li>
      </ul>
    </LegalSection>

    <LegalSection number="7" title="Cookies & Tracking">
      <p>Our website may use cookies to improve user experience and track usage patterns. You may disable cookies in your browser settings, but some features may not function properly.</p>
    </LegalSection>

    <LegalSection number="8" title="Children's Privacy">
      <p>Our services are intended for users 18 years and older. We do not knowingly collect personal data from minors without parental or guardian consent.</p>
    </LegalSection>

    <LegalSection number="9" title="Changes to this Privacy Policy">
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."</p>
    </LegalSection>
  </LegalPageLayout>
);

export default PrivacyPage;
