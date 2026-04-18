"use client";

import { motion } from "framer-motion";
import { Zap, Target, Globe2, Users, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We measure success by client outcomes — time saved, revenue generated, and problems permanently solved.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "We move fast without cutting corners. Most projects go live within 2 weeks, built to last.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description:
      "AI moves fast. We stay ahead so our clients always get the latest, most effective solutions.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "We've served clients across 3+ countries and understand how to build solutions that work at scale.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We work as an extension of your team, not a vendor. Your success is our success.",
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description:
      "We don't stop until you're happy. Every project includes revisions until it meets your expectations.",
  },
];

const stack = [
  "n8n", "GoHighLevel", "Vapi", "Next.js", "OpenAI",
  "Zapier", "Make", "Twilio", "WhatsApp API", "Vercel",
];

export default function AboutPageContent() {
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
              About AeroFlow
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-800 tracking-tight mb-5">
              Built by AI Builders,{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">for Real Businesses</span>
            </h1>
            <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
              AeroFlow is an AI automation agency founded with one mission: to
              make enterprise-grade AI automation accessible to every business,
              no matter the size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-5">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-700 tracking-tight mb-5">
              Why We Started{" "}
              <span className="gradient-text">AeroFlow</span>
            </h2>
            <div className="flex flex-col gap-4 text-muted text-base leading-relaxed">
              <p>
                We started AeroFlow after seeing firsthand how much time small
                businesses waste on repetitive, manual tasks that AI can handle
                instantly. Business owners were spending hours every day on work
                that should have been automated years ago.
              </p>
              <p>
                Our founder Mohamed — an engineering student and AI automation
                specialist from Baghdad, Iraq — built his first automation
                system for a real client and saw immediate results. That
                sparked the idea: what if we could bring this to every
                business?
              </p>
              <p>
                Today, AeroFlow serves clients across multiple countries,
                building AI systems that save them 20–40 hours per week and
                generate measurable ROI from day one.
              </p>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl border border-cyan/20 p-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "20+", label: "Projects Delivered" },
                { value: "5+",  label: "Happy Clients"      },
                { value: "3+",  label: "Countries Served"   },
                { value: "100%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/3 border border-white/7">
                  <div className="font-heading text-3xl font-800 text-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/7">
              <p className="text-sm text-muted text-center leading-relaxed">
                Based in{" "}
                <span className="text-white">Baghdad, Iraq</span> · Serving
                clients globally across the{" "}
                <span className="text-white">Middle East, Europe, and North America</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-700 tracking-tight mb-4">
            What Drives{" "}
            <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Our values shape every project we take on and every system we build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 border border-white/7 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-cyan" />
                </div>
                <h3 className="font-heading text-base font-700 text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl font-700 tracking-tight mb-3">
            Our{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted">
            Tools and platforms we use to build powerful automation systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {stack.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2.5 rounded-xl glass border border-white/10 text-sm text-muted
                         hover:text-cyan hover:border-cyan/30 transition-all duration-200 cursor-default"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
