"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Globe,
  Mic,
  MessageSquare,
  BarChart2,
  Share2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "automation",
    icon: Cpu,
    title: "AI Automation",
    tagline: "Eliminate repetitive work forever",
    description:
      "We build intelligent automation pipelines using n8n, Zapier, Make, and custom AI workflows that connect your tools and eliminate manual processes. From lead management to invoice generation to data sync — we automate the tedious so your team can focus on growth.",
    features: [
      "Custom n8n and Zapier workflows",
      "API integrations between any tools",
      "Triggered automations based on events",
      "Data transformation and routing",
      "Error handling and monitoring",
      "Full documentation provided",
    ],
    deliverable: "Working automation system + documentation",
    timeline: "5–10 days",
    price: "From $300",
    gradient: "from-cyan/10 to-transparent",
    borderColor: "border-cyan/25",
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    tagline: "Modern, fast, AI-powered websites",
    description:
      "We build high-performance websites with Next.js that rank on Google, load in under 2 seconds, and convert visitors into clients. Every site comes with built-in AI features — chatbots, lead capture, automated follow-up — all working together seamlessly.",
    features: [
      "Next.js 14 App Router",
      "Mobile-first responsive design",
      "Built-in SEO optimization",
      "AI chatbot integration",
      "CRM lead sync",
      "Analytics setup",
    ],
    deliverable: "Fully deployed website + source code",
    timeline: "7–14 days",
    price: "From $200",
    gradient: "from-blue/10 to-transparent",
    borderColor: "border-blue/25",
  },
  {
    id: "voice",
    icon: Mic,
    title: "AI Voice Agents",
    tagline: "Your phone line, automated 24/7",
    description:
      "We build AI voice agents using Vapi that can handle inbound calls, book appointments, qualify leads, and even follow up with prospects — sounding natural and professional. Your business never misses a call again.",
    features: [
      "Vapi-powered voice AI",
      "Natural conversation flows",
      "Appointment booking integration",
      "Lead qualification scripts",
      "Multi-language support",
      "CRM auto-update on each call",
    ],
    deliverable: "Live voice agent + call scripts + CRM integration",
    timeline: "7–14 days",
    price: "From $500",
    gradient: "from-cyan/10 to-transparent",
    borderColor: "border-cyan/25",
  },
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "AI Chatbots",
    tagline: "Instant answers on every channel",
    description:
      "Intelligent chatbots trained on your business data that can answer questions, capture leads, and hand off to human agents when needed. Available on your website, WhatsApp, Instagram, and more.",
    features: [
      "GPT-4 powered conversations",
      "WhatsApp Business API",
      "Website live chat widget",
      "Custom knowledge base training",
      "Lead capture & CRM sync",
      "Human handoff when needed",
    ],
    deliverable: "Deployed chatbot + admin dashboard",
    timeline: "5–7 days",
    price: "From $300",
    gradient: "from-blue/10 to-transparent",
    borderColor: "border-blue/25",
  },
  {
    id: "crm",
    icon: BarChart2,
    title: "CRM Setup (GoHighLevel)",
    tagline: "Your entire sales pipeline, automated",
    description:
      "We set up and configure GoHighLevel CRM to perfectly match your sales process. Custom pipelines, automated follow-up sequences, appointment booking, and reporting — all tailored to how your business actually works.",
    features: [
      "GHL account setup & configuration",
      "Custom sales pipeline stages",
      "Automated follow-up sequences",
      "Appointment booking calendar",
      "Email/SMS automation",
      "Reporting & analytics dashboard",
    ],
    deliverable: "Fully configured GHL CRM + training session",
    timeline: "3–7 days",
    price: "From $300",
    gradient: "from-cyan/10 to-transparent",
    borderColor: "border-cyan/25",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Automation",
    tagline: "Grow your audience on autopilot",
    description:
      "We set up systems that automatically create and post content, send DMs to new followers, capture leads from social media, and nurture them through your pipeline — all without manual work.",
    features: [
      "Auto-post to Instagram, LinkedIn, Facebook",
      "DM automation for new followers",
      "Lead capture from social profiles",
      "Content repurposing workflows",
      "Engagement automation",
      "Performance analytics",
    ],
    deliverable: "Running automation system + content calendar",
    timeline: "3–5 days",
    price: "From $200/month",
    gradient: "from-blue/10 to-transparent",
    borderColor: "border-blue/25",
  },
];

export default function ServicesPageContent() {
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
              What We Build
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-800 tracking-tight mb-5">
              Services That{" "}
              <span className="gradient-text">Automate</span>
              <br />& Accelerate Your Business
            </h1>
            <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
              Every service we offer is designed with one goal: to save you
              time, increase revenue, and give your business an AI-powered
              competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative glass rounded-2xl border ${svc.borderColor} overflow-hidden`}
              >
                {/* Top accent gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                    i % 2 === 0
                      ? "from-transparent via-cyan/40 to-transparent"
                      : "from-transparent via-blue/40 to-transparent"
                  }`}
                />

                <div className="p-7 sm:p-10">
                  <div
                    className={`grid lg:grid-cols-2 gap-10 items-start ${
                      i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Left: Content */}
                    <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                      {/* Icon + Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/25 flex items-center justify-center">
                          <Icon size={26} className="text-cyan" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl font-700 text-white">
                            {svc.title}
                          </h2>
                          <p className="text-cyan text-sm">{svc.tagline}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted text-base leading-relaxed mb-6">
                        {svc.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1.5 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-heading font-600">
                          {svc.price}
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-muted text-sm">
                          ⏱ {svc.timeline}
                        </span>
                      </div>

                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                                   bg-cyan text-navy font-heading font-700 text-sm
                                   glow-cyan-sm hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        Book Discovery Call
                        <ArrowRight size={15} />
                      </a>
                    </div>

                    {/* Right: Features */}
                    <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <div className="bg-navy/50 rounded-xl p-6 border border-white/7">
                        <h3 className="font-heading text-sm font-700 text-white mb-4 uppercase tracking-widest">
                          What&apos;s Included
                        </h3>
                        <ul className="flex flex-col gap-3">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-start gap-3">
                              <CheckCircle2
                                size={16}
                                className="text-cyan mt-0.5 shrink-0"
                              />
                              <span className="text-muted text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Deliverable */}
                        <div className="mt-5 pt-4 border-t border-white/7">
                          <p className="text-xs text-muted mb-1">
                            Deliverable
                          </p>
                          <p className="text-sm text-white">
                            {svc.deliverable}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
