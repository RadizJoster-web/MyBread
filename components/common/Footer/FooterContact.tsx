"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">
        Contact
      </h4>

      <motion.ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-white/60 font-light max-w-xs">
        {/* Address */}
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="flex items-start gap-3"
        >
          <FiMapPin className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            Jl. Kemang Raya No. 88, Kebayoran Baru, Jakarta Selatan 12730
          </span>
        </motion.li>

        {/* Phones */}
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          className="flex items-start gap-3"
        >
          <FiPhone className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span>+62 812-3456-7890</span>
            <span>+62 21-7890-1234</span>
          </div>
        </motion.li>

        {/* Emails */}
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
          className="flex items-start gap-3"
        >
          <FiMail className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <a
              href="mailto:hello@lafarine.id"
              className="hover:text-[#E5C299] transition-colors"
            >
              hello@lafarine.id
            </a>
            <a
              href="mailto:order@lafarine.id"
              className="hover:text-[#E5C299] transition-colors"
            >
              order@lafarine.id
            </a>
          </div>
        </motion.li>

        {/* Operational Hours */}
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
          className="flex items-start gap-3"
        >
          <FiClock className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span>Every Day: 07:00 – 21:00</span>
            <span>Weekend: 06:00 – 22:00</span>
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
