import type { ProjectStatus } from "@/content/projects";

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; color: string; bg: string }
> = {
  built: {
    label: "Built",
    color: "var(--color-status-built)",
    bg: "var(--color-status-built-bg)",
  },
  building: {
    label: "Building",
    color: "var(--color-status-building)",
    bg: "var(--color-status-building-bg)",
  },
  exploring: {
    label: "Exploring",
    color: "var(--color-status-exploring)",
    bg: "var(--color-status-exploring-bg)",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-black/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
      style={{
        color: config.color,
        backgroundColor: config.bg,
      }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "building" ? "status-building-dot" : ""
        }`}
        style={{ backgroundColor: config.color }}
        aria-hidden="true"
      />

      {config.label}
    </span>
  );
}