"use client";

import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState<any[]>([
    {
      image: "/images/croissant-icon.jpeg",
      name: "Sample Bread",
      price: 5000,
      quantity: 2,
    },
    {
      image: "/images/croissant-icon.jpeg",
      name: "Sample Pastry",
      price: 3000,
      quantity: 1,
    },
    {
      image: "/images/croissant-icon.jpeg",
      name: "Sample Cake",
      price: 15000,
      quantity: 1,
    },
    {
      image: "/images/croissant-icon.jpeg",
      name: "Sample Croissant",
      price: 7000,
      quantity: 3,
    },
  ]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return { cartItems, cartOpen, setCartOpen, addToCart };
}
