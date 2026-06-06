import HeroSection from "./HeroSection";
import OrderedPlatformSection from "./OrderedPlatformSection";
import CategoryMenuSection from "./CategoryMenuSection";
import PopularMenuSection from "./PopilarMenuSections";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-cream-dark overflow-x-hidden">
      <HeroSection />
      <OrderedPlatformSection />
      <CategoryMenuSection />
      <PopularMenuSection />

      <div className="w-full h-96"></div>
    </main>
  );
}
