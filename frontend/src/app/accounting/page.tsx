"use client";
import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/layouts/TopBar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AccountingHero from "@/components/accounting/AccountingHero";
import AccountingAbout from "@/components/accounting/AccountingAbout";
import AccountingServices from "@/components/accounting/AccountingServices";
import AccountingTestimonials from "@/components/accounting/AccountingTestimonials";

export default function AccountingPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <TopBar />
      <AccountingHero />
      <AccountingAbout />
      <AccountingServices />
      <AccountingTestimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
