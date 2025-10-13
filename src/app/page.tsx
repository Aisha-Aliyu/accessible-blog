import Link from "next/link";

export default function HomePage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 py-16 text-[var(--text)]">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] animate-fadeIn">
        Welcome to the Accessible Blog & Gallery
      </h1>

      <p className="text-lg mb-10 leading-relaxed animate-fadeIn">
        This platform is designed to showcase modern web development best practices, including{" "}
        <strong className="text-[var(--primary)]">accessibility</strong>,{" "}
        <strong className="text-[var(--accent)]">performance optimization</strong>, and{" "}
        <strong className="text-[var(--primary)]">responsive design</strong>. Everything here follows WCAG guidelines and uses semantic HTML to ensure a smooth experience for everyone.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-md text-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] transition-all duration-300"
        >
          Visit the Blog
        </Link>

        <Link
          href="/gallery"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-white rounded-md text-center hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] transition-all duration-300"
        >
          View the Gallery
        </Link>
      </div>
    </main>
  );
}