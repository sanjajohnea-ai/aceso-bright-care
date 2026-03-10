import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, subtitle, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/8 via-secondary to-background border-b border-border/50">
        <div className="container px-5 max-w-4xl mx-auto py-10 md:py-14">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-muted-foreground mt-3 text-sm md:text-base"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="container px-5 max-w-4xl mx-auto py-10 md:py-14"
      >
        <div className="legal-content space-y-8">{children}</div>
      </motion.div>
    </main>
    <Footer />
  </div>
);

export default LegalPageLayout;
