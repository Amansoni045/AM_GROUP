import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsUpdates() {
  const stats = [
    { label: "Years Experience", value: "7Y+" },
    { label: "Satisfied Clients", value: "73+" },
    { label: "Revenue Growth", value: "23%" },
    { label: "Projects Done", value: "365+" }
  ];

  return (
    <section className="bg-white pt-24" id="stats">
      <div className="max-w-7xl mx-auto px-4 md:px-20 -mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#f3f4f6] p-12 md:p-16 rounded-[40px] grid grid-cols-2 lg:grid-cols-4 gap-12 border border-gray-100 shadow-xl shadow-black/5"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-center group"
            >
              <div className="text-[12px] font-bold text-[#6373f2] mb-4 uppercase tracking-[0.2em]">{stat.label}</div>
              <div className="text-5xl md:text-6xl font-black text-[#1a1a1a] group-hover:scale-110 transition-transform duration-500 font-heading">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Global Updates */}
      <div className="bg-[#f9f9f9] pt-48 pb-32 px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-white rounded-[48px] p-10 md:p-20 relative overflow-hidden border border-gray-100 shadow-2xl shadow-black/5"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6373f2]/5 rounded-full blur-[100px]"></div>
          
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-[#1a1a1a] text-5xl md:text-7xl font-bold leading-tight font-heading">AM Group Global Presence</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 group"
            >
              <div className="relative rounded-[32px] overflow-hidden">
                <img 
                  alt="Corporate Event" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight font-heading">Empowering Businesses in Bahrain, KSA & Oman</h3>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed font-medium">
                As the leading consultancy in the GCC, we provide strategy, creative design, and financial expertise to help businesses thrive in a dynamic market environment.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-[#6373f2] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all group" 
                href="#"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



