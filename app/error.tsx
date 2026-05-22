'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="grid min-h-[65vh] place-items-center px-6 py-12">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Oops — unexpected error</h1>
        <p className="mt-5 text-base leading-8 text-slate-300">
          An unexpected error occurred while loading this page. You can try again or return to the homepage.
        </p>
        <p className="mt-4 text-sm text-slate-400">{error?.message}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-slate-900/80 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
