"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Mic, MessageSquare, BarChart2, Share2 } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Connect your tools and eliminate manual work with n8n, Zapier, and custom AI workflows.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, modern websites built with Next.js that convert visitors into paying clients.",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    desc: "24/7 voice agents that answer calls, qualify leads, and book appointments automatically.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    desc: "Intelligent bots for WhatsApp, your website, and social media that never sleep.",
  },
  {
    icon: BarChart2,
    title: "CRM Setup",
    desc: "GoHighLevel pipelines, automated follow-ups, and full lead management — done for you.",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    desc: "Auto-post content, send DMs, and capture leads from social — all on autopilot.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-cyan text-sm font-medium mb-3">What We Build</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight max-w-xl">
            Everything your business needs to run on autopilot.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 rounded-2xl bg-slate/50 border border-white/7
                           hover:border-cyan/30 hover:bg-slate transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20
                               flex items-center justify-center mb-4
                               group-hover:bg-cyan/15 transition-colors duration-300">
                  <Icon size={18} className="text-cyan" />
                </div>
                <h3 className="font-heading font-600 text-white text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
