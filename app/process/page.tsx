import ProcessHero from "@/components/process/process-hero";
import ProcessSteps from "@/components/process/process-step";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import { getTestimonials } from "@/lib/tigat-api";

export default async function ProcessPage() {
  const testimonials = await getTestimonials();
  const testimonialCards = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <main>
      <ProcessHero />
      <ProcessSteps />
      <FAQ />
      <Testimonials testimonials={testimonialCards} />
    </main>
  );
}
