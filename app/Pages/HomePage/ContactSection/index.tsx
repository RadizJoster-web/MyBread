"use client";

import ContactHeader from "./Header";
import ContactForm from "./Form";

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="w-full bg-dark-chocolate relative overflow-hidden py-20"
    >
      {/* Dekorasi Lingkaran Halus Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.01] border border-white/[0.02] pointer-events-none hidden md:block" />

      {/* Kontainer Utama */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        {/* Header Section */}
        <ContactHeader />

        {/* Input Form Section */}
        <ContactForm />
      </div>
    </section>
  );
}
