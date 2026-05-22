import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-glow sm:rounded-[2rem]">
      <div className="absolute inset-0">
        <Image
          src="/guidance.jpg"
          alt="Satellite guidance imagery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[70vh] sm:px-8 lg:min-h-[78vh] lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-cyan-300/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Ngwebo
        </div>

        <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[1.05]">
          Advanced Guidance &{' '}
          <span className="text-cyan-300">Satellite Systems</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          Mission-focused software, hardware, and cloud systems engineered for orbit, command, and operational clarity.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="#vision"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-7 py-3 text-sm text-slate-100 backdrop-blur-sm transition hover:border-cyan-300 hover:text-white sm:w-auto"
          >
            Explore Our Vision
          </Link>
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-7 py-3 text-sm text-slate-100 backdrop-blur-sm transition hover:border-cyan-300 hover:text-white sm:w-auto"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}