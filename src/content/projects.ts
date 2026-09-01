// Only real, disclosed work goes here. Do not add speculative,
// invented, or "coming soon" projects with fabricated details.
// Status reflects actual state: "built" | "building" | "exploring".

export type ProjectStatus = "built" | "building" | "exploring";

// Controls which placeholder thumbnail is rendered on the homepage
// "Selected work" list until real screenshots are supplied.
export type ThumbnailVariant = "terminal" | "portrait" | "app-mockup";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  learned: string;
  improve: string;
  // TODO(confirm): add real repo link when ready to share
  repoUrl: string | null;
  thumbnail: ThumbnailVariant;
};

export const projects: Project[] = [
  {
    slug: "go-reloaded",
    title: "Go-Reloaded",
    status: "built",
    stack: ["Go"],
    summary:
      "A text-transformation tool built to practice string parsing, tokenization, and command handling in Go.",
    problem:
      "Learning Go by reading isn't the same as learning it by building something that has to handle real edge cases in text input.",
    approach:
      "Built a program that reads a text file and applies a set of transformation commands (case changes, number formatting, punctuation fixes) using Go's standard library rather than external parsing packages.",
    implementation:
      "Implemented tokenization and rule-based text processing, working through edge cases like punctuation spacing and command ordering by hand.",
    result:
      "A working command-line tool that correctly applies the required transformations. No performance benchmarks were measured — this was a learning-stage project.",
    learned:
      "Got comfortable with Go's approach to strings, slices, and error handling, and with reading a spec closely enough to catch edge cases before they became bugs.",
    improve:
      "Would restructure the parsing logic into smaller, independently testable functions, and add unit tests rather than relying on manual verification.",
    repoUrl: null,
    thumbnail: "terminal",
  },
  {
    slug: "ascii-art-generator",
    title: "ASCII-Art Generator",
    status: "built",
    stack: ["Go"],
    summary:
      "A command-line tool that renders input text as ASCII art using different letter banners.",
    problem:
      "Wanted a project that combined file I/O, string manipulation, and a bit of creative output — something more visual than a typical CLI exercise.",
    approach:
      "Parsed banner font files into character maps, then mapped input strings onto those characters line by line to build the final output.",
    implementation:
      "Handled multi-line rendering, newline characters in input, and different banner styles selectable via command-line flags.",
    result:
      "A functioning generator that renders text in multiple ASCII banner styles from the terminal.",
    learned:
      "Practiced working with file parsing and 2D character grids, and thinking carefully about how input variations (like newlines) affect output.",
    improve:
      "Would add support for custom banner files and clearer error messages for invalid input.",
    repoUrl: null,
    thumbnail: "portrait",
  },
  // TODO(confirm): update this entry as the project develops — details below
  // are an honest snapshot of a project still in progress, not a finished
  // case study.
  {
    slug: "ai-study-companion",
    title: "AI Study Companion",
    status: "building",
    stack: ["Python", "AI", "In Progress"],
    summary:
      "An AI-powered assistant that helps learners study smarter and stay consistent.",
    problem:
      "Studying effectively is hard to sustain alone — people lose track of what to review, when, and whether they're actually retaining it.",
    approach:
      "Building an assistant that turns study material into structured review sessions and nudges the learner to stay consistent over time.",
    implementation:
      "Work in progress — currently building the core study-session and review logic in Python.",
    result:
      "Not yet complete. No results to report while the core functionality is still being built.",
    learned:
      "Still early, but already learning a lot about structuring an AI-assisted workflow around a real, recurring habit.",
    improve:
      "Too early to say — will revisit once the first working version is in daily use.",
    repoUrl: null,
    thumbnail: "app-mockup",
  },
  // TODO(confirm): update this entry as the project develops.
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    status: "building",
    stack: ["Next.js", "TypeScript"],
    summary:
      "This site — built and iterated on as a place to show real, disclosed work.",
    problem:
      "Needed a home for my work that's honest about what's actually built versus still in progress.",
    approach:
      "Built with Next.js and Tailwind, keeping content and status data separate from layout so it's easy to keep accurate over time.",
    implementation:
      "Ongoing — refining layout, content, and design as the site evolves alongside the work it describes.",
    result:
      "Live and evolving. Not a finished, static artifact.",
    learned:
      "Learning how to keep a personal site honest and low-maintenance rather than over-designed.",
    improve:
      "Will keep refining structure and content as more real projects are ready to show.",
    repoUrl: null,
    thumbnail: "app-mockup",
  },
];