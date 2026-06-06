"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { FaPlus, FaStar } from "react-icons/fa6";
import { useState } from "react";
import type { Product } from "./menuType";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="snap-center min-w-70 sm:min-w-0 flex flex-col bg-white rounded-3xl border border-[#EFEAE2] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Area Atas (Thumbnail & Actions) */}
        <div className="relative bg-primary/30 h-64 w-full flex items-center justify-center p-6 overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
            {product.tag && (
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider text-white ${product.tag === "NEW" ? "bg-[#608066]" : "bg-primary"}`}
              >
                {product.tag}
              </span>
            )}
            {product.discount && (
              <span className="text-[10px] font-bold bg-[#E06666] text-white px-2 py-0.5 rounded-md self-start">
                {product.discount}
              </span>
            )}
          </div>

          <div className="relative w-30 h-30">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Overlay Detail trigger */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-0 left-0 w-full bg-dark-chocolate/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center py-3.5 cursor-pointer"
          >
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              Lihat Detail
            </span>
          </div>
        </div>

        {/* Area Bawah (Informasi) */}
        <div className="p-5 flex flex-col flex-1 bg-white">
          <span className="text-[11px] font-bold text-muted-cocoa uppercase tracking-widest mb-1.5">
            {product.category}
          </span>
          <h3 className="font-playfair text-lg font-bold text-primary line-clamp-1 mb-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-5">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[10px]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-primary ml-1">
              {product.rating}
            </span>
            <span className="text-xs text-muted-cocoa">
              ({product.reviews})
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-2">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-playfair text-lg font-bold text-primary">
                {formatRupiah(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-cocoa line-through">
                  {formatRupiah(product.originalPrice)}
                </span>
              )}
            </div>
            <button className="w-9 h-9 rounded-full bg-dark-chocolate text-white flex items-center justify-center hover:bg-primary hover:scale-105 active:scale-95 transition-all cursor-pointer">
              <FaPlus className="text-lg" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
