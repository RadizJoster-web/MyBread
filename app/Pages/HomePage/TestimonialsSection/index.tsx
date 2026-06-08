"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialHeader from "./Header";
import CommentCard from "./Comment";
import TotalRating from "./TotalRating";

const testimonialsData = [
  {
    id: 1,
    comment:
      "La Farine's croissants are genuinely the best I've ever had in Jakarta. Perfectly layered, flaky on the outside, and incredibly buttery inside. Been a loyal customer for 2 years!",
    name: "Sarah Amelia",
    role: "Food Blogger",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    comment:
      "Their Sourdough is pure magic! The deep crust, the complex fermentation aroma, and the chewy crumb texture—it feels exactly like the ones I used to have in Paris.",
    name: "Budi Santoso",
    role: "Regular Customer",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    comment:
      "Ordered a corporate hamper from La Farine for an office anniversary and all my colleagues were absolutely amazed. Elegant packaging and premium artisan taste.",
    name: "Diana Putri",
    role: "HR Manager",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    comment:
      "Their fruit tarts are always amazingly fresh, aesthetic, and delicious! It's our absolute go-to for birthday celebrations. Delivery is punctual every single time.",
    name: "Fatima Zahra",
    role: "Home Baker",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    comment:
      "The ambiance of their physical cafe is incredibly cozy. Sitting there enjoying a warm pain au chocolat while sipping a flat white is my favorite weekend ritual.",
    name: "Michael Chen",
    role: "Coffee Enthusiast",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 6,
    comment:
      "Incredibly consistent quality. Whether I order via delivery app or dine-in directly, the pastry retains its perfect crunch. Truly premium craftsmanship.",
    name: "Amanda Siva",
    role: "Culinary Critic",
    rating: 5.0,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 2 : prev - 2,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev >= testimonialsData.length - 2 ? 0 : prev + 2,
    );
  };

  const activeComments = testimonialsData.slice(currentIndex, currentIndex + 2);

  return (
    <section id="testimonials" className="w-full py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col">
        <TestimonialHeader />

        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[250px] overflow-hidden py-2">
            <AnimatePresence mode="wait" initial={false}>
              {activeComments.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${currentIndex}`}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 40 : -40,
                    filter: "blur(4px)",
                  }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -40 : 40,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.5,
                    ease: [0.21, 0.45, 0.32, 0.9],
                  }}
                  className="h-full"
                >
                  <CommentCard
                    comment={item.comment}
                    name={item.name}
                    role={item.role}
                    rating={item.rating}
                    avatar={item.avatar}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white hover:bg-primary border border-[#EFECE6] flex items-center justify-center text-playfair hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous testimonials"
            >
              <FiChevronLeft className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white hover:bg-primary border border-[#EFECE6] flex items-center justify-center text-playfair hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next testimonials"
            >
              <FiChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>

        <TotalRating />
      </div>
    </section>
  );
}
