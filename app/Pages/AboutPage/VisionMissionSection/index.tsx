import Header from "./Header";
import VisiMissi from "./VisiMissi";
import LongTermObjective from "./LongTermObjective";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#FAF6F0]">
      {/* subtle bg texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, #F5ECD8 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">
        <Header />
        <VisiMissi />
        <LongTermObjective />
      </div>
    </section>
  );
}
