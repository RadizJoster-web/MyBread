"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

type FaqItemProps = {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={`rounded-[1.25rem] border transition-colors duration-300 overflow-hidden ${
        isOpen
          ? "bg-white border-[#b8892a]/40 shadow-[0_8px_30px_rgba(184,137,42,0.08)]"
          : "bg-white/60 border-[#EDE4D8] shadow-sm hover:bg-white"
      }`}
    >
      {/* ── Question Button ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left cursor-pointer group outline-none"
      >
        <span
          className={` text-sm sm:text-base font-bold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[#b8892a]"
              : "text-[#2a1a08] group-hover:text-[#b8892a]"
          }`}
        >
          {q}
        </span>

        {/* ── Icon Indicator ── */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? "bg-[#b8892a] border-[#b8892a] text-white"
              : "border-[#D4C4AE] text-muted-cocoa group-hover:border-[#b8892a] group-hover:text-[#b8892a]"
          }`}
        >
          <FiPlus size={16} />
        </motion.div>
      </button>

      {/* ── Answer Body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            {/* UI Fix: Diubah menjadi text-muted-cocoa agar nyaman dibaca sebagai paragraf */}
            <p className=" text-sm sm:text-[0.9375rem] text-muted-cocoa leading-relaxed px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
