"use client";
import React from "react";
import { motion } from "framer-motion";
import BookkeepingHero from "@/components/accounting/BookkeepingHero";
import BookkeepingIntro from "@/components/accounting/BookkeepingIntro";
import BookkeepingServicesList from "@/components/accounting/BookkeepingServicesList";

export default function BookkeepingPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth">
            <BookkeepingHero />
      <BookkeepingIntro />
      <BookkeepingServicesList />
                </main>
  );
}
