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
      icon: Target,
      title: "Customer Focus",
      description:
        "We are committed to understanding and exceeding your expectations at every step.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--tigat-primary)" }}
            ></div>
          </div>
          <h2 className="mb-4 text-slate-900">
            Choose Us For Unparalleled Excellence
          </h2>
          <p className="text-slate-500">
            Here&apos;s why leading brands trust Tigat Tech for their digital
            transformation
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex items-center justify-center max-sm:flex-wrap gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(1,135,186,0.1)" }}
                >
                  <Icon className="w-8 h-8" style={{ color: "var(--tigat-primary)" }} />
                </div>
                <h3 className="mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
