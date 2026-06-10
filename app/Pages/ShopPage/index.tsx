"use client";

import { useState, useMemo } from "react";
import ShopHeader from "./ShopHeader";
import FilterSidebar from "./products/FilterSidebar";
import ProductToolbar from "./products/ProductToolbar";
import ProductGrid from "@/components/ui/ProductGrid";
import PromoBar from "./products/PromoBar";
import { products, SORT_OPTIONS } from "@/assets/data/productData/productData";
import type { ProductCategory } from "@/assets/data/productData/productDataType";

const MAX_PRICE = 150000;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("Semua");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    0,
    MAX_PRICE,
  ]);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "Semua") {
      result = result.filter((p) => p.category === activeCategory);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    switch (sortBy) {
      case "Harga: Rendah ke Tinggi":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Harga: Tinggi ke Rendah":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Rating Tertinggi":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Terlaris":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [activeCategory, priceRange, minRating, searchQuery, sortBy]);

  const handleReset = () => {
    setActiveCategory("Semua");
    setPriceRange([0, MAX_PRICE]);
    setMinRating(0);
    setSearchQuery("");
    setSortBy(SORT_OPTIONS[0]);
  };

  return (
    <main
      className="min-h-screen w-full"
      style={{ background: "var(--warm-gradient)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 mt-20">
        {/* Header: breadcrumb, title, search */}
        <ShopHeader
          totalVisible={filtered.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Hairline divider */}
        <div
          className="h-px mb-8"
          style={{ background: "rgba(212,163,115,0.2)" }}
        />

        {/* Body: sidebar + main */}
        <div className="flex gap-7 items-start">
          {/* Sidebar */}
          <div className="hidden md:block w-64 lg:w-72 flex-shrink-0 sticky top-8">
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              minRating={minRating}
              onMinRatingChange={setMinRating}
              onReset={handleReset}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <ProductToolbar
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <PromoBar />

            <ProductGrid products={filtered} viewMode={viewMode} />
          </div>
        </div>
      </div>
    </main>
  );
}
