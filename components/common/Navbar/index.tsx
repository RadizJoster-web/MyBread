"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ProfileWidget from "./ProfileWedget";

import { MdPerson } from "react-icons/md";
import { BsList, BsX } from "react-icons/bs"; 

const pagesList = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
];

export default function Navbar() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      // Saat di-scroll ke bawah lebih dari 50px
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
        // Kembali ke kondisi transparan di atas hero image saat di posisi paling atas
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
    <nav
      ref={headerRef}
      // Memastikan transisi warna background halus saat di-scroll
      className="fixed top-0 left-0 z-50 w-full h-20 flex items-center justify-between px-6 lg:px-16 transition-all duration-300 bg-transparent"
    >
      {/* AREA KIRI: LOGO & MOBILE BUTTON */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden w-10 h-10 rounded-xl bg-transparent hover:bg-bakeryPrimary/20 duration-200 flex items-center justify-center cursor-pointer text-bakeryText"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Ikon berubah jadi silang jika menu mobile terbuka */}
          {mobileMenuOpen ? (
            <BsX className="text-2xl" />
          ) : (
            <BsList className="text-2xl" />
          )}
        </button>

        <Link
          href="/"
          className="font-brand text-2xl lg:text-3xl font-bold text-bakeryText cursor-pointer tracking-wide"
        >
          My Bread
        </Link>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      {mobileMenuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white border-t border-[#EFEAE2] shadow-lg lg:hidden flex flex-col py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          {pagesList.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                onClick={() => setMobileMenuOpen(false)} // Tutup otomatis jika link diklik
                className="block py-3 px-6 text-bakeryText hover:bg-bakeryBg hover:text-bakeryPrimary font-sans font-medium transition-colors"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* AREA TENGAH: DESKTOP NAVIGATION MENU */}
      <ul className="space-x-8 hidden lg:flex items-center">
        {pagesList.map((page) => (
          <li key={page.href} className="group relative py-2">
            <Link
              href={page.href}
              className="font-sans font-medium text-bakeryBody hover:text-bakeryText transition-colors duration-200"
            >
              {page.label}
            </Link>
            {/* Animasi underline estetik */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bakeryPrimary transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* AREA KANAN: TOMBOL PROFILE + WIDGET DROPDOWN */}
      <div className="relative">
        <button
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          className="w-10 h-10 rounded-full bg-transparent hover:bg-bakeryPrimary/20 duration-200 flex items-center justify-center cursor-pointer text-bakeryText"
        >
          <MdPerson className="text-2xl" />
        </button>

        {/* Meneruskan fungsi onClose agar dropdown bisa menutup dirinya sendiri */}
        {profileMenuOpen && <ProfileWidget />}
      </div>
    </nav>
  );
}
