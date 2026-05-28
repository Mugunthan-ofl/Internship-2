import Link from "next/link";
import { Blog } from "@/lib/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group block">
      <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600">
        <time className="text-xs text-zinc-400">{blog.date}</time>
        <h2 className="mt-2 text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {blog.title}
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {blog.description}
        </p>
      </article>
    </Link>
  );
}
