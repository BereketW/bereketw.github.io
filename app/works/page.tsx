import WorksHero from "@/components/works/works-hero";
import WorksShowcase from "@/components/works/works-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import Footer from "@/components/common/footer";

export default function WorksPage() {
  return (
    <main className="min-h-screen ">
      <WorksHero />
      <WorksShowcase />
      <FAQ />
      <Testimonials />
    </main>
  );
}
