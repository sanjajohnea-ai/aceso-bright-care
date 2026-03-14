import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProviderServiceQuoteFormProps {
  title: string;
  description: string;
}

const ProviderServiceQuoteForm = ({ title, description }: ProviderServiceQuoteFormProps) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

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
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
            <Input
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="facility">Facility Name</Label>
            <Input id="facility" placeholder="Facility Name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your needs..." rows={4} />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full text-base"
            disabled={!fullName.trim() || !phone.trim()}
          >
            Request A Quote
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProviderServiceQuoteForm;
