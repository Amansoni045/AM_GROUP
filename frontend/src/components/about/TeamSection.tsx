"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leadership = [
  { name: "Ravi Mehta", role: "CEO – Managing Partner" },
  { name: "Deepali Mehta", role: "Partner and Executive Director" },
  { name: "Dr. Raed Sarhan", role: "Executive Director" },
  { name: "Chandresh H. Mehta", role: "Executive Director" },
];

const departments = [
  {
    name: "AM Consulting",
    color: "#6373f2",
    members: [
      { name: "Shwetank Bhushan", role: "Director of Advisory" },
      { name: "Asitava Bose", role: "Director – Consulting" },
      { name: "Maryam Almajed", role: "Account Analyst" },
      { name: "Akash Mahajan", role: "Financial Consultant" },
      { name: "Rose Maria Biju", role: "Consultant" },
    ],
  },
  {
    name: "AM Accounting",
    color: "#059669",
    members: [
      { name: "Anchu Prakash", role: "Manager – Finance & Operations" },
      { name: "Anima Jagdeesh", role: "Financial Manager" },
      { name: "Abdul Niyas Thodi", role: "Senior Accountant" },
      { name: "Shafeek Alingal", role: "Senior Accountant" },
      { name: "Thrishna Radhakrishnan", role: "Accountant" },
      { name: "Lekshmi Krishnan", role: "Accountant" },
      { name: "Komal Parekh", role: "Accountant" },
      { name: "Anju Augustine", role: "Accountant" },
      { name: "Preeti Mishra", role: "Office Administrator" },
    ],
  },
  {
    name: "AM Design",
    color: "#d4af37",
    members: [
      { name: "Harshita Chadha", role: "Sr. Manager – Marketing & Projects" },
      { name: "Mohamed Abdulameer", role: "Graphic Designer" },
      { name: "Shreyas Rasane", role: "Graphic Designer" },
    ],
  },
  {
    name: "AM Technology",
    color: "#dc2626",
    members: [
      { name: "Aditi Upadhyay", role: "Sr. Manager, Data Analyst" },
      { name: "Sampath Raj", role: "Sr. Executive Data Analyst" },
      { name: "Chandanam Golvi", role: "Sr. Executive – Developer" },
      { name: "Diya Gupta", role: "Data Analyst Executive" },
    ],
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function MemberCard({ name, role, color }: { name: string; role: string; color?: string }) {
  const bg = color ? `${color}20` : "#6373f220";
  const border = color ? `${color}30` : "#6373f230";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-3 text-lg font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ background: bg, border: `2px solid ${border}`, color: color || "#6373f2" }}
      >
        {getInitials(name)}
      </div>
      <p className="text-sm font-bold text-[var(--text-primary)]">{name}</p>
      <p className="text-xs text-gray-500 mt-0.5">{role}</p>
    </motion.div>
  );
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[var(--bg-main)] py-24 px-4 md:px-12" id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[var(--color-primary)]/10 border border-[var(--color-accent)] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            People Behind <span className="text-[var(--color-accent)]">AM Group</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] text-center mb-10">Leadership</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            {leadership.map((m, i) => (
              <MemberCard key={i} name={m.name} role={m.role} color="#020817" />
            ))}
          </div>
        </div>

        {/* Department Tabs */}
        <div className="bg-[var(--bg-alt)] rounded-3xl p-8 border border-gray-100">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {departments.map((dept, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === i 
                    ? "bg-[var(--color-accent)] text-white shadow-md border border-[var(--color-accent)]" 
                    : "bg-white text-[var(--text-secondary)] border border-gray-200 hover:border-gray-300 hover:text-[var(--text-primary)]"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center"
            >
              {departments[activeTab].members.map((m, i) => (
                <MemberCard key={i} name={m.name} role={m.role} color={departments[activeTab].color} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
