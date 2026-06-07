"use client";

import { motion } from "framer-motion";
import { FiSend, FiLock } from "react-icons/fi";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-3xl mx-auto"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {/* Baris Pertama: Nama & Email (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name..."
            className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-[#E5C299] text-white placeholder-white/40 px-6 py-4 rounded-2xl font-sans text-sm outline-none transition-all duration-300 backdrop-blur-xs"
          />
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-[#E5C299] text-white placeholder-white/40 px-6 py-4 rounded-2xl font-sans text-sm outline-none transition-all duration-300 backdrop-blur-xs"
          />
        </div>

        {/* Baris Kedua: Pesan (Textarea) */}
        <div className="relative w-full">
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full bg-white/[0.06] border border-white/[0.1] focus:border-[#E5C299] text-white placeholder-white/40 px-6 py-4 rounded-2xl font-sans text-sm outline-none transition-all duration-300 backdrop-blur-xs resize-none"
          />
        </div>

        {/* Baris Ketiga: Tombol Kirim */}
        <div className="flex justify-center mt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full sm:w-auto bg-primary hover:bg-dark-chocolate text-dark-chocolate hover:text-light border border-dark-chocolate hover:border-primary font-sans font-bold text-sm py-4 px-10 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_25px_rgba(229,194,153,0.15)] cursor-pointer"
          >
            <span>Send Message</span>
            <FiSend className="text-xs shrink-0" />
          </motion.button>
        </div>
      </form>

      {/* Catatan Privasi di bagian bawah form seperti pada mockup */}
      <div className="flex items-center justify-center gap-1.5 mt-6 text-white/40 text-[11px] font-sans">
        <FiLock className="text-xs" />
        <span>
          We respect your privacy. Your information is strictly used to reply to
          your inquiry.
        </span>
      </div>
    </motion.div>
  );
}
