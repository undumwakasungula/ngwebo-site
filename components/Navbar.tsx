import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#technology', label: 'Technology' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 bg-slate-950/85 px-4 py-4 backdrop-blur-xl transition-colors duration-300 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:text-white">
        <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-glow">
          <Image src="/icon.png" alt="Ngwebo logo" fill className="object-cover" />
        </span>
        Ngwebo
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative text-sm text-slate-300 transition hover:text-white"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="absolute inset-x-0 bottom-[-5px] h-px scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/contact"
          className="rounded-full border border-slate-500/30 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
