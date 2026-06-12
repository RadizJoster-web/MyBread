"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { Product } from "@/type/productDataType";
import useCart from "@/hooks/useCart";

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  "Best Seller": { bg: "#d4a373", color: "#fff" },
  Baru: { bg: "#6aaa6a", color: "#fff" },
  Spesial: { bg: "#b87333", color: "#fff" },
  Limited: { bg: "#7a6a53", color: "#fdf8f0" },
};

interface PopupDetailProductProps {
  product: Product | null;
  onClose: () => void;
}

export default function PopupDetailProduct({
  product,
  onClose,
}: PopupDetailProductProps) {
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  const tagStyle = product?.tag ? TAG_STYLES[product.tag] : null;
  const discount = product?.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const handleAddItem = (e: any) => {
    e.preventDefault();

    if (!product) return;

    const payload = {
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: qty,
    };
    
    addToCart(payload);
    onClose()
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 cursor-pointer"
            style={{
              background: "rgba(74,53,37,0.45)",
              backdropFilter: "blur(4px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative flex w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "#fff", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left — image panel */}
              <div
                className="relative w-2/5 flex items-center justify-center p-8 shrink-0"
                style={{ background: "rgba(245,237,216,0.7)" }}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right — content panel */}
              <div className="flex flex-col justify-between flex-1 p-7">
                {/* Tag + title + rating + desc */}
                <div className="flex flex-col gap-3">
                  {/* Tag + discount */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {tagStyle && (
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                        style={{
                          background: tagStyle.bg,
                          color: tagStyle.color,
                        }}
                      >
                        {product.tag}
                      </span>
                    )}
                    {discount && (
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: "#e05252", color: "#fff" }}
                      >
                        -{discount}%
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl font-black leading-tight"
                    style={{
                      color: "#4a3525",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{
                      color: "#7a6a53",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((s) => (
                      <FaStar
                        key={s}
                        size={11}
                        color={
                          s <= Math.round(product.rating)
                            ? "#d4a373"
                            : "rgba(212,163,115,0.3)"
                        }
                      />
                    ))}
                    <span
                      style={{
                        color: "#4a3525",
                        fontWeight: 600,
                        marginLeft: 4,
                      }}
                    >
                      {product.rating}
                    </span>
                    <span className="opacity-40 mx-1">·</span>
                    <span>({product.reviewCount} ulasan)</span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#7a6a53",
                      fontFamily: "'Lora', Georgia, serif",
                    }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Price + qty + CTA */}
                <div className="flex flex-col gap-4 mt-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-black"
                      style={{
                        color: "#4a3525",
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-sm line-through"
                        style={{
                          color: "#7a6a53",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Rp {product.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>

                  {/* Quantity counter */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/30 hover:bg-primary border border-primary text-base font-semibold transition-colors cursor-pointer"
                    >
                      {"-"}
                    </button>
                    <span
                      className="w-8 text-center text-base font-bold"
                      style={{
                        color: "#4a3525",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-base bg-primary/30 hover:bg-primary border border-primary font-semibold transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-dark-chocolate text-light duration-150 rounded-2xl text-sm font-bold tracking-wide transition-colors cursor-pointer"
                    onClick={(e) => handleAddItem(e)}
                  >
                    <FiShoppingCart size={15} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-red-500 hover:bg-red-600 text-light duration-150 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
              >
                <FiX size={14} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
