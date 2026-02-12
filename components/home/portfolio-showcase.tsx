"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioShowcase() {
  const projects = [
    {
      title: "For Help Charity",
      category: "Blog",
      subcategory: "Web Design",
      image: "/design-project-showcase.jpg",
    },
    {
      title: "Zenith Gym Website",
      category: "Fitness",
      subcategory: "Web Design",
      image: "/development-project-showcase.jpg",
    },
    {
      title: "Klothes E-commerce",
      category: "E-commerce",
      subcategory: "Web Design",
      image: "/branding-project-showcase.jpg",
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
            A Glimpse Into Our Digital Excellence
          </h2>
          <p className="text-lg" style={{ color: "var(--apex-gray-medium)" }}>
            Explore our portfolio of successful projects and transformations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--apex-gray-medium)" }}
                >
                  {project.category} • {project.subcategory}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
            style={{ backgroundColor: "var(--apex-primary)" }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
