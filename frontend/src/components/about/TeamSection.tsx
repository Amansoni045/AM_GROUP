"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { TeamData, TeamMember } from "@/types/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({
  name,
  role,
  profileImageUrl,
  primary = false,
}: {
  name: string;
  role: string;
  profileImageUrl?: string | null;
  primary?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      {profileImageUrl ? (
        <Image
          src={profileImageUrl}
          alt={name}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            border: primary ? "2px solid var(--color-primary)" : "2px solid var(--color-accent)",
          }}
        />
      ) : (
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center mb-4 text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
          style={{
            background: primary ? "var(--color-primary)" : "var(--color-accent-soft)",
            border: primary ? "2px solid var(--color-primary)" : "2px solid var(--color-accent)",
            color: primary ? "#FFFFFF" : "var(--color-accent)",
          }}
        >
          {getInitials(name)}
        </div>
      )}
      <p className="text-base font-bold text-[var(--text-primary)]">{name}</p>
      <p className="text-sm text-gray-500 mt-1">{role}</p>
    </motion.div>
  );
}

interface Props {
  teamData: TeamData;
}

export default function TeamSection({ teamData }: Props) {
  const { leadership, departments } = teamData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[var(--bg-main)] pt-24 pb-8 px-4 md:px-12" id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <span className="eyebrow">Meet Our Team</span>
            <span style={{ width: "32px", height: "1px", background: "var(--color-accent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-heading">
            People Behind <span className="text-[var(--color-accent)]">AM Group</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        {leadership.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest text-[var(--color-accent)] text-center mb-10">
              OUR LEADERSHIP
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
              {leadership.map((m: TeamMember) => (
                <MemberCard
                  key={m.id}
                  name={m.name}
                  role={m.role}
                  profileImageUrl={m.profile_image_url}
                  primary={true}
                />
              ))}
            </div>
          </div>
        )}

        {departments.length > 0 && (
          <div className="bg-[var(--bg-alt)] rounded-3xl p-8 border border-[var(--border-light)]">
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {departments.map((dept, i) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[var(--color-accent)] text-white shadow-md border border-[var(--color-accent)]"
                      : "bg-white text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-accent)] hover:text-[var(--text-primary)]"
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
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center"
              >
                {departments[activeTab]?.members.map((m: TeamMember) => (
                  <MemberCard
                    key={m.id}
                    name={m.name}
                    role={m.role}
                    profileImageUrl={m.profile_image_url}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
