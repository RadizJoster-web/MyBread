"use client";

export default function ProductGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-x-auto pb-6 gap-6 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:pb-0 snap-x snap-mandatory">
      {children}
    </div>
  );
}
