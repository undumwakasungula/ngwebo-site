'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#technology', label: 'Technology' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-slate-950/90 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:text-white"
            onClick={closeMenu}
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-glow">
              <Image src="/icon.png" alt="Ngwebo logo" fill className="object-cover" />
            </span>
            Ngwebo
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm text-slate-300 transition hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 bottom-[-4px] h-px scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden rounded-full border border-slate-500/30 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 sm:inline-flex"
            >
              Talk to us
            </Link>
            {/* Hamburger button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 md:hidden"
            >
              <span className="flex flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={closeMenu}
        />
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 flex-col bg-slate-950 border-l border-white/10 px-6 pt-24 pb-10 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-white/10 pt-8">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}