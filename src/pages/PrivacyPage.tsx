import { useState } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";
import { Button } from "@/components/ui/button";

const PrivacyPage = () => {
  const [activeTab, setActiveTab] = useState<"patients" | "providers">("patients");

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Last Updated: March 10, 2026"
    >
      {/* Toggle Buttons */}
      <div className="flex flex-row gap-3 mb-8">
        <Button
          variant={activeTab === "patients" ? "default" : "outline"}
          size="lg"
          className="flex-1"
          onClick={() => setActiveTab("patients")}
        >
          For Patients
        </Button>
        <Button
          variant={activeTab === "providers" ? "default" : "outline"}
          size="lg"
          className="flex-1"
          onClick={() => setActiveTab("providers")}
        >
          For Providers
        </Button>
      </div>

      {/* Patient Privacy Policy */}
      {activeTab === "patients" && (
        <div className="space-y-6">
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
        </div>
      )}

      {/* Provider Privacy Policy */}
      {activeTab === "providers" && (
        <div className="space-y-6">
          <LegalSection number="1" title="Introduction">
            <p>This Privacy Policy describes how Aceso Health ("Aceso", "we", "our", or "us") collects, uses, stores, and protects information provided by healthcare providers who request or use our Remote Medical Billing, Administrative Support, and Credentialing Services.</p>
            <p>Aceso is committed to maintaining the privacy, confidentiality, and security of all information shared by healthcare providers and their organizations.</p>
            <p>By engaging our services or submitting information to Aceso, you agree to the practices described in this Privacy Policy.</p>
          </LegalSection>

          <LegalSection number="2" title="Information We Collect">
            <p>To provide Remote Medical Billing, Administrative Support, and Credentialing Services, Aceso may collect the following information from healthcare providers or their organizations:</p>
            <p className="font-semibold text-foreground mt-3">Provider Information</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full name and contact information</li>
              <li>Professional credentials and licenses</li>
              <li>National Provider Identifier (NPI) or equivalent identification numbers</li>
              <li>Practice or clinic information</li>
              <li>Professional certifications and documentation</li>
            </ul>
            <p className="font-semibold text-foreground mt-3">Business and Operational Information</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Practice billing information</li>
              <li>Insurance participation information</li>
              <li>Credentialing documentation</li>
              <li>Administrative workflow information</li>
            </ul>
            <p className="font-semibold text-foreground mt-3">Patient Related Information</p>
            <p>When providing medical billing and administrative services, Aceso may process patient related data necessary for billing and administrative operations. This may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Patient demographic information</li>
              <li>Appointment details</li>
              <li>Insurance information</li>
              <li>Billing and claims information</li>
            </ul>
            <p>Patient health information is handled strictly for the purpose of providing authorized billing and administrative services.</p>
          </LegalSection>

          <LegalSection number="3" title="How We Use Information">
            <p>The information collected is used solely to provide and improve our services, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processing medical billing and insurance claims</li>
              <li>Managing credentialing applications and provider enrollment</li>
              <li>Providing administrative and operational support</li>
              <li>Communicating with healthcare providers regarding service updates</li>
              <li>Maintaining service records and documentation</li>
              <li>Improving operational efficiency and service quality</li>
            </ul>
            <p>Aceso does not sell provider information or patient data to third parties.</p>
          </LegalSection>

          <LegalSection number="4" title="Confidentiality and Data Protection">
            <p>Aceso maintains strict confidentiality standards and implements reasonable administrative, technical, and organizational safeguards to protect information from unauthorized access, disclosure, alteration, or destruction.</p>
            <p>Our security practices may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secure data storage systems</li>
              <li>Restricted data access controls</li>
              <li>Confidentiality agreements with staff and contractors</li>
              <li>Secure communication channels when handling sensitive information</li>
            </ul>
            <p>All team members handling provider or patient information are trained in confidentiality and data protection practices.</p>
          </LegalSection>

          <LegalSection number="5" title="Information Sharing">
            <p>Aceso may share information only when necessary to provide services. This may include sharing information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insurance companies and payers for claims processing</li>
              <li>Credentialing organizations or regulatory bodies</li>
              <li>Technology providers supporting billing or credentialing systems</li>
            </ul>
            <p>Information is shared only to the extent necessary to perform the requested services. Aceso does not disclose confidential information for marketing or unrelated purposes.</p>
          </LegalSection>

          <LegalSection number="6" title="Data Retention">
            <p>Aceso retains information only for as long as necessary to provide services and comply with legal, regulatory, or contractual requirements. Once information is no longer required, reasonable steps are taken to securely delete or anonymize the data.</p>
          </LegalSection>

          <LegalSection number="7" title="Provider Responsibilities">
            <p>Healthcare providers using Aceso services are responsible for ensuring that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Information shared with Aceso is accurate and authorized for use</li>
              <li>They comply with applicable healthcare privacy and data protection regulations</li>
              <li>They maintain appropriate patient consent when sharing patient related data for billing or administrative purposes</li>
            </ul>
          </LegalSection>

          <LegalSection number="8" title="Third Party Systems">
            <p>Aceso may use third party software or technology platforms to assist in delivering billing, credentialing, or administrative services. These providers are selected based on their ability to maintain appropriate data protection and security standards.</p>
          </LegalSection>

          <LegalSection number="9" title="Changes to This Privacy Policy">
            <p>Aceso may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. Updated versions will be communicated to providers or made available through our website.</p>
            <p>Continued use of our services after updates indicates acceptance of the revised policy.</p>
          </LegalSection>

          <LegalSection number="10" title="Contact Information">
            <p>If you have questions about this Privacy Policy or how your information is handled, please contact:</p>
            <p><strong className="text-foreground">Aceso Health</strong></p>
            <p>Email: support@acesohealth.com</p>
            <p>Website: www.acesohealth.com</p>
          </LegalSection>
        </div>
      )}
    </LegalPageLayout>
  );
};

export default PrivacyPage;
