import AboutHeroSection from "./AboutHeroSection";
import OurHistorySection from "./OurHistorySection";
import VisionMissionSection from "./VisionMissionSection";
import MilestoneSection from "./MilestoneSection";
import AchievementSection from "./AchievementSection";
import FounderSection from "./FounderSection";
import FaqSection from "./FaqSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-light overflow-x-hidden">
      <AboutHeroSection />
      <OurHistorySection />
      <VisionMissionSection />
      <MilestoneSection />
      <AchievementSection />
      <FounderSection />
      <FaqSection />
    </div>
  );
}
