type SectionLabelProps = {
  children: React.ReactNode;
  number?: string;
};

export function SectionLabel({
  children,
  number,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--color-primary)">
      {number && (
        <span className="text-(--color-ink-faint)">
          {number}
        </span>
      )}

      <span className="h-px w-6 bg-(--color-primary)" />

      <span>{children}</span>
    </div>
  );
}