import { ProductModel } from "@/models/ProductModel";

const productModel = new ProductModel();

export default async function getAllProductsController() {
  try {
    const products = await productModel.getAllProducts();

    if (!products) {
      throw new Error("Daftar produk tidak ditemukan.");
    }

    return products;
  } catch (err: any) {
    throw err;
  }
}
