import React from "react";
import Link from "next/link";
import { ArrowUpRight, Handshake, Users2 } from "lucide-react";

export function PartnershipBanner() {
  return (
    <section className="py-20 bg-charcoal text-[#F8F6F0] relative overflow-hidden border-b border-charcoal-light">
      <div className="absolute inset-0 bg-woven-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="bg-charcoal-light/70 rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-linen mb-3">
              <Handshake className="w-4 h-4 text-sage" />
              <span>Industry Collaboration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F8F6F0] tracking-tight leading-tight">
              Looking to Collaborate as a Mill, Supplier, or Brand Partner?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F8F6F0]/70 font-light leading-relaxed">
              We build long-term manufacturing agreements with spinning mills, ethical fiber providers, global fashion brands, and regional distributors.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linen text-charcoal font-medium text-sm hover:bg-white transition-all shadow-md group"
            >
              <span>Become a Partner</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
