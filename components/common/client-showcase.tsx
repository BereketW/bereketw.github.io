"use client";

export default function ClientsShowcase() {
  const clients = [
    { name: "Twitch", logo: "M8 3h2v8h-2V3zm5 0h2v8h-2V3zm5 0h2v8h-2V3z" },
    {
      name: "Spotify",
      logo: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.7 14.4c-3.2-2-7.6-2.4-12.6-1.3-.5.1-1-.3-1.1-.8-.1-.5.3-1 .8-1.1 5.3-1.1 10.1-.7 13.6 1.5.4.3.6.9.3 1.3-.2.4-.8.6-1.3.3zm1-2.8c-.4.5-1.1.7-1.7.3-3.7-2.3-9.3-2.9-13.7-1.6-.6.2-1.3-.1-1.5-.7-.2-.6.1-1.3.7-1.5 4.8-1.4 10.9-.7 15.1 1.8.6.4.8 1.1.4 1.7zm.1-2.9c-4.4-2.6-11.7-2.9-15.9-1.6-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6 4.7-1.4 12.5-1 17.5 1.8.6.4.9 1.1.5 1.7-.4.6-1.1.9-1.7.5z",
    },
    {
      name: "Behance",
      logo: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z",
    },
    {
      name: "Dribbble",
      logo: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z",
    },
  ];

  return (
    <section className="py-2 md:py-2 bg-white">
      <div className="max-w-3xl mx-auto ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          {/* Title */}
          <h2
            className="text-[10px] md:text-[20px] flex mx-auto font-medium"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Our Clients
          </h2>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center px-6 py-4 rounded-lg transition-all hover:shadow-md"
                style={{
                  backgroundColor: "var(--apex-gray-light)",
                  //   border: "1px solid #e8e8e8",
                }}
              >
                <span
                  className="text-lg md:text-xl font-semibold"
                  style={{ color: "var(--apex-primary)" }}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
