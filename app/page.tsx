import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 py-16">
      <p className="text-sm text-neutral-500 dark:text-neutral-400 tracking-widest uppercase">
        Software Engineer
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        Hi, I&apos;m Mugunthan.R 👋
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
        I build clean, fast, and accessible web applications. Passionate about great developer
        experience and minimal design.
      </p>
      <div className="flex gap-4 mt-2">
        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
