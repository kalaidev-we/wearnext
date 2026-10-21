"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal text-[#F8F6F0]">
      {/* Background Textile Visual with subtle zoom/parallax */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.62] contrast-[1.1]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Editorial Gradient & Texture Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
      <div className="absolute inset-0 bg-woven-grid opacity-30 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center">
        {/* Editorial Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono tracking-widestEditorial uppercase text-linen mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-sage" />
          <span>Textile Engineering & Precision Manufacturing</span>
        </motion.div>

        {/* Headline Line Reveal with vertical text mask */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-[#F8F6F0] font-normal"
          >
            Weaving What&apos;s <span className="italic font-light text-linen">Next.</span>
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[#F8F6F0]/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover a new perspective on materials, craftsmanship, and modern precision manufacturing.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-linen text-charcoal font-medium text-sm tracking-wide hover:bg-[#FAF8F4] active:scale-[0.98] transition-all shadow-lg group"
          >
            <Compass className="w-4 h-4 text-charcoal/70 group-hover:rotate-45 transition-transform" />
            <span>Explore Products</span>
          </Link>

          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F6F0] backdrop-blur-md border border-white/20 font-medium text-sm tracking-wide active:scale-[0.98] transition-all group"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4 text-linen group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Key Attributes Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-sage font-mono">Precision</div>
            <div className="text-sm font-medium text-linen mt-0.5">Automated Weaving</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-sage font-mono">Yarn Integrity</div>
            <div className="text-sm font-medium text-linen mt-0.5">Organic & Combed Blends</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-sage font-mono">Capabilities</div>
            <div className="text-sm font-medium text-linen mt-0.5">Full Cut-Make-Trim</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-sage font-mono">B2B Ready</div>
            <div className="text-sm font-medium text-linen mt-0.5">Global Export Partner</div>
          </div>
        </motion.div>
      </div>

      {/* Discreet Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none text-white/50"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono mb-1">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-linen/70" />
      </motion.div>
    </section>
  );
}
