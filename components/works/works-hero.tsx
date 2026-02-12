export default function WorksHero() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-28 items-center">
          {/* Left Content */}
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--apex-primary)" }}
              ></div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--apex-gray-medium)" }}
              >
                Our Portfolio
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--apex-gray-dark)" }}
            >
              Our Showcase of Work
            </h1>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--apex-gray-medium)" }}
            >
              Explore a showcase of our diverse works, where innovation meets
              execution, and each project tells a unique success story in the
              realm of digital excellence.
            </p>

            <button
              className="px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
              style={{ backgroundColor: "var(--apex-primary)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5" />
              </svg>
              Explore Our Work
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/portfolio-showcase-design-mockups.jpg"
              alt="Portfolio showcase"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
