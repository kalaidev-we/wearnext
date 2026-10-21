import React from "react";
import { CheckCircle2, ShieldCheck, Microscope, Cpu, Clock, RefreshCw } from "lucide-react";

export function WhyChooseUs() {
  const differentiators = [
    {
      title: "Lab-Calibrated Color Accuracy",
      description: "Continuous digital spectrophotometer checks ensure delta-E values remain under 0.6 across entire batch yardages.",
      icon: <Microscope className="w-5 h-5 text-charcoal" />,
    },
    {
      title: "Zero Torque Twisting & Shrinkage Control",
      description: "Pre-shrunk sanforizing and compactor processes eliminate diagonal torque twisting and guarantee dimensional stability.",
      icon: <RefreshCw className="w-5 h-5 text-charcoal" />,
    },
    {
      title: "Direct Mill Transparency",
      description: "No opaque intermediary markups. Full yarn traceability, transparent dye lot records, and open-door inline audits.",
      icon: <ShieldCheck className="w-5 h-5 text-charcoal" />,
    },
    {
      title: "Agile Rapid Prototyping",
      description: "Lab-dips formulated within 7 days; sample yardage dispatched in 2 to 3 weeks before bulk production commitment.",
      icon: <Clock className="w-5 h-5 text-charcoal" />,
    },
  ];

  return (
    <section className="py-24 bg-[#F8F6F0] border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widestEditorial text-sage mb-2">
            The WearNextFabs Standard
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
            Why Forward-Thinking Brands Choose Us
          </h2>
          <p className="mt-3 text-base text-charcoal/70 font-light">
            Engineered consistency, verified testing protocols, and transparent co-development at every phase of the manufacturing cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-linen/60 flex items-center justify-center mb-5">
                  {diff.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2.5">
                  {diff.title}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-charcoal/10 flex items-center gap-1.5 text-[11px] font-mono text-sage">
                <CheckCircle2 className="w-3.5 h-3.5 text-charcoal" />
                <span>Verified Mill Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Verification Placeholder Note */}
        <div className="mt-12 p-4 rounded-xl bg-linen/40 border border-charcoal/10 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-charcoal/70">
            [Client Note: Formal accreditation certificates (GOTS, OEKO-TEX Standard 100, SEDEX) are maintained on file and provided per client compliance audit.]
          </p>
        </div>
      </div>
    </section>
  );
}
