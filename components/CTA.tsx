"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-navy to-blue/10 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] orb bg-cyan/8 pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Limited spots available
          </span>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-800 tracking-tight leading-[1.05] max-w-3xl">
            Ready to{" "}
            <span className="gradient-text">Automate</span>{" "}
            Your Business?
          </h2>

          {/* Subtext */}
          <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            Book a free 30-minute discovery call and we&apos;ll identify
            exactly where AI can save you the most time and money — no
            obligation, no pressure.
          </p>

          {/* Benefits list */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            {[
              "Free 30-min call",
              "Custom automation plan",
              "No commitment required",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl
                         bg-cyan text-navy font-heading font-700 text-base
                         glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Calendar size={18} />
              Book Free Discovery Call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl
                         border border-white/20 text-muted font-heading font-600 text-base
                         hover:border-white/40 hover:text-white transition-all duration-300 active:scale-95"
            >
              Send a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
