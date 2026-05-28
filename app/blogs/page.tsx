import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Thoughts on web development and software engineering.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
