"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AdvisoryHero from "@/components/consulting/AdvisoryHero";
import AdvisoryIntro from "@/components/consulting/AdvisoryIntro";
import AdvisoryServicesList from "@/components/consulting/AdvisoryServicesList";

export default function AdvisoryPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <AdvisoryHero />
      <AdvisoryIntro />
      <AdvisoryServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
