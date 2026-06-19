"use client";

import { motion } from "framer-motion";

export default function ShippingAddress({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-white border border-[#EDE4D8] rounded-xl px-4 py-3 text-sm text-dark-chocolate focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+62 812 3456 7890"
            className="w-full bg-white border border-[#EDE4D8] rounded-xl px-4 py-3 text-sm text-dark-chocolate focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
            Complete Address
          </label>
          <textarea
            rows={3}
            placeholder="Street name, building, house number..."
            className="w-full bg-white border border-[#EDE4D8] rounded-xl px-4 py-3 text-sm text-dark-chocolate focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
          />
        </div>
      </div>

      <div className="p-6 border-t border-[#EFEAE2] bg-[#FAF6F0] shrink-0">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onNext}
          className="w-full bg-dark-chocolate hover:bg-black text-white font-sans font-semibold py-4 rounded-xl cursor-pointer transition-colors shadow-md text-sm outline-none"
        >
          Continue to Payment
        </motion.button>
      </div>
    </motion.div>
  );
}
