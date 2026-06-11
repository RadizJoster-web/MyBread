"use client";

import { useEffect } from "react";
import { useProduct } from "@/hooks/useProduct";
import ProductGrid from "@/components/ui/ProductGrid";
import Header from "./Header";

export default function PopularMenuSection() {
  const { dataProducts, fetchProduct } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, []);

  const bestSellers = dataProducts.filter(
    (product) => product.tag === "Best Seller",
  );

  return (
    <main id="popular-menu" className=" w-full py-16 overflow-hidden">
      <div className=" w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <Header />
        <div className="max-h-100 overflow-y-scroll py-4">
          <ProductGrid products={bestSellers} viewMode="list" />
        </div>
      </div>
    </main>
  );
}
