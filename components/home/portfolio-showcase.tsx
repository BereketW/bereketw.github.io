"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

type PortfolioProject = {
  title: string;
  category?: string;
  subcategory?: string;
  image?: string;
};

export default function PortfolioShowcase({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const resolvedProjects = projects.length
    ? projects
    : [
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
    <section className="py-20 md:py-32 bg-slate-50">
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
            A Glimpse Into Our Digital Excellence
          </h2>
          <p className="text-slate-500">
            Explore our portfolio of successful projects and transformations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resolvedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-slate-100">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  {project.category || "Project"} · {project.subcategory || "Case Study"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90 flex items-center gap-2 shadow-md"
            style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
