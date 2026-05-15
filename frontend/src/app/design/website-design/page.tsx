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
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <WebHero />
      <WebIntro />
      <WebServicesList />
      <Footer />
      <BackToTop />
    </main>
  );
}
