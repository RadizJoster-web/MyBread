"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { ProductLayoutProps } from "./index";

export default function ProductListLayout({
  product,
  index,
  liked,
  setLiked,
  tagStyle,
  discount,
}: ProductLayoutProps) {
  return (
    <motion.div
      className="flex gap-4 rounded-2xl overflow-hidden p-4"
      style={{
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(212,163,115,0.2)",
        boxShadow: "0 2px 12px rgba(74,53,37,0.05)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-28 h-28 rounded-xl flex items-center justify-center text-5xl shrink-0"
        style={{ background: "rgba(245,237,216,0.6)" }}
      >
        {product.emoji}

        {/* Tag badge */}
        {tagStyle && (
          <span
            className="absolute -top-1.5 -left-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase leading-none"
            style={{ background: tagStyle.bg, color: tagStyle.color }}
          >
            {product.tag}
          </span>
        )}

        {/* Discount badge */}
        {discount && (
          <span
            className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold leading-none"
            style={{ background: "#e05252", color: "#fff" }}
          >
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
        {/* Top: category + title + desc */}
        <div>
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

          {/* Price + buttons */}
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
    </motion.div>
  );
}
