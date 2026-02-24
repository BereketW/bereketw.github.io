"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// --- Icons ---
const TechIcons = {
  React: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" opacity="0.1" /><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z" opacity="0" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity="0" /><circle cx="12" cy="12" r="2" /><path d="M12 22c4.97 0 9-1.79 9-4s-4.03-4-9-4-9 1.79-9 4 4.03 4 9 4zM12 2C7.03 2 3 3.79 3 6s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4z" /><path d="M20.66 7c1.66 2.87.57 6.63-2.43 8.4-3 1.77-6.77.8-8.43-2.07-1.66-2.87-.57-6.63 2.43-8.4 3-1.77 6.77-.8 8.43 2.07zM3.34 17c-1.66-2.87-.57-6.63 2.43-8.4 3-1.77 6.77-.8 8.43 2.07 1.66 2.87.57 6.63-2.43 8.4-3 1.77-6.77.8-8.43-2.07z" /></svg>
  ),
  Vue: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22L1 3h22L12 22z" /><path d="M12 16L6 3h12l-6 13z" /></svg>
  ),
  Angular: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2L2 22h20L12 2z" /><path d="M12 6l-4 11h8L12 6z" /></svg>
  ),
  Node: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
  ),
  Python: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 8h6v2H9V8zm6 8H9v-2h6v2z" /></svg>
  ),
  Docker: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 10h2v2H4v-2zm0 3h2v2H4v-2zm0 3h2v2H4v-2zm3-6h2v2H7v-2zm0 3h2v2H7v-2zm0 3h2v2H7v-2zm3-6h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zm3-6h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zM2 10h1v9H2v-9zm19 0h1v9h-1v-9z" /></svg>
  ),
  Git: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
  ),
  Database: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /></svg>
  ),
};

const iconList = [
  TechIcons.React, TechIcons.Vue, TechIcons.Angular, TechIcons.Node, TechIcons.Python, TechIcons.Docker, TechIcons.Git, TechIcons.Database,
  TechIcons.React, TechIcons.Vue, TechIcons.Angular, TechIcons.Node, TechIcons.Python, TechIcons.Docker, TechIcons.Git, TechIcons.Database,
  TechIcons.React, TechIcons.Vue, TechIcons.Angular, TechIcons.Node, TechIcons.Python, TechIcons.Docker, TechIcons.Git, TechIcons.Database,
];

// --- Stats Component ---
interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');

      if (numericValue) {
        let current = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current) + suffix);
          }
        }, 30);
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }, delay * 200);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--tigat-primary)" }}>
        {displayValue}
      </div>
      <div className="text-xs text-slate-500 font-medium text-center uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const HeroSection = () => {
  const stats = [
    { value: '200+', label: 'Clients' },
    { value: '280+', label: 'Projects' },
    { value: '100%', label: 'Happy Clients' },
    { value: '420K', label: 'Followers' },
    { value: '10+', label: 'Years Of Experience' },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-sm my-8">

      {/* Background Grid of Icons */}
      <div className="absolute inset-0 opacity-100 pointer-events-none overflow-hidden">
        <div className="flex flex-wrap justify-center gap-4 p-4 opacity-50 mask-image-gradient">
          {Array.from({ length: 40 }).map((_, i) => {
            const Icon = iconList[i % iconList.length];
            return (
              <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Icon className="w-8 h-8 md:w-10 md:h-10 opacity-80" style={{ color: "var(--tigat-primary-light)" }} />
              </div>
            );
          })}
        </div>
        {/* Gradient Mask to fade out center/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Central Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl overflow-hidden" style={{  boxShadow: "0 4px 20px rgba(1,135,186,0.3)" }}>
            <Image
              src="/t.png"
              alt="Tigat Tech"
              width={80}
              height={80}
              className="object-contain rounded-full"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-20 rounded-full -z-10 transform scale-150" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-900 tracking-tight mb-6 max-w-4xl"
        >
          Unveiling Our Story: The Essence of Tigat Tech
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 max-w-3xl mx-auto mb-16"
        >
          Embark on a narrative of our journey, where passion, innovation, and dedication converge to shape the story of our growth and commitment to excellence.
        </motion.p>

        {/* Stats Row */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index + 0.4}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;