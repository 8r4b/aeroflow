"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Briefcase,
  Camera,
  X,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aeroflow.tech",
    href: "mailto:hello@aeroflow.tech",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+1 (234) 567-890",
    href: "https://wa.me/1234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Baghdad, Iraq · Worldwide",
    href: null,
  },
];

const socialLinks = [
  { icon: X,         label: "X (Twitter)", href: "https://twitter.com"   },
  { icon: Briefcase, label: "LinkedIn",     href: "https://linkedin.com"  },
  { icon: Camera,    label: "Instagram",    href: "https://instagram.com" },
];

const services = [
  "AI Automation",
  "Website Development",
  "AI Voice Agent",
  "AI Chatbot",
  "CRM Setup",
  "Social Media Automation",
  "Not sure yet",
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit — wire up to your form handler here
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] orb bg-cyan/8 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-5">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-800 tracking-tight mb-5">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-muted text-lg sm:text-xl max-w-xl mx-auto">
              Send us a message or book a free 30-minute discovery call.
              We&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Book call CTA */}
            <div className="glass rounded-2xl border border-cyan/25 p-6 bg-cyan/5">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={20} className="text-cyan" />
                <h2 className="font-heading text-base font-700 text-white">
                  Book a Free Call
                </h2>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Prefer to talk directly? Book a free 30-minute discovery call
                and we&apos;ll discuss exactly how we can help your business.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                           bg-cyan text-navy font-heading font-700 text-sm
                           glow-cyan-sm hover:scale-105 active:scale-95 transition-all duration-300 w-full"
              >
                <Calendar size={16} />
                Schedule on Calendly
              </a>
            </div>

            {/* Contact info */}
            <div className="glass rounded-2xl border border-white/7 p-6">
              <h2 className="font-heading text-sm font-700 text-white uppercase tracking-widest mb-5">
                Contact Details
              </h2>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={14} className="text-cyan" />
                      </div>
                      <div>
                        <p className="text-xs text-muted mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-white hover:text-cyan transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mt-5 pt-5 border-t border-white/7">
                <p className="text-xs text-muted mb-3">Follow us</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                                 flex items-center justify-center text-muted
                                 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5
                                 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/7">
              <CheckCircle2 size={15} className="text-cyan mt-0.5 shrink-0" />
              <p className="text-xs text-muted leading-relaxed">
                We typically respond within{" "}
                <span className="text-white">24 hours</span>. For urgent
                matters, reach us via WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass rounded-2xl border border-cyan/25 p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-cyan/15 border border-cyan/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-cyan" />
                </div>
                <h2 className="font-heading text-2xl font-700 text-white">
                  Message Sent!
                </h2>
                <p className="text-muted max-w-sm">
                  Thanks for reaching out. We&apos;ll review your message and
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", service: "", message: "" });
                  }}
                  className="text-sm text-cyan hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl border border-white/7 p-7 sm:p-9"
              >
                <h2 className="font-heading text-xl font-700 text-white mb-6">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Full Name <span className="text-cyan">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                                 text-white text-sm placeholder:text-muted/50
                                 focus:outline-none focus:border-cyan/50 focus:bg-cyan/5
                                 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Email Address <span className="text-cyan">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                                 text-white text-sm placeholder:text-muted/50
                                 focus:outline-none focus:border-cyan/50 focus:bg-cyan/5
                                 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Company / Business
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                                 text-white text-sm placeholder:text-muted/50
                                 focus:outline-none focus:border-cyan/50 focus:bg-cyan/5
                                 transition-all duration-200"
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                                 text-white text-sm
                                 focus:outline-none focus:border-cyan/50 focus:bg-cyan/5
                                 transition-all duration-200 cursor-pointer"
                    >
                      <option value="" className="bg-navy">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-navy">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wide">
                    Message <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you'd like to automate..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                               text-white text-sm placeholder:text-muted/50
                               focus:outline-none focus:border-cyan/50 focus:bg-cyan/5
                               transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl
                             bg-cyan text-navy font-heading font-700 text-base
                             glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-300
                             disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-navy/30 border-t-navy animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-muted text-center mt-4">
                  We&apos;ll reply within 24 hours. Prefer to talk now?{" "}
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    Book a call instead
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
