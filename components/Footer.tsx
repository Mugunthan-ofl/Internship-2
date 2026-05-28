export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>© {new Date().getFullYear()} Nakulan S V</span>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
