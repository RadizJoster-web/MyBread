"use client";

import HistoryVisual from "./HistoryVisual";
import HistoryContent from "./HistoryContent";

export default function OurHistorySection() {
  return (
    <section id="our-history" className="relative w-full bg-[#FAF6F0] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Sistem Grid yang responsif, rapi, dan seimbang */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-items-center">
          {/* Kolom Kiri: Visual (Mengambil porsi 5 dari 12 kolom desktop) */}
          <div className="w-full lg:col-span-5 flex justify-center">
            <HistoryVisual />
          </div>

          {/* Kolom Kanan: Konten Teks (Mengambil porsi 7 dari 12 kolom desktop) */}
          <div className="w-full lg:col-span-7">
            <HistoryContent />
          </div>
        </div>
      </div>
    </section>
  );
}
