"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

// Deklarasi properti spesifik untuk komponen ini
interface OrderSummaryProps {
  cartItems: any[];
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  clearCart: () => void;
  totalPrice: number;
  formatRupiah: (value: number) => string;
  onNext: () => void;
}

export default function OrderSummary({
  cartItems,
  increaseQty,
  decreaseQty,
  clearCart,
  totalPrice,
  formatRupiah,
  onNext,
}: OrderSummaryProps) {
  const hasItems = cartItems.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto p-5">
        {hasItems ? (
          <ul className="space-y-3.5">
            {/* Header Hapus Semua */}
            <div className="flex justify-end mb-2">
              <button
                onClick={clearCart} // Memanggil clearCart dari Zustand
                className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 transition-colors cursor-pointer"
              >
                <FiTrash2 /> Clear All
              </button>
            </div>

            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-[#EDE4D8] bg-white/60 hover:bg-white shadow-xs transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#EDE4D8]/50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 min-w-0 flex-1">
                    <span className="font-sans font-bold text-dark-chocolate text-sm sm:text-base truncate">
                      {item.name}
                    </span>
                    <div className="flex items-center bg-[#FAF6F0] border border-[#EDE4D8] rounded-xl p-0.5 w-fit shadow-2xs">
                      {/* Menggunakan item.name sesuai kebutuhan Zustand */}
                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-white text-muted-cocoa hover:text-dark-chocolate border border-[#EDE4D8]/30 cursor-pointer shadow-3xs"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="w-7 text-center font-sans font-bold text-xs text-dark-chocolate">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => increaseQty(item.name)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-white text-muted-cocoa hover:text-primary border border-[#EDE4D8]/30 cursor-pointer shadow-3xs"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <span className="font-sans font-bold text-[#b8892a] text-sm tracking-tight">
                    {formatRupiah(item.price * (item.quantity || 1))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <div className="w-16 h-16 rounded-full bg-[#FAF6F0] flex items-center justify-center text-primary mb-4 shadow-3xs">
              <HiOutlineShoppingBag className="text-3xl" />
            </div>
            <h3 className="font-playfair text-base font-bold text-dark-chocolate mb-1.5">
              Your box is empty
            </h3>
            <p className="font-sans text-sm text-muted-cocoa max-w-xs font-light">
              Explore our delicious menu to fill up your box!
            </p>
          </div>
        )}
      </div>

      {hasItems && (
        <div className="p-6 border-t border-[#EFEAE2] bg-[#FAF6F0] space-y-4 shrink-0">
          <div className="flex items-center justify-between text-dark-chocolate">
            <span className="font-sans font-medium text-sm">
              Total Estimated Price
            </span>
            <span className="font-sans font-bold text-xl text-[#b8892a] tracking-tight">
              {formatRupiah(totalPrice)}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
            onClick={onNext}
            className="w-full bg-primary hover:bg-dark-chocolate text-white font-sans font-semibold py-4 rounded-xl cursor-pointer transition-colors duration-300 shadow-md text-sm outline-none"
          >
            Checkout Details
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
