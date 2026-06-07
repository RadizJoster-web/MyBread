"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const halamanLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const produkLinks = [
  { label: "Pastry & Croissant", href: "#" },
  { label: "Roti Artisan", href: "#" },
  { label: "Kue & Cake", href: "#" },
  { label: "Hampers & Gift", href: "#" },
  { label: "Minuman", href: "#" },
  { label: "Pre-Order Cake", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Shipping Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dark-chocolate pt-16 pb-8 border-t border-white/[0.04]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-white/[0.06]">
          {/* Kolom 1: Brand Info */}
          <FooterBrand />

          {/* Kolom 2: Halaman Navigation */}
          <FooterLinks title="Pages" links={halamanLinks} />

          {/* Kolom 3: Produk Links */}
          <FooterLinks title="Products" links={produkLinks} />

          {/* Kolom 4: Contact Info */}
          <FooterContact />
        </div>

        {/* Bottom Bar: Copyright and Legal Policy */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-sans">
          {/* Copyright text */}
          <p className="text-center md:text-left font-light">
            © 2026 My Bread Artisan Bakery. All rights reserved.
          </p>

          {/* Legal Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((legal, index) => (
              <a
                key={index}
                href={legal.href}
                className="hover:text-[#E5C299] transition-colors font-light"
              >
                {legal.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
