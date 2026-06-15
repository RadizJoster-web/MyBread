"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FounderPhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease }}
      // 1. Tambahkan min-w agar container tidak terjepit/menciut saat di layar kecil
      className="relative shrink-0 w-full min-w-[260px] max-w-[300px] lg:max-w-[340px]"
    >
      {/* ── Main Photo Card ── */}
      <motion.div
        whileHover={{ scale: 1.02, rotate: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        // 2. Hapus aspect-[3/4] & h-full. Kita biarkan gambar yang mengatur tinggi card secara alami
        className="relative w-full rounded-[2rem] bg-[#EDE4D5] flex overflow-hidden shadow-[0_20px_50px_-12px_rgba(180,140,90,0.25)] border border-[#C9A87C]/20"
      >
        <Image
          src={"/images/owner.jpg"}
          alt="Portrait of Chef Reza Mahendra"
          // 3. Ganti 'fill' dengan resolusi asli/rasio (misal: 340x453 untuk rasio 3:4)
          width={340}
          height={453}
          quality={95}
          // 4. Kombinasi 'w-full h-auto' membuat gambar merespons lebar parent tanpa pecah rasio
          className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
        />

        {/* 5. Layer gradasi agar foto menyatu dengan background (tidak seperti ditempel) */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#2A1A08]/40 via-transparent to-transparent mix-blend-multiply" />
      </motion.div>
    </motion.div>
  );
}
