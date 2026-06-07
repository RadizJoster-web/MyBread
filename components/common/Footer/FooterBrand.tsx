"use client";

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

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 max-w-xs">
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
          <a
            key={social.id}
            href={social.href}
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#E5C299] flex items-center justify-center text-white/50 hover:text-[#E5C299] transition-all duration-300 text-sm"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
