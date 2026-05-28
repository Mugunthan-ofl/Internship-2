import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
    >
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
        {project.description}
      </p>
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
    </Link>
  );
}
