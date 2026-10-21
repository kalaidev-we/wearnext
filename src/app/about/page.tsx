import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import {
  Compass,
  Layers,
  Scissors,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Microscope,
  ArrowUpRight,
  Clock,
  Factory,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "About Us & Manufacturing Capabilities — WearNextFabs",
  description:
    "Discover the story, mission, and industrial textile capabilities of WearNextFabs. Precision weaving, organic cottons, and full-package garment manufacturing.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2018–2019",
      title: "Founding & Loom Modernization",
      description:
        "Inception of WearNextFabs with a focused investment in modern high-speed rapier looms and clean yarn sourcing channels.",
    },
    {
      year: "2020–2021",
      title: "Lab Calibration & 4-Point Standard",
      description:
        "Integration of computerized spectrophotometer color analysis and formalization of the 4-point textile inspection standard.",
    },
    {
      year: "2022–2023",
      title: "Sustainable Finishing & Flax Blends",
      description:
        "Commissioning of low-water enzyme washing ranges and expansion into certified European flax linen and organic combed cottons.",
    },
    {
      year: "2024–Present",
      title: "Full-Package Apparel CMT Integration",
      description:
        "Expanded production capabilities to include automated cutting and full garment assembly for international fashion labels.",
    },
  ];

  return (
    <div className="bg-[#F8F6F0] min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative py-28 sm:py-36 bg-charcoal text-[#F8F6F0] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.55] contrast-[1.1]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />
        <div className="absolute inset-0 bg-woven-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-linen mb-6">
            <Compass className="w-3.5 h-3.5 text-sage" />
            <span>Company Profile & Engineering Ethos</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#F8F6F0] leading-tight">
            The Craft of <span className="italic text-linen">Material</span> Truth.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#F8F6F0]/80 max-w-2xl mx-auto font-light leading-relaxed">
            WearNextFabs was built on a singular conviction: that modern apparel brands deserve direct mill access, uncompromised yarn integrity, and surgical precision in manufacturing.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-sage">
            <span>Commissioned by AriseAgency</span>
            <span>•</span>
            <span>Est. Verification Protocol</span>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Story */}
      <section className="py-24 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-sage">
                Our Genesis
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
                Engineering Fabric That Outlives Trend Cycles.
              </h2>
              <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
                {companyInfo.overview.story}
              </p>
              <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                In an era dominated by transient fast fashion and opaque subcontracting tiers, WearNextFabs operates with radical transparency. We collaborate with yarn spinners, dyers, and apparel designers to ensure that every warp and weft thread serves a clear tactile and functional purpose.
              </p>

              <div className="pt-4 border-t border-charcoal/10 flex items-center gap-8">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal block">
                    100%
                  </span>
                  <span className="text-xs text-charcoal/60 font-mono">Lot Traceability</span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal block">
                    &lt; 0.6
                  </span>
                  <span className="text-xs text-charcoal/60 font-mono">Delta-E Color Tolerance</span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal block">
                    AQL 2.5
                  </span>
                  <span className="text-xs text-charcoal/60 font-mono">Inspection Protocol</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-linen shadow-xl border border-charcoal/10 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
                  alt="Textile Loom Precision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-linen/25 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-charcoal/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sage block mb-3">
                  Our Mission
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
                  Progressive Textile Engineering
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                  {companyInfo.overview.mission}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center gap-2 text-xs font-mono text-sage">
                <ShieldCheck className="w-4 h-4 text-charcoal" />
                <span>Consistent Manufacturing Standards</span>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-charcoal/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sage block mb-3">
                  Our Vision
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
                  The Benchmark in Material Integrity
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                  {companyInfo.overview.vision}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center gap-2 text-xs font-mono text-sage">
                <Globe2 className="w-4 h-4 text-charcoal" />
                <span>Global Brand Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Capabilities Deep-Dive */}
      <section id="capabilities" className="py-24 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
              Technical Scope
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
              Manufacturing Capabilities
            </h2>
            <p className="mt-3 text-base text-charcoal/70 font-light">
              Comprehensive technical operations from raw fiber selection to finished garment dispatch.
            </p>
          </div>

          <div className="space-y-12">
            {companyInfo.capabilities.map((cap, idx) => (
              <div
                key={cap.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.03)]"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-linen flex items-center justify-center font-mono text-xs font-bold text-charcoal">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-sage">
                      {cap.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                    {cap.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-2">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-linen/50 text-xs font-mono text-charcoal/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-linen/30 border border-charcoal/10">
                    <img
                      src={
                        idx === 0
                          ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
                          : idx === 1
                          ? "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
                          : idx === 2
                          ? "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={cap.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality Control & Standards */}
      <section className="py-24 bg-charcoal text-[#F8F6F0] border-b border-charcoal-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
              Zero Tolerance Protocol
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#F8F6F0]">
              Quality Assurance & Testing
            </h2>
            <p className="mt-3 text-base text-[#F8F6F0]/70 font-light">
              Every yardage lot and completed garment batch must satisfy rigorous physical, mechanical, and colorimetric benchmarks before export clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-charcoal-light p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6 text-linen" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#F8F6F0] mb-2">
                Spectrophotometer Color Testing
              </h4>
              <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-light">
                Digital readings across continuous dye lots ensure color variance stays within delta-E &lt; 0.6 under D65 artificial daylight standards.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-linen" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#F8F6F0] mb-2">
                4-Point System Inspection
              </h4>
              <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-light">
                Roll-by-roll defect tallying based on the internationally recognized ASTM D5430 standard to ensure premium first-tier fabric quality.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-linen" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#F8F6F0] mb-2">
                Shrinkage & Torque Trials
              </h4>
              <p className="text-xs text-[#F8F6F0]/70 leading-relaxed font-light">
                Five-cycle wash and dry testing to verify dimensional stability, seam twisting tolerances, and pilling resistance under commercial conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sustainability Initiatives */}
      <section className="py-24 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
                Responsible Sourcing
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
                Sustainable Practices Grounded in Reality.
              </h2>
              <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                Rather than relying on unverified buzzwords, WearNextFabs implements concrete material interventions: prioritising unbleached natural fibers, closed-loop dyestuff systems, and minimal-waste cut plans.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                  <span className="text-xs text-charcoal/80">
                    Certified Organic Combed Cottons & European Flax Linen options.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                  <span className="text-xs text-charcoal/80">
                    OEKO-TEX compliant low-impact reactive dyes and enzyme washing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                  <span className="text-xs text-charcoal/80">
                    Biodegradable cardboard packaging and bulk consolidation.
                  </span>
                </div>
              </div>

              {/* Client Verification Placeholder */}
              <div className="mt-6 p-3.5 rounded-xl bg-linen/50 text-[11px] font-mono text-charcoal/70 border border-charcoal/10">
                [Client Note: Formal certificate serial numbers will be published upon client audit confirmation.]
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-charcoal/10 aspect-[16/10] bg-linen/30">
                <img
                  src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80"
                  alt="Organic Flax & Sustainable Natural Fiber"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Company Milestones Timeline */}
      <section className="py-24 bg-linen/20 border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
              Operational Trajectory
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">
              Milestones in Manufacturing
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[1.5px] before:bg-charcoal/15">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-12`}
              >
                <div className="sm:w-1/2 pl-10 sm:pl-0">
                  <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm">
                    <span className="text-xs font-mono font-bold text-sage block mb-1">
                      {m.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Center Node */}
                <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-charcoal border-4 border-[#F8F6F0] shadow-sm z-10" />

                <div className="sm:w-1/2 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion CTAs */}
      <section className="py-20 bg-charcoal text-[#F8F6F0]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#F8F6F0]">
            Ready to Build Your Next Collection?
          </h2>
          <p className="mt-4 text-base text-[#F8F6F0]/70 font-light max-w-xl mx-auto">
            Discuss fabric specs, request sample swatches, or initiate a production tech-pack review with our engineering team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linen text-charcoal font-medium text-sm hover:bg-white transition-all shadow-md"
            >
              Explore Products
            </Link>
            <Link
              href="/quote"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F6F0] border border-white/20 font-medium text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-linen" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
