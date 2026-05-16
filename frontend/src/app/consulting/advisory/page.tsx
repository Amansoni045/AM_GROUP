"use client";
import React from "react";
import { motion } from "framer-motion";
import AdvisoryHero from "@/components/consulting/AdvisoryHero";
import AdvisoryIntro from "@/components/consulting/AdvisoryIntro";
import AdvisoryServicesList from "@/components/consulting/AdvisoryServicesList";

export default function AdvisoryPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <AdvisoryHero />
      <AdvisoryIntro />
      <AdvisoryServicesList />
                </main>
  );
}
