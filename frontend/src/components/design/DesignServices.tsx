"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Share2, Layout, Search, MousePointerClick, Edit3 } from "lucide-react";

const services = [
  {
    title: "Branding & Design",
    desc: "Your brand is your identity. We design logos, visuals, and complete brand systems that inspire recognition, trust, and lasting impact.",
    icon: Palette,
    color: "#6373f2",
    href: "/design/branding-and-design"
  },
  {
    title: "Social Media Marketing",
    desc: "Engage and grow your audience across key platforms. We create strategic campaigns that build communities, increase visibility, and drive interaction.",
    icon: Share2,
    color: "#059669",
    href: "/design/social-media-marketing"
  },
  {
    title: "Website Design",
    desc: "Make a strong first impression with a modern website. Each site is designed for performance, tailored to your brand, and optimized for user experience.",
    icon: Layout,
    color: "#d4af37",
    href: "/design/website-design"
  },
  {
    title: "SEO & Ranking",
    desc: "Boost your online presence and drive organic traffic with targeted SEO strategies. We help your brand be discovered by the right audience at the right time.",
    icon: Search,
    color: "#8b5cf6",
    href: "/design/seo-and-ranking"
  },
  {
    title: "PPC & Google Ads",
    desc: "Increase visibility and conversions through data-driven Google Ads campaigns. Our approach focuses on quality leads, cost efficiency, and measurable ROI.",
    icon: MousePointerClick,
    color: "#dc2626",
    href: "/design/ppc-and-google-ads"
  },
  {
    title: "Content Marketing",
    desc: "Deliver valuable, relevant content that attracts and retains your audience. We craft stories that build authority, strengthen engagement, and support growth.",
    icon: Edit3,
    color: "#0ea5e9",
    href: "/design/content-marketing"
  }
];

export default function DesignServices() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="design-services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-[var(--color-primary)]/5">
            Core Expertise
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.08)", transition: { duration: 0.2, delay: 0 } }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md group relative overflow-hidden cursor-pointer flex flex-col block"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: service.color }} />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 font-bold text-sm" style={{ color: service.color }}>
                Learn more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
