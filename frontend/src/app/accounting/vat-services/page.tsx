"use client";
import React from "react";
import { motion } from "framer-motion";
import VATHero from "@/components/accounting/VATHero";
import VATIntro from "@/components/accounting/VATIntro";
import VATServicesList from "@/components/accounting/VATServicesList";

export default function VATServicesPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <VATHero />
      <VATIntro />
      <VATServicesList />
                </main>
  );
}
