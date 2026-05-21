import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-glow">
      <div className="absolute inset-0">
        <Image src="/guidance.jpg" alt="Satellite guidance imagery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-300/80">Ngwebo</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02]">
          Advanced Guidance & Satellite Systems
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Mission-focused software, hardware, and cloud systems engineered for orbit, command, and operational clarity.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#vision"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/15 transition hover:bg-cyan-300"
          >
            Explore Our Vision
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-8 py-3 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-white"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
