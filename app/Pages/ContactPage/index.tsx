"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { companyData } from "@/assets/data/companyData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  return (
    // Menggunakan id="hero" untuk memanggil --warm-gradient dari CSS kamu
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 sm:px-12 font-inter overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(74,53,37,0.15)] overflow-hidden flex flex-col lg:flex-row border border-cream-dark relative z-10"
      >
        {/* ── LEFT PANEL: Contact Information ── */}
        <div className="relative w-full lg:w-2/5 bg-dark-chocolate p-10 sm:p-14 flex flex-col justify-between overflow-hidden">
          {/* Subtle background circle decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-light opacity-5 blur-3xl pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="relative z-10"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-light tracking-tight leading-tight mb-4">
              Get in Touch
            </h2>
            <p className="font-sans text-sm text-light/80 leading-relaxed font-light mb-12">
              We'd love to hear from you. Whether you have a question about our artisan breads, custom orders, or just want to say hello, send us a message.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <FiMapPin className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-sans text-xs text-light/60 uppercase tracking-widest font-semibold mb-1">Visit Us</span>
                  <span className="font-sans text-sm text-light font-light leading-relaxed">
                    {companyData.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <FiMail className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-sans text-xs text-light/60 uppercase tracking-widest font-semibold mb-1">Email Us</span>
                  <span className="font-sans text-sm text-light font-light">{companyData.email1}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <FiPhone className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-sans text-xs text-light/60 uppercase tracking-widest font-semibold mb-1">Call Us</span>
                  <span className="font-sans text-sm text-light font-light">{companyData.phoneNumber}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT PANEL: Contact Form ── */}
        <div className="w-full lg:w-3/5 p-10 sm:p-14 bg-white">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-playfair text-2xl font-bold text-dark-chocolate mb-2">
              Send a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-light/50 border border-cream-dark rounded-xl px-4 py-3.5 text-sm text-dark-chocolate placeholder:text-muted-cocoa/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-light/50 border border-cream-dark rounded-xl px-4 py-3.5 text-sm text-dark-chocolate placeholder:text-muted-cocoa/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help you?"
                className="w-full bg-light/50 border border-cream-dark rounded-xl px-4 py-3.5 text-sm text-dark-chocolate placeholder:text-muted-cocoa/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-sans text-xs font-semibold text-muted-cocoa uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="w-full bg-light/50 border border-cream-dark rounded-xl px-4 py-3.5 text-sm text-dark-chocolate placeholder:text-muted-cocoa/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              type="submit"
              className="mt-2 w-full sm:w-auto self-end bg-primary hover:bg-dark-chocolate text-white font-sans font-semibold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm cursor-pointer"
            >
              <span>Send Message</span>
              <FiSend className="text-sm" />
            </motion.button>
          </motion.form>
        </div>

      </motion.div>
    </section>
  );
}