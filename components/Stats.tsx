"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 20,  suffix: "+", label: "Projects Delivered"  },
  { value: 5,   suffix: "+", label: "Happy Clients"       },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 3,   suffix: "+", label: "Countries Served"    },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const start     = 0;
    const end       = value;
    const duration  = 2000;
    const stepTime  = 30;
    const totalSteps = duration / stepTime;
    const step      = (end - start) / totalSteps;
    let current     = start;

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-3xl sm:text-4xl font-800 text-cyan">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-8 overflow-hidden">
      {/* Background stripe */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-blue/5 to-cyan/5" />
      <div className="absolute inset-0 border-y border-cyan/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center py-6 px-4
                ${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-muted text-sm mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
