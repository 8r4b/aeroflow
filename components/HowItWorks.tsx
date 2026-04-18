"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We learn about your business, current workflows, and identify the highest-impact automation opportunities for your team.",
    color: "from-cyan/20 to-cyan/5",
    borderColor: "border-cyan/30",
    glowColor: "rgba(0,212,255,0.15)",
  },
  {
    number: "02",
    icon: Hammer,
    title: "We Build",
    description:
      "Our team builds your custom AI system in 1–2 weeks. You get regular updates and can give feedback throughout.",
    color: "from-blue/20 to-blue/5",
    borderColor: "border-blue/30",
    glowColor: "rgba(0,102,255,0.15)",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "You Grow",
    description:
      "Sit back and watch your business run on autopilot. We provide ongoing support and can keep optimizing as you scale.",
    color: "from-cyan/20 to-blue/5",
    borderColor: "border-cyan/30",
    glowColor: "rgba(0,212,255,0.15)",
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/30 to-navy pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb bg-cyan/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight mb-4">
            Simple.{" "}
            <span className="gradient-text">Fast.</span>{" "}
            Effective.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From first call to fully automated system in as little as 2 weeks.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[4.5rem] left-[calc(16.66%-2px)] right-[calc(16.66%-2px)]
                       h-px bg-gradient-to-r from-cyan/30 via-blue/50 to-cyan/30 pointer-events-none"
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.18, ease: "easeOut" }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step number badge */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color}
                                 border ${step.borderColor} flex items-center justify-center
                                 relative overflow-hidden group hover:scale-105 transition-all duration-300`}
                      style={{
                        boxShadow: `0 0 30px ${step.glowColor}`,
                      }}
                    >
                      <Icon size={28} className="text-cyan relative z-10" />
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Step number */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy border border-cyan/40
                                 flex items-center justify-center text-xs font-heading font-700 text-cyan"
                    >
                      {step.number.slice(-1)}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-700 text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden mt-6 text-cyan/40 text-2xl">↓</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-muted mb-5">
            Ready to get started?{" "}
            <span className="text-white">Book a free 30-min discovery call.</span>
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-cyan text-navy font-heading font-700 text-base
                       glow-cyan hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book Free Call
            <Phone size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
