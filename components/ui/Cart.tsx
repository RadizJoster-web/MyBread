"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";

interface CartItem {
  name: string;
  price: number;
  quantity?: number;
  image: string;
}

interface CartProps {
  cartItems: CartItem[];
  cartOpen: boolean;
  onClose: () => void;
}

export default function Cart({ cartItems, cartOpen, onClose }: CartProps) {
  const hasItems = cartItems && cartItems.length > 0;

  const totalPrice = hasItems
    ? cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0,
      )
    : 0;

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-110 bg-white shadow-2xl z-50 flex flex-col font-sans"
          >
            <div className="p-5 border-b border-[#EFEAE2] flex items-center justify-between bg-bakeryBg">
              <div className="flex items-center gap-2 text-bakeryText">
                <h2 className="font-brand text-xl font-bold">Your Cart</h2>
                <span className="text-xs bg-primary/20 text-bakeryText font-semibold px-2 py-0.5 rounded-full">
                  {hasItems ? cartItems.length : 0}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-red-500 text-white hover:bg-red-600 transition-all cursor-pointer"
              >
                <IoCloseOutline className="text-xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {hasItems ? (
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl border border-[#EFEAE2] bg-white hover:shadow-sm transition-shadow"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-bakeryBg shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col min-w-0">
                        <span className="font-medium text-bakeryText text-sm sm:text-base truncate">
                          {item.name}
                        </span>
                        {item.quantity && (
                          <span className="text-xs text-primary mt-0.5">
                            Qty: {item.quantity}
                          </span>
                        )}
                      </div>

                      <span className="font-semibold text-primary text-sm sm:text-base shrink-0">
                        {formatRupiah(item.price)}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-bakeryBg flex items-center justify-center text-primary mb-4">
                    <HiOutlineShoppingBag className="text-3xl" />
                  </div>
                  <h3 className="text-base font-semibold text-bakeryText mb-1">
                    Your cart is empty
                  </h3>
                  <p className="text-xs sm:text-sm text-primary max-w-xs">
                    You haven't added any fresh breads or pastries yet. Explore
                    our delicious menu to fill up your box!
                  </p>
                </div>
              )}
            </div>

            {hasItems && (
              <div className="p-5 border-t border-[#EFEAE2] bg-bakeryBg space-y-4">
                <div className="flex items-center justify-between text-bakeryText">
                  <span className="font-medium text-sm sm:text-base">
                    Total Price
                  </span>
                  <span className="font-bold text-lg sm:text-xl text-primary">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <button className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-dark-chocolate cursor-pointer transition-all shadow-md">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
