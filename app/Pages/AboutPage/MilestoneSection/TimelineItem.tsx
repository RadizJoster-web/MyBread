"use client";

import { motion } from "framer-motion";
import { Milestone } from "./milestones";

export default function TimelineItem({
  year,
  emoji,
  title,
  desc,
  isCurrent,
  index,
}: Milestone & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-start gap-4 sm:gap-6 mb-8 last:mb-0 group cursor-default"
    >
      {/* ── Year Label ── */}
      <div className="shrink-0 w-14 sm:w-16 pt-[22px] text-right transition-transform duration-300 group-hover:-translate-x-1">
        <span
          className={`font-sans text-xs sm:text-sm font-bold tracking-widest ${
            isCurrent ? "text-[#b8892a]" : "text-[#a89278]"
          }`}
        >
          {year}
        </span>
      </div>

      {/* ── Center Dot ── */}
      <div className="shrink-0 flex flex-col items-center pt-[22px] z-10">
        {isCurrent ? (
          <span className="relative flex items-center justify-center w-5 h-5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#b8892a]/40 animate-ping" />
            <span className="relative w-3.5 h-3.5 rounded-full bg-[#b8892a] ring-4 ring-[#FAF6F0]" />
          </span>
        ) : (
          <span className="w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#C9A87C]/60 ring-4 ring-[#FAF6F0] group-hover:border-[#b8892a] transition-colors duration-300" />
        )}
      </div>

      {/* ── Content Card ── */}
      <motion.div
        // PERBAIKAN 1: Masukkan semua animasi hover fisik ke dalam Framer Motion
        whileHover={{
          scale: 1.015,
          y: -4,
          boxShadow: isCurrent
            ? "0 12px 35px rgba(184,137,42,0.2)"
            : "0 12px 30px rgba(74,53,37,0.08)",
        }}
        // PERBAIKAN 2: Gunakan jenis transisi easing yang responsif dan instan tanpa delay
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={`
          flex-1 flex items-start gap-4 sm:gap-5 rounded-2xl px-6 py-5 border
          /* PERBAIKAN 3: Hapus 'transition-all' dan ganti ke 'transition-colors' agar tidak menabrak Framer Motion */
          transition-colors duration-200 backdrop-blur-sm
          ${
            isCurrent
              ? "bg-white border-[#b8892a]/50 shadow-[0_4px_20px_rgba(184,137,42,0.1)]"
              : "bg-white/80 border border-[#EDE4D8] shadow-xs hover:bg-white"
          }
        `}
      >
        {/* Emoji Icon Container */}
        <div
          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105 ${
            isCurrent ? "bg-[#b8892a]/10" : "bg-[#F5ECD8]"
          }`}
        >
          {emoji}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <span
            className={`font-playfair text-base sm:text-lg font-bold leading-snug ${
              isCurrent ? "text-[#b8892a]" : "text-[#2a1a08]"
            }`}
          >
            {title}
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#7a6a55] leading-relaxed font-light">
            {desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
