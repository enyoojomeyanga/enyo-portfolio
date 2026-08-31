// Only real, disclosed work goes here. Do not add speculative,
// invented, or "coming soon" projects with fabricated details.
// Status reflects actual state: "built" | "building" | "exploring".

export type ProjectStatus = "built" | "building" | "exploring";

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
  },
];
