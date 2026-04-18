"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const cases = [
  {
    client: "Packman",
    industry: "Logistics · Iraq",
    headline: "Full lead routing system — from phone call to agent assignment, automated.",
    outcomes: [
      "Lead routing by nationality: 0 manual work",
      "AI voice agent books appointments 24/7",
      "5 agents auto-assigned via GHL + n8n + Vapi",
    ],
    stack: ["n8n", "GoHighLevel", "Vapi"],
  },
  {
    client: "E-Commerce Brand",
    industry: "Retail · UAE",
    headline: "WhatsApp chatbot that handles 90% of support without a human.",
    outcomes: [
      "Response time: 4 hours → instant",
      "90% of queries resolved by AI",
      "CRM synced automatically on every chat",
    ],
    stack: ["WhatsApp API", "GPT-4", "GoHighLevel"],
  },
  {
    client: "SaaS Startup",
    industry: "Tech · USA",
    headline: "New landing page + AI chatbot tripled qualified lead capture.",
    outcomes: [
      "3× increase in qualified leads (month 1)",
      "Page speed score: 54 → 97",
      "AI qualifies and routes hot leads to calendar",
    ],
    stack: ["Next.js", "OpenAI", "Zapier"],
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-cyan text-sm font-medium mb-3">Results</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight max-w-xl">
            Real businesses. Real numbers.
          </h2>
        </motion.div>

        {/* Cases */}
        <div className="flex flex-col gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-[1fr_1.2fr] gap-8 p-7 rounded-2xl
                         bg-slate/40 border border-white/7
                         hover:border-cyan/25 transition-all duration-300"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading font-700 text-white text-lg">{c.client}</span>
                  <span className="text-xs text-muted border border-white/10 px-2.5 py-0.5 rounded-full">
                    {c.industry}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{c.headline}</p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <span key={t} className="text-xs text-muted bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — outcomes */}
              <div className="flex flex-col gap-3">
                {c.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-cyan mt-0.5 shrink-0" />
                    <span className="text-sm text-white/80">{o}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
