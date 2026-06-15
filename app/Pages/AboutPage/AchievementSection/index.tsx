"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

const ACHIEVEMENTS = [
  {
    emoji: "🥇",
    year: "2024",
    title: "Best Premium Bakery",
    sub: "Jakarta Food Festival Awards",
  },
  {
    emoji: "⭐",
    year: "2023",
    title: "Top 10 F&B Brand",
    sub: "Forbes Indonesia 30 Under 30",
  },
  {
    emoji: "🏅",
    year: "2023",
    title: "Halal Certified",
    sub: "MUI Indonesia – All Products",
  },
  {
    emoji: "🌿",
    year: "2022",
    title: "Green Business Award",
    sub: "Ministry of Environment & Forestry RI",
  },
  {
    emoji: "📱",
    year: "2021",
    title: "Best F&B Digital",
    sub: "E-Commerce Indonesia Summit",
  },
  {
    emoji: "❤️",
    year: "2020",
    title: "Customer Love Award",
    sub: "Google Reviews 4.9/5.0",
  },
];

export default function AchievementSection() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-dark-chocolate overflow-hidden">
      {/* Subtle radial glow to enhance dark background depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, #b8892a 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-14">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Enhanced Badge */}
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-light uppercase">
            Achievements
          </span>

          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-light tracking-tight leading-tight">
            Awards &amp; Certifications
          </h2>
          <p className="font-sans text-sm text-light/60 font-light max-w-sm">
            Milestones of our unwavering commitment to baking excellence and
            quality.
          </p>
        </motion.div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 w-full">
          {ACHIEVEMENTS.map(({ emoji, year, title, sub }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              // Smooth physics-based hover scaling & shadow amplification
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
              }}
              // Spring setup eliminates frame shuttering and hover lag
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 28,
              }}
              className="flex flex-col items-center text-center gap-4 bg-muted-cocoa/40 hover:bg-muted-cocoa/60 border border-primary/20 hover:border-primary/40 rounded-3xl px-4 py-8 shadow-md cursor-default transition-colors duration-200 group"
            >
              {/* Emoji with light hover bounce effect */}
              <span className="text-4xl leading-none select-none transition-transform duration-300 group-hover:scale-110">
                {emoji}
              </span>

              {/* Year Pill */}
              <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest text-[#b8892a] bg-[#F5ECD8] border border-[#E8D8B8]">
                {year}
              </span>

              {/* Title & Sub Text Structure */}
              <div className="flex flex-col gap-1.5 min-w-0 mt-1">
                <p className="font-playfair text-sm font-bold text-light leading-snug tracking-tight">
                  {title}
                </p>
                <p className="font-sans text-[11px] text-light/60 leading-relaxed">
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
