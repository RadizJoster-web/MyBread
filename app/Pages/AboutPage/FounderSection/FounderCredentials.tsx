"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "./founderData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderCredentials() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {CREDENTIALS.map(({ icon: Icon, title, sub }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
          whileHover={{ x: 6, scale: 1.01 }}
          className="flex items-center gap-5 bg-white/60 hover:bg-white border border-[#EDE4D8] rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-colors duration-300 cursor-default group"
        >
          {/* Icon Box */}
          <div className="shrink-0 w-11 h-11 rounded-xl bg-[#F5ECD8] flex items-center justify-center group-hover:bg-[#4a3525] transition-colors duration-300">
            <Icon className="text-[#b8892a] text-lg group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Text Info */}
          <div className="min-w-0 flex flex-col justify-center">
            <p className="font-sans text-sm sm:text-[15px] font-bold text-[#2a1a08] truncate">
              {title}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#7a6a55] font-light mt-0.5">
              {sub}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
