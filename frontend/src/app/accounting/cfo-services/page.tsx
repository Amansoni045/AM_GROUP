"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CFOHero from "@/components/accounting/CFOHero";
import CFOIntro from "@/components/accounting/CFOIntro";
import CFOServicesList from "@/components/accounting/CFOServicesList";

export default function CFOServicesPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <CFOHero />
      <CFOIntro />
      <CFOServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
