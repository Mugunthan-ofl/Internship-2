import { blogs, type Blog } from "@/data/blogs";

export function getAllBlogs(): Blog[] {
  return blogs;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
