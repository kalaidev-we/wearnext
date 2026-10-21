import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-24 bg-linen/30 border-b border-charcoal/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-charcoal/10 shadow-xl border border-charcoal/10 relative">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80"
                alt="WearNextFabs Textile Loom Precision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Overlaid Editorial Note */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-lg border border-charcoal/10 max-w-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-sage uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-charcoal" />
                <span>Verified Quality Standard</span>
              </div>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                4-Point inspection protocol & spectrophotometer color accuracy on all production lots.
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widestEditorial uppercase text-sage">
              <Compass className="w-3.5 h-3.5" />
              <span>Heritage & Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
              Where Ancient Loom Craft Meets Modern Industrial Precision.
            </h2>

            <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
              {companyInfo.overview.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-charcoal/10">
              <div>
                <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">
                  Our Mission
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {companyInfo.overview.mission}
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">
                  Our Vision
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {companyInfo.overview.vision}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light transition-all shadow-md group"
              >
                <span>Read Full Company Profile</span>
                <ArrowUpRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
