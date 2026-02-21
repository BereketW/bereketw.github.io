// "use client";

// import type React from "react";

// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, Send, Zap } from "lucide-react";
// import { useState } from "react";

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const footerLinks = {
//     Home: ["Testimonials", "Why Us", "FAQ's"],
//     Services: ["Design", "Engineering", "Project Management"],
//     "About Us": ["Our Story", "Team Members", "Our Clients"],
//   };

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle subscription logic here
//     setEmail("");
//   };

//   return (
//     <footer className="">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//           {/* Left Section - Logo, Tagline, Links, Social */}
//           <div className="bg-white py-3 rounded-2xl px-6 max-w-5xl">
//             {/* Logo and Tagline */}
//             <div className="mb-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div
//                   className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
//                   style={{ backgroundColor: "var(--apex-primary)" }}
//                 >
//                   X
//                 </div>
//                 <span
//                   className="font-bold text-lg"
//                   style={{ color: "var(--apex-gray-dark)" }}
//                 >
//                   Apex
//                 </span>
//               </div>
//               <h3
//                 className="text-xl font-semibold leading-tight mb-4"
//                 style={{ color: "var(--apex-gray-dark)" }}
//               >
//                 Unleashing Digital Potential: The Transformative Power of Our
//                 Agency
//               </h3>
//             </div>

//             {/* Navigation Links */}
//             <div className="grid grid-cols-3 gap-8 mb-8">
//               {Object.entries(footerLinks).map(([category, links]) => (
//                 <div key={category}>
//                   <h4
//                     className="font-semibold mb-4 text-sm"
//                     style={{ color: "var(--apex-gray-dark)" }}
//                   >
//                     {category}
//                   </h4>
//                   <ul className="space-y-3">
//                     {links.map((link) => (
//                       <li key={link}>
//                         <Link
//                           href="#"
//                           className="text-sm transition-colors hover:opacity-70"
//                           style={{ color: "var(--apex-gray-medium)" }}
//                         >
//                           {link}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Social Icons and Copyright */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-gray-100">
//               <div className="flex gap-3">
//                 {[
//                   { icon: Facebook, label: "Facebook" },
//                   { icon: Twitter, label: "Twitter" },
//                   { icon: Linkedin, label: "LinkedIn" },
//                 ].map(({ icon: Icon, label }) => (
//                   <button
//                     key={label}
//                     className="w-10 h-10 rounded-full text-white flex items-center justify-center transition-opacity hover:opacity-90"
//                     style={{ backgroundColor: "var(--apex-primary)" }}
//                     aria-label={label}
//                   >
//                     <Icon className="w-5 h-5" />
//                   </button>
//                 ))}
//               </div>
//               <p
//                 className="text-xs"
//                 style={{ color: "var(--apex-gray-medium)" }}
//               >
//                 © 2025 Apex. All rights reserved.
//               </p>
//             </div>

//             {/* Terms and Privacy */}
//             <div className="flex gap-4 mt-4">
//               <Link
//                 href="#"
//                 className="text-xs transition-colors hover:opacity-70"
//                 style={{ color: "var(--apex-gray-medium)" }}
//               >
//                 Terms & Conditions
//               </Link>
//               <span style={{ color: "var(--apex-gray-medium)" }}>•</span>
//               <Link
//                 href="#"
//                 className="text-xs transition-colors hover:opacity-70"
//                 style={{ color: "var(--apex-gray-medium)" }}
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//           </div>

//           {/* Right Section - Newsletter */}
//           <div className="flex flex-col items-center justify-center text-center bg-white max-w-2xl">
//             <div
//               className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
//               style={{ backgroundColor: "var(--apex-primary)" }}
//             >
//               <Zap className="w-10 h-10 text-white" />
//             </div>

//             <h3
//               className="text-2xl font-semibold mb-4"
//               style={{ color: "var(--apex-gray-dark)" }}
//             >
//               Subscribe to Our Newsletter!
//             </h3>

//             <p
//               className="text-sm mb-8 max-w-sm"
//               style={{ color: "var(--apex-gray-medium)" }}
//             >
//               Join our community by subscribing to our newsletter and unlock
//               exclusive content, industry news, and valuable tips curated just
//               for you.
//             </p>

//             {/* Newsletter Form */}
//             <form onSubmit={handleSubscribe} className="w-full max-w-sm">
//               <div className="flex flex-col gap-3">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
//                   style={{
//                     color: "var(--apex-gray-dark)",
//                   }}
//                 />
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
//                   style={{ backgroundColor: "var(--apex-primary)" }}
//                 >
//                   <Send className="w-4 h-4" />
//                   Subscribe Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Zap,
  Send
} from 'lucide-react';

const Footer = () => {
  const homeLinks = [
    { label: 'Home', href: '/' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Why Us', href: '/why-us' },
    { label: "FAQ's", href: '/faqs' },
  ];

  const serviceLinks = [
    { label: 'Design', href: '/services/design' },
    { label: 'Engineering', href: '/services/engineering' },
    { label: 'Project Management', href: '/services/pm' },
  ];

  const aboutLinks = [
    { label: 'Our Story', href: '/about/story' },
    { label: 'Team Members', href: '/about/team' },
    { label: 'Our Clients', href: '/about/clients' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section - Navigation & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white rounded-3xl p-0 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Part: Logo & Tagline */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Pill Logo */}
            <div className="flex items-center bg-white  border-gray-100  p-1.5 pr-6">
              <div className=" h-12  flex items-center justify-center  overflow-hidden">
                <Image src="/logo.png" alt="Tigat Tech" width={150} height={48} className="object-contain" />
              </div>
            </div>

            <p className="text-gray-900 font-medium max-w-xs text-left md:text-right leading-snug">
              Unleashing Digital Potential: The Transformative Power of Our Agency
            </p>
          </div>

          {/* Middle Part: Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 border-dashed">
            {/* Column 1 */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 border-dashed">
              <h4 className="font-bold text-gray-900 mb-6">Home</h4>
              <ul className="space-y-4">
                {homeLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-500 transition-colors text-sm font-medium" style={{ }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--tigat-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 2 */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 border-dashed">
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-500 transition-colors text-sm font-medium" style={{ }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--tigat-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Column 3 */}
            <div className="p-8 md:p-10">
              <h4 className="font-bold text-gray-900 mb-6">About Us</h4>
              <ul className="space-y-4">
                {aboutLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-500 transition-colors text-sm font-medium" style={{ }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--tigat-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Part: Legal & Socials */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 border-dashed">
            <div className="p-6 md:p-8 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-gray-100 border-dashed">
              <div className="text-xs text-gray-500 font-medium">
                <Link href="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
                <span className="mx-2 text-gray-300">•</span>
                <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              </div>
            </div>

            <div className="p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 border-dashed">
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    style={{ backgroundColor: "var(--tigat-primary)" }}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 flex items-center justify-center md:justify-end">
              <div className="text-xs text-gray-400">
                © 2025 Tigat Tech. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center"
        >
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl z-10 relative" style={{ backgroundColor: "var(--tigat-primary)", boxShadow: "0 4px 20px rgba(1,135,186,0.3)" }}>
              <Zap className="text-white w-10 h-10 fill-current" />
            </div>
            <div className="absolute inset-0 blur-2xl opacity-20 rounded-full transform scale-150" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter!
          </h3>

          <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed text-sm">
            Join our community by subscribing to our newsletter and unlock exclusive content, industry news, and valuable tips curated just for you.
          </p>

          <form className="w-full space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-200 transition-all text-center"
            />
            <Button className="w-full text-white py-6 rounded-full font-bold shadow-lg transition-all transform hover:scale-[1.02] hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}>
              <Send size={18} className="rotate-45" />
              Subscribe Now
            </Button>
          </form>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;