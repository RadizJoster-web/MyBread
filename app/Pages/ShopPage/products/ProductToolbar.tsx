"use client";

import { motion } from "framer-motion";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import { SORT_OPTIONS } from "@/assets/data/productData/productData";
import { Dispatch, SetStateAction } from "react";

interface ProductToolbarProps {
  viewMode: "grid" | "list";
  onViewModeChange: (m: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (s: string) => void;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ProductToolbar({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  setFilterOpen,
}: ProductToolbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between mb-6"
    >
      {/* Left:  */}
      <div className="flex items-center gap-2">
        <button
          className="flex md:hidden items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(212,163,115,0.25)",
            color: "#4a3525",
            fontFamily: "'Inter', sans-serif",
          }}
          onClick={() => setFilterOpen(true)}
        >
          <FiFilter size={13} />
          Filter
        </button>
      </div>

      {/* Right:  */}
      <div
        className="flex items-center rounded-full overflow-hidden"
        style={{
          border: "1px solid rgba(212,163,115,0.25)",
          background: "rgba(255,255,255,0.8)",
        }}
      >
        {(["grid", "list"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => onViewModeChange(mode)}
            className="px-3 py-2 transition-colors"
            style={{
              background: viewMode === mode ? "#4a3525" : "transparent",
              color: viewMode === mode ? "#fdf8f0" : "#7a6a53",
            }}
          >
            {mode === "grid" ? <FiGrid size={14} /> : <FiList size={14} />}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
