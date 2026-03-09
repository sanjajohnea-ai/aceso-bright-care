import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";

const TermsPage = () => (
  <LegalPageLayout title="Terms & Conditions">
    <LegalSection number="1" title="Introduction">
      <p>Welcome to Aceso Health Solutions ("we," "our," "us"). These Terms and Conditions govern your use of our website and services, including online doctor consultations, pharmaceutical and herbal supplement purchases, laboratory sample collection, and home nursing care. By accessing or using our platform, you agree to these Terms.</p>
    </LegalSection>

    <LegalSection number="2" title="Eligibility">
      <p>You must be at least 18 years old to use our services. By using the platform, you confirm that you are legally capable of entering into a binding contract under Kenyan law.</p>
    </LegalSection>

    <LegalSection number="3" title="Services Provided">
      <ul className="list-disc pl-5 space-y-2">
        <li><strong className="text-foreground">Online Consultation:</strong> We connect you with licensed healthcare professionals. These consultations are for medical guidance only and should not replace in-person emergency care.</li>
        <li><strong className="text-foreground">Pharmaceutical &amp; Herbal Products:</strong> Medicines and supplements available for purchase comply with Kenyan Pharmacy and Poisons Board (PPB) guidelines. A valid prescription may be required.</li>
        <li><strong className="text-foreground">Laboratory Sample Collection:</strong> Customers may book sample collection from their preferred location, with results delivered securely online.</li>
        <li><strong className="text-foreground">Home Nursing Care:</strong> Nursing services are provided by certified professionals. Scheduling depends on availability.</li>
        <li><strong className="text-foreground">AI Symptom Checker:</strong> Our AI tool provides informational suggestions on the type of specialist you may need to consult. It is not a medical diagnosis tool. Always consult a licensed doctor.</li>
      </ul>
    </LegalSection>

    <LegalSection number="4" title="User Responsibilities">
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide accurate and complete personal and medical information.</li>
        <li>Use the platform only for lawful purposes.</li>
        <li>Not misuse or resell prescribed medications or services.</li>
      </ul>
    </LegalSection>

    <LegalSection number="5" title="Payments & Refunds">
      <ul className="list-disc pl-5 space-y-2">
        <li>Payments are made via M-PESA or other approved channels.</li>
        <li>Fees for consultations, products, or services are payable upfront.</li>
        <li>Refunds are only available for services not rendered (e.g., order cancellation before processing).</li>
      </ul>
    </LegalSection>

    <LegalSection number="6" title="Data Protection & Privacy">
      <p>We are committed to protecting your personal data in compliance with the Kenya Data Protection Act (2019). Personal health data will be stored securely and used only for service delivery.</p>
    </LegalSection>

    <LegalSection number="7" title="Limitation of Liability">
      <ul className="list-disc pl-5 space-y-2">
        <li>We are not liable for medical decisions you make based solely on AI recommendations.</li>
        <li>We are not responsible for any delays or cancellations caused by external providers (e.g., courier services).</li>
        <li>In no event shall we be liable for indirect, incidental, or consequential damages.</li>
      </ul>
    </LegalSection>

    <LegalSection number="8" title="Intellectual Property">
      <p>All content, including text, graphics, logos, and software, is the property of Aceso Health Solutions. You may not reproduce or redistribute without prior written consent.</p>
    </LegalSection>

    <LegalSection number="9" title="Termination of Use">
      <p>We may suspend or terminate your access if you violate these Terms.</p>
    </LegalSection>

    <LegalSection number="10" title="Governing Law">
      <p>These Terms shall be governed by and construed under the laws of Kenya.</p>
    </LegalSection>
  </LegalPageLayout>
);

export default TermsPage;
