"use client";
import React from "react";
import { motion } from "framer-motion";
import ContentHero from "@/components/design/ContentHero";
import ContentIntro from "@/components/design/ContentIntro";
import ContentServicesList from "@/components/design/ContentServicesList";

export default function ContentMarketingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <ContentHero />
      <ContentIntro />
      <ContentServicesList />
                </main>
  );
}
