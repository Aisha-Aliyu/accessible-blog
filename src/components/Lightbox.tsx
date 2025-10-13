'use client';
import { useEffect } from 'react';
import Image from 'next/image';

type Img = { src: string; alt: string; width: number; height: number };

export default function Lightbox({ images, startIndex = 0, onClose }: { images: Img[]; startIndex?: number; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const img = images[startIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="mb-2 inline-flex items-center px-3 py-2 bg-white rounded focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
        >
          Close
        </button>

        <div className="bg-white p-4 rounded">
          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} style={{ width: '100%', height: 'auto' }} />
          <p className="mt-2 text-sm text-[var(--muted)]">{img.alt}</p>
        </div>
      </div>
    </div>
  );
}