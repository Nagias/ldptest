import { Phone } from "lucide-react";
import { conversionCta } from "@/data/hyperwork-b2b-data";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-white/95 p-3 shadow-soft backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:19006868"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border px-4 py-3 text-sm font-bold text-brand-text"
        >
          <Phone className="h-4 w-4" />
          {conversionCta.stickySecondary}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-orange px-4 py-3 text-sm font-bold text-white"
        >
          {conversionCta.stickyPrimary}
        </a>
      </div>
    </div>
  );
}
