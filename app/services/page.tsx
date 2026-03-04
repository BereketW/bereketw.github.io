import ServicesHero from "@/components/service/services-hero";
import DesignServices from "@/components/service/design-services";
import EngineeringServices from "@/components/service/engineering-services";
import ProjectManagementServices from "@/components/service/project-management-services";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import { getTestimonials } from "@/lib/tigat-api";

export default async function ServicesPage() {
  const testimonials = await getTestimonials();
  const testimonialCards = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <div>
      <ServicesHero />
      <DesignServices />
      <EngineeringServices />
      <ProjectManagementServices />
      <FAQ />
      <Testimonials testimonials={testimonialCards} />
    </div>
  );
}
