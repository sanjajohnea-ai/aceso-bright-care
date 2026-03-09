import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-32 pb-20">
      <div className="container px-5 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

        <h2>1. Introduction</h2>
        <p>Welcome to Aceso Health Solutions ("we," "our," "us"). These Terms and Conditions govern your use of our website and services, including online doctor consultations, pharmaceutical and herbal supplement purchases, laboratory sample collection, and home nursing care. By accessing or using our platform, you agree to these Terms.</p>

        <h2>2. Eligibility</h2>
        <p>You must be at least 18 years old to use our services. By using the platform, you confirm that you are legally capable of entering into a binding contract under Kenyan law.</p>

        <h2>3. Services Provided</h2>
        <ul>
          <li><strong>Online Consultation:</strong> We connect you with licensed healthcare professionals. These consultations are for medical guidance only and should not replace in-person emergency care.</li>
          <li><strong>Pharmaceutical &amp; Herbal Products:</strong> Medicines and supplements available for purchase comply with Kenyan Pharmacy and Poisons Board (PPB) guidelines. A valid prescription may be required.</li>
          <li><strong>Laboratory Sample Collection:</strong> Customers may book sample collection from their preferred location, with results delivered securely online.</li>
          <li><strong>Home Nursing Care:</strong> Nursing services are provided by certified professionals. Scheduling depends on availability.</li>
          <li><strong>AI Symptom Checker:</strong> Our AI tool provides informational suggestions on the type of specialist you may need to consult. It is not a medical diagnosis tool. Always consult a licensed doctor.</li>
        </ul>

        <h2>4. User Responsibilities</h2>
        <ul>
          <li>Provide accurate and complete personal and medical information.</li>
          <li>Use the platform only for lawful purposes.</li>
          <li>Not misuse or resell prescribed medications or services.</li>
        </ul>

        <h2>5. Payments &amp; Refunds</h2>
        <ul>
          <li>Payments are made via M-PESA or other approved channels.</li>
          <li>Fees for consultations, products, or services are payable upfront.</li>
          <li>Refunds are only available for services not rendered (e.g., order cancellation before processing).</li>
        </ul>

        <h2>6. Data Protection &amp; Privacy</h2>
        <p>We are committed to protecting your personal data in compliance with the Kenya Data Protection Act (2019). Personal health data will be stored securely and used only for service delivery.</p>

        <h2>7. Limitation of Liability</h2>
        <ul>
          <li>We are not liable for medical decisions you make based solely on AI recommendations.</li>
          <li>We are not responsible for any delays or cancellations caused by external providers (e.g., courier services).</li>
          <li>In no event shall we be liable for indirect, incidental, or consequential damages.</li>
        </ul>

        <h2>8. Intellectual Property</h2>
        <p>All content, including text, graphics, logos, and software, is the property of Aceso Health Solutions. You may not reproduce or redistribute without prior written consent.</p>

        <h2>9. Termination of Use</h2>
        <p>We may suspend or terminate your access if you violate these Terms.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms shall be governed by and construed under the laws of Kenya.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
