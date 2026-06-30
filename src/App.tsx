import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthModal from "./components/AuthModal";

const FAQPage = lazy(() => import("./pages/FAQPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CancellationPage = lazy(() => import("./pages/CancellationPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PostSurgeryPackagePage = lazy(() => import("./pages/PostSurgeryPackagePage"));
const PostMaternityPackagePage = lazy(() => import("./pages/PostMaternityPackagePage"));
const WellnessPackagePage = lazy(() => import("./pages/WellnessPackagePage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const MedicalBillingPage = lazy(() => import("./pages/MedicalBillingPage"));
const RemoteAdminPage = lazy(() => import("./pages/RemoteAdminPage"));
const CredentialingPage = lazy(() => import("./pages/CredentialingPage"));
const HospitalSolutionsPage = lazy(() => import("./pages/HospitalSolutionsPage"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
        <AuthModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
