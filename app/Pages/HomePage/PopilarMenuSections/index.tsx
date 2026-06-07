"use client";

import Header from "./Header";
import ProductGrid from "@/components/ui/Menu/ProductGrid";
import ProductCard from "@/components/ui/Menu/MroductCard";
import type { Product } from "@/components/ui/Menu/menuType";

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Croissant Butter Classic",
    category: "PASTRY",
    price: 32000,
    rating: 4.9,
    reviews: 284,
    image: "/images/categories/croissant.png",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Americano",
    category: "ROTI",
    price: 68000,
    originalPrice: 78000,
    rating: 4.8,
    reviews: 196,
    image: "/images/categories/coffie.png",
    tag: "BEST SELLER",
    discount: "-13%",
  },
  {
    id: 3,
    name: "Cinnamon Roll Jumbo",
    category: "PASTRY",
    price: 45000,
    rating: 4.9,
    reviews: 312,
    image: "/images/categories/cake.png",
    tag: "BEST SELLER",
  },
  {
    id: 4,
    name: "Chocolate Cookies",
    category: "PASTRY",
    price: 35000,
    rating: 4.7,
    reviews: 145,
    image: "/images/categories/cookies.png",
    tag: "NEW",
  },
];

export default function PopularMenuSection() {
  return (
    <section id="popular-menu" className="w-full py-16 ">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <Header />

        <ProductGrid>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </section>
  );
}
