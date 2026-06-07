import HeroSection from "./HeroSection";
import OrderedPlatformSection from "./OrderedPlatformSection";
import CategoryMenuSection from "./CategoryMenuSection";
import PopularMenuSection from "./PopilarMenuSections";
import WhyChooseUsSection from "./WhyChooseUsSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import LocationSection from "./LocationSection"

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-light overflow-x-hidden">
      <HeroSection />
      <OrderedPlatformSection />
      <CategoryMenuSection />
      <PopularMenuSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <LocationSection />
    </main>
  );
}
