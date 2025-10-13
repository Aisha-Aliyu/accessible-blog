export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  categories?: string[];
};

const posts: Post[] = [
  {
    slug: 'a11y-basics',
    title: 'Accessibility Basics: Keyboard & Screen Reader Friendly UI',
    date: '2023-10-21',
    excerpt: 'Make your interfaces usable to more people: keyboard nav, focus, ARIA, semantic markup.',
    content: `
## Why accessibility matters

Accessibility ensures your site works for everyone, including people using keyboards, screen readers, or other assistive tech.

### Keyboard Navigation

- ✅ Ensure all interactive elements are reachable via Tab
- ✅ Focus styles clearly indicate active elements
- ✅ Skip links for faster navigation

### Screen Reader Support

- ✅ Semantic HTML: headings, lists, buttons
- ✅ ARIA labels for custom components
- ✅ Proper landmarks for regions

<Highlight code={\`<button aria-label="Close modal">✖</button>\`} language="html" />
`,
    categories: ['Accessibility', 'Web Dev'],
  },
  {
    slug: 'performance-optimizations',
    title: 'Performance: Lazy Loading, Code Splitting, and Image Optimization',
    date: '2025-10-12',
    excerpt: 'Practical tips to lower Largest Contentful Paint and improve Core Web Vitals.',
    content: `
## Core Web Vitals Explained

- LCP (Largest Contentful Paint): Time for main content to load
- FID (First Input Delay): How quickly page responds to interactions
- CLS (Cumulative Layout Shift): Visual stability

### Techniques

- ✅ Lazy load images and videos
- ✅ Split JS bundles
- ✅ Optimize images with next/image or modern formats (WebP, AVIF)

<Highlight code={\`import dynamic from 'next/dynamic';\`} language="js" />
`,
    categories: ['Performance', 'Optimization'],
  },
  {
    slug: 'semantic-html',
    title: 'Semantic HTML: Building Strong Foundations',
    date: '2023-10-09',
    excerpt: 'Use proper HTML elements to improve accessibility, SEO, and maintainability.',
    content: `
### Key Semantic Elements

- \<header>, \<footer>, \<main>, \<nav>
- \<article>, \<section>, \<aside>, \<figure>
- \<h1> to \<h6> hierarchy

### Benefits

- ✅ Better accessibility
- ✅ Improved SEO
- ✅ Easier for other developers to read
`,
    categories: ['Web Dev', 'HTML'],
  },
  {
    slug: 'responsive-design',
    title: 'Responsive Design: Mobile-First & Fluid Layouts',
    date: '2025-10-10',
    excerpt: 'Design websites that look great on any device using modern CSS techniques.',
    content: `
### Techniques

- ✅ CSS Grid & Flexbox
- ✅ Media queries
- ✅ Relative units (%, em, rem)

### Example

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
\`\`\`
`,
    categories: ['Web Dev', 'CSS'],
  },
  {
    slug: 'nextjs-best-practices',
    title: 'Next.js Best Practices: Optimized & Accessible Apps',
    date: '2025-10-09',
    excerpt: 'Tips to write performant, accessible, and maintainable Next.js applications.',
    content: `
- ✅ Use dynamic imports for large components
- ✅ Pre-render pages with getStaticProps or generateStaticParams
- ✅ Optimize images and fonts
- ✅ Add proper ARIA and semantic HTML
`,
    categories: ['Next.js', 'Performance'],
  },
  {
    slug: 'color-themes',
    title: 'Dynamic Color Themes & User Preferences',
    date: '2025-10-08',
    excerpt: 'Enhance UX by letting users toggle color themes with TailwindCSS and React.',
    content: `
### Implementation Tips

- ✅ Use React state for theme
- ✅ TailwindCSS for background/text gradients
- ✅ Persist user selection in localStorage
`,
    categories: ['UX', 'CSS', 'React'],
  },
  {
    slug: 'mdx-integration',
    title: 'MDX: Combining Markdown and React Components',
    date: '2025-10-07',
    excerpt: 'Write Markdown posts and embed React components seamlessly.',
    content: `
### Example

\`\`\`mdx
<Highlight code={"const x = 42;"} language="js" />
<Image src="/hero.png" alt="Hero image" width={800} height={400} />
\`\`\`
`,
    categories: ['MDX', 'React', 'Content'],
  },
  {
    slug: 'seo-accessibility',title: 'SEO & Accessibility: Win Both Worlds',
    date: '2025-10-06',
    excerpt: 'Optimize your content for search engines without compromising accessibility.',
    content: `
### Tips

- ✅ Semantic HTML
- ✅ Descriptive headings
- ✅ Alt text for images
- ✅ Meta descriptions and OpenGraph tags
`,
    categories: ['SEO', 'Accessibility'],
  },
];

export default posts;