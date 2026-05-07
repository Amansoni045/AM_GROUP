"use client";

import React from "react";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Process from "@/components/ui/Process";
import StatsUpdates from "@/components/ui/StatsUpdates";
import Clients from "@/components/ui/Clients";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <StatsUpdates />
      <Footer />
      <BackToTop />
    </div>
  );
}
