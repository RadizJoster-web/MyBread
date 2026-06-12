"use client";

import { motion } from "framer-motion";

export default function PromoBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className="relative flex items-center justify-between px-7 py-5 rounded-2xl mb-6 overflow-hidden"
      style={{ background: "#3d2314" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute right-0 top-0 w-72 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(212,163,115,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Left content */}
      <div className="relative z-10">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
          style={{ background: "rgba(212,163,115,0.2)", color: "#d4a373" }}
        >
          🔥 Promo For Today
        </span>
        <h3
          className="text-xl font-black mb-1"
          style={{
            color: "#fdf8f0",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Free Delevery min. Rp 75.000
        </h3>
        <p
          className="text-xs"
          style={{
            color: "rgba(253,248,240,0.6)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Only in Jabodetabek. Kode:{" "}
          <span
            className="font-bold tracking-wider"
            style={{ color: "#d4a373" }}
          >
            CIHUYKAN
          </span>
        </p>
      </div>

      {/* Right: emoji icons */}
      <div className="relative z-10 flex items-center gap-3 text-4xl select-none opacity-80">
        <span className="drop-shadow-lg">🥐</span>
        <span className="drop-shadow-lg">🍞</span>
        <span className="drop-shadow-lg">🎂</span>
      </div>
    </motion.div>
  );
}
