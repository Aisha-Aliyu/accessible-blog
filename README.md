# Accessible Blog & Gallery

A modern, fully accessible blog and gallery platform built with Next.js and Tailwind CSS. This project emphasizes accessibility, responsiveness, performance optimization, and elegant UI/UX design. It includes a blog with MDX support, an interactive gallery, and a dynamic color theme toggle.

---

## Demo

[Live Demo](https://accessible-blog.vercel.app)

---

## Features

- Accessible Design  
  Semantic HTML, focus-visible styles, skip links, and screen reader support.

- Responsive Layout  
  Works across mobile, tablet, and desktop screens.

- Dynamic Blog  
  - Markdown/MDX-based posts  
  - Syntax highlighting with [`react-syntax-highlighter`](https://github.com/react-syntax-highlighter/react-syntax-highlighter)  
  - Categories and metadata support  
  - Eight fully fleshed blog posts

- Gallery  
  - Lazy-loaded images for performance  
  - Interactive Lightbox with keyboard support  
  - Responsive grid layout

- Color Theme Toggle  
  - Switch between default, pink, and green themes  
  - Smooth transitions and gradients

- Performance Optimized  
  - Image optimization with Next.js Image component  
  - Minimal re-renders and efficient loading  
  - Core Web Vitals-friendly

- Elegant UI/UX  
  - Animations, hover effects, gradients  
  - Modern typography and spacing  
  - Subtle motion respecting prefers-reduced-motion

---

## Technologies Used

- [Next.js](https://nextjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [React](https://reactjs.org/)  
- [MDX / gray-matter](https://github.com/jonschlinkert/gray-matter)  
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)  
- [Vercel](https://vercel.com/) for deployment  

---

## Folder Structure
src/
├─ app/
│   ├─ blog/          # Blog pages and [slug] routes
│   ├─ gallery/       # Gallery page
│   ├─ about/         # About page
│   ├─ layout.tsx     # Root layout with theme support
│   ├─ page.tsx       # Home page
│   └─ globals.css    # Global styles
├─ components/        # Reusable components (Header, Footer, Lightbox, Highlight)
└─ content/posts/     # MDX blog posts

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Aisha-Aliyu/accessible-blog.git
cd accessible-blog

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open http://localhost:3000 in your browser.

Deployment

This project is optimized for deployment on Vercel:
vercel deploy

Or visit https://vercel.com/new to connect your GitHub repository for automatic deployments.

⸻

Accessibility Features
 • Skip links for keyboard navigation
 • Focus-visible outlines for interactive elements
 • Semantic HTML elements (<main>, <header>, <footer>, <article>)
 • ARIA roles and labels for landmarks
 • Color contrast compliant themes
 • Supports reduced motion preference

⸻

Future Improvements
 • Dark mode toggle
 • Search and filter for blog posts
 • Infinite scroll or pagination for the gallery
 • Comment system for blog posts

⸻

Author

Aisha Aliyu — Software Engineer & Game Developer
 • Portfolio (https://humairah.vercel.app/)
 • LinkedIn (https://www.linkedin.com/in/aisha-aliyu-628b41376)
 • GitHub (https://github.com/Aisha-Aliyu)

⸻
