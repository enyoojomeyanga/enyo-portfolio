type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-(--color-primary)"
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-(--color-ink-faint)">
        {children}
      </p>
      <span
        aria-hidden="true"
        className="h-px w-10 bg-(--color-border-strong)"
      />
    </div>
  );
}