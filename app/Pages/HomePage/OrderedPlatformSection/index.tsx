"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const orderedPlatforms = [
  {
    name: "Go Food",
    logo: "gofood-logo.png",
    link: "https://www.gofood.co.id/",
  },
  {
    name: "Grab Food",
    logo: "grab-logo.png",
    link: "https://www.grab.com/id/en/food/",
  },
  {
    name: "Shopee Food",
    logo: "shopee-logo.png",
    link: "https://shopee.co.id/shopeefood",
  },
  {
    name: "Instagram",
    logo: "instagram-logo.png",
    link: "https://www.instagram.com/mybread.id/",
  },
];

export default function OrderedPlatformSection() {
  return (
    <section
      id="ordered-platform"
      className="w-full bg-white py-14 border-y border-[#EFEAE2] overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <p className="text-center font-sans text-xs font-semibold tracking-widest text-muted-cocoa uppercase mb-3">
          Partner Delivery
        </p>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-bakeryText mb-10 text-center tracking-tight">
          Available on your favorite platforms
        </h2>

        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:pb-0 sm:gap-8 snap-x snap-mandatory">
          {orderedPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="snap-center min-w-[200px] sm:min-w-0"
            >
              <Link
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 px-6 bg-transparent border border-transparent rounded-2xl transition-all duration-300 hover:bg-bakeryBg/40 hover:border-[#EFEAE2]"
              >
                <div className="relative w-12 h-12 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                  <Image
                    src={`/images/orderedPlatforms/${platform.logo}`}
                    alt={`${platform.name} logo`}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>

                <div className="flex flex-col justify-center min-w-0">
                  <span className="font-sans font-medium text-lg text-muted-cocoa group-hover:text-bakeryText transition-colors duration-300 tracking-wide truncate">
                    {platform.name}
                  </span>

                  <span className="font-sans text-xs text-muted-cocoa/70 group-hover:text-primary transition-colors duration-300 tracking-wide flex items-center gap-1 mt-0.5">
                    <span>Click to Order</span>
                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                      -&gt;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
