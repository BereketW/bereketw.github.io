"use client";

import { useState } from "react";

interface Project {
  id?: string | number;
  title: string;
  category?: string;
  type?: string;
  image?: string;
  tags?: string[];
}

export default function WorksShowcase({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "UI Design",
    "UX Design",
    "Branding",
    "Website Design",
    "App Design",
  ];

  const resolvedProjects: Project[] = projects.length
    ? projects
    : [
        // Web Design Projects
        {
          id: 1,
          title: "For Help Charity",
          category: "Blog",
          type: "Web Design",
          image: "/charity-website-design.jpg",
          tags: ["Web Design"],
        },
        {
          id: 2,
          title: "Zenith Gym Website",
          category: "Fitness",
          type: "Web Design",
          image: "/gym-fitness-website.jpg",
          tags: ["Web Design"],
        },
        {
          id: 3,
          title: "Klothes E-commerce",
          category: "E-commerce",
          type: "Web Design",
          image: "/ecommerce-clothing-store.jpg",
          tags: ["Web Design"],
        },
        // Web Development Projects
        {
          id: 4,
          title: "Talent Blog",
          category: "Blog",
          type: "Web Development",
          image: "/blog-platform-development.jpg",
          tags: ["Web Development"],
        },
        {
          id: 5,
          title: "SkillBridge E-Tech",
          category: "Education",
          type: "Web Development",
          image: "/education-platform-elearning.jpg",
          tags: ["Web Development"],
        },
        {
          id: 6,
          title: "Z-Aura E-commerce",
          category: "E-commerce",
          type: "Web Development",
          image: "/ecommerce-platform-development.png",
          tags: ["Web Development"],
        },
      ];

  const filteredProjects =
    activeFilter === "All"
      ? resolvedProjects
      : resolvedProjects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Web Design Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Web Design Projects
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "var(--apex-gray-medium)" }}
          >
            Explore a showcase of our diverse works, where innovation meets
            execution, and each project tells a unique success story in the
            realm of digital excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {resolvedProjects
              .filter((p) => p.type === "Web Design")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Web Development Projects
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "var(--apex-gray-medium)" }}
          >
            Explore a showcase of our diverse works, where innovation meets
            execution, and each project tells a unique success story in the
            realm of digital excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {resolvedProjects
              .filter((p) => p.type === "Web Development")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3
          className="font-semibold text-lg mb-1"
          style={{ color: "var(--apex-gray-dark)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: "var(--apex-gray-medium)" }}
        >
          {project.category || "Project"} • {project.type || "Case Study"}
        </p>
        <div className="flex justify-between items-center">
          <span
            className="text-xs font-medium"
            style={{ color: "var(--apex-gray-medium)" }}
          >
            E-commerce
          </span>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--apex-primary)" }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
