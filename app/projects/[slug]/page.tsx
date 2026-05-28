import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Alex Dev` : "Not Found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="flex flex-col gap-8 max-w-2xl">
      <Link
        href="/projects"
        className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        ← Back to Projects
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-neutral-500 dark:text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{project.content}</p>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
        >
          GitHub →
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Live Demo →
        </a>
      </div>
    </article>
  );
}
