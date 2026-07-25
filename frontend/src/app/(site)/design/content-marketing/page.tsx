"use client";
import React from "react";
import { motion } from "framer-motion";
import ContentHero from "@/components/design/ContentHero";
import ContentIntro from "@/components/design/ContentIntro";
import ContentServicesList from "@/components/design/ContentServicesList";

export default function ContentMarketingPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-design">
            <ContentHero />
      <ContentIntro />
      <ContentServicesList />
                </main>
  );
}
