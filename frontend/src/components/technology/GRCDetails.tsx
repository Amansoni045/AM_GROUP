"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function GRCDetails() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="grc-details">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Governance Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading">Governance Framework</h3>
            <div className="w-16 h-1 bg-[var(--color-accent-soft)] rounded" />
            <p className="text-gray-600 leading-relaxed text-lg">
              The governance framework focuses on reassessing the organization’s core values, vision, and mission to ensure alignment with long-term goals, while simultaneously reviewing and strengthening the existing organizational structure. It includes redesigning charters, policies, and procedures to improve clarity, accountability, and compliance.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              As part of culture consulting, targeted training sessions are conducted on governance, organizational culture, core values, and ethics, along with specialized training for operations staff to ensure effective understanding and implementation of policies and procedures across the organization.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30  }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="info-card group"
          >
            <div className="info-card-top-bar" />
            <h3 className="info-card-title mb-6">Risk Management</h3>
            <div className="space-y-6">
              {[
                {
                  num: "01.",
                  title: "Risk Management Framework",
                  desc: "Identify key organizational risks, develop risk frameworks like RCSA and ORSA, enhance controls, and drive a strong risk-aware culture through targeted training."
                },
                {
                  num: "02.",
                  title: "Risk Assurance Service",
                  desc: "Deliver assurance on operational, cyber, fraud, and quality risks, including SOX compliance, to strengthen governance and controls."
                },
                {
                  num: "03.",
                  title: "Risk Management Outsourcing",
                  desc: "Manage operational risk through outsourcing, implement frameworks and tools, and strengthen resilience via BCP and stress testing, ICAAP, and ILAAP."
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-accent)]">{item.num}</span> {item.title}
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="info-card group md:p-16"
        >
          <div className="info-card-top-bar" />
          <h3 className="info-card-title text-3xl mb-8 text-center">Compliance & Regulatory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h4 className="text-xl font-bold text-[var(--color-accent)] mb-4">Regulatory Risk Management</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regulatory risk management involves the preparation and implementation of robust compliance and AML policies and procedures, supported by appropriate software solutions for compliance, AML, and sanctions monitoring. It also includes ensuring adherence to data privacy laws such as GDPR and PDPL, along with regular compliance and AML training for relevant stakeholders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The framework further supports the implementation of new and evolving regulations and ensures timely, accurate regulatory compliance reporting to maintain transparency and regulatory alignment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[var(--color-accent)] mb-4">Regulatory Risk Assurance</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regulatory risk assurance provides independent and structured assurance over the effectiveness of regulatory compliance across the organization, including AML, KYC, and sanctions risk management practices. It also covers data privacy and vendor risk assurance to ensure third-party and information protection risks are adequately managed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In addition, the framework supports external assessments of the Operational Risk Management (ORM) framework and Liquidity Risk Management (LRM) framework, as required by the Central Bank of Bahrain (CBB), to ensure continued regulatory compliance and best-practice alignment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* IT & IS Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[var(--text-primary)] font-heading mb-4">IT & IS Solutions</h3>
            <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="info-card group">
              <div className="info-card-top-bar" />
              <div className="info-card-icon-wrapper">
                <CheckCircle2 className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="info-card-title">01. Information Technology Solutions</h4>
              <p className="info-card-desc">
                Offer integrated GRC, ORM, IFRS 9, regulatory risk and AML, and accounting software solutions to enhance governance, compliance, and financial management.
              </p>
            </div>
            <div className="info-card group">
              <div className="info-card-top-bar" />
              <div className="info-card-icon-wrapper">
                <CheckCircle2 className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="info-card-title">02. Information Security Solutions</h4>
              <p className="info-card-desc">
                Deliver information security solutions covering risk and cyber assessments, policies, outsourcing, vulnerability checks, and software advisory.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
