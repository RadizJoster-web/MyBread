"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoryVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center p-4 sm:p-6 select-none"
    >
      <Image
        src="/images/chef.jpg"
        alt="Chef Reza Mahendra"
        fill
        className="object-contain rounded-2xl grayscale hover:grayscale-0 scale-100 hover:scale-102 hover:shadow-2xl duration-150 transition-all"
        priority
      />
    </motion.div>
  );
}
