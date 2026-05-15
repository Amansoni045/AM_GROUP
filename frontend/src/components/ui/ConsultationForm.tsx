"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Advisory Services",
  "Business Consulting",
  "ESG Consulting",
  "Accounting & Bookkeeping",
  "VAT Advisory",
  "Audit & Compliance",
  "Marketing & Social Media",
  "Website Development",
  "Application Development",
  "Data Analytics",
  "Governance, Risk & Compliance (GRC)",
  "Digital Transformation",
];

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", service: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", company: "", email: "", service: "", message: "" });
  };

  return (
    <section className="bg-[#020817] py-28 px-4 md:px-12 relative overflow-hidden" id="consultation">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6373f2]/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Free Consultation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Book a Free<br />
              <span className="text-[#6373f2]">Consultation</span>
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Fill out the form to book a 1:1 30-minute consultation with our experts. We&#39;ll analyze your business needs and chart the best path forward.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-4">
              {["30-Minute Strategy Session", "Expert Industry Advisors", "Tailored Action Plan", "No Obligation Whatsoever"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#6373f2]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#6373f2]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#6373f2] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading">Thank You!</h3>
                  <p className="text-gray-400">We&#39;ve received your request and will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6373f2] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6373f2] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Company Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6373f2] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Services</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#6373f2] transition-colors appearance-none cursor-pointer"
                      style={{ WebkitAppearance: "none" }}
                    >
                      <option value="" className="bg-[#020817] text-gray-400">Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#020817] text-white">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business needs..."
                      className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6373f2] transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#6373f2] text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#5060e0] transition-colors group mt-2"
                  >
                    Book Free Consultation
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
