"use client";

import AboutHeroBackground from "./AboutHeroBackground";
import AboutHeroContent from "./AboutHeroContent";

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="
        relative w-full
        min-h-[68vh] sm:min-h-[72vh]
        flex items-center justify-center
        pt-32 pb-20
        overflow-hidden
      "
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 40%, #F5ECD8 0%, #FAF6F0 55%, #F0E8D8 100%)",
      }}
    >
      {/* subtle vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(240,232,216,0.55) 100%)",
        }}
      />

      {/* 1. Floating bakery icons */}
      <AboutHeroBackground />

      {/* 2. Text content */}
      <AboutHeroContent />
    </section>
  );
}
