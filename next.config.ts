import withMDX from '@next/mdx';

const mdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig = mdx({
  reactStrictMode: true,

  // Add pageExtensions here for Next.js
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },

  experimental: {
    // @ts-expect-error: allowedDevOrigins is not in official Next.js types
    allowedDevOrigins: ['http://172.20.10.2:3000'],
  },
});

export default nextConfig;