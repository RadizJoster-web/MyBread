import { useState } from "react";
import type { Product } from "@/type/productDataType";

export const useProduct = () => {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (!response.ok) {
        setDataProducts([]);
        setError(result.message ?? "Something wrong.");
        return;
      }

      setDataProducts(result.data);
    } catch {
      setError("Failed connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return { dataProducts, error, loading, fetchProduct };
};
