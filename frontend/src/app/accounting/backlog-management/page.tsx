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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <BacklogHero />
      <BacklogIntro />
      <BacklogServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
