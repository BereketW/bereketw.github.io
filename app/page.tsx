import HomeHero from "@/components/home/home-hero";
import ServicesOverview from "@/components/home/services-overview";
import WhyChooseUs from "@/components/home/why-choose-us";
import PortfolioShowcase from "@/components/home/portfolio-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HomeHero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioShowcase />
      <FAQ />
      <Testimonials />
    </main>
  );
}
