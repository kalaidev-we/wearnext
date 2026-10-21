"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileUp,
  X,
  Loader2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  Layers,
  Send,
  MessageCircle,
  Copy,
  Printer,
} from "lucide-react";

export function QuoteWizard() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || searchParams.get("service");

  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Requirements
    serviceType: prefilledProduct || "Custom Weave / Fabric Development",
    estimatedQuantity: "500–1,000",
    projectStage: "Have a design or specification",
    timeline: "Within 1–2 months",

    // Step 2: Contact & Specs
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    country: "",
    projectDescription: prefilledProduct
      ? `Enquiring specifically regarding bulk production and sampling for: ${prefilledProduct}.`
      : "",
    estimatedBudget: "",
    fileName: "",
    fileSize: "",
    consent: false,
  });

  const [uploadError, setUploadError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceId?: string;
    message?: string;
  } | null>(null);

  const [validationError, setValidationError] = useState("");
  const [copiedRef, setCopiedRef] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError("");
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (< 15MB)
    if (file.size > 15 * 1024 * 1024) {
      setUploadError("File exceeds the maximum 15MB limit. Please upload a smaller file.");
      return;
    }

    // Check approved types: PDF, images, AI, ZIP
    const validExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".ai", ".eps", ".zip"];
    const extension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!validExtensions.includes(extension)) {
      setUploadError("Unsupported format. Please upload PDF, PNG, JPG, AI, or ZIP archive.");
      return;
    }

    const sizeFormatted = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    setFormData((prev) => ({
      ...prev,
      fileName: file.name,
      fileSize: sizeFormatted,
    }));
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      fileName: "",
      fileSize: "",
    }));
  };

  // Step 1 Validation
  const validateStep1 = () => {
    setValidationError("");
    if (!formData.serviceType || !formData.estimatedQuantity || !formData.projectStage || !formData.timeline) {
      setValidationError("Please complete all requirement selections before proceeding.");
      return false;
    }
    return true;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    setValidationError("");
    if (
      !formData.fullName.trim() ||
      !formData.businessEmail.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.country.trim() ||
      !formData.projectDescription.trim()
    ) {
      setValidationError("Please fill out all mandatory contact and project description fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.businessEmail)) {
      setValidationError("Please enter a valid business email address.");
      return false;
    }

    if (!formData.consent) {
      setValidationError("Please agree to the privacy and contact consent checkbox.");
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const prevStep = () => {
    setValidationError("");
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setValidationError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quotation request.");
      }

      setSubmissionResult({
        success: true,
        referenceId: data.referenceId,
        message: data.message,
      });
    } catch (err: any) {
      setValidationError(err.message || "An unexpected error occurred during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReference = () => {
    if (submissionResult?.referenceId) {
      navigator.clipboard.writeText(submissionResult.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  // If successfully submitted, render post-submission confirmation view
  if (submissionResult?.success) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-charcoal/10 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mx-auto mb-6 text-charcoal">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-sage block mb-2">
            Quotation Registration Complete
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal">
            Thank You, {formData.fullName}.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
            Your quotation request has been securely logged. Our textile development engineers and production managers will examine your tech-pack specifications within 24 to 48 business hours.
          </p>

          {/* Reference Card */}
          <div className="mt-8 p-6 rounded-2xl bg-[#F8F6F0] border border-charcoal/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 block">
                Official Enquiry Reference
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-charcoal">
                {submissionResult.referenceId}
              </span>
            </div>

            <button
              onClick={copyReference}
              className="px-4 py-2 rounded-xl bg-white border border-charcoal/15 text-xs font-mono font-medium text-charcoal hover:bg-linen/40 flex items-center gap-1.5 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedRef ? "Copied to Clipboard!" : "Copy Reference"}</span>
            </button>
          </div>

          {/* Next Steps List */}
          <div className="mt-10 text-left border-t border-charcoal/10 pt-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal/60 mb-4">
              What Happens Next
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal/80">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-linen flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  1
                </span>
                <div>
                  <span className="font-semibold text-charcoal block">Technical Feasibility Audit</span>
                  <p className="text-xs text-charcoal/60 font-light">
                    Our loom technicians review yarn counts, GSM balance, and dyeing suitability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-linen flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  2
                </span>
                <div>
                  <span className="font-semibold text-charcoal block">Commercial Estimate & Timelines</span>
                  <p className="text-xs text-charcoal/60 font-light">
                    You receive an itemized breakdown covering lab-dips, sample meterage, and FOB/CMT bulk pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-linen flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  3
                </span>
                <div>
                  <span className="font-semibold text-charcoal block">Sample Yardage Dispatch</span>
                  <p className="text-xs text-charcoal/60 font-light">
                    Physical swatches and lab-dip approvals sent via courier for your touch evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up CTA Actions */}
          <div className="mt-10 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hello WearNextFabs, I have submitted a quotation enquiry with Reference ID: ${submissionResult.referenceId} for ${formData.serviceType}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Follow up on WhatsApp</span>
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-charcoal/20 text-charcoal font-medium text-xs sm:text-sm hover:bg-charcoal/5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Summary</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-12 border border-charcoal/10 shadow-2xl relative">
      {/* Wizard Progress Stepper */}
      <div className="border-b border-charcoal/10 pb-8 mb-8">
        <div className="flex items-center justify-between max-w-xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center gap-2.5">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                currentStep >= 1
                  ? "bg-charcoal text-[#F8F6F0]"
                  : "bg-linen text-charcoal/50"
              }`}
            >
              01
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal font-medium hidden sm:inline">
              Requirements
            </span>
          </div>

          <div
            className={`flex-1 h-[2px] mx-3 sm:mx-4 transition-colors ${
              currentStep >= 2 ? "bg-charcoal" : "bg-charcoal/15"
            }`}
          />

          {/* Step 2 */}
          <div className="flex items-center gap-2.5">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                currentStep >= 2
                  ? "bg-charcoal text-[#F8F6F0]"
                  : "bg-linen text-charcoal/50"
              }`}
            >
              02
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal font-medium hidden sm:inline">
              Details & Specs
            </span>
          </div>

          <div
            className={`flex-1 h-[2px] mx-3 sm:mx-4 transition-colors ${
              currentStep >= 3 ? "bg-charcoal" : "bg-charcoal/15"
            }`}
          />

          {/* Step 3 */}
          <div className="flex items-center gap-2.5">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                currentStep === 3
                  ? "bg-charcoal text-[#F8F6F0]"
                  : "bg-linen text-charcoal/50"
              }`}
            >
              03
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal font-medium hidden sm:inline">
              Review & Submit
            </span>
          </div>
        </div>
      </div>

      {/* Inline Validation Alert */}
      {validationError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{validationError}</span>
        </div>
      )}

      {/* STEP 1: Project Requirements */}
      {currentStep === 1 && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
              Step 1: Define Project Scope & Volume
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-charcoal/70 font-light">
              Select the primary textile substrate, expected production volume, and project readiness stage.
            </p>
          </div>

          {/* Service / Product Type */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/80 mb-3">
              Target Product or Manufacturing Service <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Custom Weave / Fabric Development",
                "Combed Cottons & Oxford Pinpoint",
                "Hydro-Shield Ripstop Twills",
                "European Flax Linen Blends",
                "Heavyweight French Terry & Knits",
                "Industrial Uniform Drill Twills",
                "Cut-Make-Trim (CMT) Apparel Production",
                "Other / Bespoke Sourcing Program",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: opt })}
                  className={`p-4 rounded-2xl text-left border text-xs sm:text-sm transition-all ${
                    formData.serviceType === opt
                      ? "bg-linen/60 border-charcoal font-semibold text-charcoal shadow-sm"
                      : "bg-[#F8F6F0] border-charcoal/10 text-charcoal/80 hover:bg-linen/20"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Tiers */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/80 mb-3">
              Estimated Quantity (Meters or Finished Garments) <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {["Below 100", "100–500", "500–1,000", "1,000+", "Not sure yet"].map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setFormData({ ...formData, estimatedQuantity: qty })}
                  className={`p-3.5 rounded-xl text-center border text-xs transition-all ${
                    formData.estimatedQuantity === qty
                      ? "bg-charcoal text-[#F8F6F0] border-charcoal font-bold shadow-sm"
                      : "bg-[#F8F6F0] border-charcoal/10 text-charcoal hover:bg-linen/30"
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

          {/* Project Stage */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/80 mb-3">
              Current Project Stage <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Have a design or specification", desc: "Tech-pack, CAD sketch, or physical swatch ready." },
                { title: "Need help with development", desc: "Concept stage; seeking guidance on yarn & weaves." },
                { title: "Exploring options", desc: "Researching feasibility, MOQs, and price targets." },
              ].map((stage) => (
                <button
                  key={stage.title}
                  type="button"
                  onClick={() => setFormData({ ...formData, projectStage: stage.title })}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all ${
                    formData.projectStage === stage.title
                      ? "bg-linen/60 border-charcoal font-semibold text-charcoal shadow-sm"
                      : "bg-[#F8F6F0] border-charcoal/10 text-charcoal/80 hover:bg-linen/20"
                  }`}
                >
                  <div className="font-semibold text-charcoal">{stage.title}</div>
                  <div className="text-[11px] text-charcoal/60 mt-1">{stage.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/80 mb-3">
              Target Delivery Timeline <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["As soon as possible", "Within 1–2 months", "3+ months", "Flexible"].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData({ ...formData, timeline: time })}
                  className={`p-3.5 rounded-xl text-center border text-xs transition-all ${
                    formData.timeline === time
                      ? "bg-charcoal text-[#F8F6F0] border-charcoal font-bold shadow-sm"
                      : "bg-[#F8F6F0] border-charcoal/10 text-charcoal hover:bg-linen/30"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Step 1 Actions */}
          <div className="pt-6 border-t border-charcoal/10 flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light transition-all shadow-md group"
            >
              <span>Continue to Contact & Details</span>
              <ArrowRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Contact & Project Details */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
              Step 2: Contact Information & Project Tech-Pack
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-charcoal/70 font-light">
              Provide your business contact details and any relevant tech-pack specifications or mood boards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Julian Hayes"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Brand or Company Name <span className="text-xs text-charcoal/40">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. Atelier Hayes"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                placeholder="julian@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Delivery Destination / Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. United States / France"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                Estimated Target Budget <span className="text-xs text-charcoal/40">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                placeholder="e.g. $10,000 – $25,000 USD"
                className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
              Detailed Project Description & Target Specs <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder="Outline specific garment silhouettes, target GSM weights, weave requirements, packaging or labeling instructions..."
              className="w-full px-4 py-3 rounded-xl bg-[#F8F6F0] border border-charcoal/15 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-charcoal focus:bg-white transition-colors leading-relaxed"
            />
          </div>

          {/* Secure File Upload (Optional) */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
              Attach Tech-Pack, CAD, or Reference Swatch Image <span className="text-xs text-charcoal/40">(Optional, Max 15MB)</span>
            </label>

            {formData.fileName ? (
              <div className="p-4 rounded-2xl bg-linen/50 border border-charcoal/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-charcoal/10">
                    <FileUp className="w-5 h-5 text-charcoal" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-charcoal block line-clamp-1">
                      {formData.fileName}
                    </span>
                    <span className="text-[11px] font-mono text-charcoal/60">
                      {formData.fileSize} • Staged for encrypted upload
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1.5 rounded-lg text-charcoal/60 hover:text-charcoal hover:bg-white transition-colors"
                  aria-label="Remove uploaded file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-charcoal/20 hover:border-charcoal/40 bg-[#F8F6F0]/60 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                <FileUp className="w-6 h-6 text-charcoal/40 group-hover:text-charcoal transition-colors mb-2" />
                <span className="text-xs font-medium text-charcoal">
                  Click to select file or drag & drop here
                </span>
                <span className="text-[11px] font-mono text-charcoal/50 mt-1">
                  Supported formats: PDF, PNG, JPG, AI, EPS, ZIP
                </span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.png,.jpg,.jpeg,.ai,.eps,.zip"
                  className="hidden"
                />
              </label>
            )}

            {uploadError && (
              <p className="mt-2 text-xs text-red-600 font-mono">{uploadError}</p>
            )}
          </div>

          {/* Consent */}
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
                I consent to WearNextFabs storing my information and tech-pack specifications to generate and send an official manufacturing quotation.
              </span>
            </label>
          </div>

          {/* Step 2 Actions */}
          <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-charcoal/20 text-charcoal text-xs font-medium hover:bg-charcoal/5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Requirements</span>
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light transition-all shadow-md group"
            >
              <span>Review Quotation Summary</span>
              <ArrowRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Review & Final Submission */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
              Step 3: Review & Transmit Enquiry
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-charcoal/70 font-light">
              Please verify your project parameters before finalizing transmission to our engineering desk.
            </p>
          </div>

          {/* Structured Summary Review Card */}
          <div className="bg-[#F8F6F0] rounded-2xl p-6 sm:p-8 border border-charcoal/10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">SERVICE OR PRODUCT</span>
                <span className="font-semibold text-charcoal text-sm">{formData.serviceType}</span>
              </div>
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">ESTIMATED QUANTITY</span>
                <span className="font-semibold text-charcoal text-sm">{formData.estimatedQuantity}</span>
              </div>
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">PROJECT STAGE</span>
                <span className="font-semibold text-charcoal">{formData.projectStage}</span>
              </div>
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">TARGET TIMELINE</span>
                <span className="font-semibold text-charcoal">{formData.timeline}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">PRIMARY CONTACT</span>
                <span className="font-semibold text-charcoal">
                  {formData.fullName} {formData.companyName ? `(${formData.companyName})` : ""}
                </span>
                <span className="block text-charcoal/70">{formData.businessEmail}</span>
                <span className="block text-charcoal/70">{formData.phoneNumber}</span>
              </div>
              <div>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block">DESTINATION COUNTRY</span>
                <span className="font-semibold text-charcoal">{formData.country}</span>
                <span className="font-mono uppercase text-[10px] text-charcoal/50 block mt-2">ESTIMATED BUDGET</span>
                <span className="font-semibold text-charcoal">{formData.estimatedBudget || "Not specified"}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-charcoal/10 text-xs">
              <span className="font-mono uppercase text-[10px] text-charcoal/50 block mb-1">PROJECT DESCRIPTION</span>
              <p className="text-charcoal/80 font-light leading-relaxed whitespace-pre-wrap">
                {formData.projectDescription}
              </p>
            </div>

            {formData.fileName && (
              <div className="pt-4 border-t border-charcoal/10 text-xs flex items-center gap-2 font-mono text-charcoal">
                <FileUp className="w-4 h-4 text-sage" />
                <span>Attachment: {formData.fileName} ({formData.fileSize})</span>
              </div>
            )}
          </div>

          {/* Submission Security Notice */}
          <div className="p-4 rounded-xl bg-linen/50 border border-charcoal/10 flex items-center gap-3 text-xs text-charcoal/80 font-mono">
            <ShieldCheck className="w-5 h-5 text-charcoal shrink-0" />
            <span>
              Direct transmission to enquiries@wearnextfabs.com. A unique enquiry reference number will be generated immediately.
            </span>
          </div>

          {/* Step 3 Actions */}
          <div className="pt-6 border-t border-charcoal/10 flex items-center justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-charcoal/20 text-charcoal text-xs font-medium hover:bg-charcoal/5 transition-colors disabled:opacity-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Edit Details</span>
            </button>

            <button
              type="button"
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light active:scale-[0.98] transition-all shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Registering Quotation...</span>
                </>
              ) : (
                <>
                  <span>Transmit Formal Quotation Request</span>
                  <Send className="w-4 h-4 text-linen" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
