import { Blog } from "@/lib/blogs";

export const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "A beginner-friendly introduction to Next.js App Router and how to build modern web apps.",
    content: `Next.js is a React framework that gives you the building blocks to create fast, production-ready web applications.

With the App Router introduced in Next.js 13, you can use React Server Components by default, which means less JavaScript shipped to the client and faster page loads.

Key Concepts:

File-based Routing — Every file inside the app/ directory becomes a route automatically.

Server Components — Components are server-rendered by default. Add "use client" only when you need interactivity.

Layouts — Shared UI like navbars and footers live in layout.tsx and wrap all child pages automatically.

Getting Started:

Run the following to scaffold a new project:

  npx create-next-app@latest my-app

From there, edit app/page.tsx and you're building.`,
    date: "2025-01-10",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    description:
      "Learn how utility-first CSS with Tailwind can speed up your UI development workflow.",
    content: `Tailwind CSS is a utility-first CSS framework that lets you build designs directly in your markup without writing custom CSS.

Why Utility-First?

Instead of writing a class like .card and defining its styles separately, you compose styles inline using utility classes. This keeps your styles co-located with your markup and eliminates the need to context-switch between files.

Responsive Design:

Tailwind makes responsive design intuitive with breakpoint prefixes like sm:, md:, and lg:. For example, you can write text-sm md:text-base lg:text-lg to scale text across screen sizes.

Dark Mode:

Enable dark mode variants with the dark: prefix. Tailwind v4 ships with zero-config setup — just import it and go.`,
    date: "2025-02-14",
  },
  {
    slug: "typescript-tips-for-react",
    title: "TypeScript Tips for React Developers",
    description:
      "Practical TypeScript patterns that make your React components safer and easier to maintain.",
    content: `TypeScript adds static typing to JavaScript, catching bugs at compile time before they reach production.

Typing Props:

Always define an interface or type for your component props. This gives you autocomplete, inline documentation, and compile-time safety when passing data between components.

Typing useState:

Provide a generic when the initial value does not make the type obvious. For example: useState<User | null>(null) makes it clear the state can be a User object or null.

Typing async Functions:

Always annotate the return type of async data-fetching functions. For example: async function getUser(id: string): Promise<User>. This ensures callers know exactly what shape of data to expect.

These small habits dramatically reduce runtime errors and improve IDE autocomplete across your entire codebase.`,
    date: "2025-03-05",
  },
  {
    slug: "understanding-react-server-components",
    title: "Understanding React Server Components",
    description:
      "Dive into how React Server Components work and when to use them in your Next.js app.",
    content: `React Server Components (RSC) allow you to render components entirely on the server, sending only HTML to the client with no JavaScript bundle for that component.

Server vs Client Components:

Server Components run on the server, can fetch data directly, but cannot use hooks or browser APIs. Client Components run in the browser, support hooks and event listeners, but add to the JavaScript bundle.

When to Use Each:

Use Server Components (the default in Next.js App Router) for fetching data from a database or API, accessing backend resources, and rendering static or mostly-static content.

Use Client Components (marked with "use client") for event listeners like onClick and onChange, React hooks like useState and useEffect, and browser-only APIs.

Example:

In Next.js App Router, a page like app/blogs/page.tsx is a Server Component by default. You can use async/await directly in the component to fetch data — no useEffect, no loading state, no client-side fetch needed.`,
    date: "2025-04-22",
  },
];
