"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WebHero from "@/components/design/WebHero";
import WebIntro from "@/components/design/WebIntro";
import WebServicesList from "@/components/design/WebServicesList";

export default function WebsiteDesignPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth"
    >
      <TopBar />
      <WebHero />
      <WebIntro />
      <WebServicesList />
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
