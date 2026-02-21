import HeroSection from "@/components/home_new/HeroSection";
import ServicesSection from "@/components/home_new/ServicesSection";
import WhyChooseUs from "@/components/home/why-choose-us";
import PortfolioShowcase from "@/components/home/portfolio-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioShowcase />
      <FAQ />
      <Testimonials />
    </main>
  );
}
