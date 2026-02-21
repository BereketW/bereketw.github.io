"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Palette, Settings, LayoutGrid, Crown } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  icon: any;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  icon: Icon,
  index,
  isLast
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      {/* Card Container */}
      <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">

        {/* Left Part: Icon & Date */}
        <div className="flex flex-col items-center shrink-0 w-40 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4 relative group" style={{ backgroundColor: "var(--tigat-primary)", boxShadow: "0 4px 14px rgba(1,135,186,0.3)" }}>
            <Icon className="text-white w-9 h-9" />
            <div className="absolute inset-0 blur-xl opacity-40 rounded-full -z-10 group-hover:opacity-60 transition-opacity duration-300" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
          </div>
          <div className="rounded-full px-5 py-2 text-sm font-bold text-gray-600 whitespace-nowrap" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
            {date}
          </div>
        </div>

        {/* Right Part: Content */}
        <div className="flex-1 text-center md:text-left pt-2">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-500 leading-relaxed text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Vertical Connector between cards */}
      {!isLast && (
        <div className="h-12 w-1 bg-white my-0 relative z-0"></div>
      )}
    </motion.div>
  );
};

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "Designing Excellence: Our Creative Odyssey",
      description: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products.",
      date: "01 March, 2019",
      icon: Palette
    },
    {
      title: "Engineering Tomorrow: Innovating the Future",
      description: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of Tigat Tech.",
      date: "26 April, 2020",
      icon: Settings
    },
    {
      title: "Project Management Mastery: Navigating Success",
      description: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization.",
      date: "07 June, 2021",
      icon: LayoutGrid
    },
    {
      title: "Collaboration Chronicles: Uniting for Triumph",
      description: "At Tigat Tech, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional products.",
      date: "14 May, 2024",
      icon: Crown
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
                  <Flag className="w-8 h-8 fill-current" style={{ color: "var(--tigat-primary)" }} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Our Story
                </h2>
                <p className="text-gray-500 leading-relaxed text-lg">
                  We believe in transparency and aim to provide you with all the information you need to make informed decisions about our services.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:w-2/3">
            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  icon={item.icon}
                  index={index}
                  isLast={index === timelineItems.length - 1}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;