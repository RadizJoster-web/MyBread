import { Database } from "@/config/Database";
import type { Product } from "@/type/productDataType";

export class ProductModel {
  async getAllProducts(): Promise<Product[]> {
    const pool = await Database.getConnection();
    const [rows] = await pool.query("SELECT * FROM products");

    return (rows as any[]).map((row) => ({
      id: row.id,
      name: row.name,
      category: row.category,
      price: row.price,
      originalPrice: row.originalPrice || undefined,
      image: row.image,
      description: row.description,
      tag: row.tag || undefined,
      rating: Number(row.rating),
      reviewCount: row.reviewCount,
    }));
  }
}
