import ServicePanel from "./ServicePanel";

/* ───────────── Design hub diagram ───────────── */
function DesignDiagram() {
  /* Satellite tools around the central hub */
  const satellites = [
    { label: "Xd", x: 75, y: 10, color: "#e74c8b" },
    { label: "Ai", x: 95, y: 50, color: "#ff9a00" },
    { label: "Ps", x: 75, y: 90, color: "#31a8ff" },
    { icon: "gesture", x: 5, y: 30 },
    { icon: "layers", x: 5, y: 70 },
  ];
  const cx = 50,
    cy = 50; // centre %

  return (
    <div className="relative w-full max-w-md aspect-square rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-[#1E1E1E]">
      {/* SVG connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {satellites.map((s, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={s.x}
            y2={s.y}
            stroke="var(--tigat-accent)"
            strokeWidth="0.6"
            opacity="0.45"
          />
        ))}
      </svg>

      {/* Centre hub */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg md:h-28 md:w-28"
        style={{
          background:
            "linear-gradient(135deg, var(--tigat-accent), var(--tigat-accent-dark))",
          boxShadow: "0 8px 30px rgba(255,128,78,0.35)",
        }}
      >
        <span className="material-icons-round text-4xl md:text-5xl">
          auto_fix_high
        </span>
      </div>

      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <div
          key={i}
          className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-md dark:border-slate-700 dark:bg-[#1E1E1E]"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)" }}
        >
          {s.label ? (
            <span className="text-xs font-bold" style={{ color: s.color ?? "var(--tigat-primary)" }}>
              {s.label}
            </span>
          ) : (
            <span className="material-icons-round text-base" style={{ color: "var(--tigat-accent)" }}>
              {s.icon}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ───────────── Engineering hub diagram ───────────── */
function EngineeringDiagram() {
  const satellites = [
    { icon: "code", x: 20, y: 10 },
    { icon: "terminal", x: 80, y: 10 },
    { icon: "storage", x: 90, y: 55 },
    { icon: "api", x: 75, y: 90 },
    { icon: "cloud", x: 25, y: 90 },
    { icon: "dns", x: 10, y: 55 },
  ];
  const cx = 50,
    cy = 50;

  return (
    <div className="relative w-full max-w-md aspect-square rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-[#1E1E1E]">
      {/* grid bg */}
      <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[20px_20px]" />

      {/* SVG connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {satellites.map((s, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={s.x}
            y2={s.y}
            stroke="var(--tigat-primary)"
            strokeWidth="0.5"
            opacity="0.35"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      {/* Centre hub */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg animate-[spin_20s_linear_infinite] md:h-28 md:w-28"
        style={{
          background:
            "linear-gradient(180deg, var(--tigat-primary-light), var(--tigat-primary))",
          boxShadow: "0 8px 30px rgba(1,135,186,0.3)",
        }}
      >
        <span className="material-icons-round text-4xl md:text-5xl">
          settings
        </span>
      </div>

      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <div
          key={i}
          className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md dark:border-slate-700 dark:bg-[#1E1E1E]"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)" }}
        >
          <span
            className="material-icons-round text-base"
            style={{ color: "var(--tigat-primary)" }}
          >
            {s.icon}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ───────────── Project‑management hub diagram ───────────── */
function ProjectManagementDiagram() {
  const satellites = [
    { icon: "event_note", x: 15, y: 15 },
    { icon: "group", x: 85, y: 15 },
    { icon: "bar_chart", x: 90, y: 60 },
    { icon: "task_alt", x: 70, y: 90 },
    { icon: "schedule", x: 30, y: 90 },
    { icon: "flag", x: 10, y: 60 },
  ];
  const cx = 50,
    cy = 50;

  return (
    <div className="relative w-full max-w-md aspect-square rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-[#1E1E1E]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {satellites.map((s, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={s.x}
            y2={s.y}
            stroke="var(--tigat-accent)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg md:h-28 md:w-28"
        style={{
          background:
            "linear-gradient(135deg, var(--tigat-primary), var(--tigat-accent))",
          boxShadow: "0 8px 30px rgba(1,135,186,0.25)",
        }}
      >
        <span className="material-icons-round text-4xl md:text-5xl">
          assignment
        </span>
      </div>

      {satellites.map((s, i) => (
        <div
          key={i}
          className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md dark:border-slate-700 dark:bg-[#1E1E1E]"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)" }}
        >
          <span
            className="material-icons-round text-base"
            style={{ color: "var(--tigat-accent)" }}
          >
            {s.icon}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
export default function ServicesSection() {
  return (
    <section className="w-full border-t border-slate-100 bg-white py-24 dark:border-slate-800 dark:bg-[#1E1E1E]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(1,135,186,0.1)" }}
          >
            <span className="material-icons-round" style={{ color: "var(--tigat-primary)" }}>
              star
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
            Discover Our Full Range of Services
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-400">
            Tigat Tech offers a diverse array of expertly crafted services, seamlessly
            merging creativity and technology to deliver solutions that exceed expectations
            and drive digital success.
          </p>
        </div>

        {/* ── Design ── */}
        <ServicePanel
          title="Design Services"
          icon="brush"
          description="At Tigat Tech, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand."
          tags={["UX Design", "Graphic Design", "Branding", "Website Design"]}
          ctaLabel="View All Projects"
          ctaIcon="visibility"
          media={<DesignDiagram />}
        />

        {/* ── Engineering ── */}
        <ServicePanel
          reverse
          title="Engineering Services"
          icon="settings"
          description="Empowering progress through meticulous engineering services, we transform concepts into reality with precision and innovation."
          tags={["Angular", "Node.js", "Vue.js", "Django", "MySQL"]}
          ctaLabel="View All Expertise"
          ctaIcon="code"
          media={<EngineeringDiagram />}
        />

        {/* ── Project Management ── */}
        <ServicePanel
          title="Project Management"
          icon="assignment"
          description="Our experienced project management team ensures that your projects are delivered on time and within budget with clear communication every step of the way."
          tags={["Planning", "Execution", "Monitoring", "Delivery"]}
          ctaLabel="Learn More"
          ctaIcon="arrow_forward"
          media={<ProjectManagementDiagram />}
        />
      </div>
    </section>
  );
}
