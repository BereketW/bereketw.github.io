"use client";

import React from 'react';
// import { motion } from 'framer-motion';
// import Navigation from '@/components/Navigation';
// import HeroSection from '@/components/about/HeroSection';
// import StatsSection from '@/components/about/StatsSection';
// import TimelineSection from '@/components/about/TimelineSection';
// import TeamSection from '@/components/about/TeamSection';
// import FAQSection from '@/components/about/FAQSection';
// import TestimonialsSection from '@/components/about/TestimonialsSection';
// import Footer from '@/components/Footer';
// import Navigation from '@/components/Navigation';
import HeroSection from '@/components/about/HeroSection';
import TimelineSection from '@/components/about/TimelineSection';
import TeamSection from '@/components/about/TeamSection';
import FAQSection from '@/components/about/FAQSection';
import TestimonialsSection from '@/components/about/TestimonialsSection';
import Testimonials from '@/components/common/testimonials';
// import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className=" bg-background">
      {/* <Navigation /> */}
      <main className="relative mt-10 bg-white">
        <HeroSection />
        <TimelineSection />
        <TeamSection />
        <FAQSection />
        {/* <TestimonialsSection />
         */}
         <Testimonials/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}