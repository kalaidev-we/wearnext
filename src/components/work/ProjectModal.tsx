"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ProjectCaseStudy } from "@/data/projects";
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Cpu } from "lucide-react";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#F8F6F0] rounded-3xl shadow-2xl overflow-y-auto border border-charcoal/10 p-6 sm:p-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-charcoal border border-charcoal/10 shadow-sm transition-colors"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-charcoal/10 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sage mb-2">
            <span>{project.clientIndustry}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
            {project.title}
          </h2>

          <div className="mt-2 text-xs font-mono text-charcoal/60">
            Client Accreditation: {project.clientNamePlaceholder}
          </div>
        </div>

        {/* Main Imagery */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-linen mb-8 shadow-inner border border-charcoal/10">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm">
            <h4 className="font-serif text-xl font-semibold text-charcoal mb-2">
              The Manufacturing Challenge
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm">
            <h4 className="font-serif text-xl font-semibold text-charcoal mb-2">
              The Engineering Solution
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Specifications & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-charcoal/10 pt-8 mb-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-sage mb-3">
              Materials Engineered
            </h4>
            <ul className="space-y-2">
              {project.materialsUsed.map((mat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-charcoal font-medium">
                  <Layers className="w-3.5 h-3.5 text-charcoal/50" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-sage mb-3">
              Processes & Scope Executed
            </h4>
            <ul className="space-y-2">
              {project.processesApplied.map((proc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>{proc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="p-6 rounded-2xl bg-linen/50 border border-charcoal/10 flex items-center gap-4 mb-8">
          <ShieldCheck className="w-6 h-6 text-charcoal shrink-0" />
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-charcoal font-bold">
              Substantiated Outcome
            </div>
            <div className="text-xs sm:text-sm text-charcoal/80 mt-0.5">
              {project.outcomeSummary}
            </div>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal/60 font-mono">
            Inspired by this project? Request a matching tech-pack quotation.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/quote?service=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal text-[#F8F6F0] text-xs font-medium hover:bg-charcoal-light transition-all shadow-md"
            >
              <span>Request Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-linen" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
