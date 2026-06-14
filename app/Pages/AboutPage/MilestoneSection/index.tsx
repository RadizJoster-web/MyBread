"use client";

import { motion } from "framer-motion";
import { MILESTONES } from "./milestones";
import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MilestoneSection() {
  return (
    <section className="relative w-full py-24 px-6 bg-[#FAF6F0] overflow-hidden">
      {/* Subtle top gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, #F5ECD8 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-14">
        <TimelineHeader />

        {/* ── Timeline Container ── */}
        <div className="relative w-full flex flex-col mt-4">
          {/* Vertical line — grows in on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.5, delay: 0.2, ease }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[72px] sm:left-[89px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#E0D4C0] via-[#C9A87C] to-transparent rounded-full"
          />

          {/* Render Timeline Items */}
          <div className="flex flex-col">
            {MILESTONES.map((milestone, i) => (
              <TimelineItem key={milestone.year} {...milestone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
