export type ProductCategory = "All" | "Pastry" | "Cake" | "Drink" | "Cookies";

export type ProductTag = "Best Seller" | "New" | "Special" | "Limited";

export interface Product {
  id: number;
  name: string;
  category: Exclude<ProductCategory, "All">;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  tag?: ProductTag;
  rating: number;
  reviewCount: number;
}
