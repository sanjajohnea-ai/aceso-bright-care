import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import FAQPage from "./pages/FAQPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CancellationPage from "./pages/CancellationPage";
import AboutPage from "./pages/AboutPage";
import PostSurgeryPackagePage from "./pages/PostSurgeryPackagePage";
import PostMaternityPackagePage from "./pages/PostMaternityPackagePage";
import WellnessPackagePage from "./pages/WellnessPackagePage";
import BookingPage from "./pages/BookingPage";
import NotFound from "./pages/NotFound";
import MedicalBillingPage from "./pages/MedicalBillingPage";
import RemoteAdminPage from "./pages/RemoteAdminPage";
import CredentialingPage from "./pages/CredentialingPage";
import HospitalSolutionsPage from "./pages/HospitalSolutionsPage";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cancellation-policy" element={<CancellationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages/post-surgery" element={<PostSurgeryPackagePage />} />
          <Route path="/packages/post-maternity" element={<PostMaternityPackagePage />} />
          <Route path="/packages/wellness" element={<WellnessPackagePage />} />
          <Route path="/booking/:packageType" element={<BookingPage />} />
          <Route path="/services/medical-billing" element={<MedicalBillingPage />} />
          <Route path="/services/remote-admin" element={<RemoteAdminPage />} />
          <Route path="/services/credentialing" element={<CredentialingPage />} />
          <Route path="/services/hospital-solutions" element={<HospitalSolutionsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
