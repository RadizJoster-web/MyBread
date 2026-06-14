"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TimelineHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="flex flex-col items-center gap-4 text-center"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#EDE4D8]/80 border border-[#C9A87C]/30 px-5 py-2 rounded-full backdrop-blur-md shadow-sm">
        <FiCalendar className="text-[#7a6a55] text-sm shrink-0" />
        <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#7a6a55] uppercase">
          Our Journey
        </span>
      </div>

      <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2a1a08] tracking-tight leading-tight">
        La Farine Milestones
      </h2>
      <p className="font-sans text-sm text-[#7a6a55] font-light max-w-md">
        Every step is a beautiful story we continue to write together with our
        community.
      </p>
    </motion.div>
  );
}
