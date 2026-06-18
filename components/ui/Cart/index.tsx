"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

interface CartItem {
  name: string;
  price: number;
  quantity?: number;
  image: string;
}

import { CartProps } from "@/hooks/useCart";

export default function Cart({
  cartItems,
  cartOpen,
  setCartOpen,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
}: CartProps) {
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
          {/* ── BACKDROP OVERLAY ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* ── SLIDING SIDEBAR CART ── */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 flex flex-col font-sans"
          >
            {/* ── CART HEADER ── */}
            <div className="p-5 border-b border-[#EFEAE2] flex items-center justify-between bg-[#FAF6F0]">
              <div className="flex items-center gap-2.5 text-dark-chocolate">
                <h2 className="font-playfair text-xl font-bold tracking-tight">
                  Your Box
                </h2>
                <span className="text-xs bg-primary/20 text-dark-chocolate font-bold px-2.5 py-0.5 rounded-full">
                  {hasItems
                    ? cartItems.reduce(
                        (acc, item) => acc + (item.quantity || 1),
                        0,
                      )
                    : 0}
                </span>
              </div>

              {/* Kelompok Tombol Aksi Header */}
              <div className="flex items-center gap-2">
                {/* Tombol Hapus Semua (Muncul jika ada item) */}
                {hasItems && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearCart}
                    title="Clear Cart"
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#F5ECD8] text-muted-cocoa hover:bg-red-100 hover:text-red-600 transition-colors duration-200 cursor-pointer outline-none shadow-3xs"
                  >
                    <FiTrash2 size={16} />
                  </motion.button>
                )}

                {/* Tombol Close */}
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#F5ECD8] text-dark-chocolate hover:bg-dark-chocolate hover:text-white transition-colors duration-200 cursor-pointer outline-none"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
            </div>

            {/* ── CART BODY (ITEMS LIST) ── */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {hasItems ? (
                <ul className="space-y-3.5">
                  {cartItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, ease: "easeOut" }}
                      className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-[#EDE4D8] bg-white/60 hover:bg-white shadow-xs hover:shadow-sm transition-all duration-200"
                    >
                      {/* Sisi Kiri: Foto Produk + Detail Info */}
                      <div className="flex items-center gap-3.5 min-w-0 flex-1">
                        {/* Bingkai Thumbnail Gambar */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#EDE4D8]/50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Konten Teks & Stepper Kuantitas */}
                        <div className="flex flex-col gap-2 min-w-0 flex-1">
                          <span className="font-sans font-bold text-dark-chocolate text-sm sm:text-base truncate">
                            {item.name}
                          </span>

                          {/* ── KONTROL KUANTITAS (MODERN STEPPER) ── */}
                          <div className="flex items-center bg-[#FAF6F0] border border-[#EDE4D8] rounded-xl p-0.5 w-fit shadow-2xs">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => decreaseQty(item.name)}
                              className="w-7 h-7 rounded-lg flex items-center justify-center bg-white text-muted-cocoa hover:text-dark-chocolate border border-[#EDE4D8]/30 transition-colors cursor-pointer outline-none shadow-3xs"
                            >
                              <FiMinus size={12} />
                            </motion.button>

                            <span className="w-7 text-center font-sans font-bold text-xs text-dark-chocolate select-none">
                              {item.quantity || 1}
                            </span>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => increaseQty(item.name)}
                              className="w-7 h-7 rounded-lg flex items-center justify-center bg-white text-muted-cocoa hover:text-primary border border-[#EDE4D8]/30 transition-colors cursor-pointer outline-none shadow-3xs"
                            >
                              <FiPlus size={12} />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Sisi Kanan: Harga Tunggal / Subtotal Item */}
                      <div className="text-right shrink-0 pl-2">
                        <span className="font-sans font-bold text-[#b8892a] text-sm sm:text-base tracking-tight">
                          {formatRupiah(item.price * (item.quantity || 1))}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                /* Empty Cart State */
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6F0] flex items-center justify-center text-primary mb-4 shadow-3xs">
                    <HiOutlineShoppingBag className="text-3xl" />
                  </div>
                  <h3 className="font-playfair text-base font-bold text-dark-chocolate mb-1.5">
                    Your box is empty
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-cocoa max-w-xs leading-relaxed font-light">
                    You haven't added any fresh breads or pastries yet. Explore
                    our delicious menu to fill up your box!
                  </p>
                </div>
              )}
            </div>

            {/* ── CART FOOTER (CHECKOUT BANNER) ── */}
            {hasItems && (
              <div className="p-6 border-t border-[#EFEAE2] bg-[#FAF6F0] space-y-4">
                <div className="flex items-center justify-between text-dark-chocolate">
                  <span className="font-sans font-medium text-sm sm:text-base">
                    Total Estimated Price
                  </span>
                  <span className="font-sans font-bold text-xl sm:text-2xl text-[#b8892a] tracking-tight">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary hover:bg-dark-chocolate text-white font-sans font-semibold py-4 rounded-xl cursor-pointer transition-colors duration-300 shadow-md shadow-primary/10 text-sm tracking-wide outline-none"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
