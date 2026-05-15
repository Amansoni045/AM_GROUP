"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AnalytiksHero from "@/components/analytiks/AnalytiksHero";
import AnalytiksAbout from "@/components/analytiks/AnalytiksAbout";
import AnalytiksServices from "@/components/analytiks/AnalytiksServices";
import AnalytiksTestimonials from "@/components/analytiks/AnalytiksTestimonials";

export default function AnalytiksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <AnalytiksHero />
      <AnalytiksAbout />
      <AnalytiksServices />
      <AnalytiksTestimonials />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
