"use client";

import { motion, Variants } from "framer-motion";
import { CATEGORIES } from "@/assets/data/productData/productData";
import { ProductCategory } from "@/type/productDataType";

const RATING_OPTIONS = [
  { label: "All Ratings", value: 0 },
  { label: "4.5", value: 4.5 },
  { label: "4.7", value: 4.7 },
  { label: "4.8", value: 4.8 },
  { label: "4.9", value: 4.9 },
];

interface FilterSidebarProps {
  activeCategory: ProductCategory;
  onCategoryChange: (c: ProductCategory) => void;
  priceRange: [number, number];
  onPriceRangeChange: (r: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (r: number) => void;
  onReset: () => void;
}

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const MAX_PRICE = 150000;

export default function FilterSidebar({
  activeCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  onReset,
}: FilterSidebarProps) {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="w-full rounded-2xl p-6 shrink-0"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(212,163,115,0.2)",
        boxShadow: "0 2px 20px rgba(74,53,37,0.06)",
      }}
    >
      {/* Title row */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-base font-bold"
          style={{
            color: "#4a3525",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Product Filter
        </h2>
        <button
          onClick={onReset}
          className="text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: "#d4a373", fontFamily: "'Inter', sans-serif" }}
        >
          Reset
        </button>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-5"
        style={{ background: "rgba(212,163,115,0.18)" }}
      />

      {/* KATEGORI */}
      <section className="mb-6">
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          category
        </p>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map(({ label }) => {
            const active = activeCategory === label;
            return (
              <li key={label}>
                <button
                  onClick={() => onCategoryChange(label)}
                  className="w-full flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2.5">
                    {/* Radio dot */}
                    <span
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        borderColor: active
                          ? "#4a3525"
                          : "rgba(160,120,60,0.35)",
                        background: active ? "#4a3525" : "transparent",
                      }}
                    >
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#fdf8f0" }}
                        />
                      )}
                    </span>
                    <span
                      className="text-sm transition-colors"
                      style={{
                        color: active ? "#4a3525" : "#7a6a53",
                        fontWeight: active ? 600 : 400,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div
        className="h-px mb-5"
        style={{ background: "rgba(212,163,115,0.18)" }}
      />

      {/* RENTANG HARGA */}
      <section className="mb-6">
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          Price Range
        </p>

        <div className="flex items-center gap-2 mb-3">
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0] || ""}
            onChange={(e) =>
              onPriceRangeChange([
                Math.max(0, Number(e.target.value)),
                priceRange[1],
              ])
            }
            className="w-full px-3 py-1.5 rounded-lg text-xs outline-none"
            style={{
              background: "rgba(245,237,216,0.5)",
              border: "1px solid rgba(212,163,115,0.25)",
              color: "#4a3525",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <span className="text-xs shrink-0" style={{ color: "#7a6a53" }}>
            —
          </span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1] === MAX_PRICE ? "" : priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([
                priceRange[0],
                Math.min(MAX_PRICE, Number(e.target.value) || MAX_PRICE),
              ])
            }
            className="w-full px-3 py-1.5 rounded-lg text-xs outline-none"
            style={{
              background: "rgba(245,237,216,0.5)",
              border: "1px solid rgba(212,163,115,0.25)",
              color: "#4a3525",
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>

        {/* Range slider */}
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          step={5000}
          value={priceRange[1]}
          onChange={(e) =>
            onPriceRangeChange([priceRange[0], Number(e.target.value)])
          }
          className="w-full h-1 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: "#4a3525" }}
        />
        <div
          className="flex justify-between text-[10px] mt-1"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          <span>Rp 0</span>
          <span>Rp 150.000</span>
        </div>
      </section>

      <div
        className="h-px mb-5"
        style={{ background: "rgba(212,163,115,0.18)" }}
      />

      {/* RATING MINIMUM */}
      <section>
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          Minimum Rating
        </p>
        <ul className="flex flex-col gap-2">
          {RATING_OPTIONS.map(({ label, value }) => {
            const active = minRating === value;
            return (
              <li key={value}>
                <button
                  onClick={() => onMinRatingChange(value)}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      borderColor: active ? "#4a3525" : "rgba(160,120,60,0.35)",
                      background: active ? "#4a3525" : "transparent",
                    }}
                  >
                    {active && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#fdf8f0" }}
                      />
                    )}
                  </span>
                  <span
                    className="text-sm transition-colors"
                    style={{
                      color: active ? "#4a3525" : "#7a6a53",
                      fontWeight: active ? 600 : 400,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {value === 0 ? "All Ratings" : `${label}★ ++`}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </motion.aside>
  );
}
