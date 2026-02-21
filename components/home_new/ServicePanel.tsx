import { ReactNode } from "react";

interface ServicePanelProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  ctaLabel: string;
  ctaIcon: string;
  media: ReactNode;
  reverse?: boolean;
}

export default function ServicePanel({
  title,
  description,
  icon,
  tags,
  ctaLabel,
  ctaIcon,
  media,
  reverse = false,
}: ServicePanelProps) {
  return (
    <div
      className={`flex flex-col items-center gap-12 rounded-3xl bg-[#FAFAFA] p-8 md:p-12 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } dark:bg-[#121212]`}
    >
      <div className="flex-1 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(1,135,186,0.1)" }}>
              <span className="material-icons-round" style={{ color: "var(--tigat-primary)" }}>{icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          </div>
          <a
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 sm:inline-flex"
            href="#"
          >
            Book a Call
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: "var(--tigat-accent)" }}
            >
              <span className="material-icons-round text-xs">arrow_forward</span>
            </span>
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-medium text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <a
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:opacity-90 dark:shadow-none"
            href="#"
            style={{ backgroundColor: "var(--tigat-accent)", boxShadow: "0 4px 14px rgba(255,128,78,0.3)" }}
          >
            <span className="material-icons-round text-lg">{ctaIcon}</span>
            {ctaLabel}
          </a>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-center">{media}</div>
    </div>
  );
}
