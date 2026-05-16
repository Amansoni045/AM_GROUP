"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={scrollToTop}
        className="bg-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-[#6373f2] border border-gray-200 hover:bg-[#6373f2] hover:text-white transition-all group cursor-pointer"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}
