import ProcessHero from "@/components/process/process-hero";
import ProcessSteps from "@/components/process/process-step";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <ProcessSteps />
      <FAQ />
      <Testimonials />
    </main>
  );
}
