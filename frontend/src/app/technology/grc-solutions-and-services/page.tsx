"use client";
import React from "react";
import { motion } from "framer-motion";
import GRCHero from "@/components/technology/GRCHero";
import GRCIntro from "@/components/technology/GRCIntro";
import GRCDetails from "@/components/technology/GRCDetails";

export default function GRCSolutionsPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
      <GRCHero />
      <GRCIntro />
      <GRCDetails />
    </main>
  );
}
