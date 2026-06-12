import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// 1. KONFIGURASI FONT (Dibersihkan dari font bawaan template yang tidak terpakai)
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// 2. METADATA DINAMIS (Menggunakan fungsi generateMetadata bawaan Next.js)
// Fungsi ini otomatis membaca parameter route yang sedang aktif secara aman di server
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "My Bread - %s", // %s akan otomatis digantikan oleh title yang ada di page.tsx masing-masing
      default: "My Bread - Artisan Bakery", // Title default jika page tidak menentukan title
    },
    description:
      "Cooking with high-quality ingredients and make delicious bread.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-[#FAF6F0] text-muted-cocoa h-full font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
