"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, ProjectCaseStudy } from "@/data/projects";
import { ProjectModal } from "@/components/work/ProjectModal";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All Works");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const tags = [
    "All Works",
    "Custom Apparel",
    "Heavy Knits",
    "Technical Weaves",
    "Workwear & Uniforms",
    "Linen & Flax",
    "Mill Weaving"
  ];

  const filteredProjects =
    selectedTag === "All Works"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="bg-[#F8F6F0] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 bg-charcoal text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-woven-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-linen mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span>Verified Case Studies & Production History</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F8F6F0] leading-tight">
              Crafted in Bulk. <span className="italic text-linen">Engineered</span> to Last.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#F8F6F0]/80 font-light leading-relaxed">
              Explore documented production runs executed for international streetwear brands, corporate uniform fleets, and sustainable boutique designers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tag Bar */}
      <section className="py-6 border-b border-charcoal/10 sticky top-[72px] z-30 bg-[#F8F6F0]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 ${
                selectedTag === tag
                  ? "bg-charcoal text-[#F8F6F0] shadow-sm"
                  : "bg-white text-charcoal/70 hover:text-charcoal border border-charcoal/10 hover:border-charcoal/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Asymmetric Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.04)] hover:shadow-[0_12px_40px_rgba(32,33,31,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-linen/30">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono text-charcoal border border-charcoal/10 shadow-sm">
                    {project.clientIndustry}
                  </div>

                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-white text-charcoal text-xs font-medium tracking-wide shadow-md flex items-center gap-1.5">
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-xs font-mono text-sage mb-2">
                    Scope: {project.year} • {project.clientNamePlaceholder}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal group-hover:text-charcoal-light transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.materialsUsed.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-linen/50 text-[11px] font-mono text-charcoal/80"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-8 py-5 border-t border-charcoal/10 bg-[#FAF8F4]/50 flex items-center justify-between">
                <span className="text-xs font-mono text-sage flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-charcoal" />
                  Verified Mill Scope
                </span>

                <span className="text-xs font-semibold text-charcoal flex items-center gap-1">
                  <span>Explore Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-charcoal/60 group-hover:text-charcoal" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Section */}
        <div className="mt-20 text-center bg-charcoal text-[#F8F6F0] rounded-3xl p-10 sm:p-14 border border-charcoal-light shadow-xl">
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F8F6F0]">
            Have an Upcoming Technical Production Requirement?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#F8F6F0]/70 max-w-xl mx-auto font-light leading-relaxed">
            Our textile development engineers can evaluate your tech-pack, yarn requirements, and target quantities.
          </p>

          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linen text-charcoal font-medium text-sm hover:bg-white transition-all shadow-md group"
            >
              <span>Initiate Tech-Pack Quotation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
