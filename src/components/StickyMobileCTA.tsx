import { Button } from "@/components/ui/button";
import { CalendarCheck, Download } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-border/50 px-4 py-3 flex gap-3">
    <Button className="flex-1 rounded-full gap-2 text-sm" size="sm">
      <CalendarCheck className="w-4 h-4" />
      Book Now
    </Button>
    <Button variant="outline" className="flex-1 rounded-full gap-2 text-sm" size="sm" asChild>
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <Download className="w-4 h-4" />
        Get App
      </a>
    </Button>
  </div>
);

export default StickyMobileCTA;
