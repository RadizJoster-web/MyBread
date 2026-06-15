"use client";

import { useState } from "react";
import { FAQS } from "./faqData";
import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  // Fungsi toggle untuk membuka/menutup accordion
  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-light overflow-hidden">
      {/* ── Background Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 15% 40%, rgba(245, 236, 216, 0.9) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-start gap-16 lg:gap-24">
        {/* Kolom Kiri: Sticky Header */}
        <FaqHeader />

        {/* Kolom Kanan: Accordion List */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
