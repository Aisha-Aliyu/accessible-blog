---
title: "Optimizing Web Fonts"
date: "2022-10-06"
categories: ["Performance", "Typography"]
---

# Faster Web Fonts for Better Performance

Web fonts can block rendering and increase LCP. Optimizing font loading improves speed and user experience.

## Strategies

- Preload critical fonts.  
- Use variable fonts for fewer requests.  
- Apply font-display: swap to avoid invisible text.

<Highlight code={`<link rel="preload" href="/fonts/Inter-VariableFont_wght.ttf" as="font" type="font/ttf" crossorigin />`} language="html" />

### Takeaway

Optimized fonts reduce load times and improve the perceived performance of your website.