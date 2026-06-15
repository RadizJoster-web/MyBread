"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderPhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center p-4 sm:p-6 select-none rounded-2xl"
    >
      <Image
        src="/images/owner.jpg"
        alt="Chef Reza Mahendra"
        fill
        className="object-contain rounded-2xl grayscale hover:grayscale-0 duration-300"
      />
    </motion.div>
  );
}
