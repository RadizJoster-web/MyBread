import type { Product, ProductCategory } from "@/type/productDataType";

export const CATEGORIES: { label: ProductCategory; count: number }[] = [
  { label: "All", count: 12 },
  { label: "Pastry", count: 4 },
  { label: "Cake", count: 3 },
  { label: "Drink", count: 1 },
];

export const SORT_OPTIONS = [
  "Relevansi",
  "Harga: Rendah ke Tinggi",
  "Harga: Tinggi ke Rendah",
  "Rating Tertinggi",
  "Terlaris",
];
