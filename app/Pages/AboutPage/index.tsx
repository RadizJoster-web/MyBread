import AboutHeroSection from "./AboutHeroSection";
import OurHistory from "./OurHistory";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-light overflow-x-hidden">
      <AboutHeroSection />
      <OurHistory />
    </div>
  );
}
