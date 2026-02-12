"use client";

import { useState } from "react";
import type React from "react";
import { CheckCircle2, Mail } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Connect with Us Today!
            </h1>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              At Apex, we value your inquiries, feedback, and collaborations.
              Whether you are interested in our digital services, have questions
              about our projects
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--apex-gray-dark)" }}
              >
                Our Commitment to You
              </h3>
              <ul className="space-y-3">
                {[
                  "Swift responses, dedicated support",
                  "Efficient and always here for you",
                  "We listen, understand, and act promptly",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--apex-primary)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--apex-gray-dark)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: "#dae8f8" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={
                      {
                        "--tw-ring-color": "var(--apex-primary)",
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={
                      {
                        "--tw-ring-color": "var(--apex-primary)",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={
                      {
                        "--tw-ring-color": "var(--apex-primary)",
                      } as React.CSSProperties
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={
                      {
                        "--tw-ring-color": "var(--apex-primary)",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                  style={
                    {
                      "--tw-ring-color": "var(--apex-primary)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message here..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                  style={
                    {
                      "--tw-ring-color": "var(--apex-primary)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                <Mail className="w-4 h-4" />
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
