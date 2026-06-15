import AboutHeroSection from "./AboutHeroSection";
import OurHistorySection from "./OurHistorySection";
import VisionMissionSection from "./VisionMissionSection";
import MilestoneSection from "./MilestoneSection";
import FounderSection from "./FounderSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-light overflow-x-hidden">
      <AboutHeroSection />
      <OurHistorySection />
      <VisionMissionSection />
      <MilestoneSection />
      <FounderSection />
    </div>
  );
}
