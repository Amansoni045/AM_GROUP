"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "AM CONSULTING", href: "/consulting" },
    { name: "AM ACCOUNTING", href: "/accounting" },
    { name: "AM DESIGN", href: "/design" },
    { name: "AM ANALYTIKS", href: "/analytiks" },
  ];

  return (
    <motion.header 
      key={`header-${pathname}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 flex justify-between items-center px-4 md:px-12 py-4 border-b border-white/10 bg-transparent backdrop-blur-sm"
    >
      {/* Logo Area */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.webp" alt="AM Group Logo" className="h-12 w-auto object-contain" />
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="hidden xl:flex items-center gap-6 text-white font-bold text-[13px]">
        {navItems.map((item, i) => (
          <Link 
            key={i} 
            className="hover:text-[#d4af37] transition-colors px-3 py-2 border-r border-white/10 last:border-0" 
            href={item.href}
            onClick={(e) => {
              if (item.href === '/' && window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="xl:hidden text-white cursor-pointer">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </motion.header>
  );
}
