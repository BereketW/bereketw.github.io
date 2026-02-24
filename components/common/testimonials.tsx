import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Anderson",
      role: "Entrepreneur",
      image: "/professional-man.png",
      rating: 5,
      text: "Tigat Tech has been instrumental in transforming our online presence. Their team's expertise in web development and design delivered a stunning and user-friendly e-commerce platform.",
    },
    {
      name: "Sarah Johnson",
      role: "CEO Boutique",
      image: "/professional-woman.png",
      rating: 5,
      text: "Working with Tigat Tech was a breeze. They understood our vision for a mobile app that streamlined our operations. The result exceeded our expectations.",
    },
    {
      name: "Emily Turner",
      role: "Founder EventMasters",
      image: "/professional-woman-2.png",
      rating: 5,
      text: "Tigat Tech developed a comprehensive booking and reservation system for our event management platform. Their attention to detail and commitment to excellence was evident throughout the project.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--tigat-primary)" }}
            ></div>
          </div>
          <h2 className="mb-4 text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-sm max-w-2xl mx-auto text-slate-500">
            Discover the experiences of our satisfied clients as they share
            stories of success, collaboration, and the transformative impact of
            choosing Tigat Tech
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
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

              <p className="text-sm leading-relaxed mb-4 text-slate-500">
                {testimonial.text}
              </p>

              <button
                className="text-sm font-semibold flex items-center gap-2"
                style={{ color: "var(--tigat-primary)" }}
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
          <p className="text-sm font-medium text-slate-700">
            We have 100+ Happy Customers
          </p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                style={{ backgroundColor: "var(--tigat-primary)" }}
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
