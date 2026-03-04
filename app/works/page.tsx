import WorksHero from "@/components/works/works-hero";
import WorksShowcase from "@/components/works/works-showcase";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import { getProjects, getTestimonials } from "@/lib/tigat-api";

export default async function WorksPage() {
  const projects = await getProjects();
  const testimonials = await getTestimonials();

  const showcaseProjects = projects.map((project, index) => {
    const tags = project.tags?.length ? project.tags : [project.category || "Web Design"];
    const type =
      tags.find((tag) => tag.toLowerCase().includes("design")) ||
      tags.find((tag) => tag.toLowerCase().includes("development")) ||
      tags[0] ||
      "Web Design";

    return {
      id: project.id || index,
      title: project.title,
      category: project.category || "Project",
      type,
      image: project.coverImage || "/placeholder.svg",
      tags,
    };
  });

  const testimonialCards = testimonials.slice(0, 3).map((testimonial) => ({
    name: testimonial.name,
    role: testimonial.role,
    image: testimonial.avatarUrl || "/professional-man.png",
    rating: testimonial.rating || 5,
    text: testimonial.review || "",
  }));

  return (
    <main className="min-h-screen ">
      <WorksHero />
      <WorksShowcase projects={showcaseProjects} />
      <FAQ />
      <Testimonials testimonials={testimonialCards} />
    </main>
  );
}
