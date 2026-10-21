import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Send } from "lucide-react";

export function FinalConversion() {
  return (
    <section className="py-28 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linen text-charcoal text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sage" />
          <span>Primary Conversion Gateway</span>
        </div>

        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-charcoal leading-tight">
          Have a Project in Mind?
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
          Tell us what you&apos;re looking to create, and let&apos;s explore the possibilities. Our engineering team reviews tech-packs and inquiries within 24 to 48 hours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-charcoal text-[#F8F6F0] font-medium text-base hover:bg-charcoal-light active:scale-[0.98] transition-all shadow-xl group"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-charcoal/20 text-charcoal font-medium text-base hover:bg-charcoal/5 active:scale-[0.98] transition-all"
          >
            <span>Contact Directly</span>
          </Link>
        </div>

        <p className="mt-8 text-xs font-mono text-charcoal/50">
          No commitment required. Early concepts and tech-packs welcomed.
        </p>
      </div>
    </section>
  );
}
