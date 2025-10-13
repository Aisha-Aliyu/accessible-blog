---
title: "Lazy Loading Images for Performance"
date: "2025-10-10"
categories: ["Performance", "Images"]
---

# Improve Load Speed With Lazy Loading

Images are often the heaviest elements on a page. Lazy loading ensures that images outside the viewport are loaded only when needed, reducing initial page load time.

## Why Lazy Loading Matters

A fast-loading site improves Core Web Vitals, SEO, and user retention. Without lazy loading, all images load at once, creating bottlenecks, especially on mobile networks.

<Highlight code={`<img src="/hero.jpg" loading="lazy" alt="Hero image" />`} language="html" />

## Techniques

1. Use native loading="lazy" in <img> tags.  
2. For background images, use Intersection Observer API.  
3. Optimize image sizes using modern formats like AVIF or WebP.

### Takeaway

Lazy loading is a simple, effective performance boost that improves the user experience dramatically.