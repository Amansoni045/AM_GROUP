"use client";
import React from "react";
import { motion } from "framer-motion";
import DesignHero from "@/components/design/DesignHero";
import DesignAbout from "@/components/design/DesignAbout";
import DesignServices from "@/components/design/DesignServices";
import DesignTestimonials from "@/components/design/DesignTestimonials";

export default function DesignPage() {
  return (
    <main className="relative bg-white text-[#1a1a1a] font-sans scroll-smooth">
            <DesignHero />
      <DesignAbout />
      <DesignServices />
      <DesignTestimonials />
                </main>
  );
}
