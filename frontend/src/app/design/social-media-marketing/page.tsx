"use client";
import React from "react";
import { motion } from "framer-motion";
import SocialHero from "@/components/design/SocialHero";
import SocialIntro from "@/components/design/SocialIntro";
import SocialServicesList from "@/components/design/SocialServicesList";

export default function SocialMediaPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            <SocialHero />
      <SocialIntro />
      <SocialServicesList />
                </main>
  );
}
