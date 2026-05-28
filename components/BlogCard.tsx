import Link from "next/link";
import type { Blog } from "@/data/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="block border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
    >
      <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-1">{blog.date}</p>
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        {blog.title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{blog.summary}</p>
    </Link>
  );
}
