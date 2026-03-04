import HeroSection from "@/components/home_new/HeroSection";
import ServicesSection from "@/components/home_new/ServicesSection";
import WhyChooseUs from "@/components/home/why-choose-us";
import PortfolioShowcase from "@/components/home/portfolio-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import { getProjects, getTestimonials } from "@/lib/tigat-api";

export default async function Home() {
  const projects = await getProjects();
  const testimonials = await getTestimonials();

  const portfolioProjects = projects.slice(0, 3).map((project) => ({
    title: project.title,
    category: project.category || "Project",
    subcategory: project.tags?.[0] || project.status || "Case Study",
    image: project.coverImage || "/placeholder.svg",
  }));

  const testimonialCards = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />      {/* white */}
      <ServicesSection />  {/* #FAFAFA panels */}
      <WhyChooseUs />      {/* white */}
      <PortfolioShowcase projects={portfolioProjects} />{/* slate-50 */}
      <FAQ />              {/* white */}
      <Testimonials testimonials={testimonialCards} />     {/* slate-50 */}
    </main>
  );
}
