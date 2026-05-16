"use client";
import React from "react";
import { motion } from "framer-motion";
import WebHero from "@/components/design/WebHero";
import WebIntro from "@/components/design/WebIntro";
import WebServicesList from "@/components/design/WebServicesList";

export default function WebsiteDesignPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <WebHero />
      <WebIntro />
      <WebServicesList />
                </main>
  );
}
