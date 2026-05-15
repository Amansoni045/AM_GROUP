"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ContentHero from "@/components/design/ContentHero";
import ContentIntro from "@/components/design/ContentIntro";
import ContentServicesList from "@/components/design/ContentServicesList";

export default function ContentMarketingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <ContentHero />
      <ContentIntro />
      <ContentServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
