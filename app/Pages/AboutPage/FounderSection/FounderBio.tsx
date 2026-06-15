"use client";

import { motion } from "framer-motion";
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
        <span className="text-[10px]  font-bold tracking-[0.2em] text-light uppercase">
          {FOUNDER_INFO.role}
        </span>
      </motion.div>

      {/* ── Title / Name ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="flex flex-col gap-4"
      >
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1]">
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
            className=" text-sm sm:text-base text-light leading-relaxed"
          >
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
