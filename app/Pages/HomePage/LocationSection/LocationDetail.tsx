"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";

interface LocationDetailProps {
  mapUrl: string;
}

export default function LocationDetail({ mapUrl }: LocationDetailProps) {
  return (
    <div className="overflow-hidden py-2 h-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="flex flex-col justify-center h-full"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[11px] font-bold tracking-widest text-primary uppercase font-sans mb-3 block"
        >
          Visit Our Store
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: [0.21, 0.45, 0.32, 0.9],
          }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-bakeryText mb-6 tracking-tight leading-tight"
        >
          Come and Taste <br />
          Our Freshly Baked Goods
        </motion.h2>

        <div className="flex flex-col gap-5 font-sans text-sm text-muted-cocoa/90 mb-8 overflow-y-hidden py-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-xs border border-[#F4EDE2] shrink-0">
              <FiMapPin className="text-lg" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-bold text-bakeryText text-base">
                Main Bakery
              </h4>
              <p className="font-light leading-relaxed">
                Jl. Kemang Raya No. 88, Kebayoran Baru, <br />
                Jakarta Selatan 12730
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.33,
              duration: 0.5,
              ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-xs border border-[#F4EDE2] shrink-0">
              <FiClock className="text-lg" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-bold text-bakeryText text-base">
                Opening Hours
              </h4>
              <p className="font-light">Everyday: 07:00 – 21:00</p>
              <p className="text-xs text-muted-cocoa/60 font-light">
                Weekend: 06:00 – 22:00
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.41,
              duration: 0.5,
              ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-xs border border-[#F4EDE2] shrink-0">
              <FiPhone className="text-lg" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-bold text-bakeryText text-base">
                Contact & Orders
              </h4>
              <p className="font-light">+62 812-3456-7890</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
