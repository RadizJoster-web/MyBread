"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { FOUNDER_INFO } from "./founderData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderBio() {
  return (
    <div className="flex flex-col gap-6">
      {/* ── Badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="inline-flex items-center gap-2 bg-[#EDE4D8]/80 border border-[#C9A87C]/30 px-5 py-2 rounded-full backdrop-blur-sm shadow-sm">
          <FiUser className="text-[#7a6a55] text-sm" />
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#7a6a55] uppercase">
            {FOUNDER_INFO.role}
          </span>
        </div>
      </motion.div>

      {/* ── Title / Name ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="flex flex-col gap-4"
      >
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2a1a08] tracking-tight leading-[1.1]">
          {FOUNDER_INFO.name}
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-[#b8892a]" />
      </motion.div>

      {/* ── Paragraphs ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="flex flex-col gap-5 mt-2"
      >
        {FOUNDER_INFO.paragraphs.map((text, idx) => (
          <p
            key={idx}
            className="font-sans text-sm sm:text-base text-[#7a6a55] leading-relaxed font-light"
          >
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
