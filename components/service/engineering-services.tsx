"use client";

import { useState } from "react";
import { Code, X, Plus } from "lucide-react";

interface ServiceDetail {
  title: string;
  details: string[];
}

export default function EngineeringServices() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const services: ServiceDetail[] = [
    {
      title: "Web Development",
      details: [
        "Front-end development (React, Vue, Angular)",
        "Back-end development (Node.js, Python, Ruby)",
        "Full-stack development and API integration",
        "E-commerce and custom web applications",
      ],
    },
    {
      title: "Mobile App Development",
      details: [
        "iOS and Android native development",
        "Cross-platform development (React Native, Flutter)",
        "App store optimization and deployment",
        "Mobile app maintenance and updates",
      ],
    },
    {
      title: "Custom Software Development",
      details: [
        "Enterprise software solutions",
        "Cloud-based applications",
        "Database design and optimization",
        "Legacy system modernization",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start border-white rounded-2xl border-4 ">
          {/* Left Side - White Card */}
          <div className="bg-white h-full rounded-l-3xl border p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full mb-8"
              style={{ backgroundColor: "var(--apex-primary)" }}
            >
              <Code className="w-8 h-8 text-white" />
            </div>

            <h2
              className="text-2xl  font-semibold mb-6"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Engineering Services
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              Our engineering team builds robust, scalable, and secure solutions
              that power your business forward.
            </p>

            <button
              className="text-white font-semibold px-8 py-3 rounded-full w-full transition-opacity hover:opacity-90 mb-4 flex items-center justify-center gap-2"
              style={{ backgroundColor: "var(--apex-primary)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H9.5V9.5H1.5V10.5H9.5V18.5H10.5V10.5H18.5V9.5H10.5V1.5Z" />
              </svg>
              View All Projects
            </button>

            <button className="text-base font-medium px-6 py-3 border-2 border-red-100 rounded-full w-full transition-colors flex items-center justify-center gap-2">
              Book a Call
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{
                  color: "var(--apex-primary)",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Services List */}
          <div className="space-y-4 py-10 px-6">
            <p
              className="text-base font-medium mb-8 flex mx-auto justify-center"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Our engineering services include
            </p>

            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="font-semibold text-lg text-left"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    {service.title}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform"
                    style={{ backgroundColor: "var(--apex-primary)" }}
                  >
                    {expandedIndex === index ? (
                      <X className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                {expandedIndex === index && (
                  <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="text-sm font-bold mt-1 flex-shrink-0"
                            style={{ color: "var(--apex-primary)" }}
                          >
                            →
                          </span>
                          <span style={{ color: "var(--apex-gray-medium)" }}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
