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
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] transition"
            onClick={closeMenu}
            style={{ color: 'var(--text)' }}
          >
            <span className="relative h-9 w-9 overflow-hidden logo-icon-container">
              <Image src="/icon.png" alt="Ngwebo logo" fill sizes="36px" className="object-cover" />
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
                <span className="absolute inset-x-0 bottom-[-4px] h-px scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" style={{backgroundColor: 'var(--accent)'}} />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn btn-accent"
            >
              Talk to us
            </Link>
            {/* Hamburger button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center transition md:hidden nav-toggle"
              style={{ color: 'var(--text)' }}
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
                className="px-4 py-3 text-base text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-white/10 pt-8">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}