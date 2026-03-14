import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const packageNames: Record<string, { title: string; price: string }> = {
  "post-surgery": { title: "Post-Surgery Recovery Package", price: "KES 26,000" },
  "post-maternity": { title: "Post-Maternity Care Package", price: "KES 25,000" },
  "wellness": { title: "Wellness & Preventive Package", price: "KES 20,000" },
};

const BookingPage = () => {
  const { packageType } = useParams();
  const navigate = useNavigate();
  const pkg = packageNames[packageType || ""] || { title: "Care Package", price: "" };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container px-5 max-w-lg">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/8 px-4 py-1.5 rounded-full mb-4">
                Booking
              </span>
              <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">
                {pkg.title}
              </h1>
              {pkg.price && (
                <p className="text-muted-foreground text-sm md:text-base">{pkg.price}</p>
              )}
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-card rounded-2xl shadow-lg p-6 md:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-snug">
                  Our team will reach out within one hour to assist with scheduling your care package booking.
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-full text-base"
                disabled={!firstName.trim() || !lastName.trim() || !phone.trim()}
              >
                Make Payment
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookingPage;
