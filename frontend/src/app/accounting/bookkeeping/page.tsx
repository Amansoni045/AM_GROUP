"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import BookkeepingHero from "@/components/accounting/BookkeepingHero";
import BookkeepingIntro from "@/components/accounting/BookkeepingIntro";
import BookkeepingServicesList from "@/components/accounting/BookkeepingServicesList";

export default function BookkeepingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <BookkeepingHero />
      <BookkeepingIntro />
      <BookkeepingServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
