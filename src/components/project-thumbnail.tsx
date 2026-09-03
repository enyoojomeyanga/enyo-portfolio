import type { ThumbnailVariant } from "@/content/projects";

function TerminalThumbnail() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-1.5 overflow-hidden bg-(--color-dark) px-3 py-2.5">
      <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-(--color-primary)" />

      <span className="h-1.5 w-3/5 rounded-full bg-white/35" />
      <span className="h-1.5 w-2/5 rounded-full bg-(--color-primary)/80" />
      <span className="h-1.5 w-4/5 rounded-full bg-white/15" />
      <span className="h-1.5 w-1/3 rounded-full bg-(--color-accent)/75" />

      <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/35">
        parse / transform
      </span>
    </div>
  );
}

function PortraitThumbnail() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-(--color-surface-soft)">
      <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-(--color-primary)/10" />

      <svg
        viewBox="0 0 48 48"
        className="h-2/3 w-2/3 text-(--color-primary)"
        aria-hidden="true"
      >
        <circle cx="24" cy="16" r="9" fill="currentColor" opacity="0.22" />
        <path
          d="M8 42c1-9 8-15 16-15s15 6 16 15"
          fill="currentColor"
          opacity="0.22"
        />
      </svg>
    </div>
  );
}

function AppMockupThumbnail() {
  return (
    <div className="flex h-full w-full gap-1.5 bg-(--color-dark-soft) p-2">
      <div className="flex w-1/4 flex-col gap-1 rounded-sm bg-white/5 p-1">
        <span className="h-1 w-full rounded-full bg-(--color-primary)/80" />
        <span className="h-1 w-2/3 rounded-full bg-white/20" />
        <span className="h-1 w-2/3 rounded-full bg-white/20" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1.5">
        <span className="h-1.5 w-4/5 rounded-full bg-white/20" />
        <span className="h-1.5 w-3/5 rounded-full bg-(--color-primary)/75" />
        <span className="h-1.5 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

const VARIANTS: Record<ThumbnailVariant, () => React.ReactElement> = {
  terminal: TerminalThumbnail,
  portrait: PortraitThumbnail,
  "app-mockup": AppMockupThumbnail,
};

export function ProjectThumbnail({
  variant,
}: {
  variant: ThumbnailVariant;
}) {
  const Variant = VARIANTS[variant];

  return (
    <div
      className="
        h-16 w-24 shrink-0 overflow-hidden
        rounded-xl border border-(--color-border)
        shadow-sm
        transition-transform duration-200
        group-hover:scale-[1.025]
        sm:h-20 sm:w-28
      "
    >
      <Variant />
    </div>
  );
}