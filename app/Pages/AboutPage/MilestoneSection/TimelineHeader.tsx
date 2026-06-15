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
      <span className="text-[10px] sm:text-xs font-sans font-bold tracking-widest text-muted-cocoa uppercase">
        Our Story
      </span>

      <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2a1a08] tracking-tight leading-tight">
        My Bread Milestones
      </h2>
      <p className="font-sans text-sm text-muted-cocoa  max-w-md">
        Every step is a beautiful story we continue to write together with our
        community.
      </p>
    </motion.div>
  );
}
