import type { ThumbnailVariant } from "@/content/projects";

// Lightweight placeholder graphics for the "Selected work" thumbnails.
// Swap these out for real screenshots when they're ready — each variant
// is self-contained CSS/SVG so there's no image asset to manage.

function TerminalThumbnail() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1.5 bg-(--color-dark) px-3 py-2.5">
      <span className="h-1.5 w-3/5 rounded-full bg-(--color-signal)/70" />
      <span className="h-1.5 w-2/5 rounded-full bg-(--color-primary)/60" />
      <span className="h-1.5 w-4/5 rounded-full bg-(--color-ink-inverse)/25" />
      <span className="h-1.5 w-1/3 rounded-full bg-(--color-accent)/60" />
    </div>
  );
}

function PortraitThumbnail() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-(--color-surface-soft)">
      <svg
        viewBox="0 0 48 48"
        className="h-2/3 w-2/3 text-(--color-ink-faint)"
        aria-hidden="true"
      >
        <circle cx="24" cy="16" r="9" fill="currentColor" opacity="0.35" />
        <path
          d="M8 42c1-9 8-15 16-15s15 6 16 15"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

function AppMockupThumbnail() {
  return (
    <div className="flex h-full w-full gap-1.5 bg-(--color-dark-soft) p-2">
      <div className="flex w-1/4 flex-col gap-1 rounded-sm bg-(--color-ink-inverse)/10 p-1">
        <span className="h-1 w-full rounded-full bg-(--color-primary)/60" />
        <span className="h-1 w-2/3 rounded-full bg-(--color-ink-inverse)/25" />
        <span className="h-1 w-2/3 rounded-full bg-(--color-ink-inverse)/25" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5">
        <span className="h-1.5 w-4/5 rounded-full bg-(--color-ink-inverse)/25" />
        <span className="h-1.5 w-3/5 rounded-full bg-(--color-accent)/60" />
        <span className="h-1.5 w-2/3 rounded-full bg-(--color-ink-inverse)/15" />
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
    <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-(--color-border) sm:h-20 sm:w-28">
      <Variant />
    </div>
  );
}