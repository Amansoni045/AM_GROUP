"use client";
import React from "react";
import { motion } from "framer-motion";
import WebHero from "@/components/design/WebHero";
import WebIntro from "@/components/design/WebIntro";
import WebServicesList from "@/components/design/WebServicesList";

export default function WebsiteDesignPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-design">
            <WebHero />
      <WebIntro />
      <WebServicesList />
                </main>
  );
}
