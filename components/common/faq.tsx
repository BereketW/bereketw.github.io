"use client";

import { useState } from "react";
import { ChevronDown, Zap, Rocket } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("UI Design");

  const tabs = [
    "UI Design",
    "UX Design",
    "Branding",
    "Website Design",
    "App Design",
  ];

  const allFAQs: FAQItem[] = [
    // 🟦 UI DESIGN
    {
      question: "What services does Apex provide?",
      answer:
        "Apex offers a range of services including design, engineering, and project management. We specialize in user experience design, mobile app development, custom software development, branding and identity, and more.",
      category: "UI Design",
    },
    {
      question: "How can Apex help my business?",
      answer:
        "We help businesses transform their digital presence through innovative design and development solutions. Our team works closely with you to understand your goals and deliver results that exceed expectations.",
      category: "UI Design",
    },
    {
      question: "What tools do you use for UI design?",
      answer:
        "Our design team primarily uses tools like Figma, Adobe XD, and Sketch to craft pixel-perfect interfaces. We also leverage collaborative tools such as Zeplin and Notion to maintain transparency throughout the process.",
      category: "UI Design",
    },
    {
      question: "Can you redesign an existing product interface?",
      answer:
        "Yes! We frequently take on redesign projects to modernize existing applications. We focus on improving usability, accessibility, and aesthetics while maintaining your brand’s identity.",
      category: "UI Design",
    },

    // 🟪 UX DESIGN
    {
      question: "What industries does Apex work with?",
      answer:
        "We work with businesses across various industries including technology, healthcare, finance, e-commerce, and more. Our diverse experience allows us to bring fresh perspectives to any project.",
      category: "UX Design",
    },
    {
      question: "How do you approach user research?",
      answer:
        "We start with in-depth user research—interviews, surveys, and usability testing—to understand your audience’s needs. Insights from this phase guide every design decision we make.",
      category: "UX Design",
    },
    {
      question: "Do you conduct usability testing?",
      answer:
        "Absolutely. We conduct usability tests to validate design assumptions and identify friction points. This ensures the final product is intuitive and delightful for end users.",
      category: "UX Design",
    },
    {
      question: "How do you ensure accessibility in UX design?",
      answer:
        "We follow WCAG guidelines and implement best practices for color contrast, keyboard navigation, and screen reader support. Accessibility is built into our UX process from the very beginning.",
      category: "UX Design",
    },

    // 🟨 BRANDING
    {
      question: "How involved will I be in the project development process?",
      answer:
        "You will be involved throughout the entire project development process. We maintain regular communication and provide updates at key milestones to ensure the final product meets your expectations.",
      category: "Branding",
    },
    {
      question: "What does your branding process look like?",
      answer:
        "Our branding process starts with discovery sessions to understand your mission, audience, and values. We then develop a cohesive visual identity that represents your brand’s personality and goals.",
      category: "Branding",
    },
    {
      question: "Can you help us create brand guidelines?",
      answer:
        "Yes, we create comprehensive brand guidelines that include logo usage, typography, color palettes, tone of voice, and design principles to keep your brand consistent across all platforms.",
      category: "Branding",
    },
    {
      question: "Do you offer rebranding services for existing businesses?",
      answer:
        "Absolutely. We specialize in helping businesses evolve their brand identity to reflect growth, new audiences, or strategic direction while retaining their existing recognition and trust.",
      category: "Branding",
    },

    // 🟥 WEBSITE DESIGN
    {
      question: "What is your design philosophy?",
      answer:
        "Our design philosophy centers on creating intuitive, beautiful, and functional digital experiences. We believe in user-centered design and continuous improvement through feedback and iteration.",
      category: "Website Design",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes, all our websites are fully responsive. We ensure your site looks and performs beautifully across devices—desktop, tablet, and mobile.",
      category: "Website Design",
    },
    {
      question: "Do you handle both design and development?",
      answer:
        "Yes, our in-house design and development teams collaborate closely. This ensures that your website not only looks stunning but is also optimized for performance and accessibility.",
      category: "Website Design",
    },
    {
      question: "Can you optimize my website for SEO?",
      answer:
        "We follow SEO best practices from the start—semantic HTML, fast loading speeds, and mobile optimization—to improve your visibility and rankings in search engines.",
      category: "Website Design",
    },

    // 🟩 APP DESIGN
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. We provide detailed timelines during the planning phase and keep you updated throughout the development process.",
      category: "App Design",
    },
    {
      question: "Do you design for both iOS and Android?",
      answer:
        "Yes, we design cross-platform apps that maintain a consistent brand experience while following each platform’s unique design guidelines—Material Design for Android and Human Interface Guidelines for iOS.",
      category: "App Design",
    },
    {
      question: "Can you integrate custom features into our app?",
      answer:
        "Of course. We specialize in designing custom features such as user dashboards, notifications, in-app payments, and analytics integration tailored to your business goals.",
      category: "App Design",
    },
    {
      question: "How do you ensure a smooth handoff to developers?",
      answer:
        "We use component-based design systems and tools like Figma and Storybook for clear developer handoffs. Every design file includes specifications, assets, and responsive breakpoints.",
      category: "App Design",
    },
  ];

  const filteredFAQs = allFAQs.filter((faq) => faq.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setExpandedFAQ(null);
  };

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex max-sm:flex-col  gap-12">
          {/* Left Side */}
          <div className="md:max-w-1/3 w-full">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--apex-primary)" }}
              ></div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Common Queries, Clear Answers
            </h2>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              We believe in transparency and aim to provide you with all the
              information you need to make informed decisions about our
              services.
            </p>

            <div className="flex flex-col justify-center items-center mx-auto bg-gray-50 border-4 border-gray-100 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-8 border-red-100"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <Zap className="w-6 h-6 text-white " />
                </div>
              </div>

              <p
                className="text-xl font-medium mb-4"
                style={{ color: "var(--apex-gray-dark)" }}
              >
                Still have questions ?
              </p>
              <p
                className="text-sm mb-4 text-center"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                If the question is not available on our FAQ section. Feel free
                to contact us personally.
              </p>
              <button
                className="text-white border-4 border-red-200 font-semibold px-8 py-3 rounded-full w-full transition-opacity hover:opacity-90 mb-4 flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                <Rocket />
                Ask Question
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:max-w-2/3 w-full flex flex-col mx-auto justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 py-4 px-4 md:bg-white rounded-3xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleCategoryChange(tab)}
                  className="px-4 py-2 border rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor:
                      activeCategory === tab
                        ? "var(--apex-primary)"
                        : "transparent",
                    color:
                      activeCategory === tab
                        ? "white"
                        : "var(--apex-gray-medium)",
                    border:
                      activeCategory === tab
                        ? "none"
                        : `1px solid var(--apex-gray-light)`,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className="font-medium text-left"
                      style={{ color: "var(--apex-gray-dark)" }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform"
                      style={{ backgroundColor: "var(--apex-primary)" }}
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-white transition-transform ${
                          expandedFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p style={{ color: "var(--apex-gray-medium)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
