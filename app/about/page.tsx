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
import Testimonials from '@/components/common/testimonials';
import { getTeamMembers, getTestimonials } from '@/lib/tigat-api';
// import Footer from '@/components/Footer';

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();
  const testimonials = await getTestimonials();

  const teamCards = teamMembers.map((member) => ({
    name: member.name,
    role: member.role,
    handle:
      member.twitter ||
      member.linkedin ||
      `@${member.name.toLowerCase().replace(/\s+/g, "")}`,
    image: member.avatarUrl,
  }));

  const commonTestimonials = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <div className=" bg-background">
      {/* <Navigation /> */}
      <main className="relative mt-10 bg-white">
        <HeroSection />
        <TimelineSection />
        <TeamSection teamMembers={teamCards} />
        <FAQSection />
        {/* <TestimonialsSection />
         */}
         <Testimonials testimonials={commonTestimonials} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}