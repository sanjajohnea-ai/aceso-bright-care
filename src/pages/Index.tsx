import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CarePackages from "@/components/CarePackages";
import MobileAppSection from "@/components/MobileAppSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <CarePackages />
    <MobileAppSection />
    <FAQSection />
    <CTASection />
    <Footer />
    <ChatbotWidget />
  </div>
);

export default Index;
