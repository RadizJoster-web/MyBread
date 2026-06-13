"use client";

import { motion } from "framer-motion";

const ICONS = [
  {
    emoji: "🥐",
    position: "left-[4%]",
    top: "50%",
    delay: 0,
    size: "text-[88px] sm:text-[120px] lg:text-[140px]",
  },
  {
    emoji: "🍞",
    position: "left-[23%]",
    top: "50%",
    delay: 0.6,
    size: "text-[72px] sm:text-[100px] lg:text-[120px]",
    hideBelow: "md",
  },
  {
    emoji: "🥨",
    position: "right-[23%]",
    top: "50%",
    delay: 1.2,
    size: "text-[72px] sm:text-[100px] lg:text-[120px]",
    hideBelow: "md",
  },
  {
    emoji: "🧁",
    position: "right-[4%]",
    top: "50%",
    delay: 1.8,
    size: "text-[88px] sm:text-[120px] lg:text-[140px]",
  },
];

export default function AboutHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      {ICONS.map(({ emoji, position, top, delay, size, hideBelow }, i) => (
        <motion.div
          key={i}
          className={`
            absolute -translate-y-1/2
            ${position}
            ${hideBelow === "md" ? "hidden md:block" : ""}
            ${size}
            leading-none
          `}
          style={{ top }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.22, 0.22],
            scale: [0.8, 1, 1],
            y: ["0px", "-12px", "0px"],
          }}
          transition={{
            opacity: { duration: 0.8, delay, ease: "easeOut" },
            scale: { duration: 0.8, delay, ease: [0.34, 1.56, 0.64, 1] },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.8,
            },
          }}
        >
          {/* grayscale + sepia tint to match the warm muted look in the screenshot */}
          <span
            className="block"
            style={{
              filter: "grayscale(0.55) sepia(0.35) brightness(1.05)",
            }}
          >
            {emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
