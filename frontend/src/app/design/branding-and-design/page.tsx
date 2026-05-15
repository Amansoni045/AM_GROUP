"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BrandingHero from "@/components/design/BrandingHero";
import BrandingIntro from "@/components/design/BrandingIntro";
import BrandingServicesList from "@/components/design/BrandingServicesList";

export default function BrandingAndDesignPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <BrandingHero />
      <BrandingIntro />
      <BrandingServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
