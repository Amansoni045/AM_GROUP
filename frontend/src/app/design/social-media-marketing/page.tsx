"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import SocialHero from "@/components/design/SocialHero";
import SocialIntro from "@/components/design/SocialIntro";
import SocialServicesList from "@/components/design/SocialServicesList";

export default function SocialMediaPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <SocialHero />
      <SocialIntro />
      <SocialServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
