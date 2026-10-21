"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Handshake,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Send,
  Loader2,
  AlertCircle,
  FileUp,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    country: "",
    partnershipType: "Brand / Apparel Retailer",
    website: "",
    proposalDescription: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
    referenceId?: string;
  }>({ type: "idle", message: "" });

  const partnerCategories = [
    {
      title: "Fashion Brands & Labels",
      desc: "Contract manufacturing, private label development, and dedicated loom capacity allocation for recurring seasonal collections.",
      badge: "OEM / ODM",
    },
    {
      title: "Yarn Spinners & Mills",
      desc: "Direct supply agreements for organic cotton, recycled filaments, and specialized natural fibers meeting strict lot-uniformity standards.",
      badge: "Supply Chain",
    },
    {
      title: "Sourcing & Buying Agencies",
      desc: "Regional representation, local sample review hubs, and technical merchandising coordination across European and US markets.",
      badge: "Commercial",
    },
    {
      title: "Wholesale & Distributors",
      desc: "Bulk roll stocking partnerships and regional master distribution for our core commercial fabric lines.",
      badge: "Distribution",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Please agree to the privacy policy and consent to be contacted.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application.");
      }

      setStatus({
        type: "success",
        message: result.message,
        referenceId: result.referenceId,
      });

      // Reset form on success
      setFormData({
        fullName: "",
        companyName: "",
        businessEmail: "",
        phoneNumber: "",
        country: "",
        partnershipType: "Brand / Apparel Retailer",
        website: "",
        proposalDescription: "",
        consent: false,
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F6F0] min-h-screen pb-24">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-charcoal text-[#F8F6F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-woven-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-linen mb-4">
              <Handshake className="w-3.5 h-3.5 text-sage" />
              <span>B2B Commercial Alliances</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F8F6F0] leading-tight">
              Become a <span className="italic text-linen">Partner.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#F8F6F0]/80 font-light leading-relaxed">
              We collaborate with global fashion labels, yarn spinning mills, ethical fiber producers, and regional distributors to build resilient, transparent textile supply networks.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
              Engagement Models
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              Who We Collaborate With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-charcoal/10 shadow-[0_2px_15px_rgba(32,33,31,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-linen text-[10px] font-mono text-charcoal mb-4">
                    {cat.badge}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-charcoal/10 flex items-center gap-1.5 text-xs font-mono text-sage">
                  <CheckCircle2 className="w-3.5 h-3.5 text-charcoal" />
                  <span>SLA Backed Alliance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Pathway */}
      <section className="py-20 bg-linen/20 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
              Onboarding Architecture
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              How We Establish Partnerships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Proposal Review", desc: "Our partnership desk reviews your proposal, capacity profile, or brand requirements." },
              { step: "02", title: "Audit & Swatch Trial", desc: "Exchange of physical swatches, technical lab trials, and commercial terms alignment." },
              { step: "03", title: "Commercial SLA", desc: "Execution of supply agreement, lead-time protections, and QC benchmarks." },
              { step: "04", title: "Production Scale", desc: "Integrated manufacturing schedule and regular batch dispatches." },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl border border-charcoal/10 shadow-sm">
                <span className="font-serif text-3xl font-light text-charcoal/30 block mb-2">
                  {s.step}
                </span>
                <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/10 shadow-xl">
          <div className="border-b border-charcoal/10 pb-6 mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-sage mb-1">
              Direct Application Portal
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal">
              Partnership Enquiry Form
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light">
              Submit your proposed partnership scope below. All proposals are handled under strict confidentiality.
            </p>
          </div>

          {/* Success Notification */}
          {status.type === "success" && (
            <div className="mb-8 p-6 rounded-2xl bg-linen border border-charcoal/20 animate-in fade-in">
              <div className="flex items-center gap-3 text-charcoal font-semibold mb-2">
                <ShieldCheck className="w-5 h-5 text-charcoal" />
                <span>Application Successfully Received</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/80 mb-3">{status.message}</p>
              {status.referenceId && (
                <div className="inline-block px-3 py-1.5 rounded-lg bg-white text-xs font-mono font-bold text-charcoal border border-charcoal/10">
                  Reference: {status.referenceId}
                </div>
              )}
            </div>
          )}

          {/* Error Notification */}
          {status.type === "error" && (
            <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-2.5 text-xs animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Vance Apparel Ltd"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Business Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  placeholder="eleanor@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Country */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Operating Country / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. United Kingdom / United States"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                />
              </div>

              {/* Partnership Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Partnership Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                >
                  <option value="Brand / Apparel Retailer">Brand / Apparel Retailer</option>
                  <option value="Spinning Mill / Fiber Supplier">Spinning Mill / Fiber Supplier</option>
                  <option value="Sourcing / Buying House">Sourcing / Buying House</option>
                  <option value="Wholesale Distributor">Wholesale Distributor</option>
                  <option value="Other Commercial Collaboration">Other Commercial Collaboration</option>
                </select>
              </div>
            </div>

            {/* Website (Optional) */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Company Website / Lookbook <span className="text-xs text-charcoal/40">(Optional)</span>
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Proposed Collaboration Scope & Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.proposalDescription}
                onChange={(e) => setFormData({ ...formData, proposalDescription: e.target.value })}
                placeholder="Describe your target volumes, product lines, timelines, or collaboration objectives..."
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors leading-relaxed"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-charcoal border-charcoal/30 focus:ring-0"
                />
                <span className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  I consent to WearNextFabs holding this commercial enquiry to evaluate partnership feasibility and contacting me via business email or phone.
                </span>
              </label>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-charcoal/50">
                Encrypted submission • Direct recipient routing
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light active:scale-[0.98] transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Partnership Proposal</span>
                    <Send className="w-3.5 h-3.5 text-linen" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
