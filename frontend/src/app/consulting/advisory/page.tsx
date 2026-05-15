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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <AdvisoryHero />
      <AdvisoryIntro />
      <AdvisoryServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
