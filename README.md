# 📝 Accessible Blog & Gallery

> A modern, fully accessible blog and gallery platform built with Next.js, TypeScript, and Tailwind CSS — emphasising WCAG compliance, performance optimisation, and elegant UI/UX.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge)](https://accessible-blog.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG%202.1-005A9C?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://accessible-blog.vercel.app/)

-----

## 🌐 Live Demo

👉 **[accessible-blog.vercel.app](https://accessible-blog.vercel.app/)**

-----

## 📖 About

A production-grade blog and gallery application that demonstrates deep knowledge of **web accessibility (WCAG 2.1)**, **performance engineering**, and **modern frontend architecture**. Built with Next.js App Router, TypeScript, MDX, and Tailwind CSS — with a strong focus on inclusive design principles that are often overlooked in typical portfolio projects.

-----

## ✨ Features

### ♿ Accessibility

- Skip navigation links for keyboard users
- Focus-visible outlines on all interactive elements
- Semantic HTML (`<main>`, `<article>`, `<header>`, `<nav>`, `<footer>`)
- ARIA roles and labels for all landmarks
- WCAG 2.1 colour contrast compliant themes
- Respects `prefers-reduced-motion` for animations

### 📰 Blog

- MDX-based posts with frontmatter metadata
- Syntax highlighting via `react-syntax-highlighter`
- Category filtering and post metadata support
- 8 fully written blog posts

### 🖼️ Gallery

- Lazy-loaded images for optimal performance
- Interactive lightbox with full keyboard navigation support
- Responsive CSS grid layout

### 🎨 UI & Performance

- 3-theme colour toggle (default, pink, green) with smooth transitions
- Next.js `Image` component for automatic image optimisation
- SSR/SSG for Core Web Vitals-friendly page loads
- Minimal re-renders and efficient component architecture
- Subtle animations with motion preference respect

-----

## 🛠️ Tech Stack

|Layer              |Technology              |
|-------------------|------------------------|
|Framework          |Next.js 14 (App Router) |
|Language           |TypeScript              |
|Styling            |Tailwind CSS            |
|Content            |MDX + gray-matter       |
|Syntax Highlighting|react-syntax-highlighter|
|Deployment         |Vercel                  |

-----

## 📂 Project Structure

```
src/
├─ app/
│  ├─ blog/            # Blog listing + [slug] dynamic routes
│  ├─ gallery/         # Gallery page with lightbox
│  ├─ about/           # About page
│  ├─ layout.tsx       # Root layout with theme provider
│  ├─ page.tsx         # Home page
│  └─ globals.css      # Global styles & theme variables
├─ components/         # Header, Footer, Lightbox, CodeHighlight
└─ content/posts/      # MDX blog post files
```

-----

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Aisha-Aliyu/accessible-blog.git
cd accessible-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open <http://localhost:3000> in your browser.

-----

## 🚀 Deployment

Deployed on **Vercel** with automatic deployments from `main`:

```bash
vercel deploy
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic CI/CD.

-----

## ♿ Accessibility Checklist

|Feature                            |Status|
|-----------------------------------|------|
|Skip navigation links              |✅     |
|Keyboard navigable gallery lightbox|✅     |
|Semantic HTML throughout           |✅     |
|ARIA roles & labels                |✅     |
|WCAG 2.1 AA colour contrast        |✅     |
|`prefers-reduced-motion` support   |✅     |
|Screen reader tested               |✅     |

-----

## 🗺️ Roadmap

- [ ] Dark mode toggle
- [ ] Blog post search and tag filtering
- [ ] Pagination / infinite scroll for gallery
- [ ] Comment system
- [ ] RSS feed

-----

## 👩‍💻 Author

**Aisha Aliyu** — Full-Stack & Frontend Engineer

- 🌐 Portfolio: [humairah.netlify.app](https://humairah.netlify.app)
- 💼 LinkedIn: [https://www.linkedin.com/in/aisha-aliyu-a9687b233](https://www.linkedin.com/in/aisha-aliyu-a9687b233)
- 🐙 GitHub: [@Aisha-Aliyu](https://github.com/Aisha-Aliyu)

-----

## 📜 License

This project is open source and available under the [MIT License](./LICENSE).