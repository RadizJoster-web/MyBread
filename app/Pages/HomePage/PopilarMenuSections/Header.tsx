import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
      <div className="relative">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-muted-cocoa tracking-tight">
          Our Customer Favorites
        </h2>
        {/* Dekorasi underline emas khas gambar */}
        <div className="w-16 h-0.75 bg-primary mt-3 rounded-full" />
      </div>

      <Link
        href="/shop"
        className="group px-6 py-2.5 rounded-full border border-primary text-muted-cocoa font-sans text-sm font-medium bg-transparent hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
      >
        <span>See all</span>
        <span className="transition-transform duration-300 transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
