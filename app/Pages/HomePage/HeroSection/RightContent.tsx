"use client";

import { motion } from "framer-motion";

export default function RightContent() {
  return (
    /* Hilang di mobile (hidden), muncul hanya di desktop (lg:flex) */
    <div className="hidden lg:flex relative flex-col justify-center items-center gap-4 md:gap-6 max-w-2xl lg:max-w-3xl py-8 md:py-12">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-10, 10, -10],
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}shadow-[0_40px_80px_rgba(74,46,18,0.2),_inset_0_1px_0_rgba(255,255,255,0.6)]
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        className="relative w-80 h-[380px] bg-gradient-to-br from-[#F0E6CE] to-[#F5EDD8] rounded-[32px] border border-white/80 flex items-center justify-center text-[9rem] cursor-grab active:cursor-grabbing shadow-[0_40px_80px_rgba(74,46,18,0.2),_inset_0_1px_0_rgba(255,255,255,0.6)]"
      >
        <motion.span
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🥐
        </motion.span>
      </motion.div>

      {/* Cake Custom Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-10, 10, -10],
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        className="absolute bottom-15 -left-25 py-2 px-6 rounded-2xl bg-white border border-white/80 shadow-primary/40 shadow-xl cursor-grab active:cursor-grabbing"
      >
        <motion.span
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-md flex items-center gap-2 font-medium text-primary flex-nowrap"
        >
          🎂
          <span>Cake Custom!</span>
        </motion.span>
      </motion.div>

      {/* Sub Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-10, 10, -10],
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        className="absolute top-15 -right-25 py-2 px-6 rounded-2xl bg-white border border-white/80 shadow-primary/40 shadow-xl cursor-grab active:cursor-grabbing"
      >
        <motion.span
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-md flex items-center gap-2 font-medium text-primary flex-nowrap"
        >
          🥪
          <span>Fresh Bakery</span>
        </motion.span>
      </motion.div>
    </div>
  );
}
