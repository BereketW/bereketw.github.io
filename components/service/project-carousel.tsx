"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  accentColor: string;
}

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "For Help Charity",
      category: "Blog",
      type: "Web Design",
      image: "/charity-website-design.jpg",
      accentColor: "#a4d65e",
    },
    {
      id: 2,
      title: "Zenith Gym Website",
      category: "Fitness",
      type: "Web Design",
      image: "/gym-fitness-website.jpg",
      accentColor: "#b8a4ff",
    },
    {
      id: 3,
      title: "Klothes E-commerce",
      category: "E-commerce",
      type: "Web Design",
      image: "/ecommerce-clothing-store.jpg",
      accentColor: "#ff9a76",
    },
    {
      id: 4,
      title: "Talent Blog",
      category: "Blog",
      type: "Web Development",
      image: "/blog-platform-development.jpg",
      accentColor: "#a4d65e",
    },
  ];

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="py-3 md:py-3 bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-2">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "var(--apex-gray-light)" }}
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="my-4 px-2 flex items-center justify-between border-2 border-white rounded-full">
                <div>
                  <h3
                    className="text-lg  font-semibold mb-1"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--apex-gray-medium)" }}
                  >
                    {project.category} • {project.type}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <ChevronRight size={24} color="white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between my-8">
          <h2
            className="text-2xl md:text-2xl font-bold"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Our Projects
          </h2>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            {/* Pagination */}
            <span
              className="text-sm font-medium"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              {String(currentIndex + 1).padStart(2, "0")}/
              {String(projects.length).padStart(2, "0")}
            </span>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "var(--apex-gray-light)" }}
              >
                <ChevronLeft
                  size={20}
                  style={{ color: "var(--apex-gray-medium)" }}
                />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                <ChevronRight size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
