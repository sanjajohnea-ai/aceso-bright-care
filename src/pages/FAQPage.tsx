import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, renderAnswer } from "@/components/FAQSection";

const allFaqs = [
  ...faqs,
  {
    question: "Can I get a second opinion through Aceso Health?",
    answer: "Yes, Aceso Health offers second opinion consultations. Simply upload your existing diagnosis and reports, and our specialists will review your case and provide an independent medical opinion.",
  },
  {
    question: "How long does it take to get a response from a specialist?",
    answer: "Response times vary by specialty and consultation type. Most specialists respond within 24–48 hours. Urgent consultations may receive faster responses depending on availability.",
  },
  {
    question: "Can I choose my preferred doctor?",
    answer: "Yes, you can browse doctor profiles, view their qualifications, specialties, and fees, then select the one that best matches your needs.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Aceso Health accepts multiple payment methods including:\n• M-Pesa\n• Credit/Debit cards\n• Bank transfers\n\nAll payments are processed through a secure payment gateway.",
  },
  {
    question: "Is Aceso Health available outside Kenya?",
    answer: "Yes, Aceso Health connects patients globally with specialists. You can access consultations from anywhere with an internet connection.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our support team via:\n• In-app chat support\n• Email at support@acesohealth.com\n• Phone during business hours\n\nWe aim to respond to all inquiries within 24 hours.",
  },
];

const FAQPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-foreground mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about Aceso Health and our services.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {allFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    <Footer />
  </div>
);

export default FAQPage;
