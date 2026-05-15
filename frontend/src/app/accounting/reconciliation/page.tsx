"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ReconciliationHero from "@/components/accounting/ReconciliationHero";
import ReconciliationIntro from "@/components/accounting/ReconciliationIntro";
import ReconciliationServicesList from "@/components/accounting/ReconciliationServicesList";

export default function ReconciliationPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <ReconciliationHero />
      <ReconciliationIntro />
      <ReconciliationServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
