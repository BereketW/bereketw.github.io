import ServicesHero from "@/components/service/services-hero";
import DesignServices from "@/components/service/design-services";
import EngineeringServices from "@/components/service/engineering-services";
import ProjectManagementServices from "@/components/service/project-management-services";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import Footer from "@/components/common/footer";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <DesignServices />
      <EngineeringServices />
      <ProjectManagementServices />
      <FAQ />
      <Testimonials />
    </div>
  );
}
