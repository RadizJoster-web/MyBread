"use client";

import { FiFilter, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import ShopHeader from "./ShopHeader";
import FilterSidebar from "./products/FilterSidebar";
import ProductToolbar from "./products/ProductToolbar";
import ProductGrid from "@/components/ui/ProductGrid";
import PromoBar from "./products/PromoBar";
import { useProduct } from "@/hooks/useProduct";
import { SORT_OPTIONS } from "@/assets/data/productData/productData";
import type { ProductCategory } from "@/type/productDataType";

const MAX_PRICE = 150000;

export default function ShopPage() {
  const { dataProducts, error, loading, fetchProduct } = useProduct();

  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    0,
    MAX_PRICE,
  ]);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const filtered = useMemo(() => {
    let result = [...dataProducts];

    if (activeCategory !== "All") {
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
  }, [
    dataProducts,
    activeCategory,
    priceRange,
    minRating,
    searchQuery,
    sortBy,
  ]);

  const handleReset = () => {
    setActiveCategory("All");
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
        <ShopHeader
          totalVisible={filtered.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div
          className="h-px mb-8"
          style={{ background: "rgba(212,163,115,0.2)" }}
        />

        <div className="relative flex gap-7 items-start">
          <AnimatePresence>
            {(filterOpen || true) && (
              <>
                {/* Backdrop mobile */}
                {filterOpen && (
                  <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setFilterOpen(false)}
                    className="fixed inset-0 z-30 md:hidden"
                    style={{
                      background: "rgba(74,53,37,0.4)",
                      backdropFilter: "blur(2px)",
                    }}
                  />
                )}

                <motion.div
                  key="sidebar"
                  initial={{ x: "-100%" }}
                  animate={{ x: filterOpen ? "0%" : "-100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 260 }}
                  className="fixed top-1/2 -translate-y-1/2 left-4 h-auto max-h-[85vh] z-40 w-72 md:hidden overflow-y-auto rounded-2xl"
                >
                  <div className="p-4 pt-6">
                    <FilterSidebar
                      activeCategory={activeCategory}
                      onCategoryChange={(v) => {
                        setActiveCategory(v);
                        setFilterOpen(false);
                      }}
                      priceRange={priceRange}
                      onPriceRangeChange={setPriceRange}
                      minRating={minRating}
                      onMinRatingChange={setMinRating}
                      onReset={handleReset}
                    />
                  </div>
                </motion.div>

                {/* Desktop sidebar — tidak berubah */}
                <div className="hidden md:block w-64 lg:w-72 shrink-0 sticky top-8">
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
              </>
            )}
          </AnimatePresence>

          <div className="flex-1 min-w-0">
            <ProductToolbar
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
              setFilterOpen={setFilterOpen}
            />

            <PromoBar />

            {loading && (
              <div
                className="flex justify-center py-24 text-sm"
                style={{ color: "#7a6a53" }}
              >
                Loading Products...
              </div>
            )}

            {error && !loading && (
              <div
                className="flex flex-col items-center py-24 gap-2 text-sm"
                style={{ color: "#7a6a53" }}
              >
                <span className="text-4xl">⚠️</span>
                {error}
              </div>
            )}

            {!loading && !error && (
              <ProductGrid products={filtered} viewMode={viewMode} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
