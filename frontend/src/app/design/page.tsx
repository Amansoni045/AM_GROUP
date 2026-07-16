"use client";
import React from "react";
import { motion } from "framer-motion";
import DesignHero from "@/components/design/DesignHero";
import DesignAbout from "@/components/design/DesignAbout";
import DesignServices from "@/components/design/DesignServices";
import DesignTestimonials from "@/components/design/DesignTestimonials";

export default function DesignPage() {
  return (
    <main className="relative bg-[var(--bg-main)] text-[var(--text-primary)] font-sans scroll-smooth brand-design">
            <DesignHero />
      <DesignAbout />
      <DesignServices />
      <DesignTestimonials />
                </main>
  );
}
