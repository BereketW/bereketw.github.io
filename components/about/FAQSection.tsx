"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Tigat Tech provide?",
      answer: "We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, cloud services, and custom software development. Our team works collaboratively to deliver innovative solutions tailored to your business needs."
    },
    {
      question: "How does Tigat Tech help my business?",
      answer: "Tigat Tech empowers businesses through cutting-edge technology solutions that drive growth, improve efficiency, and enhance customer experiences. We analyze your unique requirements and create strategic implementations that deliver measurable results and competitive advantages in your industry."
    },
    {
      question: "What makes Tigat Tech different from others?",
      answer: "Our commitment to excellence sets us apart. We combine technical expertise with creative innovation, maintain transparent communication throughout projects, and focus on long-term partnerships rather than one-time engagements. Our agile methodology ensures rapid delivery without compromising quality."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications may require 3-6 months. We provide detailed project timelines during our initial consultation and maintain regular progress updates throughout development."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely! We offer comprehensive post-launch support including regular updates, security monitoring, performance optimization, bug fixes, and feature enhancements. Our maintenance packages are designed to keep your digital assets running smoothly and securely."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Queries, Clear Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in transparency and want to provide clear answers to the questions we&apos;re asked most frequently.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 shrink-0" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
                      <span className="font-bold text-sm" style={{ color: "var(--tigat-primary)" }}>{index + 1}</span>
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-12">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            If you couldn&apos;t find the answer you were looking for, don&apos;t hesitate to reach out to our team. We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-white px-8 py-3 rounded-full font-medium" style={{ backgroundColor: "var(--tigat-accent)" }}>
              Ask a Question
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full font-medium" style={{ borderColor: "var(--tigat-primary)", color: "var(--tigat-primary)" }}>
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;