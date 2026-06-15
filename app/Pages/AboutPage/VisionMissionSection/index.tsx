"use client";

import Header from "./Header";
import VisiMissi from "./VisiMissi";
import LongTermObjective from "./LongTermObjective";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <Header />
        <VisiMissi />
        <LongTermObjective />
      </div>
    </section>
  );
}
