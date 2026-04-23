"use client";

import { motion } from "framer-motion";
import { Phone, RefreshCcw, Zap, MessageCircle, Users, Smartphone, Video, BarChart3, Mic2 } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Inbound Voice Agent",
    desc: "AI-powered voice that answers calls 24/7, qualifies leads, and schedules appointments — never miss a call again.",
  },
  {
    icon: RefreshCcw,
    title: "Lead Reactivation",
    desc: "Automatically reach out to past leads with personalized messages and win back lost opportunities.",
  },
  {
    icon: Zap,
    title: "Speed to Lead",
    desc: "Instantly respond to new inquiries within seconds — the faster you respond, the more deals you close.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chatbot",
    desc: "Smart chatbot that answers questions, sends quotes, and books meetings on WhatsApp — all on autopilot.",
  },
  {
    icon: Users,
    title: "Hiring System",
    desc: "Automate your recruitment process: screen candidates, schedule interviews, and send offers automatically.",
  },
  {
    icon: Smartphone,
    title: "Social Media Automation",
    desc: "Auto-reply to DMs, capture leads from comments, and schedule posts — let AI handle your social presence.",
  },
  {
    icon: Video,
    title: "AI UGC System",
    desc: "Generate authentic-looking video ads at scale — no actors, no cameras, just AI-created content that converts.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboard",
    desc: "See all your business metrics in one place: leads, revenue, conversions, and team performance — updated in real-time.",
  },
  {
    icon: Mic2,
    title: "Voice Cloning Add-on",
    desc: "Clone your voice for outbound calls — sound like you, but on autopilot, reaching more leads every day.",
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
          <p className="text-cyan text-sm font-medium mb-3">Our Services</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight max-w-xl">
            Automate your business with AI.
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
