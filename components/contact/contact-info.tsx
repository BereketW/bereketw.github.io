import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactInfo() {
  const contactItems = [
    {
      title: "You can email us here",
      value: "tigattech@gmail.com",
      icon: Mail,
    },
    {
      title: "Give us a call on",
      value: "+251934424244",
      icon: Phone,
    },
    {
      title: "Office Hours",
      value: "8:00 am - 6:00 pm",
      icon: Clock,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white text-left p-6 rounded-lg border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p
                      className="text-sm mb-2"
                      style={{ color: "var(--apex-gray-medium)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-semibold text-lg"
                      style={{ color: "var(--apex-gray-dark)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4"
                    style={{ backgroundColor: "var(--apex-primary)" }}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
