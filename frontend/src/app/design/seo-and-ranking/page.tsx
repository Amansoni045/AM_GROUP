"use client";
import React from "react";
import { motion } from "framer-motion";
import SEOHero from "@/components/design/SEOHero";
import SEOIntro from "@/components/design/SEOIntro";
import SEOServicesList from "@/components/design/SEOServicesList";

export default function SEOAndRankingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <SEOHero />
      <SEOIntro />
      <SEOServicesList />
                </main>
  );
}
