'use client';

import Link from 'next/link';
import React from 'react';

type HeaderProps = {
  theme: 'default' | 'pink' | 'green';
  setTheme: React.Dispatch<React.SetStateAction<'default' | 'pink' | 'green'>>;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header
      role="banner"
      className="w-full border-b bg-[var(--bg)] shadow-sm transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
        >
          Aisha
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <ul className="flex gap-4">
            <li>
              <Link
                href="/blog"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)]"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Color toggle */}
          <div className="flex items-center gap-2 ml-4">
            <button
              className={`w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] ${
                theme === 'default' ? 'ring-2 ring-[var(--primary)]' : 'bg-white'
              }`}
              onClick={() => setTheme('default')}
              aria-label="Default Theme"
            />
            <button
              className={`w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] ${
                theme === 'pink' ? 'ring-2 ring-pink-500' : 'bg-pink-500'
              }`}
              onClick={() => setTheme('pink')}
              aria-label="Pink Theme"
            />
            <button
              className={`w-6 h-6 rounded-full border-2 border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] ${
                theme === 'green' ? 'ring-2 ring-green-500' : 'bg-green-500'
              }`}
              onClick={() => setTheme('green')}
              aria-label="Green Theme"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}