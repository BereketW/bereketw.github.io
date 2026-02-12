"use client";

import { Users, Zap, Award, Target } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team consists of experienced professionals dedicated to delivering exceptional results.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "We prioritize efficiency without compromising on quality to meet your deadlines.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Our work has been recognized and awarded by industry leaders and organizations.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description:
        "We are committed to understanding and exceeding your expectations at every step.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--apex-primary)" }}
            ></div>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Choose Us For Unparalleled Excellence
          </h2>
          <p className="text-lg" style={{ color: "var(--apex-gray-medium)" }}>
            Here's why leading brands trust Apex for their digital
            transformation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "var(--apex-gray-medium)" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
