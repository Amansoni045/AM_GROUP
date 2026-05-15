"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import PPCHero from "@/components/design/PPCHero";
import PPCIntro from "@/components/design/PPCIntro";
import PPCServicesList from "@/components/design/PPCServicesList";

export default function PPCAndGoogleAdsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <PPCHero />
      <PPCIntro />
      <PPCServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
