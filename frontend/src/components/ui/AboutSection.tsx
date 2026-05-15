"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

const stats = [
  { value: 105, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 210, suffix: "+", label: "Clients" },
  { value: 4, suffix: "+", label: "Operating Countries" },
];

function StatCounter({ value, suffix, label, animate }: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-500 font-heading">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-2 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateStats(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-28 px-4 md:px-12 overflow-hidden" id="about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Top: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="/am-group.webp"
                alt="AM Group Team"
                className="w-full h-auto object-cover"
              />
              {/* Gold accent overlay bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#020817]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg font-heading">
                AM Group — Your Trusted Partner
              </div>
            </div>
            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#d4af37]/40 -z-10" />
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#6373f2]/10 rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="inline-block bg-[#6373f2]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#6373f2] text-sm font-bold uppercase tracking-widest">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#020817] mb-6 leading-tight font-heading">
              We Are Driven by{" "}
              <span className="text-[#6373f2]">Excellence</span>
            </h2>

            {/* Gold divider */}
            <div className="w-16 h-1 bg-[#d4af37] rounded mb-8" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              AM Group is a multidisciplinary firm bringing together{" "}
              <span className="font-bold text-[#020817]">Consulting, Design, Accounting and Data Analytics</span>{" "}
              under one trusted name. Founded with a vision to empower businesses and entrepreneurs across the GCC, we provide integrated solutions that address today&#39;s complex challenges with clarity and precision.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At AM Group, we are driven by a commitment to excellence and a passion for creating value. Whether it&#39;s guiding a startup, supporting established enterprises, or enabling expansion into new markets, we stand by our clients every step of the way.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center gap-3 bg-[#020817] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#6373f2] transition-all duration-300 group"
            >
              Explore Our Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom: Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#020817] rounded-3xl px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-10 shadow-2xl shadow-[#020817]/30"
        >
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} animate={animateStats} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
