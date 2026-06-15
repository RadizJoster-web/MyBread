"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GiWheat, GiCoffeeCup } from "react-icons/gi";
import { MdOutlineAvTimer } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    icon: <GiWheat className="text-xl text-primary" />,
    title: "Premium Local Ingredients",
    desc: "Flour selected from local farmers, genuine European butter, and strictly zero preservatives.",
  },
  {
    icon: <GiCoffeeCup className="text-xl text-primary" />,
    title: "Cozy & Warm Atmosphere",
    desc: "A thoughtfully designed space filled with the aroma of fresh bakes, perfect for your daily escape.",
  },
  {
    icon: <MdOutlineAvTimer className="text-xl text-primary" />,
    title: "Baked Fresh Daily",
    desc: "All products are baked fresh every morning starting from 04:00 AM to guarantee maximum freshness.",
  },
];

export default function LeftContent() {
  return (
    <div className="flex flex-col justify-center lg:pr-6 overflow-hidden py-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="relative flex flex-col items-start mb-8"
      >
        <p className="text-center font-sans text-xs font-semibold tracking-widest text-muted-cocoa uppercase mb-3">
          Why Choose Us
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-7xl font-bold text-muted-cocoa tracking-tight">
          Why Choose <br className="hidden sm:inline" />
          <span className="italic font-normal text-primary">My Bread?</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "9rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
          className="h-0.75 bg-primary mt-3 rounded-full"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: [0.21, 0.45, 0.32, 0.9],
        }}
        className="font-sans text-sm md:text-base text-muted-cocoa/90 leading-relaxed mb-8 max-w-xl"
      >
        Every single item we serve is born from absolute dedication to artisanal
        quality, premium ingredients, and a passion for creating a welcoming
        space you can call home.
      </motion.p>

      <div className="space-y-6 mb-10 overflow-y-hidden py-1">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              delay: 0.2 + idx * 0.08,
              duration: 0.5,
              ease: [0.21, 0.45, 0.32, 0.9],
            }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EFECE6] flex items-center justify-center shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <h4 className="font-sans text-base font-bold text-playfair mb-1">
                {item.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-muted-cocoa leading-normal max-w-md">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <a href="#location">
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
            delay: 0.2 + 4 * 0.08,
          }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-fit bg-primary hover:bg-dark-chocolate text-white font-sans font-semibold py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-md cursor-pointer text-sm"
        >
          <span>Explore Our Space</span>
          <FiArrowRight className="text-base" />
        </motion.button>
      </a>
    </div>
  );
}
