"use client";

import { motion, Variants } from "framer-motion";
import { FiSearch } from "react-icons/fi";

interface ShopHeaderProps {
  totalVisible: number;
  searchQuery: string;
  onSearchChange: (v: string) => void;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function ShopHeader({
  totalVisible,
  searchQuery,
  onSearchChange,
}: ShopHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-black leading-none mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#4a3525",
            letterSpacing: "-0.02em",
          }}
        >
          All Products
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          Showing {totalVisible} products
        </motion.p>
      </div>

      {/* Right: search */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative w-full md:w-80 lg:w-96"
      >
        <FiSearch
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "#7a6a53" }}
        />
        <input
          type="text"
          placeholder="Cari produk favoritmu..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-5 py-3 rounded-full text-sm outline-none transition-shadow"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(212,163,115,0.25)",
            color: "#4a3525",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 2px 12px rgba(74,53,37,0.06)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 2px rgba(212,163,115,0.4), 0 2px 12px rgba(74,53,37,0.06)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(74,53,37,0.06)";
          }}
        />
      </motion.div>
    </div>
  );
}
