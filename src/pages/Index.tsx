import { useRef, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChatbotWidget, { type ChatbotWidgetRef } from "@/components/ChatbotWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const StepsSection = lazy(() => import("@/components/StepsSection"));
const BenefitsStatsSection = lazy(() => import("@/components/BenefitsStatsSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const CarePackages = lazy(() => import("@/components/CarePackages"));
const MobileAppSection = lazy(() => import("@/components/MobileAppSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const NewsletterSection = lazy(() => import("@/components/NewsletterSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[200px]" />;

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
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection onOpenChat={() => chatRef.current?.open()} />
          <StepsSection />
          <MobileAppSection />
          <BenefitsStatsSection />
          <StatsSection />
          <CarePackages />
          <FAQSection />
          <NewsletterSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ChatbotWidget ref={chatRef} />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
