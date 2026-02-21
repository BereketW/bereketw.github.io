import Image from "next/image";

const floatingServices = [
  {
    label: "Graphic Design",
    icon: "palette",
    position: "left-[10%] top-[40%]",
    delay: "animate-[float_6s_ease-in-out_3s_infinite]",
  },
  {
    label: "Webflow Development",
    icon: "code",
    position: "left-[20%] top-[60%]",
    delay: "animate-[float_6s_ease-in-out_infinite]",
  },
  {
    label: "Mobile App Development",
    icon: "smartphone",
    position: "left-[35%] top-[80%]",
    delay: "animate-[float_6s_ease-in-out_3s_infinite]",
  },
  {
    label: "Project Management",
    icon: "task_alt",
    position: "left-1/2 top-[70%] -translate-x-1/2",
    delay: "animate-[float_6s_ease-in-out_infinite]",
  },
  {
    label: "Web Design",
    icon: "desktop_windows",
    position: "right-[25%] top-[65%]",
    delay: "animate-[float_6s_ease-in-out_3s_infinite]",
  },
  {
    label: "Framer Development",
    icon: "layers",
    position: "right-[15%] top-[45%]",
    delay: "animate-[float_6s_ease-in-out_infinite]",
  },
  {
    label: "UI Design",
    icon: "brush",
    position: "right-[5%] top-[30%]",
    delay: "animate-[float_6s_ease-in-out_3s_infinite]",
  },
];

const mobileServices = [
  { label: "Graphic Design", icon: "palette" },
  { label: "Webflow", icon: "code" },
  { label: "App Dev", icon: "smartphone" },
  { label: "Web Design", icon: "desktop_windows" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl dark:bg-black" />
      <div className="pointer-events-none absolute right-20 top-20 -z-10 h-64 w-64 animate-[float_6s_ease-in-out_3s_infinite] rounded-full blur-3xl" style={{ backgroundColor: "rgba(255,128,78,0.1)" }} />
      <div className="pointer-events-none absolute bottom-20 left-20 -z-10 h-80 w-80 animate-[float_6s_ease-in-out_infinite] rounded-full blur-3xl" style={{ backgroundColor: "rgba(149,202,220,0.2)" }} />

  <div className="relative mx-auto mb-8 flex flex-wrap items-center justify-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white/90 px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--tigat-accent)" }} />
          Since 2023
        </div>
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden" style={{ boxShadow: "0 4px 14px rgba(1,135,186,0.2)" }}>
          <Image
            src="/t.png"
            alt="Tigat Tech Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white/90 px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          <span className="material-icons-round text-sm" style={{ color: "var(--tigat-primary)" }}>public</span>
          Based in Ethiopia
        </div>
      </div>

      <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
        Elevate Your Digital Presence with <span style={{ color: "var(--tigat-primary)" }}>Tigat Tech</span>
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg">
        We specialize in crafting cutting-edge websites and applications that resonate with
        your audience. Let us transform your vision into a captivating digital reality,
        setting your brand apart in the digital sphere.
      </p>

      <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          className="group inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all hover:opacity-90"
          href="#"
          style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}
        >
          <span className="material-icons-round text-sm">calendar_month</span>
          Schedule a Call
        </a>
        <a
          className="group inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 font-medium transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          href="#"
          style={{ borderColor: "var(--tigat-primary)", color: "var(--tigat-primary)" }}
        >
          View Projects
          <span className="material-icons-round text-sm transition-transform group-hover:translate-x-1" style={{ color: "var(--tigat-accent)" }}>
            arrow_forward
          </span>
        </a>
      </div>

      <div className="relative mx-auto hidden h-[400px] w-full max-w-5xl md:block md:h-[500px]">
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 300 150 200 250"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 350 200 300 300"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 450 250 400 350"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 600 250 650 350"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 750 200 800 300"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
          <path
            className="stroke-slate-200 dark:stroke-slate-700"
            d="M512 100 Q 800 150 900 220"
            fill="none"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
        </svg>

        {floatingServices.map((service) => (
          <div
            key={service.label}
            className={`absolute ${service.position} ${service.delay}`}
          >
            <div className="flex cursor-default items-center gap-3 rounded-full border border-slate-100 bg-white/95 p-3 pr-6 shadow-lg transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(1,135,186,0.1)", color: "var(--tigat-primary)" }}>
                <span className="material-icons-round">{service.icon}</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {service.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid w-full grid-cols-2 gap-4 md:hidden">
        {mobileServices.map((service) => (
          <div
            key={service.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-white/95 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/90"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(1,135,186,0.1)", color: "var(--tigat-primary)" }}>
              <span className="material-icons-round">{service.icon}</span>
            </div>
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
