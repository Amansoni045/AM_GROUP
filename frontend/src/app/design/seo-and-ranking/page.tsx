"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import SEOHero from "@/components/design/SEOHero";
import SEOIntro from "@/components/design/SEOIntro";
import SEOServicesList from "@/components/design/SEOServicesList";

export default function SEOAndRankingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <SEOHero />
      <SEOIntro />
      <SEOServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
