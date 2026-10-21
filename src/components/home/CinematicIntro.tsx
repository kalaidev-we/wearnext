"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    const hasSeenIntro = sessionStorage.getItem("wnf_intro_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasSeenIntro && !prefersReducedMotion) {
      setIsVisible(true);

      // Sequence timeline:
      // 0.0s - 0.7s: Scene 1 (Woven Fabric Texture & Scale)
      // 0.7s - 1.4s: Scene 2 (SVG Thread Geometry)
      // 1.4s - 2.2s: Scene 3 (Brand Reveal: WEARNEXTFABS)
      // 2.2s+: Scene 4 (Soft dissolve into homepage)
      const t1 = setTimeout(() => setStep(2), 700);
      const t2 = setTimeout(() => setStep(3), 1400);
      const t3 = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("wnf_intro_seen", "true");
      }, 2300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("wnf_intro_seen", "true");
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal text-[#F8F6F0] overflow-hidden select-none"
      >
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono tracking-wider text-white/70 hover:text-white hover:border-white transition-colors"
          aria-label="Skip Introduction"
        >
          <span>SKIP</span>
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Scene 1: Woven Fabric Macro Texture */}
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{
            opacity: step === 1 ? 0.45 : 0.15,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-overlay filter contrast-125"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Scene 2: SVG Thread Lines Drawing Into Place */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <svg
            className="w-full max-w-lg h-48 px-4"
            viewBox="0 0 500 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Warp & Weft Thread Lines */}
            <motion.path
              d="M 50 60 L 450 60"
              stroke="#E8E1D5"
              strokeWidth="1.5"
              strokeDasharray="400"
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            <motion.path
              d="M 120 10 L 120 110 M 200 10 L 200 110 M 280 10 L 280 110 M 360 10 L 360 110"
              stroke="#9A9A82"
              strokeWidth="1"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: step >= 2 ? 0 : 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Scene 3: Brand Identity Wordmark Reveal */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 15,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          >
            <span className="text-xs uppercase tracking-widestEditorial text-sage font-mono block mb-2">
              Textile Engineering & Precision Manufacturing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.08em" }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              letterSpacing: step >= 3 ? "0.04em" : "0.08em",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F8F6F0]"
          >
            WEAR<span className="italic font-light text-linen">NEXT</span>FABS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: step >= 3 ? 1 : 0,
              y: step >= 3 ? 0 : 10,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            className="mt-3 text-sm sm:text-base font-serif italic text-linen tracking-wide"
          >
            “Weaving What&apos;s Next.”
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
