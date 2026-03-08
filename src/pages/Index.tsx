import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsStatsSection from "@/components/BenefitsStatsSection";
import CarePackages from "@/components/CarePackages";
import MobileAppSection from "@/components/MobileAppSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen bg-background pb-16 md:pb-0">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <BenefitsStatsSection />
    <CarePackages />
    <MobileAppSection />
    <FAQSection />
    <NewsletterSection />
    <Footer />
    <ChatbotWidget />
    <StickyMobileCTA />
  </div>
);

export default Index;
