"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Audit Call",
    desc: "We hop on a 30-minute call to understand your business, your current workflow, and where you're losing time and leads.",
    details: ["Full funnel analysis", "Identify automation gaps", "Define KPIs and goals"],
  },
  {
    num: "02",
    title: "Strategy & Blueprint",
    desc: "We map out exactly which AI systems to build — voice agents, chatbots, automations — and show you the projected ROI before we start.",
    details: ["Custom automation plan", "Tech stack selection", "Timeline and deliverables"],
  },
  {
    num: "03",
    title: "We Build",
    desc: "Our team builds your AI systems in 1–2 weeks. You get updates throughout and can give feedback at every step.",
    details: ["Full system development", "Integrations with your tools", "Testing and QA"],
  },
  {
    num: "04",
    title: "Launch & Handover",
    desc: "We go live, walk you through everything, and make sure your team is fully comfortable with the new systems.",
    details: ["Live deployment", "Training session", "Documentation provided"],
  },
  {
    num: "05",
    title: "Ongoing Optimization",
    desc: "We monitor, improve, and keep optimising your automations as your business grows — so results compound over time.",
    details: ["Performance monitoring", "Monthly improvements", "Priority support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate/20 via-navy to-navy pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-cyan text-sm font-medium mb-3">How We Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight max-w-xl">
            From first call to fully automated in 2 weeks.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12
                         py-8 border-b border-white/7 last:border-0
                         hover:bg-white/[0.01] transition-colors duration-300 rounded-xl px-2"
            >
              {/* Number */}
              <div className="flex items-start pt-1">
                <span className="font-heading text-3xl font-800 text-white/10 group-hover:text-cyan/30 transition-colors duration-300 tabular-nums">
                  {step.num}
                </span>
              </div>

              {/* Title + desc */}
              <div>
                <h3 className="font-heading text-lg font-700 text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-2">
                {step.details.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/60 shrink-0" />
                    <span className="text-sm text-muted/70">{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-cyan text-navy font-heading font-700 text-base
                       glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start the Process — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
