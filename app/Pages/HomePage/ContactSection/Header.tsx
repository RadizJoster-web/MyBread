"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

export default function ContactHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
      <p className="text-center font-sans text-xs font-semibold tracking-widest text-muted-cocoa uppercase mb-3">
        Contact us
      </p>

      {/* Judul Utama */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight"
      >
        Get In Touch With Us
      </motion.h2>

      {/* Sub-deskripsi */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg"
      >
        Have any questions, special catering requests, or just want to say hi?
        Drop us a message below and our team will get back to you shortly.
      </motion.p>
    </div>
  );
}
