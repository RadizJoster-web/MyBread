"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "../ProductCard";
import { Product } from "@/assets/data/productData/productDataType";

interface ProductGridProps {
  products: Product[];
  viewMode: "grid" | "list";
}

export default function ProductGrid({ products, viewMode }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-24 gap-3"
      >
        <span className="text-5xl">🔍</span>
        <p
          className="text-base italic"
          style={{ color: "#7a6a53", fontFamily: "'Lora', Georgia, serif" }}
        >
          Tidak ada produk yang sesuai.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          : "flex flex-col gap-3"
      }
    >
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          index={i}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}
