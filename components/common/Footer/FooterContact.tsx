"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { companyData } from "@/assets/data/companyData";

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
          <span className="leading-relaxed">{companyData.address}</span>
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
            <span>{companyData.phoneNumber}</span>
            <span>{companyData.phoneNumber2}</span>
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
              href={`mailto:${companyData.email1}`}
              className="hover:text-[#E5C299] transition-colors"
            >
              {companyData.email1}
            </a>
            <a
              href={`mailto:${companyData.email2}`}
              className="hover:text-[#E5C299] transition-colors"
            >
              {companyData.email2}
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
            <span>{companyData.timeOperation.dayNormal}</span>
            <span>{companyData.timeOperation.dayWeekend}</span>
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
