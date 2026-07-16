"use client";
import React from "react";
import { motion } from "framer-motion";
import AccountingHero from "@/components/accounting/AccountingHero";
import AccountingAbout from "@/components/accounting/AccountingAbout";
import AccountingServices from "@/components/accounting/AccountingServices";
import AccountingWhyChoose from "@/components/accounting/AccountingWhyChoose";
import AccountingTestimonials from "@/components/accounting/AccountingTestimonials";

export default function AccountingPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-accounting">
      <AccountingHero />
      <AccountingAbout />
      <AccountingServices />
      <AccountingWhyChoose />
      <AccountingTestimonials />
    </main>
  );
}
