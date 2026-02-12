import Header from "@/components/common/header";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import FAQ from "@/components/common/faq";
import Testimonials from "@/components/common/testimonials";
import Footer from "@/components/common/footer";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <Testimonials />
    </main>
  );
}
