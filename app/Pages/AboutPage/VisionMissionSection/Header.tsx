"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease },
});

function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#EDE4D8]/70 border border-[#C9A87C]/25 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] text-[#7a6a55] uppercase  backdrop-blur-sm">
      {label}
    </span>
  );
}

export default function Header() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="flex flex-col items-center text-center gap-4"
    >
      <SectionBadge label="Visi, Misi & Tujuan" />
      <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a1a08] leading-[1.12] tracking-tight">
        Better Than Just Bread
        <br className="hidden sm:block" />
        <span className="italic font-medium text-[#b8892a]">
          A Commitment
        </span>
      </h2>
      <p className=" text-sm text-[#7a6a55] max-w-md leading-relaxed ">
        Every products we make reflect our values and direction 
        believe the future of My Bread
      </p>
    </motion.div>
  );
}
