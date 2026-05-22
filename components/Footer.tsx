import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl border border-white/10 bg-slate-950/90 p-6 sm:rounded-[2rem] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900 sm:h-12 sm:w-12 sm:rounded-2xl">
            <Image src="/icon.png" alt="Ngwebo logo" fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-slate-100">Ngwebo</p>
            <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
              &copy; 2026 Ngwebo. Built for mission-scale guidance systems.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <Link href="mailto:contactngwebo@gmail.com" className="text-xs transition hover:text-white sm:text-sm">
            contactngwebo@gmail.com
          </Link>
          <Link href="https://github.com/ngwebo" target="_blank" className="text-xs transition hover:text-white sm:text-sm">
            GitHub
          </Link>
          <Link href="https://linkedin.com/company/ngwebo" target="_blank" className="text-xs transition hover:text-white sm:text-sm">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}