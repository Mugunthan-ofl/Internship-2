import { getAllBlogs } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Blogs | MyBlog",
};

export default async function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">All Posts</h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        {blogs.length} articles on web development and beyond.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
