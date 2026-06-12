"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import { ProductLayoutProps } from "./index";
import useCart from "@/hooks/useCart";

const MotionImage = motion.create(Image);

export default function ProductListLayout({
  product,
  hovered,
  setHovered,
  tagStyle,
  discount,
  onOpenDetail,
}: ProductLayoutProps) {
  const { addToCart } = useCart();

  const handleAddItem = () => {
    addToCart({
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-3 rounded-2xl overflow-hidden p-3 sm:p-4 transition-shadow duration-300"
      style={{
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(212,163,115,0.2)",
        boxShadow: hovered
          ? "0 8px 24px rgba(74,53,37,0.10)"
          : "0 2px 12px rgba(74,53,37,0.05)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
        style={{ background: "rgba(245,237,216,0.6)" }}
      >
        <div className="relative w-3/4 h-3/4">
          <MotionImage
            src={product.image}
            alt={product.name}
            fill
            className="object-contain select-none"
          />
        </div>

        {/* Badge di atas thumbnail — mobile only */}
        {tagStyle && (
          <span
            className="sm:hidden absolute top-1 left-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold tracking-wide uppercase leading-none"
            style={{ background: tagStyle.bg, color: tagStyle.color }}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
        {/* Top: title + badges (desktop) */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-0.5 hidden sm:block"
              style={{ color: "#d4a373", fontFamily: "'Inter', sans-serif" }}
            >
              {product.category}
            </p>
            <h3
              className="text-sm sm:text-base font-bold leading-snug line-clamp-1"
              style={{
                color: "#4a3525",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {product.name}
            </h3>
            <p
              className="text-xs mt-0.5 line-clamp-1 hidden sm:block"
              style={{ color: "#7a6a53", fontFamily: "'Lora', Georgia, serif" }}
            >
              {product.description}
            </p>
          </div>

          {/* Badges — desktop only */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0 mt-0.5">
            {tagStyle && (
              <span
                className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase leading-none"
                style={{ background: tagStyle.bg, color: tagStyle.color }}
              >
                {product.tag}
              </span>
            )}
            {discount && (
              <span
                className="px-2 py-0.5 rounded-full text-[9px] font-bold leading-none"
                style={{ background: "#e05252", color: "#fff" }}
              >
                -{discount}%
              </span>
            )}
          </div>
        </div>

        {/* Rating — desktop only */}
        <div
          className="hidden sm:flex items-center gap-1 text-xs mt-1"
          style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <FaStar
              key={s}
              size={10}
              color={
                s <= Math.round(product.rating)
                  ? "#d4a373"
                  : "rgba(212,163,115,0.3)"
              }
            />
          ))}
          <span style={{ color: "#4a3525", fontWeight: 600, marginLeft: 2 }}>
            {product.rating}
          </span>
          <span className="opacity-40 mx-0.5">·</span>
          <span>({product.reviewCount})</span>
        </div>

        {/* Bottom: price + actions */}
        <div
          className="flex items-center justify-between pt-2 border-t mt-2"
          style={{ borderColor: "rgba(212,163,115,0.15)" }}
        >
          {/* Price */}
          <div className="flex flex-col">
            <span
              className="text-sm font-black"
              style={{
                color: "#4a3525",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Rp {product.price.toLocaleString("id-ID")}
            </span>
            {product.originalPrice && (
              <span
                className="text-[10px] line-through hidden sm:block"
                style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
              >
                Rp {product.originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* See Detail — desktop only */}
            <motion.button
              initial={{ opacity: 0.35 }}
              animate={{ opacity: hovered ? 1 : 0.35 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileTap={{ scale: 0.92 }}
              onClick={onOpenDetail}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 cursor-pointer"
              style={{
                background: "rgba(245,237,216,0.8)",
                border: "1px solid rgba(212,163,115,0.3)",
                color: "#4a3525",
                fontFamily: "'Inter', sans-serif",
                pointerEvents: hovered ? "auto" : "none",
              }}
            >
              <FiEye size={12} />
              See Detail
            </motion.button>

            {/* Add to Cart */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleAddItem}
              className="flex items-center gap-1.5 bg-primary hover:bg-dark-chocolate text-light duration-200 transition-colors px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer shrink-0"
            >
              <FiShoppingBag size={12} />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
