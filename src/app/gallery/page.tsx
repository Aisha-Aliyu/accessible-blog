'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Lightbox = dynamic(() => import('../../components/Lightbox'), { ssr: false });

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'City at golden hour with reflections',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    alt: 'Portrait with soft natural light',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
    alt: 'Forest path with sunlight',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fc',
    alt: 'Modern architecture building',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7f',
    alt: 'Sunset beach waves',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc4',
    alt: 'Mountain landscape with clouds',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fd',
    alt: 'City skyline at night',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb80',
    alt: 'Close-up portrait with natural light',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc5',
    alt: 'Waterfall in lush forest',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fe',
    alt: 'Desert dunes at sunrise',
    width: 1200,
    height: 800,
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="gallery-heading" className="max-w-5xl mx-auto p-6 md:p-8">
      <h1
        id="gallery-heading"
        className="text-3xl font-bold mb-6 text-gradient animate-fadeIn"
      >
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpenIndex(i)}
            className="block rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-blue-400"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={i === 0 ? 'eager' : 'lazy'}
              priority={i === 0}
              quality={75}
              style={{ width: '100%', height: 'auto' }}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={IMAGES}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}