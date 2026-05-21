'use client';

import { useEffect, useState } from 'react';

const themeKey = 'ngwebo-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
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

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/25 bg-slate-900/70 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
