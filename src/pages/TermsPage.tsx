import { useState } from "react";
import LegalPageLayout from "@/components/LegalPageLayout";
import LegalSection from "@/components/LegalSection";
import { Button } from "@/components/ui/button";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState<"patients" | "providers">("patients");

  return (
    <LegalPageLayout title="Terms & Conditions">
      {/* Toggle Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <Button
          variant={activeTab === "patients" ? "default" : "outline"}
          size="lg"
          className="flex-1"
          onClick={() => setActiveTab("patients")}
        >
          Terms for Patients
        </Button>
        <Button
          variant={activeTab === "providers" ? "default" : "outline"}
          size="lg"
          className="flex-1"
          onClick={() => setActiveTab("providers")}
        >
          Terms for Healthcare Providers
        </Button>
      </div>

      {/* Patient Terms */}
      {activeTab === "patients" && (
        <div className="space-y-6">
          <LegalSection number="1" title="Introduction">
            <p>These Terms of Service govern your use of the Aceso Health platform ("Aceso", "we", "our", or "platform"). By accessing or using Aceso services, you agree to comply with these terms.</p>
            <p>Aceso is a digital healthcare platform that connects patients with licensed healthcare providers for services such as medical consultations, online pharmacy services, laboratory testing, home healthcare services, and medication delivery.</p>
            <p>These services are provided by independent licensed healthcare professionals and healthcare providers.</p>
          </LegalSection>

          <LegalSection number="2" title="Eligibility">
            <p>By using the platform, you confirm that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are at least 18 years old or using the platform under the supervision of a legal guardian.</li>
              <li>The information you provide is accurate and complete.</li>
              <li>You will use the platform only for lawful healthcare purposes.</li>
            </ul>
          </LegalSection>

          <LegalSection number="3" title="Services Provided">
            <p>Through the Aceso platform, patients may access services including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Online doctor consultations</li>
              <li>Online pharmacy and medication ordering</li>
              <li>Laboratory test scheduling and home sample collection</li>
              <li>Home nursing and healthcare services</li>
              <li>Prescription reminders and medication refills</li>
              <li>Healthcare information and support services</li>
            </ul>
            <p>The availability of services may vary depending on location and provider availability.</p>
          </LegalSection>

          <LegalSection number="4" title="Patient Responsibilities">
            <p>Patients agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate medical information and history when requested.</li>
              <li>Follow medical advice provided by healthcare professionals.</li>
              <li>Use medications and treatments only as prescribed.</li>
              <li>Seek immediate medical care in case of emergencies.</li>
            </ul>
            <p>The Aceso platform should not be used for medical emergencies.</p>
          </LegalSection>

          <LegalSection number="5" title="Telehealth and Medical Consultation Consent">
            <p>By using the consultation services provided through Aceso, you consent to receive healthcare services via telehealth or digital communication.</p>
            <p>Telehealth services may include consultations conducted through video, phone, or messaging.</p>
            <p>You acknowledge and agree that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Telehealth may involve the electronic transmission of medical information.</li>
              <li>There may be limitations in diagnosis due to the absence of a physical examination.</li>
              <li>Technical issues such as internet interruptions may affect the consultation.</li>
              <li>Healthcare providers may recommend in-person care when necessary.</li>
              <li>You have the right to withdraw consent for telehealth services at any time.</li>
            </ul>
          </LegalSection>

          <LegalSection number="6" title="Pharmacy Services">
            <p>Aceso may facilitate the ordering of medications through licensed pharmacies. Certain medications may require valid prescriptions issued by licensed healthcare professionals.</p>
            <p>Patients agree that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prescription medications will only be dispensed with a valid prescription where required by law.</li>
              <li>Medication usage should follow the instructions provided by the prescribing healthcare provider.</li>
              <li>Patients should consult healthcare providers regarding any side effects or concerns.</li>
            </ul>
          </LegalSection>

          <LegalSection number="7" title="Laboratory and Home Healthcare Services">
            <p>Aceso may facilitate laboratory testing and home healthcare services through licensed providers.</p>
            <p>Patients agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Follow instructions provided for sample collection and testing.</li>
              <li>Ensure access to the location where home healthcare services are to be delivered.</li>
              <li>Provide accurate information related to the requested services.</li>
            </ul>
          </LegalSection>

          <LegalSection number="8" title="Privacy and Confidentiality">
            <p>Aceso takes reasonable measures to protect patient information and maintain confidentiality.</p>
            <p>Patient data may be used to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide healthcare services</li>
              <li>Facilitate communication between patients and healthcare providers</li>
              <li>Improve the platform and services</li>
            </ul>
            <p>Personal health information will be handled in accordance with applicable privacy laws and the Aceso Privacy Policy.</p>
          </LegalSection>

          <LegalSection number="9" title="Payments and Fees">
            <p>Some services on the Aceso platform may require payment. Fees for services will be displayed before booking or ordering.</p>
            <p>Patients agree to pay applicable fees for services provided through the platform.</p>
            <p>Refund policies and payment terms may vary depending on the service provider.</p>
          </LegalSection>

          <LegalSection number="10" title="Platform Limitations">
            <p>Aceso provides a digital platform to facilitate access to healthcare services. Aceso does not directly provide medical treatment or clinical care.</p>
            <p>Healthcare services are provided by independent licensed healthcare professionals who are responsible for their clinical decisions and medical advice.</p>
          </LegalSection>

          <LegalSection number="11" title="Limitation of Liability">
            <p>Aceso is not responsible for medical decisions, diagnoses, treatments, or outcomes provided by healthcare professionals using the platform.</p>
            <p>Patients agree to use the platform at their own discretion and acknowledge that healthcare services involve inherent risks.</p>
          </LegalSection>

          <LegalSection number="12" title="Changes to Terms">
            <p>Aceso reserves the right to update or modify these Terms of Service at any time. Continued use of the platform after changes are made constitutes acceptance of the updated terms.</p>
          </LegalSection>

          <LegalSection number="13" title="Contact Information">
            <p>For questions regarding these Terms of Service, please contact:</p>
            <p><strong className="text-foreground">Aceso Health</strong></p>
            <p>Email: support@acesohealth.com</p>
            <p>Website: www.acesohealth.com</p>
          </LegalSection>

          <LegalSection number="14" title="Patient Consent">
            <p>By using the Aceso platform, you acknowledge and confirm that:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You have read and understood these Terms of Service.</li>
              <li>You consent to receive healthcare services through the Aceso platform.</li>
              <li>You consent to telehealth consultations where applicable.</li>
              <li>You authorize healthcare providers to review and use your medical information for treatment and care.</li>
            </ul>
            <p>Your continued use of the platform indicates your agreement to these terms and consent to the services provided.</p>
          </LegalSection>
        </div>
      )}

      {/* Provider Terms */}
      {activeTab === "providers" && (
        <div className="space-y-6">
          <LegalSection number="1" title="Introduction">
            <p>These Terms of Service govern the relationship between healthcare providers and Aceso Health ("Aceso", "Platform", "we", "our", or "us"). By registering as a healthcare provider on the Aceso platform, you agree to comply with these terms and all applicable laws and regulations governing healthcare practice.</p>
            <p>Aceso provides a digital platform that connects patients with licensed healthcare professionals for services such as medical consultations, pharmacy services, laboratory services, home healthcare, and other related healthcare services.</p>
          </LegalSection>

          <LegalSection number="2" title="Eligibility and Professional Requirements">
            <p>To provide services through Aceso, healthcare providers must:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hold valid and current professional licenses required by relevant regulatory authorities.</li>
              <li>Maintain all certifications, registrations, and permits required to practice their profession.</li>
              <li>Comply with applicable healthcare laws, ethical standards, and professional regulations.</li>
              <li>Provide accurate credentials and professional information during registration.</li>
            </ul>
            <p>Aceso reserves the right to verify provider credentials and may suspend or terminate accounts that fail to meet regulatory requirements.</p>
          </LegalSection>

          <LegalSection number="3" title="Provider Responsibilities">
            <p>Healthcare providers using the Aceso platform agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Deliver professional healthcare services in accordance with accepted medical standards.</li>
              <li>Maintain patient confidentiality and comply with applicable privacy regulations.</li>
              <li>Provide accurate, timely, and professional communication with patients.</li>
              <li>Ensure prescriptions, medical advice, and treatment plans are appropriate and lawful.</li>
              <li>Maintain complete and accurate patient records where required.</li>
            </ul>
            <p>Healthcare providers are solely responsible for the medical services they provide to patients.</p>
          </LegalSection>

          <LegalSection number="4" title="Platform Role">
            <p>Aceso acts as a technology platform that facilitates access to healthcare services. Aceso does not provide medical advice or treatment and does not replace professional medical judgment.</p>
            <p>Healthcare providers operate as independent professionals and are responsible for all clinical decisions and services provided through the platform.</p>
          </LegalSection>

          <LegalSection number="5" title="Patient Interaction and Conduct">
            <p>Healthcare providers must maintain professional conduct when interacting with patients. Providers must not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Engage in misleading or unethical medical practices.</li>
              <li>Provide services outside the scope of their qualifications.</li>
              <li>Request payments outside the platform when services are booked through Aceso.</li>
            </ul>
            <p>Providers must ensure respectful, ethical, and professional communication at all times.</p>
          </LegalSection>

          <LegalSection number="6" title="Privacy and Data Protection">
            <p>Healthcare providers must protect patient data and maintain confidentiality of all medical information accessed through the platform.</p>
            <p>Providers agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use patient data only for legitimate healthcare purposes.</li>
              <li>Maintain secure handling of all patient records.</li>
              <li>Comply with applicable data protection laws and healthcare privacy regulations.</li>
            </ul>
            <p>Unauthorized use, sharing, or disclosure of patient data is strictly prohibited.</p>
          </LegalSection>

          <LegalSection number="7" title="Fees and Payments">
            <p>Aceso may charge service fees, platform fees, or commission fees for services facilitated through the platform. These fees may vary depending on the services offered.</p>
            <p>Payment terms, settlement schedules, and applicable charges will be communicated to providers through the platform or a separate agreement.</p>
          </LegalSection>

          <LegalSection number="8" title="Service Availability">
            <p>Healthcare providers are responsible for maintaining accurate availability schedules and ensuring they are able to provide services during the time slots they offer.</p>
            <p>Repeated cancellations, missed appointments, or poor service quality may result in warnings, temporary suspension, or removal from the platform.</p>
          </LegalSection>

          <LegalSection number="9" title="Suspension or Termination">
            <p>Aceso reserves the right to suspend or terminate provider accounts if providers:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violate these Terms of Service</li>
              <li>Provide false credentials or information</li>
              <li>Engage in unethical or illegal practices</li>
              <li>Receive repeated complaints from patients</li>
            </ul>
            <p>Providers may also choose to discontinue their participation on the platform at any time by notifying Aceso.</p>
          </LegalSection>

          <LegalSection number="10" title="Liability">
            <p>Healthcare providers are solely responsible for the medical services they provide. Aceso is not responsible for medical decisions, diagnoses, treatments, or outcomes resulting from healthcare services delivered by providers through the platform.</p>
            <p>Providers agree to indemnify and hold Aceso harmless from claims arising from the healthcare services they provide.</p>
          </LegalSection>

          <LegalSection number="11" title="Modifications to Terms">
            <p>Aceso reserves the right to modify these Terms of Service at any time. Providers will be notified of significant changes through the platform or via email.</p>
            <p>Continued use of the platform after updates constitutes acceptance of the revised terms.</p>
          </LegalSection>

          <LegalSection number="12" title="Governing Law">
            <p>These Terms of Service shall be governed by and interpreted in accordance with the laws and regulations applicable in the jurisdiction where Aceso operates.</p>
          </LegalSection>

          <LegalSection number="13" title="Contact Information">
            <p>For questions regarding these Terms of Service, healthcare providers may contact:</p>
            <p><strong className="text-foreground">Aceso Health</strong></p>
            <p>Email: support@acesohealth.com</p>
            <p>Website: www.acesohealth.com</p>
          </LegalSection>
        </div>
      )}
    </LegalPageLayout>
  );
};

export default TermsPage;
