"use client";

import { FaStar } from "react-icons/fa6";

const ratingDistribution = [
  { stars: 5, percentage: "82%" },
  { stars: 4, percentage: "12%" },
  { stars: 3, percentage: "4%" },
  { stars: 2, percentage: "1.5%" },
  { stars: 1, percentage: "0.5%" },
];

export default function TotalRating() {
  return (
    <div className="w-full bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-[#F4EDE2] mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Kolom Kiri: Angka Rata-rata */}
      <div className="flex flex-col items-center justify-center md:border-r border-[#FAF6F0] md:pr-8 text-center">
        <h3 className="font-playfair text-5xl md:text-6xl font-bold text-bakeryText mb-2">
          4.9
        </h3>
        <div className="flex gap-1 text-[#E5C299] text-base mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="font-sans text-xs md:text-sm text-muted-cocoa">
          from 3,200+ reviews
        </p>
      </div>

      {/* Kolom Kanan & Tengah: Progress Bar Breakdown */}
      <div className="md:col-span-2 flex flex-col gap-2 w-full justify-center">
        {ratingDistribution.map((row) => (
          <div
            key={row.stars}
            className="flex items-center gap-4 text-xs font-sans text-muted-cocoa"
          >
            {/* Label Bintang */}
            <div className="flex items-center gap-1 w-6 shrink-0 justify-end">
              <span>{row.stars}</span>
              <FaStar className="text-[#E5C299] text-[9px]" />
            </div>

            {/* Progress Track */}
            <div className="flex-1 h-2 bg-[#FAF6F0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E5C299] rounded-full"
                style={{ width: row.percentage }}
              />
            </div>

            {/* Nilai Persentase */}
            <span className="w-10 text-right font-medium">
              {row.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
