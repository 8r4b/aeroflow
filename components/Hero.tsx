"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Phone, Globe, Share2, Mic,
  CheckCircle, Calendar, CalendarCheck, Zap, Users,
} from "lucide-react";

interface ParticleData { id: number; left: string; top: string; delay: number; duration: number; }

function Particles() {
  const [particles, setParticles] = useState<ParticleData[]>([]);
  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
    })));
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute w-0.5 h-0.5 rounded-full bg-cyan/40"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const INPUTS = [
  { icon: Phone,  label: "Phone Calls" },
  { icon: Globe,  label: "Website" },
  { icon: Share2, label: "Social Media" },
  { icon: Mic,    label: "Voice Agent" },
];

const OUTPUTS = [
  { icon: CalendarCheck, label: "Book Appointment", color: "text-cyan" },
  { icon: Zap,           label: "Instant Response",  color: "text-blue/80" },
  { icon: Users,         label: "Qualified Leads",   color: "text-cyan/70" },
];

function FlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full"
    >
      {/* Desktop layout: horizontal */}
      <div className="hidden lg:flex items-center justify-center gap-0">

        {/* Input column */}
        <div className="flex flex-col gap-2.5">
          {INPUTS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.7 + i * 0.08 }}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
                         bg-slate/60 border border-white/8 text-sm text-white/75 w-40"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                <Icon size={12} className="text-cyan" />
              </div>
              {label}
            </motion.div>
          ))}
        </div>

        {/* Arrow lines in → */}
        <div className="flex flex-col gap-2.5 mx-1">
          {INPUTS.map((_, i) => (
            <motion.div key={i} className="flex items-center"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
            >
              <div className="w-6 h-px bg-gradient-to-r from-white/15 to-cyan/50" />
              <div className="w-1.5 h-1.5 border-r-2 border-t-2 border-cyan/50 rotate-45 -ml-1" />
            </motion.div>
          ))}
        </div>

        {/* Center hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="relative flex flex-col items-center justify-center mx-1
                     w-32 rounded-2xl bg-slate border border-cyan/30 py-5 px-3 text-center shrink-0"
        >
          <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-cyan
                          flex items-center justify-center">
            <motion.div className="w-2 h-2 rounded-full bg-navy"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
          <p className="font-heading font-700 text-white text-sm leading-tight">AeroFlow</p>
          <p className="text-muted text-[10px] mt-0.5 leading-tight">AI Automation</p>
          <div className="mt-3 flex gap-1">
            {[0,1,2].map(n => (
              <motion.div key={n} className="w-1.5 h-1.5 rounded-full bg-cyan/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, delay: n * 0.3, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>

        {/* Arrow lines out → */}
        <div className="flex flex-col gap-2.5 mx-1">
          {OUTPUTS.map((_, i) => (
            <motion.div key={i} className="flex items-center"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
            >
              <div className="w-6 h-px bg-gradient-to-r from-cyan/50 to-white/15" />
              <div className="w-1.5 h-1.5 border-r-2 border-t-2 border-cyan/50 rotate-45 -ml-1" />
            </motion.div>
          ))}
        </div>

        {/* Output column */}
        <div className="flex flex-col gap-2.5">
          {OUTPUTS.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 1.0 + i * 0.1 }}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
                         bg-slate/60 border border-cyan/15 text-sm text-white/80 w-44"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                <Icon size={12} className={color} />
              </div>
              {label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile layout: vertical card */}
      <div className="lg:hidden mx-auto max-w-xs">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl bg-slate/50 border border-white/8 overflow-hidden"
        >
          {/* Inputs row */}
          <div className="p-4 border-b border-white/6">
            <p className="text-[10px] text-muted/60 uppercase tracking-wider mb-3">Incoming Channels</p>
            <div className="grid grid-cols-2 gap-2">
              {INPUTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-white/70">
                  <div className="w-5 h-5 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                    <Icon size={10} className="text-cyan" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Center hub */}
          <div className="py-3 px-4 bg-cyan/5 border-b border-white/6 flex items-center justify-between">
            <div>
              <p className="font-heading font-700 text-white text-sm">AeroFlow AI Hub</p>
              <p className="text-muted text-[10px]">Processing & Routing</p>
            </div>
            <div className="flex gap-1">
              {[0,1,2].map(n => (
                <motion.div key={n} className="w-1.5 h-1.5 rounded-full bg-cyan"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, delay: n * 0.3, repeat: Infinity }}
                />
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="p-4">
            <p className="text-[10px] text-muted/60 uppercase tracking-wider mb-3">Automated Results</p>
            <div className="flex flex-col gap-2">
              {OUTPUTS.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-white/80">
                  <div className="w-5 h-5 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                    <Icon size={10} className={color} />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan/5" />
        <div className="orb absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue/6" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                         bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              AI Automation Agency
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-800
                         leading-[1.08] tracking-tight mb-5"
            >
              Automate Your Business.<br />
              <span className="gradient-text">Grow Without Limits.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed max-w-lg mb-7"
            >
              We build AI voice agents, automation workflows, and intelligent websites
              that handle your leads, bookings, and follow-ups — 24/7.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col gap-2 mb-8"
            >
              {[
                "Respond to leads instantly, 24/7",
                "Book calls automatically",
                "Zero manual follow-up needed",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle size={13} className="text-cyan shrink-0" />
                  {b}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5
                           rounded-xl bg-cyan text-navy font-heading font-700 text-base
                           glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Calendar size={15} />
                Book a Free Audit Call
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a href="https://wa.me/9647736360937" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5
                           rounded-xl border border-white/12 text-muted font-heading font-600 text-base
                           hover:border-white/25 hover:text-white transition-all duration-200 active:scale-95"
              >
                <MessageCircle size={15} className="text-green-400" />
                Prefer WhatsApp?
              </a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7 text-sm text-muted/50"
            >
              Trusted by businesses across{" "}
              <span className="text-muted/80">Iraq, UAE, and the US</span>
            </motion.p>
          </div>

          {/* Right — flow diagram (desktop) */}
          <div className="hidden lg:flex items-center justify-center">
            <FlowDiagram />
          </div>
        </div>

        {/* Flow diagram (mobile) — below text */}
        <div className="lg:hidden mt-10">
          <FlowDiagram />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  );
}
