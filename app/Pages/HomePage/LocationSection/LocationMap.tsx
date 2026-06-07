"use client";

import { motion } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";

interface LocationMapProps {
  mapUrl: string;
  embedSrc: string;
}

export default function LocationMap({ mapUrl, embedSrc }: LocationMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full h-[350px] sm:h-[450px] lg:h-[500px] relative rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)] border-4 border-white group"
    >
      {/* Link Overlay Pembungkus Peta */}
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 block z-20 cursor-pointer"
        title="Click to view on Google Maps"
      >
        {/* Hover Effect Layer overlay halus */}
        <div className="absolute inset-0 bg-dark-chocolate/0 group-hover:bg-dark-chocolate/10 transition-colors duration-300 flex items-center justify-center">
          {/* Badge Petunjuk Saat di Hover */}
          <div className="bg-white/90 backdrop-blur-xs text-bakeryText font-sans font-bold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <FiMaximize2 className="text-primary" />
            <span>View Full Map</span>
          </div>
        </div>
      </a>

      {/* Peta Google Maps Asli (Iframe) */}
      <iframe
        src={embedSrc}
        className="w-full h-full border-0 absolute inset-0 z-10 pointer-events-none"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
