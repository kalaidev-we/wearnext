import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { Layers, Scissors, Sparkles, CheckCircle, ArrowUpRight } from "lucide-react";

export function CapabilitiesPreview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-charcoal" />;
      case "Scissors":
        return <Scissors className="w-6 h-6 text-charcoal" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-charcoal" />;
      case "CheckCircle":
      default:
        return <CheckCircle className="w-6 h-6 text-charcoal" />;
    }
  };

  return (
    <section className="py-24 bg-[#F8F6F0] border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widestEditorial text-sage mb-2">
            Verified Production Operations
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
            Industrial Capabilities
          </h2>
          <p className="mt-3 text-base text-charcoal/70 font-light">
            End-to-end textile engineering from raw fiber selection through computer-controlled rapier weaving, eco-dyeing, and full-package garment assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-2xl p-7 border border-charcoal/10 shadow-[0_2px_12px_rgba(32,33,31,0.03)] hover:shadow-[0_8px_24px_rgba(32,33,31,0.06)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-linen/50 flex items-center justify-center mb-5">
                  {getIcon(cap.icon)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans mb-4">
                  {cap.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-charcoal/10">
                  {cap.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-linen/40 text-[10px] font-mono text-charcoal/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about#capabilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-sage transition-colors"
          >
            <span>Explore In-Depth Technical Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
