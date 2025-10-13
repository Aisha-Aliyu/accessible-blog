---
title: "Core Web Vitals Optimization"
date: "2025-10-12"
categories: ["Performance", "Web Dev"]
---

# Core Web Vitals: Measuring What Matters

Google's Core Web Vitals are a set of performance metrics that focus on user experience. They help you understand how fast your site loads, how responsive it is, and how visually stable it feels. Optimizing these metrics directly impacts user retention and SEO.

## Key Metrics

- Largest Contentful Paint (LCP): Measures how long it takes for the largest content element to appear.  
- First Input Delay (FID): Measures interactivity responsiveness.  
- Cumulative Layout Shift (CLS): Measures visual stability of your page.

<Highlight code={`<img src="/hero.jpg" loading="lazy" alt="Hero image" />`} language="html" />

### Tips for Optimization

1. Lazy load offscreen images.  
2. Minimize JavaScript blocking the main thread.  
3. Use font-display: swap for web fonts.  

### Takeaway

Focus on Core Web Vitals early to provide users with a fast, reliable experience.