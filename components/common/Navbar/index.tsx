"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useCart from "@/hooks/useCart";
import Cart from "@/components/ui/Cart";
import { BsList, BsX } from "react-icons/bs";
import { usePage } from "@/hooks/usePage";
import { pagesList } from "@/assets/pageList";

export default function Navbar() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();
  const { selectedPage, setSelectedPage } = usePage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 50) {
        headerRef.current.classList.add(
          "bg-white/90",
          "backdrop-blur-md",
          "shadow-sm",
          "border-b",
          "border-[#EFEAE2]",
        );
        headerRef.current.classList.remove("bg-transparent");
      } else {
        headerRef.current.classList.add("bg-transparent");
        headerRef.current.classList.remove(
          "bg-white/90",
          "backdrop-blur-md",
          "shadow-sm",
          "border-b",
          "border-[#EFEAE2]",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={headerRef}
        className="fixed top-0 left-0 z-50 w-full h-20 flex items-center justify-between px-6 md:px-16 xl:px-50 2xl:px-80 transition-all duration-300 bg-transparent"
      >
        <Link
          href="/"
          className="font-playfair text-2xl lg:text-3xl font-bold text-primary cursor-pointer tracking-wide"
        >
          My Bread
        </Link>

        {/* DROPDOWN MENU MOBILE */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-20 left-0 w-full h-screen bg-white border-t border-[#EFEAE2] shadow-lg lg:hidden flex flex-col justify-start items-start md:items-center py-2 pt-20 z-40"
            >
              {pagesList.map((page, index) => (
                <motion.li
                  key={page.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={page.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-6 text-2xl text-primary hover:bg-bakeryBg hover:text-primary font-sans font-medium transition-colors"
                  >
                    {page.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* AREA TENGAH: DESKTOP NAVIGATION MENU */}
        <ul className="hidden lg:flex items-center gap-1">
          {pagesList.map((page) => (
            <li key={page.href} className="group relative">
              <Link
                href={page.href}
                onClick={() => setSelectedPage(page.label)}
                className="font-inter text-sm font-medium py-2 px-6"
              >
                {page.label}
              </Link>

              {selectedPage === page.label && (
                <motion.span
                  layoutId="activeUnderline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary w-7/10"
                />
              )}

              {selectedPage !== page.label && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-7/10"></span>
              )}
            </li>
          ))}
        </ul>

        {/* AREA KANAN: TOMBOL PROFILE + WIDGET DROPDOWN */}
        <div className="flex items-center gap-4">
          <Link
            href={"/shop"}
            className="hidden md:flex items-center gap-1 bg-muted-cocoa text-light py-2 px-6 rounded-full font-medium hover:bg-dark-chocolate transition-all duration-300 cursor-pointer"
          >
            Order Now
          </Link>

          <button
            className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-muted-cocoa flex items-center justify-center cursor-pointer text-primary hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => setCartOpen(!cartOpen)}
          >
            🛒
          </button>

          <button
            className="lg:hidden w-10 h-10 rounded-xl bg-transparent hover:bg-primary/20 duration-200 flex items-center justify-center cursor-pointer text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              key={mobileMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {mobileMenuOpen ? (
                <BsX className="text-2xl" />
              ) : (
                <BsList className="text-2xl" />
              )}
            </motion.div>
          </button>
        </div>
      </nav>

      <Cart
        cartItems={cartItems}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </>
  );
}
