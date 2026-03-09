import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-32 pb-20">
      <div className="container px-5 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Effective Date: March 10, 2025 · Last Updated: March 10, 2025</p>

        <p>Aceso Health Solutions ("we," "our," "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Identification Data:</strong> Full name, date of birth, ID/passport number, phone number, email address, and physical address.</li>
          <li><strong>Medical Data:</strong> Health history, symptoms, prescriptions, lab results, and consultation records.</li>
          <li><strong>Payment Data:</strong> M-PESA transaction details or other payment method information.</li>
          <li><strong>Technical Data:</strong> IP address, device type, browser type, and cookies.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide healthcare services (consultations, prescriptions, lab tests, home nursing).</li>
          <li>Facilitate medicine and supplement orders.</li>
          <li>Process payments and issue receipts.</li>
          <li>Send updates, notifications, or reminders.</li>
          <li>Improve our services through analytics and customer feedback.</li>
          <li>Comply with legal and regulatory requirements in Kenya.</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>We may share your data with:</p>
        <ul>
          <li><strong>Healthcare Professionals:</strong> Licensed doctors, nurses, and pharmacists for service delivery.</li>
          <li><strong>Laboratory Partners:</strong> For processing and delivering test results.</li>
          <li><strong>Delivery Providers:</strong> To facilitate medicine or supplement delivery.</li>
          <li><strong>Regulatory Authorities:</strong> If required by Kenyan law.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>4. Data Protection &amp; Security</h2>
        <ul>
          <li>We store all personal data securely in compliance with the Kenya Data Protection Act (2019).</li>
          <li>Medical data is encrypted and accessible only to authorized healthcare providers.</li>
          <li>We use SSL encryption and secure servers to protect your data.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We will retain your personal and medical data only as long as necessary to provide services, comply with legal requirements, or resolve disputes.</p>

        <h2>6. Your Rights (as per the Data Protection Act)</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Withdraw consent for data processing (except where required by law).</li>
          <li>Request deletion of your data, subject to legal retention requirements.</li>
          <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC) Kenya.</li>
        </ul>

        <h2>7. Cookies &amp; Tracking</h2>
        <p>Our website may use cookies to improve user experience and track usage patterns. You may disable cookies in your browser settings, but some features may not function properly.</p>

        <h2>8. Children's Privacy</h2>
        <p>Our services are intended for users 18 years and older. We do not knowingly collect personal data from minors without parental or guardian consent.</p>

        <h2>9. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
