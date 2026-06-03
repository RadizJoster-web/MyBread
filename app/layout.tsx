import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Bread",
  description:
    "Cooking with high-quality ingredients and make delicious bread.",
};

// Components
import Navbar from "@/components/common/Navbar";

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
      <body className="bg-background text-muted-cocoa h-full font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
