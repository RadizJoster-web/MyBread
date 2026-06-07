"use client";

const statsData = [
  { id: 1, value: "12,000+", label: "Pelanggan Setia" },
  { id: 2, value: "45+", label: "Varian Produk" },
  { id: 3, value: "8", label: "Cabang di Jabodetabek" },
  { id: 4, value: "500K+", label: "Produk Terjual" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-dark-chocolate relative overflow-hidden">
      {/* Dekorasi Lingkaran Transparan di Tengah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-white/[0.02] border border-white/[0.03] pointer-events-none hidden md:block" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12 md:py-16">
        {/* Grid layout dengan border pemisah (divide) antar item */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center py-6 px-4 z-10 flex-1"
            >
              {/* Warna teks angka menggunakan gold krem khas bakery */}
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5C299] mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="font-sans text-xs md:text-sm text-white/70 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
