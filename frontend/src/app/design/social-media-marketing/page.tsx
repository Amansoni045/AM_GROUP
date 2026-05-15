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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <SocialHero />
      <SocialIntro />
      <SocialServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
