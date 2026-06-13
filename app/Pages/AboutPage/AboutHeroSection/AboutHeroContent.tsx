"use client";

import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function AboutHeroContent() {
  return (
    <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-6 flex flex-col items-center gap-5">
      {/* ── Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 w-max bg-primary/10"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
        </span>
        <span className="text-xs md:text-sm font-semibold text-muted-cocoa uppercase tracking-wider">
          About Us
        </span>
      </motion.div>

      {/* ── Heading ── */}
      <div className="flex flex-col items-center gap-1">
        <motion.span
          {...fadeUp(0.12)}
          className="block font-playfair text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#2a1a08] leading-[1.12] tracking-tight"
        >
          The History Behind
        </motion.span>

        <motion.span
          {...fadeUp(0.22)}
          className="block font-playfair text-4xl sm:text-5xl lg:text-[3.75rem] italic font-bold leading-[1.12] tracking-tight"
          style={{ color: "#B8892A" }}
        >
          Every Bite
        </motion.span>
      </div>

      {/* ── Description ── */}
      <motion.p
        {...fadeUp(0.34)}
        className="font-sans text-sm sm:text-[0.9375rem] text-muted-cocoa max-w-130 leading-[1.8] font-light"
      >
        More than just a bakery, we are a dedication to the art of artisan
        bread that warms hearts and brings people together.
      </motion.p>
    </div>
  );
}
