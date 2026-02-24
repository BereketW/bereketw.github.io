"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Leaf, Star } from 'lucide-react';
import Image from 'next/image';

const CareersHero = () => {
    const features = [
        {
            icon: Briefcase,
            title: "Impactful Projects",
            description: "At Tigat Tech, you'll have the opportunity to work on exciting and impactful projects."
        },
        {
            icon: Leaf,
            title: "Supportive Environment",
            description: "Environment: We foster a collaborative and supportive work environment."
        },
        {
            icon: Star,
            title: "Continuous Learning",
            description: "We provide opportunities for continuous learning, whether it's through workshops."
        }
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Image Container */}
                <div className="relative mb-24">
                    <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden relative shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVybiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Modern Office"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Overlapping Logo */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <div className="w-32 h-32 bg-white rounded-full p-3 shadow-2xl flex items-center justify-center">
                            <div className="w-full h-full rounded-full flex items-center justify-center shadow-inner overflow-hidden" >
                                <Image
                                    src="/t.png"
                                    alt="Tigat Tech"
                                    width={80}
                                    height={80}
                                    className="object-contain rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    className="text-slate-900 mb-6"
                    >
                        Join Our Team: Ignite Your Career
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 leading-relaxed"
                    >
                        Discover the reasons why working at Tigat Tech is more than a job—it's an opportunity to be part of a dynamic team, unleash your potential, and contribute to shaping the future of digital innovation.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-8 relative group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "var(--tigat-primary)", boxShadow: "0 4px 14px rgba(1,135,186,0.3)" }}>
                                <feature.icon className="text-white w-9 h-9" />
                                <div className="absolute inset-0 blur-xl opacity-30 rounded-full -z-10" style={{ backgroundColor: "var(--tigat-primary)" }}></div>
                            </div>
                            <h3 className="text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm px-4">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CareersHero;
