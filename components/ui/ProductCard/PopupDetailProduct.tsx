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

  const handleAddItem = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product) return;
    addToCart({
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: qty,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 cursor-pointer"
            style={{ background: "rgba(74,53,37,0.45)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* ── Modal wrapper ── */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/*
              ── Shell ──
              Mobile  : bottom sheet, full width, rounded top corners, scrollable
              Tablet  : centered card, max-w-lg, side-by-side disabled → stacked
              Desktop : centered card, max-w-2xl, side-by-side layout
            */}
            <div
              className="
                relative w-full bg-white overflow-y-auto
                rounded-t-3xl sm:rounded-3xl
                max-h-[92svh] sm:max-h-[90vh]
                sm:max-w-lg md:max-w-2xl
                shadow-2xl
                flex flex-col md:flex-row
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* ── Image panel ── */}
              <div
                className="
                  w-full md:w-2/5 md:shrink-0
                  flex items-center justify-center
                  p-6 sm:p-8
                  md:min-h-full
                "
                style={{ background: "rgba(245,237,216,0.7)" }}
              >
                {/* Drag handle pill — visible only on mobile bottom sheet */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-stone-300 md:hidden" />

                <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-full aspect-square mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* ── Content panel ── */}
              <div className="flex flex-col flex-1 p-5 sm:p-7 gap-5">

                {/* ── Top block: tag / title / rating / description ── */}
                <div className="flex flex-col gap-3">

                  {/* Tag + discount badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {tagStyle && (
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                        style={{ background: tagStyle.bg, color: tagStyle.color }}
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
                    className="text-xl sm:text-2xl font-black leading-tight"
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
                    style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
                  >
                    {[1, 2, 3, 4, 5].map((s) => (
                      <FaStar
                        key={s}
                        size={11}
                        color={s <= Math.round(product.rating) ? "#d4a373" : "rgba(212,163,115,0.3)"}
                      />
                    ))}
                    <span style={{ color: "#4a3525", fontWeight: 600, marginLeft: 4 }}>
                      {product.rating}
                    </span>
                    <span className="opacity-40 mx-1">·</span>
                    <span>({product.reviewCount} ulasan)</span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#7a6a53", fontFamily: "'Lora', Georgia, serif" }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* ── Bottom block: price / qty / CTA ── */}
                <div className="flex flex-col gap-4 mt-auto pt-2 border-t border-stone-100">

                  {/* Price */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="text-2xl sm:text-3xl font-black"
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
                        style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
                      >
                        Rp {product.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>

                  {/* Qty + CTA — side by side on sm+, stacked on xs */}
                  <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">

                    {/* Quantity counter */}
                    <div
                      className="flex items-center gap-3 justify-center xs:justify-start
                                 bg-stone-50 rounded-2xl px-4 py-2 self-center xs:self-auto"
                    >
                      <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/30 hover:bg-primary border border-primary text-base font-semibold transition-colors cursor-pointer"
                      >
                        −
                      </button>
                      <span
                        className="w-8 text-center text-base font-bold"
                        style={{ color: "#4a3525", fontFamily: "'Inter', sans-serif" }}
                      >
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty((q) => q + 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/30 hover:bg-primary border border-primary text-base font-semibold transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={handleAddItem}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5
                                 bg-primary hover:bg-dark-chocolate text-light
                                 rounded-2xl text-sm font-bold tracking-wide
                                 transition-colors duration-150 cursor-pointer"
                    >
                      <FiShoppingCart size={15} />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* ── Close button ── */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-red-500 hover:bg-red-600
                           text-white rounded-full flex items-center justify-center
                           transition-colors duration-150 z-10 cursor-pointer shadow-sm"
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