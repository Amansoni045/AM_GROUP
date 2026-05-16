"use client";
import React from "react";
import { motion } from "framer-motion";
import ReconciliationHero from "@/components/accounting/ReconciliationHero";
import ReconciliationIntro from "@/components/accounting/ReconciliationIntro";
import ReconciliationServicesList from "@/components/accounting/ReconciliationServicesList";

export default function ReconciliationPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <ReconciliationHero />
      <ReconciliationIntro />
      <ReconciliationServicesList />
                </main>
  );
}
