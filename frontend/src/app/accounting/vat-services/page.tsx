"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import VATHero from "@/components/accounting/VATHero";
import VATIntro from "@/components/accounting/VATIntro";
import VATServicesList from "@/components/accounting/VATServicesList";

export default function VATServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <VATHero />
      <VATIntro />
      <VATServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
