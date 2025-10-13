export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full border-t bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-[var(--muted)] text-center">
        © {new Date().getFullYear()} Aisha. Accessible demo — built with Next.js & Tailwind.
      </div>
    </footer>
  );
}