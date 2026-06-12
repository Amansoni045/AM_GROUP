"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Data Analytics Consulting Service",
    desc: "Our Data Analytics Consulting Services help businesses make confident, data-driven decisions. We collaborate closely with your team to identify valuable data sources, uncover opportunities, analyze trends, and design effective data strategies. Using advanced analytical methods, we convert complex datasets into clear, actionable insights. Whether improving customer engagement or operational efficiency, our consulting support drives sustainable growth and strengthens your competitive position."
  },
  {
    title: "Data Integration & Warehousing",
    desc: "We streamline data integration by merging information from multiple systems, sources, formats, and structures into a centralized warehouse. Our process ensures data consistency, accuracy, and readiness for analysis. Using ETL tools, we cleanse, transform, and load data to create a reliable single source of truth. Our scalable, flexible warehouse solutions evolve with your business, supporting smarter decisions and stronger analytics capabilities together."
  },
  {
    title: "Power BI & Tableau Implementation",
    desc: "We implement leading BI tools such as Power BI and Tableau to convert raw datasets into meaningful, visual insights. Our team manages the complete setup—from environment configuration to seamless tool integration with your existing systems. We ensure a smooth, transparent, and timely rollout with minimal operational disruption. Our BI consultants focus on delivering robust, user-friendly solutions that enhance visibility and decision-making across your organization."
  },
  {
    title: "Dashboard & Reports",
    desc: "Our experts create interactive dashboards and detailed reports using Power BI and Tableau, offering real-time visualizations, performance metrics, and actionable analytics. Each dashboard is customized according to user roles, ensuring stakeholders access the insights most relevant to their responsibilities. With intuitive layouts and dynamic features, our reporting solutions help teams monitor progress, identify opportunities, and make informed business decisions faster."
  },
  {
    title: "Data Visualisation",
    desc: "We transform complex data into compelling visual stories using Power BI and Tableau. Through carefully chosen visualization types—heat maps, charts, histograms, scatter plots, and more—we make trends and patterns easy to understand. Our visualization approach enhances clarity, supports strategic discussions, and elevates data literacy. With expertise in BI design, we ensure every visual output strengthens decision-making and aligns with business objectives."
  },
  {
    title: "BI Optimisation",
    desc: "After implementation, we enhance the performance and longevity of your BI systems through continuous smooth optimisation. Our team conducts regular health checks, updates configurations, and resolves issues to keep your BI tools running efficiently and keep on monitoring them. We also provide tailored training sessions to empower your staff with essential skills. This ensures stronger adoption, improved reporting quality, and long-term value from your BI investments."
  }
];

export default function DataAnalyticsDetails() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 px-4 md:px-12" id="data-analytics-details">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-heading">
            Our Data Analytics <span className="text-[var(--color-accent)]">Services</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] rounded mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="info-card group"
            >
              <div className="info-card-top-bar" />
              <h3 className="info-card-title">{service.title}</h3>
              <p className="info-card-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
