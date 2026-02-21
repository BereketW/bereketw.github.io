"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Twitter, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  handle: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, handle, image, index }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4 mb-6">
        {/* Avatar */}
        <div className="relative w-16 h-16 shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative z-10 border-2 border-white shadow-md">
            {/* Fallback to initials if image fails or just use a colored div for now as placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center font-bold text-xl" style={{ color: "var(--tigat-primary)" }}>
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            {/* In a real app, we would use Next.js Image here */}
            {/* <Image src={image} alt={name} fill className="object-cover" /> */}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-bold text-lg truncate">{name}</h3>
          <p className="text-gray-500 text-sm truncate">{role}</p>
        </div>
      </div>

      {/* Social Pill */}
      <div className="flex justify-center">
        <a
          href={`https://twitter.com/${handle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-gray-600 px-6 py-2 rounded-full transition-colors duration-200 text-sm font-medium w-full justify-center group/btn" style={{ backgroundColor: "rgba(1,135,186,0.08)" }}
        >
          <Twitter className="w-4 h-4 transition-colors" style={{ color: "var(--tigat-primary)" }} />
          <span>{handle}</span>
        </a>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alexandra Turner",
      role: "CEO",
      handle: "@alexandraturner",
      image: "/team/alexandra.jpg"
    },
    {
      name: "Daniel Rodriguez",
      role: "CTO",
      handle: "@danielrodriguez",
      image: "/team/daniel.jpg"
    },
    {
      name: "Olivia Chang",
      role: "Creative Director",
      handle: "@oliviachang",
      image: "/team/olivia.jpg"
    },
    {
      name: "Michael Patel",
      role: "Lead Software Engineer",
      handle: "@michaelpatel",
      image: "/team/michael.jpg"
    },
    {
      name: "Sophie Carter",
      role: "UX/UI Designer",
      handle: "@sophiecarter",
      image: "/team/sophie.jpg"
    },
    {
      name: "Anthony Davis",
      role: "Project Manager",
      handle: "@anthonydavis",
      image: "/team/anthony.jpg"
    },
    {
      name: "Emily Thompson",
      role: "Marketing Specialist",
      handle: "@emilythompson",
      image: "/team/emily.jpg"
    },
    {
      name: "Ryan Foster",
      role: "Financial Analyst",
      handle: "@ryanfoster",
      image: "/team/ryan.jpg"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
            <Trophy className="w-8 h-8" style={{ color: "var(--tigat-primary)" }} />
            <div className="absolute inset-0 blur-xl opacity-20 rounded-full" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet the Visionaries Behind Tigat Tech
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Each team member contributes a unique blend of expertise and creativity, working collaboratively to turn ideas into reality. Get to know the faces driving innovation and excellence within our dedicated team.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              handle={member.handle}
              image={member.image}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="text-white px-10 py-6 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 hover:opacity-90 flex items-center gap-2 mx-auto" style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}>
            <Star className="w-5 h-5 fill-current" />
            Join Our Team
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;