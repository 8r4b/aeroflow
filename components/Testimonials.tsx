"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    role: "Operations Manager",
    company: "Packman",
    content:
      "AeroFlow transformed our lead management completely. What used to take our team hours every day now happens automatically — leads routed, agents assigned, appointments booked. It's been a game-changer.",
    rating: 5,
    initials: "AR",
    accentColor: "cyan",
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "GrowthStack Agency",
    content:
      "The AI chatbot they built for us handles 90% of customer inquiries without any human involvement. Our support team can now focus on complex issues while routine questions are answered instantly.",
    rating: 5,
    initials: "SM",
    accentColor: "blue",
  },
  {
    id: "t3",
    name: "Mohammed Hassan",
    role: "Founder",
    company: "TechVentures MENA",
    content:
      "Their speed is remarkable. Within 2 weeks we had a fully working AI voice agent that books appointments, qualifies leads, and integrates with our CRM. Highly recommend for any business serious about AI.",
    rating: 5,
    initials: "MH",
    accentColor: "cyan",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-cyan fill-cyan" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-navy">
      {/* Orb */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] orb bg-cyan/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight mb-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from businesses that have
            already automated with AeroFlow.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group glass rounded-2xl p-6 border border-white/7 card-hover flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-cyan/30 mb-4 shrink-0" />

              {/* Content */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/7">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                               font-heading font-700 text-sm
                    ${
                      t.accentColor === "cyan"
                        ? "bg-cyan/20 text-cyan border border-cyan/30"
                        : "bg-blue/20 text-blue border border-blue/30"
                    }`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-sm font-600 text-white truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
                <StarRating count={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
