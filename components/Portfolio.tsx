"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  description: string;
  results: string[];
  tech: string[];
  accentColor: string;
  tag: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "packman",
    client: "Packman",
    industry: "Logistics & Delivery",
    headline: "Full AI-Powered Lead & Agent Management System",
    description:
      "Packman needed to handle inbound leads from multiple countries and route them to the right agents — all automatically. We built a complete pipeline using GHL, n8n and Vapi.",
    results: [
      "Automated lead routing by phone nationality",
      "Appointment booking handled 24/7 by AI voice agent",
      "5 agents auto-assigned via custom routing logic",
      "Zero manual work on lead qualification",
    ],
    tech: ["n8n", "GoHighLevel", "Vapi"],
    accentColor: "cyan",
    tag: "AI Automation",
  },
  {
    id: "client2",
    client: "E-Commerce Brand",
    industry: "Retail & E-Commerce",
    headline: "WhatsApp Chatbot + CRM Integration",
    description:
      "Built an intelligent WhatsApp bot that handles customer inquiries, tracks orders, and syncs everything to their GoHighLevel CRM in real time.",
    results: [
      "90% reduction in manual customer support",
      "Automated order status updates via WhatsApp",
      "CRM synced in real time with every conversation",
      "Response time reduced from 4 hours to instant",
    ],
    tech: ["WhatsApp API", "GoHighLevel", "n8n"],
    accentColor: "blue",
    tag: "Chatbot + CRM",
  },
  {
    id: "client3",
    client: "SaaS Startup",
    industry: "Technology",
    headline: "AI-Powered Landing Page + Lead Automation",
    description:
      "Designed and developed a high-converting Next.js landing page with an embedded AI chatbot for lead qualification, feeding directly into their sales pipeline.",
    results: [
      "3x increase in qualified lead capture",
      "AI chatbot qualifies leads 24/7",
      "Seamless integration with sales CRM",
      "Page loads in under 1.5 seconds",
    ],
    tech: ["Next.js", "OpenAI", "Zapier"],
    accentColor: "cyan",
    tag: "Web + AI",
  },
];

function TechBadge({ name }: { name: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10
                 text-xs text-muted font-medium"
    >
      {name}
    </span>
  );
}

export default function Portfolio() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-navy">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] orb bg-cyan/6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight mb-4">
            Results We&apos;ve{" "}
            <span className="gradient-text">Delivered</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real projects, real results. Here&apos;s how we&apos;ve helped
            businesses automate and scale with AI.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative glass rounded-2xl p-6 border border-white/7
                         card-hover flex flex-col"
            >
              {/* Top: Tag + Industry */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    study.accentColor === "cyan"
                      ? "bg-cyan/10 border border-cyan/25 text-cyan"
                      : "bg-blue/10 border border-blue/25 text-blue"
                  }`}
                >
                  {study.tag}
                </span>
                <span className="text-xs text-muted">{study.industry}</span>
              </div>

              {/* Client */}
              <div className="mb-3">
                <p className="text-xs text-muted mb-1">Client</p>
                <h3 className="font-heading text-xl font-700 text-white group-hover:text-cyan transition-colors duration-200">
                  {study.client}
                </h3>
              </div>

              {/* Headline */}
              <p className="text-sm font-medium text-white/80 mb-3 leading-snug">
                {study.headline}
              </p>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-5">
                {study.description}
              </p>

              {/* Results */}
              <div className="flex flex-col gap-2 mb-5 flex-1">
                {study.results.map((result) => (
                  <div key={result} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-cyan mt-0.5 shrink-0"
                    />
                    <span className="text-xs text-muted">{result}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5 pt-4 border-t border-white/7">
                {study.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/portfolio#${study.id}`}
                className="inline-flex items-center gap-1.5 text-sm text-cyan font-medium
                           group/link hover:gap-2.5 transition-all duration-200"
              >
                View Full Case Study
                <ExternalLink size={13} />
              </Link>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl border border-cyan/0 group-hover:border-cyan/25 transition-all duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       border border-cyan/30 text-white font-heading font-600
                       hover:border-cyan hover:bg-cyan/5 hover:glow-cyan-sm
                       transition-all duration-300 active:scale-95"
          >
            View All Projects
            <ArrowRight size={16} className="text-cyan" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
