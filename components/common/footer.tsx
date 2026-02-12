"use client";

import type React from "react";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Send, Zap } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const footerLinks = {
    Home: ["Testimonials", "Why Us", "FAQ's"],
    Services: ["Design", "Engineering", "Project Management"],
    "About Us": ["Our Story", "Team Members", "Our Clients"],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail("");
  };

  return (
    <footer className="">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Left Section - Logo, Tagline, Links, Social */}
          <div className="bg-white py-3 rounded-2xl px-6 max-w-5xl">
            {/* Logo and Tagline */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  X
                </div>
                <span
                  className="font-bold text-lg"
                  style={{ color: "var(--apex-gray-dark)" }}
                >
                  Apex
                </span>
              </div>
              <h3
                className="text-xl font-semibold leading-tight mb-4"
                style={{ color: "var(--apex-gray-dark)" }}
              >
                Unleashing Digital Potential: The Transformative Power of Our
                Agency
              </h3>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4
                    className="font-semibold mb-4 text-sm"
                    style={{ color: "var(--apex-gray-dark)" }}
                  >
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-sm transition-colors hover:opacity-70"
                          style={{ color: "var(--apex-gray-medium)" }}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-gray-100">
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="w-10 h-10 rounded-full text-white flex items-center justify-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--apex-primary)" }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                © 2025 Apex. All rights reserved.
              </p>
            </div>

            {/* Terms and Privacy */}
            <div className="flex gap-4 mt-4">
              <Link
                href="#"
                className="text-xs transition-colors hover:opacity-70"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                Terms & Conditions
              </Link>
              <span style={{ color: "var(--apex-gray-medium)" }}>•</span>
              <Link
                href="#"
                className="text-xs transition-colors hover:opacity-70"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="flex flex-col items-center justify-center text-center bg-white max-w-2xl">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "var(--apex-primary)" }}
            >
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Subscribe to Our Newsletter!
            </h3>

            <p
              className="text-sm mb-8 max-w-sm"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              Join our community by subscribing to our newsletter and unlock
              exclusive content, industry news, and valuable tips curated just
              for you.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="w-full max-w-sm">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
                  style={{
                    color: "var(--apex-gray-dark)",
                  }}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--apex-primary)" }}
                >
                  <Send className="w-4 h-4" />
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
