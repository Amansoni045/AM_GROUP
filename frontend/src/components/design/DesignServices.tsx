"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Share2, Layout, Search, MousePointerClick, Edit3 } from "lucide-react";

const services = [
  {
    title: "Branding & Design",
    desc: "Your brand is your identity. We design logos, visuals, and complete brand systems that inspire recognition, trust, and lasting impact.",
    icon: Palette,
    href: "/design/branding-and-design"
  },
  {
    title: "Social Media Marketing",
    desc: "Engage and grow your audience across key platforms. We create strategic campaigns that build communities, increase visibility, and drive interaction.",
    icon: Share2,
    href: "/design/social-media-marketing"
  },
  {
    title: "Website Design",
    desc: "Make a strong first impression with a modern website. Each site is designed for performance, tailored to your brand, and optimized for user experience.",
    icon: Layout,
    href: "/design/website-design"
  },
  {
    title: "SEO & Ranking",
    desc: "Boost your online presence and drive organic traffic with targeted SEO strategies. We help your brand be discovered by the right audience at the right time.",
    icon: Search,
    href: "/design/seo-and-ranking"
  },
  {
    title: "PPC & Google Ads",
    desc: "Increase visibility and conversions through data-driven Google Ads campaigns. Our approach focuses on quality leads, cost efficiency, and measurable ROI.",
    icon: MousePointerClick,
    href: "/design/ppc-and-google-ads"
  },
  {
    title: "Content Marketing",
    desc: "Deliver valuable, relevant content that attracts and retains your audience. We craft stories that build authority, strengthen engagement, and support growth.",
    icon: Edit3,
    href: "/design/content-marketing"
  }
];

export default function DesignServices() {
  return (
    <section className="bg-[var(--bg-alt)] compact-section px-4 md:px-12 py-24" id="design-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span className="eyebrow">Core Expertise</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            Our Creative <span className="text-[var(--color-accent)]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="info-card group"
            >
              <div className="info-card-top-bar" />
              <div className="info-card-icon-wrapper">
                <service.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="info-card-title">{service.title}</h3>
              <p className="info-card-desc">{service.desc}</p>
              
              <div className="info-card-link">
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
