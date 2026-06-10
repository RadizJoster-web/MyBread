import type { ProductCategory } from "@/type/productDataType";

export const CATEGORIES: { label: ProductCategory }[] = [
  { label: "All" },
  { label: "Pastry" },
  { label: "Cake" },
  { label: "Drink" },
  { label: "Cookies" },
];

export const SORT_OPTIONS = [
  "Relevansi",
  "Price: Low to High",
  "Price: High to Low",
  "The Highest Rating",
  "Best Seller",
];
