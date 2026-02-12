"use client";

import { ArrowRight } from "lucide-react";
import ProjectsCarousel from "./project-carousel";
import ClientsShowcase from "../client-showcase";

export default function ServicesHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg border-2">
        <div className="grid md:grid-cols-2 gap-12 items-center  rounded-2xl my-2 ">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--apex-primary)" }}
              ></div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                Services
              </span>
            </div>

            <h1
              className="text-5xl font-medium mb-6"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Diverse Service Offerings
            </h1>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              Unlock your digital potential with our comprehensive suite of
              services. From innovative design to robust engineering, we deliver
              solutions that transform your vision into reality.
            </p>

            <div className="flex my-10 gap-6">
              <button
                className="text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                View All Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-opacity hover:opacity-90 border-2 "
                // style={{ backgroundColor: "var(--apex-primary)" }}
              >
                Book A Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-4 max-w-[500px] gap-2 mb-4">
              <div>
                <p
                  className="text-3xl font-medium"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  200+
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  Projects
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-medium"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  20+
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  industries
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-medium"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  15+
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  Countries
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-medium"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  100%
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden my-10">
            {/* <img
              src="/digital-design-mockups-and-wireframes.jpg"
              alt="Services showcase"
              className="w-full h-full object-cover"
            /> */}
            {/* <ClientsShowcase /> */}
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
