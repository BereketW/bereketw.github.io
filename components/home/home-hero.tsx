"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="py-20 md:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--apex-primary)" }}
          >
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-center mb-6"
          style={{ color: "var(--apex-gray-dark)" }}
        >
          Elevate Your Digital Presence with Apex
        </h1>

        {/* Description */}
        <p
          className="text-center text-lg mb-12 max-w-3xl mx-auto"
          style={{ color: "var(--apex-gray-medium)" }}
        >
          Transform your vision into reality with our comprehensive digital
          solutions. From stunning design to robust development, we deliver
          excellence at every step.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            className="px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
            style={{ backgroundColor: "var(--apex-primary)" }}
          >
            <Zap className="w-4 h-4" />
            Get Started
          </button>
          <button
            className="px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
            style={{
              color: "var(--apex-primary)",
              border: `2px solid var(--apex-primary)`,
            }}
          >
            View Insights
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Network Diagram - Decorative */}
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          <svg
            className="w-full h-full max-w-2xl"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connection lines */}
            <line
              x1="100"
              y1="80"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="300"
              y1="80"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="100"
              y1="220"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="300"
              y1="220"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="50"
              y1="150"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="350"
              y1="150"
              x2="200"
              y2="150"
              stroke="var(--apex-primary)"
              strokeWidth="1"
              opacity="0.3"
            />

            {/* Center node */}
            <circle cx="200" cy="150" r="12" fill="var(--apex-primary)" />

            {/* Outer nodes */}
            <circle
              cx="100"
              cy="80"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
            <circle
              cx="300"
              cy="80"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
            <circle
              cx="100"
              cy="220"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
            <circle
              cx="300"
              cy="220"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
            <circle
              cx="50"
              cy="150"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
            <circle
              cx="350"
              cy="150"
              r="8"
              fill="var(--apex-primary)"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
