"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import RiskHero from "@/components/consulting/RiskHero";
import RiskIntro from "@/components/consulting/RiskIntro";
import RiskServicesList from "@/components/consulting/RiskServicesList";

export default function RiskPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <RiskHero />
      <RiskIntro />
      <RiskServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
