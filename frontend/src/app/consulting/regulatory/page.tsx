"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import RegulatoryHero from "@/components/consulting/RegulatoryHero";
import RegulatoryIntro from "@/components/consulting/RegulatoryIntro";
import RegulatoryServicesList from "@/components/consulting/RegulatoryServicesList";

export default function RegulatoryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <RegulatoryHero />
      <RegulatoryIntro />
      <RegulatoryServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
