"use client";

import { Palette, Code, Briefcase, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Design Services",
      description:
        "At Apex, our design team is passionate about creating stunning, user-centric designs that captivate your audience.",
      icon: Palette,
      tags: ["UI Design", "UX Design", "Branding", "Website Design"],
    },
    {
      title: "Engineering Services",
      description:
        "Our expert engineers translate project requirements into cutting-edge solutions. We use the latest technologies and best practices to build robust and scalable digital products.",
      icon: Code,
      tags: ["Web Development", "Mobile App", "Cloud", "DevOps"],
    },
    {
      title: "Project Management Services",
      description:
        "Our experienced project management team ensures that your projects are delivered on time and within budget. We maintain clear communication and provide regular updates.",
      icon: Briefcase,
      tags: ["Planning", "Execution", "Monitoring", "Delivery"],
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Discover Our Full Range of Services
          </h2>
          <p className="text-lg" style={{ color: "var(--apex-gray-medium)" }}>
            We offer comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "var(--apex-gray-light)",
                        color: "var(--apex-gray-medium)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View All Link */}
                <button
                  className="flex items-center gap-2 font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--apex-primary)" }}
                >
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
