"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
      // Extract number from value for animation
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      
      if (numericValue) {
        let current = 0;
        const increment = numericValue / 50; // 50 steps for smooth animation
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
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={{ color: "var(--tigat-primary)" }}>
        {displayValue}
      </div>
      <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '280+', label: 'Happy Clients' },
    { value: '100%', label: 'Success Rate' },
    { value: '420K', label: 'Lines of Code' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;