"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const socialLinks = [
  { id: 1, icon: <FaInstagram />, href: "#" },
  { id: 2, icon: <FaTiktok />, href: "#" },
  { id: 3, icon: <FaFacebookF />, href: "#" },
  { id: 4, icon: <FaYoutube />, href: "#" },
  { id: 5, icon: <FaWhatsapp />, href: "#" },
];

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
  hover: { y: -4, scale: 1.08 },
};

export default function FooterBrand() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="flex flex-col gap-5 max-w-xs"
    >
      {/* Brand Logo & Name */}
      <h3 className="font-playfair text-2xl font-bold text-white tracking-wide">
        My Bread
      </h3>

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light">
        A premium artisan bakery that delivers authentic flavors with the finest
        ingredients, baked fresh daily to accompany your special moments.
      </p>

      {/* Social Media Icons Group */}
      <div className="flex items-center gap-2 mt-2">
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.href}
            variants={iconVariants}
            whileHover="hover"
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#E5C299] flex items-center justify-center text-white/50 hover:text-[#E5C299] transition-all duration-300 text-sm"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
