import ShopPage from "../Pages/ShopPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop"
}

export default function Shop() {
  return <ShopPage />;
}
