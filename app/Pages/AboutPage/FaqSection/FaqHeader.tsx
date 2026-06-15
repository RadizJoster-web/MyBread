"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FaqHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
      className="flex flex-col gap-6 lg:w-[320px] lg:shrink-0 lg:top-32 lg:self-start "
    >
      {/* ── Heading ── */}
      <div className="flex flex-col gap-4">
        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2a1a08] leading-tight tracking-tight">
          Frequently <br className="hidden lg:block" />
          Asked Questions
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-[#b8892a]" />
      </div>

      {/* ── Sub Text ── */}
      <p className="font-sans text-sm sm:text-base text-[#7a6a55] leading-relaxed font-light">
        Have other questions? Feel free to reach out to our team via WhatsApp or
        email.
      </p>

      {/* ── CTA Button ── */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="inline-flex items-center gap-2 bg-white border border-[#D4C4AE] hover:bg-[#4a3525] hover:border-[#4a3525] hover:text-white text-[#2a1a08] transition-colors duration-300 rounded-full px-6 py-4 w-fit font-sans text-sm font-semibold cursor-pointer shadow-sm mt-2"
      >
        <FiMessageCircle size={16} />
        Chat on WhatsApp
      </motion.a>
    </motion.div>
  );
}
