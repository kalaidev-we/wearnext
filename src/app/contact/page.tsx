"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";
import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/Accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
    referenceId?: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Please agree to the privacy consent to submit your message.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: result.message,
        referenceId: result.referenceId,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Enquiry",
        message: "",
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
              <MessageSquare className="w-3.5 h-3.5 text-sage" />
              <span>Direct Communication & FAQs</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F8F6F0] leading-tight">
              Connect With <span className="italic text-linen">Our Team.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#F8F6F0]/80 font-light leading-relaxed">
              Whether you need fabric advice, sample swatches, or wish to schedule a mill consultation, we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-charcoal">
                Headquarters & Facilities
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-charcoal/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal block">Manufacturing Hub</span>
                    <span>{companyInfo.contact.address.displayAddress}</span>
                    <span className="block text-[11px] text-charcoal/50 font-mono mt-0.5">
                      {companyInfo.contact.address.city}, {companyInfo.contact.address.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal block">Electronic Mail</span>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="hover:underline text-charcoal font-medium"
                    >
                      {companyInfo.contact.email}
                    </a>
                    <span className="block text-[11px] text-charcoal/50 font-mono mt-0.5">
                      Secondary: {companyInfo.contact.secondaryEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal block">Telephone & WhatsApp</span>
                    <span>{companyInfo.contact.phone}</span>
                    <span className="block text-[11px] text-charcoal/50 font-mono mt-0.5">
                      {companyInfo.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quote Quick Box */}
              <div className="pt-6 border-t border-charcoal/10">
                <div className="text-xs font-mono text-sage uppercase tracking-wider mb-1">
                  Looking for pricing?
                </div>
                <h4 className="font-serif text-lg font-semibold text-charcoal mb-2">
                  Request a Formal Quotation
                </h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans mb-4">
                  For tech-packs, order quantities, and bulk timelines, use our dedicated multi-step quotation wizard.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#F8F6F0] text-xs font-medium hover:bg-charcoal-light transition-all shadow-sm group"
                >
                  <span>Launch Quote Wizard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-linen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Client Notice Box */}
            <div className="p-4 rounded-2xl bg-linen/40 border border-charcoal/10 text-xs font-mono text-charcoal/70">
              <span className="font-bold block mb-1">Confidentiality Assured:</span>
              All tech-packs, CAD sketches, and proprietary silhouettes shared with WearNextFabs remain protected under strict commercial confidentiality.
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-charcoal/10 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mb-8 font-light">
              Fill out the form below and a representative will reply within 24 business hours.
            </p>

            {status.type === "success" && (
              <div className="mb-6 p-5 rounded-2xl bg-linen border border-charcoal/20">
                <div className="flex items-center gap-2 text-charcoal font-semibold mb-1 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-charcoal" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-xs text-charcoal/80 mb-2">{status.message}</p>
                {status.referenceId && (
                  <span className="text-xs font-mono font-bold text-charcoal">
                    Reference: {status.referenceId}
                  </span>
                )}
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Thorne"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                    Phone / WhatsApp <span className="text-xs text-charcoal/40">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                    Subject / Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Fabric Sampling Request">Fabric Sampling Request</option>
                    <option value="Custom Weaving Consultation">Custom Weaving Consultation</option>
                    <option value="Apparel Cut & Make Order">Apparel Cut & Make Order</option>
                    <option value="Supplier / Mill Introduction">Supplier / Mill Introduction</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can WearNextFabs support your manufacturing or fabric development?"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors leading-relaxed"
                />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-charcoal border-charcoal/30 focus:ring-0"
                  />
                  <span className="text-xs text-charcoal/70 leading-relaxed font-sans">
                    I consent to WearNextFabs storing my information to reply to this enquiry in accordance with the privacy policy.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light active:scale-[0.98] transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5 text-linen" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24">
        <div className="text-center mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
            Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-charcoal/70 max-w-xl mx-auto font-light">
            Answers regarding quotations, prototyping, fabric minimums, and manufacturing tolerances.
          </p>
        </div>

        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}
