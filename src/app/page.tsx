import React from "react";
import { CinematicIntro } from "@/components/home/CinematicIntro";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { OurWorkPreview } from "@/components/home/OurWorkPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ManufacturingJourney } from "@/components/home/ManufacturingJourney";
import { PartnershipBanner } from "@/components/home/PartnershipBanner";
import { FinalConversion } from "@/components/home/FinalConversion";

export default function HomePage() {
  return (
    <>
      {/* Optional Cinematic intro with session memory and skip support */}
      <CinematicIntro />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Company Preview */}
      <AboutPreview />

      {/* Manufacturing Capabilities Preview */}
      <CapabilitiesPreview />

      {/* Our Work Portfolio Preview */}
      <OurWorkPreview />

      {/* Trust & Differentiators */}
      <WhyChooseUs />

      {/* Manufacturing 4-Stage Journey */}
      <ManufacturingJourney />

      {/* Partnership CTA Banner */}
      <PartnershipBanner />

      {/* Final Conversion Section */}
      <FinalConversion />
    </>
  );
}
