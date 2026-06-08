"use client";

import { motion } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";

interface LocationMapProps {
  mapUrl: string;
  embedSrc: string;
}

export default function LocationMap({ mapUrl, embedSrc }: LocationMapProps) {
  return (
    <div className="w-full h-87.5 sm:h-112.5 lg:h-125 overflow-hidden p-1">
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="w-full h-full relative rounded-4xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)] border-4 border-white group"
      >
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 block z-20 cursor-pointer"
          title="Click to view on Google Maps"
        >
          <div className="absolute inset-0 bg-dark-chocolate/0 group-hover:bg-dark-chocolate/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-xs text-bakeryText font-sans font-bold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <FiMaximize2 className="text-primary" />
              <span>View Full Map</span>
            </div>
          </div>
        </a>

        <iframe
          src={embedSrc}
          className="w-full h-full border-0 absolute inset-0 z-10 pointer-events-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
}
