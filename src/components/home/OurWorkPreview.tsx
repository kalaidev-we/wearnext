import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function OurWorkPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-charcoal text-[#F8F6F0] border-b border-charcoal-light relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widestEditorial text-sage mb-2">
              Portfolio & Production History
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#F8F6F0]">
              Selected Works & Case Studies
            </h2>
            <p className="mt-2 text-[#F8F6F0]/70 max-w-xl text-base font-light">
              A curated look at textile developments engineered for international streetwear labels, corporate uniform fleets, and sustainable resortwear brands.
            </p>
          </div>

          <Link
            href="/work"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-linen hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Case Study (7 Cols) */}
          <div className="lg:col-span-7 bg-charcoal-light rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured[0].heroImage}
                alt={featured[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-xs font-mono text-linen border border-white/15">
                {featured[0].clientIndustry}
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs font-mono text-sage mb-2">
                Production Timeline: {featured[0].year}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F6F0] mb-3">
                {featured[0].title}
              </h3>
              <p className="text-sm text-[#F8F6F0]/70 leading-relaxed font-light mb-6">
                {featured[0].summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {featured[0].materialsUsed.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-linen/90"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-linen hover:text-white transition-colors"
                >
                  <span>Explore Case Study Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Stacked Secondary Case Studies (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {featured.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="bg-charcoal-light rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between group flex-1"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white/5 shrink-0">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-sage block mb-1">
                      {item.clientIndustry}
                    </span>
                    <h4 className="font-serif text-xl font-semibold text-[#F8F6F0] group-hover:text-linen transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#F8F6F0]/60 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#F8F6F0]/50">
                    {item.materialsUsed[0]}
                  </span>
                  <Link
                    href="/work"
                    className="text-xs font-medium text-linen hover:text-white flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
