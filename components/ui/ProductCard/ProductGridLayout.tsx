"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { ProductLayoutProps } from "./index";

const MotionImage = motion.create(Image);

export default function ProductGridLayout({
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
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={
        {
          background: "rgba(255,255,255,0.75)",
          border: "1px solid rgba(212,163,115,0.2)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 32px rgba(74,53,37,0.12)"
            : "0 2px 16px rgba(74,53,37,0.06)",
        } as React.CSSProperties
      }
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ background: "rgba(245,237,216,0.5)", aspectRatio: "4/3" }}
      >
        <div className="relative w-3/4 h-3/4">
          <MotionImage
            src={product.image}
            alt={product.name}
            fill
            className="object-contain select-none"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Tag badge */}
        {tagStyle && (
          <span
            className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase"
            style={{ background: tagStyle.bg, color: tagStyle.color }}
          >
            {product.tag}
          </span>
        )}

        {/* Discount badge */}
        {discount && (
          <span
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold"
            style={{ background: "#e05252", color: "#fff" }}
          >
            -{discount}%
          </span>
        )}

        {/* Hover CTA overlay */}
        <motion.button
          className="absolute bottom-0 left-0 right-0 bg-primary hover:bg-dark-chocolate text-light py-3 text-center text-xs font-bold tracking-widest uppercase cursor-pointer"
          initial={{ y: "100%" }}
          animate={{ y: hovered ? "0%" : "100%" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={onOpenDetail}
        >
          See Detail
        </motion.button>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        <div>
          <p
            className="text-[10px] font-semibold tracking-widest uppercase mb-1"
            style={{ color: "#d4a373", fontFamily: "'Inter', sans-serif" }}
          >
            {product.category}
          </p>
          <h3
            className="text-[15px] font-bold leading-snug"
            style={{
              color: "#4a3525",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {product.name}
          </h3>
          <p
            className="text-xs leading-relaxed mt-1 line-clamp-2"
            style={{ color: "#7a6a53", fontFamily: "'Lora', Georgia, serif" }}
          >
            {product.description}
          </p>
        </div>

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

        {/* Price + CTA */}
        <div
          className="flex items-center justify-between pt-2.5 border-t"
          style={{ borderColor: "rgba(212,163,115,0.15)" }}
        >
          <div className="flex flex-col">
            <span
              className="text-base font-black"
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
                style={{ color: "#7a6a53", fontFamily: "'Inter', sans-serif" }}
              >
                Rp {product.originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-1.5 bg-primary hover:bg-dark-chocolate text-light duration-200 transition-colors px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}
