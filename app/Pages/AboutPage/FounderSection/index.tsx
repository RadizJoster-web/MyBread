"use client";

import FounderPhotoCard from "./FounderPhotoCard";
import FounderBio from "./FounderBio";
import FounderCredentials from "./FounderCredentials";

export default function FounderSection() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24">
        <div className="flex flex-col flex-1 min-w-0 justify-center pt-8 lg:pt-0">
          <FounderBio />
          <FounderCredentials />
        </div>

        <FounderPhotoCard />
      </div>
    </section>
  );
}
