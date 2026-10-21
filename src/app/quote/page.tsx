import React, { Suspense } from "react";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { Sparkles, ShieldCheck, Clock, FileText } from "lucide-react";

export const metadata = {
  title: "Get a Formal Quotation — WearNextFabs",
  description:
    "Request custom fabric development, bulk weaving, or full-package CMT apparel manufacturing quotations from WearNextFabs.",
};

export default function QuotePage() {
  return (
    <div className="bg-[#F8F6F0] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 bg-charcoal text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-woven-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-linen mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span>Dedicated B2B Estimation Desk</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F8F6F0] leading-tight">
              Request a <span className="italic text-linen">Quotation.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#F8F6F0]/80 font-light leading-relaxed">
              Define your yarn parameters, estimated yardage or garment units, and target timeline. Our engineering desk provides technical review within 24 to 48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 -mt-10 relative z-20">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-12 text-center border border-charcoal/10 shadow-xl">
              <div className="animate-spin w-8 h-8 border-2 border-charcoal border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-xs font-mono text-charcoal/60">Loading quotation wizard...</p>
            </div>
          }
        >
          <QuoteWizard />
        </Suspense>

        {/* Reassurance Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-charcoal/10 shadow-sm">
            <Clock className="w-5 h-5 text-charcoal mx-auto mb-2" />
            <h4 className="font-serif text-base font-semibold text-charcoal">Rapid Turnaround</h4>
            <p className="text-xs text-charcoal/60 mt-0.5">Formal quotation in 24–48 hours</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-charcoal/10 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-charcoal mx-auto mb-2" />
            <h4 className="font-serif text-base font-semibold text-charcoal">IP & Design Protected</h4>
            <p className="text-xs text-charcoal/60 mt-0.5">Strict client confidentiality assured</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-charcoal/10 shadow-sm">
            <FileText className="w-5 h-5 text-charcoal mx-auto mb-2" />
            <h4 className="font-serif text-base font-semibold text-charcoal">Flexible Early Stage</h4>
            <p className="text-xs text-charcoal/60 mt-0.5">Prototyping & lab-dips supported</p>
          </div>
        </div>
      </section>
    </div>
  );
}
