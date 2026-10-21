import React from "react";
import { FileText, Cpu, CheckCircle, Truck, ArrowRight } from "lucide-react";

export function ManufacturingJourney() {
  const stages = [
    {
      step: "01",
      title: "Requirement Discovery",
      subtitle: "Technical Consultation & Tech-Pack Audit",
      description: "We review your garment sketches, GSM weight targets, fiber composition requirements, and target retail price points to establish a viable manufacturing framework.",
      icon: <FileText className="w-5 h-5 text-charcoal" />,
    },
    {
      step: "02",
      title: "Prototyping & Lab-Dips",
      subtitle: "Yarn Blending & Color Formulations",
      description: "Our lab creates custom pantone color dips, test weave swatches, and pre-production size prototypes for fit, handfeel, and dimensional verification.",
      icon: <Cpu className="w-5 h-5 text-charcoal" />,
    },
    {
      step: "03",
      title: "Bulk Weaving & QC",
      subtitle: "Automated Rapier Looms & 4-Point System",
      description: "Bulk production executes across calibrated looms with inline monitoring. Every single roll is graded against the 4-point textile inspection standard.",
      icon: <CheckCircle className="w-5 h-5 text-charcoal" />,
    },
    {
      step: "04",
      title: "Finishing & Global Freight",
      subtitle: "Packaging, Documentation & Dispatch",
      description: "Garments and fabric rolls undergo final pressing, barcode tagging, moisture-barrier packaging, and customs dispatch directly to your warehouse.",
      icon: <Truck className="w-5 h-5 text-charcoal" />,
    },
  ];

  return (
    <section className="py-24 bg-linen/25 border-b border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widestEditorial text-sage mb-2">
            The Production Lifecycle
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
            The Manufacturing Journey
          </h2>
          <p className="mt-3 text-base text-charcoal/70 font-light">
            A transparent four-stage pathway engineered to take your textile concept from raw yarn to global delivery with zero ambiguity.
          </p>
        </div>

        {/* 4 Stages Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="bg-white rounded-2xl p-7 border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.03)] flex flex-col justify-between relative group hover:border-charcoal/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linen flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <span className="font-serif text-3xl font-light text-charcoal/30 group-hover:text-charcoal transition-colors">
                    {stage.step}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-sage mb-1">
                  {stage.subtitle}
                </div>

                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {stage.title}
                </h3>

                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono text-charcoal/60">
                <span>Phase {stage.step} of 04</span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 hidden lg:block text-charcoal/30" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
