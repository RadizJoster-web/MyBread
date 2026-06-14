"use client";

import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeIn = (delay = 0, dir: "left" | "right" | "up" = "up") => {
  const axes = {
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
    up: { x: 0, y: 28 },
  };
  return {
    initial: { opacity: 0, ...axes[dir] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.75, delay, ease },
  };
};

const VISION_POINTS = [
  "Steadily growing into a household artisan bakery choice across major Indonesian urban centers by 2030",
  "Consistently introducing authentic, premium European-inspired bread craftsmanship to new regional markets",
  "Cultivating an active, eco-conscious community of handmade pastry and bread enthusiasts",
];

const MISSION_POINTS = [
  "Sourcing high-quality local ingredients daily to bake fresh, wholesome products free from artificial preservatives",
  "Refining our store experience to ensure a warm, personalized, and seamless journey for every guest",
  "Strengthening long-term partnerships with local farmers and suppliers to support sustainable agricultural growth",
];

function VisionCard() {
  return (
    <motion.div
      {...fadeIn(0.1, "left")}
      className="relative flex flex-col gap-0 rounded-3xl overflow-hidden shadow-[0_4px_32px_-4px_rgba(180,140,90,0.14)] border border-[#E8DDD0]"
    >
      <div className="flex items-center gap-3 bg-[#4a3525] px-6 py-4">
        <div className="w-9 h-9 rounded-full bg-[#b8892a]/20 flex items-center justify-center shrink-0">
          <FiEye className="text-[#E5C299] text-base" />
        </div>
        <span className=" font-bold text-xs tracking-[0.18em] uppercase text-white/90">
          Visi
        </span>
      </div>

      <div className="bg-white px-6 py-6 flex-1">
        <ul className="flex flex-col gap-4">
          {VISION_POINTS.map((pt, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease }}
              className="flex items-start gap-3 text-sm text-[#5a4a38] leading-relaxed  "
            >
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#b8892a] shrink-0" />
              {pt}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[4rem] bg-[#b8892a]/6 pointer-events-none" />
    </motion.div>
  );
}

function MissionCard() {
  return (
    <motion.div
      {...fadeIn(0.1, "right")}
      className="relative flex flex-col gap-0 rounded-3xl overflow-hidden shadow-[0_4px_32px_-4px_rgba(180,140,90,0.14)] border border-[#E8DDD0]"
    >
      <div className="flex items-center gap-3 bg-[#b8892a] px-6 py-4">
        <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <FiTarget className="text-white text-base" />
        </div>
        <span className=" font-bold text-xs tracking-[0.18em] uppercase text-white">
          Misi
        </span>
      </div>

      <div className="bg-white px-6 py-6 flex-1">
        <ul className="flex flex-col gap-4">
          {MISSION_POINTS.map((pt, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease }}
              className="flex items-start gap-3 text-sm text-[#5a4a38] leading-relaxed  "
            >
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#4a3525] shrink-0" />
              {pt}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="absolute top-0 left-0 w-16 h-16 rounded-br-[4rem] bg-[#4a3525]/5 pointer-events-none" />
    </motion.div>
  );
}

function CentralMedallion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      className="flex flex-col items-center justify-center gap-3 z-10"
    >
      <div className="relative w-36 h-36 sm:w-44 sm:h-44">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#b8892a]/30"
        />
        <div className="absolute inset-3 rounded-full border border-[#E8DDD0] bg-gradient-to-br from-[#F5ECD8] to-[#FAF6F0] shadow-[inset_0_2px_12px_rgba(180,140,90,0.1)]" />
        <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl">
          🥐
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-playfair text-base font-bold text-[#2a1a08] tracking-tight">
          La Farine
        </span>
        <span className="text-[10px]  uppercase tracking-[0.2em] text-[#7a6a55]">
          Since 2016
        </span>
      </div>
    </motion.div>
  );
}

function Connector({ side }: { side: "left" | "right" }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease }}
      style={{ transformOrigin: side === "left" ? "right" : "left" }}
      className="hidden lg:block flex-1 h-px bg-gradient-to-r from-transparent via-[#b8892a]/40 to-transparent mx-2"
    />
  );
}

export default function VisiMissi() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
      <div className="flex-1">
        <VisionCard />
      </div>

      <div className="flex lg:flex-col items-center justify-center lg:px-6 gap-3 lg:gap-6">
        <Connector side="left" />
        <CentralMedallion />
        <Connector side="right" />
      </div>

      <div className="flex-1">
        <MissionCard />
      </div>
    </div>
  );
}
