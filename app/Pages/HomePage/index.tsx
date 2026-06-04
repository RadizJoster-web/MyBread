import HeroSection from "./HeroSection";
import OrderedPlatformSection from "./OrderedPlatformSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-bakeryBg overflow-x-hidden">
      <HeroSection />
      <OrderedPlatformSection />

      <div className="w-full h-96"></div>
    </main>
  );
}
