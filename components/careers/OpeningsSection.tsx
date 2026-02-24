"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Pipette, Code2, LayoutGrid, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OpeningsSection = () => {
    const openings = [
        {
            icon: Pipette,
            title: "UX/UI Designer",
            location: "India",
            description: "If you have a keen eye for aesthetics, a deep understanding of user experience, and a passion for creating intuitive interfaces, we would love to hear from you."
        },
        {
            icon: Code2,
            title: "Full Stack Developer",
            location: "India",
            description: "If you're a coding wizard with expertise in front-end and back-end development, and have experience with frameworks like React, Angular, or Node.js,."
        },
        {
            icon: LayoutGrid,
            title: "Project Manager",
            location: "India",
            description: "If you excel at coordinating teams, managing timelines, and ensuring successful project delivery, we invite you to join our project management team."
        }
    ];

    return (
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
                        <Briefcase className="w-8 h-8" style={{ color: "var(--tigat-primary)" }} />
                        <div className="absolute inset-0 blur-xl opacity-20 rounded-full" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
                    </div>

                    <h2 className="text-slate-900 mb-6 tracking-tight">
                        Discover Thrilling Opportunities
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Dive into our current job openings and embark on a journey to join a team that values innovation, collaboration, and individual growth in the ever-evolving landscape of digital excellence.
                    </p>
                </motion.div>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {openings.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-start text-left h-full"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6 relative group-hover:scale-110 transition-transform duration-300 shrink-0" style={{ backgroundColor: "var(--tigat-primary)", boxShadow: "0 4px 14px rgba(1,135,186,0.3)" }}>
                                <job.icon className="text-white w-8 h-8" />
                                <div className="absolute inset-0 blur-xl opacity-30 rounded-full -z-10" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-slate-900 mb-1">{job.title}</h3>
                                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{job.location}</span>
                            </div>

                            <p className="text-gray-500 leading-relaxed text-sm mb-8 flex-grow">
                                {job.description}
                            </p>

                            <button className="inline-flex items-center text-gray-900 font-semibold text-sm transition-colors group/btn">
                                Apply Now
                                <div className="ml-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
                                    <ArrowRight className="w-3 h-3 transition-colors" style={{ color: "var(--tigat-primary)" }} />
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* View All Openings Button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button className="text-white px-8 py-6 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105 hover:opacity-90 flex items-center gap-2 mx-auto" style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}>
                        <ShoppingBag className="w-5 h-5" />
                        View all Openings
                    </Button>
                </motion.div>

            </div>
        </section>
    );
};

export default OpeningsSection;
