"use client";
import React from "react";
import { motion } from "framer-motion";
import AnalytiksHero from "@/components/analytiks/AnalytiksHero";
import AnalytiksAbout from "@/components/analytiks/AnalytiksAbout";
import AnalytiksServices from "@/components/analytiks/AnalytiksServices";
import AnalytiksTestimonials from "@/components/analytiks/AnalytiksTestimonials";

export default function AnalytiksPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <AnalytiksHero />
      <AnalytiksAbout />
      <AnalytiksServices />
      <AnalytiksTestimonials />
                </main>
  );
}
