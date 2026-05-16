"use client";
import React from "react";
import { motion } from "framer-motion";
import BacklogHero from "@/components/accounting/BacklogHero";
import BacklogIntro from "@/components/accounting/BacklogIntro";
import BacklogServicesList from "@/components/accounting/BacklogServicesList";

export default function BacklogManagementPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <BacklogHero />
      <BacklogIntro />
      <BacklogServicesList />
                </main>
  );
}
