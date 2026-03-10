import { Card, CardContent } from "@/components/ui/card";

interface LegalSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const LegalSection = ({ number, title, children }: LegalSectionProps) => (
  <Card className="border-border/60 shadow-none hover:shadow-sm transition-shadow duration-300 overflow-hidden">
    <CardContent className="p-5 md:p-7">
      <div className="flex items-start gap-3 md:gap-4 mb-3">
        {number && (
          <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm md:text-base flex items-center justify-center">
            {number}
          </span>
        )}
        <h2 className="font-display font-semibold text-lg md:text-xl text-foreground pt-0.5 leading-snug">
          {title}
        </h2>
      </div>
      <div className="pl-11 md:pl-13 text-muted-foreground text-sm md:text-[0.938rem] leading-relaxed space-y-3">
        {children}
      </div>
    </CardContent>
  </Card>
);

export default LegalSection;
