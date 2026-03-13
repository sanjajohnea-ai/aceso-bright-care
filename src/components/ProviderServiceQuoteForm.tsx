import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

interface ProviderServiceQuoteFormProps {
  title: string;
  description: string;
}

const ProviderServiceQuoteForm = ({ title, description }: ProviderServiceQuoteFormProps) => {
  const [agreed, setAgreed] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container px-5 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-card rounded-2xl shadow-lg p-6 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Phone" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="facility">Facility Name</Label>
            <Input id="facility" placeholder="Facility Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Location" />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="sms"
              checked={smsConsent}
              onCheckedChange={(v) => setSmsConsent(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="sms" className="text-sm text-muted-foreground font-normal leading-snug">
              By clicking this box, you agree to receive SMS
            </Label>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(v) => setAgreed(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal leading-snug">
              I agree to the{" "}
              <a href="/privacy" className="text-primary underline hover:text-primary/80">
                Privacy Policy
              </a>
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full text-base">
            Request A Quote
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProviderServiceQuoteForm;
