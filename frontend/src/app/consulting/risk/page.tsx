"use client";
import React from "react";
import { motion } from "framer-motion";
import RiskHero from "@/components/consulting/RiskHero";
import RiskIntro from "@/components/consulting/RiskIntro";
import RiskServicesList from "@/components/consulting/RiskServicesList";

export default function RiskPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <RiskHero />
      <RiskIntro />
      <RiskServicesList />
                </main>
  );
}
