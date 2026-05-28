import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";

export function generateStaticParams() {
  return getAllBlogs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return { title: blog ? `${blog.title} — Alex Dev` : "Not Found" };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <article className="flex flex-col gap-8 max-w-2xl">
      <Link
        href="/blogs"
        className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        ← Back to Blog
      </Link>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-neutral-400 dark:text-neutral-500">{blog.date}</p>
        <h1 className="text-3xl font-bold tracking-tight">{blog.title}</h1>
        <p className="text-neutral-500 dark:text-neutral-400">{blog.summary}</p>
      </div>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{blog.content}</p>
    </article>
  );
}
