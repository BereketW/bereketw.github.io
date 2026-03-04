import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import { getTestimonials } from "@/lib/tigat-api";

export default async function Contact() {
  const testimonials = await getTestimonials();
  const testimonialCards = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <main className="min-h-screen">
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <Testimonials testimonials={testimonialCards} />
    </main>
  );
}
