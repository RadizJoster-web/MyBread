"use client";

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full py-20 ">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
}
