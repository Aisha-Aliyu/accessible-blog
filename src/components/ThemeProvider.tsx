'use client';

import { useEffect, useState } from 'react';
import Header from './Header';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'default' | 'pink' | 'green'>('default');

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main id="main" className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {children}
      </main>
    </>
  );
}