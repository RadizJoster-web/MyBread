"use client";

import { motion } from "framer-motion";
import { FiStar, FiHeart, FiZap, FiUsers, FiAward } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease },
});

const OBJECTIVES = [
  {
    icon: FiUsers,
    label: "Community",
    desc: "Nurturing a loyal network of over 50,000 active, verified brand advocates across our digital and physical spaces",
  },
  {
    icon: FiZap,
    label: "Innovation",
    desc: "Rethinking seasonal flavors by introducing quarterly product updates that match changing consumer tastes",
  },
  {
    icon: FiHeart,
    label: "Quality",
    desc: "Maintaining strict batch-by-batch control standards to preserve the authenticity of our traditional baking process",
  },
  {
    icon: FiAward,
    label: "Recognition",
    desc: "Securing key national culinary and hospitality milestones to validate our commitment to excellence before 2028",
  },
  {
    icon: FiStar,
    label: "Expansion",
    desc: "Expanding our footprint by opening 25 strategically located boutique outlets across 10 key tier-1 and tier-2 cities",
  },
];

function ObjectiveNode({
  icon: Icon,
  label,
  desc,
  index,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="flex flex-col items-center text-center gap-3 flex-1 min-w-0 cursor-default group"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DDD0] flex items-center justify-center shadow-sm group-hover:bg-[#4a3525] group-hover:border-[#4a3525] transition-colors duration-300">
          <Icon className="text-[#b8892a] text-base group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#b8892a] ring-2 ring-[#FAF6F0]" />
      </div>

      <div className="h-3" />

      <span className="font-playfair text-sm font-bold text-[#2a1a08]">
        {label}
      </span>
      <p className="text-xs text-[#7a6a55] leading-relaxed ">
        {desc}
      </p>
    </motion.div>
  );
}

export default function LongTermObjective() {
  return (
    <div className="flex flex-col gap-10">
      <motion.div {...fadeUp(0.05)} className="flex items-center gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#4a3525] flex items-center justify-center shadow-md">
            <FiStar className="text-[#E5C299] text-sm" />
          </div>
          <span className="font-playfair text-base font-bold text-[#2a1a08] whitespace-nowrap">
            Tujuan Jangka Panjang
          </span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          style={{ transformOrigin: "left" }}
          className="flex-1 h-px bg-gradient-to-r from-[#b8892a]/60 to-transparent"
        />
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease }}
          style={{ transformOrigin: "left" }}
          className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-[#E8DDD0]"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-8">
          {OBJECTIVES.map((obj, i) => (
            <ObjectiveNode key={i} {...obj} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
