import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Anderson",
      role: "Entrepreneur",
      image: "/professional-man.png",
      rating: 5,
      text: "Apex has been instrumental in transforming our online presence. Their team's expertise in web development and design is stunning and user-friendly e-commerce platform.",
    },
    {
      name: "Sarah Johnson",
      role: "CEO Boutique",
      image: "/professional-woman.png",
      rating: 5,
      text: "Working with Apex was a breeze. They understood our vision for a mobile app that streamlined our operations. The result exceeded our expectations.",
    },
    {
      name: "Emily Turner",
      role: "Founder EventMasters",
      image: "/professional-woman-2.png",
      rating: 5,
      text: "Apex developed a comprehensive booking and reservation system for our event management platform. Their attention to detail and commitment to excellence was evident throughout the project.",
    },
  ];

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--apex-primary)" }}
            ></div>
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--apex-gray-medium)" }}
          >
            Discover the experiences of our satisfied clients as they share
            stories of success, collaboration, and the transformative impact of
            choosing Apex
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 rounded-lg p-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--apex-gray-dark)" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--apex-gray-medium)" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 my-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                {testimonial.text}
              </p>

              <button
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: "var(--apex-primary)" }}
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            We have 100+ Happy Customers
          </p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "var(--apex-primary)" }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
