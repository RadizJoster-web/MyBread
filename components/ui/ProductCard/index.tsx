"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Product } from "@/assets/data/productData/productDataType";
import ProductGridLayout from "./ProductGridLayout";
import ProductListLayout from "./ProductListLayout";

export const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  "Best Seller": { bg: "#d4a373", color: "#fff" },
  Baru: { bg: "#6aaa6a", color: "#fff" },
  Spesial: { bg: "#b87333", color: "#fff" },
  Limited: { bg: "#7a6a53", color: "#fdf8f0" },
};

export interface ProductLayoutProps {
  product: Product;
  index: number;
  hovered: boolean;
  setHovered: (v: boolean) => void;
  liked: boolean;
  setLiked: (v: boolean) => void;
  tagStyle: { bg: string; color: string } | null;
  discount: number | null;
}

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.3, ease: "linear", delay: i * 0.05 },
  }),
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

interface ProductCardProps {
  product: Product;
  index: number;
  viewMode?: "grid" | "list";
}

export default function ProductCard({
  product,
  index,
  viewMode = "grid",
}: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const tagStyle = product.tag ? TAG_STYLES[product.tag] : null;
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const layoutProps: ProductLayoutProps = {
    product,
    index,
    hovered,
    setHovered,
    liked,
    setLiked,
    tagStyle,
    discount,
  };

  // motion.div ada di sini sebagai satu-satunya animated wrapper
  // agar AnimatePresence di ProductGrid bisa track enter/exit dengan benar
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {viewMode === "grid" ? (
        <ProductGridLayout {...layoutProps} />
      ) : (
        <ProductListLayout {...layoutProps} />
      )}
    </motion.div>
  );
}
