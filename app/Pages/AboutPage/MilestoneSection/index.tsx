"use client";

import { motion } from "framer-motion";
import { MILESTONES } from "./milestones";
import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MilestoneSection() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
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
            className="absolute left-18 sm:left-22.25 top-4 bottom-4 w-0.5 rounded-full"
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
