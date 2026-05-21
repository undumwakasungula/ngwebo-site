import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <Image src="/icon.png" alt="Ngwebo logo" fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-slate-100">Ngwebo</p>
            <p className="mt-1 text-slate-400">© 2026 Ngwebo. Built for mission-scale guidance systems.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <Link href="mailto:contact@ngwebo.com" className="transition hover:text-white">
            contact@ngwebo.com
          </Link>
          <Link href="https://github.com/ngwebo" className="transition hover:text-white">
            GitHub
          </Link>
          <Link href="https://linkedin.com/company/ngwebo" className="transition hover:text-white">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
