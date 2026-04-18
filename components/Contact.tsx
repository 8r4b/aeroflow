"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

const services = [
  "AI Automation",
  "Website Development",
  "AI Voice Agent",
  "AI Chatbot",
  "CRM Setup",
  "Social Media Automation",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm]       = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New AeroFlow inquiry from ${form.name}`,
          from_name: "AeroFlow Website",
          ...form,
        }),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/15 to-navy pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[400px] orb bg-cyan/6 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-cyan text-sm font-medium mb-3">Get Started</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight mb-5">
              Book your free audit call.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
              Tell us about your business and we&apos;ll show you exactly where AI can save you
              time and money — no obligation, no pressure.
            </p>

            <div className="flex flex-col gap-3 text-sm text-muted mb-10">
              {[
                "Free 30-minute call",
                "Custom automation plan",
                "No commitment required",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan" />
                  {b}
                </div>
              ))}
            </div>

            {/* WhatsApp alternative */}
            <a
              href="https://wa.me/9647736360937"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-200"
            >
              <MessageCircle size={15} className="text-green-400" />
              Prefer WhatsApp? Message us directly
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-16
                              rounded-2xl bg-slate/40 border border-cyan/20">
                <div className="w-14 h-14 rounded-full bg-cyan/15 border border-cyan/25 flex items-center justify-center">
                  <CheckCircle2 size={26} className="text-cyan" />
                </div>
                <h3 className="font-heading text-xl font-700 text-white">We got your message!</h3>
                <p className="text-muted text-sm max-w-xs">
                  We&apos;ll reach out within 24 hours to schedule your audit call.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
                  className="text-xs text-cyan hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-medium">
                    Full Name <span className="text-cyan">*</span>
                  </label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                               placeholder:text-muted/40 focus:outline-none focus:border-cyan/40 transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-medium">
                    Phone / WhatsApp <span className="text-cyan">*</span>
                  </label>
                  <input
                    name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="+1 234 567 890"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                               placeholder:text-muted/40 focus:outline-none focus:border-cyan/40 transition-colors duration-200"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-medium">
                    I&apos;m interested in
                  </label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate border border-white/10 text-sm
                               text-white focus:outline-none focus:border-cyan/40 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="" className="bg-slate">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-slate">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-medium">
                    Tell us about your business
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="What are you currently doing manually that you'd like to automate?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm
                               placeholder:text-muted/40 focus:outline-none focus:border-cyan/40 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl
                             bg-cyan text-navy font-heading font-700 text-base
                             glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-200
                             disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-1"
                >
                  {loading ? (
                    <div className="w-4 h-4 rounded-full border-2 border-navy/30 border-t-navy animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Book My Free Call
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
