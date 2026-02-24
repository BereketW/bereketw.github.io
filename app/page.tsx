import HeroSection from "@/components/home_new/HeroSection";
import ServicesSection from "@/components/home_new/ServicesSection";
import WhyChooseUs from "@/components/home/why-choose-us";
import PortfolioShowcase from "@/components/home/portfolio-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />      {/* white */}
      <ServicesSection />  {/* #FAFAFA panels */}
      <WhyChooseUs />      {/* white */}
      <PortfolioShowcase />{/* slate-50 */}
      <FAQ />              {/* white */}
      <Testimonials />     {/* slate-50 */}
    </main>
  );
}
