"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function TechnologyAbout() {
  return (
    <section className="bg-white py-24 px-4 md:px-12 relative overflow-hidden" id="about-technology">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block bg-[var(--bg-alt)] text-[var(--text-primary)] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              About AM Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-8 font-heading">
              Unlocking Value <br />
              Through <span className="text-[var(--color-accent)]">Data Intelligence</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                AM Data Technology is a specialized data analytics and intelligence firm under the AM Group, delivering Big Data Analytics, Business Intelligence, and Risk Assurance solutions to organizations across industries.
              </p>
              <p>
                We help businesses transform complex data into meaningful insights that support informed decision-making and sustainable growth, leveraging advanced platforms such as Arbutus and Power BI.
              </p>
            </div>
          </motion.div>

          {/* Right Stats Content */}
          <motion.div
            initial={{ opacity: 0, x: 40  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat Card 1 */}
            <div className="bg-[var(--bg-alt)] rounded-3xl p-10 border border-gray-100 shadow-md group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-[40px] -z-0 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-[var(--text-primary)] font-heading">20</span>
                  <span className="text-4xl font-bold text-[var(--color-accent)]">+</span>
                </div>
                <div className="w-12 h-1 bg-[var(--color-accent-soft)] rounded mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Years of Experience</h3>
                <p className="text-gray-500 text-sm mt-2">Delivering data-driven excellence in the GCC.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[var(--bg-alt)] rounded-3xl p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden sm:translate-y-8">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent-soft)] rounded-full blur-[40px] -z-0 group-hover:bg-[var(--color-accent-soft)] transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-[var(--text-primary)] font-heading">105</span>
                  <span className="text-4xl font-bold text-[var(--color-accent)]">+</span>
                </div>
                <div className="w-12 h-1 bg-[var(--color-primary)] rounded mb-4" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Projects</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2">Transforming complex data into actionable narratives.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Memorial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[var(--bg-alt)] rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[80px]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-4 border-[var(--color-accent)] p-2 mb-6">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden grayscale">
                   {/* Placeholder for memorial image - typically provided by user but we use a themed representation if not available */}
                   <div className="w-full h-full flex items-center justify-center bg-[var(--bg-alt)]">
                      <span className="text-[var(--text-primary)] font-bold text-4xl">NS</span>
                   </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-1">Mr. Nishith Seth</h4>
                <p className="text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase">In Loving Memory</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-[var(--color-accent)] fill-[#dc2626]" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading">A Legacy of Innovation</h3>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed italic">
                <p>
                  AM Data Technology was founded in loving memory of Mr. Nishith Seth, a visionary entrepreneur and a close friend of our CEO, Mr. Ravi Mehta. This initiative carries forward the inspiration and legacy of SSPL, serving as a tribute to Nishith’s vision of innovation, excellence, and trust.
                </p>
                <p>
                  Every solution we build reflects these enduring values, ensuring that his dream of creating impactful, data-driven solutions continues to inspire, empower, and shape the future for generations to come.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
