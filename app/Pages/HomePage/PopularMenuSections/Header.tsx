"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="overflow-y-hidden py-1">
      <motion.header
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 0.8,
          ease: [0.21, 0.45, 0.32, 0.9],
        }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10"
      >
        <div className="relative flex flex-col items-start">
          <p className="text-center font-sans text-xs font-semibold tracking-widest text-muted-cocoa uppercase mb-3">
            Best Seler
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-muted-cocoa tracking-tight">
            Our Customer Favorites
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            className="h-0.75 bg-primary mt-3 rounded-full"
          />
        </div>

        <Link
          href="/shop"
          className="group px-6 py-2.5 rounded-full border border-primary text-muted-cocoa font-sans text-sm font-medium bg-transparent hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
        >
          <span>See all</span>
          <span className="transition-transform duration-300 transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </motion.header>
    </div>
  );
}
