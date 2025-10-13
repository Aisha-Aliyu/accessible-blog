// src/app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const { remark } = await import('remark');
const html = (await import('remark-html')).default;

type Params = { slug: string };

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src/content/posts');
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => ({
    slug: filename.replace(/\.(md|mdx)$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = params;

  // Detect .mdx or .md
  const exts = ['.mdx', '.md'];
  let filePath = '';
  for (const ext of exts) {
    const pathAttempt = path.join(process.cwd(), 'src/content/posts', `${slug}${ext}`);
    if (fs.existsSync(pathAttempt)) {
      filePath = pathAttempt;
      break;
    }
  }
  if (!filePath) throw new Error(`Post not found: ${slug}`);

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-8" aria-labelledby="post-title">
      <article className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow-lg p-6 md:p-10 animate-fadeIn">
        <header>
          <h1 id="post-title" className="text-4xl font-extrabold mb-2 text-gradient">
            {data.title}
          </h1>
          <time className="text-gray-500 text-sm mb-6 block">{data.date}</time>
        </header>

        <section
          className="prose prose-lg max-w-full"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}