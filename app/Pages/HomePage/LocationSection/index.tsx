"use client";

import LocationDetail from "./LocationDetail";
import LocationMap from "./LocationMap";

// URL untuk redireksi saat peta di-klik (Buka Tab Baru)
const GOOGLE_MAPS_REDIRECT_URL =
  "https://maps.google.com/?q=Kemang+Raya+Jakarta";

// URL Embed SRC Iframe dari Google Maps Share Option
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1264440078044!2d106.812604!3d-6.247076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16e379dcb6d%3A0x6b44766bf399e829!2sJl.%20Kemang%20Raya%2C%20RT.1%2FRW.1%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="w-full py-20 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Background decoration ring khas arsitektur landing page kamu */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/[0.4] border border-[#F4EDE2] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Informasi Toko Lengkap */}
          <LocationDetail mapUrl={GOOGLE_MAPS_REDIRECT_URL} />

          {/* Kolom Kanan: Google Maps Frame Linkable */}
          <LocationMap
            mapUrl={GOOGLE_MAPS_REDIRECT_URL}
            embedSrc={GOOGLE_MAPS_EMBED_SRC}
          />
        </div>
      </div>
    </section>
  );
}
