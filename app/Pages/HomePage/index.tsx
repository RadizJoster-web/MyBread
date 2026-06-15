import HeroSection from "./HeroSection";
import OrderedPlatformSection from "./OrderedPlatformSection";
import CategoryMenuSection from "./CategoryMenuSection";
import PopularMenuSection from "./PopularMenuSections";
import WhyChooseUsSection from "./WhyChooseUsSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import LocationSection from "./LocationSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-light overflow-x-hidden">
      <HeroSection />
      <OrderedPlatformSection />
      <CategoryMenuSection />
      <PopularMenuSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <LocationSection />
    </div>
  );
}
