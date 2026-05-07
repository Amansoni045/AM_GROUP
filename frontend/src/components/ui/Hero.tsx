"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layouts/Header";

const slides = [
  {
    title: "Success in the Middle East",
    desc: "Empowering businesses across the GCC with integrated consulting and strategic solutions.",
    image: "/WhatsApp-Image-2025-09-26-at-18.30.32_83b14124.webp"
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
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col bg-[#040b1e] overflow-hidden" id="hero">
      {/* Background Image with Transition */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img 
              alt={slide.title} 
              className="w-full h-full object-cover" 
              src={slide.image} 
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-12 text-center">
        <div className="max-w-5xl">
          <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl">
            {slides[current].title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a 
              className="inline-flex items-center justify-center gap-3 bg-[#6373f2] text-white px-10 py-5 rounded-md font-bold hover:bg-opacity-90 transition-all group" 
              href="#services"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-md font-bold hover:bg-white/30 transition-all" 
              href="#story"
            >
              About AM Group
            </a>
          </div>
        </div>
      </div>

      {/* Slider Indicators (Custom centered bar) */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-500 rounded-full ${i === current ? "bg-white w-12" : "bg-white/30 w-6"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
