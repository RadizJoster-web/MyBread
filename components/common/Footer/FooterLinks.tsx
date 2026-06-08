"use client";

import { motion } from "framer-motion";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      {/* Column Title */}
      <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">
        {title}
      </h4>

      {/* Links List */}
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 * index }}
          >
            <a
              href={link.href}
              className="font-sans text-xs sm:text-sm text-white/60 hover:text-[#E5C299] transition-colors duration-200 font-light"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
