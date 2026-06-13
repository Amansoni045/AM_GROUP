"use client";
import React from "react";
import { motion } from "framer-motion";
import RegulatoryHero from "@/components/consulting/RegulatoryHero";
import RegulatoryIntro from "@/components/consulting/RegulatoryIntro";
import RegulatoryServicesList from "@/components/consulting/RegulatoryServicesList";

export default function RegulatoryPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            <RegulatoryHero />
      <RegulatoryIntro />
      <RegulatoryServicesList />
                </main>
  );
}
