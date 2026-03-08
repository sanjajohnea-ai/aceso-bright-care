import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AccessSection from "@/components/AccessSection";
import BenefitsSection from "@/components/BenefitsSection";
import MedicalSpecialties from "@/components/MedicalSpecialties";
import CarePackages from "@/components/CarePackages";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import MobileAppSection from "@/components/MobileAppSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AccessSection />
    <BenefitsSection />
    <MedicalSpecialties />
    <CarePackages />
    <StatsSection />
    <AboutSection />
    <MobileAppSection />
    <FAQSection />
    <NewsletterSection />
    <Footer />
    <ChatbotWidget />
  </div>
);

export default Index;
