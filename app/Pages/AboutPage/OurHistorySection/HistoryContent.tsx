"use client";

import { motion } from "framer-motion";

export default function HistoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full max-w-2xl flex flex-col items-start"
    >
      {/* Badge Kategori Mini */}
      <span className="text-[10px] sm:text-xs font-sans font-bold tracking-widest text-[#7A6A55] uppercase">
        Our Story
      </span>

      {/* Judul Utama dengan Keseimbangan Komposisi Warna */}
      <h2 className="mt-5 font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-[#2A1A08] tracking-tight">
        From a Small Kitchen
        <br />
        <span className="italic text-primary">To the Hearts of Thousands</span>
      </h2>

      {/* Narasi Cerita Sejarah Toko */}
      <div className="mt-8 space-y-5 text-sm sm:text-base leading-relaxed text-[#7A6A55] ">
        <p>
          My Bread began in 2012 in a small kitchen located in Kemang, South
          Jakarta. It started with the dream of Chef Reza Mahendra, a Le Cordon
          Bleu Paris graduate, to bring authentic European bakery craftsmanship
          to Indonesia.
        </p>

        <p>
          With only one oven, three team members, and a strong commitment to
          quality, My Bread has grown into one of the most beloved artisan
          bakeries in the region, serving thousands of customers every day.
        </p>

        <p>
          The name{" "}
          <span className="font-medium text-[#2A1A08]">"My Bread"</span>, French
          for flour, reflects our belief that simple ingredients can be
          transformed into something memorable through skill, patience, and
          passion.
        </p>
      </div>
    </motion.div>
  );
}
