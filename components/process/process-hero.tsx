export default function ProcessHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--apex-primary)" }}
            ></div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--apex-gray-dark)" }}
          >
            Our Strategic Process Unveiled
          </h1>

          {/* Description */}
          <p
            className="text-base max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--apex-gray-medium)" }}
          >
            Navigate the seamless pathway to project commencement, where clarity
            meets collaboration, and your vision transforms into a strategic
            roadmap for success.
          </p>
        </div>
      </div>
    </section>
  );
}
