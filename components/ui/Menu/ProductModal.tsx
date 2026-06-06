"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import type { Product } from "./menuType";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 cursor-pointer"
          />

          {/* Modal Box */}
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-3xl rounded-4xl shadow-[0_40px_80px_rgba(74,46,18,0.15)] overflow-hidden flex flex-col md:flex-row pointer-events-auto relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 rounded-full bg-red-500 text-light hover:bg-red-600 flex items-center justify-center transition-all z-10 active:scale-95 cursor-pointer"
              >
                <IoCloseOutline className="text-xl" />
              </button>

              {/* Left Side: Thumbnail */}
              <div className="w-full md:w-1/2 bg-[#EFECE6] p-8 min-h-65 md:min-h-95 flex items-center justify-center relative rounded-2xl">
                <div className="relative w-44 h-44 md:w-56 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Side: Content Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white rounded-2xl">
                <div className="flex flex-col items-start mb-3">
                  {product.tag && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider text-white bg-primary mb-2">
                      {product.tag}
                    </span>
                  )}
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-tight">
                    {product.name}
                  </h2>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[10px]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary ml-1">
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-cocoa">
                    ({product.reviews} ulasan)
                  </span>
                </div>

                <p className="text-xs md:text-sm font-sans text-muted-cocoa/90 leading-relaxed mb-6">
                  {product.description ||
                    "Roti sourdough dengan fermentasi 24 jam, kerak tebal dan crumb yang chewy"}
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-playfair text-2xl font-bold text-primary">
                    {formatRupiah(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-cocoa line-through">
                      {formatRupiah(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-full border border-[#EFEAE2] flex items-center justify-center text-muted-cocoa hover:bg-[#FAF6F0] active:scale-95 transition-all cursor-pointer"
                    >
                      <FaMinus className="text-[10px]" />
                    </button>
                    <span className="w-6 text-center font-sans font-semibold text-primary text-base">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-full border border-[#EFEAE2] flex items-center justify-center text-muted-cocoa hover:bg-[#FAF6F0] active:scale-95 transition-all cursor-pointer"
                    >
                      <FaPlus className="text-[10px]" />
                    </button>
                  </div>

                  <button className="w-full bg-dark-chocolate hover:bg-primary text-white font-sans font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer text-sm">
                    <HiOutlineShoppingBag className="text-lg" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
