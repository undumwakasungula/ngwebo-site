'use client';

import { useEffect, useState } from 'react';

const themeKey = 'ngwebo-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem(themeKey) as 'dark' | 'light' | null;
    const initial = stored ?? 'dark';
    document.documentElement.classList.toggle('light', initial === 'light');
    document.documentElement.classList.toggle('dark', initial === 'dark');
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
    window.localStorage.setItem(themeKey, next);
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center transition"
      style={{ border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)' }}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}