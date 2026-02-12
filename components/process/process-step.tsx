import { Zap, Briefcase, Palette, Code } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Our team begins by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives.",
      icon: Zap,
    },
    {
      number: "02",
      title: "Planning and Strategy",
      description:
        "Based on our findings, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation.",
      icon: Briefcase,
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Development",
      description:
        "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products.",
      icon: Code,
    },
  ];

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of Process Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 relative"
              >
                {/* Left Border with Step Number */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <div
                    className="absolute left-1/2 top-8 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: "var(--apex-primary)" }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pl-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--apex-primary)" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--apex-gray-medium)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Stages Button */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--apex-primary)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H9.5V9H1.5V10H9V18.5H10.5V10H18.5V9H10.5V1.5Z" />
            </svg>
            View All Stages
          </button>
        </div>
      </div>
    </section>
  );
}
