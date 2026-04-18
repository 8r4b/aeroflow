"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Zap, ArrowRight, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$300",
    period: "one-time",
    description:
      "Perfect for businesses getting started with AI. Get a high-converting landing page and your first chatbot.",
    features: [
      "Custom landing page (Next.js)",
      "AI chatbot for website",
      "Lead capture & email notification",
      "Mobile responsive design",
      "1 revision round",
      "7-day delivery",
    ],
    cta: "Get Started",
    ctaHref: "https://calendly.com",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$700",
    period: "one-time",
    description:
      "The complete AI stack for growing businesses. Website, automations, CRM — all connected.",
    features: [
      "Everything in Starter",
      "n8n / Zapier automation workflows",
      "GoHighLevel CRM setup",
      "Custom sales pipeline",
      "WhatsApp chatbot",
      "Social media automation",
      "2-week delivery",
      "30 days support",
    ],
    cta: "Get Growth Plan",
    ctaHref: "https://calendly.com",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$1,500",
    period: "/month",
    description:
      "Full AI automation suite with ongoing support. Voice agents, advanced workflows, and continuous optimization.",
    features: [
      "Everything in Growth",
      "AI voice agent (Vapi)",
      "Advanced n8n workflows",
      "Monthly optimization calls",
      "Priority support (24h response)",
      "New automations each month",
      "Performance reporting",
      "Dedicated Slack channel",
    ],
    cta: "Book Discovery Call",
    ctaHref: "https://calendly.com",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-slate/20 to-navy pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] orb bg-blue/8 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight mb-4">
            Simple,{" "}
            <span className="gradient-text">Transparent</span>{" "}
            Pricing
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your
            business and we&apos;ll get to work immediately.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-cyan/15 to-slate/80 border-2 border-cyan/50 glow-cyan scale-[1.03] lg:scale-[1.05]"
                    : "glass border border-white/7 hover:border-cyan/25"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan text-navy text-xs font-heading font-700">
                    <Star size={11} className="fill-navy" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="flex items-center gap-2 mb-2">
                <Zap
                  size={16}
                  className={plan.highlighted ? "text-cyan" : "text-muted"}
                />
                <span
                  className={`text-sm font-heading font-600 ${
                    plan.highlighted ? "text-cyan" : "text-muted"
                  }`}
                >
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-3">
                <span className="font-heading text-4xl font-800 text-white">
                  {plan.price}
                </span>
                <span className="text-muted text-sm mb-1.5">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl
                            font-heading font-700 text-sm mb-7 transition-all duration-300
                            active:scale-95 cursor-pointer
                  ${
                    plan.highlighted
                      ? "bg-cyan text-navy glow-cyan hover:scale-105"
                      : "border border-cyan/35 text-white hover:border-cyan hover:bg-cyan/5"
                  }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>

              {/* Divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-cyan" : "text-cyan/70"
                      }`}
                    />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted text-sm mt-10"
        >
          Need a custom solution?{" "}
          <Link href="/contact" className="text-cyan hover:underline">
            Contact us
          </Link>{" "}
          for a tailored quote.
        </motion.p>
      </div>
    </section>
  );
}
