import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MyBlog
        </Link>
        <Link
          href="/blogs"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
}
