// next.config.ts
import withMDX from '@next/mdx';

const mdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig = mdx({
  reactStrictMode: true,

  // Page extensions including MDX
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true, // optional for deployment on Vercel without optimization
  },

  // Remove unsupported experimental option
  experimental: {
    // Next.js 15+ currently only supports official experimental flags
    // allowedDevOrigins is removed for production builds
  },
});

export default nextConfig;