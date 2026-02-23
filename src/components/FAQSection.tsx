import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I request for a consultation through Aceso Health?",
    answer: "It is simple to book a consultation through Aceso Health:\n1. Sign up on the app or website\n2. Select the specialist doctor that matches your requirements\n3. Pay the fees online through a secured payment gateway and schedule the consultation",
  },
  {
    question: "What documents are needed for a consultation?",
    answer: "Documents/reports are not mandatory to upload. For a comprehensive review, please provide:\n• Medical history\n• Current diagnosis (for second opinions)\n• Lab tests or imaging (e.g., X-rays, MRI, CT scans)\n• Previous prescriptions or treatment plans\n\nFor first opinions, describe your symptoms if you don't have prior records.",
  },
  {
    question: "How does Aceso Health ensure the quality of its doctors?",
    answer: "All doctors', nurses and laboratory credentials are thoroughly verified. All the listed doctors are Government registered practitioners.",
  },
  {
    question: "Is my medical information secure on Aceso Health?",
    answer: "Yes, all records are securely stored using end-to-end encryption and shared only with the specialist handling your case. Aceso Health complies with Kenya and international data protection laws.",
  },
  {
    question: "How much does a consultation cost?",
    answer: "Fees vary by specialty doctor and consultation type. This is displayed in the profiles.",
  },
  {
    question: "Is the fee refundable?",
    answer: "Fees are non-refundable once your case is assigned to a specialist. Cancellation before assignment may be eligible for a refund, per our Cancellation & Refund policy.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-foreground mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Find answers to common questions about our services.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
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
);

export default FAQSection;
