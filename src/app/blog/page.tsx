// src/app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  categories: string[]; // always defined
};

type Props = {
  theme: 'default' | 'pink' | 'green';
};

export default function BlogPage({ theme }: Props) {
  const postsDir = path.join(process.cwd(), 'src/content/posts');
  const files = fs.readdirSync(postsDir);

  const posts: PostMeta[] = files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.(md|mdx)$/, ''),
        title: data.title,
        date: data.date,
        categories: data.categories ?? [], // always array
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // latest first

  const cardGradient =
    theme === 'pink'
      ? 'from-pink-50 via-pink-100 to-pink-200'
      : theme === 'green'
      ? 'from-green-50 via-green-100 to-green-200'
      : 'from-blue-50 via-purple-50 to-pink-50';

  return (
    <main aria-labelledby="blog-heading" className="max-w-4xl mx-auto p-6 md:p-8">
      <header>
        <h1 id="blog-heading" className="text-4xl font-bold mb-8 text-gradient">
          Blog
        </h1>
      </header>

      <section aria-label="Blog Posts" className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className={`bg-gradient-to-r ${cardGradient} rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 focus-within:ring-4 focus-within:ring-blue-400 animate-fadeIn`}
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={`Read full article: ${post.title}`}
              >
                {post.title}
              </Link>
            </h2>
            <time className="block text-gray-500 text-sm mb-3">{post.date}</time>

            {post.categories.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.categories.map((cat) => (
                  <li
                    key={cat}
                    className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 text-purple-800"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}