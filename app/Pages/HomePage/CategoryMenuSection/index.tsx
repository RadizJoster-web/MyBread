"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Pastry",
    sub: "Croissant, Pain au Chocolat, Éclair",
    count: 12,
    icon: "croissant.png",
  },
  {
    name: "snack",
    sub: "Cookies, Brownies, Biscotti",
    count: 8,
    icon: "cookies.png",
  },
  {
    name: "Cake",
    sub: "Red Velvet, Tart, Banana Bread",
    count: 15,
    icon: "cake.png",
  },
  {
    name: "Drinks",
    sub: "Kopi, Teh Artisan, Smoothies",
    count: 10,
    icon: "coffie.png",
  },
];

export default function CategoryMenuSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="category-menu" className="w-full py-14 bg-[#FAF6F0]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <p className="text-center font-sans text-xs font-semibold tracking-widest text-bakeryBody uppercase mb-3">
          Categories Popular
        </p>
        <h2 className="font-brand text-2xl sm:text-3xl font-bold text-bakeryText mb-12 text-center tracking-tight">
          Find your favorite bread
        </h2>

        {/* Grid Container & Mobile Scrollable Layer */}
        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:pb-0 snap-x snap-mandatory justify-start sm:justify-center">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={category.name}
                className="snap-center min-w-65 sm:min-w-0 py-4"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative group flex flex-col items-center justify-between p-8 bg-white rounded-3xl border border-transparent transition-all duration-500 h-80 cursor-pointer select-none ${
                    isActive
                      ? "border-primary/30 bg-white -translate-y-1 shadow-lg"
                      : "hover:bg-white/80"
                  }`}
                >
                  {/* Bagian Atas: Icon Kontainer */}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={`/images/categories/${category.icon}`}
                        alt={category.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bagian Bawah: Teks Kontrol Keseimbangan */}
                  <div className="w-full flex flex-col items-center text-center mt-auto">
                    <h3 className="font-brand text-xl font-bold text-bakeryText mb-1">
                      {category.name}
                    </h3>
                    <p className="font-sans text-xs text-bakeryBody/70 mb-4 px-2 max-w-50 line-clamp-1">
                      {category.sub}
                    </p>

                    {/* Badge Count */}
                    <span className="font-sans text-xs font-medium text-bakeryText bg-[#F4EDE2] px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                      {category.count} produk
                    </span>
                  </div>

                  {/* Arrow Indicator Animasi - Hanya muncul saat Active / Hover */}
                  <div className="absolute bottom-6 right-6 overflow-hidden w-6 h-6 flex items-center justify-center">
                    <span
                      className={`text-primary font-light text-base transition-all duration-500 transform ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>

                  {/* Border Bawah Dekoratif saat Active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute bottom-0 left-6 right-6 h-0.75 bg-primary rounded-t-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
