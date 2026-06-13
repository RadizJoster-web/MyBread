import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen lg:h-screen flex items-center justify-center gap-10 lg:gap-40 px-6 md:px-16 xl:px-40 bg-linear-to-br from-light to-muted-cocoa/30 py-20 lg:py-0"
    >
      {/* Konten Kiri (Otomatis menyesuaikan posisi lewat parent) */}
      <LeftContent />

      {/* Konten Kanan (Disembunyikan di mobile, muncul di desktop) */}
      <RightContent />
    </section>
  );
}
