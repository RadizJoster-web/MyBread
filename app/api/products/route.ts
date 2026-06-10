import { NextResponse } from "next/server";
import getAllProductsController from "@/controller/products/getAllProductsController";

export async function GET() {
  try {
    const result = await getAllProductsController();

    return NextResponse.json(
      { message: "Successfully retrieved the products", data: result },
      { status: 200 },
    );
  } catch (err: any) {
    console.error("API Error:", err.message);

    return NextResponse.json(
      { message: "Failed to retrieve the products", data: null },
      { status: 500 },
    );
  }
}
