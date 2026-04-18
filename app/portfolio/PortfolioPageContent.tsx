"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "packman",
    client: "Packman",
    industry: "Logistics & Delivery",
    location: "Iraq",
    tag: "AI Automation + Voice Agent",
    challenge:
      "Packman was receiving leads from multiple countries via phone and manually assigning them to agents based on caller nationality. This process was slow, error-prone, and required full-time staff.",
    solution:
      "We built a fully automated lead management pipeline. The system detects caller nationality via phone number, routes leads to the correct agent using GoHighLevel, books appointments automatically via Vapi AI voice agent, and notifies the agent in real time via n8n.",
    results: [
      "Lead routing time reduced from 15 min to 0 (fully automated)",
      "Appointment booking handled 24/7 by AI voice agent",
      "5 agents auto-assigned based on custom routing logic",
      "Zero manual work on lead qualification or assignment",
      "CRM automatically updated on every interaction",
    ],
    tech: ["n8n", "GoHighLevel (GHL)", "Vapi", "Twilio"],
    metrics: [
      { label: "Time Saved / Day", value: "4+ hrs" },
      { label: "Lead Response Time", value: "Instant" },
      { label: "Agent Coverage", value: "5 agents" },
    ],
    accentColor: "cyan",
  },
  {
    id: "ecomm-whatsapp",
    client: "E-Commerce Brand",
    industry: "Retail",
    location: "UAE",
    tag: "WhatsApp Bot + CRM",
    challenge:
      "The business was losing customers because support response times were too slow. Agents were manually answering the same questions about orders, shipping, and returns all day.",
    solution:
      "We integrated a WhatsApp Business chatbot powered by GPT-4 that handles customer queries 24/7, tracks order statuses, and escalates only complex issues to human agents. All conversations sync to GoHighLevel CRM in real time.",
    results: [
      "90% of support queries resolved by AI without human involvement",
      "Response time reduced from 4 hours to under 5 seconds",
      "Full order tracking via WhatsApp",
      "CRM auto-updated with conversation summaries",
      "Human agent time freed up for complex issues only",
    ],
    tech: ["WhatsApp Business API", "GPT-4", "GoHighLevel", "n8n"],
    metrics: [
      { label: "Support Automation", value: "90%" },
      { label: "Response Time", value: "<5 sec" },
      { label: "Tickets Saved/Week", value: "200+" },
    ],
    accentColor: "blue",
  },
  {
    id: "saas-landing",
    client: "SaaS Startup",
    industry: "Technology",
    location: "USA",
    tag: "Website + AI Chatbot",
    challenge:
      "The startup had a basic landing page with poor conversion and no way to qualify inbound leads automatically. Sales team was spending time on leads that weren't a good fit.",
    solution:
      "We rebuilt the landing page with Next.js for speed and SEO, integrated an AI chatbot trained on their product documentation, and built a qualification flow that scores leads and routes hot leads directly to the sales team calendar.",
    results: [
      "3x increase in qualified lead capture in first month",
      "AI chatbot handles 80% of product questions",
      "Qualified leads booked directly into sales calendar",
      "Page speed score improved from 54 to 97",
      "Organic traffic up 40% in 90 days",
    ],
    tech: ["Next.js", "OpenAI GPT-4", "Zapier", "Calendly API"],
    metrics: [
      { label: "Lead Increase", value: "3×" },
      { label: "Page Speed Score", value: "97/100" },
      { label: "Organic Traffic", value: "+40%" },
    ],
    accentColor: "cyan",
  },
];

export default function PortfolioPageContent() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] orb bg-cyan/8 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-5">
              Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-800 tracking-tight mb-5">
              Real Projects.{" "}
              <span className="gradient-text">Real Results.</span>
            </h1>
            <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
              Detailed case studies of how we&apos;ve helped businesses
              automate, scale, and grow with AI — from day one to full
              operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-2xl border overflow-hidden ${
                project.accentColor === "cyan"
                  ? "border-cyan/20"
                  : "border-blue/20"
              }`}
            >
              {/* Top bar */}
              <div
                className={`px-7 sm:px-10 py-5 border-b border-white/7 flex flex-wrap items-center justify-between gap-3 ${
                  project.accentColor === "cyan"
                    ? "bg-cyan/5"
                    : "bg-blue/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.accentColor === "cyan"
                        ? "bg-cyan/10 border-cyan/25 text-cyan"
                        : "bg-blue/10 border-blue/25 text-blue-400"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-muted text-xs">{project.industry}</span>
                  <span className="text-muted text-xs">· {project.location}</span>
                </div>
                <span className="text-white/90 font-heading font-700">
                  {project.client}
                </span>
              </div>

              <div className="p-7 sm:p-10">
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Main content */}
                  <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="font-heading text-xs font-700 text-muted uppercase tracking-widest mb-2">
                        The Challenge
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="font-heading text-xs font-700 text-muted uppercase tracking-widest mb-2">
                        Our Solution
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="font-heading text-xs font-700 text-muted uppercase tracking-widest mb-3">
                        Results
                      </h3>
                      <ul className="flex flex-col gap-2.5">
                        {project.results.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={15}
                              className="text-cyan mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-muted">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics sidebar */}
                  <div className="flex flex-col gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`rounded-xl p-5 border text-center ${
                          project.accentColor === "cyan"
                            ? "bg-cyan/5 border-cyan/15"
                            : "bg-blue/5 border-blue/15"
                        }`}
                      >
                        <div
                          className={`font-heading text-3xl font-800 mb-1 ${
                            project.accentColor === "cyan"
                              ? "text-cyan"
                              : "text-blue-400"
                          }`}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-muted">{m.label}</div>
                      </div>
                    ))}

                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                                 bg-cyan text-navy font-heading font-700 text-sm
                                 glow-cyan-sm hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      Build Something Similar
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
