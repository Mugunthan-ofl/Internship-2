import { blogs } from "@/data/blogs";

export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
};

export function getAllBlogs(): Blog[] {
  return blogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
