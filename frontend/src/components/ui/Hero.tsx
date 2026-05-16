"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layouts/Header";

const slides = [
  {
    title: "Success in the Middle East",
    desc: "Empowering businesses across the GCC with integrated consulting and strategic solutions.",
    image: "/WhatsApp-Image-2025-10-05-at-19.49.59-1.webp"
  },
  {
    title: "Heritage Meets Innovation",
    desc: "Bridging traditional values with modern expertise to drive sustainable growth.",
    image: "/WhatsApp-Image-2025-09-26-at-18.26.13_23ba2070-1.webp"
  },
  {
    title: "Your Partner in Growth",
    desc: "Your trusted advisor for financial excellence and operational efficiency in Bahrain, KSA, and Oman.",
    image: "/shutterstock_2302318791-1-scaled-1024x683-1.webp"
  },
  {
    title: "Transform Your Vision",
    desc: "Turning ambitious ideas into reality with expert design and data analytics.",
    image: "/WhatsApp-Image-2025-09-26-at-18.30.32_83b14124 (1).webp"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col bg-[#040b1e] overflow-hidden" id="hero">
      {/* Background Image with Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              alt={slides[current].title} 
              className="w-full h-full object-cover" 
              src={slides[current].image} 
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-12 text-center">
        <div className="max-w-5xl">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl font-heading">
              {slides[current].title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              {slides[current].desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#services" className="inline-block">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 bg-[#6373f2] text-white px-10 py-5 rounded-md font-bold transition-all group cursor-pointer" 
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="relative z-10 flex justify-center pb-12">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative p-2"
            >
              <div className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "bg-[#6373f2] w-12" : "bg-white/30 w-6 group-hover:bg-white/50"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
