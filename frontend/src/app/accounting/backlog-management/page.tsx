"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BacklogHero from "@/components/accounting/BacklogHero";
import BacklogIntro from "@/components/accounting/BacklogIntro";
import BacklogServicesList from "@/components/accounting/BacklogServicesList";

export default function BacklogManagementPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <BacklogHero />
      <BacklogIntro />
      <BacklogServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
