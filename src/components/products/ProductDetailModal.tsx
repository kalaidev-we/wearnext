"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { X, ArrowUpRight, CheckCircle2, Layers, Clock, ShieldAlert } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (product) {
      setActiveImage(product.featuredImage);
    }
  }, [product]);

  // Keyboard escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#F8F6F0] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-charcoal/10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-charcoal shadow-md border border-charcoal/10 transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Gallery */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-linen/20 border-b md:border-b-0 md:border-r border-charcoal/10">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-linen/50 border border-charcoal/10 shadow-inner">
              <img
                src={activeImage || product.featuredImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img
                        ? "border-charcoal scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sourcing & MOQ summary */}
          <div className="mt-4 p-4 rounded-xl bg-white/60 border border-charcoal/10 text-xs space-y-1.5 font-mono text-charcoal/80">
            <div className="flex items-center gap-1.5 font-semibold text-charcoal">
              <Clock className="w-3.5 h-3.5 text-sage" />
              <span>Production Schedule</span>
            </div>
            <div>{product.leadTime}</div>
            <div className="text-[11px] text-charcoal/60">{product.moqNotice}</div>
          </div>
        </div>

        {/* Right Column: Specifications & Content */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh] flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-linen text-xs font-mono font-medium text-charcoal mb-2">
              {product.category}
            </div>

            <h2
              id="modal-product-title"
              className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal"
            >
              {product.name}
            </h2>

            <p className="mt-1 text-xs text-sage font-mono">
              Reference Code: {product.id.toUpperCase()}
            </p>

            <p className="mt-4 text-sm text-charcoal/80 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Technical Specifications Grid */}
            <div className="mt-6 pt-6 border-t border-charcoal/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 font-mono mb-3">
                Technical Specifications
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-charcoal/5">
                  <span className="text-charcoal/50 block font-mono text-[10px]">WEIGHT</span>
                  <span className="font-semibold text-charcoal">{product.gsm}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-charcoal/5">
                  <span className="text-charcoal/50 block font-mono text-[10px]">WEAVE TYPE</span>
                  <span className="font-semibold text-charcoal">{product.weave}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-charcoal/5 col-span-2">
                  <span className="text-charcoal/50 block font-mono text-[10px]">COMPOSITION</span>
                  <span className="font-semibold text-charcoal">{product.composition}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-charcoal/5">
                  <span className="text-charcoal/50 block font-mono text-[10px]">CUTTABLE WIDTH</span>
                  <span className="font-semibold text-charcoal">{product.width}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-charcoal/5">
                  <span className="text-charcoal/50 block font-mono text-[10px]">SHRINKAGE</span>
                  <span className="font-semibold text-charcoal">{product.shrinkage}</span>
                </div>
              </div>
            </div>

            {/* Applications & Colorways */}
            <div className="mt-5 space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 font-mono block mb-1.5">
                  Recommended Silhouettes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-linen/50 text-[11px] text-charcoal font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 font-mono block mb-1.5">
                  Available Colorways & Custom Dips
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.colorsAvailable.map((color, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full border border-charcoal/15 text-[11px] text-charcoal/80 bg-white"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Conversion CTA */}
          <div className="mt-8 pt-5 border-t border-charcoal/10 flex items-center gap-3">
            <Link
              href={`/quote?product=${encodeURIComponent(product.name)}`}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-[#F8F6F0] text-sm font-medium hover:bg-charcoal-light transition-all shadow-md active:scale-[0.98]"
            >
              <span>Enquire About This Fabric</span>
              <ArrowUpRight className="w-4 h-4 text-linen" />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3.5 rounded-full border border-charcoal/20 text-charcoal text-sm font-medium hover:bg-charcoal/5 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
