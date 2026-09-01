type SectionLabelProps = {
  children: React.ReactNode;
  variant?: "default" | "blue";
};

export function SectionLabel({
  children,
  variant = "default",
}: SectionLabelProps) {
  const isBlue = variant === "blue";

  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${
          isBlue ? "bg-white" : "bg-(--color-primary)"
        }`}
      />

      <p
        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
          isBlue ? "text-white/80" : "text-(--color-ink-faint)"
        }`}
      >
        {children}
      </p>

      <span
        aria-hidden="true"
        className={`h-px w-10 ${
          isBlue ? "bg-white/30" : "bg-(--color-border-strong)"
        }`}
      />
    </div>
  );
}