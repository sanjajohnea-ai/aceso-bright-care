import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsStatsSection from "@/components/BenefitsStatsSection";
import StatsSection from "@/components/StatsSection";
import CarePackages from "@/components/CarePackages";
import MobileAppSection from "@/components/MobileAppSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ChatbotWidget, { type ChatbotWidgetRef } from "@/components/ChatbotWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  const chatRef = useRef<ChatbotWidgetRef>(null);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection onOpenChat={() => chatRef.current?.open()} />
        <StepsSection />
        <MobileAppSection />
        <BenefitsStatsSection />
        <StatsSection />
        <CarePackages />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
      <ChatbotWidget ref={chatRef} />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
