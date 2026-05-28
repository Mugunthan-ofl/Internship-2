import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return { title: `${blog.title} | MyBlog`, description: blog.description };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <article>
      <time className="text-sm text-zinc-400">{blog.date}</time>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{blog.title}</h1>
      <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
        {blog.description}
      </p>
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <div className="prose prose-zinc dark:prose-invert max-w-none whitespace-pre-line text-zinc-700 dark:text-zinc-300 leading-7">
        {blog.content}
      </div>
    </article>
  );
}
