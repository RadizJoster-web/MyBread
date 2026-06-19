"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline, IoArrowBackOutline } from "react-icons/io5";
import OrderSummary from "./OrderSummary";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import { CartProps } from "@/hooks/useCart"; // Import interface dari Zustand

export type CheckoutStep = "cart" | "address" | "payment" | "success";

export default function CartCheckoutLayout({
  cartItems,
  cartOpen,
  setCartOpen,
  increaseQty,
  decreaseQty,
  clearCart,
}: CartProps) {
  const [step, setStep] = useState<CheckoutStep>("cart");

  const handleClose = () => {
    setCartOpen(false);
    // Reset step ke awal setelah animasi penutupan selesai (delay 300ms)
    setTimeout(() => setStep("cart"), 300);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

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
          {/* ── BACKDROP ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* ── SIDEBAR CONTAINER ── */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] md:w-[480px] bg-white shadow-2xl z-50 flex flex-col font-sans overflow-hidden"
          >
            {/* ── DYNAMIC HEADER ── */}
            <div className="p-5 border-b border-[#EFEAE2] flex items-center justify-between bg-[#FAF6F0] shrink-0">
              <div className="flex items-center gap-3 text-dark-chocolate">
                {step !== "cart" && step !== "success" && (
                  <button
                    onClick={() =>
                      setStep(step === "payment" ? "address" : "cart")
                    }
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#EFEAE2] transition-colors outline-none cursor-pointer"
                  >
                    <IoArrowBackOutline className="text-lg" />
                  </button>
                )}

                <h2 className="font-playfair text-xl font-bold tracking-tight">
                  {step === "cart" && "Your Box"}
                  {step === "address" && "Shipping Details"}
                  {step === "payment" && "Payment"}
                  {step === "success" && "Order Complete"}
                </h2>
              </div>

              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#F5ECD8] text-dark-chocolate hover:bg-dark-chocolate hover:text-white transition-colors duration-200 cursor-pointer outline-none"
              >
                <IoCloseOutline className="text-xl" />
              </button>
            </div>

            {/* ── PROGRESS BAR ── */}
            {step !== "success" && (
              <div className="w-full bg-[#EFEAE2] h-1">
                <motion.div
                  className="bg-primary h-full"
                  initial={{ width: "33%" }}
                  animate={{
                    width:
                      step === "cart"
                        ? "33%"
                        : step === "address"
                          ? "66%"
                          : "100%",
                  }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                />
              </div>
            )}

            {/* ── DYNAMIC BODY CONTENT ── */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {step === "cart" && (
                  <OrderSummary
                    key="cart"
                    cartItems={cartItems}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    clearCart={clearCart}
                    totalPrice={totalPrice}
                    formatRupiah={formatRupiah}
                    onNext={() => setStep("address")}
                  />
                )}
                {step === "address" && (
                  <ShippingAddress
                    key="address"
                    onNext={() => setStep("payment")}
                  />
                )}
                {step === "payment" && (
                  <PaymentMethod
                    key="payment"
                    totalPrice={totalPrice}
                    formatRupiah={formatRupiah}
                    onSuccess={() => setStep("success")}
                  />
                )}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">
                      ✓
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-dark-chocolate mb-2">
                      Payment Successful!
                    </h3>
                    <p className="font-sans text-sm text-muted-cocoa mb-8 leading-relaxed">
                      Your artisan pastries are being prepared and will be
                      shipped to your address shortly.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-primary hover:bg-dark-chocolate text-white font-semibold py-3.5 px-8 rounded-xl transition-colors shadow-md w-full max-w-xs outline-none cursor-pointer"
                    >
                      Continue Shopping
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
