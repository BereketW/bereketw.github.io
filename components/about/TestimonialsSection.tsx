"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  index 
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6" style={{ color: "var(--tigat-primary-light)" }}>
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-slate-600 mb-6">
        &quot;{content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4" style={{ background: "linear-gradient(to bottom right, var(--tigat-primary), var(--tigat-primary-light))" }}>
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alan Anderson",
      role: "CEO",
      company: "TechCorp",
      content: "Working with Tigat Tech was a transformative experience for our company. Their innovative approach and dedication to excellence delivered results beyond our expectations. The team's expertise in digital transformation helped us achieve remarkable growth.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director", 
      company: "StartupHub",
      content: "Tigat Tech delivered exactly what we needed with incredible precision. Their comprehensive approach to project management and technical implementation was impressive. They transformed our vision into a powerful, user-friendly platform.",
      rating: 5
    },
    {
      name: "Emily Foster",
      role: "Product Manager",
      company: "InnovateLab",
      content: "The professionalism and expertise demonstrated by the Tigat Tech team were outstanding. From initial consultation to final delivery, every aspect of their service exceeded our expectations. They truly understand modern business needs.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto">
            Discover transformational we&apos;ve achieved with our esteemed clients and hear their stories of success, collaboration, and the transformative impact we&apos;ve had together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: "var(--tigat-primary)" }}>98%</div>
            <p className="text-slate-500">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: "var(--tigat-primary)" }}>4.9/5</div>
            <p className="text-slate-500">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: "var(--tigat-primary)" }}>150+</div>
            <p className="text-slate-500">Success Stories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;