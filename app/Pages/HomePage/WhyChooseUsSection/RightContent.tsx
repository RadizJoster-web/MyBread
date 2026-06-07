"use client";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa6";

export default function RightContent() {
  return (
    /* Hapus h-full dan items-center agar gap murni dikontrol oleh properti gap CSS */
    <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
      {/* Box 1: Ilustrasi Pastry (Kiri Atas) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative rounded-4xl overflow-hidden aspect-square shadow-sm group hover:shadow-md transition-shadow duration-300 bg-[#FAF6F0]"
      >
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
          alt="Cozy Cafe Space"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Box 2: Foto Suasana Cafe (Kanan Atas) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative rounded-4xl overflow-hidden aspect-square shadow-sm group hover:shadow-md transition-shadow duration-300 bg-[#FAF6F0]"
      >
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
          alt="Cozy Cafe Space"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Box 3: Foto Detail Tempat Duduk (Kiri Bawah) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative rounded-4xl overflow-hidden aspect-square shadow-sm group hover:shadow-md transition-shadow duration-300 bg-[#FAF6F0]"
      >
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
          alt="Artisan Bakery Counter"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Box 4: Highlight Penghargaan (Kanan Bawah) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-dark-chocolate rounded-4xl p-6 sm:p-8 aspect-square flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all duration-300 border border-white/5"
      >
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 animate-pulse">
          <FaAward className="text-2xl" />
        </div>
        <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
          Best Bakery 2026
        </h3>
        <p className="font-sans text-[11px] sm:text-xs text-white/70 tracking-wide uppercase">
          Jakarta Food Awards
        </p>
      </motion.div>
    </div>
  );
}
