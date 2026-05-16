"use client";
import React from "react";
import { motion } from "framer-motion";
import CFOHero from "@/components/accounting/CFOHero";
import CFOIntro from "@/components/accounting/CFOIntro";
import CFOServicesList from "@/components/accounting/CFOServicesList";

export default function CFOServicesPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <CFOHero />
      <CFOIntro />
      <CFOServicesList />
                </main>
  );
}
