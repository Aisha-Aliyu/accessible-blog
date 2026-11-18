# Accessible Blog and Gallery

A blog and photo gallery built with Next.js, TypeScript and Tailwind CSS. I built it with accessibility as the main goal: it follows WCAG 2.1, works fully with a keyboard, and respects reduced motion settings.

Live demo: https://accessible-blog.vercel.app

## Accessibility

- A skip link so keyboard users can jump straight to the content.
- Visible focus outlines on every interactive element.
- Semantic HTML (`<main>`, `<article>`, `<header>`, `<nav>`, `<footer>`) with ARIA roles and labels on the landmarks.
- Colour themes that meet WCAG 2.1 AA contrast.
- Animations are turned down when `prefers-reduced-motion` is set.
- The gallery lightbox can be used entirely from the keyboard.

## Blog

- Posts are MDX files with frontmatter metadata.
- Code blocks are highlighted with `react-syntax-highlighter`.
- Posts can be filtered by category.
- There are eight posts so far.

## Gallery

- Lazy loaded images, optimised with the Next.js `Image` component.
- A lightbox for viewing each image full size.
- A responsive CSS grid.

## Themes and performance

There are three colour themes (default, pink and green) with smooth transitions between them. Pages are rendered on the server or at build time to keep loads fast.

## Run it locally

```bash
git clone https://github.com/Aisha-Aliyu/accessible-blog.git
cd accessible-blog
npm install
npm run dev
```

Then open http://localhost:3000.

## What I'd add next

Post search and tag filters, a dark theme, pagination for the gallery, comments and an RSS feed.

## Contact

Aisha Aliyu, full stack and frontend engineer

- Portfolio: https://humairah.netlify.app
- LinkedIn: https://www.linkedin.com/in/aisha-aliyu-dev
- GitHub: https://github.com/Aisha-Aliyu

License: MIT
