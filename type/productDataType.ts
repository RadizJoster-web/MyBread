export type ProductCategory = "All" | "Pastry" | "Cake" | "Drink";

export type ProductTag = "Best Seller" | "Baru" | "Spesial" | "Limited";

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
