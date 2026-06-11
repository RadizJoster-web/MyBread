"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { ProductLayoutProps } from "./index";

const MotionImage = motion.create(Image);

export default function ProductListLayout({
  product,
  hovered,
  setHovered,
  tagStyle,
  discount,
  onOpenDetail,
}: ProductLayoutProps) {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex gap-4 rounded-2xl overflow-hidden p-4 transition-shadow duration-300"
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
        className="relative w-28 h-28 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
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
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
        {/* Top row: category + badges */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-0.5"
              style={{ color: "#d4a373", fontFamily: "'Inter', sans-serif" }}
            >
              {product.category}
            </p>
            <h3
              className="text-base font-bold truncate"
              style={{
                color: "#4a3525",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {product.name}
            </h3>
            <p
              className="text-xs mt-1 line-clamp-1"
              style={{ color: "#7a6a53", fontFamily: "'Lora', Georgia, serif" }}
            >
              {product.description}
            </p>
          </div>

          {/* Badges — pojok kanan atas */}
          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
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

        {/* Bottom: rating + price + actions */}
        <div
          className="flex items-center justify-between pt-2.5 border-t mt-2"
          style={{ borderColor: "rgba(212,163,115,0.15)" }}
        >
          {/* Rating */}
          <div
            className="flex items-center gap-1 text-xs"
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

          {/* Price + actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex flex-col items-end">
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
                  className="text-[10px] line-through"
                  style={{
                    color: "#7a6a53",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>

            {/* Lihat Detail — muncul saat hover */}
            <motion.button
              initial={{ opacity: 0.35 }}
              animate={{ opacity: hovered ? 1 : 0.35 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center bg-primary text-dark-chocolate hover:bg-dark-chocolate hover:text-primary duration-150 gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 cursor-pointer"
              style={{
                border: "1px solid rgba(212,163,115,0.3)",
                fontFamily: "'Inter', sans-serif",
                pointerEvents: hovered ? "auto" : "none",
              }}
              onClick={onOpenDetail}
            >
              <FiEye size={12} />
              See Detail
            </motion.button>

            {/* Add to Cart */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-1.5 bg-primary hover:bg-dark-chocolate text-light duration-200 transition-colors px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer shrink-0"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
