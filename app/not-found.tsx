import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[65vh] place-items-center px-6 py-12">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-5 text-base leading-8 text-slate-300">
          The page you are looking for doesn’t exist or the URL is incorrect. Use the link below to return to the Ngwebo homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
