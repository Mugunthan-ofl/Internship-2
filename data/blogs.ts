export type Blog = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    summary: "A beginner-friendly introduction to building apps with the Next.js App Router.",
    date: "2025-01-10",
    content:
      "Next.js is a React framework that gives you the best developer experience with all the features you need for production. The App Router introduced in v13 uses React Server Components by default, enabling faster page loads and simpler data fetching patterns. In this post we walk through setting up a project, creating pages, and deploying to Vercel.",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    summary: "Tips and patterns for writing clean, maintainable utility-first CSS.",
    date: "2025-02-14",
    content:
      "Tailwind CSS is a utility-first framework that lets you build any design directly in your markup. Instead of writing custom CSS, you compose small utility classes. This post covers responsive design, dark mode, component extraction with @apply, and how to keep your class lists readable as projects grow.",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    summary: "Practical TypeScript patterns every developer should know.",
    date: "2025-03-22",
    content:
      "TypeScript adds static typing to JavaScript, catching bugs at compile time rather than runtime. This post covers the most impactful patterns: strict mode, utility types like Partial and Pick, discriminated unions, and how to type async functions and API responses safely.",
  },
];
