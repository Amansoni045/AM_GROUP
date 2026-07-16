"use client";
import React from "react";
import { motion } from "framer-motion";
import SEOHero from "@/components/design/SEOHero";
import SEOIntro from "@/components/design/SEOIntro";
import SEOServicesList from "@/components/design/SEOServicesList";

export default function SEOAndRankingPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-design">
            <SEOHero />
      <SEOIntro />
      <SEOServicesList />
                </main>
  );
}
